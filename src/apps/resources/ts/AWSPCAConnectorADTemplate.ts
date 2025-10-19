import {StringProperty} from "../StringProperty"


type Properties = {
  ConnectorArn: StringProperty
  Definition: any
  Name: StringProperty
  ReenrollAllCertificateHolders?: boolean
  Tags?: Record<string, any>
  TemplateArn?: StringProperty
}

export const AWSPCAConnectorADTemplate = ({
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
      Type: 'AWS::PCAConnectorAD::Template',
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