import {StringProperty} from "../StringProperty"


type Properties = {
  AwsLocation?: {
    AccessRole?: StringProperty
    AwsAccountId?: StringProperty
    AwsRegion?: StringProperty
    IamConnectionId?: StringProperty
  }
  ConnectionId?: StringProperty
  Description?: StringProperty
  DomainId?: StringProperty
  DomainIdentifier: StringProperty
  DomainUnitId?: StringProperty
  EnvironmentId?: StringProperty
  EnvironmentIdentifier: StringProperty
  EnvironmentUserRole?: StringProperty
  Name: StringProperty
  ProjectId?: StringProperty
  Props?: any
  Type?: StringProperty
}

export const AWSDataZoneConnection = ({
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
      Type: 'AWS::DataZone::Connection',
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