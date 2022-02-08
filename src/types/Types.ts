export type HeaderInput = {
  modelName: string,
  modelDescription: string,
  modelProject: string,
  modelType: string,
  modelNumber: number
}

export type StepInput = {
  name: string,
  description: string,
  paramsNum: number,
  params: [ParamsInput]
}

export type ParamsInput = {
  name: string,
  description: string,
  type: string,
  unit: string,
  min: number,
  max: number
}

export type ModelsInput = {
  name: string,
  description: string,
  files: [string],
  modelType: ModelType,
  steps: [StepInput]
}

export type ModelType = {
  name: string,
  abbrevation: string,
  description: string
}