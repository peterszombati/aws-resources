import {StringProperty} from "../StringProperty"


type Properties = {
  AccountName: StringProperty
  Email: StringProperty
  RoleName?: StringProperty
  ParentIds?: StringProperty[]
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  AccountId?: StringProperty
  Arn?: StringProperty
  JoinedMethod?: (string | "INVITED" | "CREATED")
  JoinedTimestamp?: StringProperty
  Status?: (string | "ACTIVE" | "SUSPENDED" | "PENDING_CLOSURE")
}

export const AWSOrganizationsAccount = ({
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
      Type: 'AWS::Organizations::Account',
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