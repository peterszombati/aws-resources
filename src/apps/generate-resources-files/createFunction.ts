import {DescribeTypeOutput} from "@aws-sdk/client-cloudformation"
import { SchemaToInterface } from "../utils/SchemaToInterface"
import {SchemaToInterface_deep} from "../utils/SchemaToInterface_deep"

export function createFunction(
  describeTypeOutput: DescribeTypeOutput
) {
  const Schema = JSON.parse(describeTypeOutput.Schema || 'null')
  let definitions, _type
  try {
    const data = SchemaToInterface_deep({
      type: 'object',
      properties: Schema.properties,
      required: Schema.required,
    }, Schema.definitions)
    definitions = ''
    _type = data
  } catch (e) {
    const data = SchemaToInterface({
      type: 'object',
      properties: Schema.properties,
      required: Schema.required,
    }, Schema.definitions)
    if (typeof data == "string") {
      definitions = ''
      _type = data
    } else {
      definitions = data.definitions
      _type = data._type
    }
  }
  _type = _type.split('\n').join('\n')
  definitions = 'import {StringProperty} from "../StringProperty"' + (definitions ? '\n' + definitions : '')
  const functionName = describeTypeOutput.TypeName?.split('::').join('')
  if (!functionName) {
    throw new Error('invalid functionName')
  }
  return {
    functionName,
    filename: functionName + '.ts',
    body: `${definitions ? definitions + '\n\n' : ''}

type Properties = ${_type}

export const ${functionName} = ({
  ResourceName,
  DependsOn,
  Properties,
}: {
  ResourceName: string
  DependsOn?: string | string[]
  Properties: Record<string, any> & Properties
}) => ({
  Resources: {
    [ResourceName]: {
      Type: '${describeTypeOutput.TypeName}',
      DependsOn,
      Properties,
    }
  },
  Outputs: {
    [ResourceName]: {
      Value: {
        "Ref": ResourceName,
      },
      Export: {
        Name: {
          "Fn::Sub": "stack:\${AWS::StackName}:" + ResourceName
        }
      }
    }
  }
})`
  }
}