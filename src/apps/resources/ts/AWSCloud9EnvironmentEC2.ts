import {StringProperty} from "../StringProperty"


type Properties = {
  Repositories?: {
    RepositoryUrl: StringProperty
    PathComponent: StringProperty
  }[]
  OwnerArn?: StringProperty
  Description?: StringProperty
  ConnectionType?: StringProperty
  AutomaticStopTimeMinutes?: number
  ImageId: StringProperty
  SubnetId?: StringProperty
  Id?: StringProperty
  Arn?: StringProperty
  InstanceType: StringProperty
  Tags?: {
    Value: StringProperty
    Key: StringProperty
  }[]
  Name?: StringProperty
}

export const AWSCloud9EnvironmentEC2 = ({
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
      Type: 'AWS::Cloud9::EnvironmentEC2',
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