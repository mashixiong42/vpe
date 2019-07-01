export const nodes = {

  image: {
    attrs: {
      alt: { default: null } as {
        default?: string | null | undefined
      },
      src: {},
      title: { default: null } as {
        default?: string | null | undefined
      }
    },
    draggable: true,
    group: 'inline',
    inline: true,
    parseDOM: [{
      tag: 'img[src]', getAttrs(dom: any) {
        return {
          alt: dom.getAttribute('alt'),
          src: dom.getAttribute('src'),
          title: dom.getAttribute('title'),
        }
      }
    }],
    toDOM(node: any) {
      const { src, alt, title }: any = node.attrs
      return ['img', { src, alt, title }]
    }
  },
}
