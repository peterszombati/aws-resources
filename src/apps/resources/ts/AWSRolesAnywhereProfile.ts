import {StringProperty} from "../StringProperty"


type Properties = {
  DurationSeconds?: number
  Enabled?: boolean
  ManagedPolicyArns?: StringProperty[]
  Name: StringProperty
  ProfileArn?: StringProperty
  ProfileId?: StringProperty
  RequireInstanceProperties?: boolean
  RoleArns: StringProperty[]
  SessionPolicy?: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  AttributeMappings?: {
    MappingRules: {
      Specifier: StringProperty
    }[]
    CertificateField: (string | "x509Subject" | "x509Issuer" | "x509SAN")
  }[]
  AcceptRoleSessionName?: boolean
}

export const AWSRolesAnywhereProfile = ({
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
      Type: 'AWS::RolesAnywhere::Profile',
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