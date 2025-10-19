import {StringProperty} from "../StringProperty"


type Properties = {
  MemberId?: StringProperty
  NetworkConfiguration?: {
    Description?: StringProperty
    FrameworkVersion: StringProperty
    VotingPolicy: {
      ApprovalThresholdPolicy?: {
        ThresholdComparator?: StringProperty
        ThresholdPercentage?: number
        ProposalDurationInHours?: number
      }
    }
    Framework: StringProperty
    Name: StringProperty
    NetworkFrameworkConfiguration?: {
      NetworkFabricConfiguration?: {
        Edition: StringProperty
      }
    }
  }
  MemberConfiguration: {
    Description?: StringProperty
    MemberFrameworkConfiguration?: {
      MemberFabricConfiguration?: {
        AdminUsername: StringProperty
        AdminPassword: StringProperty
      }
    }
    Name: StringProperty
  }
  NetworkId?: StringProperty
  InvitationId?: StringProperty
}

export const AWSManagedBlockchainMember = ({
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
      Type: 'AWS::ManagedBlockchain::Member',
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