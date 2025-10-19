import {StringProperty} from "../StringProperty"


type Properties = {
  AdminRoleArn: StringProperty
  DisplayName: StringProperty
  HomeRegion?: StringProperty
  SsoClientId?: StringProperty
  StudioEncryptionConfiguration?: {
    KeyType: (string | "AWS_OWNED_KEY" | "CUSTOMER_MANAGED_KEY")
    KeyArn?: StringProperty
  }
  StudioId?: StringProperty
  StudioName: StringProperty
  StudioUrl?: StringProperty
  Tags?: Record<string, any>
  UserRoleArn: StringProperty
}

export const AWSNimbleStudioStudio = ({
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
      Type: 'AWS::NimbleStudio::Studio',
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