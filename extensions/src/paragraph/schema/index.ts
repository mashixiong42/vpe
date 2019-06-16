import { Schema } from 'prosemirror-model'

const pDOM = ["p", 0]
export const nodes = {
  paragraph: {
    content: "inline*",
    group: "block",
    parseDOM: [{ tag: "p" }],
    toDOM() { return pDOM }
  }
}
