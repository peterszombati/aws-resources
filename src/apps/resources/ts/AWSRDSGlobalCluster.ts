import {StringProperty} from "../StringProperty"


type Properties = {
  Engine?: (string | "aurora" | "aurora-mysql" | "aurora-postgresql")
  Tags?: {
    Key: StringProperty
    Value?: StringProperty
  }[]
  EngineLifecycleSupport?: StringProperty
  EngineVersion?: StringProperty
  DeletionProtection?: boolean
  GlobalClusterIdentifier?: StringProperty
  SourceDBClusterIdentifier?: StringProperty
  StorageEncrypted?: boolean
  GlobalEndpoint?: {
    Address?: StringProperty
  }
}

export const AWSRDSGlobalCluster = ({
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
      Type: 'AWS::RDS::GlobalCluster',
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