(this["webpackJsonpsimple-trello"]=this["webpackJsonpsimple-trello"]||[]).push([[0],{55:function(u,t,e){},60:function(u,t,e){},79:function(u,t,e){},82:function(u,t,e){},83:function(u,t,e){},84:function(u,t,e){},85:function(u,t,e){},86:function(u,t,e){},87:function(u,t,e){},88:function(u,t,e){},89:function(u,t,e){"use strict";e.r(t);var n={};e.r(n),e.d(n,"fetchBoards",(function(){return T}));var r={};e.r(r),e.d(r,"fetchLists",(function(){return k}));var a={};e.r(a),e.d(a,"editItem",(function(){return N}));var D={};e.r(D),e.d(D,"deleteItem",(function(){return R}));var c={};e.r(c),e.d(c,"addItem",(function(){return I}));var i,s=e(1),o=e.n(s),l=e(19),C=e.n(l),d=(e(55),e(20)),F=e(18),E=e(8),A=(e(60),e(50)),b=o.a.createContext({boardID:""}),j=e(14),f=e(21),B=e(3),p=e.n(B),h=e(7),O=e(43),x={baseURL:"https://trello-back.shpp.me/lmyetolkina/api/v1",board:"board"},v=e.n(O).a.create({baseURL:x.baseURL,headers:{"Content-Type":"application/json",Authorization:"Bearer 123"}}),m="The value is empty or contains errors. Allowed characters: letters, numbers, spaces, dashes, dots, underscores.",S="Error. The item didn't add on the server. Please, check name of item",g="Add a board";!function(u){u.FETCH_BOARDS="FETCH_BOARDS",u.FETCH_BOARDS_SUCCESS="FETCH_BOARDS_SUCCESS",u.FETCH_BOARDS_ERROR="FETCH_BOARDS_ERROR"}(i||(i={}));var y,T=function(){return function(){var u=Object(h.a)(p.a.mark((function u(t){var e;return p.a.wrap((function(u){for(;;)switch(u.prev=u.next){case 0:return u.prev=0,t({type:i.FETCH_BOARDS}),u.next=4,v.get(x.board);case 4:e=u.sent,t({type:i.FETCH_BOARDS_SUCCESS,payload:e.data}),u.next=11;break;case 8:u.prev=8,u.t0=u.catch(0),t({type:i.FETCH_BOARDS_ERROR,payload:"Error. The boards data didn't load"});case 11:case"end":return u.stop()}}),u,null,[[0,8]])})));return function(t){return u.apply(this,arguments)}}()};!function(u){u.FETCH_LISTS="FETCH_LISTS",u.FETCH_LISTS_SUCCESS="FETCH_LISTS_SUCCESS",u.FETCH_LISTS_ERROR="FETCH_LISTS_ERROR"}(y||(y={}));var _,k=function(u){return function(){var t=Object(h.a)(p.a.mark((function t(e){var n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e({type:y.FETCH_LISTS}),t.next=4,v.get("".concat(x.board,"/").concat(u));case 4:n=t.sent,e({type:y.FETCH_LISTS_SUCCESS,payload:n.data}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),e({type:y.FETCH_LISTS_ERROR,payload:"Error. The lists data didn't load from server"});case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(u){return t.apply(this,arguments)}}()};!function(u){u.CHANGE_ITEM="CHANGE_ITEM",u.CHANGE_ITEM_SUCCESS="CHANGE_ITEM_SUCCESS",u.CHANGE_ITEM_ERROR="CHANGE_ITEM_ERROR"}(_||(_={}));var N=function(u,t){return function(){var e=Object(h.a)(p.a.mark((function e(n){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.put("".concat(x.board,"/").concat(t),u);case 3:n({type:_.CHANGE_ITEM_SUCCESS,payload:!0}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),n({type:_.CHANGE_ITEM_ERROR,payload:"Error. The item title didn't change"});case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(u){return e.apply(this,arguments)}}()},R=function(u){return function(){var t=Object(h.a)(p.a.mark((function t(e){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,v.delete("".concat(x.board,"/").concat(u));case 3:e({type:_.CHANGE_ITEM_SUCCESS,payload:!0}),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),e({type:_.CHANGE_ITEM_ERROR,payload:"Error. The item didn't delete on the server."});case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(u){return t.apply(this,arguments)}}()},I=function(u,t){return function(){var e=Object(h.a)(p.a.mark((function e(n){var r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.post("".concat(x.board,"/").concat(u),t);case 3:return r=e.sent,n({type:_.CHANGE_ITEM_SUCCESS,payload:!0}),e.abrupt("return",r.data.result);case 8:return e.prev=8,e.t0=e.catch(0),n({type:_.CHANGE_ITEM_ERROR,payload:S}),e.abrupt("return",S);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(u){return e.apply(this,arguments)}}()},w=Object(f.a)(Object(f.a)(Object(f.a)(Object(f.a)(Object(f.a)({},n),r),a),D),c),H=function(){var u=Object(d.b)();return Object(j.bindActionCreators)(w,u)},L=d.c,P=(e(79),e(6)),M=e(2),U=function(u){var t=u.alertState;return t.isShow?Object(M.jsx)("div",{className:t.isDanger?"alert alert-danger":"alert alert-success",role:"alert",children:t.text}):Object(M.jsx)(M.Fragment,{})},G=function(u){var t=u.alertState,e=u.inputData;return Object(M.jsxs)("div",{className:e.cln,children:[Object(M.jsx)(U,{alertState:t}),Object(M.jsx)("input",{onChange:e.changeHandler,onKeyPress:e.onKeyPress,onKeyUp:e.onKeyUp,onBlur:e.onBlur,value:e.title,type:"text",placeholder:e.ph,className:e.clni,ref:e.ref})]})};function K(u,t,e){return{isShow:u,isDanger:t,text:e}}function z(u){return null!==u.match(/^(?:[ ,-\.0-9A-Z_a-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08C7\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\u9FFC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7BF\uA7C2-\uA7CA\uA7F5-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82C[\uDC00-\uDD1E\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDEC0-\uDEEB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDD\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A])+$/)}var V,J,Y,W,Z=e(15),$=e(0),q=function(){var u=Object(E.g)(),t=H().deleteItem;return Object(M.jsx)(b.Consumer,{children:function(e){var n=e.boardID;return Object(M.jsx)($.b.Provider,{value:{className:"trash-list deleteBoard"},children:Object(M.jsx)(Z.c,{onClick:Object(h.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(n);case 2:u.push("/");case 3:case"end":return e.stop()}}),e)})))})})}})},Q=function(u){var t=u.startTitle,e=Object(s.useRef)(null),n=Object(s.useState)(t),r=Object(P.a)(n,2),a=r[0],D=r[1],c=Object(s.useState)({isShow:!1,isDanger:!1,text:""}),i=Object(P.a)(c,2),o=i[0],l=i[1],C=H(),d=C.editItem,F=C.fetchLists;return Object(M.jsx)(b.Consumer,{children:function(u){var n=u.boardID,r={title:a};function c(){z(a)?d(r,n):(l(K(!0,!0,m)),setTimeout((function(){D(t),l(K(!1,!1,""))}),3e3))}var i={title:a,ph:a,changeHandler:function(u){return D(u.target.value)},onKeyPress:function(u){"Enter"===u.key&&(c(),F(n))},onKeyUp:function(){c()},onBlur:function(){t!==a&&(c(),F(n))},cln:"input-row",clni:"h1",ref:e};return Object(M.jsxs)("div",{className:"card board-header-title mt-4 py-2",children:[Object(M.jsx)(G,{alertState:o,inputData:i}),Object(M.jsx)(q,{})]})}})},X=function(u){var t=u.startTitle;return Object(M.jsxs)("div",{className:"board-header container my-4",children:[Object(M.jsx)(F.b,{to:"/",children:"Home"}),Object(M.jsx)(Q,{startTitle:t})]})},uu=function(u){var t=u.card,e=""!==t.description?t.description:"Type your description",n=""!==t.description?"textArea":"textArea empty";return Object(M.jsxs)("div",{children:[Object(M.jsx)("label",{children:"Description"}),Object(M.jsx)("textarea",{defaultValue:e,className:n})]})},tu=e(22),eu=(e(82),e(27),function(u){var t=u.onBackDropClick,e=function(u){return tu.b.error(u,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})},n=Object(s.useState)(""),r=Object(P.a)(n,2),a=r[0],D=r[1],c=Object(s.useState)({isShow:!1,isDanger:!1,text:""}),i=Object(P.a)(c,1)[0],o=H(),l=o.addItem,C=o.fetchBoards,d=function(){var u=Object(h.a)(p.a.mark((function u(){var n,r;return p.a.wrap((function(u){for(;;)switch(u.prev=u.next){case 0:if(!z(a)){u.next=14;break}return n={title:a},u.next=4,l("",n);case 4:if("Created"!==(r=u.sent).toString()){u.next=11;break}return u.next=8,C();case 8:t("".concat("New board was created successfully!",' Your board name is "').concat(a,'"')),u.next=12;break;case 11:e(r.toString());case 12:u.next=15;break;case 14:e(m);case 15:case"end":return u.stop()}}),u)})));return function(){return u.apply(this,arguments)}}(),F={title:a,ph:"Enter board name",changeHandler:function(u){return D(u.target.value)},onKeyPress:function(u){"Enter"===u.key&&d()},onKeyUp:function(){},onBlur:function(){},cln:"fields mb-4",clni:"inputName",ref:null};return Object(M.jsxs)("div",{className:"main-container",children:[Object(M.jsx)(G,{alertState:i,inputData:F}),Object(M.jsx)("button",{className:"btn btn-success mr-2 btn-new-board",onClick:d,children:g})]})}),nu=(e(83),function(u){var t=u.onBackDropClick,e=u.children;return Object(M.jsx)("div",{className:"overlay",onClick:function(){return t("")},children:Object(M.jsx)("div",{onClick:function(u){return u.stopPropagation()},children:e})})}),ru=e(23),au=e(24),Du=au.a.div(V||(V=Object(ru.a)(["\n  background-color: #ffffff;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  position: relative;\n"]))),cu=Object(au.a)(Du)(J||(J=Object(ru.a)(["\n  border-radius: 7px;\n  box-shadow: 0 0 32px rgba(0, 0, 0, 0.5);\n  padding: 40px;\n  width: 450px;\n  font-size: 26px;\n  @media screen and (max-width: 480px) {\n    width: 100%;\n  } ;\n"]))),iu=au.a.h3(Y||(Y=Object(ru.a)(["\n  color: #25306c;\n  font-size: 35px;\n  line-height: 1em;\n  font-weight: bold;\n  margin: 5px 0 10px;\n  text-align: center;\n"]))),su=au.a.div(W||(W=Object(ru.a)(["\n  position: absolute;\n  top: 0;\n  left: 80%;\n  &:hover {\n    cursor: pointer;\n  }\n  .close-icon {\n    color: rgb(128, 127, 127);\n    height: 1rem;\n    &:hover {\n      color: #bb2a81;\n    }\n  }\n"]))),ou=function(u){var t=u.isModalVisible,e=u.onBackDropClick,n=u.isCard,r=u.card;if(!t)return null;var a=n?r.title:"Add new board",D=Object(M.jsxs)(cu,{children:[Object(M.jsx)(su,{children:Object(M.jsx)($.b.Provider,{value:{className:"close-icon"},children:Object(M.jsx)(Z.b,{onClick:function(){return e("")}})})}),Object(M.jsx)(iu,{children:a}),n?Object(M.jsx)(uu,{card:r}):Object(M.jsx)(eu,{onBackDropClick:e})]});return Object(M.jsx)(nu,{onBackDropClick:e,children:D})},lu=function(u){var t=u.id,e=H(),n=e.fetchLists,r=e.deleteItem;return Object(M.jsx)(b.Consumer,{children:function(u){var e=u.boardID;return Object(M.jsx)("div",{className:"icon__inner mr-4 my-2",children:Object(M.jsx)($.b.Provider,{value:{className:"trash-list"},children:Object(M.jsx)(Z.c,{onClick:Object(h.a)(p.a.mark((function u(){return p.a.wrap((function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,r("".concat(e,"/card/").concat(t));case 2:return u.next=4,n(e);case 4:case"end":return u.stop()}}),u)})))})})})}})},Cu=function(u){var t=u.card,e=u.listID,n=u.onCurrentCard,r=u.onCurrentCardTitle,a=u.activeCard,D=Object(s.useRef)(null),c=Object(s.useState)(t.title),i=Object(P.a)(c,2),o=i[0],l=i[1],C=Object(s.useState)(!1),d=Object(P.a)(C,2),F=d[0],E=d[1],A=H(),j=A.editItem,f=A.fetchLists,B=Object(s.useState)(!1),p=Object(P.a)(B,2),h=p[0],O=p[1],x=function(u){O((function(u){return!u})),""!==u&&console.log("sdasdasd")};return Object(M.jsx)(b.Consumer,{children:function(u){var c=u.boardID,i={list_id:e,title:o};function s(u){z(o)?(j(i,"".concat(c,"/card/").concat(t.id)),u&&f(c)):(E(!0),setTimeout((function(){l(t.title),E(!1)}),3e3))}var C={isShow:F,isDanger:!0,text:m},d={title:o,ph:t.title,changeHandler:function(u){return l(u.target.value)},onKeyPress:function(u){u.stopPropagation(),"Enter"===u.key&&s(!0)},onKeyUp:function(){s(!1)},onBlur:function(){t.title!==o&&s(!0)},cln:"card__inner",clni:"listTitle",ref:D};return h?Object(M.jsx)(ou,{isModalVisible:h,onBackDropClick:x,isCard:!0,card:t}):Object(M.jsxs)("li",{className:"card list-item",id:t.id.toString(),draggable:!0,onDragOver:function(u){return function(u){u.preventDefault()}(u)},onDragLeave:function(){console.log("e")},onDragStart:function(){return n(t.id),void r(t.title)},onDragEnter:function(u){return function(u){u.preventDefault();var t=document.getElementById(a.toString()),n=u.currentTarget,r=function(u,t){var e=t.getBoundingClientRect();return u<e.y+e.height/2?t:t.nextElementSibling}(u.clientY,n);if(!(r&&t===r.previousElementSibling||t===r))try{var D;null===(D=document.getElementById(e.toString()))||void 0===D||D.insertBefore(t,r),console.log("bbbb")}catch(i){var c;null===(c=document.getElementById(e.toString()))||void 0===c||c.append(t,r),console.log("aaaaa")}}(u)},onDoubleClick:function(){return x("")},children:[Object(M.jsx)(lu,{id:t.id}),Object(M.jsx)(G,{alertState:C,inputData:d}),Object(M.jsx)("span",{children:t.id})]})}})},du=(e(84),e(85),function(u){var t=u.maxListPos,e=Object(s.useState)(""),n=Object(P.a)(e,2),r=n[0],a=n[1],D=Object(s.useState)(!1),c=Object(P.a)(D,2),i=c[0],o=c[1],l=function(u){return a(u.target.value)},C=H(),d=C.addItem,F=C.fetchLists;return Object(M.jsx)(b.Consumer,{children:function(u){var e=u.boardID;function n(){o(!0),setTimeout((function(){a(""),o(!1)}),3e3)}function D(){return(D=Object(h.a)(p.a.mark((function u(){var a;return p.a.wrap((function(u){for(;;)switch(u.prev=u.next){case 0:if(!z(r)){u.next=8;break}return a={title:r,position:t+1},u.next=4,d("".concat(e,"/list"),a);case 4:return u.next=6,F(e);case 6:u.next=9;break;case 8:n();case 9:case"end":return u.stop()}}),u)})))).apply(this,arguments)}var c={isShow:i,isDanger:!0,text:m};return Object(M.jsxs)("div",{className:"list-input-outside",children:[Object(M.jsx)(U,{alertState:c}),Object(M.jsxs)("div",{className:"list-input mt-2",children:[Object(M.jsx)("input",{type:"text",id:"addList",placeholder:"Enter list name",onChange:l,value:r}),Object(M.jsx)("button",{className:"btn btn-primary ml-2",onClick:function(){return D.apply(this,arguments)},children:"Add a list"})]})]})}})}),Fu=function(u){var t=u.arrLenght,e=u.maxListPos,n=u.lists;return Object(M.jsxs)("div",{className:"lists-main container",children:[Object(M.jsxs)("div",{className:"input-row mb-4",children:[Object(M.jsx)(du,{maxListPos:e}),Object(M.jsxs)("div",{className:"count-lists",children:["The lists number:"," ",t]})]}),Object(M.jsx)("div",{className:"cards",children:n})]})},Eu=function(u){var t=u.id,e=H(),n=e.fetchLists,r=e.deleteItem;return Object(M.jsx)(b.Consumer,{children:function(u){var e=u.boardID;return Object(M.jsx)("div",{className:"icon__inner",children:Object(M.jsx)($.b.Provider,{value:{className:"trash-list"},children:Object(M.jsx)(Z.c,{onClick:Object(h.a)(p.a.mark((function u(){return p.a.wrap((function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,r("".concat(e,"/list/").concat(t));case 2:return u.next=4,n(e);case 4:case"end":return u.stop()}}),u)})))})})})}})},Au=(e(86),function(u){var t=u.position,e=u.list_id,n=Object(s.useState)(""),r=Object(P.a)(n,2),a=r[0],D=r[1],c=Object(s.useState)(!1),i=Object(P.a)(c,2),o=i[0],l=i[1],C=H(),d=C.addItem,F=C.fetchLists;return Object(M.jsx)(b.Consumer,{children:function(u){var n=u.boardID;function r(){l(!0),setTimeout((function(){D(""),l(!1)}),3e3)}function c(){return(c=Object(h.a)(p.a.mark((function u(){var D;return p.a.wrap((function(u){for(;;)switch(u.prev=u.next){case 0:if(!z(a)){u.next=9;break}return D={title:a,list_id:e,position:t},console.log(D),u.next=5,d("".concat(n,"/card"),D);case 5:return u.next=7,F(n);case 7:u.next=10;break;case 9:r();case 10:case"end":return u.stop()}}),u)})))).apply(this,arguments)}var i={isShow:o,isDanger:!0,text:m};return Object(M.jsxs)("div",{className:"card-input-outside",children:[Object(M.jsx)(U,{alertState:i}),Object(M.jsxs)("div",{className:"card-input mt-2",children:[Object(M.jsx)("input",{className:"card-title",type:"text",placeholder:"Enter card title",onChange:function(u){return D(u.target.value)},value:a}),Object(M.jsx)("button",{className:"btn btn-primary ml-2",onClick:function(){return c.apply(this,arguments)},children:"Add a card"})]})]})}})}),bu=(e(87),function(u){var t=u.list,e=u.maxCardPos,n=Object(s.useState)(!1),r=Object(P.a)(n,2),a=r[0],D=r[1];return Object(M.jsxs)("div",{className:"addCardInput",children:[Object(M.jsx)("div",{className:"iconPlus__inner",children:Object(M.jsx)($.b.Provider,{value:{className:"add-card"},children:Object(M.jsx)(Z.a,{onClick:function(){D((function(u){return!u}))}})})}),a?Object(M.jsx)(Au,{position:e+1,list_id:t.id}):null]})}),ju=function(u){var t=u.startTitle,e=u.position,n=u.id,r=Object(s.useState)(t),a=Object(P.a)(r,2),D=a[0],c=a[1],i=Object(s.useState)(!1),o=Object(P.a)(i,2),l=o[0],C=o[1],d=Object(s.useRef)(null),F=H(),E=F.editItem,A=F.fetchLists;return Object(M.jsx)(b.Consumer,{children:function(u){var r=u.boardID,a={position:e,title:D};function i(u){z(D)?(E(a,"".concat(r,"/list/").concat(n)),u&&A(r)):(C(!0),setTimeout((function(){c(t),C(!1)}),3e3))}var s={isShow:l,isDanger:!0,text:m},o={title:D,ph:D,changeHandler:function(u){return c(u.target.value)},onKeyPress:function(u){"Enter"===u.key&&i(!0)},onKeyUp:function(){i(!1)},onBlur:function(){t!==D&&i(!0)},cln:"listTitleMain",clni:"listTitle",ref:d};return Object(M.jsx)("div",{className:"listTitleMain",children:Object(M.jsx)(G,{alertState:s,inputData:o})})}})},fu=function(u){var t=u.list,e=u.id,n=u.cards,r=u.maxCardPos,a=u.currentCard,D=u.currentCardTitle,c=H(),i=c.deleteItem,s=c.addItem,o=c.fetchLists,l=r+1;return Object(M.jsx)(b.Consumer,{children:function(u){var c=u.boardID,C=function(){var u=Object(h.a)(p.a.mark((function u(t){var e,n;return p.a.wrap((function(u){for(;;)switch(u.prev=u.next){case 0:return t.preventDefault(),e=Number(t.currentTarget.id),u.next=4,i("".concat(c,"/card/").concat(a));case 4:return n={title:D,list_id:e,position:l},u.next=7,s("".concat(c,"/card"),n);case 7:return u.next=9,o(c);case 9:case"end":return u.stop()}}),u)})));return function(t){return u.apply(this,arguments)}}();return Object(M.jsxs)("div",{className:"card list",id:e,onDrop:function(u){return C(u)},onDragOver:function(u){return function(u){u.preventDefault()}(u)},children:[Object(M.jsx)(Eu,{id:e}),Object(M.jsxs)("p",{children:["The tasks number on the list:"," ",n.length]}),Object(M.jsx)(ju,{startTitle:t.title,position:t.position,id:e}),Object(M.jsx)("span",{children:e}),Object(M.jsx)("ul",{className:"list-items",children:n}),Object(M.jsx)(bu,{list:t,maxCardPos:r})]})}})},Bu=function(u){var t=u.getLists,e=Object(s.useState)(0),n=Object(P.a)(e,2),r=n[0],a=n[1],D=function(u){a(u)},c=Object(s.useState)(""),i=Object(P.a)(c,2),o=i[0],l=i[1],C=function(u){l(u)},d=Object.keys(t.lists).sort((function(u,e){return t.lists[Number(u)].position>t.lists[Number(e)].position?1:-1})),F=0,E=0,A=d.length,b=0!==A?d.map((function(u,e){var n=t.lists[Number(u)];e===A-1&&(E=n.position),F=0;var a=Object.keys(n.cards).sort((function(u,t){return n.cards[Number(u)].position>n.cards[Number(t)].position?1:-1})).map((function(t){var e=n.cards[Number(t)];return F=F<e.position?e.position:F,Object(M.jsx)(Cu,{card:e,listID:Number(u),onCurrentCard:D,onCurrentCardTitle:C,activeCard:r},e.id)}));return Object(M.jsx)(fu,{list:n,id:u,cards:a,maxCardPos:F,currentCard:r.toString(),currentCardTitle:o},u)})):Object(M.jsx)("h2",{children:"Any list yet. Create your first list!"});return Object(M.jsx)(Fu,{arrLenght:A,maxListPos:E,lists:b})},pu=function(u){var t=u.match.params.id,e=L((function(u){return u.lists})),n=e.getLists,r=e.error,a=e.loading,D=H().fetchLists;if(Object(s.useEffect)((function(){var u=new AbortController;return D(t),function(){u.abort()}}),[]),a)return Object(M.jsx)(A.a,{color:"success"});if(r)return Object(M.jsx)("h2",{children:r});var c=n.title;return Object(M.jsx)(M.Fragment,{children:Object(M.jsxs)(b.Provider,{value:{boardID:t},children:[Object(M.jsx)(X,{startTitle:c}),Object(M.jsx)(Bu,{getLists:n})]})})},hu=function(){var u=Object(s.useState)(!1),t=Object(P.a)(u,2),e=t[0],n=t[1],r=function(u){n((function(u){return!u})),""!==u&&e&&function(u){tu.b.success(u,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}(u)};return Object(M.jsxs)("div",{className:"container my-4",children:[Object(M.jsx)("button",{className:"btn btn-outline-primary",onClick:function(){return r("")},children:g}),Object(M.jsx)(ou,{isModalVisible:e,onBackDropClick:r,isCard:!1,card:{id:0,position:0,title:"",description:"",users:[0]}}),Object(M.jsx)(tu.a,{})]})};function Ou(){for(var u,t,e=new Array(3),n=0;n<3;n++)e[n]=(u=100,t=255,Math.floor(Math.random()*(t-u+1))+u);var r=function(u,t){return Math.random()*(t-u)+u}(.3,.8);return"rgba(".concat(e[0],", ").concat(e[1],", ").concat(e[2],", ").concat(r,")")}e(88);var xu=function(){var u=L((function(u){return u.boards})),t=u.getBoards,e=u.error,n=u.loading,r=H().fetchBoards;return Object(s.useEffect)((function(){var u=new AbortController;return r(),function(){u.abort()}}),[]),n?Object(M.jsx)(A.a,{color:"success"}):e?Object(M.jsx)("h2",{children:e}):t.boards.length>0?Object(M.jsx)("div",{className:"boards-row",children:t.boards.map((function(u){return Object(M.jsx)(F.b,{to:"/board/".concat(u.id),className:"card card-boards",style:{background:"".concat(Ou())},children:u.title},u.id)}))}):Object(M.jsx)("div",{children:Object(M.jsx)("h2",{children:"Any board yet. Create your first board!"})})},vu=function(){return Object(M.jsxs)("section",{children:[Object(M.jsx)(hu,{}),Object(M.jsxs)("div",{className:"container",children:[Object(M.jsx)("h1",{children:"Boards"}),Object(M.jsx)("p",{children:'This is a training React-project. An analogue of the "Trello" service.'}),Object(M.jsx)(xu,{})]})]})},mu=function(){return Object(M.jsx)(F.a,{children:Object(M.jsx)("div",{className:"container",children:Object(M.jsxs)(E.d,{children:[Object(M.jsx)(E.b,{component:vu,path:"/",exact:!0}),Object(M.jsx)(E.b,{component:pu,path:"/board/:id"}),Object(M.jsx)(E.a,{exact:!0,to:"/"})]})})})},Su=e(48),gu=e(49),yu={getBoards:{boards:[]},loading:!1,error:!1},Tu={getLists:{title:"",users:[],lists:[]},loading:!1,error:null},_u={changeState:!1,error:null},ku=Object(j.combineReducers)({boards:function(){var u=arguments.length>0&&void 0!==arguments[0]?arguments[0]:yu,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i.FETCH_BOARDS:return{loading:!0,error:!1,getBoards:{boards:[]}};case i.FETCH_BOARDS_SUCCESS:return{loading:!1,error:!1,getBoards:t.payload};case i.FETCH_BOARDS_ERROR:return{loading:!1,error:t.payload,getBoards:{boards:[]}};default:return u}},lists:function(){var u=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Tu,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y.FETCH_LISTS:return{loading:!0,error:null,getLists:{title:"",users:[],lists:[]}};case y.FETCH_LISTS_SUCCESS:return{loading:!1,error:null,getLists:t.payload};case y.FETCH_LISTS_ERROR:return{loading:!1,error:t.payload,getLists:{title:"",users:[],lists:[]}};default:return u}},changeItem:function(){var u=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _.CHANGE_ITEM_SUCCESS:return{changeState:!0,error:null};case _.CHANGE_ITEM_ERROR:return{changeState:!0,error:t.payload};default:return u}}}),Nu=Object(j.createStore)(ku,Object(gu.composeWithDevTools)(Object(j.applyMiddleware)(Su.a)));C.a.render(Object(M.jsx)(d.a,{store:Nu,children:Object(M.jsx)(mu,{})}),document.getElementById("root"))}},[[89,1,2]]]);
//# sourceMappingURL=main.8fa9bec6.chunk.js.map