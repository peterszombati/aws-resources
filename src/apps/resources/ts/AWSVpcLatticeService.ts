import {StringProperty} from "../StringProperty"


type Properties = {
  Arn?: StringProperty
  AuthType?: (string | "NONE" | "AWS_IAM")
  CreatedAt?: StringProperty
  DnsEntry?: {
    DomainName?: StringProperty
    HostedZoneId?: StringProperty
  }
  Id?: StringProperty
  LastUpdatedAt?: StringProperty
  Name?: StringProperty
  Status?: (string | "ACTIVE" | "CREATE_IN_PROGRESS" | "DELETE_IN_PROGRESS" | "CREATE_FAILED" | "DELETE_FAILED")
  CertificateArn?: StringProperty
  CustomDomainName?: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSVpcLatticeService = ({
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
      Type: 'AWS::VpcLattice::Service',
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