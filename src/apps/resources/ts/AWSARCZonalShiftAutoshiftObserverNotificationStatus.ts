import {StringProperty} from "../StringProperty"


type Properties = {
  Status: (string | "ENABLED")
  AccountId?: StringProperty
  Region?: StringProperty
}

export const AWSARCZonalShiftAutoshiftObserverNotificationStatus = ({
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
      Type: 'AWS::ARCZonalShift::AutoshiftObserverNotificationStatus',
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