import {StringProperty} from "../StringProperty"


type Properties = {
  SchemaName: StringProperty
  Description?: StringProperty
  MappedInputFields: {
    FieldName: StringProperty
    Type: (string | "NAME" | "NAME_FIRST" | "NAME_MIDDLE" | "NAME_LAST" | "ADDRESS" | "ADDRESS_STREET1" | "ADDRESS_STREET2" | "ADDRESS_STREET3" | "ADDRESS_CITY" | "ADDRESS_STATE" | "ADDRESS_COUNTRY" | "ADDRESS_POSTALCODE" | "PHONE" | "PHONE_NUMBER" | "PHONE_COUNTRYCODE" | "EMAIL_ADDRESS" | "UNIQUE_ID" | "DATE" | "STRING" | "PROVIDER_ID")
    SubType?: StringProperty
    GroupName?: StringProperty
    MatchKey?: StringProperty
    Hashed?: boolean
  }[]
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  SchemaArn?: StringProperty
  CreatedAt?: StringProperty
  UpdatedAt?: StringProperty
  HasWorkflows?: boolean
}

export const AWSEntityResolutionSchemaMapping = ({
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
      Type: 'AWS::EntityResolution::SchemaMapping',
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