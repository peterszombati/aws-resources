import {StringProperty} from "../StringProperty"


type Properties = {
  CreatedAt?: StringProperty
  CreatedBy?: StringProperty
  Description?: StringProperty
  DomainId?: StringProperty
  DomainIdentifier?: StringProperty
  DomainUnitId?: StringProperty
  DomainUnitIdentifier?: StringProperty
  EnvironmentConfigurations?: {
    Name: StringProperty
    EnvironmentConfigurationId?: StringProperty
    EnvironmentBlueprintId: StringProperty
    Description?: StringProperty
    DeploymentMode?: (string | "ON_CREATE" | "ON_DEMAND")
    ConfigurationParameters?: {
      SsmPath?: StringProperty
      ParameterOverrides?: {
        Name?: StringProperty
        Value?: StringProperty
        IsEditable?: boolean
      }[]
      ResolvedParameters?: {
        Name?: StringProperty
        Value?: StringProperty
        IsEditable?: boolean
      }[]
    }
    AwsAccount?: {
      AwsAccountId: StringProperty
    }
    AwsRegion: {
      RegionName: StringProperty
    }
    DeploymentOrder?: number
  }[]
  Id?: StringProperty
  Identifier?: StringProperty
  LastUpdatedAt?: StringProperty
  Name: StringProperty
  Status?: (string | "ENABLED" | "DISABLED")
}

export const AWSDataZoneProjectProfile = ({
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
      Type: 'AWS::DataZone::ProjectProfile',
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