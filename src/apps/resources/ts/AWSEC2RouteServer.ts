import {StringProperty} from "../StringProperty"


type Properties = {
  AmazonSideAsn: number /* schema format: int64*/
  Arn?: StringProperty
  Id?: StringProperty
  PersistRoutes?: (string | "enable" | "disable")
  PersistRoutesDuration?: number /* schema format: int64*/
  SnsNotificationsEnabled?: boolean
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSEC2RouteServer = ({
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
      Type: 'AWS::EC2::RouteServer',
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