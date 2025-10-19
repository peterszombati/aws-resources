import {StringProperty} from "../StringProperty"


type Properties = {
  CreatedAt?: StringProperty
  EnabledRegions: StringProperty[]
  EnvironmentBlueprintIdentifier: StringProperty
  EnvironmentBlueprintId?: StringProperty
  UpdatedAt?: StringProperty
  RegionalParameters?: {
    Parameters?: Record<string, any>
    Region?: StringProperty
  }[]
  ProvisioningRoleArn?: StringProperty
  DomainId?: StringProperty
  ProvisioningConfigurations?: any[]
  DomainIdentifier: StringProperty
  EnvironmentRolePermissionBoundary?: StringProperty
  ManageAccessRoleArn?: StringProperty
}

export const AWSDataZoneEnvironmentBlueprintConfiguration = ({
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
      Type: 'AWS::DataZone::EnvironmentBlueprintConfiguration',
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