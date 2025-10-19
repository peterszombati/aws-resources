import {StringProperty} from "../StringProperty"


type Properties = {
  DBInstanceClass: StringProperty
  Port?: StringProperty
  DBClusterIdentifier: StringProperty
  AvailabilityZone?: StringProperty
  PreferredMaintenanceWindow?: StringProperty
  EnablePerformanceInsights?: boolean
  AutoMinorVersionUpgrade?: boolean
  DBInstanceIdentifier?: StringProperty
  CACertificateIdentifier?: StringProperty
  CertificateRotationRestart?: boolean
  Endpoint?: StringProperty
  Id?: StringProperty
  Tags?: {
    Value: StringProperty
    Key: StringProperty
  }[]
}

export const AWSDocDBDBInstance = ({
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
      Type: 'AWS::DocDB::DBInstance',
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