
export const styleString = (obj: Object) => {
  return Object.entries(obj)
    .map(([name, value]) => `${name}: ${value};`)
    .join(' ')
}


export const classString = (obj: Object) => {
  return Object.entries(obj)
    .filter(([name, value]) => name !== '' && value)
    .map(([name]) => name)
    .join(' ')
}