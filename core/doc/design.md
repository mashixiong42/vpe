# Structure
                       **  Co reV iew **
              - A react wrapper on top of   p r o s e m i r r o r - view
                            - props:
```
pmMountKey?: key of the div to mount the editor
pmProps?: object with keys map to prosemirror-view handlers
renderer: (editor, view, data) => React.Component : the render that renders the
editor as part of larger UI. It can use the view to render extra components such
as toolbar,side toolbar, bottom editor status .... Data is used by the editor to
pass additional information deepedning on ontext...

```

## Core plugins
              - EventBusPlugin
              - ViewUpdateemitter

## Extension
### Structure

- schema
  - nodes
  - marks
- inputrules
- keymap
- plugins
- test : (view: any, state: any) => any : test if current state, or commands can be applied now.
- nodeView
- menuItem
  - react
  - vue
  - dom
- externalView : any view that is outside / indepenent of the ProseMirror view
  - react
  - vue
  - dom
