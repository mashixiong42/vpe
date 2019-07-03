// Subscript

import React, { useState } from 'react'
import { IEventbusProps } from '../commonTypes'
import { CoreEvents } from '@vpe/core'
import { orderedList } from '@vpe/extensions'
import { MdFormatListNumbered } from 'react-icons/md'

const { tester, command } = orderedList

export const OrderedList = ({ eventbus }: IEventbusProps) => {
  const [view, setView] = useState<any>(undefined)
  const [active, setActive] = useState<any>(undefined)

  React.useEffect(() => {
    eventbus.on(CoreEvents.ViewUpdate, ({ view: viewP }: any) => {
      setView(viewP)
    })
    eventbus.on(tester.ResultEventName, ({ result: { active: activeP } }: any) => {
      setActive(activeP)
    })
  }, [])
  const style = { color: active ? 'blue' : 'black' }
  return <MdFormatListNumbered style={style} onClick={
    () => {
      if (view) {
        command.run(view!.state, view!.dispatch)
      }
    }
  } />
}
