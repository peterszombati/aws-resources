import {StringProperty} from "../StringProperty"


type Properties = {
  Host?: StringProperty
  HypervisorArn?: StringProperty
  KmsKeyArn?: StringProperty
  LogGroupArn?: StringProperty
  Name?: StringProperty
  Password?: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  Username?: StringProperty
}

export const AWSBackupGatewayHypervisor = ({
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
      Type: 'AWS::BackupGateway::Hypervisor',
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