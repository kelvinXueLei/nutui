/*! NutUI v1.2.9 Thu Jun 28 2018 17:03:52 GMT+0800 (CST) */
webpackJsonpnutui([96],{1088:function(e,t,n){(e.exports=n(1)()).push([e.i,".nut-checkboxgroup .checkboxlist{display:inline-block;width:100px}",""])},1186:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("nut-demoheader",{attrs:{name:e.$route.name}}),e._v(" "),n("p",[e._v("默认用法")]),e._v(" "),n("nut-checkboxgroup",{attrs:{data:e.data1}}),e._v(" "),n("p",[e._v("回调事件")]),e._v(" "),n("nut-checkboxgroup",{attrs:{data:e.data2},on:{change:e.checkboxgroupChange}}),e._v(" "),n("p",[e._v("禁用选项")]),e._v(" "),n("nut-checkboxgroup",{attrs:{inline:!0,data:e.data3}})],1)},staticRenderFns:[]}},1297:function(e,t,n){var a=n(1088);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n(3)("084ad73e",a,!0,{})},822:function(e,t,n){var a=n(2)(n(920),n(1186),function(e){n(1297)},null,null);e.exports=a.exports},920:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,c=n(17);(a=c)&&a.__esModule;t.default={data:function(){return{data1:[{id:1,name:"test1",value:1},{id:2,name:"test1",value:2},{id:3,name:"test1",value:3},{id:4,name:"test1",value:4},{id:5,name:"test1",value:5}],data2:[{id:10,name:"test",value:"是",label:"是",checked:!0},{id:12,name:"test",value:"否",label:"否",checked:!1}],data3:[{id:11,name:"test2",value:"足球"},{id:22,name:"test2",value:"篮球",checked:!1},{id:33,name:"test2",value:"羽毛球",checked:!1},{id:44,name:"test2",value:"乒乓球",disabled:!0,checked:!1},{id:55,name:"test2",value:"排球",checked:!0}],demo1:"<nut-checkboxgroup :data=\"data1\"></nut-checkboxgroup>\ndata(){\n    return{\n        data1:[\n            {id:1,name:'test1',value:1},\n            {id:2,name:'test1',value:2},\n            {id:3,name:'test1',value:3},\n            {id:4,name:'test1',value:4},\n            {id:5,name:'test1',value:5}\n        ],\n    }\n},",demo2:"<nut-checkboxgroup \n:data=\"data2\" \n@change=\"test1\">\n</nut-checkboxgroup>\ndata(){\n  return{\n      data2:[\n          {id:10,name:'test',value:'是',label:'是',checked:true},\n          {id:12,name:'test',value:'否',label:'否',checked:false},\n      ],\n  }\n},\nmethods:{\n    \n    test1(item){\n        alert(item.value+'checked:'+event.target.checked);\n    },\n}",demo3:"<nut-checkboxgroup \n:data=\"data3\" \n@change=\"change\">\n</nut-checkboxgroup>\ndata(){\n    return{\n        data3:[\n            {id:11,name:'test2',value:'足球',},\n            {id:22,name:'test2',value:'篮球',checked:false},\n            {id:33,name:'test2',value:'羽毛球',checked:false},\n            {id:44,name:'test2',value:'乒乓球',disabled:true,checked:false},\n            {id:55,name:'test2',value:'排球',checked:true}\n        ],\n    }\n},\nmethods:{\n  change(item,index){\n      console.log(index,event.target.value,event.target.checked,);\n  }\n}\n\n<style>\n.nut-checkboxgroup .checkboxlist{\n    display: inline-block;\n    width: 100px;\n}\n</style>"}},components:{},methods:{checkboxgroupChange:function(e,t,n,a){alert(t.label+"： "+a.target.checked)}}}}});