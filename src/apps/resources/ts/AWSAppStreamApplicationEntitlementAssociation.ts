import {StringProperty} from "../StringProperty"


type Properties = {
  StackName: StringProperty
  EntitlementName: StringProperty
  ApplicationIdentifier: StringProperty
}

export const AWSAppStreamApplicationEntitlementAssociation = ({
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
      Type: 'AWS::AppStream::ApplicationEntitlementAssociation',
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