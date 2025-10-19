import {StringProperty} from "../StringProperty"


type Properties = {
  Id?: StringProperty
  Name: StringProperty
  Arn?: StringProperty
  Locations?: {
    LocationName: StringProperty
    CidrList: StringProperty[]
  }[]
}

export const AWSRoute53CidrCollection = ({
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
      Type: 'AWS::Route53::CidrCollection',
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