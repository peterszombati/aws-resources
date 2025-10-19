import {StringProperty} from "../StringProperty"


type Properties = {
  Arn?: StringProperty
  CreationTime?: StringProperty
  Description?: StringProperty
  Name: StringProperty
  ReferenceStoreId?: StringProperty
  SseConfig?: {
    Type: (string | "KMS")
    KeyArn?: StringProperty
  }
  Tags?: Record<string, any>
}

export const AWSOmicsReferenceStore = ({
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
      Type: 'AWS::Omics::ReferenceStore',
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