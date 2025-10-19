import {StringProperty} from "../StringProperty"


type Properties = {
  ArchiveArn?: StringProperty
  ArchiveId?: StringProperty
  ArchiveName?: StringProperty
  ArchiveState?: (string | "ACTIVE" | "PENDING_DELETION")
  KmsKeyArn?: StringProperty
  Retention?: any
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSSESMailManagerArchive = ({
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
      Type: 'AWS::SES::MailManagerArchive',
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