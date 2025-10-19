import {StringProperty} from "../StringProperty"


type Properties = {
  HostedZoneId: StringProperty
  Status: (string | "ACTIVE" | "INACTIVE")
  Name: StringProperty
  KeyManagementServiceArn: StringProperty
}

export const AWSRoute53KeySigningKey = ({
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
      Type: 'AWS::Route53::KeySigningKey',
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