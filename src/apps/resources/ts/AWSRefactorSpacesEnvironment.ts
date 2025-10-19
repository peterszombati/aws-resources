import {StringProperty} from "../StringProperty"


type Properties = {
  Description?: StringProperty
  EnvironmentIdentifier?: StringProperty
  Name?: StringProperty
  NetworkFabricType?: (string | "TRANSIT_GATEWAY" | "NONE")
  Arn?: StringProperty
  TransitGatewayId?: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSRefactorSpacesEnvironment = ({
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
      Type: 'AWS::RefactorSpaces::Environment',
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