import {StringProperty} from "../StringProperty"


type Properties = {
  Arn?: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  CollaborationIdentifier?: StringProperty
  CreatorDisplayName: StringProperty
  CreatorMemberAbilities?: (string | "CAN_QUERY" | "CAN_RUN_JOB" | "CAN_RECEIVE_RESULTS")[]
  CreatorMLMemberAbilities?: {
    CustomMLMemberAbilities: (string | "CAN_RECEIVE_MODEL_OUTPUT" | "CAN_RECEIVE_INFERENCE_OUTPUT")[]
  }
  DataEncryptionMetadata?: {
    AllowCleartext: boolean
    AllowDuplicates: boolean
    AllowJoinsOnColumnsWithDifferentNames: boolean
    PreserveNulls: boolean
  }
  Description: StringProperty
  Members?: {
    AccountId: StringProperty
    MemberAbilities?: (string | "CAN_QUERY" | "CAN_RUN_JOB" | "CAN_RECEIVE_RESULTS")[]
    MLMemberAbilities?: {
      CustomMLMemberAbilities: (string | "CAN_RECEIVE_MODEL_OUTPUT" | "CAN_RECEIVE_INFERENCE_OUTPUT")[]
    }
    DisplayName: StringProperty
    PaymentConfiguration?: {
      JobCompute?: {
        IsResponsible: boolean
      }
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
    }
  }[]
  Name: StringProperty
  JobLogStatus?: (string | "ENABLED" | "DISABLED")
  QueryLogStatus: (string | "ENABLED" | "DISABLED")
  AnalyticsEngine?: (string | "CLEAN_ROOMS_SQL" | "SPARK")
  CreatorPaymentConfiguration?: {
    JobCompute?: {
      IsResponsible: boolean
    }
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
  }
  AutoApprovedChangeTypes?: (string | "ADD_MEMBER")[]
}

export const AWSCleanRoomsCollaboration = ({
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
      Type: 'AWS::CleanRooms::Collaboration',
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