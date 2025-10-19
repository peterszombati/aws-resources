import {StringProperty} from "../StringProperty"


type Properties = {
  InstanceArn: StringProperty
  Name: StringProperty
  Values?: {
    StringList?: StringProperty[]
  }
  Purposes?: StringProperty[]
  AttributeConfiguration?: {
    EnableValueValidationOnAssociation?: boolean
    IsReadOnly?: boolean
  }
  LastModifiedRegion?: StringProperty
  LastModifiedTime?: number
}

export const AWSConnectPredefinedAttribute = ({
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
      Type: 'AWS::Connect::PredefinedAttribute',
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