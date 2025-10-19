import {StringProperty} from "../StringProperty"


type Properties = {
  DomainName: StringProperty
  ObjectTypeName: StringProperty
  AllowProfileCreation?: boolean
  Description: StringProperty
  EncryptionKey?: StringProperty
  ExpirationDays?: number
  Fields?: {
    Name?: StringProperty
    ObjectTypeField?: {
      Source?: StringProperty
      Target?: StringProperty
      ContentType?: (string | "STRING" | "NUMBER" | "PHONE_NUMBER" | "EMAIL_ADDRESS" | "NAME")
    }
  }[]
  Keys?: {
    Name?: StringProperty
    ObjectTypeKeyList?: {
      FieldNames?: StringProperty[]
      StandardIdentifiers?: (string | "PROFILE" | "UNIQUE" | "SECONDARY" | "LOOKUP_ONLY" | "NEW_ONLY" | "ASSET" | "CASE" | "ORDER" | "AIR_PREFERENCE" | "AIR_BOOKING" | "AIR_SEGMENT" | "HOTEL_PREFERENCE" | "HOTEL_STAY_REVENUE" | "HOTEL_RESERVATION" | "LOYALTY" | "LOYALTY_TRANSACTION" | "LOYALTY_PROMOTION")[]
    }[]
  }[]
  CreatedAt?: StringProperty
  LastUpdatedAt?: StringProperty
  SourceLastUpdatedTimestampFormat?: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  TemplateId?: StringProperty
  MaxProfileObjectCount?: number
  MaxAvailableProfileObjectCount?: number
}

export const AWSCustomerProfilesObjectType = ({
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
      Type: 'AWS::CustomerProfiles::ObjectType',
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