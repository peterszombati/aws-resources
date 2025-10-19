import {StringProperty} from "../StringProperty"


type Properties = {
  Arn?: StringProperty
  Id?: StringProperty
  Status?: StringProperty
  Name: StringProperty
  Comment?: StringProperty
  ImportSource?: {
    SourceType: StringProperty
    SourceArn: StringProperty
  }
}

export const AWSCloudFrontKeyValueStore = ({
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
      Type: 'AWS::CloudFront::KeyValueStore',
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