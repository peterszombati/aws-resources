import {StringProperty} from "../StringProperty"


type Properties = {
  AccountId: StringProperty
  RoleArn: StringProperty
  DefaultLogLevel: (string | "ERROR" | "WARN" | "INFO" | "DEBUG" | "DISABLED")
}

export const AWSIoTLogging = ({
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
      Type: 'AWS::IoT::Logging',
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