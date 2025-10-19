import {StringProperty} from "../StringProperty"


type Properties = {
  OwnerInformation?: StringProperty
  Description?: StringProperty
  WindowId: StringProperty
  ResourceType: StringProperty
  Targets: {
    Values: StringProperty[]
    Key: StringProperty
  }[]
  Id?: StringProperty
  Name?: StringProperty
}

export const AWSSSMMaintenanceWindowTarget = ({
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
      Type: 'AWS::SSM::MaintenanceWindowTarget',
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