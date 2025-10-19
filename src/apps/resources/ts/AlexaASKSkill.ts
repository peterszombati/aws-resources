import {StringProperty} from "../StringProperty"


type Properties = {
  AuthenticationConfiguration: {
    ClientId: StringProperty
    RefreshToken: StringProperty
    ClientSecret: StringProperty
  }
  Id?: StringProperty
  VendorId: StringProperty
  SkillPackage: {
    S3BucketRole?: StringProperty
    Overrides?: {
      Manifest?: Record<string, any>
    }
    S3ObjectVersion?: StringProperty
    S3Bucket: StringProperty
    S3Key: StringProperty
  }
}

export const AlexaASKSkill = ({
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
      Type: 'Alexa::ASK::Skill',
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