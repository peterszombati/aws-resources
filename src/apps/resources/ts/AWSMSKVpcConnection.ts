import {StringProperty} from "../StringProperty"


type Properties = {
  Arn?: StringProperty
  Authentication: (string | "SASL_IAM" | "SASL_SCRAM" | "TLS")
  ClientSubnets: StringProperty[]
  TargetClusterArn: StringProperty
  SecurityGroups: StringProperty[]
  Tags?: Record<string, any>
  VpcId: StringProperty
}

export const AWSMSKVpcConnection = ({
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
      Type: 'AWS::MSK::VpcConnection',
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