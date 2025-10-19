import {StringProperty} from "../StringProperty"


type Properties = {
  AssetFormsInput?: {
    FormName: StringProperty
    TypeIdentifier?: StringProperty
    TypeRevision?: StringProperty
    Content?: StringProperty
  }[]
  ConnectionId?: StringProperty
  ConnectionIdentifier?: StringProperty
  CreatedAt?: StringProperty
  Description?: StringProperty
  DomainId?: StringProperty
  DomainIdentifier: StringProperty
  EnableSetting?: (string | "ENABLED" | "DISABLED")
  EnvironmentId?: StringProperty
  EnvironmentIdentifier?: StringProperty
  Id?: StringProperty
  Configuration?: any
  LastRunAssetCount?: number
  LastRunAt?: StringProperty
  LastRunStatus?: StringProperty
  Name: StringProperty
  ProjectId?: StringProperty
  ProjectIdentifier: StringProperty
  PublishOnImport?: boolean
  Recommendation?: {
    EnableBusinessNameGeneration?: boolean
  }
  Schedule?: {
    Timezone?: StringProperty
    Schedule?: StringProperty
  }
  Status?: (string | "CREATING" | "FAILED_CREATION" | "READY" | "UPDATING" | "FAILED_UPDATE" | "RUNNING" | "DELETING" | "FAILED_DELETION")
  Type: StringProperty
  UpdatedAt?: StringProperty
}

export const AWSDataZoneDataSource = ({
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
      Type: 'AWS::DataZone::DataSource',
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