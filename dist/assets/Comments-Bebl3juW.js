import{d as J,h as T,r as v,c as B,g as r,b as l,w as o,u as n,i as N,a as c,o as O,s as S,e as w,t as U,j as P,k as Q,F as W,f as X,E as x}from"./index-QU_Iccmb.js";import{D as g,C as _}from"./index-BxJgwICe.js";import{U as f}from"./index-BakwFiFG.js";/* empty css                   */const Z=r("div",{class:"mb-4"},[r("div",null,"我的备注"),r("div",{class:"text-0.8rem text-text-secondary"},"备注便于添加收入或者支出。红色支出；绿色收入。")],-1),ee={class:"mb-4 f-c-e"},te=r("div",{class:"i-tabler-plus"},null,-1),le={class:"f-c-b flex-gap-1 flex-wrap"},oe=r("div",{class:"i-tabler-trash"},null,-1),ae=r("div",{class:"i-tabler-edit"},null,-1),se={class:"text-red"},ne={class:"f-c-c"},re=r("div",{class:"i-tabler-trash"},null,-1),ie=r("div",{class:"i-tabler-x"},null,-1),ue={class:"f-c-c"},de=r("div",{class:"i-tabler-x"},null,-1),ce=r("div",{class:"i-tabler-check"},null,-1),be=J({__name:"Comments",async setup(me){let m,y;const C=([m,y]=T(()=>g.create()),m=await m,y(),m),d=v(([m,y]=T(()=>g.get(C,_.DB_COMMENTS,_.DB_KEY_COMMENTS)),m=await m,y(),m)),b=v(),p=v(!1),h=v("新增"),i=v(!1),V=v(),q=v({text:[{required:!0,message:"输入备注！",trigger:"change"},{required:!0,message:"输入备注！",trigger:"blur"}],cost:[{required:!0,validator:f.Forms.validateMoney,trigger:"change"},{required:!0,validator:f.Forms.validateMoney,trigger:"blur"}],type:[{required:!0,message:"输入收支类型！",trigger:"change"},{required:!0,message:"输入收支类型！",trigger:"blur"}]}),e=v({text:"",cost:100,type:"支"});function F(){f.Forms.formValidator(V.value,()=>{const a=d.value.items.filter(f.createFilter(e.value.text));!a||a.length==0&&e.value.text?(d.value.items.push({value:e.value.text,cost:e.value.cost,type:e.value.type}),g.put(C,_.DB_COMMENTS,f.Objects.raw(d.value),_.DB_KEY_COMMENTS),i.value=!i.value):x.error("重复添加！")},()=>{x.error("检查输入的值是否正确")})}function I(){var t;const a=(t=d.value.items)==null?void 0:t.findIndex(u=>u.value===b.value.value);a>=0?f.Forms.formValidator(V.value,()=>{d.value.items[a]={value:e.value.text,cost:e.value.cost,type:e.value.type},g.put(C,_.DB_COMMENTS,f.Objects.raw(d.value),_.DB_KEY_COMMENTS),i.value=!i.value,e.value.value="",e.value.cost=100,e.value.type="支"},()=>{x.error("检查输入的值是否正确")}):x.error("更新失败")}function $(){var t;const a=(t=d.value.items)==null?void 0:t.findIndex(u=>u.value===b.value.value);a>=0?(d.value.items.splice(a,1),g.put(C,_.DB_COMMENTS,f.Objects.raw(d.value),_.DB_KEY_COMMENTS),p.value=!p.value):x.error("删除失败")}const j=(a,t)=>t.type===a;function K(a){b.value=a,p.value=!p.value}function R(a){h.value="更新",b.value=a,e.value.text=a.value,e.value.cost=a.cost,e.value.type=a.type,i.value=!i.value}function Y(){h.value="新增",e.value.text="",e.value.cost=100,e.value.type="支",i.value=!i.value}return(a,t)=>{const u=c("el-button"),M=c("el-table-column"),z=c("el-table"),E=c("el-dialog"),D=c("el-input"),k=c("el-form-item"),A=c("el-radio"),L=c("el-radio-group"),G=c("el-form");return O(),B("div",null,[Z,r("div",ee,[l(u,{plain:"",round:"",size:"small",type:"primary",onClick:Y},{icon:o(()=>[te]),_:1})]),r("div",le,[l(z,{data:n(d).items,border:"",stripe:""},{default:o(()=>[l(M,{fixed:"left",label:"备注",prop:"value",width:"95"}),l(M,{"filter-method":j,filters:[{text:"支",value:"支"},{text:"收",value:"收"}],label:"类型",prop:"type"}),l(M,{label:"金额",prop:"cost",sortable:""}),l(M,{fixed:"right",label:"操作",width:"80"},{default:o(s=>[l(u,{link:"",size:"small",type:"danger",onClick:S(H=>K(s.row),["prevent"])},{icon:o(()=>[oe]),_:2},1032,["onClick"]),l(u,{link:"",size:"small",type:"success",onClick:S(H=>R(s.row),["prevent"])},{icon:o(()=>[ae]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])]),l(E,{modelValue:n(p),"onUpdate:modelValue":t[1]||(t[1]=s=>N(p)?p.value=s:null),"append-to-body":"",title:"消息提示",width:"90%"},{footer:o(()=>[r("div",ne,[l(u,{class:"mr-4",plain:"",round:"",type:"danger",onClick:$},{icon:o(()=>[re]),_:1}),l(u,{plain:"",round:"",type:"primary",onClick:t[0]||(t[0]=s=>p.value=!1)},{icon:o(()=>[ie]),_:1})])]),default:o(()=>[r("div",null,[w(" 是否要删除 "),r("span",se,U(n(b).value),1),w(" 备注？ ")])]),_:1},8,["modelValue"]),l(E,{modelValue:n(i),"onUpdate:modelValue":t[7]||(t[7]=s=>N(i)?i.value=s:null),title:n(h)=="新增"?"新建备注":"修改备注",width:"90%"},{footer:o(()=>[r("div",ue,[l(u,{class:"mr-4",plain:"",round:"",onClick:t[5]||(t[5]=s=>i.value=!1)},{icon:o(()=>[de]),_:1}),l(u,{plain:"",round:"",type:"primary",onClick:t[6]||(t[6]=s=>n(h)=="新增"?F():I())},{icon:o(()=>[ce]),_:1})])]),default:o(()=>[l(G,{ref_key:"formInst",ref:V,model:n(e),rules:n(q),"hide-required-asterisk":"","label-position":"left","status-icon":""},{default:o(()=>[l(k,{label:"备注",prop:"text"},{default:o(()=>[l(D,{modelValue:n(e).text,"onUpdate:modelValue":t[2]||(t[2]=s=>n(e).text=s),"prefix-icon":n(P),placeholder:"请输入收支备注"},null,8,["modelValue","prefix-icon"])]),_:1}),l(k,{label:"金额",prop:"cost"},{default:o(()=>[l(D,{modelValue:n(e).cost,"onUpdate:modelValue":t[3]||(t[3]=s=>n(e).cost=s),"prefix-icon":n(Q),placeholder:"请输入收支金额"},null,8,["modelValue","prefix-icon"])]),_:1}),l(k,{label:"类型",prop:"type"},{default:o(()=>[l(L,{modelValue:n(e).type,"onUpdate:modelValue":t[4]||(t[4]=s=>n(e).type=s)},{default:o(()=>[(O(),B(W,null,X(["支","收"],s=>l(A,{value:s},{default:o(()=>[w(U(s),1)]),_:2},1032,["value"])),64))]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue","title"])])}}});export{be as default};