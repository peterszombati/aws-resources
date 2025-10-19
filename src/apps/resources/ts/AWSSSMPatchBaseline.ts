import {StringProperty} from "../StringProperty"


type Properties = {
  Id?: StringProperty
  DefaultBaseline?: boolean
  OperatingSystem?: (string | "WINDOWS" | "AMAZON_LINUX" | "AMAZON_LINUX_2" | "AMAZON_LINUX_2022" | "AMAZON_LINUX_2023" | "UBUNTU" | "REDHAT_ENTERPRISE_LINUX" | "SUSE" | "CENTOS" | "ORACLE_LINUX" | "DEBIAN" | "MACOS" | "RASPBIAN" | "ROCKY_LINUX" | "ALMA_LINUX")
  Description?: StringProperty
  ApprovalRules?: {
    PatchRules?: {
      ApproveUntilDate?: StringProperty
      EnableNonSecurity?: boolean
      PatchFilterGroup?: {
        PatchFilters?: {
          Values?: StringProperty[]
          Key?: (string | "ADVISORY_ID" | "ARCH" | "BUGZILLA_ID" | "CLASSIFICATION" | "CVE_ID" | "EPOCH" | "MSRC_SEVERITY" | "NAME" | "PATCH_ID" | "PATCH_SET" | "PRIORITY" | "PRODUCT" | "PRODUCT_FAMILY" | "RELEASE" | "REPOSITORY" | "SECTION" | "SECURITY" | "SEVERITY" | "VERSION")
        }[]
      }
      ApproveAfterDays?: number
      ComplianceLevel?: (string | "CRITICAL" | "HIGH" | "INFORMATIONAL" | "LOW" | "MEDIUM" | "UNSPECIFIED")
    }[]
  }
  Sources?: {
    Products?: StringProperty[]
    Configuration?: StringProperty
    Name?: StringProperty
  }[]
  Name: StringProperty
  RejectedPatches?: StringProperty[]
  ApprovedPatches?: StringProperty[]
  RejectedPatchesAction?: (string | "ALLOW_AS_DEPENDENCY" | "BLOCK")
  PatchGroups?: StringProperty[]
  ApprovedPatchesComplianceLevel?: (string | "CRITICAL" | "HIGH" | "MEDIUM" | "LOW" | "INFORMATIONAL" | "UNSPECIFIED")
  ApprovedPatchesEnableNonSecurity?: boolean
  GlobalFilters?: {
    PatchFilters?: {
      Values?: StringProperty[]
      Key?: (string | "ADVISORY_ID" | "ARCH" | "BUGZILLA_ID" | "CLASSIFICATION" | "CVE_ID" | "EPOCH" | "MSRC_SEVERITY" | "NAME" | "PATCH_ID" | "PATCH_SET" | "PRIORITY" | "PRODUCT" | "PRODUCT_FAMILY" | "RELEASE" | "REPOSITORY" | "SECTION" | "SECURITY" | "SEVERITY" | "VERSION")
    }[]
  }
  AvailableSecurityUpdatesComplianceStatus?: (string | "NON_COMPLIANT" | "COMPLIANT")
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSSSMPatchBaseline = ({
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
      Type: 'AWS::SSM::PatchBaseline',
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