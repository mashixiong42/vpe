// Subscript

import React, { useState } from 'react'
import { IEventbusProps } from '../commonTypes'
import { CoreEvents } from '@vpe/core'
import { lift } from '@vpe/extensions'
import { MdFormatIndentDecrease } from 'react-icons/md'

const { command } = lift

export const Lift = ({ eventbus }: IEventbusProps) => {
  const [view, setView] = useState<any>(undefined)

  React.useEffect(() => {
    eventbus.on(CoreEvents.ViewUpdate, ({ view: viewP }: any) => {
      setView(viewP)
    })
  }, [])
  const style = { color: 'black' }
  return <MdFormatIndentDecrease style={style} onClick={() => {
    if (view)
      command.run(view!.state, view!.dispatch)
  }} />
}
