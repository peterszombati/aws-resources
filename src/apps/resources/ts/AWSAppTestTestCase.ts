import {StringProperty} from "../StringProperty"


type Properties = {
  CreationTime?: StringProperty
  Description?: StringProperty
  LastUpdateTime?: StringProperty
  LatestVersion?: {
    Version: number
    Status: (string | "Active" | "Deleting")
  }
  Name: StringProperty
  Status?: (string | "Active" | "Deleting")
  Steps: {
    Name: StringProperty
    Description?: StringProperty
    Action: any
  }[]
  Tags?: Record<string, any>
  TestCaseArn?: StringProperty
  TestCaseId?: StringProperty
  TestCaseVersion?: number
}

export const AWSAppTestTestCase = ({
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
      Type: 'AWS::AppTest::TestCase',
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