interface LocationOption {
  key: string
  value: string
  text: string
}
const makeOptionForLocationName = (name: string): LocationOption => {
  const key = name.split(' ').map(w => w.toLowerCase()).join('_')
  return {
    key,
    value: name,
    text: name
  }
}
const makeOptionForNames = (...names: string[]): LocationOption[] => {
  return names.map(name => makeOptionForLocationName(name))
}

export const locationOptions = makeOptionForNames(
  'Times Square', 'Herald Square', 'Union Square', 'Port Authority'
)