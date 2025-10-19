import {StringProperty} from "../StringProperty"


type Properties = {
  Name: StringProperty
  AttachmentArn?: StringProperty
  Principals?: StringProperty[]
  Resources?: {
    EndpointId?: StringProperty
    Cidr?: StringProperty
    Region?: StringProperty
  }[]
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSGlobalAcceleratorCrossAccountAttachment = ({
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
      Type: 'AWS::GlobalAccelerator::CrossAccountAttachment',
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