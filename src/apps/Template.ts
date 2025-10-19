import {StringProperty} from "./resources/StringProperty";

export class Template {
  Resources: Record<string, {
    Type: string,
    DependsOn?: string[] | string,
    Properties?: Record<string, any>,
  }> = {}
  Outputs: Record<string, {
    Value?: StringProperty
    Export?: Record<string, any>
  }> = {}
  Parameters: Record<string, any> = {}

  add({Resources = {}, Outputs = {}, Parameters = {}}: Partial<Template>) {
    this.Outputs = {...this.Outputs, ...Outputs}
    this.Resources = {...this.Resources, ...Resources}
    this.Parameters = {...this.Parameters, ...Parameters}
  }
}

export class Stacks {
  Stacks: Record<string, Template> = {}

  add(stackName: string) {
    this.Stacks[stackName] = new Template()
  }
}