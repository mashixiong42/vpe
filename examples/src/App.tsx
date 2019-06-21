import 'prosemirror-view/style/prosemirror.css'
import * as React from 'react'
import {
  CoreView,
  IRendererProps,
  getEventBus,
  basicSetup,
  createEventBus,
  CoreEvents,
  createStateTesterPlugin,
} from '@vpe/core'
import { FiBold, FiItalic, FiCode } from 'react-icons/fi'
import { MdFormatStrikethrough } from 'react-icons/md'

import { schema as defaultSchema } from 'prosemirror-schema-basic'
import { strong, em, code, strikethrough } from '@vpe/extensions'
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
const { toggleStrong } = strong.command
const { toggleEm } = em.command
const { toggleCode } = code.command
const { toggleStrikethrough } = strikethrough.command

const eventBus = createEventBus()

const boldTester = createStateTesterPlugin(strongTesterConfig)
const emTester = createStateTesterPlugin(emTesterConfig)
const codeTester = createStateTesterPlugin(codeTesterConfig)
const strikethroughTester = createStateTesterPlugin(strikethroughTesterConfig)

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


const schema = {
  ...defaultSchema, marks: {
    ...defaultSchema.marks,
    ...strikethrough.schema
  }
}

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
        </div>
        <CoreView
          renderer={renderer}
          eventBus={eventBus}
          plugins={[...basicSetup({ schema, history: true }), boldTester, emTester, codeTester, strikethroughTester]}
        />
      </div>
    )
  }
}

export default App
