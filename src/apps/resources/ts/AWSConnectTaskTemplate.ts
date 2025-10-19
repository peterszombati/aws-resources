import {StringProperty} from "../StringProperty"


type Properties = {
  Arn?: StringProperty
  InstanceArn: StringProperty
  Name?: StringProperty
  Description?: StringProperty
  ContactFlowArn?: StringProperty
  SelfAssignContactFlowArn?: StringProperty
  Constraints?: {
    InvisibleFields?: {
      Id: {
        Name: StringProperty
      }
    }[]
    RequiredFields?: {
      Id: {
        Name: StringProperty
      }
    }[]
    ReadOnlyFields?: {
      Id: {
        Name: StringProperty
      }
    }[]
  }
  Defaults?: {
    Id: {
      Name: StringProperty
    }
    DefaultValue: StringProperty
  }[]
  Fields?: {
    Id: {
      Name: StringProperty
    }
    Description?: StringProperty
    Type: (string | "NAME" | "DESCRIPTION" | "SCHEDULED_TIME" | "QUICK_CONNECT" | "URL" | "NUMBER" | "TEXT" | "TEXT_AREA" | "DATE_TIME" | "BOOLEAN" | "SINGLE_SELECT" | "EMAIL" | "EXPIRY_DURATION" | "SELF_ASSIGN")
    SingleSelectOptions?: StringProperty[]
  }[]
  Status?: (string | "ACTIVE" | "INACTIVE")
  ClientToken?: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSConnectTaskTemplate = ({
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
      Type: 'AWS::Connect::TaskTemplate',
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