import 'prosemirror-view/style/prosemirror.css'
import { Schema } from 'prosemirror-model'

import Tippy from '@tippy.js/react'

import * as React from 'react'

const { forwardRef } = React

import {
  IRendererProps,
  basicSetup,
  createEventBus,
  CoreEvents,
  createStateTesterPlugin,
} from '@vpe/core'

import {
  core
} from '@vpe/ReactEditor'

const { CoreView } = core

import { FiBold, FiItalic, FiCode } from 'react-icons/fi'
import { MdFormatStrikethrough, MdFormatUnderlined, MdLink } from 'react-icons/md'
import { FaSuperscript, FaSubscript } from 'react-icons/fa'

import { nodes, marks } from 'prosemirror-schema-basic'
import { strong, em, code, strikethrough, sup, sub, underline, link } from '@vpe/extensions'

import './App.css'

const renderer = ({ editor, view }: IRendererProps) => {
  return (
    <>
      {editor}
      <p>External provided</p>
    </>
  )
}

const { strongTesterConfig } = strong.tester
const { emTesterConfig } = em.tester
const { codeTesterConfig } = code.tester
const { strikethroughTesterConfig } = strikethrough.tester
const { underlineTesterConfig } = underline.tester
const { linkTesterConfig } = link.tester
const { supTesterConfig } = sup.tester
const { subTesterConfig } = sub.tester
const { toggleStrong } = strong.command
const { toggleEm } = em.command
const { toggleCode } = code.command
const { toggleStrikethrough } = strikethrough.command
const { toggleSup } = sup.command
const { toggleSub } = sub.command
const { toggleUnderline } = underline.command
const { toggleLink } = link.command

const eventBus = createEventBus()

const boldTester = createStateTesterPlugin(strongTesterConfig)
const emTester = createStateTesterPlugin(emTesterConfig)
const codeTester = createStateTesterPlugin(codeTesterConfig)
const strikethroughTester = createStateTesterPlugin(strikethroughTesterConfig)
const supTester = createStateTesterPlugin(supTesterConfig)
const subTester = createStateTesterPlugin(subTesterConfig)
const underlineTester = createStateTesterPlugin(underlineTesterConfig)
const linkTester = createStateTesterPlugin(linkTesterConfig)

const BoldAction = () => {
  const [view, setView] = React.useState<any>(undefined)
  const [active, setActive] = React.useState<any>(undefined)

  React.useEffect(() => {
    eventBus.on(CoreEvents.ViewUpdate, ({ view: viewP, prevState }: any) => {
      setView(viewP)
    })
    eventBus.on(strongTesterConfig.resultEventName, ({ result: { active: activeP } }: any) => {
      setActive(activeP)
    })
  }, [])
  const style = { color: active ? 'blue' : 'black' }
  return <FiBold style={style} onClick={
    () => {
      if (view) {
        toggleStrong(view!.state, view!.dispatch)
      }
    }
  } />

}

const EmAction = () => {
  const [view, setView] = React.useState<any>(undefined)
  const [active, setActive] = React.useState<any>(undefined)

  React.useEffect(() => {
    eventBus.on(CoreEvents.ViewUpdate, ({ view: viewP, prevState }: any) => {
      setView(viewP)
    })
    eventBus.on(emTesterConfig.resultEventName, ({ result: { active: activeP } }: any) => {
      setActive(activeP)
    })
  }, [])
  const style = { color: active ? 'blue' : 'black' }
  return <FiItalic style={style} onClick={
    () => {
      if (view) {
        toggleEm(view!.state, view!.dispatch)
      }
    }
  } />

}

const CodeAction = () => {
  const [view, setView] = React.useState<any>(undefined)
  const [active, setActive] = React.useState<any>(undefined)

  React.useEffect(() => {
    eventBus.on(CoreEvents.ViewUpdate, ({ view: viewP, prevState }: any) => {
      setView(viewP)
    })
    eventBus.on(codeTesterConfig.resultEventName, ({ result: { active: activeP } }: any) => {
      setActive(activeP)
    })
  }, [])
  const style = { color: active ? 'blue' : 'black' }
  return <FiCode style={style} onClick={
    () => {
      if (view) {
        toggleCode(view!.state, view!.dispatch)
      }
    }
  } />

}


const StrikethroughAction = () => {
  const [view, setView] = React.useState<any>(undefined)
  const [active, setActive] = React.useState<any>(undefined)

  React.useEffect(() => {
    eventBus.on(CoreEvents.ViewUpdate, ({ view: viewP, prevState }: any) => {
      setView(viewP)
    })
    eventBus.on(strikethroughTesterConfig.resultEventName, ({ result: { active: activeP } }: any) => {
      setActive(activeP)
    })
  }, [])
  const style = { color: active ? 'blue' : 'black' }
  return <MdFormatStrikethrough style={style} onClick={
    () => {
      if (view) {
        toggleStrikethrough(view!.state, view!.dispatch)
      }
    }
  } />

}


const SupAction = () => {
  const [view, setView] = React.useState<any>(undefined)
  const [active, setActive] = React.useState<any>(undefined)

  React.useEffect(() => {
    eventBus.on(CoreEvents.ViewUpdate, ({ view: viewP, prevState }: any) => {
      setView(viewP)
    })
    eventBus.on(supTesterConfig.resultEventName, ({ result: { active: activeP } }: any) => {
      setActive(activeP)
    })
  }, [])
  const style = { color: active ? 'blue' : 'black' }
  return <FaSuperscript style={style} onClick={
    () => {
      if (view) {
        toggleSup(view!.state, view!.dispatch)
      }
    }
  } />

}

const SubAction = () => {
  const [view, setView] = React.useState<any>(undefined)
  const [active, setActive] = React.useState<any>(undefined)

  React.useEffect(() => {
    eventBus.on(CoreEvents.ViewUpdate, ({ view: viewP, prevState }: any) => {
      setView(viewP)
    })
    eventBus.on(subTesterConfig.resultEventName, ({ result: { active: activeP } }: any) => {
      setActive(activeP)
    })
  }, [])
  const style = { color: active ? 'blue' : 'black' }
  return <FaSubscript style={style} onClick={
    () => {
      if (view) {
        toggleSub(view!.state, view!.dispatch)
      }
    }
  } />

}

const UnderlineAction = () => {
  const [view, setView] = React.useState<any>(undefined)
  const [active, setActive] = React.useState<any>(undefined)

  React.useEffect(() => {
    eventBus.on(CoreEvents.ViewUpdate, ({ view: viewP, prevState }: any) => {
      setView(viewP)
    })
    eventBus.on(underlineTesterConfig.resultEventName, ({ result: { active: activeP } }: any) => {
      setActive(activeP)
    })
  }, [])
  const style = { color: active ? 'blue' : 'black' }
  return <MdFormatUnderlined style={style} onClick={
    () => {
      if (view) {
        toggleUnderline(view!.state, view!.dispatch)
      }
    }
  } />

}


const LinkButton = forwardRef((props: any, ref: any) => {
  const { setOpen, active, view } = props

  const style = { color: active ? 'blue' : 'black' }
  return <span ref={ref}> <MdLink style={style} onClick={
    () => {
      if (!view || !view.state.selection)
        return
      if (active) {
        toggleLink(view!.state, view!.dispatch)
        return
      }
      setOpen()
    }
  } /></span>
})

const LinkAction = () => {
  const [view, setView] = React.useState<any>(undefined)
  const [open, setOpen] = React.useState<boolean>(false)

  const [active, setActive] = React.useState<any>(null)

  const [href, setHref] = React.useState<string>('')

  React.useEffect(() => {
    eventBus.on(CoreEvents.ViewUpdate, ({ view: viewP, prevState }: any) => {
      setView(viewP)
    })
    eventBus.on(linkTesterConfig.resultEventName, ({ result: { active: activeP } }: any) => {
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
        toggleLink(view!.state, view!.dispatch, { href })
        setHref('')
        setOpen(false)
      }}>确认 </span> <span onClick={() => setOpen(false)}>取消</span>
  </div >
  return <Tippy content={<HrefInput />} interactive={true} visible={open} arrow={true} hideOnClick={false} placement="bottom" trigger="manual">
    <LinkButton active={active} setOpen={() => setOpen(!open)} view={view} />
  </Tippy>
}

const schemaDef = {
  marks: {
    ...marks,
    ...strikethrough.schema.marks,
    ...sup.schema.marks,
    ...sub.schema.marks,
    ...underline.schema.marks,
  },
  nodes
}

const schema = new Schema(schemaDef)
console.log(schema)

class App extends React.Component {
  public view: any
  public preState: any

  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="top-toolbar">
          <BoldAction />
          <EmAction />
          <CodeAction />
          <StrikethroughAction />
          <SupAction />
          <SubAction />
          <UnderlineAction />
          <LinkAction />
        </div>
        <CoreView
          schema={schema}
          renderer={renderer}
          eventBus={eventBus}
          plugins={[...basicSetup({ schema, history: true }), boldTester, emTester, codeTester, strikethroughTester, supTester, subTester, underlineTester, linkTester]}
        />
      </div>
    )
  }
}

export default App
