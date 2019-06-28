import { setBlockType } from 'prosemirror-commands'
import { HeadingLevels } from './schema'

export interface IHeadingAttr {
  level: HeadingLevels
}

export const setBlockHeading = (state: any, dispatch: any, attr: IHeadingAttr) => setBlockType(state.schema.nodes.heading, attr)(state, dispatch)
