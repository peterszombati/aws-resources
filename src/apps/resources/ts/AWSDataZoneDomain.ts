import {StringProperty} from "../StringProperty"


type Properties = {
  RootDomainUnitId?: StringProperty
  Arn?: StringProperty
  CreatedAt?: StringProperty
  Description?: StringProperty
  DomainExecutionRole: StringProperty
  ServiceRole?: StringProperty
  DomainVersion?: (string | "V1" | "V2")
  Id?: StringProperty
  KmsKeyIdentifier?: StringProperty
  LastUpdatedAt?: StringProperty
  ManagedAccountId?: StringProperty
  Name: StringProperty
  PortalUrl?: StringProperty
  SingleSignOn?: {
    Type?: (string | "IAM_IDC" | "DISABLED")
    UserAssignment?: (string | "AUTOMATIC" | "MANUAL")
    IdcInstanceArn?: StringProperty
  }
  Status?: (string | "CREATING" | "AVAILABLE" | "CREATION_FAILED" | "DELETING" | "DELETED" | "DELETION_FAILED")
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSDataZoneDomain = ({
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
      Type: 'AWS::DataZone::Domain',
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