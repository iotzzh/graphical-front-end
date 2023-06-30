当涉及到BPMNJS中的两个模块，即bpmn-navigated-viewer和bpmn-viewer时，它们之间存在以下主要区别：

1. 功能和导航：bpmn-navigated-viewer模块提供了导航功能，允许用户在BPMN图形上进行平移、缩放和导航操作。它专注于提供可交互的导航体验，以便用户能够浏览和查看整个BPMN图的不同元素和流程。相比之下，bpmn-viewer模块主要用于加载和渲染BPMN图形，提供静态的图形展示功能，而不具备可导航的交互能力。

2. 功能的复杂性：bpmn-navigated-viewer模块提供了更复杂和丰富的功能，适用于需要更高级导航和交互体验的场景。它允许用户对BPMN图形进行导航、缩放、平移等操作，并提供了事件处理和交互功能的扩展性。而bpmn-viewer模块则更专注于简单地加载和显示BPMN图形，适用于不需要复杂导航和交互的情况。

3. 使用场景：bpmn-navigated-viewer模块通常适用于需要深入探索和交互的BPMN图形，例如进行流程分析、优化或监控等。它适用于需要动态浏览和导航BPMN流程的用户界面。相反，bpmn-viewer模块更适合那些只需要在应用程序中静态显示和呈现BPMN图形的场景，例如文档查看器或流程展示页面。

总结起来，bpmn-navigated-viewer模块提供了更丰富的导航和交互功能，适用于动态探索和导航BPMN图形的应用场景。而bpmn-viewer模块则专注于静态的BPMN图形展示，适用于简单的图形加载和展示需求。根据您的具体需求和应用场景，选择适合的模块来满足您的要求。

## NavigatedViewer
```javascript
export default function NavigatedViewer(options) {
  Viewer.call(this, options);
}

inherits(NavigatedViewer, Viewer);


NavigatedViewer.prototype._navigationModules = [
  KeyboardMoveModule,
  MoveCanvasModule,
  ZoomScrollModule
];

NavigatedViewer.prototype._modules = [].concat(
  Viewer.prototype._modules,
  NavigatedViewer.prototype._navigationModules
);
```

## Viewer
```javascript
export default function Viewer(options) {
  BaseViewer.call(this, options);
}

inherits(Viewer, BaseViewer);

// modules the viewer is composed of
Viewer.prototype._modules = [
  CoreModule,
  TranslateModule,
  SelectionModule,
  OverlaysModule,
  DrilldownModdule
];

// default moddle extensions the viewer is composed of
Viewer.prototype._moddleExtensions = {};
```