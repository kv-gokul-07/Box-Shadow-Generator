"use strict";(self.webpackChunkbox_shadow_generator=self.webpackChunkbox_shadow_generator||[]).push([[752],{8953:function(e,a,t){t.d(a,{d:function(){return l}});var l=function(e){var a=document.createRange();a.selectNode(document.getElementById(e)),window.getSelection().removeAllRanges(),window.getSelection().addRange(a),document.execCommand("copy"),window.getSelection().removeAllRanges()}},739:function(e,a,t){t.d(a,{Z:function(){return v}});var l=t(4554),n=t(890),i=t(5705),r=(t(2791),t(1413)),s=t(5987),o=t(7391),d=t(3466),c=t(5403),u=t(184),h=["field","type"],m=function(e){var a=e.field,t=e.type,l=(0,s.Z)(e,h),n=a.name,i=a.onChange,m=a.onBlur,x=a.value,p=l.autoFocus,b=l.multiline,v=l.placeholder,f=l.label,_=l.validate,g=l.touchedError,j=l.disabled,w=l.row,Z=l.maxLength,N=l.min,y=l.max,z=l.adorment,C=l.textTransform,S=l.required,R=l.frontadorment,k=l.medium,F=l.small,I={search:(0,u.jsx)(c.Z,{}),arn:"ARN-",euin:"EUIN-"},B=function(e){return I[e]||""};return(0,u.jsxs)("div",{className:"input_form ".concat(F&&"Input_small"),children:[(0,u.jsx)(o.Z,(0,r.Z)((0,r.Z)({className:"InputField",fullWidth:!0,spellCheck:"false",name:n,autoComplete:"password"===t?"new-password":"off",label:""!==f&&(0,u.jsx)("div",{children:f}),type:t,placeholder:v,autoFocus:p,multiline:b,disabled:j,rows:w,value:x,onChange:i,onWheel:function(e){return e.target.blur()},onBlur:m,validate:_,max:10,InputLabelProps:{shrink:!0,classes:{root:"label-root ".concat(g?"error":""),focused:"label-focused"}},inputProps:{maxLength:Z,min:{min:N},max:{max:y}},onInput:function(e){"number"===t&&Z&&(e.target.value=e.target.value.slice(0,Z))},InputProps:{classes:{root:"input-root ".concat(S?"required":""," ").concat(g?"error":""," ").concat(k&&"input-md"," ").concat(F&&"input-sm"),input:"input-field ".concat(C&&"textCapitalize"),focused:"input-focused",disabled:"input-disabled"},startAdornment:R&&(0,u.jsx)(d.Z,{position:"start",className:"startadorment ".concat(R&&"adorement"),id:"edit_icon",children:(0,u.jsx)("span",{className:"start-ador",role:"presentation",children:B(R)})}),endAdornment:z&&(0,u.jsx)(d.Z,{className:"endAdornment",id:"edit_icon",position:"end",children:B(z)}),style:{backgroundColor:"#FFFFFF",borderRadius:"4px",border:"1px solid #CED4DC",fontSize:".81em"}}},a),l)),(0,u.jsx)("span",{className:"field-errors"})]})},x=t(3963),p=["field","type"],b=function(e){var a=e.field,t=(e.type,(0,s.Z)(e,p)),n=a.name,i=a.onChange,r=a.value,o=a.id,d=t.min,c=t.max,h=t.step;return(0,u.jsx)(l.Z,{className:"form_slider",children:(0,u.jsx)(x.ZP,{min:d,step:h,max:c,"aria-label":"Volume",value:r,type:"range",name:n,id:o,onChange:i})})},v=function(e){var a=e.label,t=e.name,r=e.min,s=e.max,o=e.step,d=e.optType;return(0,u.jsxs)(l.Z,{className:"slider_wrapper",children:[(0,u.jsxs)(l.Z,{className:"slider_title",children:[(0,u.jsx)(n.Z,{variant:"h5",children:a}),(0,u.jsxs)(l.Z,{className:"slider_input",children:[(0,u.jsx)(i.gN,{small:"true",maxLength:3,min:3,max:3,name:t,id:t,type:"number",component:m}),(0,u.jsx)("span",{children:function(e){switch(e){case"deg":return(0,u.jsx)("sub",{className:"degree_sub",children:"o"});case"px":return"px";case"per":return"%";default:return e}}(d)})]})]}),(0,u.jsx)(i.gN,{name:t,component:b,step:o,min:r,max:s})]})}},9240:function(e,a,t){t.d(a,{$u:function(){return s},GH:function(){return i},Kh:function(){return n},Ly:function(){return o},_U:function(){return r},qK:function(){return l}});var l=[{id:"1",label:"Box Shadow",path:"/"},{id:"2",label:"Text Shadow",path:"/text-Shadow"},{id:"3",label:"CSS Cursor",path:"/css-cursor"},{id:"4",label:"Border Radius",path:"/border-radius"},{id:"5",label:"Border",path:"/border"},{id:"6",label:"Transform",path:"/transform"},{id:"7",label:"Linear Gradient",path:"/linear-gradient"},{id:"8",label:"Color Options",path:"/color-options"}],n=[{id:"1",label:"auto"},{id:"2",label:"default"},{id:"3",label:"none"},{id:"4",label:"context-menu"},{id:"5",label:"help"},{id:"6",label:"pointer"},{id:"7",label:"progress"},{id:"8",label:"wait"},{id:"9",label:"cell"},{id:"10",label:"crosshair"},{id:"11",label:"text"},{id:"12",label:"vertical-text"},{id:"13",label:"alias"},{id:"14",label:"copy"},{id:"15",label:"move"},{id:"16",label:"no-drop"},{id:"17",label:"not-allowed"},{id:"18",label:"grab"},{id:"19",label:"grabbing"},{id:"20",label:"all-scroll"},{id:"21",label:"col-resize"},{id:"22",label:"row-resize"},{id:"23",label:"n-resize"},{id:"24",label:"e-resize"},{id:"25",label:"s-resize"},{id:"26",label:"w-resize"},{id:"27",label:"ne-resize"},{id:"28",label:"nw-resize"},{id:"29",label:"se-resize"},{id:"30",label:"sw-resize"},{id:"31",label:"ew-resize"},{id:"32",label:"ns-resize"},{id:"33",label:"nesw-resize"},{id:"34",label:"nwse-resize"},{id:"35",label:"zoom-in"},{id:"36",label:"zoom-out"}],i=[{id:"solid",value:"solid"},{id:"dotted",value:"dotted"},{id:"dashed",value:"dashed"},{id:"double",value:"double"},{id:"groove",value:"groove"},{id:"ridge",value:"ridge"},{id:"inset",value:"inset"},{id:"outset",value:"outset"},{id:"none",value:"none"},{id:"hidden",value:"hidden"}],r=[{id:"linear",value:"linear"},{id:"radial",value:"Radial"},{id:"elliptical",value:"Elliptical"},{id:"repeat linear",value:"Repeat linear"},{id:"repeat radial",value:"Repeat Radial"},{id:"repeat elliptical",value:"Repeat Elliptical"}],s=[{id:"farthest-side",value:"farthest-side"},{id:"farthest-corner",value:"farthest-corner"}],o=[{id:"top left",value:"top left"},{id:"top center",value:"top center"},{id:"top right",value:"top right"},{id:"left right",value:"left right"},{id:"center center",value:"center center"},{id:"right center",value:"right center"},{id:"bottom left",value:"bottom left"},{id:"bottom center",value:"bottom center"},{id:"bottom right",value:"bottom right"}]},6464:function(e,a,t){t.d(a,{Z:function(){return d}});t(2791);var l=t(4554),n=t(890),i=t(1087),r=t(9240),s=t(184),o=function(){var e=window.location.href.split("/")[3];return(0,s.jsx)(l.Z,{sx:{display:"flex",alignItems:"center"},className:"header",children:(0,s.jsxs)(l.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"space-between"},className:"header_content",children:[(0,s.jsx)(n.Z,{variant:"h1",children:"CSS Generator Tool"}),(0,s.jsx)("ul",{className:"nav",children:r.qK.map((function(a){return(0,s.jsx)("li",{className:e===(t=a.path,t.split("/")[1])?"nav_active":null,children:(0,s.jsx)(i.rU,{to:a.path,children:a.label})},a.id);var t}))})]})})},d=function(e){var a=e.children;return(0,s.jsxs)("div",{className:"layout",children:[(0,s.jsx)("div",{className:"header",children:(0,s.jsx)(o,{})}),(0,s.jsx)("div",{className:"content",children:a})]})}},7752:function(e,a,t){t.r(a),t.d(a,{default:function(){return b}});var l=t(9439),n=t(890),i=t(1614),r=t(1889),s=t(4554),o=t(2791),d=t(2704),c=t(5705),u=t(739),h=t(6464),m=t(8605),x=t(8953),p=t(184),b=function(){var e=o.useState("#121212"),a=(0,l.Z)(e,2),t=a[0],b=a[1];return(0,p.jsx)(h.Z,{children:(0,p.jsxs)("section",{className:"custom_section textShadow_section",children:[(0,p.jsx)(n.Z,{variant:"h1",className:"title",children:"Text Shadow Generator"}),(0,p.jsx)(i.Z,{children:(0,p.jsx)(r.ZP,{container:!0,className:"grid_container",children:(0,p.jsx)(c.J9,{initialValues:{text_horizontal_shadow:0,text_vertical_shadow:0,text_blur_radius:0,text_shadow_opacity:1},onSubmit:function(e,a){},children:function(e){return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(r.ZP,{item:!0,xs:5,className:"left_column custom_colum",children:(0,p.jsxs)(c.l0,{children:[(0,p.jsx)(u.Z,{label:"Horizontal Shadow Length",name:"text_horizontal_shadow",min:-200,max:200,step:1}),(0,p.jsx)(u.Z,{label:"Vertical Shadow Length",name:"text_vertical_shadow",min:-200,max:200,step:1}),(0,p.jsx)(u.Z,{label:"Blur Radius",name:"text_blur_radius",min:0,max:50,step:1}),(0,p.jsxs)(s.Z,{className:"colorPicker_wrapper",children:[(0,p.jsx)(n.Z,{typography:"h5",children:"Background Color"}),(0,p.jsx)(m.O,{value:t,onChange:function(e){return b(e)}})]})]})}),(0,p.jsxs)(r.ZP,{item:!0,xs:7,pl:5,className:"right_column custom_colum",children:[(0,p.jsx)(s.Z,{className:"display_box",children:(0,p.jsx)(s.Z,{className:"text_content",children:(0,p.jsx)(n.Z,{variant:"h1",style:{textShadow:"".concat(e.values.text_horizontal_shadow,"px ").concat(e.values.text_vertical_shadow,"px ").concat(e.values.text_blur_radius,"px ").concat(t)},children:"This text is the preview text"})})}),(0,p.jsxs)(s.Z,{className:"result_content",id:"result_text",children:[(0,p.jsx)(n.Z,{variant:"h6",children:"text-shadow: ".concat(e.values.text_horizontal_shadow,"px ").concat(e.values.text_vertical_shadow,"px ").concat(e.values.text_blur_radius,"px ").concat(t,";")}),(0,p.jsx)(d.Z,{onClick:function(){return(0,x.d)("result_text")},className:"textCopy_icon icon_large"})]})]})]})}})})})]})})}}}]);
//# sourceMappingURL=752.4815f93b.chunk.js.map