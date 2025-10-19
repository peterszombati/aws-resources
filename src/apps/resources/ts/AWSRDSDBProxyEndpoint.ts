import {StringProperty} from "../StringProperty"


type Properties = {
  DBProxyEndpointName: StringProperty
  DBProxyEndpointArn?: StringProperty
  DBProxyName: StringProperty
  VpcId?: StringProperty
  VpcSecurityGroupIds?: StringProperty[]
  VpcSubnetIds: StringProperty[]
  Endpoint?: StringProperty
  EndpointNetworkType?: (string | "IPV4" | "IPV6" | "DUAL")
  TargetRole?: (string | "READ_WRITE" | "READ_ONLY")
  IsDefault?: boolean
  Tags?: {
    Key?: StringProperty
    Value?: StringProperty
  }[]
}

export const AWSRDSDBProxyEndpoint = ({
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
      Type: 'AWS::RDS::DBProxyEndpoint',
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