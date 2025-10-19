import {StringProperty} from "../StringProperty"


type Properties = {
  DomainName: StringProperty
  EventStreamName: StringProperty
  Uri: StringProperty
  EventStreamArn?: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  CreatedAt?: StringProperty
  State?: (string | "RUNNING" | "STOPPED")
  DestinationDetails?: {
    Uri: StringProperty
    Status: (string | "HEALTHY" | "UNHEALTHY")
  }
}

export const AWSCustomerProfilesEventStream = ({
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
      Type: 'AWS::CustomerProfiles::EventStream',
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