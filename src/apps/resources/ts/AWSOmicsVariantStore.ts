import {StringProperty} from "../StringProperty"


type Properties = {
  CreationTime?: StringProperty
  Description?: StringProperty
  Id?: StringProperty
  Name: StringProperty
  Reference: {
    ReferenceArn: StringProperty
  }
  SseConfig?: {
    Type: (string | "KMS")
    KeyArn?: StringProperty
  }
  Status?: (string | "CREATING" | "UPDATING" | "DELETING" | "ACTIVE" | "FAILED")
  StatusMessage?: StringProperty
  StoreArn?: StringProperty
  StoreSizeBytes?: number
  Tags?: Record<string, any>
  UpdateTime?: StringProperty
}

export const AWSOmicsVariantStore = ({
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
      Type: 'AWS::Omics::VariantStore',
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