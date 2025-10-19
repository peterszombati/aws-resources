import {StringProperty} from "../StringProperty"

type ActionParameters = {
  Type?: ComponentProperty
  Url?: ComponentProperty
  Anchor?: ComponentProperty
  Target?: ComponentProperty
  Global?: ComponentProperty
  Model?: StringProperty
  Id?: ComponentProperty
  Fields?: ComponentProperties
  State?: MutationActionSetStateParameter
}

type ComponentBindingProperties = Record<string, any>

type ComponentBindingPropertiesValue = {
  Type?: StringProperty
  BindingProperties?: ComponentBindingPropertiesValueProperties
  DefaultValue?: StringProperty
}

type ComponentBindingPropertiesValueProperties = {
  Model?: StringProperty
  Field?: StringProperty
  Predicates?: Predicate[]
  UserAttribute?: StringProperty
  Bucket?: StringProperty
  Key?: StringProperty
  DefaultValue?: StringProperty
  SlotName?: StringProperty
}

type ComponentChild = {
  ComponentType: StringProperty
  Name: StringProperty
  Properties: ComponentProperties
  Children?: ComponentChild[]
  Events?: ComponentEvents
  SourceId?: StringProperty
}

type ComponentCollectionProperties = Record<string, any>

type ComponentConditionProperty = {
  Property?: StringProperty
  Field?: StringProperty
  Operator?: StringProperty
  Operand?: StringProperty
  Then?: ComponentProperty
  Else?: ComponentProperty
  OperandType?: StringProperty
}

type ComponentDataConfiguration = {
  Model: StringProperty
  Sort?: SortProperty[]
  Predicate?: Predicate
  Identifiers?: StringProperty[]
}

type ComponentEvent = {
  Action?: StringProperty
  Parameters?: ActionParameters
  BindingEvent?: StringProperty
}

type ComponentEvents = Record<string, any>

type ComponentOverrides = Record<string, any>

type ComponentOverridesValue = Record<string, any>

type ComponentProperties = Record<string, any>

type ComponentProperty = {
  Value?: StringProperty
  BindingProperties?: ComponentPropertyBindingProperties
  CollectionBindingProperties?: ComponentPropertyBindingProperties
  DefaultValue?: StringProperty
  Model?: StringProperty
  Bindings?: FormBindings
  Event?: StringProperty
  UserAttribute?: StringProperty
  Concat?: ComponentProperty[]
  Condition?: ComponentConditionProperty
  Configured?: boolean
  Type?: StringProperty
  ImportedValue?: StringProperty
  ComponentName?: StringProperty
  Property?: StringProperty
}

type ComponentPropertyBindingProperties = {
  Property: StringProperty
  Field?: StringProperty
}

type ComponentVariant = {
  VariantValues?: ComponentVariantValues
  Overrides?: ComponentOverrides
}

type ComponentVariantValues = Record<string, any>

type FormBindingElement = {
  Element: StringProperty
  Property: StringProperty
}

type FormBindings = Record<string, any>

type MutationActionSetStateParameter = {
  ComponentName: StringProperty
  Property: StringProperty
  Set: ComponentProperty
}

type Predicate = {
  Or?: Predicate[]
  And?: Predicate[]
  Field?: StringProperty
  Operator?: StringProperty
  Operand?: StringProperty
  OperandType?: StringProperty
}

type SortDirection = (string | "ASC" | "DESC")

type SortProperty = {
  Field: StringProperty
  Direction: SortDirection
}

type Tags = Record<string, any>


type Properties = {
  AppId?: StringProperty
  BindingProperties?: ComponentBindingProperties
  Children?: ComponentChild[]
  CollectionProperties?: ComponentCollectionProperties
  ComponentType?: StringProperty
  CreatedAt?: StringProperty
  EnvironmentName?: StringProperty
  Events?: ComponentEvents
  Id?: StringProperty
  ModifiedAt?: StringProperty
  Name?: StringProperty
  Overrides?: ComponentOverrides
  Properties?: ComponentProperties
  SchemaVersion?: StringProperty
  SourceId?: StringProperty
  Tags?: Tags
  Variants?: ComponentVariant[]
}

export const AWSAmplifyUIBuilderComponent = ({
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
      Type: 'AWS::AmplifyUIBuilder::Component',
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