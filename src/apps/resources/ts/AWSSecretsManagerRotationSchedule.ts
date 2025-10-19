import {StringProperty} from "../StringProperty"


type Properties = {
  HostedRotationLambda?: {
    Runtime?: StringProperty
    KmsKeyArn?: StringProperty
    MasterSecretArn?: StringProperty
    RotationLambdaName?: StringProperty
    RotationType: StringProperty
    ExcludeCharacters?: StringProperty
    VpcSecurityGroupIds?: StringProperty
    MasterSecretKmsKeyArn?: StringProperty
    SuperuserSecretArn?: StringProperty
    SuperuserSecretKmsKeyArn?: StringProperty
    VpcSubnetIds?: StringProperty
  }
  SecretId: StringProperty
  Id?: StringProperty
  RotateImmediatelyOnUpdate?: boolean
  RotationLambdaARN?: StringProperty
  RotationRules?: {
    ScheduleExpression?: StringProperty
    Duration?: StringProperty
    AutomaticallyAfterDays?: number
  }
}

export const AWSSecretsManagerRotationSchedule = ({
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
      Type: 'AWS::SecretsManager::RotationSchedule',
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