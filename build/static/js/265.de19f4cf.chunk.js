"use strict";(self.webpackChunkbox_shadow_generator=self.webpackChunkbox_shadow_generator||[]).push([[265],{8953:function(e,t,a){a.d(t,{d:function(){return n}});var n=function(e){var t=document.createRange();t.selectNode(document.getElementById(e)),window.getSelection().removeAllRanges(),window.getSelection().addRange(t),document.execCommand("copy"),window.getSelection().removeAllRanges()}},5063:function(e,t,a){a.d(t,{Z:function(){return V}});var n=a(1413),r=a(5987),i=a(2791),l=a(4942),o=a(3366),d=a(7462),s=a(8182),c=a(4419),u=a(2065),p=a(6934),m=a(1402),v=a(6199),h=a(3701),b=a(162),f=a(2071),g=a(5878);var x=(0,g.Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);var Z=(0,g.Z)("MuiListItemIcon",["root","alignItemsFlexStart"]);var y=(0,g.Z)("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]),w=a(1217);function j(e){return(0,w.Z)("MuiMenuItem",e)}var C=(0,g.Z)("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),z=a(184),N=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex","className"],I=(0,p.ZP)(h.Z,{shouldForwardProp:function(e){return(0,p.FO)(e)||"classes"===e},name:"MuiMenuItem",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,a.dense&&t.dense,a.divider&&t.divider,!a.disableGutters&&t.gutters]}})((function(e){var t,a=e.theme,n=e.ownerState;return(0,d.Z)({},a.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!n.disableGutters&&{paddingLeft:16,paddingRight:16},n.divider&&{borderBottom:"1px solid ".concat((a.vars||a).palette.divider),backgroundClip:"padding-box"},(t={"&:hover":{textDecoration:"none",backgroundColor:(a.vars||a).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},(0,l.Z)(t,"&.".concat(C.selected),(0,l.Z)({backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / ").concat(a.vars.palette.action.selectedOpacity,")"):(0,u.Fq)(a.palette.primary.main,a.palette.action.selectedOpacity)},"&.".concat(C.focusVisible),{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / calc(").concat(a.vars.palette.action.selectedOpacity," + ").concat(a.vars.palette.action.focusOpacity,"))"):(0,u.Fq)(a.palette.primary.main,a.palette.action.selectedOpacity+a.palette.action.focusOpacity)})),(0,l.Z)(t,"&.".concat(C.selected,":hover"),{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / calc(").concat(a.vars.palette.action.selectedOpacity," + ").concat(a.vars.palette.action.hoverOpacity,"))"):(0,u.Fq)(a.palette.primary.main,a.palette.action.selectedOpacity+a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / ").concat(a.vars.palette.action.selectedOpacity,")"):(0,u.Fq)(a.palette.primary.main,a.palette.action.selectedOpacity)}}),(0,l.Z)(t,"&.".concat(C.focusVisible),{backgroundColor:(a.vars||a).palette.action.focus}),(0,l.Z)(t,"&.".concat(C.disabled),{opacity:(a.vars||a).palette.action.disabledOpacity}),(0,l.Z)(t,"& + .".concat(x.root),{marginTop:a.spacing(1),marginBottom:a.spacing(1)}),(0,l.Z)(t,"& + .".concat(x.inset),{marginLeft:52}),(0,l.Z)(t,"& .".concat(y.root),{marginTop:0,marginBottom:0}),(0,l.Z)(t,"& .".concat(y.inset),{paddingLeft:36}),(0,l.Z)(t,"& .".concat(Z.root),{minWidth:36}),t),!n.dense&&(0,l.Z)({},a.breakpoints.up("sm"),{minHeight:"auto"}),n.dense&&(0,d.Z)({minHeight:32,paddingTop:4,paddingBottom:4},a.typography.body2,(0,l.Z)({},"& .".concat(Z.root," svg"),{fontSize:"1.25rem"})))})),F=i.forwardRef((function(e,t){var a=(0,m.Z)({props:e,name:"MuiMenuItem"}),n=a.autoFocus,r=void 0!==n&&n,l=a.component,u=void 0===l?"li":l,p=a.dense,h=void 0!==p&&p,g=a.divider,x=void 0!==g&&g,Z=a.disableGutters,y=void 0!==Z&&Z,w=a.focusVisibleClassName,C=a.role,F=void 0===C?"menuitem":C,R=a.tabIndex,S=a.className,k=(0,o.Z)(a,N),M=i.useContext(v.Z),O=i.useMemo((function(){return{dense:h||M.dense||!1,disableGutters:y}}),[M.dense,h,y]),_=i.useRef(null);(0,b.Z)((function(){r&&_.current&&_.current.focus()}),[r]);var L,V=(0,d.Z)({},a,{dense:O.dense,divider:x,disableGutters:y}),A=function(e){var t=e.disabled,a=e.dense,n=e.divider,r=e.disableGutters,i=e.selected,l=e.classes,o={root:["root",a&&"dense",t&&"disabled",!r&&"gutters",n&&"divider",i&&"selected"]},s=(0,c.Z)(o,j,l);return(0,d.Z)({},l,s)}(a),B=(0,f.Z)(_,t);return a.disabled||(L=void 0!==R?R:-1),(0,z.jsx)(v.Z.Provider,{value:O,children:(0,z.jsx)(I,(0,d.Z)({ref:B,role:F,tabIndex:L,component:u,focusVisibleClassName:(0,s.Z)(A.focusVisible,w),className:(0,s.Z)(A.root,S)},k,{ownerState:V,classes:A}))})})),R=a(8096),S=a(4925),k=a(9912),M=a(2104),O=a(8638),_=(0,a(9201).Z)((0,z.jsx)("path",{d:"M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zM9 14H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2zm-8 4H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2z"}),"CalendarMonth"),L=["field"],V=function(e){var t=e.field,a=(0,r.Z)(e,L),i=t.name,l=t.onChange,o=t.value,d=a.optionData,s=a.optionLabelKey,c=a.optionValueKey,u=a.required,p=a.touched,m=a.dropDownIon;return(0,z.jsx)("div",{className:"Select",children:(0,z.jsxs)(R.Z,{fullWidth:!0,children:[(0,z.jsx)(S.Z,{variant:"standard",htmlFor:"uncontrolled-native",children:"Age"}),(0,z.jsx)(k.Z,{labelId:"demo-simple-select-label",className:"FormSelect",value:o,name:i,onChange:l,IconComponent:function(e){return function(e,t){var a=t.props;switch(e){case"calendar":return(0,z.jsx)(_,(0,n.Z)({},a));case"keyboardArrow":return(0,z.jsx)(M.Z,(0,n.Z)({},a));default:return(0,z.jsx)(O.Z,(0,n.Z)({},a))}}(m,{props:e})},selectprops:{classes:{root:"select-root ".concat("select"===o?"label-color":""," ").concat(u?"required":""," ").concat(p&&error?"error":""," "),select:"selected",disabled:"select-disabled"},MenuProps:{className:"select-menu-item",getcontentanchorel:null,anchorOrigin:{vertical:"top",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"}}},children:d&&d.length>0&&d.map((function(e,t){return(0,z.jsx)(F,{value:e[c],children:e[s]},t)}))})]})})}},739:function(e,t,a){a.d(t,{Z:function(){return f}});var n=a(4554),r=a(890),i=a(5705),l=(a(2791),a(1413)),o=a(5987),d=a(7391),s=a(3466),c=a(5403),u=a(184),p=["field","type"],m=function(e){var t=e.field,a=e.type,n=(0,o.Z)(e,p),r=t.name,i=t.onChange,m=t.onBlur,v=t.value,h=n.autoFocus,b=n.multiline,f=n.placeholder,g=n.label,x=n.validate,Z=n.touchedError,y=n.disabled,w=n.row,j=n.maxLength,C=n.min,z=n.max,N=n.adorment,I=n.textTransform,F=n.required,R=n.frontadorment,S=n.medium,k=n.small,M={search:(0,u.jsx)(c.Z,{}),arn:"ARN-",euin:"EUIN-"},O=function(e){return M[e]||""};return(0,u.jsxs)("div",{className:"input_form ".concat(k&&"Input_small"),children:[(0,u.jsx)(d.Z,(0,l.Z)((0,l.Z)({className:"InputField",fullWidth:!0,spellCheck:"false",name:r,autoComplete:"password"===a?"new-password":"off",label:""!==g&&(0,u.jsx)("div",{children:g}),type:a,placeholder:f,autoFocus:h,multiline:b,disabled:y,rows:w,value:v,onChange:i,onWheel:function(e){return e.target.blur()},onBlur:m,validate:x,max:10,InputLabelProps:{shrink:!0,classes:{root:"label-root ".concat(Z?"error":""),focused:"label-focused"}},inputProps:{maxLength:j,min:{min:C},max:{max:z}},onInput:function(e){"number"===a&&j&&(e.target.value=e.target.value.slice(0,j))},InputProps:{classes:{root:"input-root ".concat(F?"required":""," ").concat(Z?"error":""," ").concat(S&&"input-md"," ").concat(k&&"input-sm"),input:"input-field ".concat(I&&"textCapitalize"),focused:"input-focused",disabled:"input-disabled"},startAdornment:R&&(0,u.jsx)(s.Z,{position:"start",className:"startadorment ".concat(R&&"adorement"),id:"edit_icon",children:(0,u.jsx)("span",{className:"start-ador",role:"presentation",children:O(R)})}),endAdornment:N&&(0,u.jsx)(s.Z,{className:"endAdornment",id:"edit_icon",position:"end",children:O(N)}),style:{backgroundColor:"#FFFFFF",borderRadius:"4px",border:"1px solid #CED4DC",fontSize:".81em"}}},t),n)),(0,u.jsx)("span",{className:"field-errors"})]})},v=a(3963),h=["field","type"],b=function(e){var t=e.field,a=(e.type,(0,o.Z)(e,h)),r=t.name,i=t.onChange,l=t.value,d=t.id,s=a.min,c=a.max,p=a.step;return(0,u.jsx)(n.Z,{className:"form_slider",children:(0,u.jsx)(v.ZP,{min:s,step:p,max:c,"aria-label":"Volume",value:l,type:"range",name:r,id:d,onChange:i})})},f=function(e){var t=e.label,a=e.name,l=e.min,o=e.max,d=e.step,s=e.optType;return(0,u.jsxs)(n.Z,{className:"slider_wrapper",children:[(0,u.jsxs)(n.Z,{className:"slider_title",children:[(0,u.jsx)(r.Z,{variant:"h5",children:t}),(0,u.jsxs)(n.Z,{className:"slider_input",children:[(0,u.jsx)(i.gN,{small:"true",maxLength:3,min:3,max:3,name:a,id:a,type:"number",component:m}),(0,u.jsx)("span",{children:function(e){switch(e){case"deg":return(0,u.jsx)("sub",{className:"degree_sub",children:"o"});case"px":return"px";case"per":return"%";default:return e}}(s)})]})]}),(0,u.jsx)(i.gN,{name:a,component:b,step:d,min:l,max:o})]})}},9240:function(e,t,a){a.d(t,{$u:function(){return o},GH:function(){return i},Kh:function(){return r},Ly:function(){return d},_U:function(){return l},qK:function(){return n}});var n=[{id:"1",label:"Box Shadow",path:"/"},{id:"2",label:"Text Shadow",path:"/text-Shadow"},{id:"3",label:"CSS Cursor",path:"/css-cursor"},{id:"4",label:"Border Radius",path:"/border-radius"},{id:"5",label:"Border",path:"/border"},{id:"6",label:"Transform",path:"/transform"},{id:"7",label:"Linear Gradient",path:"/linear-gradient"},{id:"8",label:"Color Options",path:"/color-options"}],r=[{id:"1",label:"auto"},{id:"2",label:"default"},{id:"3",label:"none"},{id:"4",label:"context-menu"},{id:"5",label:"help"},{id:"6",label:"pointer"},{id:"7",label:"progress"},{id:"8",label:"wait"},{id:"9",label:"cell"},{id:"10",label:"crosshair"},{id:"11",label:"text"},{id:"12",label:"vertical-text"},{id:"13",label:"alias"},{id:"14",label:"copy"},{id:"15",label:"move"},{id:"16",label:"no-drop"},{id:"17",label:"not-allowed"},{id:"18",label:"grab"},{id:"19",label:"grabbing"},{id:"20",label:"all-scroll"},{id:"21",label:"col-resize"},{id:"22",label:"row-resize"},{id:"23",label:"n-resize"},{id:"24",label:"e-resize"},{id:"25",label:"s-resize"},{id:"26",label:"w-resize"},{id:"27",label:"ne-resize"},{id:"28",label:"nw-resize"},{id:"29",label:"se-resize"},{id:"30",label:"sw-resize"},{id:"31",label:"ew-resize"},{id:"32",label:"ns-resize"},{id:"33",label:"nesw-resize"},{id:"34",label:"nwse-resize"},{id:"35",label:"zoom-in"},{id:"36",label:"zoom-out"}],i=[{id:"solid",value:"solid"},{id:"dotted",value:"dotted"},{id:"dashed",value:"dashed"},{id:"double",value:"double"},{id:"groove",value:"groove"},{id:"ridge",value:"ridge"},{id:"inset",value:"inset"},{id:"outset",value:"outset"},{id:"none",value:"none"},{id:"hidden",value:"hidden"}],l=[{id:"linear",value:"linear"},{id:"radial",value:"Radial"},{id:"elliptical",value:"Elliptical"},{id:"repeat linear",value:"Repeat linear"},{id:"repeat radial",value:"Repeat Radial"},{id:"repeat elliptical",value:"Repeat Elliptical"}],o=[{id:"farthest-side",value:"farthest-side"},{id:"farthest-corner",value:"farthest-corner"}],d=[{id:"top left",value:"top left"},{id:"top center",value:"top center"},{id:"top right",value:"top right"},{id:"left right",value:"left right"},{id:"center center",value:"center center"},{id:"right center",value:"right center"},{id:"bottom left",value:"bottom left"},{id:"bottom center",value:"bottom center"},{id:"bottom right",value:"bottom right"}]},6464:function(e,t,a){a.d(t,{Z:function(){return s}});a(2791);var n=a(4554),r=a(890),i=a(1087),l=a(9240),o=a(184),d=function(){var e=window.location.href.split("/")[3];return(0,o.jsx)(n.Z,{sx:{display:"flex",alignItems:"center"},className:"header",children:(0,o.jsxs)(n.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"space-between"},className:"header_content",children:[(0,o.jsx)(r.Z,{variant:"h1",children:"CSS Generator Tool"}),(0,o.jsx)("ul",{className:"nav",children:l.qK.map((function(t){return(0,o.jsx)("li",{className:e===(a=t.path,a.split("/")[1])?"nav_active":null,children:(0,o.jsx)(i.rU,{to:t.path,children:t.label})},t.id);var a}))})]})})},s=function(e){var t=e.children;return(0,o.jsxs)("div",{className:"layout",children:[(0,o.jsx)("div",{className:"header",children:(0,o.jsx)(d,{})}),(0,o.jsx)("div",{className:"content",children:t})]})}},8638:function(e,t,a){var n=a(4836);t.Z=void 0;var r=n(a(5649)),i=a(184),l=(0,r.default)((0,i.jsx)("path",{d:"m8.71 11.71 2.59 2.59c.39.39 1.02.39 1.41 0l2.59-2.59c.63-.63.18-1.71-.71-1.71H9.41c-.89 0-1.33 1.08-.7 1.71z"}),"ArrowDropDownRounded");t.Z=l},2104:function(e,t,a){var n=a(4836);t.Z=void 0;var r=n(a(5649)),i=a(184),l=(0,r.default)((0,i.jsx)("path",{d:"M8.12 9.29 12 13.17l3.88-3.88c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0L6.7 10.7a.9959.9959 0 0 1 0-1.41c.39-.38 1.03-.39 1.42 0z"}),"KeyboardArrowDownRounded");t.Z=l}}]);
//# sourceMappingURL=265.de19f4cf.chunk.js.map