import {StringProperty} from "../StringProperty"


type Properties = {
  Id?: StringProperty
  ActionOnFailure: StringProperty
  HadoopJarStep: {
    Args?: StringProperty[]
    Jar: StringProperty
    MainClass?: StringProperty
    StepProperties?: {
      Key?: StringProperty
      Value?: StringProperty
    }[]
  }
  JobFlowId: StringProperty
  Name: StringProperty
}

export const AWSEMRStep = ({
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
      Type: 'AWS::EMR::Step',
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