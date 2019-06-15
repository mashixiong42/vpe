# Structure
**CoreView**
- A react wrapper on top of prosemirror-view
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
- 
