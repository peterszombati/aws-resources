import {StringProperty} from "../StringProperty"


type Properties = {
  XMLClassifier?: {
    RowTag: StringProperty
    Classification: StringProperty
    Name?: StringProperty
  }
  CsvClassifier?: {
    ContainsCustomDatatype?: StringProperty[]
    QuoteSymbol?: StringProperty
    ContainsHeader?: StringProperty
    Delimiter?: StringProperty
    Header?: StringProperty[]
    AllowSingleColumn?: boolean
    CustomDatatypeConfigured?: boolean
    DisableValueTrimming?: boolean
    Name?: StringProperty
  }
  Id?: StringProperty
  GrokClassifier?: {
    CustomPatterns?: StringProperty
    GrokPattern: StringProperty
    Classification: StringProperty
    Name?: StringProperty
  }
  JsonClassifier?: {
    JsonPath: StringProperty
    Name?: StringProperty
  }
}

export const AWSGlueClassifier = ({
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
      Type: 'AWS::Glue::Classifier',
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