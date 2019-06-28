const codeDOM = ['code', 0]

export type HeadingLevels = 1 | 2 | 3 | 4 | 5 | 6

export const nodes = {
  // Copied form prosemirror default schema
  // :: NodeSpec A heading textblock, with a `level` attribute that
  // should hold the number 1 to 6. Parsed and serialized as `<h1>` to
  // `<h6>` elements.
  heading: {
    attrs: { level: { default: 1 } },
    content: 'inline*',
    defining: true,
    group: 'block',
    parseDOM: [{ tag: 'h1', attrs: { level: 1 } },
    { tag: 'h2', attrs: { level: 2 } },
    { tag: 'h3', attrs: { level: 3 } },
    { tag: 'h4', attrs: { level: 4 } },
    { tag: 'h5', attrs: { level: 5 } },
    { tag: 'h6', attrs: { level: 6 } }],
    toDOM(node: any) { return ['h' + node.attrs.level, 0] }
  },
}
