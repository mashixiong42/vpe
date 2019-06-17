VPE, Very Programmable Editor, based on
[ProseMirror](https://prosemirror.net)

# The Idea

[ProseMirror](https://prosemirror.net), developed by the great  [Marijn Haverbeke, marijnh @ github](https://github.com/marijnh),  is a very powerfull library for building web based editors. Some of the world's leading publishers or softwarehouses with most demanding use cases chose ProseMirror as the core to develop their web editor, including New York Times, the Guardian and Atlassian.

> The core library is not an easy drop-in component—we are prioritizing modularity and customizeability over simplicity, with the hope that, in the future, people will distribute drop-in editors based on ProseMirror.

There is long and steep learning curve to get ProseMirror's components in place to develop custom editors. While ProseMirror is powerfull, the way it is organized is not very intuitive.

While we use ProseMirror to develop our inhouse editor, we found a need to be able to further decouple ProseMirror core view and any other view that is linked to ProseMirror but could be placed anyone in the DOM and could work work with any UI framework. We developed an event bus plugin that would emitt ProseMirror view update event to any one listens to it. This gives us the power we need to develop our custom editor anyway we want to.

We also develop an Extension structure on top of ProseMirror's plugin system to organize all functions that need to be built on top of ProseMirror. The extension structure is more like a development protocol rather than a framework. But if all functions were developed withe same extension structure, it would be much easier to add more functions by the community, for the community and of the community.

Work In Progress.
