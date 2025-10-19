import {StringProperty} from "../StringProperty"


type Properties = {
  Type: StringProperty
  TransitEncryptionEnabled?: boolean
  HealthMetricsConfig?: StringProperty
  AtRestEncryptionEnabled?: boolean
  Id?: StringProperty
  ApiId: StringProperty
  ApiCachingBehavior: StringProperty
  Ttl: number
}

export const AWSAppSyncApiCache = ({
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
      Type: 'AWS::AppSync::ApiCache',
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