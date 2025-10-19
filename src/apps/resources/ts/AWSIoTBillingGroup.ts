import {StringProperty} from "../StringProperty"


type Properties = {
  Id?: StringProperty
  Arn?: StringProperty
  BillingGroupName?: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  BillingGroupProperties?: {
    BillingGroupDescription?: StringProperty
  }
}

export const AWSIoTBillingGroup = ({
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
      Type: 'AWS::IoT::BillingGroup',
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