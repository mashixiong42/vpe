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
  createOnFocusPlugin,
} from '@vpe/core'

import {
  core,
  floater,
} from '@vpe/ReactEditor'

const { CoreView } = core
const { Floater } = floater

import { FiMinus } from 'react-icons/fi'
import { MdFormatIndentDecrease, MdFormatUnderlined, MdFormatListBulleted, MdFormatListNumbered, MdLink, MdFormatQuote, MdImage } from 'react-icons/md'
import { FaSuperscript, FaSubscript, FaCode } from 'react-icons/fa'


import { Strong } from './menu/Strong'
import { Em } from './menu/Em'
import { Code } from './menu/Code'
import { Strikethrough } from './menu/Strikethrough'
import { Sub } from './menu/Sub'
import { Sup } from './menu/Sup'
import { Underline } from './menu/Underline'
import { Link } from './menu/Link'
import { Heading } from './menu/Heading'

import { nodes, marks } from 'prosemirror-schema-basic'
import {
  blockQuote,
  bulletList,
  code,
  codeBlock,
  em,
  heading,
  hr,
  image,
  lift,
  link,
  orderedList,
  paragraph,
  positions,
  strikethrough,
  strong,
  sub,
  sup,
  underline,
} from '@vpe/extensions'

import './App.css'
import './bulma.css'

const renderer = ({ editor, view }: IRendererProps) => {
  return (
    <>
      {editor}
    </>
  )
}


/* const { headingTesterConfig } = heading.tester */
const { paragraphTesterConfig } = paragraph.tester
const { codeBlockTesterConfig } = codeBlock.tester
const { blockQuoteTesterConfig } = blockQuote.tester
const { hrTesterConfig } = hr.tester
const { bulletListTesterConfig } = bulletList.tester
const { orderedListTesterConfig } = orderedList.tester
const { imageTesterConfig } = image.tester
const { positionsTesterConfig } = positions.tester

/* const { setBlockHeading } = heading.command */
const { setBlockParagraph } = paragraph.command
const { setBlockCode } = codeBlock.command
const { setBlockQuote } = blockQuote.command
const { insertHr } = hr.command
const { setBlockBulletList } = bulletList.command
const { setBlockOrderedList } = orderedList.command
const { lift: liftUp } = lift.command
const { insertImage } = image.command

const eventbus = createEventBus()

const onFocusPlugin = createOnFocusPlugin()

const boldTester = createStateTesterPlugin(strong.tester.config)
const emTester = createStateTesterPlugin(em.tester.config)
const codeTester = createStateTesterPlugin(code.tester.config)
const strikethroughTester = createStateTesterPlugin(strikethrough.tester.config)
const supTester = createStateTesterPlugin(sup.tester.config)
const subTester = createStateTesterPlugin(sub.tester.config)
const underlineTester = createStateTesterPlugin(underline.tester.config)
const linkTester = createStateTesterPlugin(link.tester.config)
const headingTester = createStateTesterPlugin(heading.tester.config)
const paragraphTester = createStateTesterPlugin(paragraphTesterConfig)
const codeBlockTester = createStateTesterPlugin(codeBlockTesterConfig)
const blockQuoteTester = createStateTesterPlugin(blockQuoteTesterConfig)
const hrTester = createStateTesterPlugin(hrTesterConfig)
const bulletListTester = createStateTesterPlugin(bulletListTesterConfig)
const orderedListTester = createStateTesterPlugin(orderedListTesterConfig)
const imageTester = createStateTesterPlugin(imageTesterConfig)
const positionsTester = createStateTesterPlugin(positionsTesterConfig)

const ParagraphAction = () => {
  const [view, setView] = React.useState<any>(undefined)
  const [active, setActive] = React.useState<any>(undefined)

  React.useEffect(() => {
    eventbus.on(CoreEvents.ViewUpdate, ({ view: viewP, prevState }: any) => {
      setView(viewP)
    })
    eventbus.on(paragraphTesterConfig.resultEventName, ({ result: { active: activeP } }: any) => {
      setActive(activeP)
    })
  }, [])
  const style = { color: active ? 'blue' : 'black' }
  return <span className="headings" style={style} onClick={
    () => {
      if (view) {
        setBlockParagraph(view!.state, view!.dispatch)
      }
    }
  }> P </span>

}


const CodeBlockAction = () => {
  const [view, setView] = React.useState<any>(undefined)
  const [active, setActive] = React.useState<any>(undefined)

  React.useEffect(() => {
    eventbus.on(CoreEvents.ViewUpdate, ({ view: viewP, prevState }: any) => {
      setView(viewP)
    })
    eventbus.on(codeBlockTesterConfig.resultEventName, ({ result: { active: activeP } }: any) => {
      setActive(activeP)
    })
  }, [])
  const style = { color: active ? 'blue' : 'black' }
  return <FaCode style={style} onClick={
    () => {
      if (view) {
        console.log('toggle block code', view)
        setBlockCode(view!.state, view!.dispatch)
      }
    }
  } />

}

const BlockQuoteAction = () => {
  const [view, setView] = React.useState<any>(undefined)
  const [active, setActive] = React.useState<any>(undefined)

  React.useEffect(() => {
    eventbus.on(CoreEvents.ViewUpdate, ({ view: viewP, prevState }: any) => {
      setView(viewP)
    })
    eventbus.on(blockQuoteTesterConfig.resultEventName, ({ result: { active: activeP } }: any) => {
      console.log('block quote test result', activeP)
      setActive(activeP)
    })
  }, [])
  const style = { color: active ? 'blue' : 'black' }
  return <MdFormatQuote style={style} onClick={
    () => {
      if (view) {
        setBlockQuote(view!.state, view!.dispatch)
      }
    }
  } />

}

const HrAction = () => {
  const [view, setView] = React.useState<any>(undefined)
  const [enabled, setEnabled] = React.useState<any>(undefined)

  React.useEffect(() => {
    eventbus.on(CoreEvents.ViewUpdate, ({ view: viewP, prevState }: any) => {
      setView(viewP)
    })
    eventbus.on(hrTesterConfig.resultEventName, ({ result: { enable } }: any) => {
      setEnabled(enable)
    })
  }, [])
  const style = { color: enabled ? 'black' : 'grey' }
  return <FiMinus style={style} onClick={
    () => {
      if (view && enabled) {
        insertHr(view!.state, view!.dispatch)
      }
    }
  } />

}


const BulletListAction = () => {
  const [view, setView] = React.useState<any>(undefined)
  const [active, setActive] = React.useState<any>(undefined)

  React.useEffect(() => {
    eventbus.on(CoreEvents.ViewUpdate, ({ view: viewP, prevState }: any) => {
      setView(viewP)
    })
    eventbus.on(bulletListTesterConfig.resultEventName, ({ result: { active: activeP } }: any) => {
      setActive(activeP)
    })
  }, [])
  const style = { color: active ? 'blue' : 'black' }
  return <MdFormatListBulleted style={style} onClick={
    () => {
      if (view) {
        setBlockBulletList(view!.state, view!.dispatch)
      }
    }
  } />

}

const OrderedListAction = () => {
  const [view, setView] = React.useState<any>(undefined)
  const [active, setActive] = React.useState<any>(undefined)

  React.useEffect(() => {
    eventbus.on(CoreEvents.ViewUpdate, ({ view: viewP, prevState }: any) => {
      setView(viewP)
    })
    eventbus.on(orderedListTesterConfig.resultEventName, ({ result: { active: activeP } }: any) => {
      setActive(activeP)
    })
  }, [])
  const style = { color: active ? 'blue' : 'black' }
  return <MdFormatListNumbered style={style} onClick={
    () => {
      if (view) {
        setBlockOrderedList(view!.state, view!.dispatch)
      }
    }
  } />

}

const LiftAction = () => {
  const [view, setView] = React.useState<any>(undefined)

  React.useEffect(() => {
    eventbus.on(CoreEvents.ViewUpdate, ({ view: viewP, prevState }: any) => {
      setView(viewP)
    })
  }, [])
  const style = { color: 'black' }
  return <MdFormatIndentDecrease style={style} onClick={() => {
    if (view)
      liftUp(view!.state, view!.dispatch)
  }} />

}

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

const ImageAction = () => {
  const [view, setView] = React.useState<any>(undefined)
  const [open, setOpen] = React.useState<boolean>(false)

  const [enabled, setEnabled] = React.useState<any>(null)

  const [title, setTitle] = React.useState<string>('')

  React.useEffect(() => {
    eventbus.on(CoreEvents.ViewUpdate, ({ view: viewP, prevState }: any) => {
      setView(viewP)
    })
    eventbus.on(imageTesterConfig.resultEventName, ({ result: { enable } }: any) => {
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
          insertImage(view!.state, view!.dispatch, { title, src: '/images/480x320.png' })
          setTitle('')
          setOpen(false)
        }}>确认 </span> <span onClick={() => setOpen(false)}>取消</span>
    </div >
  </div>
  return <Tippy content={<ImageSelection />} interactive={true} visible={open} arrow={true} hideOnClick={false} placement="bottom" trigger="manual">
    <ImageButton enabled={enabled} setOpen={() => setOpen(!open)} view={view} />
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
  nodes: {
    ...nodes,
    ...bulletList.schema.nodes,
    ...orderedList.schema.nodes
  }
}

const schema = new Schema(schemaDef)

class App extends React.Component {
  public view: any
  public preState: any

  public render() {
    return (
      <div className="App">
        <div className="top-toolbar">
          <Strong eventbus={eventbus} />
          <Em eventbus={eventbus} />
          <Code eventbus={eventbus} />
          <Strikethrough eventbus={eventbus} />
          <Sub eventbus={eventbus} />
          <Sup eventbus={eventbus} />
          <Underline eventbus={eventbus} />
          <Link eventbus={eventbus} />
          <Heading eventbus={eventbus} level={1} />
          <Heading eventbus={eventbus} level={2} />
          <ParagraphAction />
          <CodeBlockAction />
          <BlockQuoteAction />
          <HrAction />
          <BulletListAction />
          <OrderedListAction />
          <LiftAction />
          <ImageAction />
        </div>
        <div className="content editor-area">
          <CoreView
            schema={schema}
            renderer={renderer}
            eventBus={eventbus}
            plugins={[...basicSetup({ schema, history: true }), boldTester, emTester, codeTester, strikethroughTester, supTester, subTester, underlineTester, linkTester, headingTester, paragraphTester, codeBlockTester, blockQuoteTester, hrTester, bulletListTester, orderedListTester, imageTester, positionsTester, onFocusPlugin]}
          />
        </div>

        <Floater eventBus={eventbus}>
          <>
            <Strong eventbus={eventbus} />
            <Em eventbus={eventbus} />
            <Code eventbus={eventbus} />
            <Strikethrough eventbus={eventbus} />
            <Sub eventbus={eventbus} />
            <Sup eventbus={eventbus} />
            <Underline eventbus={eventbus} />
          </>
        </Floater>
      </div>
    )
  }
}

export default App
