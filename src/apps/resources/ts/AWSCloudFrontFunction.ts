import {StringProperty} from "../StringProperty"


type Properties = {
  AutoPublish?: boolean
  FunctionARN?: StringProperty
  FunctionCode: StringProperty
  FunctionConfig: {
    Comment: StringProperty
    Runtime: StringProperty
    KeyValueStoreAssociations?: {
      KeyValueStoreARN: StringProperty
    }[]
  }
  FunctionMetadata?: {
    FunctionARN?: StringProperty
  }
  Name: StringProperty
  Stage?: StringProperty
}

export const AWSCloudFrontFunction = ({
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
      Type: 'AWS::CloudFront::Function',
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