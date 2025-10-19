import {StringProperty} from "../StringProperty"


type Properties = {
  Name: StringProperty
  Description?: StringProperty
  ServerProperties: StringProperty
  KafkaVersionsList?: StringProperty[]
  Arn?: StringProperty
  LatestRevision?: {
    CreationTime?: StringProperty
    Description?: StringProperty
    Revision?: number
  }
}

export const AWSMSKConfiguration = ({
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
      Type: 'AWS::MSK::Configuration',
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