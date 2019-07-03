import 'prosemirror-view/style/prosemirror.css'
import { Schema } from 'prosemirror-model'
import * as React from 'react'

import {
  IRendererProps,
  basicSetup,
  createEventBus,
  createStateTesterPlugin,
  createOnFocusPlugin,
} from '@vpe/core'

import {
  core,
  floater,
} from '@vpe/ReactEditor'

const { CoreView } = core
const { Floater } = floater

import { Strong } from './menu/Strong'
import { Em } from './menu/Em'
import { Code } from './menu/Code'
import { Strikethrough } from './menu/Strikethrough'
import { Sub } from './menu/Sub'
import { Sup } from './menu/Sup'
import { Underline } from './menu/Underline'
import { Link } from './menu/Link'
import { Heading } from './menu/Heading'
import { Paragraph } from './menu/Paragraph'
import { Codeblock } from './menu/Codeblock'
import { BlockQuote } from './menu/BlockQuote'
import { Hr } from './menu/Hr'
import { BulletList } from './menu/BulletList'
import { OrderedList } from './menu/OrderedList'
import { Lift } from './menu/Lift'
import { Image } from './menu/Image'

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

const { positionsTesterConfig } = positions.tester

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
const paragraphTester = createStateTesterPlugin(paragraph.tester.config)
const codeBlockTester = createStateTesterPlugin(codeBlock.tester.config)
const blockQuoteTester = createStateTesterPlugin(blockQuote.tester.config)
const hrTester = createStateTesterPlugin(hr.tester.config)
const bulletListTester = createStateTesterPlugin(bulletList.tester.config)
const orderedListTester = createStateTesterPlugin(orderedList.tester.config)
const imageTester = createStateTesterPlugin(image.tester.config)
const positionsTester = createStateTesterPlugin(positionsTesterConfig)

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
          <Paragraph eventbus={eventbus} />
          <Codeblock eventbus={eventbus} />
          <BlockQuote eventbus={eventbus} />
          <Hr eventbus={eventbus} />
          <BulletList eventbus={eventbus} />
          <OrderedList eventbus={eventbus} />
          <Lift eventbus={eventbus} />
          <Image eventbus={eventbus} />
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
