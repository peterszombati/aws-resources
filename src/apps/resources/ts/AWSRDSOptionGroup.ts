import {StringProperty} from "../StringProperty"


type Properties = {
  OptionGroupName?: StringProperty
  OptionGroupDescription: StringProperty
  EngineName: StringProperty
  MajorEngineVersion: StringProperty
  OptionConfigurations?: {
    DBSecurityGroupMemberships?: StringProperty[]
    OptionName: StringProperty
    OptionSettings?: {
      Name?: StringProperty
      Value?: StringProperty
    }[]
    OptionVersion?: StringProperty
    Port?: number
    VpcSecurityGroupMemberships?: StringProperty[]
  }[]
  Tags?: {
    Key: StringProperty
    Value?: StringProperty
  }[]
}

export const AWSRDSOptionGroup = ({
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
      Type: 'AWS::RDS::OptionGroup',
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