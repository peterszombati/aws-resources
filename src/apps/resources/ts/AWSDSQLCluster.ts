import {StringProperty} from "../StringProperty"


type Properties = {
  DeletionProtectionEnabled?: boolean
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  ResourceArn?: StringProperty
  Identifier?: StringProperty
  CreationTime?: StringProperty
  Status?: StringProperty
  VpcEndpointServiceName?: StringProperty
  MultiRegionProperties?: {
    WitnessRegion?: StringProperty
    Clusters?: StringProperty[]
  }
  KmsEncryptionKey?: StringProperty
  EncryptionDetails?: {
    EncryptionStatus?: StringProperty
    EncryptionType?: StringProperty
    KmsKeyArn?: StringProperty
  }
}

export const AWSDSQLCluster = ({
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
      Type: 'AWS::DSQL::Cluster',
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