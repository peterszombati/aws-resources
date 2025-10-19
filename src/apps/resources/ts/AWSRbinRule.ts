import {StringProperty} from "../StringProperty"


type Properties = {
  Arn?: StringProperty
  Identifier?: StringProperty
  Description?: StringProperty
  ResourceTags?: {
    ResourceTagKey: StringProperty
    ResourceTagValue: StringProperty
  }[]
  ExcludeResourceTags?: {
    ResourceTagKey: StringProperty
    ResourceTagValue: StringProperty
  }[]
  ResourceType: (string | "EBS_SNAPSHOT" | "EC2_IMAGE")
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  RetentionPeriod: {
    RetentionPeriodValue: number
    RetentionPeriodUnit: (string | "DAYS")
  }
  Status?: StringProperty
  LockConfiguration?: {
    UnlockDelayValue?: number
    UnlockDelayUnit?: (string | "DAYS")
  }
  LockState?: StringProperty
}

export const AWSRbinRule = ({
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
      Type: 'AWS::Rbin::Rule',
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