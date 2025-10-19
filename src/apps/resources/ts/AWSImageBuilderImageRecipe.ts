import {StringProperty} from "../StringProperty"


type Properties = {
  Arn?: StringProperty
  Name: StringProperty
  Description?: StringProperty
  Version: StringProperty
  Components: {
    ComponentArn?: StringProperty
    Parameters?: {
      Name: StringProperty
      Value: StringProperty[]
    }[]
  }[]
  BlockDeviceMappings?: {
    DeviceName?: StringProperty
    VirtualName?: StringProperty
    NoDevice?: StringProperty
    Ebs?: {
      Encrypted?: boolean
      DeleteOnTermination?: boolean
      Iops?: number
      KmsKeyId?: StringProperty
      SnapshotId?: StringProperty
      Throughput?: number
      VolumeSize?: number
      VolumeType?: (string | "standard" | "io1" | "io2" | "gp2" | "gp3" | "sc1" | "st1")
    }
  }[]
  ParentImage: StringProperty
  WorkingDirectory?: StringProperty
  AdditionalInstanceConfiguration?: {
    SystemsManagerAgent?: {
      UninstallAfterBuild?: boolean
    }
    UserDataOverride?: StringProperty
  }
  AmiTags?: Record<string, any>
  Tags?: Record<string, any>
}

export const AWSImageBuilderImageRecipe = ({
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
      Type: 'AWS::ImageBuilder::ImageRecipe',
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