import React, { useState, useEffect } from 'react'
import classnames from 'classnames'

import { positions } from '@vpe/extensions'
import { CoreEvents } from '@vpe/core'

type ICoords = positions.tester.ICoords

export interface IFloaterProps {
  children: React.ComponentElement<any, any>
  className?: string
  eventBus: any
  styleBuilder?: (position: ICoords, view?: any) => any
}

const defaultStyle = {
  position: 'absolute',
  whiteSpace: 'nowrap',
  zIndex: 999,
  borderRadius: '3px',
  padding: '3px',
  border: '3px solid hsl(0, 0%, 86%)',
}

export const Floater = (props: IFloaterProps) => {

  const [show, setShow] = useState<boolean>(false)
  const [position, setPosition] = useState<ICoords>({
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  })
  const [topLeft, setTopLeft] = useState<{ top: number, left: number }>({
    top: 0,
    left: 0,
  })
  const { className, styleBuilder, eventBus, children } = props

  const calculated = {
    display: show ? 'flex' : 'none',
    top: topLeft.top,
    left: topLeft.left,
  }
  const style = {
    ...calculated, ...(styleBuilder ? {
      ...defaultStyle, ...styleBuilder(position)
    } : defaultStyle)
  }

  useEffect(() => {
    /* eventBus.on(CoreEvents.OnBlur, () => setShow(false)) */
    eventBus.on(positions.tester.PositionsTestResultEventName, (param: any) => {
      console.log('on position', param)
      const {
        anchor,
        start,
        end
      } = param.result
      if (start.left == end.left && start.top === end.top) {
        setShow(false)
        return
      }
      setShow(true)
      setPosition(anchor)
      setTopLeft({
        top: anchor.bottom + 10,
        left: anchor.left
      })
    })

  }, [])

  return (
    <div style={style} className={classnames(className, 'vpe-react-floater')
    } >
      {children}
    </div >
  )
}
