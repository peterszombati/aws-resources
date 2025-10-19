import {StringProperty} from "../StringProperty"


type Properties = {
  InstanceArn: StringProperty
  UserHierarchyStructureArn?: StringProperty
  UserHierarchyStructure?: {
    LevelOne?: {
      HierarchyLevelArn?: StringProperty
      HierarchyLevelId?: StringProperty
      Name: StringProperty
    }
    LevelTwo?: {
      HierarchyLevelArn?: StringProperty
      HierarchyLevelId?: StringProperty
      Name: StringProperty
    }
    LevelThree?: {
      HierarchyLevelArn?: StringProperty
      HierarchyLevelId?: StringProperty
      Name: StringProperty
    }
    LevelFour?: {
      HierarchyLevelArn?: StringProperty
      HierarchyLevelId?: StringProperty
      Name: StringProperty
    }
    LevelFive?: {
      HierarchyLevelArn?: StringProperty
      HierarchyLevelId?: StringProperty
      Name: StringProperty
    }
  }
}

export const AWSConnectUserHierarchyStructure = ({
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
      Type: 'AWS::Connect::UserHierarchyStructure',
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