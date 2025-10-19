import {StringProperty} from "../StringProperty"


type Properties = {
  Arn?: StringProperty
  Name?: StringProperty
  DefinitionString?: StringProperty
  RoleArn: StringProperty
  StateMachineName?: StringProperty
  StateMachineType?: (string | "STANDARD" | "EXPRESS")
  StateMachineRevisionId?: StringProperty
  LoggingConfiguration?: {
    Level?: (string | "ALL" | "ERROR" | "FATAL" | "OFF")
    IncludeExecutionData?: boolean
    Destinations?: {
      CloudWatchLogsLogGroup?: {
        LogGroupArn?: StringProperty
      }
    }[]
  }
  TracingConfiguration?: {
    Enabled?: boolean
  }
  EncryptionConfiguration?: {
    KmsKeyId?: StringProperty
    KmsDataKeyReusePeriodSeconds?: number
    Type: (string | "CUSTOMER_MANAGED_KMS_KEY" | "AWS_OWNED_KEY")
  }
  DefinitionS3Location?: {
    Bucket: StringProperty
    Key: StringProperty
    Version?: StringProperty
  }
  DefinitionSubstitutions?: Record<string, any>
  Definition?: Record<string, any>
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSStepFunctionsStateMachine = ({
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
      Type: 'AWS::StepFunctions::StateMachine',
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