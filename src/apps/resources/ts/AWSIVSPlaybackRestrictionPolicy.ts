import {StringProperty} from "../StringProperty"


type Properties = {
  Arn?: StringProperty
  AllowedCountries?: StringProperty[]
  AllowedOrigins?: StringProperty[]
  EnableStrictOriginEnforcement?: boolean
  Name?: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSIVSPlaybackRestrictionPolicy = ({
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
      Type: 'AWS::IVS::PlaybackRestrictionPolicy',
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