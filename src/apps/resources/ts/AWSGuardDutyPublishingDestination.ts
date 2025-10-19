import {StringProperty} from "../StringProperty"


type Properties = {
  Id?: StringProperty
  DetectorId: StringProperty
  DestinationType: StringProperty
  DestinationProperties: {
    DestinationArn?: StringProperty
    KmsKeyArn?: StringProperty
  }
  Status?: StringProperty
  PublishingFailureStartTimestamp?: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSGuardDutyPublishingDestination = ({
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
      Type: 'AWS::GuardDuty::PublishingDestination',
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