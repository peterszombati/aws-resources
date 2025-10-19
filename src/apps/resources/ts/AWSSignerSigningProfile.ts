import {StringProperty} from "../StringProperty"


type Properties = {
  ProfileName?: StringProperty
  ProfileVersion?: StringProperty
  Arn?: StringProperty
  ProfileVersionArn?: StringProperty
  SignatureValidityPeriod?: {
    Value?: number
    Type?: (string | "DAYS" | "MONTHS" | "YEARS")
  }
  PlatformId: (string | "AWSLambda-SHA384-ECDSA" | "Notation-OCI-SHA384-ECDSA")
  Tags?: {
    Key?: StringProperty
    Value?: StringProperty
  }[]
}

export const AWSSignerSigningProfile = ({
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
      Type: 'AWS::Signer::SigningProfile',
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