(function(e){function t(t){for(var c,l,r=t[0],s=t[1],o=t[2],b=0,d=[];b<r.length;b++)l=r[b],Object.prototype.hasOwnProperty.call(a,l)&&a[l]&&d.push(a[l][0]),a[l]=0;for(c in s)Object.prototype.hasOwnProperty.call(s,c)&&(e[c]=s[c]);u&&u(t);while(d.length)d.shift()();return i.push.apply(i,o||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],c=!0,r=1;r<n.length;r++){var s=n[r];0!==a[s]&&(c=!1)}c&&(i.splice(t--,1),e=l(l.s=n[0]))}return e}var c={},a={app:0},i=[];function l(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=c,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)l.d(n,c,function(t){return e[t]}.bind(null,c));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/form-test/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],s=r.push.bind(r);r.push=t,r=r.slice();for(var o=0;o<r.length;o++)t(r[o]);var u=s;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"2a87":function(e,t,n){},"4ffd":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF0AAAAdCAYAAADIKWCvAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAaWSURBVHgB7VlPbxtFFP+tm55rPkG2NyRApPyRKg50zReocwMkGrsgFQFSnYIQUZHiqCqFSiiGcgBVIltx4Ub6BbBzQFTqAUdcONHNJ6hzgbTxzvDe7GwyWc/srh0HqJSf8jK7M7Ozs7998/Obtx40ap+uhfC8BXh0IskOlJ6k0oNUFZIrVOlRg5QrvWvNNqaPFtllR9s62aKlPiBbc9RvIR9V455VS/sgY3z/vm7z9X3nHNdGRtnzDszs6vchFRcUwQzJtCt+9TmfKu6lp15CQjyY+OtvtzE9+GQPCvrU+AEydQFZ1zFeEem/ISGtLAKyDT12V5dl0KscOLt+sQEp7gohpBSCuIzJk4eeOhYxnRPpdEwVnoiFFNQmYq4Xy8HS7Ramh6BEn/OYHuoYj3BGpMtllCecMaiMVJ080SRSNwWRzMQy4URsUlJdHA9VKcXQg3oZRD63SbH66tJ3C5gOyhBax/RwDuNjW5c+xsPAs9UGy2vV4d87XXLh5O17+h95uuftK4+WeaX0FaXvrPYnGr/cvHQHhwNLi2+c97U1Mv24jykbASaTlzXL2BESjR84rtmAfa5F127NWCrRW2kOgtZqbXfmJD/AHLmxIpvlRaofUgaR7KVvA9xFgVZJePbDb3Dvyw8mJX7O8hA97C9nE+ztX+FoEJHdxWQI866tuBp6ncXByeHuvIzjiLQlkRrJOp8Yy75kPVf6T6U6jpX0VETceaW1Oq5GprAtdfbyTUt9gKMDRyG+ww4Fr6jD2daqT5265MiznhEv7seTibwkg6XhjGoYDCnCuN9Z7GM88OoKMnVnkHjew0w9L9+njPMA05OXPPjGeC55iSzXsSS1nZ6e4l5nMZLYqZELb6koJo498uY+0RoglgGFME3ycE/GiffTkkgiGiGqdNB9+b2b43g8e1eQqWNi+0ZZ1P//AB/JvLI2y415pKfLi4hfilB5XCM9UVJDRD8/fDxs/Hrrysa9r6/cIR1v6rDSE0JLEMkMCf0pr4Lu2Xdv+CgH2wsyie5Z2ieJPP5TuEhnwrswgn4m/tFuXCNyIyaXXL7x0vs3VlXbrY9Diucv7um70nahwko6roryxNtCxQCJlrG1HO1HgQjJD6LNtguuHWBfYkxT0YyL9J+wH0Xwsdra9r9dinaFrJHEDFTsHov6XGtZtRHfgZKZvbheSQzLEf3FsxTd/5z2zUGA8RHAvvU+LCKypsMGBdd2yE5bTKUubKSHOPjwTD57/B7xngBJjdwi6Z4/8ddM58VL17oyHl4QOnqB2rHGehcrPBXtSLHd76zkTdbH+LtCc45PDLJxekhm21WmxHO+Y3D/9lXW2dMvvLPcltJT/VWaRkAF9DKRAqigXqod1aYcyhryEVjq0uSSiSpGPZtlqQc3eo72NHFlAz8zJ79cUhJiQpik85LI28YfIJ4rxJCyfRVBE5OnVCaMo8k0RYbkiCjfpKNaP1wpWpI2PV9HspxNXNZzNVFHQp7rHj7sIeEg57qq5T7ZuRU9kxWpvLThTqPaJqNARPaJ+UXSFMrDxCoZBpWjUSX/iEaQj+ZLEM6wSUTPUrdhqfORhGNpaFkW6bNMsvM8hQnBpLeRZMrywA/TQ+IV7O17Oet++FlIP5RN0nKZarpUx+LBzs6QPPyLCMWwbf0Zm4652Iit69IlFy4w8T2ycdMWT2FCsLzIgj4R9iUlDSEbMPTw9x8+D5976xP+AVUvg2R96/GufO2PH0sRzmAv7WXqbJuhFOtwb8dDPRY7UvajgvkbEeHgy2vo6xYsY2evg3G+idHdZ97udw88QemwB8bEfX2etrXNQZ5540rr2Tc/+vPp11s+jlEKecTzV5WUePaeh3AQ79dbVRxjLITIJ76hrZNpa+MYh0IIN/F51sYxSsGV2g2RH7O7sILJyOdw9YnaVR4VupjM41s4xsTgH0TW8UmIn2SVHEPj3yKepSXA6Bf+tN6MiAKjraivD/3hIIMFbWZfPj6P0XREXY+Rjp9ty9YFum92fr6+51zRlyPeAPDGqI/xEaJ8qjbdFWa31ucwuonhYybBz/SdtfS1wUeyobmbGYPnwM+ZTXCxA51x3BOwf5bzMZqUi7T1Cz/XIXmIecfgRUjz8mUxsJxnd8xMTFCyrwvpt9bsS65b+qbkbcP+Qm33HCAnNzODcoiQePzeB40xsIbil8ZjNjA6UZ68D/sDR5Zxsn25DJDkSfrGdcu6LZtvWcfoFj4y6qqOe5rX8AvlleRMIP4D5j18by9KzFsAAAAASUVORK5CYII="},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23"),a=n("4ffd"),i=n.n(a),l={class:"main-header"},r={class:"header__container"},s=Object(c["e"])("img",{src:i.a,alt:""},null,-1),o={class:"header__nav"},u=Object(c["f"])("Форма"),b=Object(c["f"])("Превью"),d=Object(c["e"])("footer",{class:"main-footer"},[Object(c["e"])("p",{class:"footer__text"},"all rights reserved")],-1);function j(e,t){var n=Object(c["v"])("router-link"),a=Object(c["v"])("router-view");return Object(c["q"])(),Object(c["d"])(c["a"],null,[Object(c["e"])("header",l,[Object(c["e"])("div",r,[Object(c["g"])(n,{to:"/",class:"header__logo"},{default:Object(c["C"])((function(){return[s]})),_:1}),Object(c["e"])("nav",o,[Object(c["g"])(n,{to:"/",class:"header__link"},{default:Object(c["C"])((function(){return[u]})),_:1}),Object(c["g"])(n,{to:"/preview",class:"header__link"},{default:Object(c["C"])((function(){return[b]})),_:1})])])]),Object(c["e"])("main",null,[Object(c["g"])(a)]),d],64)}n("60694");var O=n("6b0d"),p=n.n(O);const f={},h=p()(f,[["render",j]]);var v=h,m=n("6c02"),A=n("bee2"),y=n("d4ec"),g=(n("b0c0"),n("a434"),n("d3b7"),n("159b"),n("5502")),_={class:"home-content container"},w=Object(c["e"])("h3",{class:"parent__title title"},"Персональные данные",-1),x={class:"parent__input-block input-block"},R=Object(c["e"])("h4",{class:"input__name"},"Имя",-1),C={class:"input-block"},P=Object(c["e"])("h4",{class:"input__name"},"Возраст",-1),D={class:"child-block"},k={class:"child__header"},L=Object(c["e"])("h3",{class:"main__title title"},"Дети (макс. 5)",-1),U=Object(c["e"])("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[Object(c["e"])("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M2.13332 7.85555C1.50125 7.85555 0.988866 8.36794 0.988867 9C0.988867 9.63206 1.50126 10.1445 2.13332 10.1445L7.85544 10.1445L7.85545 15.8668C7.85545 16.4989 8.36784 17.0113 8.9999 17.0113C9.63196 17.0113 10.1444 16.4989 10.1444 15.8668L10.1443 10.1445L15.8667 10.1445C16.4988 10.1445 17.0112 9.63207 17.0112 9.00001C17.0112 8.36795 16.4988 7.85556 15.8667 7.85556L10.1443 7.85556L10.1443 2.13338C10.1443 1.50132 9.63195 0.988927 8.99989 0.988927C8.36783 0.988927 7.85544 1.50131 7.85544 2.13338L7.85544 7.85555L2.13332 7.85555Z",fill:"#01A7FD"})],-1),M=Object(c["e"])("p",null,"Добавить ребенка",-1),X=[U,M],z={class:"child__list"},H={class:"input-block child__input-block"},S=Object(c["e"])("h4",{class:"input__name"},"Имя",-1),F=["onUpdate:modelValue"],V={class:"input-block child__input-block"},I=Object(c["e"])("h4",{class:"input__name"},"Возраст",-1),J=["onUpdate:modelValue"],T=["onClick"],B={setup:function(e){var t=Object(g["b"])(),n=Object(c["s"])([]),a=Object(c["s"])({name:"",age:""}),i=Object(c["t"])(!1),l=Object(A["a"])((function e(){Object(y["a"])(this,e),this.name="",this.age=""}));function r(){n.push(new l)}function s(e){n.splice(e,1)}function o(){t.commit("addMainData",a),t.commit("addChild",n)}return Object(c["B"])(n,(function(){5===n.length?i.value=!0:i.value=!1})),Object(c["o"])((function(){a.name=t.state.mainData.name,a.age=t.state.mainData.age,t.state.childList.forEach((function(e){n.push(e)}))})),function(e,t){return Object(c["q"])(),Object(c["d"])("section",_,[w,Object(c["e"])("div",x,[R,Object(c["D"])(Object(c["e"])("input",{class:"input__area",type:"text","onUpdate:modelValue":t[0]||(t[0]=function(e){return Object(c["y"])(a).name=e})},null,512),[[c["z"],Object(c["y"])(a).name]])]),Object(c["e"])("div",C,[P,Object(c["D"])(Object(c["e"])("input",{class:"input__area",type:"text","onUpdate:modelValue":t[1]||(t[1]=function(e){return Object(c["y"])(a).age=e})},null,512),[[c["z"],Object(c["y"])(a).age]])]),Object(c["e"])("div",D,[Object(c["e"])("div",k,[L,Object(c["D"])(Object(c["e"])("button",{class:"child__add",onClick:r},X,512),[[c["A"],!i.value]])]),Object(c["e"])("ul",z,[(Object(c["q"])(!0),Object(c["d"])(c["a"],null,Object(c["u"])(Object(c["y"])(n),(function(e,t){return Object(c["q"])(),Object(c["d"])("li",{class:"child__item",key:t},[Object(c["e"])("div",H,[S,Object(c["D"])(Object(c["e"])("input",{class:"input__area",type:"text","onUpdate:modelValue":function(t){return e.name=t}},null,8,F),[[c["z"],e.name]])]),Object(c["e"])("div",V,[I,Object(c["D"])(Object(c["e"])("input",{class:"input__area",type:"text","onUpdate:modelValue":function(t){return e.age=t}},null,8,J),[[c["z"],e.age]])]),Object(c["e"])("button",{class:"child__delete",onClick:function(e){return s(t)}},"Удалить",8,T)])})),128))]),Object(c["e"])("button",{class:"save-button",onClick:o},"Сохранить")])])}}};const q=B;var E=q,Z={class:"preview-content container"},N={class:"preview__parent"},Q=Object(c["e"])("h3",{class:"parent__title title"},"Персональные данные",-1),G={class:"child"},Y=Object(c["e"])("h3",{class:"child__title title"},"Дети",-1),W={class:"preview__child-list"},K={class:"child__data data"},$={setup:function(e){var t=Object(g["b"])();return function(e,n){return Object(c["q"])(),Object(c["d"])("section",Z,[Object(c["e"])("div",N,[Q,Object(c["D"])(Object(c["e"])("p",{class:"user__data data"},Object(c["x"])(Object(c["y"])(t).state.mainData.name)+", "+Object(c["x"])(Object(c["y"])(t).state.mainData.age)+" лет ",513),[[c["A"],Object(c["y"])(t).state.mainData.name]])]),Object(c["e"])("div",G,[Y,Object(c["e"])("ul",W,[(Object(c["q"])(!0),Object(c["d"])(c["a"],null,Object(c["u"])(Object(c["y"])(t).state.childList,(function(e,t){return Object(c["D"])((Object(c["q"])(),Object(c["d"])("li",{class:"preview__child-item",key:t},[Object(c["e"])("p",K,Object(c["x"])(e.name)+", "+Object(c["x"])(e.age)+" лет",1)])),[[c["A"],e.name]])})),128))])])])}}};const ee=$;var te=ee,ne=[{path:"/",name:"home",component:E,meta:{}},{path:"/preview",name:"preview",component:te}],ce=Object(m["a"])({history:Object(m["b"])("/form-test/"),routes:ne}),ae=ce,ie=Object(g["a"])({state:{mainData:{},childList:[]},mutations:{addMainData:function(e,t){e.mainData=t},addChild:function(e,t){e.childList=t}}}),le=ie;Object(c["c"])(v).use(ae).use(le).mount("#app")},60694:function(e,t,n){"use strict";n("2a87")}});
//# sourceMappingURL=app.b2ae9673.js.map