import {StringProperty} from "../StringProperty"


type Properties = {
  ArchiveName?: StringProperty
  SourceArn: StringProperty
  Description?: StringProperty
  EventPattern?: Record<string, any>
  Arn?: StringProperty
  RetentionDays?: number
  KmsKeyIdentifier?: StringProperty
}

export const AWSEventsArchive = ({
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
      Type: 'AWS::Events::Archive',
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