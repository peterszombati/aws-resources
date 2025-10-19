import {StringProperty} from "../StringProperty"


type Properties = {
  ChallengeArn?: StringProperty
  ConnectorArn: StringProperty
  Tags?: Record<string, any>
}

export const AWSPCAConnectorSCEPChallenge = ({
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
      Type: 'AWS::PCAConnectorSCEP::Challenge',
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