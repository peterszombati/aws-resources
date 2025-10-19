import {StringProperty} from "../StringProperty"


type Properties = {
  DnsName?: StringProperty
  LicenseEndpointId?: StringProperty
  SecurityGroupIds: StringProperty[]
  Status?: (string | "CREATE_IN_PROGRESS" | "DELETE_IN_PROGRESS" | "READY" | "NOT_READY")
  StatusMessage?: StringProperty
  SubnetIds: StringProperty[]
  VpcId: StringProperty
  Arn?: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSDeadlineLicenseEndpoint = ({
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
      Type: 'AWS::Deadline::LicenseEndpoint',
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