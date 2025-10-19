import {StringProperty} from "../StringProperty"


type Properties = {
  Arn?: StringProperty
  CreatedAt?: StringProperty
  Id?: StringProperty
  LastUpdatedAt?: StringProperty
  Name?: StringProperty
  AuthType?: (string | "NONE" | "AWS_IAM")
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  SharingConfig?: {
    enabled: boolean
  }
}

export const AWSVpcLatticeServiceNetwork = ({
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
      Type: 'AWS::VpcLattice::ServiceNetwork',
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