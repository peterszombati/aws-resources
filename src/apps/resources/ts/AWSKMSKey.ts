import {StringProperty} from "../StringProperty"


type Properties = {
  Description?: StringProperty
  Enabled?: boolean
  EnableKeyRotation?: boolean
  KeyPolicy?: Record<string, any> | StringProperty
  KeyUsage?: (string | "ENCRYPT_DECRYPT" | "SIGN_VERIFY" | "GENERATE_VERIFY_MAC" | "KEY_AGREEMENT")
  Origin?: (string | "AWS_KMS" | "EXTERNAL")
  KeySpec?: (string | "SYMMETRIC_DEFAULT" | "RSA_2048" | "RSA_3072" | "RSA_4096" | "ECC_NIST_P256" | "ECC_NIST_P384" | "ECC_NIST_P521" | "ECC_SECG_P256K1" | "HMAC_224" | "HMAC_256" | "HMAC_384" | "HMAC_512" | "SM2" | "ML_DSA_44" | "ML_DSA_65" | "ML_DSA_87")
  MultiRegion?: boolean
  PendingWindowInDays?: number
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  Arn?: StringProperty
  KeyId?: StringProperty
  BypassPolicyLockoutSafetyCheck?: boolean
  RotationPeriodInDays?: number
}

export const AWSKMSKey = ({
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
      Type: 'AWS::KMS::Key',
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