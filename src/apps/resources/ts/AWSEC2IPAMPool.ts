import {StringProperty} from "../StringProperty"


type Properties = {
  IpamPoolId?: StringProperty
  AddressFamily: StringProperty
  AllocationMinNetmaskLength?: number
  AllocationDefaultNetmaskLength?: number
  AllocationMaxNetmaskLength?: number
  AllocationResourceTags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  Arn?: StringProperty
  AutoImport?: boolean
  AwsService?: (string | "ec2")
  Description?: StringProperty
  IpamScopeId: StringProperty
  IpamScopeArn?: StringProperty
  IpamScopeType?: (string | "public" | "private")
  IpamArn?: StringProperty
  Locale?: StringProperty
  PoolDepth?: number
  ProvisionedCidrs?: {
    Cidr: StringProperty
  }[]
  PublicIpSource?: (string | "byoip" | "amazon")
  PubliclyAdvertisable?: boolean
  SourceIpamPoolId?: StringProperty
  SourceResource?: {
    ResourceId: StringProperty
    ResourceType: StringProperty
    ResourceRegion: StringProperty
    ResourceOwner: StringProperty
  }
  State?: (string | "create-in-progress" | "create-complete" | "modify-in-progress" | "modify-complete" | "delete-in-progress" | "delete-complete")
  StateMessage?: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSEC2IPAMPool = ({
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
      Type: 'AWS::EC2::IPAMPool',
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