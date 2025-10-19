import {StringProperty} from "../StringProperty"


type Properties = {
  Id?: StringProperty
  Action: StringProperty
  EventSourceToken?: StringProperty
  FunctionName: StringProperty
  FunctionUrlAuthType?: (string | "AWS_IAM" | "NONE")
  InvokedViaFunctionUrl?: boolean
  Principal: StringProperty
  PrincipalOrgID?: StringProperty
  SourceAccount?: StringProperty
  SourceArn?: StringProperty
}

export const AWSLambdaPermission = ({
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
      Type: 'AWS::Lambda::Permission',
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