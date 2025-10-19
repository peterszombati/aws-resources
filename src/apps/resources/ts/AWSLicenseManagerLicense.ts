import {StringProperty} from "../StringProperty"


type Properties = {
  ProductSKU?: StringProperty
  Issuer: {
    Name: StringProperty
    SignKey?: StringProperty
  }
  LicenseName: StringProperty
  ProductName: StringProperty
  HomeRegion: StringProperty
  Validity: {
    Begin: StringProperty
    End: StringProperty
  }
  Entitlements: {
    Name: StringProperty
    Value?: StringProperty
    MaxCount?: number
    Overage?: boolean
    Unit: StringProperty
    AllowCheckIn?: boolean
  }[]
  Beneficiary?: StringProperty
  ConsumptionConfiguration: {
    RenewType?: StringProperty
    ProvisionalConfiguration?: {
      MaxTimeToLiveInMinutes: number
    }
    BorrowConfiguration?: {
      MaxTimeToLiveInMinutes: number
      AllowEarlyCheckIn: boolean
    }
  }
  LicenseMetadata?: {
    Name: StringProperty
    Value: StringProperty
  }[]
  LicenseArn?: StringProperty
  Status?: StringProperty
  Version?: StringProperty
}

export const AWSLicenseManagerLicense = ({
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
      Type: 'AWS::LicenseManager::License',
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