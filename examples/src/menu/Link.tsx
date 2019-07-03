import React, { useState, forwardRef } from 'react'
import { IEventbusProps } from '../commonTypes'
import { CoreEvents } from '@vpe/core'
import { link } from '@vpe/extensions'
import Tippy from '@tippy.js/react'

import { MdLink } from 'react-icons/md'

const { tester, command } = link

const LinkButton = forwardRef((props: any, ref: any) => {
  const { setOpen, active, view } = props
  const style = { color: active ? 'blue' : 'black' }
  return <span ref={ref}> <MdLink style={style} onClick={
    () => {
      if (!view || !view.state.selection)
        return
      if (active) {
        command.run(view!.state, view!.dispatch)
        return
      }
      setOpen()
    }
  } /></span>
})

export const Link = ({ eventbus }: IEventbusProps) => {
  const [view, setView] = useState<any>(undefined)
  const [open, setOpen] = useState<boolean>(false)

  const [active, setActive] = React.useState<any>(null)

  const [href, setHref] = React.useState<string>('')

  React.useEffect(() => {
    eventbus.on(CoreEvents.ViewUpdate, ({ view: viewP }: any) => {
      setView(viewP)
    })
    eventbus.on(tester.config.resultEventName, ({ result: { active: activeP } }: any) => {
      setActive(activeP)
    })
  }, [])

  const HrefInput = () => <div className="href-input">
    <input type="text" value={href} placeholder="https://abc.com" autoFocus={true} onChange={(e): any => {
      setHref(e.target.value)
      e.stopPropagation()
    }
    } />  <span onClick={
      () => {
        if (!view) {
          setOpen(false)
          return
        }
        if (!href.trim()) {
          setOpen(false)
          return
        }
        command.run(view!.state, view!.dispatch, { href })
        setHref('')
        setOpen(false)
      }}>确认 </span> <span onClick={() => setOpen(false)}>取消</span>
  </div >
  return <Tippy content={<HrefInput />} interactive={true} visible={open} arrow={true} hideOnClick={false} placement="bottom" trigger="manual">
    <LinkButton active={active} setOpen={() => setOpen(!open)} view={view} />
  </Tippy>
}
