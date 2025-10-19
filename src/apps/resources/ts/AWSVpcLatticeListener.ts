import {StringProperty} from "../StringProperty"


type Properties = {
  Arn?: StringProperty
  DefaultAction: {
    Forward?: {
      TargetGroups: {
        TargetGroupIdentifier: StringProperty
        Weight?: number
      }[]
    }
    FixedResponse?: {
      StatusCode: number
    }
  }
  Id?: StringProperty
  Name?: StringProperty
  Port?: number
  Protocol: (string | "HTTP" | "HTTPS" | "TLS_PASSTHROUGH")
  ServiceArn?: StringProperty
  ServiceId?: StringProperty
  ServiceIdentifier?: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSVpcLatticeListener = ({
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
      Type: 'AWS::VpcLattice::Listener',
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