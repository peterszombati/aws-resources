import {StringProperty} from "../StringProperty"


type Properties = {
  Id?: StringProperty
  AppSource?: {
    Password?: StringProperty
    Revision?: StringProperty
    SshKey?: StringProperty
    Type?: StringProperty
    Url?: StringProperty
    Username?: StringProperty
  }
  Attributes?: Record<string, any>
  DataSources?: {
    Arn?: StringProperty
    DatabaseName?: StringProperty
    Type?: StringProperty
  }[]
  Description?: StringProperty
  Domains?: StringProperty[]
  EnableSsl?: boolean
  Environment?: {
    Key: StringProperty
    Secure?: boolean
    Value: StringProperty
  }[]
  Name: StringProperty
  Shortname?: StringProperty
  SslConfiguration?: {
    Certificate?: StringProperty
    Chain?: StringProperty
    PrivateKey?: StringProperty
  }
  StackId: StringProperty
  Type: StringProperty
}

export const AWSOpsWorksApp = ({
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
      Type: 'AWS::OpsWorks::App',
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