import {StringProperty} from "../StringProperty"


type Properties = {
  ProfileId: StringProperty
  Id?: StringProperty
  Name: StringProperty
  ResourceArn: StringProperty
  ResourceProperties?: StringProperty
  ResourceType?: StringProperty
}

export const AWSRoute53ProfilesProfileResourceAssociation = ({
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
      Type: 'AWS::Route53Profiles::ProfileResourceAssociation',
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