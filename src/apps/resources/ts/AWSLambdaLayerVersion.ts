import {StringProperty} from "../StringProperty"


type Properties = {
  CompatibleRuntimes?: StringProperty[]
  LicenseInfo?: StringProperty
  Description?: StringProperty
  LayerName?: StringProperty
  Content: {
    S3ObjectVersion?: StringProperty
    S3Bucket: StringProperty
    S3Key: StringProperty
  }
  LayerVersionArn?: StringProperty
  CompatibleArchitectures?: StringProperty[]
}

export const AWSLambdaLayerVersion = ({
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
      Type: 'AWS::Lambda::LayerVersion',
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