import {StringProperty} from "../StringProperty"


type Properties = {
  InvoiceUnitArn?: StringProperty
  InvoiceReceiver: StringProperty
  Name: StringProperty
  Description?: StringProperty
  TaxInheritanceDisabled?: boolean
  Rule: {
    LinkedAccounts: StringProperty[]
  }
  LastModified?: number
  ResourceTags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSInvoicingInvoiceUnit = ({
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
      Type: 'AWS::Invoicing::InvoiceUnit',
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