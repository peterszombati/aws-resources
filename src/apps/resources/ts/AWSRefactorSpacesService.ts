import {StringProperty} from "../StringProperty"


type Properties = {
  Arn?: StringProperty
  ApplicationIdentifier: StringProperty
  Description?: StringProperty
  EndpointType: (string | "LAMBDA" | "URL")
  EnvironmentIdentifier: StringProperty
  LambdaEndpoint?: {
    Arn: StringProperty
  }
  Name: StringProperty
  ServiceIdentifier?: StringProperty
  UrlEndpoint?: {
    HealthUrl?: StringProperty
    Url: StringProperty
  }
  VpcId?: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSRefactorSpacesService = ({
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
      Type: 'AWS::RefactorSpaces::Service',
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