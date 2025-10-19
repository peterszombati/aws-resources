import {StringProperty} from "../StringProperty"


type Properties = {
  Status?: StringProperty
  UserName: StringProperty
  AccessString?: StringProperty
  AuthenticationMode?: {
    Type?: (string | "password" | "iam")
    Passwords?: StringProperty[]
  }
  Arn?: StringProperty
  Tags?: {
    Key: StringProperty
    Value?: StringProperty
  }[]
}

export const AWSMemoryDBUser = ({
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
      Type: 'AWS::MemoryDB::User',
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