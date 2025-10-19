import {StringProperty} from "../StringProperty"


type Properties = {
  Name: StringProperty
  Description?: StringProperty
  Criteria: Record<string, any>
  Id?: StringProperty
  Arn?: StringProperty
  Status?: (string | "OK" | "S3_OBJECT_NOT_FOUND" | "S3_USER_ACCESS_DENIED" | "S3_OBJECT_ACCESS_DENIED" | "S3_THROTTLED" | "S3_OBJECT_OVERSIZE" | "S3_OBJECT_EMPTY" | "UNKNOWN_ERROR")
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSMacieAllowList = ({
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
      Type: 'AWS::Macie::AllowList',
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