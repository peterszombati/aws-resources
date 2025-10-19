import {StringProperty} from "../StringProperty"


type Properties = {
  Id: StringProperty
  Arn?: StringProperty
  DomainName?: StringProperty
  Authorization?: {
    CdnIdentifierSecret: StringProperty
    SecretsRoleArn: StringProperty
  }
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  EgressAccessLogs?: {
    LogGroupName?: StringProperty
  }
}

export const AWSMediaPackagePackagingGroup = ({
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
      Type: 'AWS::MediaPackage::PackagingGroup',
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