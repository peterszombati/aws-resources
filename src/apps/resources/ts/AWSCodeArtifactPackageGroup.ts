import {StringProperty} from "../StringProperty"


type Properties = {
  DomainName: StringProperty
  DomainOwner?: StringProperty
  Pattern: StringProperty
  ContactInfo?: StringProperty
  Description?: StringProperty
  OriginConfiguration?: {
    Restrictions: {
      Publish?: {
        RestrictionMode: (string | "ALLOW" | "BLOCK" | "ALLOW_SPECIFIC_REPOSITORIES" | "INHERIT")
        Repositories?: StringProperty[]
      }
      ExternalUpstream?: {
        RestrictionMode: (string | "ALLOW" | "BLOCK" | "ALLOW_SPECIFIC_REPOSITORIES" | "INHERIT")
        Repositories?: StringProperty[]
      }
      InternalUpstream?: {
        RestrictionMode: (string | "ALLOW" | "BLOCK" | "ALLOW_SPECIFIC_REPOSITORIES" | "INHERIT")
        Repositories?: StringProperty[]
      }
    }
  }
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  Arn?: StringProperty
}

export const AWSCodeArtifactPackageGroup = ({
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
      Type: 'AWS::CodeArtifact::PackageGroup',
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