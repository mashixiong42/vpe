// Subscript

import React, { useState } from 'react'
import { IEventbusProps } from '../commonTypes'
import { CoreEvents } from '@vpe/core'
import { paragraph } from '@vpe/extensions'

const { tester, command } = paragraph

export const Paragraph = ({ eventbus }: IEventbusProps) => {
  const [view, setView] = useState<any>(undefined)
  const [active, setActive] = useState<any>(undefined)

  React.useEffect(() => {
    eventbus.on(CoreEvents.ViewUpdate, ({ view: viewP }: any) => {
      setView(viewP)
    })
    eventbus.on(tester.config.resultEventName, ({ result: { active: activeP } }: any) => {
      setActive(activeP)
    })
  }, [])
  const style = { color: active ? 'blue' : 'black' }
  return <span className="headings" style={style} onClick={
    () => {
      if (view) {
        command.run(view!.state, view!.dispatch)
      }
    }
  }> P </span>
}
