import {StringProperty} from "../StringProperty"


type Properties = {
  VerifiedAccessEndpointId?: StringProperty
  VerifiedAccessGroupId: StringProperty
  VerifiedAccessInstanceId?: StringProperty
  Status?: StringProperty
  SecurityGroupIds?: StringProperty[]
  NetworkInterfaceOptions?: {
    NetworkInterfaceId?: StringProperty
    Port?: number
    PortRanges?: {
      FromPort?: number
      ToPort?: number
    }[]
    Protocol?: StringProperty
  }
  LoadBalancerOptions?: {
    LoadBalancerArn?: StringProperty
    Port?: number
    PortRanges?: {
      FromPort?: number
      ToPort?: number
    }[]
    Protocol?: StringProperty
    SubnetIds?: StringProperty[]
  }
  RdsOptions?: {
    Protocol?: StringProperty
    Port?: number
    RdsDbInstanceArn?: StringProperty
    RdsDbClusterArn?: StringProperty
    RdsDbProxyArn?: StringProperty
    RdsEndpoint?: StringProperty
    SubnetIds?: StringProperty[]
  }
  CidrOptions?: {
    Cidr?: StringProperty
    PortRanges?: {
      FromPort?: number
      ToPort?: number
    }[]
    Protocol?: StringProperty
    SubnetIds?: StringProperty[]
  }
  EndpointType: StringProperty
  EndpointDomain?: StringProperty
  EndpointDomainPrefix?: StringProperty
  DeviceValidationDomain?: StringProperty
  DomainCertificateArn?: StringProperty
  AttachmentType: StringProperty
  ApplicationDomain?: StringProperty
  CreationTime?: StringProperty
  LastUpdatedTime?: StringProperty
  Description?: StringProperty
  PolicyDocument?: StringProperty
  PolicyEnabled?: boolean
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  SseSpecification?: {
    KmsKeyArn?: StringProperty
    CustomerManagedKeyEnabled?: boolean
  }
}

export const AWSEC2VerifiedAccessEndpoint = ({
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
      Type: 'AWS::EC2::VerifiedAccessEndpoint',
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