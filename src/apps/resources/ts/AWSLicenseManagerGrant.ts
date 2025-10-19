import {StringProperty} from "../StringProperty"


type Properties = {
  GrantArn?: StringProperty
  GrantName?: StringProperty
  LicenseArn?: StringProperty
  HomeRegion?: StringProperty
  Version?: StringProperty
  AllowedOperations?: StringProperty[]
  Principals?: StringProperty[]
  Status?: StringProperty
}

export const AWSLicenseManagerGrant = ({
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
      Type: 'AWS::LicenseManager::Grant',
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