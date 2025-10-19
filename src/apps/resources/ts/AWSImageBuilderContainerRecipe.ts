import {StringProperty} from "../StringProperty"


type Properties = {
  Arn?: StringProperty
  Name?: StringProperty
  Description?: StringProperty
  Version?: StringProperty
  Components?: {
    ComponentArn?: StringProperty
    Parameters?: {
      Name: StringProperty
      Value: StringProperty[]
    }[]
  }[]
  InstanceConfiguration?: {
    Image?: StringProperty
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
  }
  DockerfileTemplateData?: StringProperty
  DockerfileTemplateUri?: StringProperty
  PlatformOverride?: (string | "Windows" | "Linux")
  ContainerType?: (string | "DOCKER")
  ImageOsVersionOverride?: StringProperty
  TargetRepository?: {
    Service?: (string | "ECR")
    RepositoryName?: StringProperty
  }
  KmsKeyId?: StringProperty
  ParentImage?: StringProperty
  WorkingDirectory?: StringProperty
  Tags?: Record<string, any>
}

export const AWSImageBuilderContainerRecipe = ({
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
      Type: 'AWS::ImageBuilder::ContainerRecipe',
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