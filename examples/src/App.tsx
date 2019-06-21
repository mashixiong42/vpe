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


import { schema as defaultSchema } from 'prosemirror-schema-basic'
import { strong, em, code } from '@vpe/extensions'
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
const { toggleStrong } = strong.command
const { toggleEm } = em.command
const { toggleCode } = code.command

const eventBus = createEventBus()

const boldTester = createStateTesterPlugin(strongTesterConfig)
const emTester = createStateTesterPlugin(emTesterConfig)
const codeTester = createStateTesterPlugin(codeTesterConfig)

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
        </div>
        <CoreView
          renderer={renderer}
          eventBus={eventBus}
          plugins={[...basicSetup({ schema: defaultSchema, history: true }), boldTester, emTester, codeTester]}
        />
      </div>
    )
  }
}

export default App
