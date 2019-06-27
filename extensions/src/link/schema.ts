export const marks = {
  link: {
    attrs: {
      href: {},
      title: { default: null } as {
        default: string | undefined | null
      }
    },
    inclusive: false,
    parseDOM: [{
      tag: "a[href]", getAttrs(dom: any) {
        return { href: dom.getAttribute("href"), title: dom.getAttribute("title") }
      }
    }],
    toDOM(node: any) {
      const { href, title } = node.attrs
      return ["a", { href, title }, 0]
    }
  },
}
