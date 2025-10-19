import {StringProperty} from "../StringProperty"


type Properties = {
  Id?: StringProperty
  Name: StringProperty
  Description?: StringProperty
  ResourceTypeList: StringProperty[]
  Resources?: StringProperty[]
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSFMSResourceSet = ({
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
      Type: 'AWS::FMS::ResourceSet',
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