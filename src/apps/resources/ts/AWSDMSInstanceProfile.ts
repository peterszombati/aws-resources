import {StringProperty} from "../StringProperty"


type Properties = {
  InstanceProfileArn?: StringProperty
  InstanceProfileIdentifier?: StringProperty
  AvailabilityZone?: StringProperty
  Description?: StringProperty
  KmsKeyArn?: StringProperty
  PubliclyAccessible?: boolean
  NetworkType?: (string | "IPV4" | "DUAL")
  InstanceProfileName?: StringProperty
  InstanceProfileCreationTime?: StringProperty
  SubnetGroupIdentifier?: StringProperty
  VpcSecurityGroups?: StringProperty[]
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSDMSInstanceProfile = ({
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
      Type: 'AWS::DMS::InstanceProfile',
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