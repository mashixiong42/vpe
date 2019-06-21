const strongDOM = ["strong", 0]

export const marks = {
  strong: {
    parseDOM: [{ tag: "strong" },
    // This works around a Google Docs misbehavior where
    // pasted content will be inexplicably wrapped in `<b>`
    // tags with a font-weight normal.
    { tag: "b", getAttrs: (node: any): any => node.style.fontWeight != "normal" && null },
    { style: "font-weight", getAttrs: (value: string): any => /^(bold(er)?|[5-9]\d{2,})$/.test(value) && null }],
    toDOM() { return strongDOM }
  },
}
