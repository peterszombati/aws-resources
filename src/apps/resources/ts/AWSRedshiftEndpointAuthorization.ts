import {StringProperty} from "../StringProperty"


type Properties = {
  Status?: StringProperty
  Grantee?: StringProperty
  Account: StringProperty
  Grantor?: StringProperty
  EndpointCount?: number
  AuthorizeTime?: StringProperty
  AllowedVPCs?: StringProperty[]
  Force?: boolean
  AllowedAllVPCs?: boolean
  VpcIds?: StringProperty[]
  ClusterIdentifier: StringProperty
  ClusterStatus?: StringProperty
}

export const AWSRedshiftEndpointAuthorization = ({
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
      Type: 'AWS::Redshift::EndpointAuthorization',
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