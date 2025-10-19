import {StringProperty} from "../StringProperty"


type Properties = {
  AcceptTermsAndConditions: boolean
  PublisherId?: StringProperty
  ConnectionArn?: StringProperty
  PublisherStatus?: (string | "VERIFIED" | "UNVERIFIED")
  PublisherProfile?: StringProperty
  IdentityProvider?: (string | "AWS_Marketplace" | "GitHub" | "Bitbucket")
}

export const AWSCloudFormationPublisher = ({
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
      Type: 'AWS::CloudFormation::Publisher',
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