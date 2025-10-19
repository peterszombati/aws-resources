import {StringProperty} from "../StringProperty"


type Properties = {
  ResourceIdentifier: StringProperty
  Policy: Record<string, any>
  State?: (string | "ACTIVE" | "INACTIVE")
}

export const AWSVpcLatticeAuthPolicy = ({
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
      Type: 'AWS::VpcLattice::AuthPolicy',
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