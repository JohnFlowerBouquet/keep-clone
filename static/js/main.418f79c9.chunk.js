(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{5412:function(e,t,a){e.exports=a(5546)},5546:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(25),r=a.n(o),l=a(23),c=a(26),s=a(18),d=a(19),u=a(21),h=a(20),p=a(22),m=a(2),f=a(17),b=a(7),g=a(24),k=a(46),w=a.n(k),v=a(47),C=a.n(v),O=Object(f.withStyles)(function(e){return{search:Object(b.a)({position:"relative",borderRadius:"8px",margin:"4px 4px 4px auto",width:"auto"},e.breakpoints.up("sm"),{margin:"8px 16px 8px auto",width:"auto"}),searchIcon:Object(b.a)({width:9*e.spacing.unit,height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center",top:"0"},e.breakpoints.up("sm"),{width:48}),inputRoot:{color:"inherit",width:"100%",height:"100%"},inputInput:Object(b.a)({paddingTop:e.spacing.unit,paddingRight:e.spacing.unit,paddingBottom:e.spacing.unit,paddingLeft:10*e.spacing.unit,transition:"all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",borderRadius:16,width:"0",cursor:"pointer","&:focus":{width:"40vw",backgroundColor:"#f1f3f4",cursor:"auto"}},e.breakpoints.up("sm"),{width:120,backgroundColor:"#f1f3f4","&:focus":{width:240}})}})(function(e){var t=e.classes,a=e.handleSearch,n=e.wordToMatch;return i.a.createElement("div",{className:t.search},i.a.createElement(w.a,{placeholder:"Search\u2026",value:n,classes:{root:t.inputRoot,input:t.inputInput},onChange:function(e){return a(e.target.value)}}),i.a.createElement("div",{className:t.searchIcon},i.a.createElement(C.a,null)))}),x=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.handleSearch,n=e.wordToMatch;return i.a.createElement(m.a,{className:t.root},i.a.createElement("div",{className:t.container},i.a.createElement(g.f,{style:{color:"#f4b607",fontSize:32,margin:8}}),i.a.createElement(m.m,{className:t.title,variant:"h5",color:"inherit"},"Keep-clone")),i.a.createElement(O,{handleSearch:a,wordToMatch:n}))}}]),t}(n.Component),j=Object(f.withStyles)(function(e){return{root:{display:"flex",flexDirection:"row",color:"#7f7777",background:"#fff"},container:Object(b.a)({display:"flex",alignItems:"center",cursor:"pointer",width:"120px"},e.breakpoints.up("sm"),{margin:8,width:"auto"}),icon:Object(b.a)({margin:0},e.breakpoints.up("sm"),{margin:8}),title:Object(b.a)({fontSize:"1rem"},e.breakpoints.up("sm"),{fontSize:"1.5rem"})}})(x),y=Object(f.withStyles)({root:{marginLeft:8,width:"100%"},inputMultiline:{overflow:"hidden"}})(m.g),E=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.tasks,n=e.handleTaskAdd,o=e.handleTaskChange,r=e.handleCheck;return i.a.createElement(m.h,{className:t.list},a.map(function(e,a,l){var c=e.text,s=e.isDone,d=e.id,u=a===l.length-1;return i.a.createElement(m.i,{key:d},u?i.a.createElement(g.a,null):i.a.createElement(m.b,{checked:s,checkedIcon:i.a.createElement(g.c,null),disableRipple:!0,onClick:function(e){e.stopPropagation(),r(d)}}),i.a.createElement(y,{label:"List Item",name:"text",autoComplete:"off",placeholder:u?"Add Element":"",onChange:u?n:o,className:t.input,value:c,id:d.toString(),multiline:!0}))}))}}]),t}(n.Component),N=Object(f.withStyles)(function(e){return{root:Object(l.a)({},e.mixins.gutters(),{paddingTop:e.spacing.unit,paddingBottom:e.spacing.unit,margin:.5*e.spacing.unit}),list:{width:"100%"}}})(E),S=Object(f.withStyles)(function(e){return{root:Object(b.a)({display:"block",marginLeft:8,width:400,marginBottom:10,fontWeight:"bold",padding:"12px 16px"},e.breakpoints.up("sm"),{width:"100%"}),inputMultiline:{overflow:"hidden"}}})(m.g),T=Object(f.withStyles)(function(e){return{root:Object(b.a)({display:"flex",flexWrap:"wrap",alignItems:"center",width:300,margin:"5rem auto",padding:0,boxShadow:"0 1px 2px 0 rgba(60,64,67,0.302), 0 2px 6px 2px rgba(60,64,67,0.149)"},e.breakpoints.up("sm"),{margin:"5rem auto",width:600}),textContainer:{flex:1,padding:"12px 16px"},text:{fontWeight:"500",fontSize:"1rem",color:"#80868b"},iconButton:{padding:5}}})(function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(i)))).state=a.getInitialState(),a.handleCheck=function(e){a.setState(function(t){return{tasks:t.tasks.map(function(t){return t.id===e?Object(l.a)({},t,{isDone:!t.isDone}):t})}})},a.handleClickAway=function(e){if(a.props.isOpen){var t=a.state;t.tasks.pop(),a.props.onAdd(t),e.preventDefault()}a.setState(function(){return a.getInitialState()})},a.handleChange=function(e){var t=e.target,n=t.value,i=t.name;a.setState(function(){return Object(b.a)({},i,n)})},a.handleTaskChange=function(e){var t=e.target,n=t.value,i=t.id;a.setState(function(e){return{tasks:e.tasks.map(function(e){return e.id.toString()===i?Object(l.a)({},e,{text:n}):e})}})},a.handleTaskAdd=function(e){a.handleTaskChange(e),a.setState(function(e){var t=e.tasks;return{tasks:[].concat(Object(c.a)(t),[{text:"",isDone:!1,id:(new Date).getTime()}])}})},a}return Object(p.a)(t,e),Object(d.a)(t,[{key:"getInitialState",value:function(){var e=this.props.note;return e||{text:"",title:"",tasks:[{text:"",isDone:!1,id:(new Date).getTime()}]}}},{key:"render",value:function(){var e,t=this.state,a=t.title,n=t.text,o=t.tasks,r=this.props,l=r.classes,c=r.handleClick,s=r.type,d=r.isOpen;return d?"note"===s?e=i.a.createElement(S,{label:"Note",autoComplete:"off",value:n,name:"text",onChange:this.handleChange,placeholder:"Create Note...",multiline:!0}):"list"===s&&(e=i.a.createElement(N,{tasks:o,handleCheck:this.handleCheck,handleTaskAdd:this.handleTaskAdd,handleTaskChange:this.handleTaskChange})):e=i.a.createElement("div",{className:l.textContainer},i.a.createElement(m.m,{className:l.text,onClick:function(){return c("note")}},"Create Note...")),i.a.createElement(m.c,{onClickAway:this.handleClickAway},i.a.createElement(m.l,{className:l.root,elevation:1,display:"flex"},d&&i.a.createElement(S,{label:"Title",autoComplete:"off",value:a,name:"title",placeholder:"Add Title...",onChange:this.handleChange,multiline:!0,fullWidth:!0}),e,!d&&i.a.createElement("div",{className:l.buttonsContainer},i.a.createElement(m.f,{color:"primary",onClick:function(){return c("list")},className:l.iconButton,"aria-label":"Add List Note",name:"list"},i.a.createElement(g.c,null)),i.a.createElement(m.f,{color:"primary",disabled:!0,className:l.iconButton,"aria-label":"Directions"},i.a.createElement(g.b,null)),i.a.createElement(m.f,{color:"primary",disabled:!0,className:l.iconButton,"aria-label":"Directions"},i.a.createElement(g.g,null)))))}}]),t}(n.Component)),D=Object(f.withStyles)(function(e){return{root:{cursor:"default",overflowWrap:"break-word"},inputMultiline:{overflow:"hidden"}}})(m.g),A=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(i)))).state=a.getInitState(),a.handleCheck=function(e){a.setState(function(t){return{tasks:t.tasks.map(function(t){return t.id===e?Object(l.a)({},t,{isDone:!t.isDone}):t})}},function(){return a.props.onUpdate(a.state)})},a}return Object(p.a)(t,e),Object(d.a)(t,[{key:"getInitState",value:function(){return this.props.note||{title:"",id:"",tasks:[]}}},{key:"render",value:function(){var e=this,t=this.props,a=t.classes,n=t.handleDeleteNote,o=this.state,r=o.title,l=o.tasks,c=o.text,s=o.id;return i.a.createElement(m.l,{className:a.root,elevation:1},i.a.createElement(m.m,{className:a.title,variant:"h6",component:"h3"},r),i.a.createElement(m.h,{className:a.list},l.map(function(t,n){var o=t.text,r=t.isDone,l=t.id;return i.a.createElement(m.i,{key:l,className:r?a.list__itemDone:a.list__item,divider:!0},i.a.createElement(m.b,{checked:r,onClick:function(t){t.stopPropagation(),e.handleCheck(l)},checkedIcon:i.a.createElement(g.c,null)}),i.a.createElement(m.j,{className:a.itemText,primary:o}))}),c&&i.a.createElement(D,{multiline:!0,fullWidth:!0,value:c})),i.a.createElement(m.f,{color:"primary",className:a.iconButton,"aria-label":"Directions",onClick:function(e){e.stopPropagation(),n(s)}},i.a.createElement(g.e,null)))}}]),t}(i.a.Component),M=Object(f.withStyles)(function(e){return{root:Object(l.a)({},e.mixins.gutters(),Object(b.a)({paddingTop:e.spacing.unit,paddingBottom:e.spacing.unit,margin:e.spacing.unit,transition:"all 0.5s ease"},e.breakpoints.up("sm"),{width:"250px"})),list:{display:"flex",flexDirection:"column"},list__item:{padding:"0"},list__itemDone:{order:"1",padding:"0",textDecoration:"line-through",color:"#5f6368"},title:{cursor:"default",overflowWrap:"break-word"},text:{cursor:"default",overflowWrap:"break-word",overflow:"hidden"},itemText:{overflowWrap:"break-word"},itemCheckbox:{padding:"4"}}})(A),I=Object(f.withStyles)(function(e){return{root:Object(b.a)({display:"block",marginLeft:8,width:400,marginBottom:10,fontWeight:"bold",padding:"12px 16px"},e.breakpoints.up("sm"),{width:"100%"}),inputMultiline:{overflow:"hidden"}}})(m.g),W=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(i)))).state=Object(l.a)({},a.props.note,{tasks:[].concat(Object(c.a)(a.props.note.tasks),[{text:"",isDone:!1,id:(new Date).getTime()}])}),a.handleCheck=function(e){a.setState(function(t){return{tasks:t.tasks.map(function(t){return t.id===e?Object(l.a)({},t,{isDone:!t.isDone}):t})}})},a.handleClickAway=function(){var e=a.state;e.tasks.pop(),a.props.onUpdate(e)},a.handleChange=function(e){var t=e.target,n=t.value,i=t.name;a.setState(function(){return Object(b.a)({},i,n)})},a.handleTaskChange=function(e){var t=e.target,n=t.value,i=t.id;a.setState(function(e){return{tasks:e.tasks.map(function(e){return e.id.toString()===i?Object(l.a)({},e,{text:n}):e})}})},a.handleTaskAdd=function(e){a.handleTaskChange(e),a.setState(function(e){var t=e.tasks;return{tasks:[].concat(Object(c.a)(t),[{text:"",isDone:!1,id:(new Date).getTime()}])}})},a}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e,t=this.state,a=t.title,n=t.text,o=t.tasks,r=this.props,l=r.classes,c=r.handleClick;return n?e=i.a.createElement(I,{label:"Note",autoComplete:"off",value:n,name:"text",onChange:this.handleChange,placeholder:"Create Note...",multiline:!0}):o.length>0&&(e=i.a.createElement(N,{tasks:o,handleCheck:this.handleCheck,handleTaskAdd:this.handleTaskAdd,handleTaskChange:this.handleTaskChange})),i.a.createElement(m.c,{onClickAway:this.handleClickAway},i.a.createElement(m.l,{className:l.root,elevation:1,display:"flex"},i.a.createElement(I,{label:"Title",autoComplete:"off",value:a,name:"title",placeholder:"Add Title...",onChange:this.handleChange,multiline:!0,fullWidth:!0}),e,i.a.createElement(m.f,{color:"primary",onClick:function(){return c("list")},className:l.iconButton,"aria-label":"Add List Note",name:"list"},i.a.createElement(g.d,null))))}}]),t}(n.Component),B=Object(f.withStyles)(function(e){return{root:Object(b.a)({display:"flex",flexWrap:"wrap",alignItems:"center",width:300,margin:"5rem auto",padding:0},e.breakpoints.up("sm"),{margin:"5rem auto",width:400}),textContainer:{flex:1,padding:"12px 16px"},text:{fontWeight:"bold"},iconButton:{padding:5}}})(W),R=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(i)))).handleModalClose=function(){a.props.onDeselect()},a}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.classes,n=t.notes,o=t.onSelect,r=t.onUpdate,l=t.editMode,c=t.actvieNote,s=t.onDelete,d=t.wordToMatch,u=function(){var e=new RegExp(d,"i");return d?n.filter(function(t){return t.title.match(e)}):null},h=u()?u():n;return console.log(h),i.a.createElement(m.e,{className:a.root,container:!0,justify:"flex-start"},h.map(function(t){return l&&c.id===t.id?i.a.createElement(i.a.Fragment,{key:c.id},i.a.createElement(m.e,{item:!0,style:{width:"260px"}}),i.a.createElement(m.k,{open:l,onClose:e.handleModalClose,className:a.modal},i.a.createElement(B,{tabIndex:"-1",note:t,onUpdate:r}))):i.a.createElement(m.e,{item:!0,xs:12,sm:"auto",key:t.id,onClick:function(){return o(t.id)}},i.a.createElement(M,{key:t.id,note:t,onUpdate:r,handleDeleteNote:s}))}))}}]),t}(n.Component),U=Object(f.withStyles)(function(e){return{root:Object(b.a)({margin:"3rem auto",padding:"5px"},e.breakpoints.up("sm"),{margin:"0 auto",padding:"0 10vw"}),modal:{display:"flex",alignItems:"center",justifyContent:"center"}}})(R),_=[{title:"House Jobs:",id:"1550353655476",color:"blue",dateCreated:"2015-03-25",deadline:"December 25, 2025",tasks:[{id:"41314",text:"Clean the courtyard",isDone:!0},{id:"41351",text:"Wash the car",isDone:!1}]},{title:"To do Tomorrow:",id:"102",color:"red",dateCreated:"16.02.2019, 22:43:28",deadline:"December 25, 2025",tasks:[{id:"41831",text:"Workout",isDone:!1},{id:"41031",text:"Job interview",isDone:!1}]},{title:"To do in Weekend:",id:"103",color:"blue",dateCreated:"19.02.2019, 22:43:28",deadline:"December 25, 2025",tasks:[{id:"41131",text:"CoC Session",isDone:!1},{id:"41431",text:"Bike Trip",isDone:!0}]},{title:"My Secret Note",id:"104",color:"blue",dateCreated:"19.02.2019, 22:43:28",deadline:"December 25, 2025",tasks:[],text:"This is my secret note: 59 6f 75 20 61 72 65 20 61 77 65 73 6f 6d 65 21"}],L=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(i)))).state={Notes:_,searchResults:null,wordToMatch:"",actvieNote:{},editMode:!1,isOpen:!1,type:""},a.handleClick=function(e){a.setState(function(){return{type:e,isOpen:!0}})},a.handleNoteSelectEdit=function(e){return a.setState(function(t){return{actvieNote:t.Notes.find(function(t){return t.id===e}),editMode:!0}})},a.handleNoteCloseEdit=function(){return a.setState(function(){return{actvieNote:{},editMode:!1}})},a.handleUpdateNotes=function(e){return a.setState(function(t){var a=t.Notes;return{Notes:Object(c.a)(a.map(function(t){return t.id===e.id?e:t}))}})},a.handleAddNote=function(e){e.title||e.text||e.tasks.length>1?a.setState(function(t){var a=t.Notes;return{Notes:[].concat(Object(c.a)(a),[Object(l.a)({},e,{id:(new Date).getTime()})]),isOpen:!1,type:""}}):a.setState(function(){return{isOpen:!1,type:""}})},a.handleDeleteNote=function(e){return a.setState(function(t){var a=t.Notes;return{Notes:Object(c.a)(a.filter(function(t){return t.id!==e}))}})},a.handleSearch=function(e){return a.setState(function(){return{wordToMatch:e}})},a}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.state,t=e.Notes,a=e.wordToMatch;return i.a.createElement(i.a.Fragment,null,i.a.createElement(m.d,null),i.a.createElement(j,{handleSearch:this.handleSearch,wordToMatch:this.state.wordToMatch}),i.a.createElement(T,{onAdd:this.handleAddNote,isOpen:this.state.isOpen,type:this.state.type,handleClick:this.handleClick}),i.a.createElement(U,{notes:t,onSelect:this.handleNoteSelectEdit,onDeselect:this.handleNoteCloseEdit,onUpdate:this.handleUpdateNotes,editMode:this.state.editMode,actvieNote:this.state.actvieNote,onDelete:this.handleDeleteNote,wordToMatch:a}))}}]),t}(n.Component),z=Object(f.withStyles)({root:{padding:"3rem"}})(L),F=a(48),J=Object(f.createMuiTheme)({palette:{primary:{light:F.orange[200],main:"#FB8C00",dark:"#EF6C00",contrastText:"rgb(0,0,0)"}},typography:{useNextVariants:!0}});r.a.render(i.a.createElement(f.MuiThemeProvider,{theme:J},i.a.createElement(z,null)),document.getElementById("root"))}},[[5412,1,2]]]);
//# sourceMappingURL=main.418f79c9.chunk.js.map