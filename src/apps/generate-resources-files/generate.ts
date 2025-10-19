import {getAllTypes} from "./getAllTypes"
import {CloudFormation, DescribeTypeCommandOutput} from "@aws-sdk/client-cloudformation"
import * as fs from "fs"
import * as path from "path"
import {sleep} from "./../utils/sleep"
import {createFunction} from "./createFunction"
import {cwd} from "../../cwd";

export async function generate(cf: CloudFormation) {
  const TypeSummaries = (await getAllTypes(cf)).filter(i => i.Type === 'RESOURCE')
  fs.writeFileSync(
    path.join(cwd, 'src', 'apps', 'resources', '_getAllTypes.json'),
    JSON.stringify(TypeSummaries, null, '\t')
  )
  let i = 0
  const status = (TypeName: string | undefined, result: any, error: any) => {
    if (error && error?.['$metadata']?.httpStatusCode !== 404) {
      console.error(error)
      process.exit(1)
    }
    i += 1
    console.log(`${i}/${TypeSummaries.length}: ${TypeName}`)
  }

  const result: { status: string, value?: DescribeTypeCommandOutput, reason?: any }[] = await Promise.allSettled(TypeSummaries.map(async (v, i) => {
    await sleep(400 * i)
    return cf.describeType({
      Type: 'RESOURCE',
      TypeName: v.TypeName,
    }).catch(e => {
      status(v.TypeName, null, e)
      throw e
    }).then(r => {
      status(v.TypeName, r, null)
      return r
    })
  }))

  const funcs: { functionName: string, filename: string }[] = []

  function generateFunction(value: DescribeTypeCommandOutput) {
    const {functionName, filename, body} = createFunction(value)
    fs.writeFileSync(
      path.join(cwd, 'src', 'apps', 'resources', 'json', filename.replace('.ts', '.json')),
      value.Schema || ''
    )
    fs.writeFileSync(
      path.join(cwd, 'src', 'apps', 'resources', 'ts', filename),
      body
    )
    funcs.push({functionName, filename})
  }

  for (const i of result) {
    if (i.reason && i.reason['$metadata'].httpStatusCode !== 404) {
      console.error(i.reason)
      process.exit(1)
    }
  }
  fs.mkdirSync(path.join(cwd, 'src', 'apps', 'resources', 'json'))
  fs.mkdirSync(path.join(cwd, 'src', 'apps', 'resources', 'ts'))
  for (const i of result) {
    if (i.reason && i.reason['$metadata'].httpStatusCode === 404) {
      continue
    }
    await sleep(100)
    i.value && generateFunction(i.value)
  }

  fs.writeFileSync(
    path.join(cwd, 'src', 'apps', 'resources', 'Resources.ts'),

    `${funcs.map(i => `import {${i.functionName}} from "./ts/${i.filename.replace('.ts', '')}"`).join('\n')}

export default {
${funcs.map(i => `  ${i.functionName}`).join(',\n')}
}`)
  fs.writeFileSync(
    path.join(cwd, 'src', 'apps', 'resources', 'StringProperty.ts'),
    `export type StringProperty = string | { 'Fn::Join': [ string, StringProperty[] ]} | { Ref: string } | { 'Fn::GetAtt': string } | { 'Fn::ImportValue': StringProperty } | { 'Fn::Sub': string | [ string, Record<string, StringProperty>] }`
  )
}