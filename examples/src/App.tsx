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
import { FiBold } from 'react-icons/fi'
import { schema as defaultSchema } from 'prosemirror-schema-basic'
import { strong } from '@vpe/extensions'
import './App.css'
import { toggleMark } from 'prosemirror-commands'

const renderer = ({ editor, view }: IRendererProps) => {
  return (
    <>
      {editor}
      <p>External provided</p>
    </>
  )
}

const { strongTesterConfig } = strong.tester

const eventBus = createEventBus()

eventBus.on(strongTesterConfig.resultEventName, (data: any) => console.log('bold test result handler', data))

const boldTester = createStateTesterPlugin(strongTesterConfig)

const BoldAction = () => {
  const [view, setView] = React.useState<any>(undefined)
  const [active, setActive] = React.useState<any>(undefined)

  React.useEffect(() => {
    eventBus.on(CoreEvents.ViewUpdate, ({ view: viewP, prevState }: any) => {
      console.log('update view')
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
        toggleMark(view!.state.schema.marks.strong)(view!.state, view!.dispatch)
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
        </div>
        <CoreView
          renderer={renderer}
          eventBus={eventBus}
          plugins={[...basicSetup({ schema: defaultSchema, history: true }), boldTester]}
        />
      </div>
    )
  }
}

export default App
