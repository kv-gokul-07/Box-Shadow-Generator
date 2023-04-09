"use strict";(self.webpackChunkbox_shadow_generator=self.webpackChunkbox_shadow_generator||[]).push([[44],{739:function(e,a,l){l.d(a,{Z:function(){return v}});var n=l(4554),t=l(890),i=l(5705),r=(l(2791),l(1413)),o=l(5987),s=l(7391),d=l(3466),c=l(5403),u=l(184),p=["field","type"],m=function(e){var a=e.field,l=e.type,n=(0,o.Z)(e,p),t=a.name,i=a.onChange,m=a.onBlur,h=a.value,b=n.autoFocus,x=n.multiline,v=n.placeholder,f=n.label,_=n.validate,j=n.touchedError,g=n.disabled,Z=n.row,N=n.maxLength,y=n.min,w=n.max,C=n.adorment,z=n.textTransform,R=n.required,F=n.frontadorment,k=n.medium,S=n.small,B={search:(0,u.jsx)(c.Z,{}),arn:"ARN-",euin:"EUIN-"},I=function(e){return B[e]||""};return(0,u.jsxs)("div",{className:"input_form ".concat(S&&"Input_small"),children:[(0,u.jsx)(s.Z,(0,r.Z)((0,r.Z)({className:"InputField",fullWidth:!0,spellCheck:"false",name:t,autoComplete:"password"===l?"new-password":"off",label:""!==f&&(0,u.jsx)("div",{children:f}),type:l,placeholder:v,autoFocus:b,multiline:x,disabled:g,rows:Z,value:h,onChange:i,onWheel:function(e){return e.target.blur()},onBlur:m,validate:_,max:10,InputLabelProps:{shrink:!0,classes:{root:"label-root ".concat(j?"error":""),focused:"label-focused"}},inputProps:{maxLength:N,min:{min:y},max:{max:w}},onInput:function(e){"number"===l&&N&&(e.target.value=e.target.value.slice(0,N))},InputProps:{classes:{root:"input-root ".concat(R?"required":""," ").concat(j?"error":""," ").concat(k&&"input-md"," ").concat(S&&"input-sm"),input:"input-field ".concat(z&&"textCapitalize"),focused:"input-focused",disabled:"input-disabled"},startAdornment:F&&(0,u.jsx)(d.Z,{position:"start",className:"startadorment ".concat(F&&"adorement"),id:"edit_icon",children:(0,u.jsx)("span",{className:"start-ador",role:"presentation",children:I(F)})}),endAdornment:C&&(0,u.jsx)(d.Z,{className:"endAdornment",id:"edit_icon",position:"end",children:I(C)}),style:{backgroundColor:"#FFFFFF",borderRadius:"4px",border:"1px solid #CED4DC",fontSize:".81em"}}},a),n)),(0,u.jsx)("span",{className:"field-errors"})]})},h=l(3963),b=["field","type"],x=function(e){var a=e.field,l=(e.type,(0,o.Z)(e,b)),t=a.name,i=a.onChange,r=a.value,s=a.id,d=l.min,c=l.max,p=l.step;return(0,u.jsx)(n.Z,{className:"form_slider",children:(0,u.jsx)(h.ZP,{min:d,step:p,max:c,"aria-label":"Volume",value:r,type:"range",name:t,id:s,onChange:i})})},v=function(e){var a=e.label,l=e.name,r=e.min,o=e.max,s=e.step,d=e.optType;return(0,u.jsxs)(n.Z,{className:"slider_wrapper",children:[(0,u.jsxs)(n.Z,{className:"slider_title",children:[(0,u.jsx)(t.Z,{variant:"h5",children:a}),(0,u.jsxs)(n.Z,{className:"slider_input",children:[(0,u.jsx)(i.gN,{small:"true",maxLength:3,min:3,max:3,name:l,id:l,type:"number",component:m}),(0,u.jsx)("span",{children:function(e){switch(e){case"deg":return(0,u.jsx)("sub",{className:"degree_sub",children:"o"});case"px":return"px";case"per":return"%";default:return e}}(d)})]})]}),(0,u.jsx)(i.gN,{name:l,component:x,step:s,min:r,max:o})]})}},9240:function(e,a,l){l.d(a,{$u:function(){return o},GH:function(){return i},Kh:function(){return t},Ly:function(){return s},_U:function(){return r},qK:function(){return n}});var n=[{id:"1",label:"Box Shadow",path:"/"},{id:"2",label:"Text Shadow",path:"/text-Shadow"},{id:"3",label:"CSS Cursor",path:"/css-cursor"},{id:"4",label:"Border Radius",path:"/border-radius"},{id:"5",label:"Border",path:"/border"},{id:"6",label:"Transform",path:"/transform"},{id:"7",label:"Linear Gradient",path:"/linear-gradient"},{id:"8",label:"Color Options",path:"/color-options"}],t=[{id:"1",label:"alias"},{id:"2",label:"all-scroll"},{id:"3",label:"auto"},{id:"4",label:"cell"},{id:"5",label:"context-menu"},{id:"6",label:"col-resize"},{id:"7",label:"copy"},{id:"8",label:"crosshair"},{id:"9",label:"default"},{id:"10",label:"e-resize"},{id:"11",label:"ew-resize"},{id:"12",label:"grab"},{id:"13",label:"grabbing"},{id:"14",label:"help"},{id:"15",label:"move"},{id:"16",label:"n-resize"},{id:"17",label:"ne-resize"},{id:"18",label:"nesw-resize"},{id:"19",label:"ns-resize"},{id:"20",label:"nw-resize"},{id:"21",label:"nw-resize"},{id:"22",label:"nwse-resize"},{id:"23",label:"no-drop"},{id:"24",label:"none"},{id:"25",label:"not-allowed"},{id:"26",label:"pointer"},{id:"27",label:"progress"},{id:"28",label:"row-resize"},{id:"29",label:"s-resize"},{id:"30",label:"se-resize"},{id:"31",label:"sw-resize"},{id:"32",label:"text"},{id:"33",label:"vertical-text"},{id:"34",label:"w-resize"},{id:"35",label:"wait"},{id:"36",label:"zoom-in"},{id:"37",label:"zoom-out"},{id:"38",label:"initial"}],i=[{id:"solid",value:"solid"},{id:"dotted",value:"dotted"},{id:"dashed",value:"dashed"},{id:"double",value:"double"},{id:"groove",value:"groove"},{id:"ridge",value:"ridge"},{id:"inset",value:"inset"},{id:"outset",value:"outset"},{id:"none",value:"none"},{id:"hidden",value:"hidden"}],r=[{id:"linear",value:"linear"},{id:"radial",value:"Radial"},{id:"elliptical",value:"Elliptical"},{id:"repeat linear",value:"Repeat linear"},{id:"repeat radial",value:"Repeat Radial"},{id:"repeat elliptical",value:"Repeat Elliptical"}],o=[{id:"farthest-side",value:"farthest-side"},{id:"farthest-corner",value:"farthest-corner"}],s=[{id:"top left",value:"top left"},{id:"top center",value:"top center"},{id:"top right",value:"top right"},{id:"left right",value:"left right"},{id:"center center",value:"center center"},{id:"right center",value:"right center"},{id:"bottom left",value:"bottom left"},{id:"bottom center",value:"bottom center"},{id:"bottom right",value:"bottom right"}]},6464:function(e,a,l){l.d(a,{Z:function(){return d}});l(2791);var n=l(4554),t=l(890),i=l(1087),r=l(9240),o=l(184),s=function(){return(0,o.jsx)(n.Z,{sx:{display:"flex",alignItems:"center"},className:"header",children:(0,o.jsxs)(n.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"space-between"},className:"header_content",children:[(0,o.jsx)(t.Z,{variant:"h1",children:"CSS Generator Tool"}),(0,o.jsx)("ul",{className:"nav",children:r.qK.map((function(e){return(0,o.jsx)("li",{children:(0,o.jsx)(i.rU,{to:e.path,children:e.label})},e.id)}))})]})})},d=function(e){var a=e.children;return(0,o.jsxs)("div",{className:"layout",children:[(0,o.jsx)("div",{className:"header",children:(0,o.jsx)(s,{})}),(0,o.jsx)("div",{className:"content",children:a})]})}},9044:function(e,a,l){l.r(a),l.d(a,{default:function(){return p}});l(2791);var n=l(5705),t=l(890),i=l(1614),r=l(1889),o=l(4554),s=l(2704),d=l(739),c=l(6464),u=(l(3849),l(184)),p=function(){function e(e){var a=e.toString(16);return 1===a.length?"0"+a:a}return(0,u.jsx)(c.Z,{children:(0,u.jsxs)("section",{className:"custom_section coloOption_section",children:[(0,u.jsx)(t.Z,{variant:"h1",className:"title",children:"Color Options"}),(0,u.jsx)(i.Z,{children:(0,u.jsx)(r.ZP,{container:!0,className:"grid_container",children:(0,u.jsx)(n.J9,{initialValues:{red_option:0,green_option:0,blue_option:0,opacity_option:.5},children:function(a){return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(r.ZP,{item:!0,xs:5,className:"left_column custom_colum",children:(0,u.jsxs)(n.l0,{children:[(0,u.jsx)(d.Z,{label:"Red",name:"red_option",min:0,max:255,step:1}),(0,u.jsx)(d.Z,{label:"Green",name:"green_option",min:0,max:255,step:1}),(0,u.jsx)(d.Z,{label:"Blue",name:"blue_option",min:0,max:255,step:1}),(0,u.jsx)(d.Z,{label:"Opacity",name:"opacity_option",min:0,max:1,step:.1})]})}),(0,u.jsxs)(r.ZP,{item:!0,xs:7,className:"right_column custom_colum",children:[(0,u.jsxs)(o.Z,{className:"subColumn_wrapper",children:[(0,u.jsx)(o.Z,{className:"display_box",style:{backgroundColor:"rgb(".concat(a.values.red_option,", ").concat(a.values.green_option,", ").concat(a.values.blue_option,")")},children:(0,u.jsx)(t.Z,{variant:"h5",children:"Without Opacity"})}),(0,u.jsx)(o.Z,{mt:5,className:"display_box custom_display_box",style:{backgroundColor:"rgba(".concat(a.values.red_option,", ").concat(a.values.green_option,", ").concat(a.values.blue_option,", ").concat(a.values.opacity_option,")")},children:(0,u.jsx)(t.Z,{variant:"h5",children:"With Opacity"})})]}),(0,u.jsxs)(o.Z,{className:"resultContent_wrapper",children:[(0,u.jsxs)(o.Z,{className:"result_content",children:[(0,u.jsx)(t.Z,{variant:"h6",children:"RGB(".concat(a.values.red_option,", ").concat(a.values.green_option,", ").concat(a.values.blue_option,")")}),(0,u.jsx)(s.Z,{className:"textCopy_icon icon_large"})]}),(0,u.jsxs)(o.Z,{className:"result_content",children:[(0,u.jsx)(t.Z,{variant:"h6",children:"RGBA(".concat(a.values.red_option,", ").concat(a.values.green_option,", ").concat(a.values.blue_option,", ").concat(a.values.opacity_option,")")}),(0,u.jsx)(s.Z,{className:"textCopy_icon icon_large"})]})," ",(0,u.jsxs)(o.Z,{className:"result_content",children:[(0,u.jsx)(t.Z,{variant:"h6",children:(l=a.values.red_option,i=a.values.green_option,c=a.values.blue_option,"#"+e(l)+e(i)+e(c))}),(0,u.jsx)(s.Z,{className:"textCopy_icon icon_large"})]})]})]})]});var l,i,c}})})})]})})}},3849:function(){}}]);
//# sourceMappingURL=44.b5ceb867.chunk.js.map