import {StringProperty} from "../StringProperty"


type Properties = {
  DBProxyName: StringProperty
  TargetGroupArn?: StringProperty
  TargetGroupName: (string | "default")
  ConnectionPoolConfigurationInfo?: {
    MaxConnectionsPercent?: number
    MaxIdleConnectionsPercent?: number
    ConnectionBorrowTimeout?: number
    SessionPinningFilters?: StringProperty[]
    InitQuery?: StringProperty
  }
  DBInstanceIdentifiers?: StringProperty[]
  DBClusterIdentifiers?: StringProperty[]
}

export const AWSRDSDBProxyTargetGroup = ({
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
      Type: 'AWS::RDS::DBProxyTargetGroup',
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