import {StringProperty} from "../StringProperty"


type Properties = {
  ApplicationId?: StringProperty
  ApplicationArn?: StringProperty
  ApplicationName: StringProperty
  ApplicationDescription?: StringProperty
  ApplicationUrl?: StringProperty
  ApplicationState?: StringProperty
  ApplicationCreationDate?: number
  ApplicationLastUpdateDate?: number
  RoleArn: StringProperty
  SsoClientId?: StringProperty
  ErrorMessage?: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSIoTFleetHubApplication = ({
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
      Type: 'AWS::IoTFleetHub::Application',
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