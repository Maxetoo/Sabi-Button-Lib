export const createUndefinedPropError = (args: any): any => {
  if (!args) {
    throw new Error('Component must accept children components')
  }
}
