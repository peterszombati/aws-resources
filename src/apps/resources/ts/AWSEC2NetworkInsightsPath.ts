import {StringProperty} from "../StringProperty"


type Properties = {
  NetworkInsightsPathId?: StringProperty
  NetworkInsightsPathArn?: StringProperty
  CreatedDate?: StringProperty
  SourceIp?: StringProperty
  FilterAtSource?: {
    SourceAddress?: StringProperty
    SourcePortRange?: {
      FromPort?: number
      ToPort?: number
    }
    DestinationAddress?: StringProperty
    DestinationPortRange?: {
      FromPort?: number
      ToPort?: number
    }
  }
  FilterAtDestination?: {
    SourceAddress?: StringProperty
    SourcePortRange?: {
      FromPort?: number
      ToPort?: number
    }
    DestinationAddress?: StringProperty
    DestinationPortRange?: {
      FromPort?: number
      ToPort?: number
    }
  }
  DestinationIp?: StringProperty
  Source: StringProperty
  Destination?: StringProperty
  SourceArn?: StringProperty
  DestinationArn?: StringProperty
  Protocol: (string | "tcp" | "udp")
  DestinationPort?: number
  Tags?: {
    Key: StringProperty
    Value?: StringProperty
  }[]
}

export const AWSEC2NetworkInsightsPath = ({
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
      Type: 'AWS::EC2::NetworkInsightsPath',
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