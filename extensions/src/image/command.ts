export const run = (state: any, dispatch: any, attr: any) => {
  if (!attr || !attr.src)
    return
  const img = state.schema.nodes.image.createAndFill(attr)
  dispatch(state.tr.replaceSelectionWith(img))
}
