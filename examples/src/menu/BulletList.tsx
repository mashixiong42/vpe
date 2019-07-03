// Subscript

import React, { useState } from 'react'
import { IEventbusProps } from '../commonTypes'
import { CoreEvents } from '@vpe/core'
import { bulletList } from '@vpe/extensions'
import { MdFormatListBulleted } from 'react-icons/md'

const { tester, command } = bulletList

export const BulletList = ({ eventbus }: IEventbusProps) => {
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
  return <MdFormatListBulleted style={style} onClick={
    () => {
      if (view) {
        command.run(view!.state, view!.dispatch)
      }
    }
  } />
}
