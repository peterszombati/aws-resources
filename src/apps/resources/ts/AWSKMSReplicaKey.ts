import {StringProperty} from "../StringProperty"


type Properties = {
  Description?: StringProperty
  PendingWindowInDays?: number
  KeyPolicy: Record<string, any> | StringProperty
  PrimaryKeyArn: StringProperty
  Enabled?: boolean
  KeyId?: StringProperty
  Arn?: StringProperty
  Tags?: {
    Value: StringProperty
    Key: StringProperty
  }[]
}

export const AWSKMSReplicaKey = ({
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
      Type: 'AWS::KMS::ReplicaKey',
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