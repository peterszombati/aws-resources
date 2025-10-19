import {StringProperty} from "../StringProperty"


type Properties = {
  EncryptionConfiguration: {
    S3Encryptions?: Record<string, any>
    JobBookmarksEncryption?: {
      KmsKeyArn?: StringProperty
      JobBookmarksEncryptionMode?: StringProperty
    }
    CloudWatchEncryption?: {
      KmsKeyArn?: StringProperty
      CloudWatchEncryptionMode?: StringProperty
    }
  }
  Name: StringProperty
  Id?: StringProperty
}

export const AWSGlueSecurityConfiguration = ({
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
      Type: 'AWS::Glue::SecurityConfiguration',
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