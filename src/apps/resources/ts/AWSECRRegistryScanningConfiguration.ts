import {StringProperty} from "../StringProperty"


type Properties = {
  Rules: {
    RepositoryFilters: {
      Filter: StringProperty
      FilterType: (string | "WILDCARD")
    }[]
    ScanFrequency: (string | "SCAN_ON_PUSH" | "CONTINUOUS_SCAN")
  }[]
  ScanType: (string | "BASIC" | "ENHANCED")
  RegistryId?: StringProperty
}

export const AWSECRRegistryScanningConfiguration = ({
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
      Type: 'AWS::ECR::RegistryScanningConfiguration',
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