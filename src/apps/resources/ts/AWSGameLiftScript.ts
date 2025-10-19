import {StringProperty} from "../StringProperty"


type Properties = {
  Name?: StringProperty
  StorageLocation: {
    Bucket: StringProperty
    Key: StringProperty
    ObjectVersion?: StringProperty
    RoleArn: StringProperty
  }
  Version?: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  CreationTime?: StringProperty
  Arn?: StringProperty
  Id?: StringProperty
  SizeOnDisk?: number
}

export const AWSGameLiftScript = ({
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
      Type: 'AWS::GameLift::Script',
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