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
import { schema as defaultSchema } from 'prosemirror-schema-basic'

import './App.css'

const renderer = ({ editor, view }: IRendererProps) => {
  return (
    <>
      {editor}
      <p>External provided</p>
    </>
  )
}

const eventBus = createEventBus()
eventBus.on('test', (data: any) => console.log('eventbus handler  no2', data))
eventBus.on(CoreEvents.ViewUpdate, (data: any) =>
  console.log('view update', data)
)
eventBus.emit(CoreEvents.SendMeView)
eventBus.on('test-result', (data: any) => console.log('test result handler', data))
const stateTester = createStateTesterPlugin({
    resultEventName: 'test-result',
    tester: () => ({
        result: 'alright'
    })
})
class App extends React.Component {
  public componentDidMount() {
    eventBus.emit(CoreEvents.SendMeView)
  }

  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <CoreView
          renderer={renderer}
          eventBus={eventBus}
          plugins={[...basicSetup({ schema: defaultSchema, history: true }), stateTester]}
        />
      </div>
    )
  }
}

export default App
