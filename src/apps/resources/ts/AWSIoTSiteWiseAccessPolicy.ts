import {StringProperty} from "../StringProperty"


type Properties = {
  AccessPolicyId?: StringProperty
  AccessPolicyArn?: StringProperty
  AccessPolicyIdentity: {
    User?: {
      id?: StringProperty
    }
    IamUser?: {
      arn?: StringProperty
    }
    IamRole?: {
      arn?: StringProperty
    }
  }
  AccessPolicyPermission: StringProperty
  AccessPolicyResource: {
    Portal?: {
      id?: StringProperty
    }
    Project?: {
      id?: StringProperty
    }
  }
}

export const AWSIoTSiteWiseAccessPolicy = ({
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
      Type: 'AWS::IoTSiteWise::AccessPolicy',
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