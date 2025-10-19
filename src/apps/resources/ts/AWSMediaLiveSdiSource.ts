import {StringProperty} from "../StringProperty"


type Properties = {
  Arn?: StringProperty
  Id?: StringProperty
  Mode?: (string | "QUADRANT" | "INTERLEAVE")
  Name: StringProperty
  State?: (string | "IDLE" | "IN_USE" | "DELETED")
  Type: (string | "SINGLE" | "QUAD")
  Inputs?: StringProperty[]
  Tags?: {
    Key?: StringProperty
    Value?: StringProperty
  }[]
}

export const AWSMediaLiveSdiSource = ({
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
      Type: 'AWS::MediaLive::SdiSource',
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