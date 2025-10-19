import {StringProperty} from "../StringProperty"


type Properties = {
  CommandArn?: StringProperty
  CommandId: StringProperty
  CreatedAt?: StringProperty
  Deprecated?: boolean
  Description?: StringProperty
  DisplayName?: StringProperty
  LastUpdatedAt?: StringProperty
  MandatoryParameters?: {
    Name: StringProperty
    Value?: {
      S?: StringProperty
      B?: boolean
      I?: number
      L?: StringProperty
      D?: number
      BIN?: StringProperty
      UL?: StringProperty
    }
    DefaultValue?: {
      S?: StringProperty
      B?: boolean
      I?: number
      L?: StringProperty
      D?: number
      BIN?: StringProperty
      UL?: StringProperty
    }
    Description?: StringProperty
  }[]
  Namespace?: (string | "AWS-IoT" | "AWS-IoT-FleetWise")
  RoleArn?: StringProperty
  Payload?: {
    Content?: StringProperty
    ContentType?: StringProperty
  }
  PendingDeletion?: boolean
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSIoTCommand = ({
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
      Type: 'AWS::IoT::Command',
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