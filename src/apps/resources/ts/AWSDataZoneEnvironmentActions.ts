import {StringProperty} from "../StringProperty"


type Properties = {
  Description?: StringProperty
  DomainId?: StringProperty
  DomainIdentifier?: StringProperty
  EnvironmentId?: StringProperty
  EnvironmentIdentifier?: StringProperty
  Id?: StringProperty
  Identifier?: StringProperty
  Name: StringProperty
  Parameters?: {
    Uri?: StringProperty
  }
}

export const AWSDataZoneEnvironmentActions = ({
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
      Type: 'AWS::DataZone::EnvironmentActions',
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