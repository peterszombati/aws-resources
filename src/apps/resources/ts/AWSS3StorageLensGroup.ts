import {StringProperty} from "../StringProperty"


type Properties = {
  Name: StringProperty
  Filter: {
    MatchAnyPrefix?: StringProperty[]
    MatchAnySuffix?: StringProperty[]
    MatchAnyTag?: {
      Key: StringProperty
      Value: StringProperty
    }[]
    MatchObjectSize?: {
      BytesGreaterThan?: number /* schema format: int64*/
      BytesLessThan?: number /* schema format: int64*/
    }
    MatchObjectAge?: {
      DaysGreaterThan?: number
      DaysLessThan?: number
    }
    And?: {
      MatchAnyPrefix?: StringProperty[]
      MatchAnySuffix?: StringProperty[]
      MatchAnyTag?: {
        Key: StringProperty
        Value: StringProperty
      }[]
      MatchObjectSize?: {
        BytesGreaterThan?: number /* schema format: int64*/
        BytesLessThan?: number /* schema format: int64*/
      }
      MatchObjectAge?: {
        DaysGreaterThan?: number
        DaysLessThan?: number
      }
    }
    Or?: {
      MatchAnyPrefix?: StringProperty[]
      MatchAnySuffix?: StringProperty[]
      MatchAnyTag?: {
        Key: StringProperty
        Value: StringProperty
      }[]
      MatchObjectSize?: {
        BytesGreaterThan?: number /* schema format: int64*/
        BytesLessThan?: number /* schema format: int64*/
      }
      MatchObjectAge?: {
        DaysGreaterThan?: number
        DaysLessThan?: number
      }
    }
  }
  StorageLensGroupArn?: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSS3StorageLensGroup = ({
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
      Type: 'AWS::S3::StorageLensGroup',
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