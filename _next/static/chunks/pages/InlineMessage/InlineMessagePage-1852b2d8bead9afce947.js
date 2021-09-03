(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1597],{40851:function(e,n,r){"use strict";r.d(n,{uu:function(){return d},Pt:function(){return p},Oq:function(){return h},vH:function(){return m}});var t=r(56666),i=(r(2784),r(59282)),s=r(64866),a=r(65475),o=r(52322);function c(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?c(Object(r),!0).forEach((function(n){(0,t.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}var d=[{name:"header",types:"string",description:"Optional header to display in message."},{name:"messages",types:(0,o.jsx)(i.p,{href:"#message-item-prop-table",children:"MessageItem"}),description:(0,o.jsxs)(o.Fragment,{children:["See ",(0,o.jsx)(i.p,{href:"#message-item-prop-table",children:"below"})," for usage."]}),required:!0},{name:"type",types:["success","error","warning","info"],description:"Determines the style of message to display.",defaultValue:"success"},{name:"onClose",types:"() => void",description:"Function that will be called on close events."}],u=[{name:"text",types:"string",description:"Message to be displayed.",required:!0},{name:"link",types:(0,o.jsx)(i.p,{href:"#message-link-item-prop-table",children:"MessageLinkItem"}),description:(0,o.jsxs)(o.Fragment,{children:["See ",(0,o.jsx)(i.p,{href:"#message-link-item-prop-table",children:"below"})," for usage."]})}],p=[{name:"external",types:"boolean",description:(0,o.jsxs)(o.Fragment,{children:["Shows an external icons when the ",(0,o.jsx)(s.E,{primary:!0,children:"external"}),' flag is set and target="_blank".']})},{name:"href",types:"string",description:"Same as a HTML anchor href attribute."},{name:"text",types:"string",description:"Link text to display."},{name:"target",types:"string",description:"Same as a HTML anchor target attribute."}],h=function(e){return(0,o.jsx)(a.n,l(l({title:"",propList:u},e),{},{id:"message-item-prop-table"}))},m=function(e){return(0,o.jsx)(a.n,l(l({title:"",propList:p},e),{},{id:"message-link-item-prop-table"}))}},64866:function(e,n,r){"use strict";r.d(n,{E:function(){return c}});var t=r(56666),i=(r(2784),r(52275)),s=i.ZP.code.withConfig({displayName:"styled__StyledCode",componentId:"sc-1xz1scc-0"})(["color:",";white-space:nowrap;",";",";"],(function(e){return e.theme.colors.secondary70}),(function(e){var n=e.highlight,r=e.primary,t=e.theme;return n&&!r&&(0,i.iv)(["background-color:",";padding:",";"],t.colors.warning10,t.spacing.xxSmall)}),(function(e){var n=e.primary,r=e.theme;return n&&(0,i.iv)(["color:",";"],r.colors.primary70)})),a=r(52322);function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}var c=function(e){return(0,a.jsx)(s,function(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){(0,t.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}({},e))};c.defaultProps={highlight:!0}},50115:function(e,n,r){"use strict";r.d(n,{d:function(){return o}});var t=r(12359),i=r(2784),s=r(9559),a=r(52322),o=function(e){var n=e.items,r=(0,i.useContext)(s.F),o=r.activeTab,c=r.setActiveTab,l=(0,i.useMemo)((function(){var e=n.find((function(e){return e.id===o}));return e?e.render():n[0].render()}),[o,n]);return(0,i.useEffect)((function(){if(!n.find((function(e){return e.id===o}))){var e,r=null!==(e=n.find((function(e){return e.default})))&&void 0!==e?e:n[0];c(r.id)}}),[o,n,c]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.m,{activeTab:o,items:n,onTabClick:c}),l]})}},65475:function(e,n,r){"use strict";r.d(n,{n:function(){return f}});var t=r(2867),i=r(27964),s=r(61994),a=r(26399),o=r(5456),c=r(41159),l=r(2784),d=r(64866),u=r(42361),p=r(71087),h=(0,r(52275).ZP)(o.k).withConfig({displayName:"styled__StyledFlex",componentId:"sc-14v4ikn-0"})(["cursor:pointer;display:inline-flex;flex-direction:row;"]),m=r(52322),g=function(e){var n=e.children,r=e.title,t=(0,l.useState)(!0),i=t[0],a=t[1],o=function(){return a(!i)};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(h,{marginBottom:"xSmall",alignItems:"center",onClick:o,onKeyPress:function(e){"Enter"!==e.key&&" "!==e.key||o()},tabIndex:0,children:[i?(0,m.jsx)(u.X,{title:"Expand"}):(0,m.jsx)(p.h,{title:"Collapse"}),(0,m.jsx)(s.xv,{children:r})]}),!i&&n]})},f=function(e){var n=e.collapsible,r=e.id,c=e.propList,l=e.title,u=e.inheritedProps,p=e.nativeElement,h=function(){return c.length>0?(0,m.jsxs)(i.r,{marginBottom:n||u?"xLarge":"none",children:[(0,m.jsx)(i.i,{columns:[{header:"Prop name",hash:"propName",render:function(e){var n=e.name,r=e.required;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(d.E,{primary:!0,children:n}),r?(0,m.jsx)("b",{children:" *"}):null]})}},{header:"Type",hash:"type",render:function(e){var n=e.types;return(0,m.jsx)(x,{types:n})}},{header:"Default",hash:"default",render:function(e){var n=e.defaultValue;return(0,m.jsx)(d.E,{highlight:!1,children:n})}},{header:"Description",hash:"description",width:"50%",render:function(e){var n=e.description;return(0,m.jsx)(s.xv,{children:n})}}],items:c}),(0,m.jsx)(s.x4,{marginTop:"xSmall",children:"Props ending with * are required"})]}):null};return n?(0,m.jsx)(g,{title:"".concat(l," Props"),children:h()}):(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)(a.s,{header:l,headerId:r,children:[function(){if(p){var e=(0,t.Z)(p,2),n=e[0],r=e[1];return(0,m.jsxs)(s.xv,{children:["Supports ",r," native ",(0,m.jsxs)(d.E,{children:["<",n," />"]})," element attributes."]})}return null}(),h(),u?(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(s.H3,{children:"Inherited"}),(0,m.jsx)(o.k,{flexDirection:"column",children:u})]}):null]})})},x=function(e){var n=e.types;return Array.isArray(n)?n.map((function(e,r){return(0,m.jsxs)(l.Fragment,{children:[e.type===c.r?(0,m.jsx)(d.E,{highlight:!1,children:e}):(0,m.jsx)(d.E,{children:e}),r<n.length-1?" | ":null]},e)})):n.type===c.r?(0,m.jsx)(d.E,{highlight:!1,children:n}):(0,m.jsx)(d.E,{children:n})}},80508:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return x}});var t=r(26399),i=r(61994),s=(r(2784),r(64866)),a=r(18980),o=r(50115),c=r(56666),l=r(38777),d=r(59282),u=r(65475),p=r(40851),h=r(52322);function m(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}var g=[{name:"actions",types:"object[]",description:(0,h.jsxs)(h.Fragment,{children:["Accepts an array of objects with"," ",(0,h.jsx)(d.p,{href:"/Button/ButtonPage",as:"/button",children:"Button"})," ","props and an additional ",(0,h.jsx)(s.E,{children:"text"}),' prop. Also, only two variants will be available to use: "secondary" and "subtle". See example for usage.']})}].concat((0,l.Z)(p.uu)),f=function(e){return(0,h.jsx)(u.n,function(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?m(Object(r),!0).forEach((function(n){(0,c.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}({title:"InlineMessage",propList:g},e))},x=function(){var e=[{id:"examples",title:"Examples",render:function(){return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(t.s,{children:[(0,h.jsxs)(i.xv,{children:["An inline message, mostly used for displaying alerts within Modals. Is a condensed version of the"," ",(0,h.jsx)(s.E,{primary:!0,children:"Message"})," component."]}),(0,h.jsx)(a.G,{children:"<InlineMessage\n  header=\"Header\"\n  messages={[\n    {\n      text: 'Required description copy.',\n      link: {\n        text: 'Optional Link',\n        href: '#',\n      },\n    },\n  ]}\n  onClose={() => null}\n/>"})]}),(0,h.jsxs)(t.s,{header:"Types",children:[(0,h.jsxs)(i.xv,{children:["There are four types of ",(0,h.jsx)(s.E,{primary:!0,children:"InlineMessages"})," based on the level of message you want to display."]}),(0,h.jsx)(a.G,{children:'<>\n  <InlineMessage\n    type="error"\n    messages={[{ text: \'Required description copy.\' }]}\n    marginVertical="medium"\n  />\n  <InlineMessage\n    type="success"\n    messages={[{ text: \'Required description copy.\' }]}\n    marginVertical="medium"\n  />\n  <InlineMessage\n    type="warning"\n    messages={[{ text: \'Required description copy.\' }]}\n    marginVertical="medium"\n  />\n  <InlineMessage\n    type="info"\n    messages={[{ text: \'Required description copy.\' }]}\n    marginVertical="medium"\n  />\n</>'})]}),(0,h.jsxs)(t.s,{header:"Header",children:[(0,h.jsxs)(i.xv,{children:[(0,h.jsx)(s.E,{primary:!0,children:"InlineMessage"}),"'s allow you to pass an optional ",(0,h.jsx)(s.E,{primary:!0,children:"header"})," prop."]}),(0,h.jsx)(a.G,{children:'<>\n  <InlineMessage\n    type="success"\n    messages={[{ text: \'Required description copy.\' }]}\n    marginVertical="medium"\n  />\n  <InlineMessage\n    header="Header"\n    type="success"\n    messages={[{ text: \'Required description copy.\' }]}\n    marginVertical="medium"\n  />\n</>'})]}),(0,h.jsxs)(t.s,{header:"onClose",children:[(0,h.jsx)(i.xv,{children:"Toggles the visibility of the close button, and provides an on click callback."}),(0,h.jsx)(a.G,{children:'<>\n  <InlineMessage\n    type="info"\n    messages={[{ text: \'Required description copy.\' }]}\n    marginVertical="medium"\n  />\n  <InlineMessage\n    onClose={() => null}\n    type="info"\n    messages={[{ text: \'Required description copy.\' }]}\n    marginVertical="medium"\n  />\n</>'})]}),(0,h.jsxs)(t.s,{header:"Actions",children:[(0,h.jsxs)(i.xv,{children:[(0,h.jsx)(s.E,{primary:!0,children:"InlineMessage"}),"'s allow you to pass an optional ",(0,h.jsx)(s.E,{primary:!0,children:"actions"})," prop."]}),(0,h.jsx)(a.G,{children:'<>\n  <InlineMessage\n    header="header"\n    type="info"\n    messages={[{ text: \'Required description copy.\' }]}\n    marginVertical="medium"\n  />\n  <InlineMessage\n    actions={[\n      { text: \'First Action\', onClick: () => null },\n      { text: \'Second Action\', variant: \'subtle\', onClick: () => null },\n    ]}\n    header="header"\n    type="info"\n    messages={[{ text: \'Required description copy.\' }]}\n    marginVertical="medium"\n  />\n</>'})]})]})}},{id:"props",title:"Props",render:function(){return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(f,{}),(0,h.jsx)(p.Oq,{title:"InlineMessage[MessageItem]"}),(0,h.jsx)(p.vH,{title:"InlineMessage[MessageLinkItem]"})]})}}];return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(i.H1,{children:"InlineMessage"}),(0,h.jsx)(o.d,{items:e})]})}},96755:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/InlineMessage/InlineMessagePage",function(){return r(80508)}])}},function(e){e.O(0,[9774,9961,5713,1335,8965,2859,777,5733,6139,7193,6842,8099,5363,7606,7365,2734,1791,2888,179],(function(){return n=96755,e(e.s=n);var n}));var n=e.O();_N_E=n}]);