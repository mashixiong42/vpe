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

import { FiBold, FiItalic, FiCode, FiMinus } from 'react-icons/fi'
import { MdFormatStrikethrough, MdFormatIndentDecrease, MdFormatUnderlined, MdFormatListBulleted, MdFormatListNumbered, MdLink, MdFormatQuote, MdImage } from 'react-icons/md'
import { FaSuperscript, FaSubscript, FaCode } from 'react-icons/fa'

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

const { strongTesterConfig } = strong.tester
const { emTesterConfig } = em.tester
const { codeTesterConfig } = code.tester
const { strikethroughTesterConfig } = strikethrough.tester
const { underlineTesterConfig } = underline.tester
const { linkTesterConfig } = link.tester
const { supTesterConfig } = sup.tester
const { subTesterConfig } = sub.tester
const { headingTesterConfig } = heading.tester
const { paragraphTesterConfig } = paragraph.tester
const { codeBlockTesterConfig } = codeBlock.tester
const { blockQuoteTesterConfig } = blockQuote.tester
const { hrTesterConfig } = hr.tester
const { bulletListTesterConfig } = bulletList.tester
const { orderedListTesterConfig } = orderedList.tester
const { imageTesterConfig } = image.tester
const { positionsTesterConfig } = positions.tester

const { toggleStrong } = strong.command
const { toggleEm } = em.command
const { toggleCode } = code.command
const { toggleStrikethrough } = strikethrough.command
const { toggleSup } = sup.command
const { toggleSub } = sub.command
const { toggleUnderline } = underline.command
const { toggleLink } = link.command
const { setBlockHeading } = heading.command
const { setBlockParagraph } = paragraph.command
const { setBlockCode } = codeBlock.command
const { setBlockQuote } = blockQuote.command
const { insertHr } = hr.command
const { setBlockBulletList } = bulletList.command
const { setBlockOrderedList } = orderedList.command
const { lift: liftUp } = lift.command
const { insertImage } = image.command

const eventBus = createEventBus()

const boldTester = createStateTesterPlugin(strongTesterConfig)
const emTester = createStateTesterPlugin(emTesterConfig)
const codeTester = createStateTesterPlugin(codeTesterConfig)
const strikethroughTester = createStateTesterPlugin(strikethroughTesterConfig)
const supTester = createStateTesterPlugin(supTesterConfig)
const subTester = createStateTesterPlugin(subTesterConfig)
const underlineTester = createStateTesterPlugin(underlineTesterConfig)
const linkTester = createStateTesterPlugin(linkTesterConfig)
const headingTester = createStateTesterPlugin(headingTesterConfig)
const paragraphTester = createStateTesterPlugin(paragraphTesterConfig)
const codeBlockTester = createStateTesterPlugin(codeBlockTesterConfig)
const blockQuoteTester = createStateTesterPlugin(blockQuoteTesterConfig)
const hrTester = createStateTesterPlugin(hrTesterConfig)
const bulletListTester = createStateTesterPlugin(bulletListTesterConfig)
const orderedListTester = createStateTesterPlugin(orderedListTesterConfig)
const imageTester = createStateTesterPlugin(imageTesterConfig)
const positionsTester = createStateTesterPlugin(positionsTesterConfig)

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

const H1Action = () => {
  const [view, setView] = React.useState<any>(undefined)
  const [active, setActive] = React.useState<any>(undefined)

  React.useEffect(() => {
    eventBus.on(CoreEvents.ViewUpdate, ({ view: viewP, prevState }: any) => {
      setView(viewP)
    })
    eventBus.on(headingTesterConfig.resultEventName, ({ result: { active: activeP } }: any) => {
      const h1Active = activeP.find(({ level }: any) => level === 1)
      setActive(h1Active && h1Active.active || false)
    })
  }, [])
  const style = { color: active ? 'blue' : 'black' }
  return <span className="headings" style={style} onClick={
    () => {
      if (view) {
        setBlockHeading(view!.state, view!.dispatch, { level: 1 })
      }
    }
  }>H1 </span>

}

const H2Action = () => {
  const [view, setView] = React.useState<any>(undefined)
  const [active, setActive] = React.useState<any>(undefined)

  React.useEffect(() => {
    eventBus.on(CoreEvents.ViewUpdate, ({ view: viewP, prevState }: any) => {
      setView(viewP)
    })
    eventBus.on(headingTesterConfig.resultEventName, ({ result: { active: activeP } }: any) => {
      const h1Active = activeP.find(({ level }: any) => level === 2)
      setActive(h1Active && h1Active.active || false)
    })
  }, [])
  const style = { color: active ? 'blue' : 'black' }
  return <span className="headings" style={style} onClick={
    () => {
      if (view) {
        setBlockHeading(view!.state, view!.dispatch, { level: 2 })
      }
    }
  }>H2 </span>

}


const ParagraphAction = () => {
  const [view, setView] = React.useState<any>(undefined)
  const [active, setActive] = React.useState<any>(undefined)

  React.useEffect(() => {
    eventBus.on(CoreEvents.ViewUpdate, ({ view: viewP, prevState }: any) => {
      setView(viewP)
    })
    eventBus.on(paragraphTesterConfig.resultEventName, ({ result: { active: activeP } }: any) => {
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
    eventBus.on(CoreEvents.ViewUpdate, ({ view: viewP, prevState }: any) => {
      setView(viewP)
    })
    eventBus.on(codeBlockTesterConfig.resultEventName, ({ result: { active: activeP } }: any) => {
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
    eventBus.on(CoreEvents.ViewUpdate, ({ view: viewP, prevState }: any) => {
      setView(viewP)
    })
    eventBus.on(blockQuoteTesterConfig.resultEventName, ({ result: { active: activeP } }: any) => {
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
    eventBus.on(CoreEvents.ViewUpdate, ({ view: viewP, prevState }: any) => {
      setView(viewP)
    })
    eventBus.on(hrTesterConfig.resultEventName, ({ result: { enable } }: any) => {
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
    eventBus.on(CoreEvents.ViewUpdate, ({ view: viewP, prevState }: any) => {
      setView(viewP)
    })
    eventBus.on(bulletListTesterConfig.resultEventName, ({ result: { active: activeP } }: any) => {
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
    eventBus.on(CoreEvents.ViewUpdate, ({ view: viewP, prevState }: any) => {
      setView(viewP)
    })
    eventBus.on(orderedListTesterConfig.resultEventName, ({ result: { active: activeP } }: any) => {
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
    eventBus.on(CoreEvents.ViewUpdate, ({ view: viewP, prevState }: any) => {
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
    eventBus.on(CoreEvents.ViewUpdate, ({ view: viewP, prevState }: any) => {
      setView(viewP)
    })
    eventBus.on(imageTesterConfig.resultEventName, ({ result: { enable } }: any) => {
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
console.log(schema)

eventBus.on(positionsTesterConfig.resultEventName, (pos: any) => console.log('positions: ', pos))

class App extends React.Component {
  public view: any
  public preState: any

  public render() {
    return (
      <div className="App">
        <div className="top-toolbar">
          <BoldAction />
          <EmAction />
          <CodeAction />
          <StrikethroughAction />
          <SupAction />
          <SubAction />
          <UnderlineAction />
          <LinkAction />
          <H1Action />
          <H2Action />
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
            eventBus={eventBus}
            plugins={[...basicSetup({ schema, history: true }), boldTester, emTester, codeTester, strikethroughTester, supTester, subTester, underlineTester, linkTester, headingTester, paragraphTester, codeBlockTester, blockQuoteTester, hrTester, bulletListTester, orderedListTester, imageTester, positionsTester]}
          />
        </div>
      </div>
    )
  }
}

export default App
