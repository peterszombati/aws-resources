import {StringProperty} from "../StringProperty"


type Properties = {
  AccessGrantId?: StringProperty
  AccessGrantsLocationId: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  Permission: (string | "READ" | "WRITE" | "READWRITE")
  ApplicationArn?: StringProperty
  S3PrefixType?: (string | "Object")
  GrantScope?: StringProperty
  AccessGrantArn?: StringProperty
  Grantee: {
    GranteeType: (string | "IAM" | "DIRECTORY_USER" | "DIRECTORY_GROUP")
    GranteeIdentifier: StringProperty
  }
  AccessGrantsLocationConfiguration?: {
    S3SubPrefix: StringProperty
  }
}

export const AWSS3AccessGrant = ({
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
      Type: 'AWS::S3::AccessGrant',
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