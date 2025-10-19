import {StringProperty} from "../StringProperty"


type Properties = {
  AdditionalEncryptionContext?: Record<string, any>
  AssociatedPortalArns?: StringProperty[]
  CreationDate?: StringProperty
  CustomerManagedKey?: StringProperty
  DisplayName?: StringProperty
  EventFilter: any
  LogConfiguration: {
    S3?: {
      Bucket: StringProperty
      KeyPrefix?: StringProperty
      BucketOwner?: StringProperty
      LogFileFormat: (string | "JSONLines" | "Json")
      FolderStructure: (string | "Flat" | "NestedByDate")
    }
  }
  SessionLoggerArn?: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSWorkSpacesWebSessionLogger = ({
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
      Type: 'AWS::WorkSpacesWeb::SessionLogger',
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