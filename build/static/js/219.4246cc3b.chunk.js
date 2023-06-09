"use strict";(self.webpackChunkbox_shadow_generator=self.webpackChunkbox_shadow_generator||[]).push([[219],{8953:function(e,a,t){t.d(a,{d:function(){return i}});var i=function(e){var a=document.createRange();a.selectNode(document.getElementById(e)),window.getSelection().removeAllRanges(),window.getSelection().addRange(a),document.execCommand("copy"),window.getSelection().removeAllRanges()}},739:function(e,a,t){t.d(a,{Z:function(){return f}});var i=t(4554),l=t(890),n=t(5705),r=(t(2791),t(1413)),s=t(5987),o=t(7391),d=t(3466),c=t(5403),u=t(184),m=["field","type"],p=function(e){var a=e.field,t=e.type,i=(0,s.Z)(e,m),l=a.name,n=a.onChange,p=a.onBlur,h=a.value,x=i.autoFocus,b=i.multiline,f=i.placeholder,v=i.label,g=i.validate,R=i.touchedError,_=i.disabled,j=i.row,Z=i.maxLength,w=i.min,N=i.max,C=i.adorment,y=i.textTransform,L=i.required,z=i.frontadorment,S=i.medium,k=i.small,B={search:(0,u.jsx)(c.Z,{}),arn:"ARN-",euin:"EUIN-"},F=function(e){return B[e]||""};return(0,u.jsxs)("div",{className:"input_form ".concat(k&&"Input_small"),children:[(0,u.jsx)(o.Z,(0,r.Z)((0,r.Z)({className:"InputField",fullWidth:!0,spellCheck:"false",name:l,autoComplete:"password"===t?"new-password":"off",label:""!==v&&(0,u.jsx)("div",{children:v}),type:t,placeholder:f,autoFocus:x,multiline:b,disabled:_,rows:j,value:h,onChange:n,onWheel:function(e){return e.target.blur()},onBlur:p,validate:g,max:10,InputLabelProps:{shrink:!0,classes:{root:"label-root ".concat(R?"error":""),focused:"label-focused"}},inputProps:{maxLength:Z,min:{min:w},max:{max:N}},onInput:function(e){"number"===t&&Z&&(e.target.value=e.target.value.slice(0,Z))},InputProps:{classes:{root:"input-root ".concat(L?"required":""," ").concat(R?"error":""," ").concat(S&&"input-md"," ").concat(k&&"input-sm"),input:"input-field ".concat(y&&"textCapitalize"),focused:"input-focused",disabled:"input-disabled"},startAdornment:z&&(0,u.jsx)(d.Z,{position:"start",className:"startadorment ".concat(z&&"adorement"),id:"edit_icon",children:(0,u.jsx)("span",{className:"start-ador",role:"presentation",children:F(z)})}),endAdornment:C&&(0,u.jsx)(d.Z,{className:"endAdornment",id:"edit_icon",position:"end",children:F(C)}),style:{backgroundColor:"#FFFFFF",borderRadius:"4px",border:"1px solid #CED4DC",fontSize:".81em"}}},a),i)),(0,u.jsx)("span",{className:"field-errors"})]})},h=t(3963),x=["field","type"],b=function(e){var a=e.field,t=(e.type,(0,s.Z)(e,x)),l=a.name,n=a.onChange,r=a.value,o=a.id,d=t.min,c=t.max,m=t.step;return(0,u.jsx)(i.Z,{className:"form_slider",children:(0,u.jsx)(h.ZP,{min:d,step:m,max:c,"aria-label":"Volume",value:r,type:"range",name:l,id:o,onChange:n})})},f=function(e){var a=e.label,t=e.name,r=e.min,s=e.max,o=e.step,d=e.optType;return(0,u.jsxs)(i.Z,{className:"slider_wrapper",children:[(0,u.jsxs)(i.Z,{className:"slider_title",children:[(0,u.jsx)(l.Z,{variant:"h5",children:a}),(0,u.jsxs)(i.Z,{className:"slider_input",children:[(0,u.jsx)(n.gN,{small:"true",maxLength:3,min:3,max:3,name:t,id:t,type:"number",component:p}),(0,u.jsx)("span",{children:function(e){switch(e){case"deg":return(0,u.jsx)("sub",{className:"degree_sub",children:"o"});case"px":return"px";case"per":return"%";default:return e}}(d)})]})]}),(0,u.jsx)(n.gN,{name:t,component:b,step:o,min:r,max:s})]})}},9240:function(e,a,t){t.d(a,{$u:function(){return s},GH:function(){return n},Kh:function(){return l},Ly:function(){return o},_U:function(){return r},qK:function(){return i}});var i=[{id:"1",label:"Box Shadow",path:"/"},{id:"2",label:"Text Shadow",path:"/text-Shadow"},{id:"3",label:"CSS Cursor",path:"/css-cursor"},{id:"4",label:"Border Radius",path:"/border-radius"},{id:"5",label:"Border",path:"/border"},{id:"6",label:"Transform",path:"/transform"},{id:"7",label:"Linear Gradient",path:"/linear-gradient"},{id:"8",label:"Color Options",path:"/color-options"}],l=[{id:"1",label:"auto"},{id:"2",label:"default"},{id:"3",label:"none"},{id:"4",label:"context-menu"},{id:"5",label:"help"},{id:"6",label:"pointer"},{id:"7",label:"progress"},{id:"8",label:"wait"},{id:"9",label:"cell"},{id:"10",label:"crosshair"},{id:"11",label:"text"},{id:"12",label:"vertical-text"},{id:"13",label:"alias"},{id:"14",label:"copy"},{id:"15",label:"move"},{id:"16",label:"no-drop"},{id:"17",label:"not-allowed"},{id:"18",label:"grab"},{id:"19",label:"grabbing"},{id:"20",label:"all-scroll"},{id:"21",label:"col-resize"},{id:"22",label:"row-resize"},{id:"23",label:"n-resize"},{id:"24",label:"e-resize"},{id:"25",label:"s-resize"},{id:"26",label:"w-resize"},{id:"27",label:"ne-resize"},{id:"28",label:"nw-resize"},{id:"29",label:"se-resize"},{id:"30",label:"sw-resize"},{id:"31",label:"ew-resize"},{id:"32",label:"ns-resize"},{id:"33",label:"nesw-resize"},{id:"34",label:"nwse-resize"},{id:"35",label:"zoom-in"},{id:"36",label:"zoom-out"}],n=[{id:"solid",value:"solid"},{id:"dotted",value:"dotted"},{id:"dashed",value:"dashed"},{id:"double",value:"double"},{id:"groove",value:"groove"},{id:"ridge",value:"ridge"},{id:"inset",value:"inset"},{id:"outset",value:"outset"},{id:"none",value:"none"},{id:"hidden",value:"hidden"}],r=[{id:"linear",value:"linear"},{id:"radial",value:"Radial"},{id:"elliptical",value:"Elliptical"},{id:"repeat linear",value:"Repeat linear"},{id:"repeat radial",value:"Repeat Radial"},{id:"repeat elliptical",value:"Repeat Elliptical"}],s=[{id:"farthest-side",value:"farthest-side"},{id:"farthest-corner",value:"farthest-corner"}],o=[{id:"top left",value:"top left"},{id:"top center",value:"top center"},{id:"top right",value:"top right"},{id:"left right",value:"left right"},{id:"center center",value:"center center"},{id:"right center",value:"right center"},{id:"bottom left",value:"bottom left"},{id:"bottom center",value:"bottom center"},{id:"bottom right",value:"bottom right"}]},6464:function(e,a,t){t.d(a,{Z:function(){return d}});t(2791);var i=t(4554),l=t(890),n=t(1087),r=t(9240),s=t(184),o=function(){var e=window.location.href.split("/")[3];return(0,s.jsx)(i.Z,{sx:{display:"flex",alignItems:"center"},className:"header",children:(0,s.jsxs)(i.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"space-between"},className:"header_content",children:[(0,s.jsx)(l.Z,{variant:"h1",children:"CSS Generator Tool"}),(0,s.jsx)("ul",{className:"nav",children:r.qK.map((function(a){return(0,s.jsx)("li",{className:e===(t=a.path,t.split("/")[1])?"nav_active":null,children:(0,s.jsx)(n.rU,{to:a.path,children:a.label})},a.id);var t}))})]})})},d=function(e){var a=e.children;return(0,s.jsxs)("div",{className:"layout",children:[(0,s.jsx)("div",{className:"header",children:(0,s.jsx)(o,{})}),(0,s.jsx)("div",{className:"content",children:a})]})}},219:function(e,a,t){t.r(a),t.d(a,{default:function(){return f}});var i=t(1413),l=t(9439),n=t(2791),r=t(5705),s=t(890),o=t(1614),d=t(1889),c=t(4554),u=t(8605),m=t(2704),p=t(739),h=t(6464),x=t(8953),b=t(184),f=function(){var e=n.useState("#000000"),a=(0,l.Z)(e,2),t=a[0],f=a[1],v=function(e){return{borderRadius:"".concat(e.values.topLeft_Radius,"px ").concat(e.values.topRight_Radius,"px ").concat(e.values.bottomLeft_Radius,"px ").concat(e.values.bottomRight_Radius,"px")}},g={backgroundColor:"".concat(t)};return(0,b.jsx)(h.Z,{children:(0,b.jsxs)("section",{className:"custom_section borderRadius_section",children:[(0,b.jsx)(s.Z,{variant:"h1",className:"title",children:"Border Radius Generator"}),(0,b.jsx)(o.Z,{children:(0,b.jsx)(d.ZP,{container:!0,className:"grid_container",children:(0,b.jsx)(r.J9,{initialValues:{topLeft_Radius:0,topRight_Radius:0,bottomLeft_Radius:0,bottomRight_Radius:0},onSubmit:function(e,a){},children:function(e){return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(d.ZP,{item:!0,xs:5,className:"left_column custom_colum",children:(0,b.jsxs)(r.l0,{children:[(0,b.jsx)(p.Z,{label:"Top Left Radius",name:"topLeft_Radius",min:0,max:200,step:1}),(0,b.jsx)(p.Z,{label:"Top Right Radius",name:"topRight_Radius",min:0,max:200,step:1}),(0,b.jsx)(p.Z,{label:"Bottom Left Radius",name:"bottomLeft_Radius",min:0,max:200,step:1}),(0,b.jsx)(p.Z,{label:"Bottom Right Radius",name:"bottomRight_Radius",min:0,max:200,step:1}),(0,b.jsxs)(c.Z,{className:"colorPicker_wrapper",children:[(0,b.jsx)(s.Z,{typography:"h5",children:"Background Color"}),(0,b.jsx)(u.O,{value:t,onChange:function(e){return f(e)}})]})]})}),(0,b.jsxs)(d.ZP,{item:!0,xs:7,pl:5,className:"right_column custom_colum",children:[(0,b.jsx)(c.Z,{className:"display_box",style:(0,i.Z)((0,i.Z)({},v(e)),g)}),(0,b.jsxs)(c.Z,{className:"result_content",id:"result_text",children:[(0,b.jsx)(s.Z,{variant:"h6",children:"-webkit-border-radius: ".concat(e.values.topLeft_Radius,"px ").concat(e.values.topRight_Radius,"px ").concat(e.values.bottomLeft_Radius,"px ").concat(e.values.bottomRight_Radius,"px;")}),(0,b.jsx)(s.Z,{variant:"h6",children:"-moz-border-radius: ".concat(e.values.topLeft_Radius,"px ").concat(e.values.topRight_Radius,"px ").concat(e.values.bottomLeft_Radius,"px ").concat(e.values.bottomRight_Radius,"px;")}),(0,b.jsx)(s.Z,{variant:"h6",children:"border-radius: ".concat(e.values.topLeft_Radius,"px ").concat(e.values.topRight_Radius,"px ").concat(e.values.bottomLeft_Radius,"px ").concat(e.values.bottomRight_Radius,"px;")}),(0,b.jsx)(m.Z,{onClick:function(){return(0,x.d)("result_text")},className:"textCopy_icon icon_large"})]})]})]})}})})})]})})}}}]);
//# sourceMappingURL=219.4246cc3b.chunk.js.map