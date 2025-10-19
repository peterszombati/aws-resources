import {StringProperty} from "../StringProperty"


type Properties = {
  LatestVersionArn?: StringProperty
  Id?: StringProperty
  Arn?: StringProperty
  Name: StringProperty
  InitialVersion?: {
    Cores: {
      SyncShadow?: boolean
      ThingArn: StringProperty
      Id: StringProperty
      CertificateArn: StringProperty
    }[]
  }
  Tags?: Record<string, any>
}

export const AWSGreengrassCoreDefinition = ({
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
      Type: 'AWS::Greengrass::CoreDefinition',
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