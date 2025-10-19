import {StringProperty} from "../StringProperty"


type Properties = {
  DomainNameAccessAssociationArn?: StringProperty
  DomainNameArn: StringProperty
  AccessAssociationSource: StringProperty
  AccessAssociationSourceType: (string | "VPCE")
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSApiGatewayDomainNameAccessAssociation = ({
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
      Type: 'AWS::ApiGateway::DomainNameAccessAssociation',
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