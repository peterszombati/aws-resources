import {StringProperty} from "../StringProperty"


type Properties = {
  SnapshotName: StringProperty
  NamespaceName?: StringProperty
  OwnerAccount?: StringProperty
  RetentionPeriod?: number
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  Snapshot?: {
    NamespaceArn?: StringProperty
    NamespaceName?: StringProperty
    SnapshotName?: StringProperty
    SnapshotCreateTime?: StringProperty
    Status?: (string | "AVAILABLE" | "CREATING" | "DELETED" | "CANCELLED" | "FAILED" | "COPYING")
    AdminUsername?: StringProperty
    KmsKeyId?: StringProperty
    OwnerAccount?: StringProperty
    RetentionPeriod?: number
    SnapshotArn?: StringProperty
  }
}

export const AWSRedshiftServerlessSnapshot = ({
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
      Type: 'AWS::RedshiftServerless::Snapshot',
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