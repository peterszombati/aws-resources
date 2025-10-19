import {StringProperty} from "../StringProperty"


type Properties = {
  Arn?: StringProperty
  ContainerProvider: {
    Type: StringProperty
    Id: StringProperty
    Info: {
      EksInfo: {
        Namespace: StringProperty
      }
    }
  }
  Id?: StringProperty
  Name: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  SecurityConfigurationId?: StringProperty
}

export const AWSEMRContainersVirtualCluster = ({
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
      Type: 'AWS::EMRContainers::VirtualCluster',
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