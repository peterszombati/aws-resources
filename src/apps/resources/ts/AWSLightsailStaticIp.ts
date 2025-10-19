import {StringProperty} from "../StringProperty"


type Properties = {
  StaticIpName: StringProperty
  AttachedTo?: StringProperty
  IsAttached?: boolean
  IpAddress?: StringProperty
  StaticIpArn?: StringProperty
}

export const AWSLightsailStaticIp = ({
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
      Type: 'AWS::Lightsail::StaticIp',
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