import {StringProperty} from "../StringProperty"


type Properties = {
  Username?: StringProperty
  Password?: StringProperty
  Organization?: StringProperty
  Bucket?: StringProperty
  DbInstanceType?: (string | "db.influx.medium" | "db.influx.large" | "db.influx.xlarge" | "db.influx.2xlarge" | "db.influx.4xlarge" | "db.influx.8xlarge" | "db.influx.12xlarge" | "db.influx.16xlarge" | "db.influx.24xlarge")
  VpcSubnetIds?: StringProperty[]
  VpcSecurityGroupIds?: StringProperty[]
  PubliclyAccessible?: boolean
  DbStorageType?: (string | "InfluxIOIncludedT1" | "InfluxIOIncludedT2" | "InfluxIOIncludedT3")
  AllocatedStorage?: number
  DbParameterGroupIdentifier?: StringProperty
  Port?: number
  NetworkType?: (string | "IPV4" | "DUAL")
  LogDeliveryConfiguration?: {
    S3Configuration: {
      BucketName: StringProperty
      Enabled: boolean
    }
  }
  Status?: (string | "CREATING" | "AVAILABLE" | "DELETING" | "MODIFYING" | "UPDATING" | "UPDATING_DEPLOYMENT_TYPE" | "UPDATING_INSTANCE_TYPE" | "DELETED" | "FAILED")
  Arn?: StringProperty
  Name?: StringProperty
  AvailabilityZone?: StringProperty
  SecondaryAvailabilityZone?: StringProperty
  Endpoint?: StringProperty
  InfluxAuthParametersSecretArn?: StringProperty
  Id?: StringProperty
  DeploymentType?: (string | "SINGLE_AZ" | "WITH_MULTIAZ_STANDBY")
  Tags?: {
    Key: StringProperty
    Value?: StringProperty
  }[]
}

export const AWSTimestreamInfluxDBInstance = ({
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
      Type: 'AWS::Timestream::InfluxDBInstance',
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