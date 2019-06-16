import { setBlockType } from "prosemirror-commands"

import { bind } from '@vpe/core'
import { nodes } from '../schema'
export const bindKey = (keyMap: any) => bind(keyMap, "Shift-Ctrl-\\", setBlockType(nodes.paragraph))
