import {StringProperty} from "../StringProperty"


type Properties = {
  LatestVersionArn?: StringProperty
  Id?: StringProperty
  Arn?: StringProperty
  Name: StringProperty
  InitialVersion?: {
    DefaultConfig?: {
      Execution: {
        IsolationMode?: StringProperty
        RunAs?: {
          Uid?: number
          Gid?: number
        }
      }
    }
    Functions: {
      FunctionArn: StringProperty
      FunctionConfiguration: {
        MemorySize?: number
        Pinned?: boolean
        ExecArgs?: StringProperty
        Timeout?: number
        EncodingType?: StringProperty
        Environment?: {
          Variables?: Record<string, any>
          Execution?: {
            IsolationMode?: StringProperty
            RunAs?: {
              Uid?: number
              Gid?: number
            }
          }
          ResourceAccessPolicies?: {
            ResourceId: StringProperty
            Permission?: StringProperty
          }[]
          AccessSysfs?: boolean
        }
        Executable?: StringProperty
      }
      Id: StringProperty
    }[]
  }
  Tags?: Record<string, any>
}

export const AWSGreengrassFunctionDefinition = ({
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
      Type: 'AWS::Greengrass::FunctionDefinition',
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