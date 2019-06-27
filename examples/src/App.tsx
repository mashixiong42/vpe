import 'prosemirror-view/style/prosemirror.css'
import { Schema } from 'prosemirror-model'

import * as React from 'react'
import {
  IRendererProps,
  getEventBus,
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
import { MdFormatStrikethrough } from 'react-icons/md'
import { FaSuperscript, FaSubscript } from 'react-icons/fa'

import { nodes, marks } from 'prosemirror-schema-basic'
import { strong, em, code, strikethrough, sup, sub } from '@vpe/extensions'
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
const { supTesterConfig } = sup.tester
const { subTesterConfig } = sub.tester
const { toggleStrong } = strong.command
const { toggleEm } = em.command
const { toggleCode } = code.command
const { toggleStrikethrough } = strikethrough.command
const { toggleSup } = sup.command
const { toggleSub } = sub.command

const eventBus = createEventBus()

const boldTester = createStateTesterPlugin(strongTesterConfig)
const emTester = createStateTesterPlugin(emTesterConfig)
const codeTester = createStateTesterPlugin(codeTesterConfig)
const strikethroughTester = createStateTesterPlugin(strikethroughTesterConfig)
const supTester = createStateTesterPlugin(supTesterConfig)
const subTester = createStateTesterPlugin(subTesterConfig)

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


const schemaDef = {
  marks: {
    ...marks,
    ...strikethrough.schema.marks,
    ...sup.schema.marks,
    ...sub.schema.marks
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
        <div>
          <BoldAction />
          <EmAction />
          <CodeAction />
          <StrikethroughAction />
          <SupAction />
          <SubAction />
        </div>
        <CoreView
          schema={schema}
          renderer={renderer}
          eventBus={eventBus}
          plugins={[...basicSetup({ schema, history: true }), boldTester, emTester, codeTester, strikethroughTester, supTester, subTester]}
        />
      </div>
    )
  }
}

export default App
