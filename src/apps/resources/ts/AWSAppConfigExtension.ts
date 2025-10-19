import {StringProperty} from "../StringProperty"


type Properties = {
  Id?: StringProperty
  Arn?: StringProperty
  VersionNumber?: number
  Name: StringProperty
  Description?: StringProperty
  Actions: Record<string, any>
  Parameters?: Record<string, any>
  LatestVersionNumber?: number
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSAppConfigExtension = ({
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
      Type: 'AWS::AppConfig::Extension',
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