import {StringProperty} from "../StringProperty"


type Properties = {
  AccountId: StringProperty
  AuditCheckConfigurations: {
    AuthenticatedCognitoRoleOverlyPermissiveCheck?: {
      Enabled?: boolean
    }
    CaCertificateExpiringCheck?: {
      Enabled?: boolean
    }
    CaCertificateKeyQualityCheck?: {
      Enabled?: boolean
    }
    ConflictingClientIdsCheck?: {
      Enabled?: boolean
    }
    DeviceCertificateExpiringCheck?: {
      Enabled?: boolean
      Configuration?: {
        CertExpirationThresholdInDays?: StringProperty
      }
    }
    DeviceCertificateKeyQualityCheck?: {
      Enabled?: boolean
    }
    DeviceCertificateSharedCheck?: {
      Enabled?: boolean
    }
    IotPolicyOverlyPermissiveCheck?: {
      Enabled?: boolean
    }
    IotRoleAliasAllowsAccessToUnusedServicesCheck?: {
      Enabled?: boolean
    }
    IotRoleAliasOverlyPermissiveCheck?: {
      Enabled?: boolean
    }
    LoggingDisabledCheck?: {
      Enabled?: boolean
    }
    RevokedCaCertificateStillActiveCheck?: {
      Enabled?: boolean
    }
    RevokedDeviceCertificateStillActiveCheck?: {
      Enabled?: boolean
    }
    UnauthenticatedCognitoRoleOverlyPermissiveCheck?: {
      Enabled?: boolean
    }
    IntermediateCaRevokedForActiveDeviceCertificatesCheck?: {
      Enabled?: boolean
    }
    IoTPolicyPotentialMisConfigurationCheck?: {
      Enabled?: boolean
    }
    DeviceCertificateAgeCheck?: {
      Enabled?: boolean
      Configuration?: {
        CertAgeThresholdInDays?: StringProperty
      }
    }
  }
  AuditNotificationTargetConfigurations?: {
    Sns?: {
      TargetArn?: StringProperty
      RoleArn?: StringProperty
      Enabled?: boolean
    }
  }
  RoleArn: StringProperty
}

export const AWSIoTAccountAuditConfiguration = ({
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
      Type: 'AWS::IoT::AccountAuditConfiguration',
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