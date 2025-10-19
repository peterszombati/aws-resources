import {StringProperty} from "../StringProperty"


type Properties = {
  Name?: StringProperty
  AutoCreateTasks: boolean
  Update?: {
    UpdateDataSource?: StringProperty
    UpdateDataRole?: StringProperty
    LoRaWAN?: {
      UpdateSignature?: StringProperty
      SigKeyCrc?: number /* schema format: int64*/
      CurrentVersion?: {
        PackageVersion?: StringProperty
        Model?: StringProperty
        Station?: StringProperty
      }
      UpdateVersion?: {
        PackageVersion?: StringProperty
        Model?: StringProperty
        Station?: StringProperty
      }
    }
  }
  LoRaWANUpdateGatewayTaskEntry?: {
    CurrentVersion?: {
      PackageVersion?: StringProperty
      Model?: StringProperty
      Station?: StringProperty
    }
    UpdateVersion?: {
      PackageVersion?: StringProperty
      Model?: StringProperty
      Station?: StringProperty
    }
  }
  Id?: StringProperty
  TaskDefinitionType?: (string | "UPDATE")
  Arn?: StringProperty
  Tags?: {
    Key?: StringProperty
    Value?: StringProperty
  }[]
}

export const AWSIoTWirelessTaskDefinition = ({
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
      Type: 'AWS::IoTWireless::TaskDefinition',
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