import {StringProperty} from "../StringProperty"


type Properties = {
  PermissionsMode: StringProperty
  DeletionProtection?: boolean
  Id?: StringProperty
  KmsKey?: StringProperty
  Tags?: {
    Value: StringProperty
    Key: StringProperty
  }[]
  Name?: StringProperty
}

export const AWSQLDBLedger = ({
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
      Type: 'AWS::QLDB::Ledger',
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