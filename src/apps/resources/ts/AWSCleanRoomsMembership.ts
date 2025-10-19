import {StringProperty} from "../StringProperty"


type Properties = {
  Arn?: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  CollaborationArn?: StringProperty
  CollaborationCreatorAccountId?: StringProperty
  CollaborationIdentifier: StringProperty
  MembershipIdentifier?: StringProperty
  QueryLogStatus: (string | "ENABLED" | "DISABLED")
  JobLogStatus?: (string | "ENABLED" | "DISABLED")
  DefaultResultConfiguration?: {
    OutputConfiguration: {
      S3: {
        ResultFormat: (string | "CSV" | "PARQUET")
        Bucket: StringProperty
        KeyPrefix?: StringProperty
        SingleFileOutput?: boolean
      }
    }
    RoleArn?: StringProperty
  }
  DefaultJobResultConfiguration?: {
    OutputConfiguration: {
      S3: {
        Bucket: StringProperty
        KeyPrefix?: StringProperty
      }
    }
    RoleArn: StringProperty
  }
  PaymentConfiguration?: {
    QueryCompute: {
      IsResponsible: boolean
    }
    MachineLearning?: {
      ModelTraining?: {
        IsResponsible: boolean
      }
      ModelInference?: {
        IsResponsible: boolean
      }
    }
    JobCompute?: {
      IsResponsible: boolean
    }
  }
}

export const AWSCleanRoomsMembership = ({
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
      Type: 'AWS::CleanRooms::Membership',
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