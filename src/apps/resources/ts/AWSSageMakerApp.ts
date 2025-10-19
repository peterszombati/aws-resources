import {StringProperty} from "../StringProperty"


type Properties = {
  AppArn?: StringProperty
  AppName: StringProperty
  AppType: (string | "JupyterServer" | "KernelGateway" | "RStudioServerPro" | "RSessionGateway" | "Canvas")
  DomainId: StringProperty
  ResourceSpec?: {
    InstanceType?: (string | "system" | "ml.t3.micro" | "ml.t3.small" | "ml.t3.medium" | "ml.t3.large" | "ml.t3.xlarge" | "ml.t3.2xlarge" | "ml.m5.large" | "ml.m5.xlarge" | "ml.m5.2xlarge" | "ml.m5.4xlarge" | "ml.m5.8xlarge" | "ml.m5.12xlarge" | "ml.m5.16xlarge" | "ml.m5.24xlarge" | "ml.c5.large" | "ml.c5.xlarge" | "ml.c5.2xlarge" | "ml.c5.4xlarge" | "ml.c5.9xlarge" | "ml.c5.12xlarge" | "ml.c5.18xlarge" | "ml.c5.24xlarge" | "ml.p3.2xlarge" | "ml.p3.8xlarge" | "ml.p3.16xlarge" | "ml.g4dn.xlarge" | "ml.g4dn.2xlarge" | "ml.g4dn.4xlarge" | "ml.g4dn.8xlarge" | "ml.g4dn.12xlarge" | "ml.g4dn.16xlarge" | "ml.r5.large" | "ml.r5.xlarge" | "ml.r5.2xlarge" | "ml.r5.4xlarge" | "ml.r5.8xlarge" | "ml.r5.12xlarge" | "ml.r5.16xlarge" | "ml.r5.24xlarge" | "ml.p3dn.24xlarge" | "ml.m5d.large" | "ml.m5d.xlarge" | "ml.m5d.2xlarge" | "ml.m5d.4xlarge" | "ml.m5d.8xlarge" | "ml.m5d.12xlarge" | "ml.m5d.16xlarge" | "ml.m5d.24xlarge" | "ml.g5.xlarge" | "ml.g5.2xlarge" | "ml.g5.4xlarge" | "ml.g5.8xlarge" | "ml.g5.12xlarge" | "ml.g5.16xlarge" | "ml.g5.24xlarge" | "ml.g5.48xlarge" | "ml.p4d.24xlarge" | "ml.p4de.24xlarge" | "ml.geospatial.interactive" | "ml.trn1.2xlarge" | "ml.trn1.32xlarge" | "ml.trn1n.32xlarge")
    SageMakerImageArn?: StringProperty
    SageMakerImageVersionArn?: StringProperty
    LifecycleConfigArn?: StringProperty
  }
  Tags?: {
    Value: StringProperty
    Key: StringProperty
  }[]
  UserProfileName: StringProperty
  BuiltInLifecycleConfigArn?: StringProperty
  RecoveryMode?: boolean
}

export const AWSSageMakerApp = ({
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
      Type: 'AWS::SageMaker::App',
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