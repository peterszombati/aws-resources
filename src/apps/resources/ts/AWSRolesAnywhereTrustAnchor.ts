import {StringProperty} from "../StringProperty"


type Properties = {
  Enabled?: boolean
  Name: StringProperty
  NotificationSettings?: {
    Enabled: boolean
    Event: (string | "CA_CERTIFICATE_EXPIRY" | "END_ENTITY_CERTIFICATE_EXPIRY")
    Threshold?: number
    Channel?: (string | "ALL")
  }[]
  Source: {
    SourceType: (string | "AWS_ACM_PCA" | "CERTIFICATE_BUNDLE")
    SourceData: any
  }
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  TrustAnchorId?: StringProperty
  TrustAnchorArn?: StringProperty
}

export const AWSRolesAnywhereTrustAnchor = ({
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
      Type: 'AWS::RolesAnywhere::TrustAnchor',
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