import {StringProperty} from "../StringProperty"


type Properties = {
  Arn?: StringProperty
  Bucket: StringProperty
  Name: StringProperty
  VpcConfiguration: {
    VpcId?: StringProperty
  }
  Policy?: Record<string, any>
}

export const AWSS3OutpostsAccessPoint = ({
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
      Type: 'AWS::S3Outposts::AccessPoint',
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