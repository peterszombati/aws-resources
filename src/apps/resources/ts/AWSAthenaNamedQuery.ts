import {StringProperty} from "../StringProperty"


type Properties = {
  Name?: StringProperty
  Database: StringProperty
  Description?: StringProperty
  QueryString: StringProperty
  WorkGroup?: StringProperty
  NamedQueryId?: StringProperty
}

export const AWSAthenaNamedQuery = ({
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
      Type: 'AWS::Athena::NamedQuery',
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