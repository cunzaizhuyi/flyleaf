export type ConfigObject = {
  [key: string]: any
}
export type ConfigItem = [string, string, ConfigObject | undefined]
export type ConfigList = ConfigItem[]
type ConfigKeyList = [string, string]

export const DEFAULT_KEY_LIST: ConfigKeyList = ['label', 'prop']

export const createConfigList = (arr: ConfigList, keyList: ConfigKeyList = DEFAULT_KEY_LIST): ConfigObject =>
  arr.map(([laebl, prop, option]: ConfigItem) => ({
    [keyList[0]]: laebl,
    [keyList[1]]: prop,
    ...(option || {})
  }))

export const reduceConfigList = (arr: ConfigList): ConfigObject =>
  createConfigList(arr).reduce((x, y) => ({ ...x, [y[DEFAULT_KEY_LIST[1]]]: y }), {})