import { CloudFormation } from "@aws-sdk/client-cloudformation"

export async function getAllTypes(cf: CloudFormation) {
  let NextToken: string = ''
  const response = await cf.listTypes({
    Visibility: 'PUBLIC',
  })
  const TypeSummaries = response.TypeSummaries || []
  if (response.NextToken) {
    NextToken = response.NextToken
  }
  const added: Record<string, true> = {}
  while (!!NextToken) {
    const response = await cf.listTypes({
      Visibility: 'PUBLIC',
      NextToken,
    })
    if (response.NextToken) {
      NextToken = response.NextToken
    } else {
      NextToken = ''
    }

    const newTypes = response.TypeSummaries?.filter(i => !i.TypeName || !added[i.TypeName]) || []
    for (const i of newTypes) {
      if (i.TypeName) {
        added[i.TypeName] = true
      }
    }
    TypeSummaries.push(...newTypes)
  }
  return TypeSummaries
}