import {StringProperty} from "../StringProperty"


type Properties = {
  Id?: StringProperty
  PoolName?: StringProperty
  Tags?: {
    Value?: StringProperty
    Key?: StringProperty
  }[]
}

export const AWSPinpointEmailDedicatedIpPool = ({
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
      Type: 'AWS::PinpointEmail::DedicatedIpPool',
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