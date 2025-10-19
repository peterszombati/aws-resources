import {StringProperty} from "../StringProperty"


type Properties = {
  Id?: StringProperty
  Cores: {
    SyncShadow?: boolean
    ThingArn: StringProperty
    Id: StringProperty
    CertificateArn: StringProperty
  }[]
  CoreDefinitionId: StringProperty
}

export const AWSGreengrassCoreDefinitionVersion = ({
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
      Type: 'AWS::Greengrass::CoreDefinitionVersion',
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