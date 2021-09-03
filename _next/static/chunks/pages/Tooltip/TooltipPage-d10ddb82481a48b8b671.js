(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4746],{64866:function(t,e,n){"use strict";n.d(e,{E:function(){return s}});var r=n(56666),i=(n(2784),n(52275)),o=i.ZP.code.withConfig({displayName:"styled__StyledCode",componentId:"sc-1xz1scc-0"})(["color:",";white-space:nowrap;",";",";"],(function(t){return t.theme.colors.secondary70}),(function(t){var e=t.highlight,n=t.primary,r=t.theme;return e&&!n&&(0,i.iv)(["background-color:",";padding:",";"],r.colors.warning10,r.spacing.xxSmall)}),(function(t){var e=t.primary,n=t.theme;return e&&(0,i.iv)(["color:",";"],n.colors.primary70)})),l=n(52322);function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}var s=function(t){return(0,l.jsx)(o,function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){(0,r.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},t))};s.defaultProps={highlight:!0}},50115:function(t,e,n){"use strict";n.d(e,{d:function(){return c}});var r=n(12359),i=n(2784),o=n(9559),l=n(52322),c=function(t){var e=t.items,n=(0,i.useContext)(o.F),c=n.activeTab,s=n.setActiveTab,a=(0,i.useMemo)((function(){var t=e.find((function(t){return t.id===c}));return t?t.render():e[0].render()}),[c,e]);return(0,i.useEffect)((function(){if(!e.find((function(t){return t.id===c}))){var t,n=null!==(t=e.find((function(t){return t.default})))&&void 0!==t?t:e[0];s(n.id)}}),[c,e,s]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(r.m,{activeTab:c,items:e,onTabClick:s}),a]})}},65475:function(t,e,n){"use strict";n.d(e,{n:function(){return m}});var r=n(2867),i=n(27964),o=n(61994),l=n(26399),c=n(5456),s=n(41159),a=n(2784),u=n(64866),p=n(42361),d=n(71087),h=(0,n(52275).ZP)(c.k).withConfig({displayName:"styled__StyledFlex",componentId:"sc-14v4ikn-0"})(["cursor:pointer;display:inline-flex;flex-direction:row;"]),f=n(52322),g=function(t){var e=t.children,n=t.title,r=(0,a.useState)(!0),i=r[0],l=r[1],c=function(){return l(!i)};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(h,{marginBottom:"xSmall",alignItems:"center",onClick:c,onKeyPress:function(t){"Enter"!==t.key&&" "!==t.key||c()},tabIndex:0,children:[i?(0,f.jsx)(p.X,{title:"Expand"}):(0,f.jsx)(d.h,{title:"Collapse"}),(0,f.jsx)(o.xv,{children:n})]}),!i&&e]})},m=function(t){var e=t.collapsible,n=t.id,s=t.propList,a=t.title,p=t.inheritedProps,d=t.nativeElement,h=function(){return s.length>0?(0,f.jsxs)(i.r,{marginBottom:e||p?"xLarge":"none",children:[(0,f.jsx)(i.i,{columns:[{header:"Prop name",hash:"propName",render:function(t){var e=t.name,n=t.required;return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(u.E,{primary:!0,children:e}),n?(0,f.jsx)("b",{children:" *"}):null]})}},{header:"Type",hash:"type",render:function(t){var e=t.types;return(0,f.jsx)(x,{types:e})}},{header:"Default",hash:"default",render:function(t){var e=t.defaultValue;return(0,f.jsx)(u.E,{highlight:!1,children:e})}},{header:"Description",hash:"description",width:"50%",render:function(t){var e=t.description;return(0,f.jsx)(o.xv,{children:e})}}],items:s}),(0,f.jsx)(o.x4,{marginTop:"xSmall",children:"Props ending with * are required"})]}):null};return e?(0,f.jsx)(g,{title:"".concat(a," Props"),children:h()}):(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)(l.s,{header:a,headerId:n,children:[function(){if(d){var t=(0,r.Z)(d,2),e=t[0],n=t[1];return(0,f.jsxs)(o.xv,{children:["Supports ",n," native ",(0,f.jsxs)(u.E,{children:["<",e," />"]})," element attributes."]})}return null}(),h(),p?(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(o.H3,{children:"Inherited"}),(0,f.jsx)(c.k,{flexDirection:"column",children:p})]}):null]})})},x=function(t){var e=t.types;return Array.isArray(e)?e.map((function(t,n){return(0,f.jsxs)(a.Fragment,{children:[t.type===s.r?(0,f.jsx)(u.E,{highlight:!1,children:t}):(0,f.jsx)(u.E,{children:t}),n<e.length-1?" | ":null]},t)})):e.type===s.r?(0,f.jsx)(u.E,{highlight:!1,children:e}):(0,f.jsx)(u.E,{children:e})}},539:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return f}});var r=n(26399),i=n(61994),o=(n(2784),n(18980)),l=n(64866),c=n(50115),s=n(56666),a=n(65475),u=n(52322);function p(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}var d=[{name:"trigger",types:"ReactNode",required:!0,description:"React Node that triggers the tooltip on hover."},{name:"placement",defaultValue:"top",types:["auto","auto-end","auto-start","bottom","bottom-end","bottom-start","left","left-end","left-start","right","right-end","right-start","top","top-end","top-start"],description:"Sets the position of the Tooltip."}],h=function(t){return(0,u.jsx)(a.n,function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?p(Object(n),!0).forEach((function(e){(0,s.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({title:"Tooltip",propList:d},t))},f=function(){var t=[{id:"examples",title:"Examples",render:function(){return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(r.s,{children:[(0,u.jsx)(i.xv,{children:"Tooltips contain information to help users understand actions or page elements. They are short, and triggered by a user hovering with their keyboard or mouse over a UI element."}),(0,u.jsx)(o.G,{children:'<Tooltip trigger={<Button>Hover</Button>} placement="right">\n  Tooltip Content\n</Tooltip>'})]}),(0,u.jsxs)(r.s,{header:"Anchor",children:[(0,u.jsxs)(i.xv,{children:["Tooltips can wrap any ",(0,u.jsx)(l.E,{children:"Element"}),". Tooltip will show on hover."]}),(0,u.jsx)(o.G,{children:'<Flex alignItems="center">\n  <Box marginRight="medium">\n    <Tooltip trigger={<Button>Button</Button>} placement="right">\n      Tooltip Content\n    </Tooltip>\n  </Box>\n\n  <Box marginRight="medium">\n    <Tooltip trigger={<WarningIcon />} placement="right">\n      Tooltip Content\n    </Tooltip>\n  </Box>\n  <Box marginRight="medium">\n    <Tooltip trigger={<span>Span</span>} placement="right">\n      Tooltip Content\n    </Tooltip>\n  </Box>\n</Flex>'})]}),(0,u.jsxs)(r.s,{header:"Placement",children:[(0,u.jsxs)(i.xv,{children:["Tooltip can be anchored in different directions with the ",(0,u.jsx)(l.E,{primary:!0,children:"placement"})," property. It will automatically find a position if there's not enough space in the chosen direction."]}),(0,u.jsx)(o.G,{children:'<Grid gridColumns="repeat(4, min-content)">\n  <Tooltip trigger={<Button>Right</Button>} placement="right">\n    Tooltip Content\n  </Tooltip>\n  <Tooltip trigger={<Button>Top</Button>} placement="top">\n    Tooltip Content\n  </Tooltip>\n  <Tooltip trigger={<Button>Left</Button>} placement="left">\n    Tooltip Content\n  </Tooltip>\n  <Tooltip trigger={<Button>Bottom</Button>} placement="bottom">\n    Tooltip Content\n  </Tooltip>\n</Grid>\n'})]})]})}},{id:"props",title:"Props",render:function(){return(0,u.jsx)(h,{})}}];return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(i.H1,{children:"Tooltip"}),(0,u.jsx)(c.d,{items:t})]})}},78434:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Tooltip/TooltipPage",function(){return n(539)}])}},function(t){t.O(0,[9774,9961,5713,1335,8965,2859,777,5733,6139,7193,6842,8099,5363,7606,7365,2734,1791,2888,179],(function(){return e=78434,t(t.s=e);var e}));var e=t.O();_N_E=e}]);