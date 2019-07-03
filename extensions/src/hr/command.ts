export const run = (state: any, dispatch: any) => {
  const hr = state.schema.nodes.horizontal_rule.create()
  dispatch(state.tr.replaceSelectionWith(hr))
}
