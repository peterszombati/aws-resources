import {StringProperty} from "../StringProperty"


type Properties = {
  DomainId?: StringProperty
  DomainIdentifier: StringProperty
  GroupIdentifier: StringProperty
  GroupName?: StringProperty
  Id?: StringProperty
  Status?: (string | "ASSIGNED" | "NOT_ASSIGNED")
}

export const AWSDataZoneGroupProfile = ({
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
      Type: 'AWS::DataZone::GroupProfile',
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