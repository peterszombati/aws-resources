import {StringProperty} from "../StringProperty"


type Properties = {
  PathResourceToId?: StringProperty
  Arn?: StringProperty
  ApplicationIdentifier: StringProperty
  EnvironmentIdentifier: StringProperty
  RouteIdentifier?: StringProperty
  RouteType: (string | "DEFAULT" | "URI_PATH")
  ServiceIdentifier: StringProperty
  DefaultRoute?: {
    ActivationState: (string | "INACTIVE" | "ACTIVE")
  }
  UriPathRoute?: {
    SourcePath?: StringProperty
    ActivationState: (string | "INACTIVE" | "ACTIVE")
    Methods?: (string | "DELETE" | "GET" | "HEAD" | "OPTIONS" | "PATCH" | "POST" | "PUT")[]
    IncludeChildPaths?: boolean
    AppendSourcePath?: boolean
  }
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSRefactorSpacesRoute = ({
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
      Type: 'AWS::RefactorSpaces::Route',
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