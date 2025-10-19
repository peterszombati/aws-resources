import {StringProperty} from "../StringProperty"


type Properties = {
  Arn?: StringProperty
  Config?: {
    Port?: number
    Protocol?: (string | "HTTP" | "HTTPS" | "TCP")
    ProtocolVersion?: (string | "HTTP1" | "HTTP2" | "GRPC")
    IpAddressType?: (string | "IPV4" | "IPV6")
    LambdaEventStructureVersion?: (string | "V1" | "V2")
    VpcIdentifier?: StringProperty
    HealthCheck?: {
      Enabled?: boolean
      Protocol?: (string | "HTTP" | "HTTPS")
      ProtocolVersion?: (string | "HTTP1" | "HTTP2")
      Port?: number
      Path?: StringProperty
      HealthCheckIntervalSeconds?: number
      HealthCheckTimeoutSeconds?: number
      HealthyThresholdCount?: number
      UnhealthyThresholdCount?: number
      Matcher?: {
        HttpCode: StringProperty
      }
    }
  }
  CreatedAt?: StringProperty
  Id?: StringProperty
  LastUpdatedAt?: StringProperty
  Name?: StringProperty
  Status?: (string | "CREATE_IN_PROGRESS" | "ACTIVE" | "DELETE_IN_PROGRESS" | "CREATE_FAILED" | "DELETE_FAILED")
  Type: (string | "IP" | "LAMBDA" | "INSTANCE" | "ALB")
  Targets?: {
    Id: StringProperty
    Port?: number
  }[]
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSVpcLatticeTargetGroup = ({
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
      Type: 'AWS::VpcLattice::TargetGroup',
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