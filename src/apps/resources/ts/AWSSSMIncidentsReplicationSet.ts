import {StringProperty} from "../StringProperty"


type Properties = {
  Arn?: StringProperty
  Regions: {
    RegionName?: StringProperty
    RegionConfiguration?: {
      SseKmsKeyId: StringProperty
    }
  }[]
  DeletionProtected?: boolean
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSSSMIncidentsReplicationSet = ({
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
      Type: 'AWS::SSMIncidents::ReplicationSet',
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