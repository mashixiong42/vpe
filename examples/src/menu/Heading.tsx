// Subscript

import React, { useState } from 'react'
import { IEventbusProps } from '../commonTypes'
import { CoreEvents } from '@vpe/core'
import { heading } from '@vpe/extensions'

const { tester, command } = heading

export interface IHeadingProps extends IEventbusProps {
  level: 1 | 2 | 3 | 4 | 5 | 6
}

export const Heading = ({ eventbus, level }: IHeadingProps) => {
  const [view, setView] = useState<any>(undefined)
  const [active, setActive] = useState<any>(undefined)

  React.useEffect(() => {
    eventbus.on(CoreEvents.ViewUpdate, ({ view: viewP }: any) => {
      setView(viewP)
    })
    eventbus.on(tester.ResultEventName, ({ result: { active: activeP } }: any) => {
      console.log('heading test', level, activeP)
      const hActive = activeP.find(({ level: levelP }: any) => levelP === level)
      setActive(hActive && hActive.active || false)
    })
  }, [])
  const style = { color: active ? 'blue' : 'black' }
  return <span className="headings" style={style} onClick={
    () => {
      if (view) {
        command.run(view!.state, view!.dispatch, { level })
      }
    }
  }>H{level} </span>
}
