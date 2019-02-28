(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{5412:function(e,t,a){e.exports=a(5547)},5547:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(25),o=a.n(r),l=a(24),s=a(34),c=a(18),d=a(19),u=a(21),m=a(20),p=a(22),h=a(2),f=a(16),b=a(23),k=a(17),g=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props.classes;return i.a.createElement(h.a,{className:e.root},i.a.createElement("div",{style:{float:"left",display:"flex",alignItems:"center"}},i.a.createElement(h.f,{color:"primary",className:e.icon,"aria-label":"Menu"},i.a.createElement(k.f,null)),i.a.createElement(k.d,{style:{color:"#f4b607",fontSize:32,margin:8}}),i.a.createElement(h.n,{style:{cursor:"default"},variant:"h5",color:"inherit"},"Keep-clone")),i.a.createElement("div",{style:{float:"right"}},i.a.createElement(h.f,{color:"primary",disabled:!0,className:e.icon,"aria-label":"Search"},i.a.createElement(k.g,null))))}}]),t}(n.Component),y=Object(f.withStyles)(function(e){return{root:{display:"inline-block",color:"#7f7777",background:"#fff"},icon:Object(b.a)({margin:0,cursor:"pointer"},e.breakpoints.up("sm"),{margin:8})}})(g),O=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.tasks,n=e.handleTaskAdd,r=e.handleTaskChange,o=e.handleCheck;return i.a.createElement(h.h,null,a.map(function(e,a,l){var s=e.text,c=e.isDone,d=e.id,u=a===l.length-1;return i.a.createElement(h.i,{key:d,className:t.item},u?i.a.createElement(k.a,null):i.a.createElement(h.b,{className:t.itemCheckbox,checked:c,checkedIcon:i.a.createElement(k.c,null),disableRipple:!0,onClick:function(e){e.stopPropagation(),o(d)}}),i.a.createElement(h.g,{label:"List Item",name:"text",autoComplete:"off",placeholder:u?"Add Element":"",onChange:u?n:r,className:t.input,value:s,id:d.toString()}))}))}}]),t}(n.Component),C=Object(f.withStyles)(function(e){return{root:Object(l.a)({},e.mixins.gutters(),{paddingTop:e.spacing.unit,paddingBottom:e.spacing.unit,margin:.5*e.spacing.unit,width:"400"}),input:{marginLeft:5}}})(O),E=Object(f.withStyles)(function(e){return{root:Object(b.a)({display:"flex",flexWrap:"wrap",alignItems:"center",width:300,margin:"5rem auto",padding:0},e.breakpoints.up("sm"),{margin:"5rem auto",width:400}),input:{display:"block",fontWeight:"bold",marginLeft:8,flex:1},inputActive:Object(b.a)({width:300,marginBottom:10,flex:"initial"},e.breakpoints.up("sm"),{width:400}),iconButton:{padding:5}}})(function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state=a.getInitialState(),a.handleCheck=function(e){a.setState(function(t){return{tasks:t.tasks.map(function(t){return t.id===e?Object(l.a)({},t,{isDone:!t.isDone}):t})}})},a.handleClickAway=function(){if(a.props.isOpen){var e=a.state;e.tasks.pop(),a.props.onAdd(e)}a.setState(function(){return a.getInitialState()})},a.handleChange=function(e){var t=e.target,n=t.value,i=t.name;return a.setState(function(){return Object(b.a)({},i,n)})},a.handleTaskChange=function(e){var t=e.target,n=t.value,i=t.id;a.setState(function(e){return{tasks:e.tasks.map(function(e){return e.id.toString()===i?Object(l.a)({},e,{text:n}):e})}})},a.handleTaskAdd=function(e){a.handleTaskChange(e),a.setState(function(e){var t=e.tasks;return{tasks:[].concat(Object(s.a)(t),[{text:"",isDone:!1,id:(new Date).getTime()}])}})},a}return Object(p.a)(t,e),Object(d.a)(t,[{key:"getInitialState",value:function(){var e=this.props.note;return e||{text:"",title:"",tasks:[{text:"",isDone:!1,id:(new Date).getTime()}]}}},{key:"render",value:function(){var e,t=this.state,a=t.title,n=t.text,r=t.tasks,o=this.props,l=o.classes,s=o.handleClick,c=o.type,d=o.isOpen;return d?"note"===c?e=i.a.createElement(h.g,{label:"Note",autoComplete:"off",className:[l.input,l.inputActive].join(" "),value:n,name:"text",onChange:this.handleChange,placeholder:"Create Note..."}):"list"===c&&(e=i.a.createElement(C,{tasks:r,handleCheck:this.handleCheck,handleTaskAdd:this.handleTaskAdd,handleTaskChange:this.handleTaskChange})):e=i.a.createElement(h.n,{className:l.input,onClick:function(){return s("note")}},"Create Note..."),i.a.createElement(h.c,{onClickAway:this.handleClickAway},i.a.createElement(h.m,{className:l.root,elevation:1},d&&i.a.createElement(h.g,{label:"Title",autoComplete:"off",className:[l.input,l.inputActive].join(" "),value:a,name:"title",placeholder:"Add Title...",onChange:this.handleChange}),e,!d&&i.a.createElement(i.a.Fragment,null,i.a.createElement(h.f,{color:"primary",onClick:function(){return s("list")},className:l.iconButton,"aria-label":"Add List Note",name:"list"},i.a.createElement(k.c,null)),i.a.createElement(h.f,{color:"primary",disabled:!0,className:l.iconButton,"aria-label":"Directions"},i.a.createElement(k.b,null)),i.a.createElement(h.f,{color:"primary",disabled:!0,className:l.iconButton,"aria-label":"Directions"},i.a.createElement(k.e,null)))))}}]),t}(n.Component)),j=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state=a.getInitState(),a.handleCheck=function(e){a.setState(function(t){return{tasks:t.tasks.map(function(t){return t.id===e?Object(l.a)({},t,{isDone:!t.isDone}):t})}},function(){return a.props.onUpdate(a.state)})},a}return Object(p.a)(t,e),Object(d.a)(t,[{key:"getInitState",value:function(){return this.props.note||{title:"",id:"",tasks:[]}}},{key:"render",value:function(){var e=this,t=this.props.classes,a=this.state,n=a.title,r=a.tasks,o=a.text;return i.a.createElement(h.m,{className:t.root,elevation:1},i.a.createElement(h.n,{className:t.title,variant:"h6",component:"h3"},n),i.a.createElement(h.h,{className:t.list},r.map(function(a){var n=a.text,r=a.isDone,o=a.id;return i.a.createElement(h.i,{key:o,className:t.item},i.a.createElement(h.b,{className:t.itemCheckbox,checked:r,onClick:function(t){t.stopPropagation(),e.handleCheck(o)},checkedIcon:i.a.createElement(k.c,null),disableRipple:!0}),i.a.createElement(h.k,{className:t.itemText,primary:n}),i.a.createElement(h.j,null))}),o&&i.a.createElement(h.g,{className:t.text,multiline:!0,value:o})))}}]),t}(i.a.Component),v=Object(f.withStyles)(function(e){return{root:Object(l.a)({},e.mixins.gutters(),Object(b.a)({paddingTop:e.spacing.unit,paddingBottom:e.spacing.unit,margin:e.spacing.unit},e.breakpoints.up("sm"),{width:"250px"})),title:{cursor:"default"},text:{cursor:"default"},item:{padding:"0"},itemCheckbox:{padding:"4"}}})(j),N=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).handleModalClose=function(){a.props.onDeselect()},a}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.classes,n=t.notes,r=t.onSelect,o=t.onCheck,l=t.onUpdate,s=t.editMode,c=t.note;return i.a.createElement(h.e,{className:a.root,container:!0,justify:"flex-start"},n.map(function(t){return s&&c.id===t.id?i.a.createElement(i.a.Fragment,null,i.a.createElement(h.e,{item:!0,key:t.title,style:{width:"260px"}}),i.a.createElement(h.l,{key:c.id,open:s,onClose:e.handleModalClose,className:a.modal},i.a.createElement(v,{tabindex:"-1",key:t.id,note:t,onCheck:o,onUpdate:l}))):i.a.createElement(h.e,{item:!0,xs:12,sm:"auto",key:t.id,onClick:function(){return r(t.id)}},i.a.createElement(v,{key:t.id,note:t,onUpdate:l}))}))}}]),t}(n.Component),x=Object(f.withStyles)(function(e){return{root:Object(b.a)({margin:"3rem auto",padding:"5px"},e.breakpoints.up("sm"),{margin:"0 auto",padding:"0 10vw"}),modal:{display:"flex",alignItems:"center",justifyContent:"center"}}})(N),w=[{title:"House Jobs:",id:"1550353655476",color:"blue",dateCreated:"2015-03-25",deadline:"December 25, 2025",tasks:[{id:"41314",text:"Clean the House",isDone:!1},{id:"41351",text:"Wash the car",isDone:!1}]},{title:"To do Tomorrow:",id:"102",color:"red",dateCreated:"16.02.2019, 22:43:28",deadline:"December 25, 2025",tasks:[{id:"41831",text:"adasdsa",isDone:!1},{id:"41031",text:"aweqweqw",isDone:!0}]},{title:"To do in Weekend:",id:"103",color:"blue",dateCreated:"19.02.2019, 22:43:28",deadline:"December 25, 2025",tasks:[{id:"41131",text:"adasdsa",isDone:!1},{id:"41431",text:"aweqweqw",isDone:!0}]},{title:"My Secret Note",id:"104",color:"blue",dateCreated:"19.02.2019, 22:43:28",deadline:"December 25, 2025",tasks:[],text:"This is my secret note: asdasdasdasdasdasdasdasdaaaaaaaaaaaaaaaaaaaaaaaaaaaaadq qw qweqe 1123213 dasdaa !"}],S=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={Notes:w,note:{},editMode:!1,isOpen:!1,type:""},a.handleClick=function(e){a.setState(function(){return{type:e,isOpen:!0}})},a.handleNoteSelectEdit=function(e){return a.setState(function(t){return{note:t.Notes.find(function(t){return t.id===e}),editMode:!0}})},a.handleNoteCloseEdit=function(){return a.setState(function(){return{note:{},editMode:!1}})},a.handleUpdateNotes=function(e){return a.setState(function(t){var a=t.Notes;return{Notes:Object(s.a)(a.map(function(t){return t.id===e.id?e:t}))}})},a.handleAddNote=function(e){e.title||e.text||e.tasks.length>1?a.setState(function(t){var a=t.Notes;return{Notes:[].concat(Object(s.a)(a),[Object(l.a)({},e,{id:(new Date).getTime()})]),isOpen:!1,type:""}}):a.setState(function(){return{isOpen:!1,type:""}})},a}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.state.Notes;return i.a.createElement(i.a.Fragment,null,i.a.createElement(h.d,null),i.a.createElement(y,null),i.a.createElement(E,{onAdd:this.handleAddNote,isOpen:this.state.isOpen,type:this.state.type,handleClick:this.handleClick}),i.a.createElement(x,{notes:e,onSelect:this.handleNoteSelectEdit,onDeselect:this.handleNoteCloseEdit,onUpdate:this.handleUpdateNotes,editMode:this.state.editMode,note:this.state.note}))}}]),t}(n.Component),D=Object(f.withStyles)({root:{padding:"3rem"}})(S),T=a(44),A=Object(f.createMuiTheme)({palette:{primary:{light:T.orange[200],main:"#FB8C00",dark:"#EF6C00",contrastText:"rgb(0,0,0)"}},typography:{useNextVariants:!0}});o.a.render(i.a.createElement(f.MuiThemeProvider,{theme:A},i.a.createElement(D,null)),document.getElementById("root"))}},[[5412,1,2]]]);
//# sourceMappingURL=main.dc9cc8ab.chunk.js.map