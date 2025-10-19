import {StringProperty} from "../StringProperty"


type Properties = {
  NetworkInsightsAccessScopeId?: StringProperty
  NetworkInsightsAccessScopeArn?: StringProperty
  CreatedDate?: StringProperty
  UpdatedDate?: StringProperty
  Tags?: {
    Key: StringProperty
    Value?: StringProperty
  }[]
  MatchPaths?: {
    Source?: {
      PacketHeaderStatement?: {
        SourceAddresses?: StringProperty[]
        DestinationAddresses?: StringProperty[]
        SourcePorts?: StringProperty[]
        DestinationPorts?: StringProperty[]
        SourcePrefixLists?: StringProperty[]
        DestinationPrefixLists?: StringProperty[]
        Protocols?: (string | "tcp" | "udp")[]
      }
      ResourceStatement?: {
        Resources?: StringProperty[]
        ResourceTypes?: StringProperty[]
      }
    }
    Destination?: {
      PacketHeaderStatement?: {
        SourceAddresses?: StringProperty[]
        DestinationAddresses?: StringProperty[]
        SourcePorts?: StringProperty[]
        DestinationPorts?: StringProperty[]
        SourcePrefixLists?: StringProperty[]
        DestinationPrefixLists?: StringProperty[]
        Protocols?: (string | "tcp" | "udp")[]
      }
      ResourceStatement?: {
        Resources?: StringProperty[]
        ResourceTypes?: StringProperty[]
      }
    }
    ThroughResources?: {
      ResourceStatement?: {
        Resources?: StringProperty[]
        ResourceTypes?: StringProperty[]
      }
    }[]
  }[]
  ExcludePaths?: {
    Source?: {
      PacketHeaderStatement?: {
        SourceAddresses?: StringProperty[]
        DestinationAddresses?: StringProperty[]
        SourcePorts?: StringProperty[]
        DestinationPorts?: StringProperty[]
        SourcePrefixLists?: StringProperty[]
        DestinationPrefixLists?: StringProperty[]
        Protocols?: (string | "tcp" | "udp")[]
      }
      ResourceStatement?: {
        Resources?: StringProperty[]
        ResourceTypes?: StringProperty[]
      }
    }
    Destination?: {
      PacketHeaderStatement?: {
        SourceAddresses?: StringProperty[]
        DestinationAddresses?: StringProperty[]
        SourcePorts?: StringProperty[]
        DestinationPorts?: StringProperty[]
        SourcePrefixLists?: StringProperty[]
        DestinationPrefixLists?: StringProperty[]
        Protocols?: (string | "tcp" | "udp")[]
      }
      ResourceStatement?: {
        Resources?: StringProperty[]
        ResourceTypes?: StringProperty[]
      }
    }
    ThroughResources?: {
      ResourceStatement?: {
        Resources?: StringProperty[]
        ResourceTypes?: StringProperty[]
      }
    }[]
  }[]
}

export const AWSEC2NetworkInsightsAccessScope = ({
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
      Type: 'AWS::EC2::NetworkInsightsAccessScope',
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