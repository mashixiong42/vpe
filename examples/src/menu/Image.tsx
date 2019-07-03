// Subscript

import React, { useState, forwardRef } from 'react'
import { IEventbusProps } from '../commonTypes'
import { CoreEvents } from '@vpe/core'
import { image } from '@vpe/extensions'
import { MdImage } from 'react-icons/md'
import Tippy from '@tippy.js/react'

const { tester, command } = image

const ImageButton = forwardRef((props: any, ref: any) => {
  const { setOpen, enabled, view } = props

  const style = { color: enabled ? 'black' : 'grey' }
  return <span ref={ref}> <MdImage style={style} onClick={
    () => {
      if (!view || !view.state.selection)
        return
      setOpen()
    }
  } /></span>
})

export const Image = ({ eventbus }: IEventbusProps) => {
  const [view, setView] = useState<any>(undefined)
  const [open, setOpen] = useState<boolean>(false)

  const [enabled, setEnabled] = React.useState<any>(null)

  const [title, setTitle] = React.useState<string>('')

  React.useEffect(() => {
    eventbus.on(CoreEvents.ViewUpdate, ({ view: viewP }: any) => {
      setView(viewP)
    })
    eventbus.on(tester.ResultEventName, ({ result: { enable } }: any) => {
      setEnabled(enable)
    })
  }, [])

  const ImageSelection = () => <div className="image-selection">
    <div className="image-preview">
      <img src="/images/480x320.png" />
    </div>
    <p> <em>Please implement your own image upload component</em> </p>
    <div className="image-buttons">
      <span onClick={
        () => {
          if (!view) {
            setOpen(false)
            return
          }
          command.run(view!.state, view!.dispatch, { title, src: '/images/480x320.png' })
          setTitle('')
          setOpen(false)
        }}>确认 </span> <span onClick={() => setOpen(false)}>取消</span>
    </div >
  </div>
  return <Tippy content={<ImageSelection />} interactive={true} visible={open} arrow={true} hideOnClick={false} placement="bottom" trigger="manual">
    <ImageButton enabled={enabled} setOpen={() => setOpen(!open)} view={view} />
  </Tippy>
}
