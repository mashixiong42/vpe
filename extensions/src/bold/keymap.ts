import { toggleMark } from "prosemirror-commands"

import { bind } from '@vpe/core'
import { marks } from './schema'

export const bindKey = (keyMap: any) => {
  const temp = bind(keyMap, "Mod-b", toggleMark(marks.strong))
  return bind(temp, "Mod-B", toggleMark(marks.strong))
}
