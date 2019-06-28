const preDOM = ['pre', ['code', 0]]

export const nodes = {
  // :: NodeSpec A code listing. Disallows marks or non-text inline
  // nodes by default. Represented as a `<pre>` element with a
  // `<code>` element inside of it.
  code_block: {
    code: true,
    content: 'text*',
    defining: true,
    group: 'block',
    marks: '',
    parseDOM: [{ tag: 'pre', preserveWhitespace: 'full' }],
    toDOM() { return preDOM }
  },
}
