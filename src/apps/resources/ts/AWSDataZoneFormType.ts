import {StringProperty} from "../StringProperty"


type Properties = {
  DomainIdentifier: StringProperty
  Model: {
    Smithy?: StringProperty
  }
  Description?: StringProperty
  Name: StringProperty
  OwningProjectIdentifier: StringProperty
  DomainId?: StringProperty
  OwningProjectId?: StringProperty
  Revision?: StringProperty
  FormTypeIdentifier?: StringProperty
  Status?: (string | "ENABLED" | "DISABLED")
  CreatedAt?: StringProperty
  CreatedBy?: StringProperty
}

export const AWSDataZoneFormType = ({
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
      Type: 'AWS::DataZone::FormType',
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