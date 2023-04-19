"use strict";(self.webpackChunkbox_shadow_generator=self.webpackChunkbox_shadow_generator||[]).push([[370],{739:function(e,a,l){l.d(a,{Z:function(){return v}});var n=l(4554),i=l(890),t=l(5705),r=(l(2791),l(1413)),s=l(5987),o=l(7391),d=l(3466),c=l(5403),u=l(184),p=["field","type"],m=function(e){var a=e.field,l=e.type,n=(0,s.Z)(e,p),i=a.name,t=a.onChange,m=a.onBlur,h=a.value,x=n.autoFocus,b=n.multiline,v=n.placeholder,f=n.label,g=n.validate,j=n.touchedError,_=n.disabled,Z=n.row,N=n.maxLength,w=n.min,y=n.max,z=n.adorment,C=n.textTransform,k=n.required,L=n.frontadorment,S=n.medium,F=n.small,R={search:(0,u.jsx)(c.Z,{}),arn:"ARN-",euin:"EUIN-"},B=function(e){return R[e]||""};return(0,u.jsxs)("div",{className:"input_form ".concat(F&&"Input_small"),children:[(0,u.jsx)(o.Z,(0,r.Z)((0,r.Z)({className:"InputField",fullWidth:!0,spellCheck:"false",name:i,autoComplete:"password"===l?"new-password":"off",label:""!==f&&(0,u.jsx)("div",{children:f}),type:l,placeholder:v,autoFocus:x,multiline:b,disabled:_,rows:Z,value:h,onChange:t,onWheel:function(e){return e.target.blur()},onBlur:m,validate:g,max:10,InputLabelProps:{shrink:!0,classes:{root:"label-root ".concat(j?"error":""),focused:"label-focused"}},inputProps:{maxLength:N,min:{min:w},max:{max:y}},onInput:function(e){"number"===l&&N&&(e.target.value=e.target.value.slice(0,N))},InputProps:{classes:{root:"input-root ".concat(k?"required":""," ").concat(j?"error":""," ").concat(S&&"input-md"," ").concat(F&&"input-sm"),input:"input-field ".concat(C&&"textCapitalize"),focused:"input-focused",disabled:"input-disabled"},startAdornment:L&&(0,u.jsx)(d.Z,{position:"start",className:"startadorment ".concat(L&&"adorement"),id:"edit_icon",children:(0,u.jsx)("span",{className:"start-ador",role:"presentation",children:B(L)})}),endAdornment:z&&(0,u.jsx)(d.Z,{className:"endAdornment",id:"edit_icon",position:"end",children:B(z)}),style:{backgroundColor:"#FFFFFF",borderRadius:"4px",border:"1px solid #CED4DC",fontSize:".81em"}}},a),n)),(0,u.jsx)("span",{className:"field-errors"})]})},h=l(3963),x=["field","type"],b=function(e){var a=e.field,l=(e.type,(0,s.Z)(e,x)),i=a.name,t=a.onChange,r=a.value,o=a.id,d=l.min,c=l.max,p=l.step;return(0,u.jsx)(n.Z,{className:"form_slider",children:(0,u.jsx)(h.ZP,{min:d,step:p,max:c,"aria-label":"Volume",value:r,type:"range",name:i,id:o,onChange:t})})},v=function(e){var a=e.label,l=e.name,r=e.min,s=e.max,o=e.step,d=e.optType;return(0,u.jsxs)(n.Z,{className:"slider_wrapper",children:[(0,u.jsxs)(n.Z,{className:"slider_title",children:[(0,u.jsx)(i.Z,{variant:"h5",children:a}),(0,u.jsxs)(n.Z,{className:"slider_input",children:[(0,u.jsx)(t.gN,{small:"true",maxLength:3,min:3,max:3,name:l,id:l,type:"number",component:m}),(0,u.jsx)("span",{children:function(e){switch(e){case"deg":return(0,u.jsx)("sub",{className:"degree_sub",children:"o"});case"px":return"px";case"per":return"%";default:return e}}(d)})]})]}),(0,u.jsx)(t.gN,{name:l,component:b,step:o,min:r,max:s})]})}},9240:function(e,a,l){l.d(a,{$u:function(){return s},GH:function(){return t},Kh:function(){return i},Ly:function(){return o},_U:function(){return r},qK:function(){return n}});var n=[{id:"1",label:"Box Shadow",path:"/"},{id:"2",label:"Text Shadow",path:"/text-Shadow"},{id:"3",label:"CSS Cursor",path:"/css-cursor"},{id:"4",label:"Border Radius",path:"/border-radius"},{id:"5",label:"Border",path:"/border"},{id:"6",label:"Transform",path:"/transform"},{id:"7",label:"Linear Gradient",path:"/linear-gradient"},{id:"8",label:"Color Options",path:"/color-options"}],i=[{id:"1",label:"alias"},{id:"2",label:"all-scroll"},{id:"3",label:"auto"},{id:"4",label:"cell"},{id:"5",label:"context-menu"},{id:"6",label:"col-resize"},{id:"7",label:"copy"},{id:"8",label:"crosshair"},{id:"9",label:"default"},{id:"10",label:"e-resize"},{id:"11",label:"ew-resize"},{id:"12",label:"grab"},{id:"13",label:"grabbing"},{id:"14",label:"help"},{id:"15",label:"move"},{id:"16",label:"n-resize"},{id:"17",label:"ne-resize"},{id:"18",label:"nesw-resize"},{id:"19",label:"ns-resize"},{id:"20",label:"nw-resize"},{id:"21",label:"nw-resize"},{id:"22",label:"nwse-resize"},{id:"23",label:"no-drop"},{id:"24",label:"none"},{id:"25",label:"not-allowed"},{id:"26",label:"pointer"},{id:"27",label:"progress"},{id:"28",label:"row-resize"},{id:"29",label:"s-resize"},{id:"30",label:"se-resize"},{id:"31",label:"sw-resize"},{id:"32",label:"text"},{id:"33",label:"vertical-text"},{id:"34",label:"w-resize"},{id:"35",label:"wait"},{id:"36",label:"zoom-in"},{id:"37",label:"zoom-out"},{id:"38",label:"initial"}],t=[{id:"solid",value:"solid"},{id:"dotted",value:"dotted"},{id:"dashed",value:"dashed"},{id:"double",value:"double"},{id:"groove",value:"groove"},{id:"ridge",value:"ridge"},{id:"inset",value:"inset"},{id:"outset",value:"outset"},{id:"none",value:"none"},{id:"hidden",value:"hidden"}],r=[{id:"linear",value:"linear"},{id:"radial",value:"Radial"},{id:"elliptical",value:"Elliptical"},{id:"repeat linear",value:"Repeat linear"},{id:"repeat radial",value:"Repeat Radial"},{id:"repeat elliptical",value:"Repeat Elliptical"}],s=[{id:"farthest-side",value:"farthest-side"},{id:"farthest-corner",value:"farthest-corner"}],o=[{id:"top left",value:"top left"},{id:"top center",value:"top center"},{id:"top right",value:"top right"},{id:"left right",value:"left right"},{id:"center center",value:"center center"},{id:"right center",value:"right center"},{id:"bottom left",value:"bottom left"},{id:"bottom center",value:"bottom center"},{id:"bottom right",value:"bottom right"}]},6464:function(e,a,l){l.d(a,{Z:function(){return d}});l(2791);var n=l(4554),i=l(890),t=l(1087),r=l(9240),s=l(184),o=function(){var e=window.location.href.split("/")[3];return(0,s.jsx)(n.Z,{sx:{display:"flex",alignItems:"center"},className:"header",children:(0,s.jsxs)(n.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"space-between"},className:"header_content",children:[(0,s.jsx)(i.Z,{variant:"h1",children:"CSS Generator Tool"}),(0,s.jsx)("ul",{className:"nav",children:r.qK.map((function(a){return(0,s.jsx)("li",{className:e===(l=a.path,l.split("/")[1])?"nav_active":null,children:(0,s.jsx)(t.rU,{to:a.path,children:a.label})},a.id);var l}))})]})})},d=function(e){var a=e.children;return(0,s.jsxs)("div",{className:"layout",children:[(0,s.jsx)("div",{className:"header",children:(0,s.jsx)(o,{})}),(0,s.jsx)("div",{className:"content",children:a})]})}},370:function(e,a,l){l.r(a);var n=l(9439),i=l(890),t=l(1614),r=l(1889),s=l(4554),o=l(2791),d=l(2704),c=l(5705),u=l(739),p=(l(3849),l(6464)),m=l(8605),h=l(184);a.default=function(){var e=o.useState("#000000"),a=(0,n.Z)(e,2),l=a[0],x=a[1];return(0,h.jsx)(p.Z,{children:(0,h.jsxs)("section",{className:"custom_section",children:[(0,h.jsx)(i.Z,{variant:"h1",className:"title",children:"Box Shadow Generator"}),(0,h.jsx)(t.Z,{children:(0,h.jsx)(r.ZP,{container:!0,className:"grid_container",children:(0,h.jsx)(c.J9,{initialValues:{horizontal_range:0,vertical_range:0,blur_radius:0,spread_radius:0},onSubmit:function(e,a){},children:function(e){return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(r.ZP,{item:!0,xs:5,className:"left_column custom_colum",children:(0,h.jsxs)(c.l0,{children:[(0,h.jsx)(u.Z,{label:"Horizontal Length",name:"horizontal_range",min:-200,max:200,step:1}),(0,h.jsx)(u.Z,{label:"Vertical Length",name:"vertical_range",min:-200,max:200,step:1}),(0,h.jsx)(u.Z,{label:"Blur Radius",name:"blur_radius",min:-200,max:200,step:1}),(0,h.jsx)(u.Z,{label:"Spread Radius",name:"spread_radius",min:-200,max:200,step:1}),(0,h.jsxs)(s.Z,{className:"colorPicker_wrapper",children:[(0,h.jsx)(i.Z,{typography:"h5",children:"Background Color"}),(0,h.jsx)(m.O,{value:l,onChange:function(e){return x(e)}})]})]})}),(0,h.jsxs)(r.ZP,{item:!0,xs:7,pl:5,className:"right_column custom_colum",children:[(0,h.jsx)(s.Z,{className:"display_box",style:{boxShadow:"".concat(e.values.horizontal_range,"px ").concat(e.values.vertical_range,"px ").concat(e.values.blur_radius,"px ").concat(e.values.spread_radius,"px ").concat(l)}}),(0,h.jsxs)(s.Z,{className:"result_content",onClick:function(){return function(){var e=document.getElementsByClassName("paymentLink");Array.from(e).forEach((function(e){console.info(e)}))}()},children:[(0,h.jsx)(i.Z,{variant:"h6",id:"paymentLink",className:"paymentLink",children:"-webkit-box-shadow: ".concat(e.values.horizontal_range,"px ").concat(e.values.vertical_range,"px ").concat(e.values.blur_radius,"px ").concat(e.values.spread_radius,"px ").concat(l,";")}),(0,h.jsx)(i.Z,{variant:"h6",id:"paymentLink",className:"paymentLink",children:"-moz-box-shadow: ".concat(e.values.horizontal_range,"px ").concat(e.values.vertical_range,"px ").concat(e.values.blur_radius,"px ").concat(e.values.spread_radius,"px ").concat(l,";")}),(0,h.jsx)(i.Z,{variant:"h6",id:"paymentLink",className:"paymentLink",children:"box-shadow: ".concat(e.values.horizontal_range,"px ").concat(e.values.vertical_range,"px ").concat(e.values.blur_radius,"px ").concat(e.values.spread_radius,"px ").concat(l,";")}),(0,h.jsx)(d.Z,{className:"textCopy_icon icon_large"})]})]})]})}})})})]})})}},3849:function(){}}]);
//# sourceMappingURL=370.c6e4d2f9.chunk.js.map