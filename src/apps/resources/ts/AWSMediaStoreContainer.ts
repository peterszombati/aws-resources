import {StringProperty} from "../StringProperty"


type Properties = {
  Policy?: StringProperty
  MetricPolicy?: {
    ContainerLevelMetrics: StringProperty
    MetricPolicyRules?: {
      ObjectGroupName: StringProperty
      ObjectGroup: StringProperty
    }[]
  }
  Endpoint?: StringProperty
  ContainerName: StringProperty
  CorsPolicy?: {
    AllowedMethods?: StringProperty[]
    AllowedOrigins?: StringProperty[]
    ExposeHeaders?: StringProperty[]
    MaxAgeSeconds?: number
    AllowedHeaders?: StringProperty[]
  }[]
  LifecyclePolicy?: StringProperty
  AccessLoggingEnabled?: boolean
  Id?: StringProperty
  Tags?: {
    Value: StringProperty
    Key: StringProperty
  }[]
}

export const AWSMediaStoreContainer = ({
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
      Type: 'AWS::MediaStore::Container',
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