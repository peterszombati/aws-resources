import {StringProperty} from "../StringProperty"


type Properties = {
  Arn?: StringProperty
  ClusterName: StringProperty
  VpcConfigs: {
    SecurityGroups?: StringProperty[]
    SubnetIds: StringProperty[]
  }[]
  ClientAuthentication: {
    Sasl: {
      Iam: {
        Enabled: boolean
      }
    }
  }
  Tags?: Record<string, any>
}

export const AWSMSKServerlessCluster = ({
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
      Type: 'AWS::MSK::ServerlessCluster',
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