import {StringProperty} from "../StringProperty"


type Properties = {
  VerifiedAccessGroupId?: StringProperty
  VerifiedAccessInstanceId: StringProperty
  VerifiedAccessGroupArn?: StringProperty
  Owner?: StringProperty
  CreationTime?: StringProperty
  LastUpdatedTime?: StringProperty
  Description?: StringProperty
  PolicyDocument?: StringProperty
  PolicyEnabled?: boolean
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  SseSpecification?: {
    KmsKeyArn?: StringProperty
    CustomerManagedKeyEnabled?: boolean
  }
}

export const AWSEC2VerifiedAccessGroup = ({
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
      Type: 'AWS::EC2::VerifiedAccessGroup',
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