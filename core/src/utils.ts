export const markActive = (state: any, type: any): boolean => {
  let { from, $from, to, empty } = state.selection
  if (empty) return type.isInSet(state.storedMarks || $from.marks())
  else return state.doc.rangeHasMark(from, to, type)
}

export const blockActive = (state: any, type: any, attrs: any = {}): boolean => {
  const { $from, to, node } = state.selection

  if (node) {
    return node.hasMarkup(type, attrs)
  }

  return to <= $from.end() && $from.parent.hasMarkup(type, attrs)
}

export const range = (start: number, stop: number, step?: number): number[] => {
  const a = [start]
  let b = start
  while (b < stop) {
    a.push(b += step || 1);
  }
  return a
}
