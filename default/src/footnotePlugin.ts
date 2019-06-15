import { Plugin } from 'prosemirror-state'
import FootnoteView from './FootnoteView'

export default () => {
  return new Plugin({
    props: {
      nodeViews: {
        footnote: (node: any, view: any, getPos: any) => {
          return new FootnoteView(node, view, getPos)
        }
      }
    }
  })
}
