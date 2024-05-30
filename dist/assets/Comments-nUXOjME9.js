import{d as P,n as T,f as p,o as U,c as D,a as r,b as l,w as a,u as n,i as F,r as c,q as N,e as M,t as O,j as Q,k as W,F as X,g as Y,E as b}from"./index-55hloExM.js";import{U as _,D as x,C as V}from"./el-message-k5hVxyaj.js";const Z=r("div",{class:"mb-5"},[r("div",null,"我的备注"),r("div",{class:"text-0.8rem text-text-secondary"},"红色代表支出，绿色代表收入")],-1),ee={class:"mb-5 f-c-e"},te=r("div",{class:"i-tabler-plus"},null,-1),le={class:"f-c-b flex-gap-1 flex-wrap"},ae=r("div",{class:"i-tabler-trash"},null,-1),oe=r("div",{class:"i-tabler-edit"},null,-1),se={class:"text-red"},ne={class:"f-c-c"},re=r("div",{class:"i-tabler-trash"},null,-1),ie=r("div",{class:"i-tabler-x"},null,-1),ue={class:"f-c-c"},de=r("div",{class:"i-tabler-x"},null,-1),ce=r("div",{class:"i-tabler-check"},null,-1),_e=P({__name:"Comments",async setup(me){let m,g;const y=([m,g]=T(()=>x.create()),m=await m,g(),m),d=p(([m,g]=T(()=>x.get(y,V.COMMENTS,"0")),m=await m,g(),m)),f=p(),v=p(!1),C=p("新增"),i=p(!1),k=p(),I=p({text:[{required:!0,message:"输入备注！",trigger:"change"},{required:!0,message:"输入备注！",trigger:"blur"}],cost:[{required:!0,validator:_.Forms.validateMoney,trigger:"change"},{required:!0,validator:_.Forms.validateMoney,trigger:"blur"}],type:[{required:!0,message:"输入收支类型！",trigger:"change"},{required:!0,message:"输入收支类型！",trigger:"blur"}]}),e=p({text:"",cost:100,type:"支"});function S(){_.Forms.formValidator(k.value,()=>{const o=d.value.items.filter(_.createFilter(e.value.text));!o||o.length==0&&e.value.text?(d.value.items.push({value:e.value.text,cost:e.value.cost,type:e.value.type}),x.put(y,V.COMMENTS,_.Objects.raw(d.value),"0"),i.value=!i.value):b.error("重复添加！")},()=>{b.error("检查输入的值是否正确")})}function $(){var t;const o=(t=d.value.items)==null?void 0:t.findIndex(u=>u.value===f.value.value);o>=0?_.Forms.formValidator(k.value,()=>{d.value.items[o]={value:e.value.text,cost:e.value.cost,type:e.value.type},x.put(y,V.COMMENTS,_.Objects.raw(d.value),"0"),i.value=!i.value,e.value.value="",e.value.cost=100,e.value.type="支"},()=>{b.error("检查输入的值是否正确")}):b.error("更新失败")}function j(){var t;const o=(t=d.value.items)==null?void 0:t.findIndex(u=>u.value===f.value.value);o>=0?(d.value.items.splice(o,1),x.put(y,V.COMMENTS,_.Objects.raw(d.value),"0"),v.value=!v.value):b.error("删除失败")}const R=(o,t)=>t.type===o;function z(o){f.value=o,v.value=!v.value}function B(o){C.value="更新",f.value=o,e.value.text=o.value,e.value.cost=o.cost,e.value.type=o.type,i.value=!i.value}function A(){C.value="新增",e.value.text="",e.value.cost=100,e.value.type="支",i.value=!i.value}return(o,t)=>{const u=c("el-button"),h=c("el-table-column"),L=c("el-table"),E=c("el-dialog"),q=c("el-input"),w=c("el-form-item"),G=c("el-radio"),H=c("el-radio-group"),J=c("el-form");return U(),D("div",null,[Z,r("div",ee,[l(u,{plain:"",round:"",size:"small",type:"primary",onClick:A},{icon:a(()=>[te]),_:1})]),r("div",le,[l(L,{data:n(d).items,border:"",stripe:""},{default:a(()=>[l(h,{fixed:"left",label:"备注",prop:"value",width:"95"}),l(h,{"filter-method":R,filters:[{text:"支",value:"支"},{text:"收",value:"收"}],label:"类型",prop:"type"}),l(h,{label:"金额",prop:"cost",sortable:""}),l(h,{fixed:"right",label:"操作",width:"80"},{default:a(s=>[l(u,{link:"",size:"small",type:"danger",onClick:N(K=>z(s.row),["prevent"])},{icon:a(()=>[ae]),_:2},1032,["onClick"]),l(u,{link:"",size:"small",type:"success",onClick:N(K=>B(s.row),["prevent"])},{icon:a(()=>[oe]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])]),l(E,{modelValue:n(v),"onUpdate:modelValue":t[1]||(t[1]=s=>F(v)?v.value=s:null),"append-to-body":"",title:"消息提示",width:"90%"},{footer:a(()=>[r("div",ne,[l(u,{class:"mr-4",plain:"",round:"",type:"danger",onClick:j},{icon:a(()=>[re]),_:1}),l(u,{plain:"",round:"",type:"primary",onClick:t[0]||(t[0]=s=>v.value=!1)},{icon:a(()=>[ie]),_:1})])]),default:a(()=>[r("div",null,[M(" 是否要删除 "),r("span",se,O(n(f).value),1),M(" 备注？ ")])]),_:1},8,["modelValue"]),l(E,{modelValue:n(i),"onUpdate:modelValue":t[7]||(t[7]=s=>F(i)?i.value=s:null),title:n(C)=="新增"?"新建备注":"修改备注",width:"90%"},{footer:a(()=>[r("div",ue,[l(u,{class:"mr-4",plain:"",round:"",onClick:t[5]||(t[5]=s=>i.value=!1)},{icon:a(()=>[de]),_:1}),l(u,{plain:"",round:"",type:"primary",onClick:t[6]||(t[6]=s=>n(C)=="新增"?S():$())},{icon:a(()=>[ce]),_:1})])]),default:a(()=>[l(J,{ref_key:"formInst",ref:k,model:n(e),rules:n(I),"hide-required-asterisk":"","label-position":"left","status-icon":""},{default:a(()=>[l(w,{label:"备注",prop:"text"},{default:a(()=>[l(q,{modelValue:n(e).text,"onUpdate:modelValue":t[2]||(t[2]=s=>n(e).text=s),"prefix-icon":n(Q),placeholder:"请输入收支备注"},null,8,["modelValue","prefix-icon"])]),_:1}),l(w,{label:"金额",prop:"cost"},{default:a(()=>[l(q,{modelValue:n(e).cost,"onUpdate:modelValue":t[3]||(t[3]=s=>n(e).cost=s),"prefix-icon":n(W),placeholder:"请输入收支金额"},null,8,["modelValue","prefix-icon"])]),_:1}),l(w,{label:"类型",prop:"type"},{default:a(()=>[l(H,{modelValue:n(e).type,"onUpdate:modelValue":t[4]||(t[4]=s=>n(e).type=s)},{default:a(()=>[(U(),D(X,null,Y(["支","收"],s=>l(G,{value:s},{default:a(()=>[M(O(s),1)]),_:2},1032,["value"])),64))]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue","title"])])}}});export{_e as default};
