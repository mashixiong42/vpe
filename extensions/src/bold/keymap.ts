import { toggleMark } from "prosemirror-commands"

import { bind } from '@vpe/core'

export const bindKey = (keyMap: any, schema: any) => {
  const temp = bind(keyMap, "Mod-b", toggleMark(schema.marks.strong))
  return bind(temp, "Mod-B", toggleMark(schema.marks.strong))
}
