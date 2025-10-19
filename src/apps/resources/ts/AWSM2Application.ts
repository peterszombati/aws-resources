import {StringProperty} from "../StringProperty"


type Properties = {
  ApplicationArn?: StringProperty
  ApplicationId?: StringProperty
  Definition?: any
  Description?: StringProperty
  EngineType: (string | "microfocus" | "bluage")
  KmsKeyId?: StringProperty
  Name: StringProperty
  RoleArn?: StringProperty
  Tags?: Record<string, any>
}

export const AWSM2Application = ({
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
      Type: 'AWS::M2::Application',
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