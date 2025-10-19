import {StringProperty} from "../StringProperty"


type Properties = {
  IpamScopeId?: StringProperty
  Arn?: StringProperty
  IpamId: StringProperty
  IpamArn?: StringProperty
  IpamScopeType?: (string | "public" | "private")
  IsDefault?: boolean
  Description?: StringProperty
  PoolCount?: number
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSEC2IPAMScope = ({
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
      Type: 'AWS::EC2::IPAMScope',
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