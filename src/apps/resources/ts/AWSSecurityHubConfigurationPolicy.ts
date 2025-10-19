import {StringProperty} from "../StringProperty"


type Properties = {
  Arn?: StringProperty
  Name: StringProperty
  Description?: StringProperty
  ConfigurationPolicy: {
    SecurityHub?: {
      EnabledStandardIdentifiers?: StringProperty[]
      ServiceEnabled?: boolean
      SecurityControlsConfiguration?: {
        DisabledSecurityControlIdentifiers?: StringProperty[]
        EnabledSecurityControlIdentifiers?: StringProperty[]
        SecurityControlCustomParameters?: {
          Parameters?: Record<string, any>
          SecurityControlId?: StringProperty
        }[]
      }
    }
  }
  Id?: StringProperty
  CreatedAt?: StringProperty
  UpdatedAt?: StringProperty
  ServiceEnabled?: boolean
  Tags?: Record<string, any>
}

export const AWSSecurityHubConfigurationPolicy = ({
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
      Type: 'AWS::SecurityHub::ConfigurationPolicy',
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