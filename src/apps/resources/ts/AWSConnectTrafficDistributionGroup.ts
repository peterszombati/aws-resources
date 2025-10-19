import {StringProperty} from "../StringProperty"


type Properties = {
  InstanceArn: StringProperty
  TrafficDistributionGroupArn?: StringProperty
  Description?: StringProperty
  Name: StringProperty
  Status?: (string | "CREATION_IN_PROGRESS" | "ACTIVE" | "CREATION_FAILED" | "PENDING_DELETION" | "DELETION_FAILED" | "UPDATE_IN_PROGRESS")
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  IsDefault?: boolean
}

export const AWSConnectTrafficDistributionGroup = ({
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
      Type: 'AWS::Connect::TrafficDistributionGroup',
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