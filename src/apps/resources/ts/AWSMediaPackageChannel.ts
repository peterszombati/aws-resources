import {StringProperty} from "../StringProperty"


type Properties = {
  Arn?: StringProperty
  Id: StringProperty
  Description?: StringProperty
  HlsIngest?: {
    ingestEndpoints?: {
      Id: StringProperty
      Username: StringProperty
      Password: StringProperty
      Url: StringProperty
    }[]
  }
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  EgressAccessLogs?: {
    LogGroupName?: StringProperty
  }
  IngressAccessLogs?: {
    LogGroupName?: StringProperty
  }
}

export const AWSMediaPackageChannel = ({
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
      Type: 'AWS::MediaPackage::Channel',
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