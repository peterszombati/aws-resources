import {StringProperty} from "../StringProperty"


type Properties = {
  Name: StringProperty
  Description?: StringProperty
  ResourceQuery?: {
    Type?: (string | "TAG_FILTERS_1_0" | "CLOUDFORMATION_STACK_1_0")
    Query?: {
      ResourceTypeFilters?: StringProperty[]
      StackIdentifier?: StringProperty
      TagFilters?: {
        Key?: StringProperty
        Values?: StringProperty[]
      }[]
    }
  }
  Tags?: {
    Key?: StringProperty
    Value?: StringProperty
  }[]
  Arn?: StringProperty
  Configuration?: {
    Type?: StringProperty
    Parameters?: {
      Name?: StringProperty
      Values?: StringProperty[]
    }[]
  }[]
  Resources?: StringProperty[]
}

export const AWSResourceGroupsGroup = ({
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
      Type: 'AWS::ResourceGroups::Group',
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
          "Fn::Sub": "stack:${AWS::StackName}:" + ResourceName
        }
      }
    }
  }
})