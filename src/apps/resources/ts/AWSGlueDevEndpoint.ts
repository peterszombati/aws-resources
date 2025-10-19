import {StringProperty} from "../StringProperty"


type Properties = {
  ExtraJarsS3Path?: StringProperty
  PublicKey?: StringProperty
  NumberOfNodes?: number
  Arguments?: Record<string, any>
  SubnetId?: StringProperty
  PublicKeys?: StringProperty[]
  SecurityGroupIds?: StringProperty[]
  RoleArn: StringProperty
  WorkerType?: StringProperty
  EndpointName?: StringProperty
  GlueVersion?: StringProperty
  ExtraPythonLibsS3Path?: StringProperty
  SecurityConfiguration?: StringProperty
  Id?: StringProperty
  NumberOfWorkers?: number
  Tags?: Record<string, any>
}

export const AWSGlueDevEndpoint = ({
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
      Type: 'AWS::Glue::DevEndpoint',
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