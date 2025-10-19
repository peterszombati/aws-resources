import {StringProperty} from "../StringProperty"


type Properties = {
  ARecord?: StringProperty
  TrafficPolicyId: StringProperty
  IngressPointConfiguration?: any
  IngressPointArn?: StringProperty
  IngressPointId?: StringProperty
  IngressPointName?: StringProperty
  NetworkConfiguration?: any
  RuleSetId: StringProperty
  Status?: (string | "PROVISIONING" | "DEPROVISIONING" | "UPDATING" | "ACTIVE" | "CLOSED" | "FAILED")
  StatusToUpdate?: (string | "ACTIVE" | "CLOSED")
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  Type: (string | "OPEN" | "AUTH")
}

export const AWSSESMailManagerIngressPoint = ({
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
      Type: 'AWS::SES::MailManagerIngressPoint',
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