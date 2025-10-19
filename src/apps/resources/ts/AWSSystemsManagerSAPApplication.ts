import {StringProperty} from "../StringProperty"


type Properties = {
  ApplicationId: StringProperty
  ApplicationType: (string | "HANA" | "SAP_ABAP")
  Arn?: StringProperty
  Credentials?: {
    DatabaseName?: StringProperty
    CredentialType?: (string | "ADMIN")
    SecretId?: StringProperty
  }[]
  Instances?: StringProperty[]
  SapInstanceNumber?: StringProperty
  Sid?: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  DatabaseArn?: StringProperty
  ComponentsInfo?: {
    ComponentType?: (string | "HANA" | "HANA_NODE" | "ABAP" | "ASCS" | "DIALOG" | "WEBDISP" | "WD" | "ERS")
    Ec2InstanceId?: StringProperty
    Sid?: StringProperty
  }[]
}

export const AWSSystemsManagerSAPApplication = ({
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
      Type: 'AWS::SystemsManagerSAP::Application',
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