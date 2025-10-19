import {StringProperty} from "../StringProperty"


type Properties = {
  GlobalNetworkId: StringProperty
  CoreNetworkId?: StringProperty
  CoreNetworkArn?: StringProperty
  PolicyDocument?: Record<string, any>
  Description?: StringProperty
  CreatedAt?: StringProperty
  State?: StringProperty
  Segments?: {
    Name?: StringProperty
    EdgeLocations?: StringProperty[]
    SharedSegments?: StringProperty[]
  }[]
  NetworkFunctionGroups?: {
    Name?: StringProperty
    EdgeLocations?: StringProperty[]
    Segments?: {
      SendTo?: StringProperty[]
      SendVia?: StringProperty[]
    }
  }[]
  Edges?: {
    EdgeLocation?: StringProperty
    Asn?: number
    InsideCidrBlocks?: StringProperty[]
  }[]
  OwnerAccount?: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSNetworkManagerCoreNetwork = ({
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
      Type: 'AWS::NetworkManager::CoreNetwork',
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