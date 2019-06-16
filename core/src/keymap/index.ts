export const mac = typeof navigator != "undefined" ? /Mac/.test(navigator.platform) : false

export const bind = (keyMap: any, key: string, cmd: any) => ({ ...keyMap, [key]: cmd })
