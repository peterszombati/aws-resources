import {StringProperty} from "../StringProperty"


type Properties = {
  ScraperId?: StringProperty
  Alias?: StringProperty
  Arn?: StringProperty
  RoleArn?: StringProperty
  ScraperLoggingConfiguration?: {
    ScraperComponents: {
      Type: (string | "SERVICE_DISCOVERY" | "COLLECTOR" | "EXPORTER")
      Config?: {
        Options?: Record<string, any>
      }
    }[]
    LoggingDestination: {
      CloudWatchLogs?: {
        LogGroupArn?: StringProperty
      }
    }
  }
  ScrapeConfiguration: {
    ConfigurationBlob?: StringProperty
  }
  RoleConfiguration?: {
    SourceRoleArn?: StringProperty
    TargetRoleArn?: StringProperty
  }
  Source: {
    EksConfiguration?: {
      ClusterArn: StringProperty
      SecurityGroupIds?: StringProperty[]
      SubnetIds: StringProperty[]
    }
  }
  Destination: {
    AmpConfiguration?: {
      WorkspaceArn: StringProperty
    }
  }
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSAPSScraper = ({
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
      Type: 'AWS::APS::Scraper',
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