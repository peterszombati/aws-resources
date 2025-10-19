import {StringProperty} from "../StringProperty"


type Properties = {
  AllowExternalPrincipals?: boolean
  Arn?: StringProperty
  Name: StringProperty
  PermissionArns?: StringProperty[]
  Principals?: StringProperty[]
  ResourceArns?: StringProperty[]
  Sources?: StringProperty[]
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSRAMResourceShare = ({
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
      Type: 'AWS::RAM::ResourceShare',
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