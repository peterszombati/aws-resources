import {StringProperty} from "../StringProperty"


type Properties = {
  Status?: StringProperty
  UserId: StringProperty
  UserName: StringProperty
  Engine: (string | "redis" | "valkey")
  AccessString?: StringProperty
  NoPasswordRequired?: boolean
  Passwords?: StringProperty[]
  Arn?: StringProperty
  AuthenticationMode?: {
    Type: (string | "password" | "no-password-required" | "iam")
    Passwords?: StringProperty[]
  }
  Tags?: {
    Key: StringProperty
    Value?: StringProperty
  }[]
}

export const AWSElastiCacheUser = ({
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
      Type: 'AWS::ElastiCache::User',
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