import {StringProperty} from "../StringProperty"


type Properties = {
  SourceApiIdentifier?: StringProperty
  MergedApiIdentifier?: StringProperty
  Description?: StringProperty
  SourceApiAssociationConfig?: any
  AssociationId?: StringProperty
  AssociationArn?: StringProperty
  SourceApiId?: StringProperty
  SourceApiArn?: StringProperty
  MergedApiId?: StringProperty
  MergedApiArn?: StringProperty
  SourceApiAssociationStatus?: (string | "MERGE_SCHEDULED" | "MERGE_FAILED" | "MERGE_SUCCESS" | "MERGE_IN_PROGRESS" | "AUTO_MERGE_SCHEDULE_FAILED" | "DELETION_SCHEDULED" | "DELETION_IN_PROGRESS" | "DELETION_FAILED")
  SourceApiAssociationStatusDetail?: StringProperty
  LastSuccessfulMergeDate?: StringProperty
}

export const AWSAppSyncSourceApiAssociation = ({
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
      Type: 'AWS::AppSync::SourceApiAssociation',
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