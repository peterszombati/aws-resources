import {StringProperty} from "../StringProperty"


type Properties = {
  Action: {
    Forward?: {
      TargetGroups: {
        TargetGroupIdentifier: StringProperty
        Weight?: number
      }[]
    }
    FixedResponse?: {
      StatusCode: number
    }
  }
  Arn?: StringProperty
  Id?: StringProperty
  ListenerIdentifier?: StringProperty
  Match: {
    HttpMatch: {
      Method?: (string | "CONNECT" | "DELETE" | "GET" | "HEAD" | "OPTIONS" | "POST" | "PUT" | "TRACE")
      PathMatch?: {
        Match: {
          Exact?: StringProperty
          Prefix?: StringProperty
        }
        CaseSensitive?: boolean
      }
      HeaderMatches?: {
        Name: StringProperty
        Match: {
          Exact?: StringProperty
          Prefix?: StringProperty
          Contains?: StringProperty
        }
        CaseSensitive?: boolean
      }[]
    }
  }
  Name?: StringProperty
  Priority: number
  ServiceIdentifier?: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSVpcLatticeRule = ({
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
      Type: 'AWS::VpcLattice::Rule',
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