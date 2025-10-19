import {StringProperty} from "../StringProperty"


type Properties = {
  CreatedAt?: StringProperty
  CreatedBy?: StringProperty
  Description?: StringProperty
  DomainId?: StringProperty
  DomainIdentifier: StringProperty
  DomainUnitId?: StringProperty
  GlossaryTerms?: StringProperty[]
  Id?: StringProperty
  LastUpdatedAt?: StringProperty
  Name: StringProperty
  ProjectProfileId?: StringProperty
  ProjectProfileVersion?: StringProperty
  ProjectStatus?: (string | "ACTIVE" | "MOVING" | "DELETING" | "DELETE_FAILED" | "UPDATING" | "UPDATE_FAILED")
  UserParameters?: {
    EnvironmentId?: StringProperty
    EnvironmentConfigurationName?: StringProperty
    EnvironmentParameters?: {
      Name?: StringProperty
      Value?: StringProperty
    }[]
  }[]
}

export const AWSDataZoneProject = ({
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
      Type: 'AWS::DataZone::Project',
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