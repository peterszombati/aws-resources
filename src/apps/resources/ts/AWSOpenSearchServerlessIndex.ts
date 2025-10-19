import {StringProperty} from "../StringProperty"


type Properties = {
  CollectionEndpoint: StringProperty
  IndexName: StringProperty
  Settings?: {
    Index?: {
      RefreshInterval?: StringProperty
      Knn?: boolean
      KnnAlgoParamEfSearch?: number
    }
  }
  Mappings?: {
    Properties?: Record<string, any>
  }
  Uuid?: StringProperty
}

export const AWSOpenSearchServerlessIndex = ({
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
      Type: 'AWS::OpenSearchServerless::Index',
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