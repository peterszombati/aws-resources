import {StringProperty} from "../StringProperty"


type Properties = {
  Filters?: {
    FilterString: StringProperty
  }
  IncludedProperties?: {
    Name: StringProperty
  }[]
  Scope?: StringProperty
  Tags?: Record<string, any>
  ViewArn?: StringProperty
  ViewName: StringProperty
}

export const AWSResourceExplorer2View = ({
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
      Type: 'AWS::ResourceExplorer2::View',
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