/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(e,t){"use strict";var n=[],r=e.document,i=Object.getPrototypeOf,o=n.slice,a=n.concat,s=n.push,u=n.indexOf,l={},c=l.toString,f=l.hasOwnProperty,p=f.toString,d=p.call(Object),h={},g=function e(t){return"function"==typeof t&&"number"!=typeof t.nodeType},y=function e(t){return null!=t&&t===t.window},v={type:!0,src:!0,noModule:!0};function m(e,t,n){var i,o=(t=t||r).createElement("script");if(o.text=e,n)for(i in v)n[i]&&(o[i]=n[i]);t.head.appendChild(o).parentNode.removeChild(o)}function x(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[c.call(e)]||"object":typeof e}var b="3.3.1",w=function(e,t){return new w.fn.init(e,t)},T=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;w.fn=w.prototype={jquery:"3.3.1",constructor:w,length:0,toArray:function(){return o.call(this)},get:function(e){return null==e?o.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=w.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return w.each(this,e)},map:function(e){return this.pushStack(w.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(o.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:s,sort:n.sort,splice:n.splice},w.extend=w.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||g(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)n=a[t],a!==(r=e[t])&&(l&&r&&(w.isPlainObject(r)||(i=Array.isArray(r)))?(i?(i=!1,o=n&&Array.isArray(n)?n:[]):o=n&&w.isPlainObject(n)?n:{},a[t]=w.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},w.extend({expando:"jQuery"+("3.3.1"+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==c.call(e))&&(!(t=i(e))||"function"==typeof(n=f.call(t,"constructor")&&t.constructor)&&p.call(n)===d)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e){m(e)},each:function(e,t){var n,r=0;if(C(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+"").replace(T,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(C(Object(e))?w.merge(n,"string"==typeof e?[e]:e):s.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:u.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r,i=[],o=0,a=e.length,s=!n;o<a;o++)(r=!t(e[o],o))!==s&&i.push(e[o]);return i},map:function(e,t,n){var r,i,o=0,s=[];if(C(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&s.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&s.push(i);return a.apply([],s)},guid:1,support:h}),"function"==typeof Symbol&&(w.fn[Symbol.iterator]=n[Symbol.iterator]),w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function C(e){var t=!!e&&"length"in e&&e.length,n=x(e);return!g(e)&&!y(e)&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}var E=function(e){var t,n,r,i,o,a,s,u,l,c,f,p,d,h,g,y,v,m,x,b="sizzle"+1*new Date,w=e.document,T=0,C=0,E=ae(),k=ae(),S=ae(),D=function(e,t){return e===t&&(f=!0),0},N={}.hasOwnProperty,A=[],j=A.pop,q=A.push,L=A.push,H=A.slice,O=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},P="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",I="\\["+M+"*("+R+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+R+"))|)"+M+"*\\]",W=":("+R+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+I+")*)|.*)\\)|)",$=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),F=new RegExp("^"+M+"*,"+M+"*"),_=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),z=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),X=new RegExp(W),U=new RegExp("^"+R+"$"),V={ID:new RegExp("^#("+R+")"),CLASS:new RegExp("^\\.("+R+")"),TAG:new RegExp("^("+R+"|[*])"),ATTR:new RegExp("^"+I),PSEUDO:new RegExp("^"+W),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+P+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},G=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Q=/^[^{]+\{\s*\[native \w/,J=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,K=/[+~]/,Z=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),ee=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},te=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ne=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},re=function(){p()},ie=me(function(e){return!0===e.disabled&&("form"in e||"label"in e)},{dir:"parentNode",next:"legend"});try{L.apply(A=H.call(w.childNodes),w.childNodes),A[w.childNodes.length].nodeType}catch(e){L={apply:A.length?function(e,t){q.apply(e,H.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function oe(e,t,r,i){var o,s,l,c,f,h,v,m=t&&t.ownerDocument,T=t?t.nodeType:9;if(r=r||[],"string"!=typeof e||!e||1!==T&&9!==T&&11!==T)return r;if(!i&&((t?t.ownerDocument||t:w)!==d&&p(t),t=t||d,g)){if(11!==T&&(f=J.exec(e)))if(o=f[1]){if(9===T){if(!(l=t.getElementById(o)))return r;if(l.id===o)return r.push(l),r}else if(m&&(l=m.getElementById(o))&&x(t,l)&&l.id===o)return r.push(l),r}else{if(f[2])return L.apply(r,t.getElementsByTagName(e)),r;if((o=f[3])&&n.getElementsByClassName&&t.getElementsByClassName)return L.apply(r,t.getElementsByClassName(o)),r}if(n.qsa&&!S[e+" "]&&(!y||!y.test(e))){if(1!==T)m=t,v=e;else if("object"!==t.nodeName.toLowerCase()){(c=t.getAttribute("id"))?c=c.replace(te,ne):t.setAttribute("id",c=b),s=(h=a(e)).length;while(s--)h[s]="#"+c+" "+ve(h[s]);v=h.join(","),m=K.test(e)&&ge(t.parentNode)||t}if(v)try{return L.apply(r,m.querySelectorAll(v)),r}catch(e){}finally{c===b&&t.removeAttribute("id")}}}return u(e.replace(B,"$1"),t,r,i)}function ae(){var e=[];function t(n,i){return e.push(n+" ")>r.cacheLength&&delete t[e.shift()],t[n+" "]=i}return t}function se(e){return e[b]=!0,e}function ue(e){var t=d.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function le(e,t){var n=e.split("|"),i=n.length;while(i--)r.attrHandle[n[i]]=t}function ce(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function fe(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}function pe(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function de(e){return function(t){return"form"in t?t.parentNode&&!1===t.disabled?"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||t.isDisabled!==!e&&ie(t)===e:t.disabled===e:"label"in t&&t.disabled===e}}function he(e){return se(function(t){return t=+t,se(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}function ge(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}n=oe.support={},o=oe.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},p=oe.setDocument=function(e){var t,i,a=e?e.ownerDocument||e:w;return a!==d&&9===a.nodeType&&a.documentElement?(d=a,h=d.documentElement,g=!o(d),w!==d&&(i=d.defaultView)&&i.top!==i&&(i.addEventListener?i.addEventListener("unload",re,!1):i.attachEvent&&i.attachEvent("onunload",re)),n.attributes=ue(function(e){return e.className="i",!e.getAttribute("className")}),n.getElementsByTagName=ue(function(e){return e.appendChild(d.createComment("")),!e.getElementsByTagName("*").length}),n.getElementsByClassName=Q.test(d.getElementsByClassName),n.getById=ue(function(e){return h.appendChild(e).id=b,!d.getElementsByName||!d.getElementsByName(b).length}),n.getById?(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){return e.getAttribute("id")===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n=t.getElementById(e);return n?[n]:[]}}):(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){var n="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),r.find.TAG=n.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):n.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},r.find.CLASS=n.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&g)return t.getElementsByClassName(e)},v=[],y=[],(n.qsa=Q.test(d.querySelectorAll))&&(ue(function(e){h.appendChild(e).innerHTML="<a id='"+b+"'></a><select id='"+b+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&y.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||y.push("\\["+M+"*(?:value|"+P+")"),e.querySelectorAll("[id~="+b+"-]").length||y.push("~="),e.querySelectorAll(":checked").length||y.push(":checked"),e.querySelectorAll("a#"+b+"+*").length||y.push(".#.+[+~]")}),ue(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=d.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&y.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&y.push(":enabled",":disabled"),h.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&y.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),y.push(",.*:")})),(n.matchesSelector=Q.test(m=h.matches||h.webkitMatchesSelector||h.mozMatchesSelector||h.oMatchesSelector||h.msMatchesSelector))&&ue(function(e){n.disconnectedMatch=m.call(e,"*"),m.call(e,"[s!='']:x"),v.push("!=",W)}),y=y.length&&new RegExp(y.join("|")),v=v.length&&new RegExp(v.join("|")),t=Q.test(h.compareDocumentPosition),x=t||Q.test(h.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return f=!0,0;var r=!e.compareDocumentPosition-!t.compareDocumentPosition;return r||(1&(r=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!n.sortDetached&&t.compareDocumentPosition(e)===r?e===d||e.ownerDocument===w&&x(w,e)?-1:t===d||t.ownerDocument===w&&x(w,t)?1:c?O(c,e)-O(c,t):0:4&r?-1:1)}:function(e,t){if(e===t)return f=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e===d?-1:t===d?1:i?-1:o?1:c?O(c,e)-O(c,t):0;if(i===o)return ce(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?ce(a[r],s[r]):a[r]===w?-1:s[r]===w?1:0},d):d},oe.matches=function(e,t){return oe(e,null,null,t)},oe.matchesSelector=function(e,t){if((e.ownerDocument||e)!==d&&p(e),t=t.replace(z,"='$1']"),n.matchesSelector&&g&&!S[t+" "]&&(!v||!v.test(t))&&(!y||!y.test(t)))try{var r=m.call(e,t);if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(e){}return oe(t,d,null,[e]).length>0},oe.contains=function(e,t){return(e.ownerDocument||e)!==d&&p(e),x(e,t)},oe.attr=function(e,t){(e.ownerDocument||e)!==d&&p(e);var i=r.attrHandle[t.toLowerCase()],o=i&&N.call(r.attrHandle,t.toLowerCase())?i(e,t,!g):void 0;return void 0!==o?o:n.attributes||!g?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null},oe.escape=function(e){return(e+"").replace(te,ne)},oe.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},oe.uniqueSort=function(e){var t,r=[],i=0,o=0;if(f=!n.detectDuplicates,c=!n.sortStable&&e.slice(0),e.sort(D),f){while(t=e[o++])t===e[o]&&(i=r.push(o));while(i--)e.splice(r[i],1)}return c=null,e},i=oe.getText=function(e){var t,n="",r=0,o=e.nodeType;if(o){if(1===o||9===o||11===o){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=i(e)}else if(3===o||4===o)return e.nodeValue}else while(t=e[r++])n+=i(t);return n},(r=oe.selectors={cacheLength:50,createPseudo:se,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(Z,ee),e[3]=(e[3]||e[4]||e[5]||"").replace(Z,ee),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||oe.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&oe.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return V.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=a(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(Z,ee).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=E[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&E(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=oe.attr(r,e);return null==i?"!="===t:!t||(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i.replace($," ")+" ").indexOf(n)>-1:"|="===t&&(i===n||i.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,f,p,d,h,g=o!==a?"nextSibling":"previousSibling",y=t.parentNode,v=s&&t.nodeName.toLowerCase(),m=!u&&!s,x=!1;if(y){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===v:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?y.firstChild:y.lastChild],a&&m){x=(d=(l=(c=(f=(p=y)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1])&&l[2],p=d&&y.childNodes[d];while(p=++d&&p&&p[g]||(x=d=0)||h.pop())if(1===p.nodeType&&++x&&p===t){c[e]=[T,d,x];break}}else if(m&&(x=d=(l=(c=(f=(p=t)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1]),!1===x)while(p=++d&&p&&p[g]||(x=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===v:1===p.nodeType)&&++x&&(m&&((c=(f=p[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]=[T,x]),p===t))break;return(x-=i)===r||x%r==0&&x/r>=0}}},PSEUDO:function(e,t){var n,i=r.pseudos[e]||r.setFilters[e.toLowerCase()]||oe.error("unsupported pseudo: "+e);return i[b]?i(t):i.length>1?(n=[e,e,"",t],r.setFilters.hasOwnProperty(e.toLowerCase())?se(function(e,n){var r,o=i(e,t),a=o.length;while(a--)e[r=O(e,o[a])]=!(n[r]=o[a])}):function(e){return i(e,0,n)}):i}},pseudos:{not:se(function(e){var t=[],n=[],r=s(e.replace(B,"$1"));return r[b]?se(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),t[0]=null,!n.pop()}}),has:se(function(e){return function(t){return oe(e,t).length>0}}),contains:se(function(e){return e=e.replace(Z,ee),function(t){return(t.textContent||t.innerText||i(t)).indexOf(e)>-1}}),lang:se(function(e){return U.test(e||"")||oe.error("unsupported lang: "+e),e=e.replace(Z,ee).toLowerCase(),function(t){var n;do{if(n=g?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===h},focus:function(e){return e===d.activeElement&&(!d.hasFocus||d.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:de(!1),disabled:de(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!r.pseudos.empty(e)},header:function(e){return Y.test(e.nodeName)},input:function(e){return G.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:he(function(){return[0]}),last:he(function(e,t){return[t-1]}),eq:he(function(e,t,n){return[n<0?n+t:n]}),even:he(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:he(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:he(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:he(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=r.pseudos.eq;for(t in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})r.pseudos[t]=fe(t);for(t in{submit:!0,reset:!0})r.pseudos[t]=pe(t);function ye(){}ye.prototype=r.filters=r.pseudos,r.setFilters=new ye,a=oe.tokenize=function(e,t){var n,i,o,a,s,u,l,c=k[e+" "];if(c)return t?0:c.slice(0);s=e,u=[],l=r.preFilter;while(s){n&&!(i=F.exec(s))||(i&&(s=s.slice(i[0].length)||s),u.push(o=[])),n=!1,(i=_.exec(s))&&(n=i.shift(),o.push({value:n,type:i[0].replace(B," ")}),s=s.slice(n.length));for(a in r.filter)!(i=V[a].exec(s))||l[a]&&!(i=l[a](i))||(n=i.shift(),o.push({value:n,type:a,matches:i}),s=s.slice(n.length));if(!n)break}return t?s.length:s?oe.error(e):k(e,u).slice(0)};function ve(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function me(e,t,n){var r=t.dir,i=t.next,o=i||r,a=n&&"parentNode"===o,s=C++;return t.first?function(t,n,i){while(t=t[r])if(1===t.nodeType||a)return e(t,n,i);return!1}:function(t,n,u){var l,c,f,p=[T,s];if(u){while(t=t[r])if((1===t.nodeType||a)&&e(t,n,u))return!0}else while(t=t[r])if(1===t.nodeType||a)if(f=t[b]||(t[b]={}),c=f[t.uniqueID]||(f[t.uniqueID]={}),i&&i===t.nodeName.toLowerCase())t=t[r]||t;else{if((l=c[o])&&l[0]===T&&l[1]===s)return p[2]=l[2];if(c[o]=p,p[2]=e(t,n,u))return!0}return!1}}function xe(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function be(e,t,n){for(var r=0,i=t.length;r<i;r++)oe(e,t[r],n);return n}function we(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Te(e,t,n,r,i,o){return r&&!r[b]&&(r=Te(r)),i&&!i[b]&&(i=Te(i,o)),se(function(o,a,s,u){var l,c,f,p=[],d=[],h=a.length,g=o||be(t||"*",s.nodeType?[s]:s,[]),y=!e||!o&&t?g:we(g,p,e,s,u),v=n?i||(o?e:h||r)?[]:a:y;if(n&&n(y,v,s,u),r){l=we(v,d),r(l,[],s,u),c=l.length;while(c--)(f=l[c])&&(v[d[c]]=!(y[d[c]]=f))}if(o){if(i||e){if(i){l=[],c=v.length;while(c--)(f=v[c])&&l.push(y[c]=f);i(null,v=[],l,u)}c=v.length;while(c--)(f=v[c])&&(l=i?O(o,f):p[c])>-1&&(o[l]=!(a[l]=f))}}else v=we(v===a?v.splice(h,v.length):v),i?i(null,a,v,u):L.apply(a,v)})}function Ce(e){for(var t,n,i,o=e.length,a=r.relative[e[0].type],s=a||r.relative[" "],u=a?1:0,c=me(function(e){return e===t},s,!0),f=me(function(e){return O(t,e)>-1},s,!0),p=[function(e,n,r){var i=!a&&(r||n!==l)||((t=n).nodeType?c(e,n,r):f(e,n,r));return t=null,i}];u<o;u++)if(n=r.relative[e[u].type])p=[me(xe(p),n)];else{if((n=r.filter[e[u].type].apply(null,e[u].matches))[b]){for(i=++u;i<o;i++)if(r.relative[e[i].type])break;return Te(u>1&&xe(p),u>1&&ve(e.slice(0,u-1).concat({value:" "===e[u-2].type?"*":""})).replace(B,"$1"),n,u<i&&Ce(e.slice(u,i)),i<o&&Ce(e=e.slice(i)),i<o&&ve(e))}p.push(n)}return xe(p)}function Ee(e,t){var n=t.length>0,i=e.length>0,o=function(o,a,s,u,c){var f,h,y,v=0,m="0",x=o&&[],b=[],w=l,C=o||i&&r.find.TAG("*",c),E=T+=null==w?1:Math.random()||.1,k=C.length;for(c&&(l=a===d||a||c);m!==k&&null!=(f=C[m]);m++){if(i&&f){h=0,a||f.ownerDocument===d||(p(f),s=!g);while(y=e[h++])if(y(f,a||d,s)){u.push(f);break}c&&(T=E)}n&&((f=!y&&f)&&v--,o&&x.push(f))}if(v+=m,n&&m!==v){h=0;while(y=t[h++])y(x,b,a,s);if(o){if(v>0)while(m--)x[m]||b[m]||(b[m]=j.call(u));b=we(b)}L.apply(u,b),c&&!o&&b.length>0&&v+t.length>1&&oe.uniqueSort(u)}return c&&(T=E,l=w),x};return n?se(o):o}return s=oe.compile=function(e,t){var n,r=[],i=[],o=S[e+" "];if(!o){t||(t=a(e)),n=t.length;while(n--)(o=Ce(t[n]))[b]?r.push(o):i.push(o);(o=S(e,Ee(i,r))).selector=e}return o},u=oe.select=function(e,t,n,i){var o,u,l,c,f,p="function"==typeof e&&e,d=!i&&a(e=p.selector||e);if(n=n||[],1===d.length){if((u=d[0]=d[0].slice(0)).length>2&&"ID"===(l=u[0]).type&&9===t.nodeType&&g&&r.relative[u[1].type]){if(!(t=(r.find.ID(l.matches[0].replace(Z,ee),t)||[])[0]))return n;p&&(t=t.parentNode),e=e.slice(u.shift().value.length)}o=V.needsContext.test(e)?0:u.length;while(o--){if(l=u[o],r.relative[c=l.type])break;if((f=r.find[c])&&(i=f(l.matches[0].replace(Z,ee),K.test(u[0].type)&&ge(t.parentNode)||t))){if(u.splice(o,1),!(e=i.length&&ve(u)))return L.apply(n,i),n;break}}}return(p||s(e,d))(i,t,!g,n,!t||K.test(e)&&ge(t.parentNode)||t),n},n.sortStable=b.split("").sort(D).join("")===b,n.detectDuplicates=!!f,p(),n.sortDetached=ue(function(e){return 1&e.compareDocumentPosition(d.createElement("fieldset"))}),ue(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||le("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),n.attributes&&ue(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||le("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ue(function(e){return null==e.getAttribute("disabled")})||le(P,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),oe}(e);w.find=E,w.expr=E.selectors,w.expr[":"]=w.expr.pseudos,w.uniqueSort=w.unique=E.uniqueSort,w.text=E.getText,w.isXMLDoc=E.isXML,w.contains=E.contains,w.escapeSelector=E.escape;var k=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&w(e).is(n))break;r.push(e)}return r},S=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},D=w.expr.match.needsContext;function N(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var A=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,t,n){return g(t)?w.grep(e,function(e,r){return!!t.call(e,r,e)!==n}):t.nodeType?w.grep(e,function(e){return e===t!==n}):"string"!=typeof t?w.grep(e,function(e){return u.call(t,e)>-1!==n}):w.filter(t,e,n)}w.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?w.find.matchesSelector(r,e)?[r]:[]:w.find.matches(e,w.grep(t,function(e){return 1===e.nodeType}))},w.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(w(e).filter(function(){for(t=0;t<r;t++)if(w.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)w.find(e,i[t],n);return r>1?w.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&D.test(e)?w(e):e||[],!1).length}});var q,L=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(w.fn.init=function(e,t,n){var i,o;if(!e)return this;if(n=n||q,"string"==typeof e){if(!(i="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:L.exec(e))||!i[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(i[1]){if(t=t instanceof w?t[0]:t,w.merge(this,w.parseHTML(i[1],t&&t.nodeType?t.ownerDocument||t:r,!0)),A.test(i[1])&&w.isPlainObject(t))for(i in t)g(this[i])?this[i](t[i]):this.attr(i,t[i]);return this}return(o=r.getElementById(i[2]))&&(this[0]=o,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):g(e)?void 0!==n.ready?n.ready(e):e(w):w.makeArray(e,this)}).prototype=w.fn,q=w(r);var H=/^(?:parents|prev(?:Until|All))/,O={children:!0,contents:!0,next:!0,prev:!0};w.fn.extend({has:function(e){var t=w(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(w.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&w(e);if(!D.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?a.index(n)>-1:1===n.nodeType&&w.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(o.length>1?w.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?u.call(w(e),this[0]):u.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(w.uniqueSort(w.merge(this.get(),w(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function P(e,t){while((e=e[t])&&1!==e.nodeType);return e}w.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return k(e,"parentNode")},parentsUntil:function(e,t,n){return k(e,"parentNode",n)},next:function(e){return P(e,"nextSibling")},prev:function(e){return P(e,"previousSibling")},nextAll:function(e){return k(e,"nextSibling")},prevAll:function(e){return k(e,"previousSibling")},nextUntil:function(e,t,n){return k(e,"nextSibling",n)},prevUntil:function(e,t,n){return k(e,"previousSibling",n)},siblings:function(e){return S((e.parentNode||{}).firstChild,e)},children:function(e){return S(e.firstChild)},contents:function(e){return N(e,"iframe")?e.contentDocument:(N(e,"template")&&(e=e.content||e),w.merge([],e.childNodes))}},function(e,t){w.fn[e]=function(n,r){var i=w.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=w.filter(r,i)),this.length>1&&(O[e]||w.uniqueSort(i),H.test(e)&&i.reverse()),this.pushStack(i)}});var M=/[^\x20\t\r\n\f]+/g;function R(e){var t={};return w.each(e.match(M)||[],function(e,n){t[n]=!0}),t}w.Callbacks=function(e){e="string"==typeof e?R(e):w.extend({},e);var t,n,r,i,o=[],a=[],s=-1,u=function(){for(i=i||e.once,r=t=!0;a.length;s=-1){n=a.shift();while(++s<o.length)!1===o[s].apply(n[0],n[1])&&e.stopOnFalse&&(s=o.length,n=!1)}e.memory||(n=!1),t=!1,i&&(o=n?[]:"")},l={add:function(){return o&&(n&&!t&&(s=o.length-1,a.push(n)),function t(n){w.each(n,function(n,r){g(r)?e.unique&&l.has(r)||o.push(r):r&&r.length&&"string"!==x(r)&&t(r)})}(arguments),n&&!t&&u()),this},remove:function(){return w.each(arguments,function(e,t){var n;while((n=w.inArray(t,o,n))>-1)o.splice(n,1),n<=s&&s--}),this},has:function(e){return e?w.inArray(e,o)>-1:o.length>0},empty:function(){return o&&(o=[]),this},disable:function(){return i=a=[],o=n="",this},disabled:function(){return!o},lock:function(){return i=a=[],n||t||(o=n=""),this},locked:function(){return!!i},fireWith:function(e,n){return i||(n=[e,(n=n||[]).slice?n.slice():n],a.push(n),t||u()),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!r}};return l};function I(e){return e}function W(e){throw e}function $(e,t,n,r){var i;try{e&&g(i=e.promise)?i.call(e).done(t).fail(n):e&&g(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}w.extend({Deferred:function(t){var n=[["notify","progress",w.Callbacks("memory"),w.Callbacks("memory"),2],["resolve","done",w.Callbacks("once memory"),w.Callbacks("once memory"),0,"resolved"],["reject","fail",w.Callbacks("once memory"),w.Callbacks("once memory"),1,"rejected"]],r="pending",i={state:function(){return r},always:function(){return o.done(arguments).fail(arguments),this},"catch":function(e){return i.then(null,e)},pipe:function(){var e=arguments;return w.Deferred(function(t){w.each(n,function(n,r){var i=g(e[r[4]])&&e[r[4]];o[r[1]](function(){var e=i&&i.apply(this,arguments);e&&g(e.promise)?e.promise().progress(t.notify).done(t.resolve).fail(t.reject):t[r[0]+"With"](this,i?[e]:arguments)})}),e=null}).promise()},then:function(t,r,i){var o=0;function a(t,n,r,i){return function(){var s=this,u=arguments,l=function(){var e,l;if(!(t<o)){if((e=r.apply(s,u))===n.promise())throw new TypeError("Thenable self-resolution");l=e&&("object"==typeof e||"function"==typeof e)&&e.then,g(l)?i?l.call(e,a(o,n,I,i),a(o,n,W,i)):(o++,l.call(e,a(o,n,I,i),a(o,n,W,i),a(o,n,I,n.notifyWith))):(r!==I&&(s=void 0,u=[e]),(i||n.resolveWith)(s,u))}},c=i?l:function(){try{l()}catch(e){w.Deferred.exceptionHook&&w.Deferred.exceptionHook(e,c.stackTrace),t+1>=o&&(r!==W&&(s=void 0,u=[e]),n.rejectWith(s,u))}};t?c():(w.Deferred.getStackHook&&(c.stackTrace=w.Deferred.getStackHook()),e.setTimeout(c))}}return w.Deferred(function(e){n[0][3].add(a(0,e,g(i)?i:I,e.notifyWith)),n[1][3].add(a(0,e,g(t)?t:I)),n[2][3].add(a(0,e,g(r)?r:W))}).promise()},promise:function(e){return null!=e?w.extend(e,i):i}},o={};return w.each(n,function(e,t){var a=t[2],s=t[5];i[t[1]]=a.add,s&&a.add(function(){r=s},n[3-e][2].disable,n[3-e][3].disable,n[0][2].lock,n[0][3].lock),a.add(t[3].fire),o[t[0]]=function(){return o[t[0]+"With"](this===o?void 0:this,arguments),this},o[t[0]+"With"]=a.fireWith}),i.promise(o),t&&t.call(o,o),o},when:function(e){var t=arguments.length,n=t,r=Array(n),i=o.call(arguments),a=w.Deferred(),s=function(e){return function(n){r[e]=this,i[e]=arguments.length>1?o.call(arguments):n,--t||a.resolveWith(r,i)}};if(t<=1&&($(e,a.done(s(n)).resolve,a.reject,!t),"pending"===a.state()||g(i[n]&&i[n].then)))return a.then();while(n--)$(i[n],s(n),a.reject);return a.promise()}});var B=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;w.Deferred.exceptionHook=function(t,n){e.console&&e.console.warn&&t&&B.test(t.name)&&e.console.warn("jQuery.Deferred exception: "+t.message,t.stack,n)},w.readyException=function(t){e.setTimeout(function(){throw t})};var F=w.Deferred();w.fn.ready=function(e){return F.then(e)["catch"](function(e){w.readyException(e)}),this},w.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--w.readyWait:w.isReady)||(w.isReady=!0,!0!==e&&--w.readyWait>0||F.resolveWith(r,[w]))}}),w.ready.then=F.then;function _(){r.removeEventListener("DOMContentLoaded",_),e.removeEventListener("load",_),w.ready()}"complete"===r.readyState||"loading"!==r.readyState&&!r.documentElement.doScroll?e.setTimeout(w.ready):(r.addEventListener("DOMContentLoaded",_),e.addEventListener("load",_));var z=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===x(n)){i=!0;for(s in n)z(e,t,s,n[s],!0,o,a)}else if(void 0!==r&&(i=!0,g(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(w(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},X=/^-ms-/,U=/-([a-z])/g;function V(e,t){return t.toUpperCase()}function G(e){return e.replace(X,"ms-").replace(U,V)}var Y=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function Q(){this.expando=w.expando+Q.uid++}Q.uid=1,Q.prototype={cache:function(e){var t=e[this.expando];return t||(t={},Y(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[G(t)]=n;else for(r in t)i[G(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][G(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(G):(t=G(t))in r?[t]:t.match(M)||[]).length;while(n--)delete r[t[n]]}(void 0===t||w.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!w.isEmptyObject(t)}};var J=new Q,K=new Q,Z=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,ee=/[A-Z]/g;function te(e){return"true"===e||"false"!==e&&("null"===e?null:e===+e+""?+e:Z.test(e)?JSON.parse(e):e)}function ne(e,t,n){var r;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(ee,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n=te(n)}catch(e){}K.set(e,t,n)}else n=void 0;return n}w.extend({hasData:function(e){return K.hasData(e)||J.hasData(e)},data:function(e,t,n){return K.access(e,t,n)},removeData:function(e,t){K.remove(e,t)},_data:function(e,t,n){return J.access(e,t,n)},_removeData:function(e,t){J.remove(e,t)}}),w.fn.extend({data:function(e,t){var n,r,i,o=this[0],a=o&&o.attributes;if(void 0===e){if(this.length&&(i=K.get(o),1===o.nodeType&&!J.get(o,"hasDataAttrs"))){n=a.length;while(n--)a[n]&&0===(r=a[n].name).indexOf("data-")&&(r=G(r.slice(5)),ne(o,r,i[r]));J.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof e?this.each(function(){K.set(this,e)}):z(this,function(t){var n;if(o&&void 0===t){if(void 0!==(n=K.get(o,e)))return n;if(void 0!==(n=ne(o,e)))return n}else this.each(function(){K.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){K.remove(this,e)})}}),w.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=J.get(e,t),n&&(!r||Array.isArray(n)?r=J.access(e,t,w.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=w.queue(e,t),r=n.length,i=n.shift(),o=w._queueHooks(e,t),a=function(){w.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return J.get(e,n)||J.access(e,n,{empty:w.Callbacks("once memory").add(function(){J.remove(e,[t+"queue",n])})})}}),w.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?w.queue(this[0],e):void 0===t?this:this.each(function(){var n=w.queue(this,e,t);w._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&w.dequeue(this,e)})},dequeue:function(e){return this.each(function(){w.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=w.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=J.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var re=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ie=new RegExp("^(?:([+-])=|)("+re+")([a-z%]*)$","i"),oe=["Top","Right","Bottom","Left"],ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&w.contains(e.ownerDocument,e)&&"none"===w.css(e,"display")},se=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i};function ue(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return w.css(e,t,"")},u=s(),l=n&&n[3]||(w.cssNumber[t]?"":"px"),c=(w.cssNumber[t]||"px"!==l&&+u)&&ie.exec(w.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)w.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,w.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var le={};function ce(e){var t,n=e.ownerDocument,r=e.nodeName,i=le[r];return i||(t=n.body.appendChild(n.createElement(r)),i=w.css(t,"display"),t.parentNode.removeChild(t),"none"===i&&(i="block"),le[r]=i,i)}function fe(e,t){for(var n,r,i=[],o=0,a=e.length;o<a;o++)(r=e[o]).style&&(n=r.style.display,t?("none"===n&&(i[o]=J.get(r,"display")||null,i[o]||(r.style.display="")),""===r.style.display&&ae(r)&&(i[o]=ce(r))):"none"!==n&&(i[o]="none",J.set(r,"display",n)));for(o=0;o<a;o++)null!=i[o]&&(e[o].style.display=i[o]);return e}w.fn.extend({show:function(){return fe(this,!0)},hide:function(){return fe(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?w(this).show():w(this).hide()})}});var pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,he=/^$|^module$|\/(?:java|ecma)script/i,ge={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ge.optgroup=ge.option,ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td;function ye(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&N(e,t)?w.merge([e],n):n}function ve(e,t){for(var n=0,r=e.length;n<r;n++)J.set(e[n],"globalEval",!t||J.get(t[n],"globalEval"))}var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===x(o))w.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+w.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;w.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&w.inArray(o,r)>-1)i&&i.push(o);else if(l=w.contains(o.ownerDocument,o),a=ye(f.appendChild(o),"script"),l&&ve(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}!function(){var e=r.createDocumentFragment().appendChild(r.createElement("div")),t=r.createElement("input");t.setAttribute("type","radio"),t.setAttribute("checked","checked"),t.setAttribute("name","t"),e.appendChild(t),h.checkClone=e.cloneNode(!0).cloneNode(!0).lastChild.checked,e.innerHTML="<textarea>x</textarea>",h.noCloneChecked=!!e.cloneNode(!0).lastChild.defaultValue}();var be=r.documentElement,we=/^key/,Te=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Ce=/^([^.]*)(?:\.(.+)|)/;function Ee(){return!0}function ke(){return!1}function Se(){try{return r.activeElement}catch(e){}}function De(e,t,n,r,i,o){var a,s;if("object"==typeof t){"string"!=typeof n&&(r=r||n,n=void 0);for(s in t)De(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=ke;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return w().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=w.guid++)),e.each(function(){w.event.add(this,t,i,r,n)})}w.event={global:{},add:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=J.get(e);if(y){n.handler&&(n=(o=n).handler,i=o.selector),i&&w.find.matchesSelector(be,i),n.guid||(n.guid=w.guid++),(u=y.events)||(u=y.events={}),(a=y.handle)||(a=y.handle=function(t){return"undefined"!=typeof w&&w.event.triggered!==t.type?w.event.dispatch.apply(e,arguments):void 0}),l=(t=(t||"").match(M)||[""]).length;while(l--)d=g=(s=Ce.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=w.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=w.event.special[d]||{},c=w.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&w.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(e,r,h,a)||e.addEventListener&&e.addEventListener(d,a)),f.add&&(f.add.call(e,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),w.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=J.hasData(e)&&J.get(e);if(y&&(u=y.events)){l=(t=(t||"").match(M)||[""]).length;while(l--)if(s=Ce.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){f=w.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,y.handle)||w.removeEvent(e,d,y.handle),delete u[d])}else for(d in u)w.event.remove(e,d+t[l],n,r,!0);w.isEmptyObject(u)&&J.remove(e,"handle events")}},dispatch:function(e){var t=w.event.fix(e),n,r,i,o,a,s,u=new Array(arguments.length),l=(J.get(this,"events")||{})[t.type]||[],c=w.event.special[t.type]||{};for(u[0]=t,n=1;n<arguments.length;n++)u[n]=arguments[n];if(t.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,t)){s=w.event.handlers.call(this,t,l),n=0;while((o=s[n++])&&!t.isPropagationStopped()){t.currentTarget=o.elem,r=0;while((a=o.handlers[r++])&&!t.isImmediatePropagationStopped())t.rnamespace&&!t.rnamespace.test(a.namespace)||(t.handleObj=a,t.data=a.data,void 0!==(i=((w.event.special[a.origType]||{}).handle||a.handler).apply(o.elem,u))&&!1===(t.result=i)&&(t.preventDefault(),t.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,t),t.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&e.button>=1))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?w(i,this).index(l)>-1:w.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(e,t){Object.defineProperty(w.Event.prototype,e,{enumerable:!0,configurable:!0,get:g(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[w.expando]?e:new w.Event(e)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==Se()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===Se()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&N(this,"input"))return this.click(),!1},_default:function(e){return N(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},w.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},w.Event=function(e,t){if(!(this instanceof w.Event))return new w.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ee:ke,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&w.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[w.expando]=!0},w.Event.prototype={constructor:w.Event,isDefaultPrevented:ke,isPropagationStopped:ke,isImmediatePropagationStopped:ke,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ee,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ee,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ee,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},w.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&we.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Te.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},w.event.addProp),w.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){w.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return i&&(i===r||w.contains(r,i))||(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),w.fn.extend({on:function(e,t,n,r){return De(this,e,t,n,r)},one:function(e,t,n,r){return De(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,w(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=ke),this.each(function(){w.event.remove(this,e,n,t)})}});var Ne=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Ae=/<script|<style|<link/i,je=/checked\s*(?:[^=]|=\s*.checked.)/i,qe=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Le(e,t){return N(e,"table")&&N(11!==t.nodeType?t:t.firstChild,"tr")?w(e).children("tbody")[0]||e:e}function He(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Oe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Pe(e,t){var n,r,i,o,a,s,u,l;if(1===t.nodeType){if(J.hasData(e)&&(o=J.access(e),a=J.set(t,o),l=o.events)){delete a.handle,a.events={};for(i in l)for(n=0,r=l[i].length;n<r;n++)w.event.add(t,i,l[i][n])}K.hasData(e)&&(s=K.access(e),u=w.extend({},s),K.set(t,u))}}function Me(e,t){var n=t.nodeName.toLowerCase();"input"===n&&pe.test(e.type)?t.checked=e.checked:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}function Re(e,t,n,r){t=a.apply([],t);var i,o,s,u,l,c,f=0,p=e.length,d=p-1,y=t[0],v=g(y);if(v||p>1&&"string"==typeof y&&!h.checkClone&&je.test(y))return e.each(function(i){var o=e.eq(i);v&&(t[0]=y.call(this,i,o.html())),Re(o,t,n,r)});if(p&&(i=xe(t,e[0].ownerDocument,!1,e,r),o=i.firstChild,1===i.childNodes.length&&(i=o),o||r)){for(u=(s=w.map(ye(i,"script"),He)).length;f<p;f++)l=i,f!==d&&(l=w.clone(l,!0,!0),u&&w.merge(s,ye(l,"script"))),n.call(e[f],l,f);if(u)for(c=s[s.length-1].ownerDocument,w.map(s,Oe),f=0;f<u;f++)l=s[f],he.test(l.type||"")&&!J.access(l,"globalEval")&&w.contains(c,l)&&(l.src&&"module"!==(l.type||"").toLowerCase()?w._evalUrl&&w._evalUrl(l.src):m(l.textContent.replace(qe,""),c,l))}return e}function Ie(e,t,n){for(var r,i=t?w.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||w.cleanData(ye(r)),r.parentNode&&(n&&w.contains(r.ownerDocument,r)&&ve(ye(r,"script")),r.parentNode.removeChild(r));return e}w.extend({htmlPrefilter:function(e){return e.replace(Ne,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s=e.cloneNode(!0),u=w.contains(e.ownerDocument,e);if(!(h.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||w.isXMLDoc(e)))for(a=ye(s),r=0,i=(o=ye(e)).length;r<i;r++)Me(o[r],a[r]);if(t)if(n)for(o=o||ye(e),a=a||ye(s),r=0,i=o.length;r<i;r++)Pe(o[r],a[r]);else Pe(e,s);return(a=ye(s,"script")).length>0&&ve(a,!u&&ye(e,"script")),s},cleanData:function(e){for(var t,n,r,i=w.event.special,o=0;void 0!==(n=e[o]);o++)if(Y(n)){if(t=n[J.expando]){if(t.events)for(r in t.events)i[r]?w.event.remove(n,r):w.removeEvent(n,r,t.handle);n[J.expando]=void 0}n[K.expando]&&(n[K.expando]=void 0)}}}),w.fn.extend({detach:function(e){return Ie(this,e,!0)},remove:function(e){return Ie(this,e)},text:function(e){return z(this,function(e){return void 0===e?w.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Re(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Le(this,e).appendChild(e)})},prepend:function(){return Re(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Le(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(w.cleanData(ye(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return w.clone(this,e,t)})},html:function(e){return z(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Ae.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=w.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(w.cleanData(ye(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=[];return Re(this,arguments,function(t){var n=this.parentNode;w.inArray(this,e)<0&&(w.cleanData(ye(this)),n&&n.replaceChild(t,this))},e)}}),w.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){w.fn[e]=function(e){for(var n,r=[],i=w(e),o=i.length-1,a=0;a<=o;a++)n=a===o?this:this.clone(!0),w(i[a])[t](n),s.apply(r,n.get());return this.pushStack(r)}});var We=new RegExp("^("+re+")(?!px)[a-z%]+$","i"),$e=function(t){var n=t.ownerDocument.defaultView;return n&&n.opener||(n=e),n.getComputedStyle(t)},Be=new RegExp(oe.join("|"),"i");!function(){function t(){if(c){l.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",c.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",be.appendChild(l).appendChild(c);var t=e.getComputedStyle(c);i="1%"!==t.top,u=12===n(t.marginLeft),c.style.right="60%",s=36===n(t.right),o=36===n(t.width),c.style.position="absolute",a=36===c.offsetWidth||"absolute",be.removeChild(l),c=null}}function n(e){return Math.round(parseFloat(e))}var i,o,a,s,u,l=r.createElement("div"),c=r.createElement("div");c.style&&(c.style.backgroundClip="content-box",c.cloneNode(!0).style.backgroundClip="",h.clearCloneStyle="content-box"===c.style.backgroundClip,w.extend(h,{boxSizingReliable:function(){return t(),o},pixelBoxStyles:function(){return t(),s},pixelPosition:function(){return t(),i},reliableMarginLeft:function(){return t(),u},scrollboxSize:function(){return t(),a}}))}();function Fe(e,t,n){var r,i,o,a,s=e.style;return(n=n||$e(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||w.contains(e.ownerDocument,e)||(a=w.style(e,t)),!h.pixelBoxStyles()&&We.test(a)&&Be.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function _e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}var ze=/^(none|table(?!-c[ea]).+)/,Xe=/^--/,Ue={position:"absolute",visibility:"hidden",display:"block"},Ve={letterSpacing:"0",fontWeight:"400"},Ge=["Webkit","Moz","ms"],Ye=r.createElement("div").style;function Qe(e){if(e in Ye)return e;var t=e[0].toUpperCase()+e.slice(1),n=Ge.length;while(n--)if((e=Ge[n]+t)in Ye)return e}function Je(e){var t=w.cssProps[e];return t||(t=w.cssProps[e]=Qe(e)||e),t}function Ke(e,t,n){var r=ie.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ze(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=w.css(e,n+oe[a],!0,i)),r?("content"===n&&(u-=w.css(e,"padding"+oe[a],!0,i)),"margin"!==n&&(u-=w.css(e,"border"+oe[a]+"Width",!0,i))):(u+=w.css(e,"padding"+oe[a],!0,i),"padding"!==n?u+=w.css(e,"border"+oe[a]+"Width",!0,i):s+=w.css(e,"border"+oe[a]+"Width",!0,i));return!r&&o>=0&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))),u}function et(e,t,n){var r=$e(e),i=Fe(e,t,r),o="border-box"===w.css(e,"boxSizing",!1,r),a=o;if(We.test(i)){if(!n)return i;i="auto"}return a=a&&(h.boxSizingReliable()||i===e.style[t]),("auto"===i||!parseFloat(i)&&"inline"===w.css(e,"display",!1,r))&&(i=e["offset"+t[0].toUpperCase()+t.slice(1)],a=!0),(i=parseFloat(i)||0)+Ze(e,t,n||(o?"border":"content"),a,r,i)+"px"}w.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Fe(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=G(t),u=Xe.test(t),l=e.style;if(u||(t=Je(s)),a=w.cssHooks[t]||w.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"==(o=typeof n)&&(i=ie.exec(n))&&i[1]&&(n=ue(e,t,i),o="number"),null!=n&&n===n&&("number"===o&&(n+=i&&i[3]||(w.cssNumber[s]?"":"px")),h.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=G(t);return Xe.test(t)||(t=Je(s)),(a=w.cssHooks[t]||w.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Fe(e,t,r)),"normal"===i&&t in Ve&&(i=Ve[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),w.each(["height","width"],function(e,t){w.cssHooks[t]={get:function(e,n,r){if(n)return!ze.test(w.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?et(e,t,r):se(e,Ue,function(){return et(e,t,r)})},set:function(e,n,r){var i,o=$e(e),a="border-box"===w.css(e,"boxSizing",!1,o),s=r&&Ze(e,t,r,a,o);return a&&h.scrollboxSize()===o.position&&(s-=Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-parseFloat(o[t])-Ze(e,t,"border",!1,o)-.5)),s&&(i=ie.exec(n))&&"px"!==(i[3]||"px")&&(e.style[t]=n,n=w.css(e,t)),Ke(e,n,s)}}}),w.cssHooks.marginLeft=_e(h.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Fe(e,"marginLeft"))||e.getBoundingClientRect().left-se(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),w.each({margin:"",padding:"",border:"Width"},function(e,t){w.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];r<4;r++)i[e+oe[r]+t]=o[r]||o[r-2]||o[0];return i}},"margin"!==e&&(w.cssHooks[e+t].set=Ke)}),w.fn.extend({css:function(e,t){return z(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=$e(e),i=t.length;a<i;a++)o[t[a]]=w.css(e,t[a],!1,r);return o}return void 0!==n?w.style(e,t,n):w.css(e,t)},e,t,arguments.length>1)}});function tt(e,t,n,r,i){return new tt.prototype.init(e,t,n,r,i)}w.Tween=tt,tt.prototype={constructor:tt,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||w.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(w.cssNumber[n]?"":"px")},cur:function(){var e=tt.propHooks[this.prop];return e&&e.get?e.get(this):tt.propHooks._default.get(this)},run:function(e){var t,n=tt.propHooks[this.prop];return this.options.duration?this.pos=t=w.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):tt.propHooks._default.set(this),this}},tt.prototype.init.prototype=tt.prototype,tt.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=w.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){w.fx.step[e.prop]?w.fx.step[e.prop](e):1!==e.elem.nodeType||null==e.elem.style[w.cssProps[e.prop]]&&!w.cssHooks[e.prop]?e.elem[e.prop]=e.now:w.style(e.elem,e.prop,e.now+e.unit)}}},tt.propHooks.scrollTop=tt.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},w.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},w.fx=tt.prototype.init,w.fx.step={};var nt,rt,it=/^(?:toggle|show|hide)$/,ot=/queueHooks$/;function at(){rt&&(!1===r.hidden&&e.requestAnimationFrame?e.requestAnimationFrame(at):e.setTimeout(at,w.fx.interval),w.fx.tick())}function st(){return e.setTimeout(function(){nt=void 0}),nt=Date.now()}function ut(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=oe[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function lt(e,t,n){for(var r,i=(pt.tweeners[t]||[]).concat(pt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ct(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),y=J.get(e,"fxshow");n.queue||(null==(a=w._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,w.queue(e,"fx").length||a.empty.fire()})}));for(r in t)if(i=t[r],it.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!y||void 0===y[r])continue;g=!0}d[r]=y&&y[r]||w.style(e,r)}if((u=!w.isEmptyObject(t))||!w.isEmptyObject(d)){f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=y&&y.display)&&(l=J.get(e,"display")),"none"===(c=w.css(e,"display"))&&(l?c=l:(fe([e],!0),l=e.style.display||l,c=w.css(e,"display"),fe([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===w.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1;for(r in d)u||(y?"hidden"in y&&(g=y.hidden):y=J.access(e,"fxshow",{display:l}),o&&(y.hidden=!g),g&&fe([e],!0),p.done(function(){g||fe([e]),J.remove(e,"fxshow");for(r in d)w.style(e,r,d[r])})),u=lt(g?y[r]:0,r,p),r in y||(y[r]=u.start,g&&(u.end=u.start,u.start=0))}}function ft(e,t){var n,r,i,o,a;for(n in e)if(r=G(n),i=t[r],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=w.cssHooks[r])&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}function pt(e,t,n){var r,i,o=0,a=pt.prefilters.length,s=w.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;for(var t=nt||st(),n=Math.max(0,l.startTime+l.duration-t),r=1-(n/l.duration||0),o=0,a=l.tweens.length;o<a;o++)l.tweens[o].run(r);return s.notifyWith(e,[l,r,n]),r<1&&a?n:(a||s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:w.extend({},t),opts:w.extend(!0,{specialEasing:{},easing:w.easing._default},n),originalProperties:t,originalOptions:n,startTime:nt||st(),duration:n.duration,tweens:[],createTween:function(t,n){var r=w.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;n<r;n++)l.tweens[n].run(1);return t?(s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l,t])):s.rejectWith(e,[l,t]),this}}),c=l.props;for(ft(c,l.opts.specialEasing);o<a;o++)if(r=pt.prefilters[o].call(l,e,c,l.opts))return g(r.stop)&&(w._queueHooks(l.elem,l.opts.queue).stop=r.stop.bind(r)),r;return w.map(c,lt,l),g(l.opts.start)&&l.opts.start.call(e,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),w.fx.timer(w.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l}w.Animation=w.extend(pt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return ue(n.elem,e,ie.exec(t),n),n}]},tweener:function(e,t){g(e)?(t=e,e=["*"]):e=e.match(M);for(var n,r=0,i=e.length;r<i;r++)n=e[r],pt.tweeners[n]=pt.tweeners[n]||[],pt.tweeners[n].unshift(t)},prefilters:[ct],prefilter:function(e,t){t?pt.prefilters.unshift(e):pt.prefilters.push(e)}}),w.speed=function(e,t,n){var r=e&&"object"==typeof e?w.extend({},e):{complete:n||!n&&t||g(e)&&e,duration:e,easing:n&&t||t&&!g(t)&&t};return w.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in w.fx.speeds?r.duration=w.fx.speeds[r.duration]:r.duration=w.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){g(r.old)&&r.old.call(this),r.queue&&w.dequeue(this,r.queue)},r},w.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=w.isEmptyObject(e),o=w.speed(t,n,r),a=function(){var t=pt(this,w.extend({},e),o);(i||J.get(this,"finish"))&&t.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&!1!==e&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=w.timers,a=J.get(this);if(i)a[i]&&a[i].stop&&r(a[i]);else for(i in a)a[i]&&a[i].stop&&ot.test(i)&&r(a[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));!t&&n||w.dequeue(this,e)})},finish:function(e){return!1!==e&&(e=e||"fx"),this.each(function(){var t,n=J.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=w.timers,a=r?r.length:0;for(n.finish=!0,w.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;t<a;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}}),w.each(["toggle","show","hide"],function(e,t){var n=w.fn[t];w.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ut(t,!0),e,r,i)}}),w.each({slideDown:ut("show"),slideUp:ut("hide"),slideToggle:ut("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){w.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),w.timers=[],w.fx.tick=function(){var e,t=0,n=w.timers;for(nt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||w.fx.stop(),nt=void 0},w.fx.timer=function(e){w.timers.push(e),w.fx.start()},w.fx.interval=13,w.fx.start=function(){rt||(rt=!0,at())},w.fx.stop=function(){rt=null},w.fx.speeds={slow:600,fast:200,_default:400},w.fn.delay=function(t,n){return t=w.fx?w.fx.speeds[t]||t:t,n=n||"fx",this.queue(n,function(n,r){var i=e.setTimeout(n,t);r.stop=function(){e.clearTimeout(i)}})},function(){var e=r.createElement("input"),t=r.createElement("select").appendChild(r.createElement("option"));e.type="checkbox",h.checkOn=""!==e.value,h.optSelected=t.selected,(e=r.createElement("input")).value="t",e.type="radio",h.radioValue="t"===e.value}();var dt,ht=w.expr.attrHandle;w.fn.extend({attr:function(e,t){return z(this,w.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){w.removeAttr(this,e)})}}),w.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?w.prop(e,t,n):(1===o&&w.isXMLDoc(e)||(i=w.attrHooks[t.toLowerCase()]||(w.expr.match.bool.test(t)?dt:void 0)),void 0!==n?null===n?void w.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=w.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!h.radioValue&&"radio"===t&&N(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(M);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),dt={set:function(e,t,n){return!1===t?w.removeAttr(e,n):e.setAttribute(n,n),n}},w.each(w.expr.match.bool.source.match(/\w+/g),function(e,t){var n=ht[t]||w.find.attr;ht[t]=function(e,t,r){var i,o,a=t.toLowerCase();return r||(o=ht[a],ht[a]=i,i=null!=n(e,t,r)?a:null,ht[a]=o),i}});var gt=/^(?:input|select|textarea|button)$/i,yt=/^(?:a|area)$/i;w.fn.extend({prop:function(e,t){return z(this,w.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[w.propFix[e]||e]})}}),w.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&w.isXMLDoc(e)||(t=w.propFix[t]||t,i=w.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=w.find.attr(e,"tabindex");return t?parseInt(t,10):gt.test(e.nodeName)||yt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),h.optSelected||(w.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),w.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){w.propFix[this.toLowerCase()]=this});function vt(e){return(e.match(M)||[]).join(" ")}function mt(e){return e.getAttribute&&e.getAttribute("class")||""}function xt(e){return Array.isArray(e)?e:"string"==typeof e?e.match(M)||[]:[]}w.fn.extend({addClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))return this.each(function(t){w(this).addClass(e.call(this,t,mt(this)))});if((t=xt(e)).length)while(n=this[u++])if(i=mt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=t[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},removeClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))return this.each(function(t){w(this).removeClass(e.call(this,t,mt(this)))});if(!arguments.length)return this.attr("class","");if((t=xt(e)).length)while(n=this[u++])if(i=mt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=t[a++])while(r.indexOf(" "+o+" ")>-1)r=r.replace(" "+o+" "," ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(e,t){var n=typeof e,r="string"===n||Array.isArray(e);return"boolean"==typeof t&&r?t?this.addClass(e):this.removeClass(e):g(e)?this.each(function(n){w(this).toggleClass(e.call(this,n,mt(this),t),t)}):this.each(function(){var t,i,o,a;if(r){i=0,o=w(this),a=xt(e);while(t=a[i++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else void 0!==e&&"boolean"!==n||((t=mt(this))&&J.set(this,"__className__",t),this.setAttribute&&this.setAttribute("class",t||!1===e?"":J.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&(" "+vt(mt(n))+" ").indexOf(t)>-1)return!0;return!1}});var bt=/\r/g;w.fn.extend({val:function(e){var t,n,r,i=this[0];{if(arguments.length)return r=g(e),this.each(function(n){var i;1===this.nodeType&&(null==(i=r?e.call(this,n,w(this).val()):e)?i="":"number"==typeof i?i+="":Array.isArray(i)&&(i=w.map(i,function(e){return null==e?"":e+""})),(t=w.valHooks[this.type]||w.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))});if(i)return(t=w.valHooks[i.type]||w.valHooks[i.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:"string"==typeof(n=i.value)?n.replace(bt,""):null==n?"":n}}}),w.extend({valHooks:{option:{get:function(e){var t=w.find.attr(e,"value");return null!=t?t:vt(w.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!N(n.parentNode,"optgroup"))){if(t=w(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=w.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=w.inArray(w.valHooks.option.get(r),o)>-1)&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),w.each(["radio","checkbox"],function(){w.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=w.inArray(w(e).val(),t)>-1}},h.checkOn||(w.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),h.focusin="onfocusin"in e;var wt=/^(?:focusinfocus|focusoutblur)$/,Tt=function(e){e.stopPropagation()};w.extend(w.event,{trigger:function(t,n,i,o){var a,s,u,l,c,p,d,h,v=[i||r],m=f.call(t,"type")?t.type:t,x=f.call(t,"namespace")?t.namespace.split("."):[];if(s=h=u=i=i||r,3!==i.nodeType&&8!==i.nodeType&&!wt.test(m+w.event.triggered)&&(m.indexOf(".")>-1&&(m=(x=m.split(".")).shift(),x.sort()),c=m.indexOf(":")<0&&"on"+m,t=t[w.expando]?t:new w.Event(m,"object"==typeof t&&t),t.isTrigger=o?2:3,t.namespace=x.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+x.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=i),n=null==n?[t]:w.makeArray(n,[t]),d=w.event.special[m]||{},o||!d.trigger||!1!==d.trigger.apply(i,n))){if(!o&&!d.noBubble&&!y(i)){for(l=d.delegateType||m,wt.test(l+m)||(s=s.parentNode);s;s=s.parentNode)v.push(s),u=s;u===(i.ownerDocument||r)&&v.push(u.defaultView||u.parentWindow||e)}a=0;while((s=v[a++])&&!t.isPropagationStopped())h=s,t.type=a>1?l:d.bindType||m,(p=(J.get(s,"events")||{})[t.type]&&J.get(s,"handle"))&&p.apply(s,n),(p=c&&s[c])&&p.apply&&Y(s)&&(t.result=p.apply(s,n),!1===t.result&&t.preventDefault());return t.type=m,o||t.isDefaultPrevented()||d._default&&!1!==d._default.apply(v.pop(),n)||!Y(i)||c&&g(i[m])&&!y(i)&&((u=i[c])&&(i[c]=null),w.event.triggered=m,t.isPropagationStopped()&&h.addEventListener(m,Tt),i[m](),t.isPropagationStopped()&&h.removeEventListener(m,Tt),w.event.triggered=void 0,u&&(i[c]=u)),t.result}},simulate:function(e,t,n){var r=w.extend(new w.Event,n,{type:e,isSimulated:!0});w.event.trigger(r,null,t)}}),w.fn.extend({trigger:function(e,t){return this.each(function(){w.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return w.event.trigger(e,t,n,!0)}}),h.focusin||w.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){w.event.simulate(t,e.target,w.event.fix(e))};w.event.special[t]={setup:function(){var r=this.ownerDocument||this,i=J.access(r,t);i||r.addEventListener(e,n,!0),J.access(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this,i=J.access(r,t)-1;i?J.access(r,t,i):(r.removeEventListener(e,n,!0),J.remove(r,t))}}});var Ct=e.location,Et=Date.now(),kt=/\?/;w.parseXML=function(t){var n;if(!t||"string"!=typeof t)return null;try{n=(new e.DOMParser).parseFromString(t,"text/xml")}catch(e){n=void 0}return n&&!n.getElementsByTagName("parsererror").length||w.error("Invalid XML: "+t),n};var St=/\[\]$/,Dt=/\r?\n/g,Nt=/^(?:submit|button|image|reset|file)$/i,At=/^(?:input|select|textarea|keygen)/i;function jt(e,t,n,r){var i;if(Array.isArray(t))w.each(t,function(t,i){n||St.test(e)?r(e,i):jt(e+"["+("object"==typeof i&&null!=i?t:"")+"]",i,n,r)});else if(n||"object"!==x(t))r(e,t);else for(i in t)jt(e+"["+i+"]",t[i],n,r)}w.param=function(e,t){var n,r=[],i=function(e,t){var n=g(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(Array.isArray(e)||e.jquery&&!w.isPlainObject(e))w.each(e,function(){i(this.name,this.value)});else for(n in e)jt(n,e[n],t,i);return r.join("&")},w.fn.extend({serialize:function(){return w.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=w.prop(this,"elements");return e?w.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!w(this).is(":disabled")&&At.test(this.nodeName)&&!Nt.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=w(this).val();return null==n?null:Array.isArray(n)?w.map(n,function(e){return{name:t.name,value:e.replace(Dt,"\r\n")}}):{name:t.name,value:n.replace(Dt,"\r\n")}}).get()}});var qt=/%20/g,Lt=/#.*$/,Ht=/([?&])_=[^&]*/,Ot=/^(.*?):[ \t]*([^\r\n]*)$/gm,Pt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Mt=/^(?:GET|HEAD)$/,Rt=/^\/\//,It={},Wt={},$t="*/".concat("*"),Bt=r.createElement("a");Bt.href=Ct.href;function Ft(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(M)||[];if(g(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function _t(e,t,n,r){var i={},o=e===Wt;function a(s){var u;return i[s]=!0,w.each(e[s]||[],function(e,s){var l=s(t,n,r);return"string"!=typeof l||o||i[l]?o?!(u=l):void 0:(t.dataTypes.unshift(l),a(l),!1)}),u}return a(t.dataTypes[0])||!i["*"]&&a("*")}function zt(e,t){var n,r,i=w.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&w.extend(!0,e,r),e}function Xt(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}function Ut(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}w.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ct.href,type:"GET",isLocal:Pt.test(Ct.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":$t,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":w.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?zt(zt(e,w.ajaxSettings),t):zt(w.ajaxSettings,e)},ajaxPrefilter:Ft(It),ajaxTransport:Ft(Wt),ajax:function(t,n){"object"==typeof t&&(n=t,t=void 0),n=n||{};var i,o,a,s,u,l,c,f,p,d,h=w.ajaxSetup({},n),g=h.context||h,y=h.context&&(g.nodeType||g.jquery)?w(g):w.event,v=w.Deferred(),m=w.Callbacks("once memory"),x=h.statusCode||{},b={},T={},C="canceled",E={readyState:0,getResponseHeader:function(e){var t;if(c){if(!s){s={};while(t=Ot.exec(a))s[t[1].toLowerCase()]=t[2]}t=s[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return c?a:null},setRequestHeader:function(e,t){return null==c&&(e=T[e.toLowerCase()]=T[e.toLowerCase()]||e,b[e]=t),this},overrideMimeType:function(e){return null==c&&(h.mimeType=e),this},statusCode:function(e){var t;if(e)if(c)E.always(e[E.status]);else for(t in e)x[t]=[x[t],e[t]];return this},abort:function(e){var t=e||C;return i&&i.abort(t),k(0,t),this}};if(v.promise(E),h.url=((t||h.url||Ct.href)+"").replace(Rt,Ct.protocol+"//"),h.type=n.method||n.type||h.method||h.type,h.dataTypes=(h.dataType||"*").toLowerCase().match(M)||[""],null==h.crossDomain){l=r.createElement("a");try{l.href=h.url,l.href=l.href,h.crossDomain=Bt.protocol+"//"+Bt.host!=l.protocol+"//"+l.host}catch(e){h.crossDomain=!0}}if(h.data&&h.processData&&"string"!=typeof h.data&&(h.data=w.param(h.data,h.traditional)),_t(It,h,n,E),c)return E;(f=w.event&&h.global)&&0==w.active++&&w.event.trigger("ajaxStart"),h.type=h.type.toUpperCase(),h.hasContent=!Mt.test(h.type),o=h.url.replace(Lt,""),h.hasContent?h.data&&h.processData&&0===(h.contentType||"").indexOf("application/x-www-form-urlencoded")&&(h.data=h.data.replace(qt,"+")):(d=h.url.slice(o.length),h.data&&(h.processData||"string"==typeof h.data)&&(o+=(kt.test(o)?"&":"?")+h.data,delete h.data),!1===h.cache&&(o=o.replace(Ht,"$1"),d=(kt.test(o)?"&":"?")+"_="+Et+++d),h.url=o+d),h.ifModified&&(w.lastModified[o]&&E.setRequestHeader("If-Modified-Since",w.lastModified[o]),w.etag[o]&&E.setRequestHeader("If-None-Match",w.etag[o])),(h.data&&h.hasContent&&!1!==h.contentType||n.contentType)&&E.setRequestHeader("Content-Type",h.contentType),E.setRequestHeader("Accept",h.dataTypes[0]&&h.accepts[h.dataTypes[0]]?h.accepts[h.dataTypes[0]]+("*"!==h.dataTypes[0]?", "+$t+"; q=0.01":""):h.accepts["*"]);for(p in h.headers)E.setRequestHeader(p,h.headers[p]);if(h.beforeSend&&(!1===h.beforeSend.call(g,E,h)||c))return E.abort();if(C="abort",m.add(h.complete),E.done(h.success),E.fail(h.error),i=_t(Wt,h,n,E)){if(E.readyState=1,f&&y.trigger("ajaxSend",[E,h]),c)return E;h.async&&h.timeout>0&&(u=e.setTimeout(function(){E.abort("timeout")},h.timeout));try{c=!1,i.send(b,k)}catch(e){if(c)throw e;k(-1,e)}}else k(-1,"No Transport");function k(t,n,r,s){var l,p,d,b,T,C=n;c||(c=!0,u&&e.clearTimeout(u),i=void 0,a=s||"",E.readyState=t>0?4:0,l=t>=200&&t<300||304===t,r&&(b=Xt(h,E,r)),b=Ut(h,b,E,l),l?(h.ifModified&&((T=E.getResponseHeader("Last-Modified"))&&(w.lastModified[o]=T),(T=E.getResponseHeader("etag"))&&(w.etag[o]=T)),204===t||"HEAD"===h.type?C="nocontent":304===t?C="notmodified":(C=b.state,p=b.data,l=!(d=b.error))):(d=C,!t&&C||(C="error",t<0&&(t=0))),E.status=t,E.statusText=(n||C)+"",l?v.resolveWith(g,[p,C,E]):v.rejectWith(g,[E,C,d]),E.statusCode(x),x=void 0,f&&y.trigger(l?"ajaxSuccess":"ajaxError",[E,h,l?p:d]),m.fireWith(g,[E,C]),f&&(y.trigger("ajaxComplete",[E,h]),--w.active||w.event.trigger("ajaxStop")))}return E},getJSON:function(e,t,n){return w.get(e,t,n,"json")},getScript:function(e,t){return w.get(e,void 0,t,"script")}}),w.each(["get","post"],function(e,t){w[t]=function(e,n,r,i){return g(n)&&(i=i||r,r=n,n=void 0),w.ajax(w.extend({url:e,type:t,dataType:i,data:n,success:r},w.isPlainObject(e)&&e))}}),w._evalUrl=function(e){return w.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},w.fn.extend({wrapAll:function(e){var t;return this[0]&&(g(e)&&(e=e.call(this[0])),t=w(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(e){return g(e)?this.each(function(t){w(this).wrapInner(e.call(this,t))}):this.each(function(){var t=w(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=g(e);return this.each(function(n){w(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(e){return this.parent(e).not("body").each(function(){w(this).replaceWith(this.childNodes)}),this}}),w.expr.pseudos.hidden=function(e){return!w.expr.pseudos.visible(e)},w.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},w.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch(e){}};var Vt={0:200,1223:204},Gt=w.ajaxSettings.xhr();h.cors=!!Gt&&"withCredentials"in Gt,h.ajax=Gt=!!Gt,w.ajaxTransport(function(t){var n,r;if(h.cors||Gt&&!t.crossDomain)return{send:function(i,o){var a,s=t.xhr();if(s.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(a in t.xhrFields)s[a]=t.xhrFields[a];t.mimeType&&s.overrideMimeType&&s.overrideMimeType(t.mimeType),t.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");for(a in i)s.setRequestHeader(a,i[a]);n=function(e){return function(){n&&(n=r=s.onload=s.onerror=s.onabort=s.ontimeout=s.onreadystatechange=null,"abort"===e?s.abort():"error"===e?"number"!=typeof s.status?o(0,"error"):o(s.status,s.statusText):o(Vt[s.status]||s.status,s.statusText,"text"!==(s.responseType||"text")||"string"!=typeof s.responseText?{binary:s.response}:{text:s.responseText},s.getAllResponseHeaders()))}},s.onload=n(),r=s.onerror=s.ontimeout=n("error"),void 0!==s.onabort?s.onabort=r:s.onreadystatechange=function(){4===s.readyState&&e.setTimeout(function(){n&&r()})},n=n("abort");try{s.send(t.hasContent&&t.data||null)}catch(e){if(n)throw e}},abort:function(){n&&n()}}}),w.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),w.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return w.globalEval(e),e}}}),w.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),w.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(i,o){t=w("<script>").prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&o("error"===e.type?404:200,e.type)}),r.head.appendChild(t[0])},abort:function(){n&&n()}}}});var Yt=[],Qt=/(=)\?(?=&|$)|\?\?/;w.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Yt.pop()||w.expando+"_"+Et++;return this[e]=!0,e}}),w.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,a,s=!1!==t.jsonp&&(Qt.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&Qt.test(t.data)&&"data");if(s||"jsonp"===t.dataTypes[0])return i=t.jsonpCallback=g(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,s?t[s]=t[s].replace(Qt,"$1"+i):!1!==t.jsonp&&(t.url+=(kt.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return a||w.error(i+" was not called"),a[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){a=arguments},r.always(function(){void 0===o?w(e).removeProp(i):e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,Yt.push(i)),a&&g(o)&&o(a[0]),a=o=void 0}),"script"}),h.createHTMLDocument=function(){var e=r.implementation.createHTMLDocument("").body;return e.innerHTML="<form></form><form></form>",2===e.childNodes.length}(),w.parseHTML=function(e,t,n){if("string"!=typeof e)return[];"boolean"==typeof t&&(n=t,t=!1);var i,o,a;return t||(h.createHTMLDocument?((i=(t=r.implementation.createHTMLDocument("")).createElement("base")).href=r.location.href,t.head.appendChild(i)):t=r),o=A.exec(e),a=!n&&[],o?[t.createElement(o[1])]:(o=xe([e],t,a),a&&a.length&&w(a).remove(),w.merge([],o.childNodes))},w.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return s>-1&&(r=vt(e.slice(s)),e=e.slice(0,s)),g(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),a.length>0&&w.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?w("<div>").append(w.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},w.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){w.fn[t]=function(e){return this.on(t,e)}}),w.expr.pseudos.animated=function(e){return w.grep(w.timers,function(t){return e===t.elem}).length},w.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l,c=w.css(e,"position"),f=w(e),p={};"static"===c&&(e.style.position="relative"),s=f.offset(),o=w.css(e,"top"),u=w.css(e,"left"),(l=("absolute"===c||"fixed"===c)&&(o+u).indexOf("auto")>-1)?(a=(r=f.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),g(t)&&(t=t.call(e,n,w.extend({},s))),null!=t.top&&(p.top=t.top-s.top+a),null!=t.left&&(p.left=t.left-s.left+i),"using"in t?t.using.call(e,p):f.css(p)}},w.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){w.offset.setOffset(this,e,t)});var t,n,r=this[0];if(r)return r.getClientRects().length?(t=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===w.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===w.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=w(e).offset()).top+=w.css(e,"borderTopWidth",!0),i.left+=w.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-w.css(r,"marginTop",!0),left:t.left-i.left-w.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===w.css(e,"position"))e=e.offsetParent;return e||be})}}),w.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n="pageYOffset"===t;w.fn[e]=function(r){return z(this,function(e,r,i){var o;if(y(e)?o=e:9===e.nodeType&&(o=e.defaultView),void 0===i)return o?o[t]:e[r];o?o.scrollTo(n?o.pageXOffset:i,n?i:o.pageYOffset):e[r]=i},e,r,arguments.length)}}),w.each(["top","left"],function(e,t){w.cssHooks[t]=_e(h.pixelPosition,function(e,n){if(n)return n=Fe(e,t),We.test(n)?w(e).position()[t]+"px":n})}),w.each({Height:"height",Width:"width"},function(e,t){w.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){w.fn[r]=function(i,o){var a=arguments.length&&(n||"boolean"!=typeof i),s=n||(!0===i||!0===o?"margin":"border");return z(this,function(t,n,i){var o;return y(t)?0===r.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(o=t.documentElement,Math.max(t.body["scroll"+e],o["scroll"+e],t.body["offset"+e],o["offset"+e],o["client"+e])):void 0===i?w.css(t,n,s):w.style(t,n,i,s)},t,a?i:void 0,a)}})}),w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,t){w.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),w.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),w.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),w.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),g(e))return r=o.call(arguments,2),i=function(){return e.apply(t||this,r.concat(o.call(arguments)))},i.guid=e.guid=e.guid||w.guid++,i},w.holdReady=function(e){e?w.readyWait++:w.ready(!0)},w.isArray=Array.isArray,w.parseJSON=JSON.parse,w.nodeName=N,w.isFunction=g,w.isWindow=y,w.camelCase=G,w.type=x,w.now=Date.now,w.isNumeric=function(e){var t=w.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},"function"==typeof define&&define.amd&&define("jquery",[],function(){return w});var Jt=e.jQuery,Kt=e.$;return w.noConflict=function(t){return e.$===w&&(e.$=Kt),t&&e.jQuery===w&&(e.jQuery=Jt),w},t||(e.jQuery=e.$=w),w});

;!function(i){"use strict";"function"==typeof define&&define.amd?define(["jquery"],i):"undefined"!=typeof exports?module.exports=i(require("jquery")):i(jQuery)}(function(i){"use strict";var e=window.Slick||{};(e=function(){var e=0;return function(t,o){var s,n=this;n.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:i(t),appendDots:i(t),arrows:!0,asNavFor:null,prevArrow:'<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',nextArrow:'<button class="slick-next" aria-label="Next" type="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(e,t){return i('<button type="button" />').text(t+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,focusOnChange:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},n.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,scrolling:!1,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,swiping:!1,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},i.extend(n,n.initials),n.activeBreakpoint=null,n.animType=null,n.animProp=null,n.breakpoints=[],n.breakpointSettings=[],n.cssTransitions=!1,n.focussed=!1,n.interrupted=!1,n.hidden="hidden",n.paused=!0,n.positionProp=null,n.respondTo=null,n.rowCount=1,n.shouldClick=!0,n.$slider=i(t),n.$slidesCache=null,n.transformType=null,n.transitionType=null,n.visibilityChange="visibilitychange",n.windowWidth=0,n.windowTimer=null,s=i(t).data("slick")||{},n.options=i.extend({},n.defaults,o,s),n.currentSlide=n.options.initialSlide,n.originalSettings=n.options,void 0!==document.mozHidden?(n.hidden="mozHidden",n.visibilityChange="mozvisibilitychange"):void 0!==document.webkitHidden&&(n.hidden="webkitHidden",n.visibilityChange="webkitvisibilitychange"),n.autoPlay=i.proxy(n.autoPlay,n),n.autoPlayClear=i.proxy(n.autoPlayClear,n),n.autoPlayIterator=i.proxy(n.autoPlayIterator,n),n.changeSlide=i.proxy(n.changeSlide,n),n.clickHandler=i.proxy(n.clickHandler,n),n.selectHandler=i.proxy(n.selectHandler,n),n.setPosition=i.proxy(n.setPosition,n),n.swipeHandler=i.proxy(n.swipeHandler,n),n.dragHandler=i.proxy(n.dragHandler,n),n.keyHandler=i.proxy(n.keyHandler,n),n.instanceUid=e++,n.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,n.registerBreakpoints(),n.init(!0)}}()).prototype.activateADA=function(){this.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},e.prototype.addSlide=e.prototype.slickAdd=function(e,t,o){var s=this;if("boolean"==typeof t)o=t,t=null;else if(t<0||t>=s.slideCount)return!1;s.unload(),"number"==typeof t?0===t&&0===s.$slides.length?i(e).appendTo(s.$slideTrack):o?i(e).insertBefore(s.$slides.eq(t)):i(e).insertAfter(s.$slides.eq(t)):!0===o?i(e).prependTo(s.$slideTrack):i(e).appendTo(s.$slideTrack),s.$slides=s.$slideTrack.children(this.options.slide),s.$slideTrack.children(this.options.slide).detach(),s.$slideTrack.append(s.$slides),s.$slides.each(function(e,t){i(t).attr("data-slick-index",e)}),s.$slidesCache=s.$slides,s.reinit()},e.prototype.animateHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.animate({height:e},i.options.speed)}},e.prototype.animateSlide=function(e,t){var o={},s=this;s.animateHeight(),!0===s.options.rtl&&!1===s.options.vertical&&(e=-e),!1===s.transformsEnabled?!1===s.options.vertical?s.$slideTrack.animate({left:e},s.options.speed,s.options.easing,t):s.$slideTrack.animate({top:e},s.options.speed,s.options.easing,t):!1===s.cssTransitions?(!0===s.options.rtl&&(s.currentLeft=-s.currentLeft),i({animStart:s.currentLeft}).animate({animStart:e},{duration:s.options.speed,easing:s.options.easing,step:function(i){i=Math.ceil(i),!1===s.options.vertical?(o[s.animType]="translate("+i+"px, 0px)",s.$slideTrack.css(o)):(o[s.animType]="translate(0px,"+i+"px)",s.$slideTrack.css(o))},complete:function(){t&&t.call()}})):(s.applyTransition(),e=Math.ceil(e),!1===s.options.vertical?o[s.animType]="translate3d("+e+"px, 0px, 0px)":o[s.animType]="translate3d(0px,"+e+"px, 0px)",s.$slideTrack.css(o),t&&setTimeout(function(){s.disableTransition(),t.call()},s.options.speed))},e.prototype.getNavTarget=function(){var e=this,t=e.options.asNavFor;return t&&null!==t&&(t=i(t).not(e.$slider)),t},e.prototype.asNavFor=function(e){var t=this.getNavTarget();null!==t&&"object"==typeof t&&t.each(function(){var t=i(this).slick("getSlick");t.unslicked||t.slideHandler(e,!0)})},e.prototype.applyTransition=function(i){var e=this,t={};!1===e.options.fade?t[e.transitionType]=e.transformType+" "+e.options.speed+"ms "+e.options.cssEase:t[e.transitionType]="opacity "+e.options.speed+"ms "+e.options.cssEase,!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.autoPlay=function(){var i=this;i.autoPlayClear(),i.slideCount>i.options.slidesToShow&&(i.autoPlayTimer=setInterval(i.autoPlayIterator,i.options.autoplaySpeed))},e.prototype.autoPlayClear=function(){var i=this;i.autoPlayTimer&&clearInterval(i.autoPlayTimer)},e.prototype.autoPlayIterator=function(){var i=this,e=i.currentSlide+i.options.slidesToScroll;i.paused||i.interrupted||i.focussed||(!1===i.options.infinite&&(1===i.direction&&i.currentSlide+1===i.slideCount-1?i.direction=0:0===i.direction&&(e=i.currentSlide-i.options.slidesToScroll,i.currentSlide-1==0&&(i.direction=1))),i.slideHandler(e))},e.prototype.buildArrows=function(){var e=this;!0===e.options.arrows&&(e.$prevArrow=i(e.options.prevArrow).addClass("slick-arrow"),e.$nextArrow=i(e.options.nextArrow).addClass("slick-arrow"),e.slideCount>e.options.slidesToShow?(e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.prependTo(e.options.appendArrows),e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.appendTo(e.options.appendArrows),!0!==e.options.infinite&&e.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},e.prototype.buildDots=function(){var e,t,o=this;if(!0===o.options.dots){for(o.$slider.addClass("slick-dotted"),t=i("<ul />").addClass(o.options.dotsClass),e=0;e<=o.getDotCount();e+=1)t.append(i("<li />").append(o.options.customPaging.call(this,o,e)));o.$dots=t.appendTo(o.options.appendDots),o.$dots.find("li").first().addClass("slick-active")}},e.prototype.buildOut=function(){var e=this;e.$slides=e.$slider.children(e.options.slide+":not(.slick-cloned)").addClass("slick-slide"),e.slideCount=e.$slides.length,e.$slides.each(function(e,t){i(t).attr("data-slick-index",e).data("originalStyling",i(t).attr("style")||"")}),e.$slider.addClass("slick-slider"),e.$slideTrack=0===e.slideCount?i('<div class="slick-track"/>').appendTo(e.$slider):e.$slides.wrapAll('<div class="slick-track"/>').parent(),e.$list=e.$slideTrack.wrap('<div class="slick-list"/>').parent(),e.$slideTrack.css("opacity",0),!0!==e.options.centerMode&&!0!==e.options.swipeToSlide||(e.options.slidesToScroll=1),i("img[data-lazy]",e.$slider).not("[src]").addClass("slick-loading"),e.setupInfinite(),e.buildArrows(),e.buildDots(),e.updateDots(),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),!0===e.options.draggable&&e.$list.addClass("draggable")},e.prototype.buildRows=function(){var i,e,t,o,s,n,r,l=this;if(o=document.createDocumentFragment(),n=l.$slider.children(),l.options.rows>1){for(r=l.options.slidesPerRow*l.options.rows,s=Math.ceil(n.length/r),i=0;i<s;i++){var d=document.createElement("div");for(e=0;e<l.options.rows;e++){var a=document.createElement("div");for(t=0;t<l.options.slidesPerRow;t++){var c=i*r+(e*l.options.slidesPerRow+t);n.get(c)&&a.appendChild(n.get(c))}d.appendChild(a)}o.appendChild(d)}l.$slider.empty().append(o),l.$slider.children().children().children().css({width:100/l.options.slidesPerRow+"%",display:"inline-block"})}},e.prototype.checkResponsive=function(e,t){var o,s,n,r=this,l=!1,d=r.$slider.width(),a=window.innerWidth||i(window).width();if("window"===r.respondTo?n=a:"slider"===r.respondTo?n=d:"min"===r.respondTo&&(n=Math.min(a,d)),r.options.responsive&&r.options.responsive.length&&null!==r.options.responsive){s=null;for(o in r.breakpoints)r.breakpoints.hasOwnProperty(o)&&(!1===r.originalSettings.mobileFirst?n<r.breakpoints[o]&&(s=r.breakpoints[o]):n>r.breakpoints[o]&&(s=r.breakpoints[o]));null!==s?null!==r.activeBreakpoint?(s!==r.activeBreakpoint||t)&&(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):null!==r.activeBreakpoint&&(r.activeBreakpoint=null,r.options=r.originalSettings,!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e),l=s),e||!1===l||r.$slider.trigger("breakpoint",[r,l])}},e.prototype.changeSlide=function(e,t){var o,s,n,r=this,l=i(e.currentTarget);switch(l.is("a")&&e.preventDefault(),l.is("li")||(l=l.closest("li")),n=r.slideCount%r.options.slidesToScroll!=0,o=n?0:(r.slideCount-r.currentSlide)%r.options.slidesToScroll,e.data.message){case"previous":s=0===o?r.options.slidesToScroll:r.options.slidesToShow-o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide-s,!1,t);break;case"next":s=0===o?r.options.slidesToScroll:o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide+s,!1,t);break;case"index":var d=0===e.data.index?0:e.data.index||l.index()*r.options.slidesToScroll;r.slideHandler(r.checkNavigable(d),!1,t),l.children().trigger("focus");break;default:return}},e.prototype.checkNavigable=function(i){var e,t;if(e=this.getNavigableIndexes(),t=0,i>e[e.length-1])i=e[e.length-1];else for(var o in e){if(i<e[o]){i=t;break}t=e[o]}return i},e.prototype.cleanUpEvents=function(){var e=this;e.options.dots&&null!==e.$dots&&(i("li",e.$dots).off("click.slick",e.changeSlide).off("mouseenter.slick",i.proxy(e.interrupt,e,!0)).off("mouseleave.slick",i.proxy(e.interrupt,e,!1)),!0===e.options.accessibility&&e.$dots.off("keydown.slick",e.keyHandler)),e.$slider.off("focus.slick blur.slick"),!0===e.options.arrows&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow&&e.$prevArrow.off("click.slick",e.changeSlide),e.$nextArrow&&e.$nextArrow.off("click.slick",e.changeSlide),!0===e.options.accessibility&&(e.$prevArrow&&e.$prevArrow.off("keydown.slick",e.keyHandler),e.$nextArrow&&e.$nextArrow.off("keydown.slick",e.keyHandler))),e.$list.off("touchstart.slick mousedown.slick",e.swipeHandler),e.$list.off("touchmove.slick mousemove.slick",e.swipeHandler),e.$list.off("touchend.slick mouseup.slick",e.swipeHandler),e.$list.off("touchcancel.slick mouseleave.slick",e.swipeHandler),e.$list.off("click.slick",e.clickHandler),i(document).off(e.visibilityChange,e.visibility),e.cleanUpSlideEvents(),!0===e.options.accessibility&&e.$list.off("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().off("click.slick",e.selectHandler),i(window).off("orientationchange.slick.slick-"+e.instanceUid,e.orientationChange),i(window).off("resize.slick.slick-"+e.instanceUid,e.resize),i("[draggable!=true]",e.$slideTrack).off("dragstart",e.preventDefault),i(window).off("load.slick.slick-"+e.instanceUid,e.setPosition)},e.prototype.cleanUpSlideEvents=function(){var e=this;e.$list.off("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.off("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.cleanUpRows=function(){var i,e=this;e.options.rows>1&&((i=e.$slides.children().children()).removeAttr("style"),e.$slider.empty().append(i))},e.prototype.clickHandler=function(i){!1===this.shouldClick&&(i.stopImmediatePropagation(),i.stopPropagation(),i.preventDefault())},e.prototype.destroy=function(e){var t=this;t.autoPlayClear(),t.touchObject={},t.cleanUpEvents(),i(".slick-cloned",t.$slider).detach(),t.$dots&&t.$dots.remove(),t.$prevArrow&&t.$prevArrow.length&&(t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.prevArrow)&&t.$prevArrow.remove()),t.$nextArrow&&t.$nextArrow.length&&(t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.nextArrow)&&t.$nextArrow.remove()),t.$slides&&(t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){i(this).attr("style",i(this).data("originalStyling"))}),t.$slideTrack.children(this.options.slide).detach(),t.$slideTrack.detach(),t.$list.detach(),t.$slider.append(t.$slides)),t.cleanUpRows(),t.$slider.removeClass("slick-slider"),t.$slider.removeClass("slick-initialized"),t.$slider.removeClass("slick-dotted"),t.unslicked=!0,e||t.$slider.trigger("destroy",[t])},e.prototype.disableTransition=function(i){var e=this,t={};t[e.transitionType]="",!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.fadeSlide=function(i,e){var t=this;!1===t.cssTransitions?(t.$slides.eq(i).css({zIndex:t.options.zIndex}),t.$slides.eq(i).animate({opacity:1},t.options.speed,t.options.easing,e)):(t.applyTransition(i),t.$slides.eq(i).css({opacity:1,zIndex:t.options.zIndex}),e&&setTimeout(function(){t.disableTransition(i),e.call()},t.options.speed))},e.prototype.fadeSlideOut=function(i){var e=this;!1===e.cssTransitions?e.$slides.eq(i).animate({opacity:0,zIndex:e.options.zIndex-2},e.options.speed,e.options.easing):(e.applyTransition(i),e.$slides.eq(i).css({opacity:0,zIndex:e.options.zIndex-2}))},e.prototype.filterSlides=e.prototype.slickFilter=function(i){var e=this;null!==i&&(e.$slidesCache=e.$slides,e.unload(),e.$slideTrack.children(this.options.slide).detach(),e.$slidesCache.filter(i).appendTo(e.$slideTrack),e.reinit())},e.prototype.focusHandler=function(){var e=this;e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*",function(t){t.stopImmediatePropagation();var o=i(this);setTimeout(function(){e.options.pauseOnFocus&&(e.focussed=o.is(":focus"),e.autoPlay())},0)})},e.prototype.getCurrent=e.prototype.slickCurrentSlide=function(){return this.currentSlide},e.prototype.getDotCount=function(){var i=this,e=0,t=0,o=0;if(!0===i.options.infinite)if(i.slideCount<=i.options.slidesToShow)++o;else for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else if(!0===i.options.centerMode)o=i.slideCount;else if(i.options.asNavFor)for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else o=1+Math.ceil((i.slideCount-i.options.slidesToShow)/i.options.slidesToScroll);return o-1},e.prototype.getLeft=function(i){var e,t,o,s,n=this,r=0;return n.slideOffset=0,t=n.$slides.first().outerHeight(!0),!0===n.options.infinite?(n.slideCount>n.options.slidesToShow&&(n.slideOffset=n.slideWidth*n.options.slidesToShow*-1,s=-1,!0===n.options.vertical&&!0===n.options.centerMode&&(2===n.options.slidesToShow?s=-1.5:1===n.options.slidesToShow&&(s=-2)),r=t*n.options.slidesToShow*s),n.slideCount%n.options.slidesToScroll!=0&&i+n.options.slidesToScroll>n.slideCount&&n.slideCount>n.options.slidesToShow&&(i>n.slideCount?(n.slideOffset=(n.options.slidesToShow-(i-n.slideCount))*n.slideWidth*-1,r=(n.options.slidesToShow-(i-n.slideCount))*t*-1):(n.slideOffset=n.slideCount%n.options.slidesToScroll*n.slideWidth*-1,r=n.slideCount%n.options.slidesToScroll*t*-1))):i+n.options.slidesToShow>n.slideCount&&(n.slideOffset=(i+n.options.slidesToShow-n.slideCount)*n.slideWidth,r=(i+n.options.slidesToShow-n.slideCount)*t),n.slideCount<=n.options.slidesToShow&&(n.slideOffset=0,r=0),!0===n.options.centerMode&&n.slideCount<=n.options.slidesToShow?n.slideOffset=n.slideWidth*Math.floor(n.options.slidesToShow)/2-n.slideWidth*n.slideCount/2:!0===n.options.centerMode&&!0===n.options.infinite?n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)-n.slideWidth:!0===n.options.centerMode&&(n.slideOffset=0,n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)),e=!1===n.options.vertical?i*n.slideWidth*-1+n.slideOffset:i*t*-1+r,!0===n.options.variableWidth&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,!0===n.options.centerMode&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow+1),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,e+=(n.$list.width()-o.outerWidth())/2)),e},e.prototype.getOption=e.prototype.slickGetOption=function(i){return this.options[i]},e.prototype.getNavigableIndexes=function(){var i,e=this,t=0,o=0,s=[];for(!1===e.options.infinite?i=e.slideCount:(t=-1*e.options.slidesToScroll,o=-1*e.options.slidesToScroll,i=2*e.slideCount);t<i;)s.push(t),t=o+e.options.slidesToScroll,o+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;return s},e.prototype.getSlick=function(){return this},e.prototype.getSlideCount=function(){var e,t,o=this;return t=!0===o.options.centerMode?o.slideWidth*Math.floor(o.options.slidesToShow/2):0,!0===o.options.swipeToSlide?(o.$slideTrack.find(".slick-slide").each(function(s,n){if(n.offsetLeft-t+i(n).outerWidth()/2>-1*o.swipeLeft)return e=n,!1}),Math.abs(i(e).attr("data-slick-index")-o.currentSlide)||1):o.options.slidesToScroll},e.prototype.goTo=e.prototype.slickGoTo=function(i,e){this.changeSlide({data:{message:"index",index:parseInt(i)}},e)},e.prototype.init=function(e){var t=this;i(t.$slider).hasClass("slick-initialized")||(i(t.$slider).addClass("slick-initialized"),t.buildRows(),t.buildOut(),t.setProps(),t.startLoad(),t.loadSlider(),t.initializeEvents(),t.updateArrows(),t.updateDots(),t.checkResponsive(!0),t.focusHandler()),e&&t.$slider.trigger("init",[t]),!0===t.options.accessibility&&t.initADA(),t.options.autoplay&&(t.paused=!1,t.autoPlay())},e.prototype.initADA=function(){var e=this,t=Math.ceil(e.slideCount/e.options.slidesToShow),o=e.getNavigableIndexes().filter(function(i){return i>=0&&i<e.slideCount});e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),null!==e.$dots&&(e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(t){var s=o.indexOf(t);i(this).attr({role:"tabpanel",id:"slick-slide"+e.instanceUid+t,tabindex:-1}),-1!==s&&i(this).attr({"aria-describedby":"slick-slide-control"+e.instanceUid+s})}),e.$dots.attr("role","tablist").find("li").each(function(s){var n=o[s];i(this).attr({role:"presentation"}),i(this).find("button").first().attr({role:"tab",id:"slick-slide-control"+e.instanceUid+s,"aria-controls":"slick-slide"+e.instanceUid+n,"aria-label":s+1+" of "+t,"aria-selected":null,tabindex:"-1"})}).eq(e.currentSlide).find("button").attr({"aria-selected":"true",tabindex:"0"}).end());for(var s=e.currentSlide,n=s+e.options.slidesToShow;s<n;s++)e.$slides.eq(s).attr("tabindex",0);e.activateADA()},e.prototype.initArrowEvents=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},i.changeSlide),i.$nextArrow.off("click.slick").on("click.slick",{message:"next"},i.changeSlide),!0===i.options.accessibility&&(i.$prevArrow.on("keydown.slick",i.keyHandler),i.$nextArrow.on("keydown.slick",i.keyHandler)))},e.prototype.initDotEvents=function(){var e=this;!0===e.options.dots&&(i("li",e.$dots).on("click.slick",{message:"index"},e.changeSlide),!0===e.options.accessibility&&e.$dots.on("keydown.slick",e.keyHandler)),!0===e.options.dots&&!0===e.options.pauseOnDotsHover&&i("li",e.$dots).on("mouseenter.slick",i.proxy(e.interrupt,e,!0)).on("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.initSlideEvents=function(){var e=this;e.options.pauseOnHover&&(e.$list.on("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.on("mouseleave.slick",i.proxy(e.interrupt,e,!1)))},e.prototype.initializeEvents=function(){var e=this;e.initArrowEvents(),e.initDotEvents(),e.initSlideEvents(),e.$list.on("touchstart.slick mousedown.slick",{action:"start"},e.swipeHandler),e.$list.on("touchmove.slick mousemove.slick",{action:"move"},e.swipeHandler),e.$list.on("touchend.slick mouseup.slick",{action:"end"},e.swipeHandler),e.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},e.swipeHandler),e.$list.on("click.slick",e.clickHandler),i(document).on(e.visibilityChange,i.proxy(e.visibility,e)),!0===e.options.accessibility&&e.$list.on("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),i(window).on("orientationchange.slick.slick-"+e.instanceUid,i.proxy(e.orientationChange,e)),i(window).on("resize.slick.slick-"+e.instanceUid,i.proxy(e.resize,e)),i("[draggable!=true]",e.$slideTrack).on("dragstart",e.preventDefault),i(window).on("load.slick.slick-"+e.instanceUid,e.setPosition),i(e.setPosition)},e.prototype.initUI=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.show(),i.$nextArrow.show()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.show()},e.prototype.keyHandler=function(i){var e=this;i.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===i.keyCode&&!0===e.options.accessibility?e.changeSlide({data:{message:!0===e.options.rtl?"next":"previous"}}):39===i.keyCode&&!0===e.options.accessibility&&e.changeSlide({data:{message:!0===e.options.rtl?"previous":"next"}}))},e.prototype.lazyLoad=function(){function e(e){i("img[data-lazy]",e).each(function(){var e=i(this),t=i(this).attr("data-lazy"),o=i(this).attr("data-srcset"),s=i(this).attr("data-sizes")||n.$slider.attr("data-sizes"),r=document.createElement("img");r.onload=function(){e.animate({opacity:0},100,function(){o&&(e.attr("srcset",o),s&&e.attr("sizes",s)),e.attr("src",t).animate({opacity:1},200,function(){e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")}),n.$slider.trigger("lazyLoaded",[n,e,t])})},r.onerror=function(){e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),n.$slider.trigger("lazyLoadError",[n,e,t])},r.src=t})}var t,o,s,n=this;if(!0===n.options.centerMode?!0===n.options.infinite?s=(o=n.currentSlide+(n.options.slidesToShow/2+1))+n.options.slidesToShow+2:(o=Math.max(0,n.currentSlide-(n.options.slidesToShow/2+1)),s=n.options.slidesToShow/2+1+2+n.currentSlide):(o=n.options.infinite?n.options.slidesToShow+n.currentSlide:n.currentSlide,s=Math.ceil(o+n.options.slidesToShow),!0===n.options.fade&&(o>0&&o--,s<=n.slideCount&&s++)),t=n.$slider.find(".slick-slide").slice(o,s),"anticipated"===n.options.lazyLoad)for(var r=o-1,l=s,d=n.$slider.find(".slick-slide"),a=0;a<n.options.slidesToScroll;a++)r<0&&(r=n.slideCount-1),t=(t=t.add(d.eq(r))).add(d.eq(l)),r--,l++;e(t),n.slideCount<=n.options.slidesToShow?e(n.$slider.find(".slick-slide")):n.currentSlide>=n.slideCount-n.options.slidesToShow?e(n.$slider.find(".slick-cloned").slice(0,n.options.slidesToShow)):0===n.currentSlide&&e(n.$slider.find(".slick-cloned").slice(-1*n.options.slidesToShow))},e.prototype.loadSlider=function(){var i=this;i.setPosition(),i.$slideTrack.css({opacity:1}),i.$slider.removeClass("slick-loading"),i.initUI(),"progressive"===i.options.lazyLoad&&i.progressiveLazyLoad()},e.prototype.next=e.prototype.slickNext=function(){this.changeSlide({data:{message:"next"}})},e.prototype.orientationChange=function(){var i=this;i.checkResponsive(),i.setPosition()},e.prototype.pause=e.prototype.slickPause=function(){var i=this;i.autoPlayClear(),i.paused=!0},e.prototype.play=e.prototype.slickPlay=function(){var i=this;i.autoPlay(),i.options.autoplay=!0,i.paused=!1,i.focussed=!1,i.interrupted=!1},e.prototype.postSlide=function(e){var t=this;t.unslicked||(t.$slider.trigger("afterChange",[t,e]),t.animating=!1,t.slideCount>t.options.slidesToShow&&t.setPosition(),t.swipeLeft=null,t.options.autoplay&&t.autoPlay(),!0===t.options.accessibility&&(t.initADA(),t.options.focusOnChange&&i(t.$slides.get(t.currentSlide)).attr("tabindex",0).focus()))},e.prototype.prev=e.prototype.slickPrev=function(){this.changeSlide({data:{message:"previous"}})},e.prototype.preventDefault=function(i){i.preventDefault()},e.prototype.progressiveLazyLoad=function(e){e=e||1;var t,o,s,n,r,l=this,d=i("img[data-lazy]",l.$slider);d.length?(t=d.first(),o=t.attr("data-lazy"),s=t.attr("data-srcset"),n=t.attr("data-sizes")||l.$slider.attr("data-sizes"),(r=document.createElement("img")).onload=function(){s&&(t.attr("srcset",s),n&&t.attr("sizes",n)),t.attr("src",o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),!0===l.options.adaptiveHeight&&l.setPosition(),l.$slider.trigger("lazyLoaded",[l,t,o]),l.progressiveLazyLoad()},r.onerror=function(){e<3?setTimeout(function(){l.progressiveLazyLoad(e+1)},500):(t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),l.$slider.trigger("lazyLoadError",[l,t,o]),l.progressiveLazyLoad())},r.src=o):l.$slider.trigger("allImagesLoaded",[l])},e.prototype.refresh=function(e){var t,o,s=this;o=s.slideCount-s.options.slidesToShow,!s.options.infinite&&s.currentSlide>o&&(s.currentSlide=o),s.slideCount<=s.options.slidesToShow&&(s.currentSlide=0),t=s.currentSlide,s.destroy(!0),i.extend(s,s.initials,{currentSlide:t}),s.init(),e||s.changeSlide({data:{message:"index",index:t}},!1)},e.prototype.registerBreakpoints=function(){var e,t,o,s=this,n=s.options.responsive||null;if("array"===i.type(n)&&n.length){s.respondTo=s.options.respondTo||"window";for(e in n)if(o=s.breakpoints.length-1,n.hasOwnProperty(e)){for(t=n[e].breakpoint;o>=0;)s.breakpoints[o]&&s.breakpoints[o]===t&&s.breakpoints.splice(o,1),o--;s.breakpoints.push(t),s.breakpointSettings[t]=n[e].settings}s.breakpoints.sort(function(i,e){return s.options.mobileFirst?i-e:e-i})}},e.prototype.reinit=function(){var e=this;e.$slides=e.$slideTrack.children(e.options.slide).addClass("slick-slide"),e.slideCount=e.$slides.length,e.currentSlide>=e.slideCount&&0!==e.currentSlide&&(e.currentSlide=e.currentSlide-e.options.slidesToScroll),e.slideCount<=e.options.slidesToShow&&(e.currentSlide=0),e.registerBreakpoints(),e.setProps(),e.setupInfinite(),e.buildArrows(),e.updateArrows(),e.initArrowEvents(),e.buildDots(),e.updateDots(),e.initDotEvents(),e.cleanUpSlideEvents(),e.initSlideEvents(),e.checkResponsive(!1,!0),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),e.setPosition(),e.focusHandler(),e.paused=!e.options.autoplay,e.autoPlay(),e.$slider.trigger("reInit",[e])},e.prototype.resize=function(){var e=this;i(window).width()!==e.windowWidth&&(clearTimeout(e.windowDelay),e.windowDelay=window.setTimeout(function(){e.windowWidth=i(window).width(),e.checkResponsive(),e.unslicked||e.setPosition()},50))},e.prototype.removeSlide=e.prototype.slickRemove=function(i,e,t){var o=this;if(i="boolean"==typeof i?!0===(e=i)?0:o.slideCount-1:!0===e?--i:i,o.slideCount<1||i<0||i>o.slideCount-1)return!1;o.unload(),!0===t?o.$slideTrack.children().remove():o.$slideTrack.children(this.options.slide).eq(i).remove(),o.$slides=o.$slideTrack.children(this.options.slide),o.$slideTrack.children(this.options.slide).detach(),o.$slideTrack.append(o.$slides),o.$slidesCache=o.$slides,o.reinit()},e.prototype.setCSS=function(i){var e,t,o=this,s={};!0===o.options.rtl&&(i=-i),e="left"==o.positionProp?Math.ceil(i)+"px":"0px",t="top"==o.positionProp?Math.ceil(i)+"px":"0px",s[o.positionProp]=i,!1===o.transformsEnabled?o.$slideTrack.css(s):(s={},!1===o.cssTransitions?(s[o.animType]="translate("+e+", "+t+")",o.$slideTrack.css(s)):(s[o.animType]="translate3d("+e+", "+t+", 0px)",o.$slideTrack.css(s)))},e.prototype.setDimensions=function(){var i=this;!1===i.options.vertical?!0===i.options.centerMode&&i.$list.css({padding:"0px "+i.options.centerPadding}):(i.$list.height(i.$slides.first().outerHeight(!0)*i.options.slidesToShow),!0===i.options.centerMode&&i.$list.css({padding:i.options.centerPadding+" 0px"})),i.listWidth=i.$list.width(),i.listHeight=i.$list.height(),!1===i.options.vertical&&!1===i.options.variableWidth?(i.slideWidth=Math.ceil(i.listWidth/i.options.slidesToShow),i.$slideTrack.width(Math.ceil(i.slideWidth*i.$slideTrack.children(".slick-slide").length))):!0===i.options.variableWidth?i.$slideTrack.width(5e3*i.slideCount):(i.slideWidth=Math.ceil(i.listWidth),i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0)*i.$slideTrack.children(".slick-slide").length)));var e=i.$slides.first().outerWidth(!0)-i.$slides.first().width();!1===i.options.variableWidth&&i.$slideTrack.children(".slick-slide").width(i.slideWidth-e)},e.prototype.setFade=function(){var e,t=this;t.$slides.each(function(o,s){e=t.slideWidth*o*-1,!0===t.options.rtl?i(s).css({position:"relative",right:e,top:0,zIndex:t.options.zIndex-2,opacity:0}):i(s).css({position:"relative",left:e,top:0,zIndex:t.options.zIndex-2,opacity:0})}),t.$slides.eq(t.currentSlide).css({zIndex:t.options.zIndex-1,opacity:1})},e.prototype.setHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.css("height",e)}},e.prototype.setOption=e.prototype.slickSetOption=function(){var e,t,o,s,n,r=this,l=!1;if("object"===i.type(arguments[0])?(o=arguments[0],l=arguments[1],n="multiple"):"string"===i.type(arguments[0])&&(o=arguments[0],s=arguments[1],l=arguments[2],"responsive"===arguments[0]&&"array"===i.type(arguments[1])?n="responsive":void 0!==arguments[1]&&(n="single")),"single"===n)r.options[o]=s;else if("multiple"===n)i.each(o,function(i,e){r.options[i]=e});else if("responsive"===n)for(t in s)if("array"!==i.type(r.options.responsive))r.options.responsive=[s[t]];else{for(e=r.options.responsive.length-1;e>=0;)r.options.responsive[e].breakpoint===s[t].breakpoint&&r.options.responsive.splice(e,1),e--;r.options.responsive.push(s[t])}l&&(r.unload(),r.reinit())},e.prototype.setPosition=function(){var i=this;i.setDimensions(),i.setHeight(),!1===i.options.fade?i.setCSS(i.getLeft(i.currentSlide)):i.setFade(),i.$slider.trigger("setPosition",[i])},e.prototype.setProps=function(){var i=this,e=document.body.style;i.positionProp=!0===i.options.vertical?"top":"left","top"===i.positionProp?i.$slider.addClass("slick-vertical"):i.$slider.removeClass("slick-vertical"),void 0===e.WebkitTransition&&void 0===e.MozTransition&&void 0===e.msTransition||!0===i.options.useCSS&&(i.cssTransitions=!0),i.options.fade&&("number"==typeof i.options.zIndex?i.options.zIndex<3&&(i.options.zIndex=3):i.options.zIndex=i.defaults.zIndex),void 0!==e.OTransform&&(i.animType="OTransform",i.transformType="-o-transform",i.transitionType="OTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.MozTransform&&(i.animType="MozTransform",i.transformType="-moz-transform",i.transitionType="MozTransition",void 0===e.perspectiveProperty&&void 0===e.MozPerspective&&(i.animType=!1)),void 0!==e.webkitTransform&&(i.animType="webkitTransform",i.transformType="-webkit-transform",i.transitionType="webkitTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.msTransform&&(i.animType="msTransform",i.transformType="-ms-transform",i.transitionType="msTransition",void 0===e.msTransform&&(i.animType=!1)),void 0!==e.transform&&!1!==i.animType&&(i.animType="transform",i.transformType="transform",i.transitionType="transition"),i.transformsEnabled=i.options.useTransform&&null!==i.animType&&!1!==i.animType},e.prototype.setSlideClasses=function(i){var e,t,o,s,n=this;if(t=n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),n.$slides.eq(i).addClass("slick-current"),!0===n.options.centerMode){var r=n.options.slidesToShow%2==0?1:0;e=Math.floor(n.options.slidesToShow/2),!0===n.options.infinite&&(i>=e&&i<=n.slideCount-1-e?n.$slides.slice(i-e+r,i+e+1).addClass("slick-active").attr("aria-hidden","false"):(o=n.options.slidesToShow+i,t.slice(o-e+1+r,o+e+2).addClass("slick-active").attr("aria-hidden","false")),0===i?t.eq(t.length-1-n.options.slidesToShow).addClass("slick-center"):i===n.slideCount-1&&t.eq(n.options.slidesToShow).addClass("slick-center")),n.$slides.eq(i).addClass("slick-center")}else i>=0&&i<=n.slideCount-n.options.slidesToShow?n.$slides.slice(i,i+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):t.length<=n.options.slidesToShow?t.addClass("slick-active").attr("aria-hidden","false"):(s=n.slideCount%n.options.slidesToShow,o=!0===n.options.infinite?n.options.slidesToShow+i:i,n.options.slidesToShow==n.options.slidesToScroll&&n.slideCount-i<n.options.slidesToShow?t.slice(o-(n.options.slidesToShow-s),o+s).addClass("slick-active").attr("aria-hidden","false"):t.slice(o,o+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"));"ondemand"!==n.options.lazyLoad&&"anticipated"!==n.options.lazyLoad||n.lazyLoad()},e.prototype.setupInfinite=function(){var e,t,o,s=this;if(!0===s.options.fade&&(s.options.centerMode=!1),!0===s.options.infinite&&!1===s.options.fade&&(t=null,s.slideCount>s.options.slidesToShow)){for(o=!0===s.options.centerMode?s.options.slidesToShow+1:s.options.slidesToShow,e=s.slideCount;e>s.slideCount-o;e-=1)t=e-1,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t-s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");for(e=0;e<o+s.slideCount;e+=1)t=e,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t+s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");s.$slideTrack.find(".slick-cloned").find("[id]").each(function(){i(this).attr("id","")})}},e.prototype.interrupt=function(i){var e=this;i||e.autoPlay(),e.interrupted=i},e.prototype.selectHandler=function(e){var t=this,o=i(e.target).is(".slick-slide")?i(e.target):i(e.target).parents(".slick-slide"),s=parseInt(o.attr("data-slick-index"));s||(s=0),t.slideCount<=t.options.slidesToShow?t.slideHandler(s,!1,!0):t.slideHandler(s)},e.prototype.slideHandler=function(i,e,t){var o,s,n,r,l,d=null,a=this;if(e=e||!1,!(!0===a.animating&&!0===a.options.waitForAnimate||!0===a.options.fade&&a.currentSlide===i))if(!1===e&&a.asNavFor(i),o=i,d=a.getLeft(o),r=a.getLeft(a.currentSlide),a.currentLeft=null===a.swipeLeft?r:a.swipeLeft,!1===a.options.infinite&&!1===a.options.centerMode&&(i<0||i>a.getDotCount()*a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else if(!1===a.options.infinite&&!0===a.options.centerMode&&(i<0||i>a.slideCount-a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else{if(a.options.autoplay&&clearInterval(a.autoPlayTimer),s=o<0?a.slideCount%a.options.slidesToScroll!=0?a.slideCount-a.slideCount%a.options.slidesToScroll:a.slideCount+o:o>=a.slideCount?a.slideCount%a.options.slidesToScroll!=0?0:o-a.slideCount:o,a.animating=!0,a.$slider.trigger("beforeChange",[a,a.currentSlide,s]),n=a.currentSlide,a.currentSlide=s,a.setSlideClasses(a.currentSlide),a.options.asNavFor&&(l=(l=a.getNavTarget()).slick("getSlick")).slideCount<=l.options.slidesToShow&&l.setSlideClasses(a.currentSlide),a.updateDots(),a.updateArrows(),!0===a.options.fade)return!0!==t?(a.fadeSlideOut(n),a.fadeSlide(s,function(){a.postSlide(s)})):a.postSlide(s),void a.animateHeight();!0!==t?a.animateSlide(d,function(){a.postSlide(s)}):a.postSlide(s)}},e.prototype.startLoad=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.hide(),i.$nextArrow.hide()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.hide(),i.$slider.addClass("slick-loading")},e.prototype.swipeDirection=function(){var i,e,t,o,s=this;return i=s.touchObject.startX-s.touchObject.curX,e=s.touchObject.startY-s.touchObject.curY,t=Math.atan2(e,i),(o=Math.round(180*t/Math.PI))<0&&(o=360-Math.abs(o)),o<=45&&o>=0?!1===s.options.rtl?"left":"right":o<=360&&o>=315?!1===s.options.rtl?"left":"right":o>=135&&o<=225?!1===s.options.rtl?"right":"left":!0===s.options.verticalSwiping?o>=35&&o<=135?"down":"up":"vertical"},e.prototype.swipeEnd=function(i){var e,t,o=this;if(o.dragging=!1,o.swiping=!1,o.scrolling)return o.scrolling=!1,!1;if(o.interrupted=!1,o.shouldClick=!(o.touchObject.swipeLength>10),void 0===o.touchObject.curX)return!1;if(!0===o.touchObject.edgeHit&&o.$slider.trigger("edge",[o,o.swipeDirection()]),o.touchObject.swipeLength>=o.touchObject.minSwipe){switch(t=o.swipeDirection()){case"left":case"down":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide+o.getSlideCount()):o.currentSlide+o.getSlideCount(),o.currentDirection=0;break;case"right":case"up":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide-o.getSlideCount()):o.currentSlide-o.getSlideCount(),o.currentDirection=1}"vertical"!=t&&(o.slideHandler(e),o.touchObject={},o.$slider.trigger("swipe",[o,t]))}else o.touchObject.startX!==o.touchObject.curX&&(o.slideHandler(o.currentSlide),o.touchObject={})},e.prototype.swipeHandler=function(i){var e=this;if(!(!1===e.options.swipe||"ontouchend"in document&&!1===e.options.swipe||!1===e.options.draggable&&-1!==i.type.indexOf("mouse")))switch(e.touchObject.fingerCount=i.originalEvent&&void 0!==i.originalEvent.touches?i.originalEvent.touches.length:1,e.touchObject.minSwipe=e.listWidth/e.options.touchThreshold,!0===e.options.verticalSwiping&&(e.touchObject.minSwipe=e.listHeight/e.options.touchThreshold),i.data.action){case"start":e.swipeStart(i);break;case"move":e.swipeMove(i);break;case"end":e.swipeEnd(i)}},e.prototype.swipeMove=function(i){var e,t,o,s,n,r,l=this;return n=void 0!==i.originalEvent?i.originalEvent.touches:null,!(!l.dragging||l.scrolling||n&&1!==n.length)&&(e=l.getLeft(l.currentSlide),l.touchObject.curX=void 0!==n?n[0].pageX:i.clientX,l.touchObject.curY=void 0!==n?n[0].pageY:i.clientY,l.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(l.touchObject.curX-l.touchObject.startX,2))),r=Math.round(Math.sqrt(Math.pow(l.touchObject.curY-l.touchObject.startY,2))),!l.options.verticalSwiping&&!l.swiping&&r>4?(l.scrolling=!0,!1):(!0===l.options.verticalSwiping&&(l.touchObject.swipeLength=r),t=l.swipeDirection(),void 0!==i.originalEvent&&l.touchObject.swipeLength>4&&(l.swiping=!0,i.preventDefault()),s=(!1===l.options.rtl?1:-1)*(l.touchObject.curX>l.touchObject.startX?1:-1),!0===l.options.verticalSwiping&&(s=l.touchObject.curY>l.touchObject.startY?1:-1),o=l.touchObject.swipeLength,l.touchObject.edgeHit=!1,!1===l.options.infinite&&(0===l.currentSlide&&"right"===t||l.currentSlide>=l.getDotCount()&&"left"===t)&&(o=l.touchObject.swipeLength*l.options.edgeFriction,l.touchObject.edgeHit=!0),!1===l.options.vertical?l.swipeLeft=e+o*s:l.swipeLeft=e+o*(l.$list.height()/l.listWidth)*s,!0===l.options.verticalSwiping&&(l.swipeLeft=e+o*s),!0!==l.options.fade&&!1!==l.options.touchMove&&(!0===l.animating?(l.swipeLeft=null,!1):void l.setCSS(l.swipeLeft))))},e.prototype.swipeStart=function(i){var e,t=this;if(t.interrupted=!0,1!==t.touchObject.fingerCount||t.slideCount<=t.options.slidesToShow)return t.touchObject={},!1;void 0!==i.originalEvent&&void 0!==i.originalEvent.touches&&(e=i.originalEvent.touches[0]),t.touchObject.startX=t.touchObject.curX=void 0!==e?e.pageX:i.clientX,t.touchObject.startY=t.touchObject.curY=void 0!==e?e.pageY:i.clientY,t.dragging=!0},e.prototype.unfilterSlides=e.prototype.slickUnfilter=function(){var i=this;null!==i.$slidesCache&&(i.unload(),i.$slideTrack.children(this.options.slide).detach(),i.$slidesCache.appendTo(i.$slideTrack),i.reinit())},e.prototype.unload=function(){var e=this;i(".slick-cloned",e.$slider).remove(),e.$dots&&e.$dots.remove(),e.$prevArrow&&e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.remove(),e.$nextArrow&&e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.remove(),e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},e.prototype.unslick=function(i){var e=this;e.$slider.trigger("unslick",[e,i]),e.destroy()},e.prototype.updateArrows=function(){var i=this;Math.floor(i.options.slidesToShow/2),!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&!i.options.infinite&&(i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===i.currentSlide?(i.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-i.options.slidesToShow&&!1===i.options.centerMode?(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-1&&!0===i.options.centerMode&&(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},e.prototype.updateDots=function(){var i=this;null!==i.$dots&&(i.$dots.find("li").removeClass("slick-active").end(),i.$dots.find("li").eq(Math.floor(i.currentSlide/i.options.slidesToScroll)).addClass("slick-active"))},e.prototype.visibility=function(){var i=this;i.options.autoplay&&(document[i.hidden]?i.interrupted=!0:i.interrupted=!1)},i.fn.slick=function(){var i,t,o=this,s=arguments[0],n=Array.prototype.slice.call(arguments,1),r=o.length;for(i=0;i<r;i++)if("object"==typeof s||void 0===s?o[i].slick=new e(o[i],s):t=o[i].slick[s].apply(o[i].slick,n),void 0!==t)return t;return o}});

;!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.videojs=e()}(this,function(){function t(t,e){return e={exports:{}},t(e,e.exports),e.exports}function e(t,e){Ye(t).forEach(function(r){return e(t[r],r)})}function r(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return Ye(t).reduce(function(r,n){return e(r,t[n],n)},r)}function n(t){for(var r=arguments.length,n=Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];return Object.assign?Object.assign.apply(Object,[t].concat(n)):(n.forEach(function(r){r&&e(r,function(e,r){t[r]=e})}),t)}function i(t){return!!t&&"object"===(void 0===t?"undefined":We(t))}function o(t){return i(t)&&"[object Object]"===$e.call(t)&&t.constructor===Object}function s(t){return t.replace(/\n\r?\s*/g,"")}function a(t,e){if(!t||!e)return"";if("function"==typeof fe.getComputedStyle){var r=fe.getComputedStyle(t);return r?r[e]:""}return t.currentStyle[e]||""}function l(t){return"string"==typeof t&&/\S/.test(t)}function c(t){if(/\s/.test(t))throw new Error("class has illegal whitespace characters")}function u(t){return new RegExp("(^|\\s)"+t+"($|\\s)")}function h(){return _e===fe.document&&void 0!==_e.createElement}function p(t){return i(t)&&1===t.nodeType}function d(){try{return fe.parent!==fe.self}catch(t){return!0}}function f(t){return function(e,r){if(!l(e))return _e[t](null);l(r)&&(r=_e.querySelector(r));var n=p(r)?r:_e;return n[t]&&n[t](e)}}function v(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"div",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=arguments[3],i=_e.createElement(t);return Object.getOwnPropertyNames(e).forEach(function(t){var r=e[t];-1!==t.indexOf("aria-")||"role"===t||"type"===t?(tr.warn(er(rr,t,r)),i.setAttribute(t,r)):"textContent"===t?y(i,r):i[t]=r}),Object.getOwnPropertyNames(r).forEach(function(t){i.setAttribute(t,r[t])}),n&&L(i,n),i}function y(t,e){return void 0===t.textContent?t.innerText=e:t.textContent=e,t}function g(t,e){e.firstChild?e.insertBefore(t,e.firstChild):e.appendChild(t)}function m(t,e){return c(e),t.classList?t.classList.contains(e):u(e).test(t.className)}function _(t,e){return t.classList?t.classList.add(e):m(t,e)||(t.className=(t.className+" "+e).trim()),t}function b(t,e){return t.classList?t.classList.remove(e):(c(e),t.className=t.className.split(/\s+/).filter(function(t){return t!==e}).join(" ")),t}function T(t,e,r){var n=m(t,e);if("function"==typeof r&&(r=r(t,e)),"boolean"!=typeof r&&(r=!n),r!==n)return r?_(t,e):b(t,e),t}function C(t,e){Object.getOwnPropertyNames(e).forEach(function(r){var n=e[r];null===n||void 0===n||!1===n?t.removeAttribute(r):t.setAttribute(r,!0===n?"":n)})}function k(t){var e={};if(t&&t.attributes&&t.attributes.length>0)for(var r=t.attributes,n=r.length-1;n>=0;n--){var i=r[n].name,o=r[n].value;"boolean"!=typeof t[i]&&-1===",autoplay,controls,playsinline,loop,muted,default,defaultMuted,".indexOf(","+i+",")||(o=null!==o),e[i]=o}return e}function E(t,e){return t.getAttribute(e)}function w(t,e,r){t.setAttribute(e,r)}function S(t,e){t.removeAttribute(e)}function x(){_e.body.focus(),_e.onselectstart=function(){return!1}}function j(){_e.onselectstart=function(){return!0}}function A(t){if(t&&t.getBoundingClientRect&&t.parentNode){var e=t.getBoundingClientRect(),r={};return["bottom","height","left","right","top","width"].forEach(function(t){void 0!==e[t]&&(r[t]=e[t])}),r.height||(r.height=parseFloat(a(t,"height"))),r.width||(r.width=parseFloat(a(t,"width"))),r}}function P(t){var e=void 0;if(t.getBoundingClientRect&&t.parentNode&&(e=t.getBoundingClientRect()),!e)return{left:0,top:0};var r=_e.documentElement,n=_e.body,i=r.clientLeft||n.clientLeft||0,o=fe.pageXOffset||n.scrollLeft,s=e.left+o-i,a=r.clientTop||n.clientTop||0,l=fe.pageYOffset||n.scrollTop,c=e.top+l-a;return{left:Math.round(s),top:Math.round(c)}}function O(t,e){var r={},n=P(t),i=t.offsetWidth,o=t.offsetHeight,s=n.top,a=n.left,l=e.pageY,c=e.pageX;return e.changedTouches&&(c=e.changedTouches[0].pageX,l=e.changedTouches[0].pageY),r.y=Math.max(0,Math.min(1,(s-l+o)/o)),r.x=Math.max(0,Math.min(1,(c-a)/i)),r}function M(t){return i(t)&&3===t.nodeType}function N(t){for(;t.firstChild;)t.removeChild(t.firstChild);return t}function I(t){return"function"==typeof t&&(t=t()),(Array.isArray(t)?t:[t]).map(function(t){return"function"==typeof t&&(t=t()),p(t)||M(t)?t:"string"==typeof t&&/\S/.test(t)?_e.createTextNode(t):void 0}).filter(function(t){return t})}function L(t,e){return I(e).forEach(function(e){return t.appendChild(e)}),t}function R(t,e){return L(N(t),e)}function D(t){return void 0===t.button&&void 0===t.buttons||(0===t.button&&void 0===t.buttons||(9===De||0===t.button&&1===t.buttons))}function B(){return sr++}function F(t){var e=t[lr];return e||(e=t[lr]=B()),ar[e]||(ar[e]={}),ar[e]}function H(t){var e=t[lr];return!!e&&!!Object.getOwnPropertyNames(ar[e]).length}function V(t){var e=t[lr];if(e){delete ar[e];try{delete t[lr]}catch(e){t.removeAttribute?t.removeAttribute(lr):t[lr]=null}}}function z(t,e){var r=F(t);0===r.handlers[e].length&&(delete r.handlers[e],t.removeEventListener?t.removeEventListener(e,r.dispatcher,!1):t.detachEvent&&t.detachEvent("on"+e,r.dispatcher)),Object.getOwnPropertyNames(r.handlers).length<=0&&(delete r.handlers,delete r.dispatcher,delete r.disabled),0===Object.getOwnPropertyNames(r).length&&V(t)}function W(t,e,r,n){r.forEach(function(r){t(e,r,n)})}function U(t){function e(){return!0}function r(){return!1}if(!t||!t.isPropagationStopped){var n=t||fe.event;t={};for(var i in n)"layerX"!==i&&"layerY"!==i&&"keyLocation"!==i&&"webkitMovementX"!==i&&"webkitMovementY"!==i&&("returnValue"===i&&n.preventDefault||(t[i]=n[i]));if(t.target||(t.target=t.srcElement||_e),t.relatedTarget||(t.relatedTarget=t.fromElement===t.target?t.toElement:t.fromElement),t.preventDefault=function(){n.preventDefault&&n.preventDefault(),t.returnValue=!1,n.returnValue=!1,t.defaultPrevented=!0},t.defaultPrevented=!1,t.stopPropagation=function(){n.stopPropagation&&n.stopPropagation(),t.cancelBubble=!0,n.cancelBubble=!0,t.isPropagationStopped=e},t.isPropagationStopped=r,t.stopImmediatePropagation=function(){n.stopImmediatePropagation&&n.stopImmediatePropagation(),t.isImmediatePropagationStopped=e,t.stopPropagation()},t.isImmediatePropagationStopped=r,null!==t.clientX&&void 0!==t.clientX){var o=_e.documentElement,s=_e.body;t.pageX=t.clientX+(o&&o.scrollLeft||s&&s.scrollLeft||0)-(o&&o.clientLeft||s&&s.clientLeft||0),t.pageY=t.clientY+(o&&o.scrollTop||s&&s.scrollTop||0)-(o&&o.clientTop||s&&s.clientTop||0)}t.which=t.charCode||t.keyCode,null!==t.button&&void 0!==t.button&&(t.button=1&t.button?0:4&t.button?1:2&t.button?2:0)}return t}function X(t,e,r){if(Array.isArray(e))return W(X,t,e,r);var n=F(t);if(n.handlers||(n.handlers={}),n.handlers[e]||(n.handlers[e]=[]),r.guid||(r.guid=B()),n.handlers[e].push(r),n.dispatcher||(n.disabled=!1,n.dispatcher=function(e,r){if(!n.disabled){e=U(e);var i=n.handlers[e.type];if(i)for(var o=i.slice(0),s=0,a=o.length;s<a&&!e.isImmediatePropagationStopped();s++)try{o[s].call(t,e,r)}catch(t){tr.error(t)}}}),1===n.handlers[e].length)if(t.addEventListener){var i=!1;cr&&ur.indexOf(e)>-1&&(i={passive:!0}),t.addEventListener(e,n.dispatcher,i)}else t.attachEvent&&t.attachEvent("on"+e,n.dispatcher)}function q(t,e,r){if(H(t)){var n=F(t);if(n.handlers){if(Array.isArray(e))return W(q,t,e,r);var i=function(t,e){n.handlers[e]=[],z(t,e)};if(void 0!==e){var o=n.handlers[e];if(o){if(!r)return void i(t,e);if(r.guid)for(var s=0;s<o.length;s++)o[s].guid===r.guid&&o.splice(s--,1);z(t,e)}}else for(var a in n.handlers)Object.prototype.hasOwnProperty.call(n.handlers||{},a)&&i(t,a)}}}function K(t,e,r){var n=H(t)?F(t):{},i=t.parentNode||t.ownerDocument;if("string"==typeof e?e={type:e,target:t}:e.target||(e.target=t),e=U(e),n.dispatcher&&n.dispatcher.call(t,e,r),i&&!e.isPropagationStopped()&&!0===e.bubbles)K.call(null,i,e,r);else if(!i&&!e.defaultPrevented){var o=F(e.target);e.target[e.type]&&(o.disabled=!0,"function"==typeof e.target[e.type]&&e.target[e.type](),o.disabled=!1)}return!e.defaultPrevented}function $(t,e,r){if(Array.isArray(e))return W($,t,e,r);var n=function n(){q(t,e,n),r.apply(this,arguments)};n.guid=r.guid=r.guid||B(),X(t,e,n)}function Y(t,e){e&&(dr=e),fe.setTimeout(fr,t)}function G(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=e.eventBusKey;if(r){if(!t[r].nodeName)throw new Error('The eventBusKey "'+r+'" does not refer to an element.');t.eventBusEl_=t[r]}else t.eventBusEl_=v("span",{className:"vjs-event-bus"});return n(t,jr),t.on("dispose",function(){t.off(),fe.setTimeout(function(){t.eventBusEl_=null},0)}),t}function J(t,e){return n(t,Ar),t.state=n({},t.state,e),"function"==typeof t.handleStateChanged&&Tr(t)&&t.on("statechanged",t.handleStateChanged),t}function Q(t){return"string"!=typeof t?t:t.charAt(0).toUpperCase()+t.slice(1)}function Z(t,e){return Q(t)===Q(e)}function tt(){for(var t={},r=arguments.length,n=Array(r),i=0;i<r;i++)n[i]=arguments[i];return n.forEach(function(r){r&&e(r,function(e,r){if(!o(e))return void(t[r]=e);o(t[r])||(t[r]={}),t[r]=tt(t[r],e)})}),t}function et(t,e,r){if("number"!=typeof e||e<0||e>r)throw new Error("Failed to execute '"+t+"' on 'TimeRanges': The index provided ("+e+") is non-numeric or out of bounds (0-"+r+").")}function rt(t,e,r,n){return et(t,n,r.length-1),r[n][e]}function nt(t){return void 0===t||0===t.length?{length:0,start:function(){throw new Error("This TimeRanges object is empty")},end:function(){throw new Error("This TimeRanges object is empty")}}:{length:t.length,start:rt.bind(null,"start",0,t),end:rt.bind(null,"end",1,t)}}function it(t,e){return Array.isArray(t)?nt(t):void 0===t||void 0===e?nt():nt([[t,e]])}function ot(t,e){var r=0,n=void 0,i=void 0;if(!e)return 0;t&&t.length||(t=it(0,0));for(var o=0;o<t.length;o++)n=t.start(o),i=t.end(o),i>e&&(i=e),r+=i-n;return r/e}function st(t){if(t instanceof st)return t;"number"==typeof t?this.code=t:"string"==typeof t?this.message=t:i(t)&&("number"==typeof t.code&&(this.code=t.code),n(this,t)),this.message||(this.message=st.defaultMessages[this.code]||"")}function at(t,e){var r,n=null;try{r=JSON.parse(t,e)}catch(t){n=t}return[n,r]}function lt(t){return void 0!==t&&null!==t&&"function"==typeof t.then}function ct(t){lt(t)&&t.then(null,function(t){})}function ut(t){var e=pn.call(t);return"[object Function]"===e||"function"==typeof t&&"[object RegExp]"!==e||"undefined"!=typeof window&&(t===window.setTimeout||t===window.alert||t===window.confirm||t===window.prompt)}function ht(t,e,r){if(!hn(e))throw new TypeError("iterator must be a function");arguments.length<3&&(r=this),"[object Array]"===vn.call(t)?pt(t,e,r):"string"==typeof t?dt(t,e,r):ft(t,e,r)}function pt(t,e,r){for(var n=0,i=t.length;n<i;n++)yn.call(t,n)&&e.call(r,t[n],n,t)}function dt(t,e,r){for(var n=0,i=t.length;n<i;n++)e.call(r,t.charAt(n),n,t)}function ft(t,e,r){for(var n in t)yn.call(t,n)&&e.call(r,t[n],n,t)}function vt(){for(var t={},e=0;e<arguments.length;e++){var r=arguments[e];for(var n in r)bn.call(r,n)&&(t[n]=r[n])}return t}function yt(t){for(var e in t)if(t.hasOwnProperty(e))return!1;return!0}function gt(t,e,r){var n=t;return hn(e)?(r=e,"string"==typeof t&&(n={uri:t})):n=_n(e,{uri:t}),n.callback=r,n}function mt(t,e,r){return e=gt(t,e,r),_t(e)}function _t(t){function e(){4===a.readyState&&setTimeout(i,0)}function r(){var t=void 0;if(t=a.response?a.response:a.responseText||bt(a),y)try{t=JSON.parse(t)}catch(t){}return t}function n(t){return clearTimeout(u),t instanceof Error||(t=new Error(""+(t||"Unknown XMLHttpRequest Error"))),t.statusCode=0,s(t,g)}function i(){if(!c){var e;clearTimeout(u),e=t.useXDR&&void 0===a.status?200:1223===a.status?204:a.status;var n=g,i=null;return 0!==e?(n={body:r(),statusCode:e,method:p,headers:{},url:h,rawRequest:a},a.getAllResponseHeaders&&(n.headers=mn(a.getAllResponseHeaders()))):i=new Error("Internal XMLHttpRequest Error"),s(i,n,n.body)}}if(void 0===t.callback)throw new Error("callback argument missing");var o=!1,s=function(e,r,n){o||(o=!0,t.callback(e,r,n))},a=t.xhr||null;a||(a=t.cors||t.useXDR?new mt.XDomainRequest:new mt.XMLHttpRequest);var l,c,u,h=a.url=t.uri||t.url,p=a.method=t.method||"GET",d=t.body||t.data,f=a.headers=t.headers||{},v=!!t.sync,y=!1,g={body:void 0,headers:{},statusCode:0,method:p,url:h,rawRequest:a};if("json"in t&&!1!==t.json&&(y=!0,f.accept||f.Accept||(f.Accept="application/json"),"GET"!==p&&"HEAD"!==p&&(f["content-type"]||f["Content-Type"]||(f["Content-Type"]="application/json"),d=JSON.stringify(!0===t.json?d:t.json))),a.onreadystatechange=e,a.onload=i,a.onerror=n,a.onprogress=function(){},a.onabort=function(){c=!0},a.ontimeout=n,a.open(p,h,!v,t.username,t.password),v||(a.withCredentials=!!t.withCredentials),!v&&t.timeout>0&&(u=setTimeout(function(){if(!c){c=!0,a.abort("timeout");var t=new Error("XMLHttpRequest timeout");t.code="ETIMEDOUT",n(t)}},t.timeout)),a.setRequestHeader)for(l in f)f.hasOwnProperty(l)&&a.setRequestHeader(l,f[l]);else if(t.headers&&!yt(t.headers))throw new Error("Headers cannot be set on an XDomainRequest object");return"responseType"in t&&(a.responseType=t.responseType),"beforeSend"in t&&"function"==typeof t.beforeSend&&t.beforeSend(a),a.send(d||null),a}function bt(t){if("document"===t.responseType)return t.responseXML;var e=t.responseXML&&"parsererror"===t.responseXML.documentElement.nodeName;return""!==t.responseType||e?null:t.responseXML}function Tt(){}function Ct(t,e){this.name="ParsingError",this.code=t.code,this.message=e||t.message}function kt(t){function e(t,e,r,n){return 3600*(0|t)+60*(0|e)+(0|r)+(0|n)/1e3}var r=t.match(/^(\d+):(\d{2})(:\d{2})?\.(\d{3})/);return r?r[3]?e(r[1],r[2],r[3].replace(":",""),r[4]):r[1]>59?e(r[1],r[2],0,r[4]):e(0,r[1],r[2],r[4]):null}function Et(){this.values=Nn(null)}function wt(t,e,r,n){var i=n?t.split(n):[t];for(var o in i)if("string"==typeof i[o]){var s=i[o].split(r);if(2===s.length){var a=s[0],l=s[1];e(a,l)}}}function St(t,e,r){function n(){var e=kt(t);if(null===e)throw new Ct(Ct.Errors.BadTimeStamp,"Malformed timestamp: "+o);return t=t.replace(/^[^\sa-zA-Z-]+/,""),e}function i(){t=t.replace(/^\s+/,"")}var o=t;if(i(),e.startTime=n(),i(),"--\x3e"!==t.substr(0,3))throw new Ct(Ct.Errors.BadTimeStamp,"Malformed time stamp (time stamps must be separated by '--\x3e'): "+o);t=t.substr(3),i(),e.endTime=n(),i(),function(t,e){var n=new Et;wt(t,function(t,e){switch(t){case"region":for(var i=r.length-1;i>=0;i--)if(r[i].id===e){n.set(t,r[i].region);break}break;case"vertical":n.alt(t,e,["rl","lr"]);break;case"line":var o=e.split(","),s=o[0];n.integer(t,s),n.percent(t,s)&&n.set("snapToLines",!1),n.alt(t,s,["auto"]),2===o.length&&n.alt("lineAlign",o[1],["start","middle","end"]);break;case"position":o=e.split(","),n.percent(t,o[0]),2===o.length&&n.alt("positionAlign",o[1],["start","middle","end"]);break;case"size":n.percent(t,e);break;case"align":n.alt(t,e,["start","middle","end","left","right"])}},/:/,/\s/),e.region=n.get("region",null),e.vertical=n.get("vertical",""),e.line=n.get("line","auto"),e.lineAlign=n.get("lineAlign","start"),e.snapToLines=n.get("snapToLines",!0),e.size=n.get("size",100),e.align=n.get("align","middle"),e.position=n.get("position",{start:0,left:0,middle:50,end:100,right:100},e.align),e.positionAlign=n.get("positionAlign",{start:"start",left:"start",middle:"middle",end:"end",right:"end"},e.align)}(t,e)}function xt(t,e){function r(t){return In[t]}for(var n,i=t.document.createElement("div"),o=i,s=[];null!==(n=function(){if(!e)return null;var t=e.match(/^([^<]*)(<[^>]*>?)?/);return function(t){return e=e.substr(t.length),t}(t[1]?t[1]:t[2])}());)if("<"!==n[0])o.appendChild(t.document.createTextNode(function(t){for(;c=t.match(/&(amp|lt|gt|lrm|rlm|nbsp);/);)t=t.replace(c[0],r);return t}(n)));else{if("/"===n[1]){s.length&&s[s.length-1]===n.substr(2).replace(">","")&&(s.pop(),o=o.parentNode);continue}var a,l=kt(n.substr(1,n.length-2));if(l){a=t.document.createProcessingInstruction("timestamp",l),o.appendChild(a);continue}var c=n.match(/^<([^.\s\/0-9>]+)(\.[^\s\\>]+)?([^>\\]+)?(\\?)>?$/);if(!c)continue;if(!(a=function(e,r){var n=Ln[e];if(!n)return null;var i=t.document.createElement(n);i.localName=n;var o=Rn[e];return o&&r&&(i[o]=r.trim()),i}(c[1],c[3])))continue;if(!function(t,e){return!Dn[e.localName]||Dn[e.localName]===t.localName}(o,a))continue;c[2]&&(a.className=c[2].substr(1).replace("."," ")),s.push(c[1]),o.appendChild(a),o=a}return i}function jt(t){for(var e=0;e<Bn.length;e++){var r=Bn[e];if(t>=r[0]&&t<=r[1])return!0}return!1}function At(t){function e(t,e){for(var r=e.childNodes.length-1;r>=0;r--)t.push(e.childNodes[r])}function r(t){if(!t||!t.length)return null;var n=t.pop(),i=n.textContent||n.innerText;if(i){var o=i.match(/^.*(\n|\r)/);return o?(t.length=0,o[0]):i}return"ruby"===n.tagName?r(t):n.childNodes?(e(t,n),r(t)):void 0}var n,i=[],o="";if(!t||!t.childNodes)return"ltr";for(e(i,t);o=r(i);)for(var s=0;s<o.length;s++)if(n=o.charCodeAt(s),jt(n))return"rtl";return"ltr"}function Pt(t){if("number"==typeof t.line&&(t.snapToLines||t.line>=0&&t.line<=100))return t.line;if(!t.track||!t.track.textTrackList||!t.track.textTrackList.mediaElement)return-1;for(var e=t.track,r=e.textTrackList,n=0,i=0;i<r.length&&r[i]!==e;i++)"showing"===r[i].mode&&n++;return-1*++n}function Ot(){}function Mt(t,e,r){var n=/MSIE\s8\.0/.test(navigator.userAgent),i="rgba(255, 255, 255, 1)",o="rgba(0, 0, 0, 0.8)";n&&(i="rgb(255, 255, 255)",o="rgb(0, 0, 0)"),Ot.call(this),this.cue=e,this.cueDiv=xt(t,e.text);var s={color:i,backgroundColor:o,position:"relative",left:0,right:0,top:0,bottom:0,display:"inline"};n||(s.writingMode=""===e.vertical?"horizontal-tb":"lr"===e.vertical?"vertical-lr":"vertical-rl",s.unicodeBidi="plaintext"),this.applyStyles(s,this.cueDiv),this.div=t.document.createElement("div"),s={textAlign:"middle"===e.align?"center":e.align,font:r.font,whiteSpace:"pre-line",position:"absolute"},n||(s.direction=At(this.cueDiv),s.writingMode=""===e.vertical?"horizontal-tb":"lr"===e.vertical?"vertical-lr":"vertical-rl".stylesunicodeBidi="plaintext"),this.applyStyles(s),this.div.appendChild(this.cueDiv);var a=0;switch(e.positionAlign){case"start":a=e.position;break;case"middle":a=e.position-e.size/2;break;case"end":a=e.position-e.size}""===e.vertical?this.applyStyles({left:this.formatStyle(a,"%"),width:this.formatStyle(e.size,"%")}):this.applyStyles({top:this.formatStyle(a,"%"),height:this.formatStyle(e.size,"%")}),this.move=function(t){this.applyStyles({top:this.formatStyle(t.top,"px"),bottom:this.formatStyle(t.bottom,"px"),left:this.formatStyle(t.left,"px"),right:this.formatStyle(t.right,"px"),height:this.formatStyle(t.height,"px"),width:this.formatStyle(t.width,"px")})}}function Nt(t){var e,r,n,i,o=/MSIE\s8\.0/.test(navigator.userAgent);if(t.div){r=t.div.offsetHeight,n=t.div.offsetWidth,i=t.div.offsetTop;var s=(s=t.div.childNodes)&&(s=s[0])&&s.getClientRects&&s.getClientRects();t=t.div.getBoundingClientRect(),e=s?Math.max(s[0]&&s[0].height||0,t.height/s.length):0}this.left=t.left,this.right=t.right,this.top=t.top||i,this.height=t.height||r,this.bottom=t.bottom||i+(t.height||r),this.width=t.width||n,this.lineHeight=void 0!==e?e:t.lineHeight,o&&!this.lineHeight&&(this.lineHeight=13)}function It(t,e,r,n){var i=new Nt(e),o=e.cue,s=Pt(o),a=[];if(o.snapToLines){var l;switch(o.vertical){case"":a=["+y","-y"],l="height";break;case"rl":a=["+x","-x"],l="width";break;case"lr":a=["-x","+x"],l="width"}var c=i.lineHeight,u=c*Math.round(s),h=r[l]+c,p=a[0];Math.abs(u)>h&&(u=u<0?-1:1,u*=Math.ceil(h/c)*c),s<0&&(u+=""===o.vertical?r.height:r.width,a=a.reverse()),i.move(p,u)}else{var d=i.lineHeight/r.height*100;switch(o.lineAlign){case"middle":s-=d/2;break;case"end":s-=d}switch(o.vertical){case"":e.applyStyles({top:e.formatStyle(s,"%")});break;case"rl":e.applyStyles({left:e.formatStyle(s,"%")});break;case"lr":e.applyStyles({right:e.formatStyle(s,"%")})}a=["+y","-x","+x","-y"],i=new Nt(e)}var f=function(t,e){for(var i,o=new Nt(t),s=1,a=0;a<e.length;a++){for(;t.overlapsOppositeAxis(r,e[a])||t.within(r)&&t.overlapsAny(n);)t.move(e[a]);if(t.within(r))return t;var l=t.intersectPercentage(r);s>l&&(i=new Nt(t),s=l),t=new Nt(o)}return i||o}(i,a);e.move(f.toCSSCompatValues(r))}function Lt(){}function Rt(t){return"string"==typeof t&&(!!Vn[t.toLowerCase()]&&t.toLowerCase())}function Dt(t){return"string"==typeof t&&(!!zn[t.toLowerCase()]&&t.toLowerCase())}function Bt(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)t[n]=r[n]}return t}function Ft(t,e,r){var n=this,i=/MSIE\s8\.0/.test(navigator.userAgent),o={};i?n=document.createElement("custom"):o.enumerable=!0,n.hasBeenReset=!1;var s="",a=!1,l=t,c=e,u=r,h=null,p="",d=!0,f="auto",v="start",y=50,g="middle",m=50,_="middle";if(Object.defineProperty(n,"id",Bt({},o,{get:function(){return s},set:function(t){s=""+t}})),Object.defineProperty(n,"pauseOnExit",Bt({},o,{get:function(){return a},set:function(t){a=!!t}})),Object.defineProperty(n,"startTime",Bt({},o,{get:function(){return l},set:function(t){if("number"!=typeof t)throw new TypeError("Start time must be set to a number.");l=t,this.hasBeenReset=!0}})),Object.defineProperty(n,"endTime",Bt({},o,{get:function(){return c},set:function(t){if("number"!=typeof t)throw new TypeError("End time must be set to a number.");c=t,this.hasBeenReset=!0}})),Object.defineProperty(n,"text",Bt({},o,{get:function(){return u},set:function(t){u=""+t,this.hasBeenReset=!0}})),Object.defineProperty(n,"region",Bt({},o,{get:function(){return h},set:function(t){h=t,this.hasBeenReset=!0}})),Object.defineProperty(n,"vertical",Bt({},o,{get:function(){return p},set:function(t){var e=Rt(t);if(!1===e)throw new SyntaxError("An invalid or illegal string was specified.");p=e,this.hasBeenReset=!0}})),Object.defineProperty(n,"snapToLines",Bt({},o,{get:function(){return d},set:function(t){d=!!t,this.hasBeenReset=!0}})),Object.defineProperty(n,"line",Bt({},o,{get:function(){return f},set:function(t){if("number"!=typeof t&&t!==Hn)throw new SyntaxError("An invalid number or illegal string was specified.");f=t,this.hasBeenReset=!0}})),Object.defineProperty(n,"lineAlign",Bt({},o,{get:function(){return v},set:function(t){var e=Dt(t);if(!e)throw new SyntaxError("An invalid or illegal string was specified.");v=e,this.hasBeenReset=!0}})),Object.defineProperty(n,"position",Bt({},o,{get:function(){return y},set:function(t){if(t<0||t>100)throw new Error("Position must be between 0 and 100.");y=t,this.hasBeenReset=!0}})),Object.defineProperty(n,"positionAlign",Bt({},o,{get:function(){return g},set:function(t){var e=Dt(t);if(!e)throw new SyntaxError("An invalid or illegal string was specified.");g=e,this.hasBeenReset=!0}})),Object.defineProperty(n,"size",Bt({},o,{get:function(){return m},set:function(t){if(t<0||t>100)throw new Error("Size must be between 0 and 100.");m=t,this.hasBeenReset=!0}})),Object.defineProperty(n,"align",Bt({},o,{get:function(){return _},set:function(t){var e=Dt(t);if(!e)throw new SyntaxError("An invalid or illegal string was specified.");_=e,this.hasBeenReset=!0}})),n.displayState=void 0,i)return n}function Ht(t){return"string"==typeof t&&(!!Un[t.toLowerCase()]&&t.toLowerCase())}function Vt(t){return"number"==typeof t&&t>=0&&t<=100}function zt(){var t=100,e=3,r=0,n=100,i=0,o=100,s="";Object.defineProperties(this,{width:{enumerable:!0,get:function(){return t},set:function(e){if(!Vt(e))throw new Error("Width must be between 0 and 100.");t=e}},lines:{enumerable:!0,get:function(){return e},set:function(t){if("number"!=typeof t)throw new TypeError("Lines must be set to a number.");e=t}},regionAnchorY:{enumerable:!0,get:function(){return n},set:function(t){if(!Vt(t))throw new Error("RegionAnchorX must be between 0 and 100.");n=t}},regionAnchorX:{enumerable:!0,get:function(){return r},set:function(t){if(!Vt(t))throw new Error("RegionAnchorY must be between 0 and 100.");r=t}},viewportAnchorY:{enumerable:!0,get:function(){return o},set:function(t){if(!Vt(t))throw new Error("ViewportAnchorY must be between 0 and 100.");o=t}},viewportAnchorX:{enumerable:!0,get:function(){return i},set:function(t){if(!Vt(t))throw new Error("ViewportAnchorX must be between 0 and 100.");i=t}},scroll:{enumerable:!0,get:function(){return s},set:function(t){var e=Ht(t);if(!1===e)throw new SyntaxError("An invalid or illegal string was specified.");s=e}}})}function Wt(t,e,r,n){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},o=t.textTracks();i.kind=e,r&&(i.label=r),n&&(i.language=n),i.tech=t;var s=new Mn.text.TrackClass(i);return o.addTrack(s),s}function Ut(t,e){$n[t]=$n[t]||[],$n[t].push(e)}function Xt(t,e,r){t.setTimeout(function(){return te(e,$n[e.type],r,t)},1)}function qt(t,e){t.forEach(function(t){return t.setTech&&t.setTech(e)})}function Kt(t,e,r){return t.reduceRight(Gt(r),e[r]())}function $t(t,e,r,n){return e[r](t.reduce(Gt(r),n))}function Yt(t,e,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,i="call"+Q(r),o=t.reduce(Gt(i),n),s=o===Gn,a=s?null:e[r](o);return Jt(t,r,a,s),a}function Gt(t){return function(e,r){return e===Gn?Gn:r[t]?r[t](e):e}}function Jt(t,e,r,n){for(var i=t.length-1;i>=0;i--){var o=t[i];o[e]&&o[e](n,r)}}function Qt(t){Yn[t.id()]=null}function Zt(t,e){var r=Yn[t.id()],n=null;if(void 0===r||null===r)return n=e(t),Yn[t.id()]=[[e,n]],n;for(var i=0;i<r.length;i++){var o=r[i],s=o[0],a=o[1];s===e&&(n=a)}return null===n&&(n=e(t),r.push([e,n])),n}function te(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=arguments[2],i=arguments[3],o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:[],s=arguments.length>5&&void 0!==arguments[5]&&arguments[5],a=e[0],l=e.slice(1);if("string"==typeof a)te(t,$n[a],r,i,o,s);else if(a){var c=Zt(i,a);c.setSource(n({},t),function(e,n){if(e)return te(t,l,r,i,o,s);o.push(c),te(n,t.type===n.type?l:$n[n.type],r,i,o,s)})}else l.length?te(t,l,r,i,o,s):s?r(t,o):te(t,$n["*"],r,i,o,!0)}function ee(t){var e=ei(t.src);return!t.type&&e&&(t.type=e),t}function re(t,e){return"rgba("+parseInt(t[1]+t[1],16)+","+parseInt(t[2]+t[2],16)+","+parseInt(t[3]+t[3],16)+","+e+")"}function ne(t,e,r){try{t.style[e]=r}catch(t){return}}function ie(t){vi=t}function oe(){vi=fi}function se(t,e){if(e&&(t=e(t)),t&&"none"!==t)return t}function ae(t,e){return se(t.options[t.options.selectedIndex].value,e)}function le(t,e,r){if(e)for(var n=0;n<t.options.length;n++)if(se(t.options[n].value,r)===e){t.selectedIndex=n;break}}function ce(t,e,r){var n=ce.getPlayer(t);if(n)return e&&tr.warn('Player "'+t+'" is already initialised. Options will not be applied.'),r&&n.ready(r),n;var o="string"==typeof t?nr("#"+Go(t)):t;if(!p(o))throw new TypeError("The element or ID supplied is not valid. (videojs)");_e.body.contains(o)||tr.warn("The element supplied is not included in the DOM"),e=e||{},ce.hooks("beforesetup").forEach(function(t){var r=t(o,tt(e));if(!i(r)||Array.isArray(r))return void tr.error("please return an object in beforesetup hooks");e=tt(e,r)});var s=Pr.getComponent("Player");return n=new s(o,e,r),ce.hooks("setup").forEach(function(t){return t(n)}),n}var ue,he="6.10.1",pe="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};ue="undefined"!=typeof window?window:void 0!==pe?pe:"undefined"!=typeof self?self:{};var de,fe=ue,ve={},ye=(Object.freeze||Object)({default:ve}),ge=ye&&ve||ye,me=void 0!==pe?pe:"undefined"!=typeof window?window:{};"undefined"!=typeof document?de=document:(de=me["__GLOBAL_DOCUMENT_CACHE@4"])||(de=me["__GLOBAL_DOCUMENT_CACHE@4"]=ge);var _e=de,be=fe.navigator&&fe.navigator.userAgent||"",Te=/AppleWebKit\/([\d.]+)/i.exec(be),Ce=Te?parseFloat(Te.pop()):null,ke=/iPad/i.test(be),Ee=/iPhone/i.test(be)&&!ke,we=/iPod/i.test(be),Se=Ee||ke||we,xe=function(){var t=be.match(/OS (\d+)_/i);return t&&t[1]?t[1]:null}(),je=/Android/i.test(be),Ae=function(){var t=be.match(/Android (\d+)(?:\.(\d+))?(?:\.(\d+))*/i);if(!t)return null;var e=t[1]&&parseFloat(t[1]),r=t[2]&&parseFloat(t[2]);return e&&r?parseFloat(t[1]+"."+t[2]):e||null}(),Pe=je&&/webkit/i.test(be)&&Ae<2.3,Oe=je&&Ae<5&&Ce<537,Me=/Firefox/i.test(be),Ne=/Edge/i.test(be),Ie=!Ne&&/Chrome/i.test(be),Le=function(){var t=be.match(/Chrome\/(\d+)/);return t&&t[1]?parseFloat(t[1]):null}(),Re=/MSIE\s8\.0/.test(be),De=function(){var t=/MSIE\s(\d+)\.\d/.exec(be),e=t&&parseFloat(t[1]);return!e&&/Trident\/7.0/i.test(be)&&/rv:11.0/.test(be)&&(e=11),e}(),Be=/Safari/i.test(be)&&!Ie&&!je&&!Ne,Fe=Be||Se,He=h()&&("ontouchstart"in fe||fe.DocumentTouch&&fe.document instanceof fe.DocumentTouch),Ve=h()&&"backgroundSize"in fe.document.createElement("video").style,ze=(Object.freeze||Object)({IS_IPAD:ke,IS_IPHONE:Ee,IS_IPOD:we,IS_IOS:Se,IOS_VERSION:xe,IS_ANDROID:je,ANDROID_VERSION:Ae,IS_OLD_ANDROID:Pe,IS_NATIVE_ANDROID:Oe,IS_FIREFOX:Me,IS_EDGE:Ne,IS_CHROME:Ie,CHROME_VERSION:Le,IS_IE8:Re,IE_VERSION:De,IS_SAFARI:Be,IS_ANY_SAFARI:Fe,TOUCH_ENABLED:He,BACKGROUND_SIZE_SUPPORTED:Ve}),We="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ue=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},Xe=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)},qe=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e},Ke=function(t,e){return t.raw=e,t},$e=Object.prototype.toString,Ye=function(t){return i(t)?Object.keys(t):[]},Ge=void 0,Je="info",Qe=[],Ze=function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:!!De&&De<11,n=Ge.levels[Je],o=new RegExp("^("+n+")$");if("log"!==t&&e.unshift(t.toUpperCase()+":"),Qe&&Qe.push([].concat(e)),e.unshift("VIDEOJS:"),fe.console){var s=fe.console[t];s||"debug"!==t||(s=fe.console.info||fe.console.log),s&&n&&o.test(t)&&(r&&(e=e.map(function(t){if(i(t)||Array.isArray(t))try{return JSON.stringify(t)}catch(e){return String(t)}return String(t)}).join(" ")),s.apply?s[Array.isArray(e)?"apply":"call"](fe.console,e):s(e))}};Ge=function(){for(var t=arguments.length,e=Array(t),r=0;r<t;r++)e[r]=arguments[r];Ze("log",e)},Ge.levels={all:"debug|log|warn|error",off:"",debug:"debug|log|warn|error",info:"log|warn|error",warn:"warn|error",error:"error",DEFAULT:Je},Ge.level=function(t){if("string"==typeof t){if(!Ge.levels.hasOwnProperty(t))throw new Error('"'+t+'" in not a valid log level');Je=t}return Je},Ge.history=function(){return Qe?[].concat(Qe):[]},Ge.history.clear=function(){Qe&&(Qe.length=0)},Ge.history.disable=function(){null!==Qe&&(Qe.length=0,Qe=null)},Ge.history.enable=function(){null===Qe&&(Qe=[])},Ge.error=function(){for(var t=arguments.length,e=Array(t),r=0;r<t;r++)e[r]=arguments[r];return Ze("error",e)},Ge.warn=function(){for(var t=arguments.length,e=Array(t),r=0;r<t;r++)e[r]=arguments[r];return Ze("warn",e)},Ge.debug=function(){for(var t=arguments.length,e=Array(t),r=0;r<t;r++)e[r]=arguments[r];return Ze("debug",e)};var tr=Ge,er=function(t){for(var e="",r=0;r<arguments.length;r++)e+=s(t[r])+(arguments[r+1]||"");return e},rr=Ke(["Setting attributes in the second argument of createEl()\n                has been deprecated. Use the third argument instead.\n                createEl(type, properties, attributes). Attempting to set "," to ","."],["Setting attributes in the second argument of createEl()\n                has been deprecated. Use the third argument instead.\n                createEl(type, properties, attributes). Attempting to set "," to ","."]),nr=f("querySelector"),ir=f("querySelectorAll"),or=(Object.freeze||Object)({isReal:h,isEl:p,isInFrame:d,createEl:v,textContent:y,prependTo:g,
hasClass:m,addClass:_,removeClass:b,toggleClass:T,setAttributes:C,getAttributes:k,getAttribute:E,setAttribute:w,removeAttribute:S,blockTextSelection:x,unblockTextSelection:j,getBoundingClientRect:A,findPosition:P,getPointerPosition:O,isTextNode:M,emptyEl:N,normalizeContent:I,appendContent:L,insertContent:R,isSingleLeftClick:D,$:nr,$$:ir}),sr=1,ar={},lr="vdata"+(new Date).getTime(),cr=!1;!function(){try{var t=Object.defineProperty({},"passive",{get:function(){cr=!0}});fe.addEventListener("test",null,t),fe.removeEventListener("test",null,t)}catch(t){}}();var ur=["touchstart","touchmove"],hr=(Object.freeze||Object)({fixEvent:U,on:X,off:q,trigger:K,one:$}),pr=!1,dr=void 0,fr=function(){if(h()&&!1!==dr.options.autoSetup){var t=_e.getElementsByTagName("video"),e=_e.getElementsByTagName("audio"),r=_e.getElementsByTagName("video-js"),n=[];if(t&&t.length>0)for(var i=0,o=t.length;i<o;i++)n.push(t[i]);if(e&&e.length>0)for(var s=0,a=e.length;s<a;s++)n.push(e[s]);if(r&&r.length>0)for(var l=0,c=r.length;l<c;l++)n.push(r[l]);if(n&&n.length>0)for(var u=0,p=n.length;u<p;u++){var d=n[u];if(!d||!d.getAttribute){Y(1);break}if(void 0===d.player){var f=d.getAttribute("data-setup");null!==f&&dr(d)}}else pr||Y(1)}};h()&&"complete"===_e.readyState?pr=!0:$(fe,"load",function(){pr=!0});var vr=function(t){var e=_e.createElement("style");return e.className=t,e},yr=function(t,e){t.styleSheet?t.styleSheet.cssText=e:t.textContent=e},gr=function(t,e,r){e.guid||(e.guid=B());var n=function(){return e.apply(t,arguments)};return n.guid=r?r+"_"+e.guid:e.guid,n},mr=function(t,e){var r=Date.now();return function(){var n=Date.now();n-r>=e&&(t.apply(void 0,arguments),r=n)}},_r=function(t,e,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:fe,i=void 0;return function(){var o=this,s=arguments,a=function(){i=null,a=null,r||t.apply(o,s)};!i&&r&&t.apply(o,s),n.clearTimeout(i),i=n.setTimeout(a,e)}},br=function(){};br.prototype.allowedEvents_={},br.prototype.on=function(t,e){var r=this.addEventListener;this.addEventListener=function(){},X(this,t,e),this.addEventListener=r},br.prototype.addEventListener=br.prototype.on,br.prototype.off=function(t,e){q(this,t,e)},br.prototype.removeEventListener=br.prototype.off,br.prototype.one=function(t,e){var r=this.addEventListener;this.addEventListener=function(){},$(this,t,e),this.addEventListener=r},br.prototype.trigger=function(t){var e=t.type||t;"string"==typeof t&&(t={type:e}),t=U(t),this.allowedEvents_[e]&&this["on"+e]&&this["on"+e](t),K(this,t)},br.prototype.dispatchEvent=br.prototype.trigger;var Tr=function(t){return t instanceof br||!!t.eventBusEl_&&["on","one","off","trigger"].every(function(e){return"function"==typeof t[e]})},Cr=function(t){return"string"==typeof t&&/\S/.test(t)||Array.isArray(t)&&!!t.length},kr=function(t){if(!t.nodeName&&!Tr(t))throw new Error("Invalid target; must be a DOM node or evented object.")},Er=function(t){if(!Cr(t))throw new Error("Invalid event type; must be a non-empty string or array.")},wr=function(t){if("function"!=typeof t)throw new Error("Invalid listener; must be a function.")},Sr=function(t,e){var r=e.length<3||e[0]===t||e[0]===t.eventBusEl_,n=void 0,i=void 0,o=void 0;return r?(n=t.eventBusEl_,e.length>=3&&e.shift(),i=e[0],o=e[1]):(n=e[0],i=e[1],o=e[2]),kr(n),Er(i),wr(o),o=gr(t,o),{isTargetingSelf:r,target:n,type:i,listener:o}},xr=function(t,e,r,n){kr(t),t.nodeName?hr[e](t,r,n):t[e](r,n)},jr={on:function(){for(var t=this,e=arguments.length,r=Array(e),n=0;n<e;n++)r[n]=arguments[n];var i=Sr(this,r),o=i.isTargetingSelf,s=i.target,a=i.type,l=i.listener;if(xr(s,"on",a,l),!o){var c=function(){return t.off(s,a,l)};c.guid=l.guid;var u=function(){return t.off("dispose",c)};u.guid=l.guid,xr(this,"on","dispose",c),xr(s,"on","dispose",u)}},one:function(){for(var t=this,e=arguments.length,r=Array(e),n=0;n<e;n++)r[n]=arguments[n];var i=Sr(this,r),o=i.isTargetingSelf,s=i.target,a=i.type,l=i.listener;if(o)xr(s,"one",a,l);else{var c=function e(){for(var r=arguments.length,n=Array(r),i=0;i<r;i++)n[i]=arguments[i];t.off(s,a,e),l.apply(null,n)};c.guid=l.guid,xr(s,"one",a,c)}},off:function(t,e,r){if(!t||Cr(t))q(this.eventBusEl_,t,e);else{var n=t,i=e;kr(n),Er(i),wr(r),r=gr(this,r),this.off("dispose",r),n.nodeName?(q(n,i,r),q(n,"dispose",r)):Tr(n)&&(n.off(i,r),n.off("dispose",r))}},trigger:function(t,e){return K(this.eventBusEl_,t,e)}},Ar={state:{},setState:function(t){var r=this;"function"==typeof t&&(t=t());var n=void 0;return e(t,function(t,e){r.state[e]!==t&&(n=n||{},n[e]={from:r.state[e],to:t}),r.state[e]=t}),n&&Tr(this)&&this.trigger({changes:n,type:"statechanged"}),n}},Pr=function(){function t(e,r,n){if(Ue(this,t),!e&&this.play?this.player_=e=this:this.player_=e,this.options_=tt({},this.options_),r=this.options_=tt(this.options_,r),this.id_=r.id||r.el&&r.el.id,!this.id_){var i=e&&e.id&&e.id()||"no_player";this.id_=i+"_component_"+B()}this.name_=r.name||null,r.el?this.el_=r.el:!1!==r.createEl&&(this.el_=this.createEl()),!1!==r.evented&&G(this,{eventBusKey:this.el_?"el_":null}),J(this,this.constructor.defaultState),this.children_=[],this.childIndex_={},this.childNameIndex_={},!1!==r.initChildren&&this.initChildren(),this.ready(n),!1!==r.reportTouchActivity&&this.enableTouchActivity()}return t.prototype.dispose=function(){if(this.trigger({type:"dispose",bubbles:!1}),this.children_)for(var t=this.children_.length-1;t>=0;t--)this.children_[t].dispose&&this.children_[t].dispose();this.children_=null,this.childIndex_=null,this.childNameIndex_=null,this.el_&&(this.el_.parentNode&&this.el_.parentNode.removeChild(this.el_),V(this.el_),this.el_=null),this.player_=null},t.prototype.player=function(){return this.player_},t.prototype.options=function(t){return tr.warn("this.options() has been deprecated and will be moved to the constructor in 6.0"),t?(this.options_=tt(this.options_,t),this.options_):this.options_},t.prototype.el=function(){return this.el_},t.prototype.createEl=function(t,e,r){return v(t,e,r)},t.prototype.localize=function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t,n=this.player_.language&&this.player_.language(),i=this.player_.languages&&this.player_.languages(),o=i&&i[n],s=n&&n.split("-")[0],a=i&&i[s],l=r;return o&&o[t]?l=o[t]:a&&a[t]&&(l=a[t]),e&&(l=l.replace(/\{(\d+)\}/g,function(t,r){var n=e[r-1],i=n;return void 0===n&&(i=t),i})),l},t.prototype.contentEl=function(){return this.contentEl_||this.el_},t.prototype.id=function(){return this.id_},t.prototype.name=function(){return this.name_},t.prototype.children=function(){return this.children_},t.prototype.getChildById=function(t){return this.childIndex_[t]},t.prototype.getChild=function(t){if(t)return t=Q(t),this.childNameIndex_[t]},t.prototype.addChild=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.children_.length,i=void 0,o=void 0;if("string"==typeof e){o=Q(e);var s=r.componentClass||o;r.name=o;var a=t.getComponent(s);if(!a)throw new Error("Component "+s+" does not exist");if("function"!=typeof a)return null;i=new a(this.player_||this,r)}else i=e;if(this.children_.splice(n,0,i),"function"==typeof i.id&&(this.childIndex_[i.id()]=i),o=o||i.name&&Q(i.name()),o&&(this.childNameIndex_[o]=i),"function"==typeof i.el&&i.el()){var l=this.contentEl().children,c=l[n]||null;this.contentEl().insertBefore(i.el(),c)}return i},t.prototype.removeChild=function(t){if("string"==typeof t&&(t=this.getChild(t)),t&&this.children_){for(var e=!1,r=this.children_.length-1;r>=0;r--)if(this.children_[r]===t){e=!0,this.children_.splice(r,1);break}if(e){this.childIndex_[t.id()]=null,this.childNameIndex_[t.name()]=null;var n=t.el();n&&n.parentNode===this.contentEl()&&this.contentEl().removeChild(t.el())}}},t.prototype.initChildren=function(){var e=this,r=this.options_.children;if(r){var n=this.options_,i=function(t){var r=t.name,i=t.opts;if(void 0!==n[r]&&(i=n[r]),!1!==i){!0===i&&(i={}),i.playerOptions=e.options_.playerOptions;var o=e.addChild(r,i);o&&(e[r]=o)}},o=void 0,s=t.getComponent("Tech");o=Array.isArray(r)?r:Object.keys(r),o.concat(Object.keys(this.options_).filter(function(t){return!o.some(function(e){return"string"==typeof e?t===e:t===e.name})})).map(function(t){var n=void 0,i=void 0;return"string"==typeof t?(n=t,i=r[n]||e.options_[n]||{}):(n=t.name,i=t),{name:n,opts:i}}).filter(function(e){var r=t.getComponent(e.opts.componentClass||Q(e.name));return r&&!s.isTech(r)}).forEach(i)}},t.prototype.buildCSSClass=function(){return""},t.prototype.ready=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(t)return this.isReady_?void(e?t.call(this):this.setTimeout(t,1)):(this.readyQueue_=this.readyQueue_||[],void this.readyQueue_.push(t))},t.prototype.triggerReady=function(){this.isReady_=!0,this.setTimeout(function(){var t=this.readyQueue_;this.readyQueue_=[],t&&t.length>0&&t.forEach(function(t){t.call(this)},this),this.trigger("ready")},1)},t.prototype.$=function(t,e){return nr(t,e||this.contentEl())},t.prototype.$$=function(t,e){return ir(t,e||this.contentEl())},t.prototype.hasClass=function(t){return m(this.el_,t)},t.prototype.addClass=function(t){_(this.el_,t)},t.prototype.removeClass=function(t){b(this.el_,t)},t.prototype.toggleClass=function(t,e){T(this.el_,t,e)},t.prototype.show=function(){this.removeClass("vjs-hidden")},t.prototype.hide=function(){this.addClass("vjs-hidden")},t.prototype.lockShowing=function(){this.addClass("vjs-lock-showing")},t.prototype.unlockShowing=function(){this.removeClass("vjs-lock-showing")},t.prototype.getAttribute=function(t){return E(this.el_,t)},t.prototype.setAttribute=function(t,e){w(this.el_,t,e)},t.prototype.removeAttribute=function(t){S(this.el_,t)},t.prototype.width=function(t,e){return this.dimension("width",t,e)},t.prototype.height=function(t,e){return this.dimension("height",t,e)},t.prototype.dimensions=function(t,e){this.width(t,!0),this.height(e)},t.prototype.dimension=function(t,e,r){if(void 0!==e)return null!==e&&e===e||(e=0),-1!==(""+e).indexOf("%")||-1!==(""+e).indexOf("px")?this.el_.style[t]=e:this.el_.style[t]="auto"===e?"":e+"px",void(r||this.trigger("componentresize"));if(!this.el_)return 0;var n=this.el_.style[t],i=n.indexOf("px");return-1!==i?parseInt(n.slice(0,i),10):parseInt(this.el_["offset"+Q(t)],10)},t.prototype.currentDimension=function(t){var e=0;if("width"!==t&&"height"!==t)throw new Error("currentDimension only accepts width or height value");if("function"==typeof fe.getComputedStyle){var r=fe.getComputedStyle(this.el_);e=r.getPropertyValue(t)||r[t]}if(0===(e=parseFloat(e))){var n="offset"+Q(t);e=this.el_[n]}return e},t.prototype.currentDimensions=function(){return{width:this.currentDimension("width"),height:this.currentDimension("height")}},t.prototype.currentWidth=function(){return this.currentDimension("width")},t.prototype.currentHeight=function(){return this.currentDimension("height")},t.prototype.focus=function(){this.el_.focus()},t.prototype.blur=function(){this.el_.blur()},t.prototype.emitTapEvents=function(){var t=0,e=null,r=void 0;this.on("touchstart",function(n){1===n.touches.length&&(e={pageX:n.touches[0].pageX,pageY:n.touches[0].pageY},t=(new Date).getTime(),r=!0)}),this.on("touchmove",function(t){if(t.touches.length>1)r=!1;else if(e){var n=t.touches[0].pageX-e.pageX,i=t.touches[0].pageY-e.pageY,o=Math.sqrt(n*n+i*i);o>10&&(r=!1)}});var n=function(){r=!1};this.on("touchleave",n),this.on("touchcancel",n),this.on("touchend",function(n){if(e=null,!0===r){(new Date).getTime()-t<200&&(n.preventDefault(),this.trigger("tap"))}})},t.prototype.enableTouchActivity=function(){if(this.player()&&this.player().reportUserActivity){var t=gr(this.player(),this.player().reportUserActivity),e=void 0;this.on("touchstart",function(){t(),this.clearInterval(e),e=this.setInterval(t,250)});var r=function(r){t(),this.clearInterval(e)};this.on("touchmove",t),this.on("touchend",r),this.on("touchcancel",r)}},t.prototype.setTimeout=function(t,e){var r=this;t=gr(this,t);var n=fe.setTimeout(t,e),i=function(){return r.clearTimeout(n)};return i.guid="vjs-timeout-"+n,this.on("dispose",i),n},t.prototype.clearTimeout=function(t){fe.clearTimeout(t);var e=function(){};return e.guid="vjs-timeout-"+t,this.off("dispose",e),t},t.prototype.setInterval=function(t,e){var r=this;t=gr(this,t);var n=fe.setInterval(t,e),i=function(){return r.clearInterval(n)};return i.guid="vjs-interval-"+n,this.on("dispose",i),n},t.prototype.clearInterval=function(t){fe.clearInterval(t);var e=function(){};return e.guid="vjs-interval-"+t,this.off("dispose",e),t},t.prototype.requestAnimationFrame=function(t){var e=this;if(this.supportsRaf_){t=gr(this,t);var r=fe.requestAnimationFrame(t),n=function(){return e.cancelAnimationFrame(r)};return n.guid="vjs-raf-"+r,this.on("dispose",n),r}return this.setTimeout(t,1e3/60)},t.prototype.cancelAnimationFrame=function(t){if(this.supportsRaf_){fe.cancelAnimationFrame(t);var e=function(){};return e.guid="vjs-raf-"+t,this.off("dispose",e),t}return this.clearTimeout(t)},t.registerComponent=function(e,r){if("string"!=typeof e||!e)throw new Error('Illegal component name, "'+e+'"; must be a non-empty string.');var n=t.getComponent("Tech"),i=n&&n.isTech(r),o=t===r||t.prototype.isPrototypeOf(r.prototype);if(i||!o){var s=void 0;throw s=i?"techs must be registered using Tech.registerTech()":"must be a Component subclass",new Error('Illegal component, "'+e+'"; '+s+".")}e=Q(e),t.components_||(t.components_={});var a=t.getComponent("Player");if("Player"===e&&a&&a.players){var l=a.players,c=Object.keys(l);if(l&&c.length>0&&c.map(function(t){return l[t]}).every(Boolean))throw new Error("Can not register Player component after player has been created.")}return t.components_[e]=r,r},t.getComponent=function(e){if(e)return e=Q(e),t.components_&&t.components_[e]?t.components_[e]:void 0},t}();Pr.prototype.supportsRaf_="function"==typeof fe.requestAnimationFrame&&"function"==typeof fe.cancelAnimationFrame,Pr.registerComponent("Component",Pr);for(var Or={},Mr=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],Nr=Mr[0],Ir=void 0,Lr=0;Lr<Mr.length;Lr++)if(Mr[Lr][1]in _e){Ir=Mr[Lr];break}if(Ir)for(var Rr=0;Rr<Ir.length;Rr++)Or[Nr[Rr]]=Ir[Rr];st.prototype.code=0,st.prototype.message="",st.prototype.status=null,st.errorTypes=["MEDIA_ERR_CUSTOM","MEDIA_ERR_ABORTED","MEDIA_ERR_NETWORK","MEDIA_ERR_DECODE","MEDIA_ERR_SRC_NOT_SUPPORTED","MEDIA_ERR_ENCRYPTED"],st.defaultMessages={1:"You aborted the media playback",2:"A network error caused the media download to fail part-way.",3:"The media playback was aborted due to a corruption problem or because the media used features your browser did not support.",4:"The media could not be loaded, either because the server or network failed or because the format is not supported.",5:"The media is encrypted and we do not have the keys to decrypt it."};for(var Dr=0;Dr<st.errorTypes.length;Dr++)st[st.errorTypes[Dr]]=Dr,st.prototype[st.errorTypes[Dr]]=Dr;var Br=at,Fr=function(t){return["kind","label","language","id","inBandMetadataTrackDispatchType","mode","src"].reduce(function(e,r,n){return t[r]&&(e[r]=t[r]),e},{cues:t.cues&&Array.prototype.map.call(t.cues,function(t){return{startTime:t.startTime,endTime:t.endTime,text:t.text,id:t.id}})})},Hr=function(t){var e=t.$$("track"),r=Array.prototype.map.call(e,function(t){return t.track});return Array.prototype.map.call(e,function(t){var e=Fr(t.track);return t.src&&(e.src=t.src),e}).concat(Array.prototype.filter.call(t.textTracks(),function(t){return-1===r.indexOf(t)}).map(Fr))},Vr=function(t,e){return t.forEach(function(t){var r=e.addRemoteTextTrack(t).track;!t.src&&t.cues&&t.cues.forEach(function(t){return r.addCue(t)})}),e.textTracks()},zr={textTracksToJson:Hr,jsonToTextTracks:Vr,trackToJson_:Fr},Wr="vjs-modal-dialog",Ur=function(t){function e(r,n){Ue(this,e);var i=qe(this,t.call(this,r,n));return i.opened_=i.hasBeenOpened_=i.hasBeenFilled_=!1,i.closeable(!i.options_.uncloseable),i.content(i.options_.content),i.contentEl_=v("div",{className:Wr+"-content"},{role:"document"}),i.descEl_=v("p",{className:Wr+"-description vjs-control-text",id:i.el().getAttribute("aria-describedby")}),y(i.descEl_,i.description()),i.el_.appendChild(i.descEl_),i.el_.appendChild(i.contentEl_),i}return Xe(e,t),e.prototype.createEl=function(){return t.prototype.createEl.call(this,"div",{className:this.buildCSSClass(),tabIndex:-1},{"aria-describedby":this.id()+"_description","aria-hidden":"true","aria-label":this.label(),role:"dialog"})},e.prototype.dispose=function(){this.contentEl_=null,this.descEl_=null,this.previouslyActiveEl_=null,t.prototype.dispose.call(this)},e.prototype.buildCSSClass=function(){return Wr+" vjs-hidden "+t.prototype.buildCSSClass.call(this)},e.prototype.handleKeyPress=function(t){27===t.which&&this.closeable()&&this.close()},e.prototype.label=function(){return this.localize(this.options_.label||"Modal Window")},e.prototype.description=function(){var t=this.options_.description||this.localize("This is a modal window.");return this.closeable()&&(t+=" "+this.localize("This modal can be closed by pressing the Escape key or activating the close button.")),t},e.prototype.open=function(){if(!this.opened_){var t=this.player();this.trigger("beforemodalopen"),this.opened_=!0,(this.options_.fillAlways||!this.hasBeenOpened_&&!this.hasBeenFilled_)&&this.fill(),this.wasPlaying_=!t.paused(),this.options_.pauseOnOpen&&this.wasPlaying_&&t.pause(),this.closeable()&&this.on(this.el_.ownerDocument,"keydown",gr(this,this.handleKeyPress)),this.hadControls_=t.controls(),t.controls(!1),this.show(),this.conditionalFocus_(),this.el().setAttribute("aria-hidden","false"),this.trigger("modalopen"),this.hasBeenOpened_=!0}},e.prototype.opened=function(t){return"boolean"==typeof t&&this[t?"open":"close"](),this.opened_},e.prototype.close=function(){if(this.opened_){var t=this.player();this.trigger("beforemodalclose"),this.opened_=!1,this.wasPlaying_&&this.options_.pauseOnOpen&&t.play(),this.closeable()&&this.off(this.el_.ownerDocument,"keydown",gr(this,this.handleKeyPress)),this.hadControls_&&t.controls(!0),this.hide(),this.el().setAttribute("aria-hidden","true"),this.trigger("modalclose"),this.conditionalBlur_(),this.options_.temporary&&this.dispose()}},e.prototype.closeable=function(t){if("boolean"==typeof t){var e=this.closeable_=!!t,r=this.getChild("closeButton");if(e&&!r){var n=this.contentEl_;this.contentEl_=this.el_,r=this.addChild("closeButton",{controlText:"Close Modal Dialog"}),this.contentEl_=n,this.on(r,"close",this.close)}!e&&r&&(this.off(r,"close",this.close),this.removeChild(r),r.dispose())}return this.closeable_},e.prototype.fill=function(){this.fillWith(this.content())},e.prototype.fillWith=function(t){var e=this.contentEl(),r=e.parentNode,n=e.nextSibling;this.trigger("beforemodalfill"),this.hasBeenFilled_=!0,r.removeChild(e),this.empty(),R(e,t),this.trigger("modalfill"),n?r.insertBefore(e,n):r.appendChild(e);var i=this.getChild("closeButton");i&&r.appendChild(i.el_)},e.prototype.empty=function(){this.trigger("beforemodalempty"),N(this.contentEl()),this.trigger("modalempty")},e.prototype.content=function(t){return void 0!==t&&(this.content_=t),this.content_},e.prototype.conditionalFocus_=function(){var t=_e.activeElement,e=this.player_.el_;this.previouslyActiveEl_=null,(e.contains(t)||e===t)&&(this.previouslyActiveEl_=t,this.focus(),this.on(_e,"keydown",this.handleKeyDown))},e.prototype.conditionalBlur_=function(){this.previouslyActiveEl_&&(this.previouslyActiveEl_.focus(),this.previouslyActiveEl_=null),this.off(_e,"keydown",this.handleKeyDown)},e.prototype.handleKeyDown=function(t){if(9===t.which){for(var e=this.focusableEls_(),r=this.el_.querySelector(":focus"),n=void 0,i=0;i<e.length;i++)if(r===e[i]){n=i;break}_e.activeElement===this.el_&&(n=0),t.shiftKey&&0===n?(e[e.length-1].focus(),t.preventDefault()):t.shiftKey||n!==e.length-1||(e[0].focus(),t.preventDefault())}},e.prototype.focusableEls_=function(){var t=this.el_.querySelectorAll("*");return Array.prototype.filter.call(t,function(t){return(t instanceof fe.HTMLAnchorElement||t instanceof fe.HTMLAreaElement)&&t.hasAttribute("href")||(t instanceof fe.HTMLInputElement||t instanceof fe.HTMLSelectElement||t instanceof fe.HTMLTextAreaElement||t instanceof fe.HTMLButtonElement)&&!t.hasAttribute("disabled")||t instanceof fe.HTMLIFrameElement||t instanceof fe.HTMLObjectElement||t instanceof fe.HTMLEmbedElement||t.hasAttribute("tabindex")&&-1!==t.getAttribute("tabindex")||t.hasAttribute("contenteditable")})},e}(Pr);Ur.prototype.options_={pauseOnOpen:!0,temporary:!0},Pr.registerComponent("ModalDialog",Ur);var Xr=function(t){function e(){var r,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;Ue(this,e);var o=qe(this,t.call(this));if(!i&&(i=o,Re)){i=_e.createElement("custom");for(var s in e.prototype)"constructor"!==s&&(i[s]=e.prototype[s])}i.tracks_=[],Object.defineProperty(i,"length",{get:function(){return this.tracks_.length}});for(var a=0;a<n.length;a++)i.addTrack(n[a]);return r=i,qe(o,r)}return Xe(e,t),e.prototype.addTrack=function(t){var e=this.tracks_.length;""+e in this||Object.defineProperty(this,e,{get:function(){return this.tracks_[e]}}),-1===this.tracks_.indexOf(t)&&(this.tracks_.push(t),this.trigger({track:t,type:"addtrack"}))},e.prototype.removeTrack=function(t){for(var e=void 0,r=0,n=this.length;r<n;r++)if(this[r]===t){e=this[r],e.off&&e.off(),this.tracks_.splice(r,1);break}e&&this.trigger({track:e,type:"removetrack"})},e.prototype.getTrackById=function(t){for(var e=null,r=0,n=this.length;r<n;r++){var i=this[r];if(i.id===t){e=i;break}}return e},e}(br);Xr.prototype.allowedEvents_={change:"change",addtrack:"addtrack",removetrack:"removetrack"};for(var qr in Xr.prototype.allowedEvents_)Xr.prototype["on"+qr]=null;var Kr=function(t,e){for(var r=0;r<t.length;r++)Object.keys(t[r]).length&&e.id!==t[r].id&&(t[r].enabled=!1)},$r=function(t){function e(){var r,n,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];Ue(this,e);for(var o=void 0,s=i.length-1;s>=0;s--)if(i[s].enabled){Kr(i,i[s]);break}if(Re){o=_e.createElement("custom");for(var a in Xr.prototype)"constructor"!==a&&(o[a]=Xr.prototype[a]);for(var l in e.prototype)"constructor"!==l&&(o[l]=e.prototype[l])}return o=r=qe(this,t.call(this,i,o)),o.changing_=!1,n=o,qe(r,n)}return Xe(e,t),e.prototype.addTrack=function(e){var r=this;e.enabled&&Kr(this,e),t.prototype.addTrack.call(this,e),e.addEventListener&&e.addEventListener("enabledchange",function(){r.changing_||(r.changing_=!0,Kr(r,e),r.changing_=!1,r.trigger("change"))})},e}(Xr),Yr=function(t,e){for(var r=0;r<t.length;r++)Object.keys(t[r]).length&&e.id!==t[r].id&&(t[r].selected=!1)},Gr=function(t){function e(){var r,n,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];Ue(this,e);for(var o=void 0,s=i.length-1;s>=0;s--)if(i[s].selected){Yr(i,i[s]);break}if(Re){o=_e.createElement("custom");for(var a in Xr.prototype)"constructor"!==a&&(o[a]=Xr.prototype[a]);for(var l in e.prototype)"constructor"!==l&&(o[l]=e.prototype[l])}return o=r=qe(this,t.call(this,i,o)),o.changing_=!1,Object.defineProperty(o,"selectedIndex",{get:function(){for(var t=0;t<this.length;t++)if(this[t].selected)return t;return-1},set:function(){}}),n=o,qe(r,n)}return Xe(e,t),e.prototype.addTrack=function(e){var r=this;e.selected&&Yr(this,e),t.prototype.addTrack.call(this,e),e.addEventListener&&e.addEventListener("selectedchange",function(){r.changing_||(r.changing_=!0,Yr(r,e),r.changing_=!1,r.trigger("change"))})},e}(Xr),Jr=function(t){function e(){var r,n,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];Ue(this,e);var o=void 0;if(Re){o=_e.createElement("custom");for(var s in Xr.prototype)"constructor"!==s&&(o[s]=Xr.prototype[s]);for(var a in e.prototype)"constructor"!==a&&(o[a]=e.prototype[a])}return o=r=qe(this,t.call(this,i,o)),n=o,qe(r,n)}return Xe(e,t),e.prototype.addTrack=function(e){t.prototype.addTrack.call(this,e),e.addEventListener("modechange",gr(this,function(){this.trigger("change")})),-1===["metadata","chapters"].indexOf(e.kind)&&e.addEventListener("modechange",gr(this,function(){this.trigger("selectedlanguagechange")}))},e}(Xr),Qr=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];Ue(this,t);var r=this;if(Re){r=_e.createElement("custom");for(var n in t.prototype)"constructor"!==n&&(r[n]=t.prototype[n])}r.trackElements_=[],Object.defineProperty(r,"length",{get:function(){return this.trackElements_.length}});for(var i=0,o=e.length;i<o;i++)r.addTrackElement_(e[i]);if(Re)return r}return t.prototype.addTrackElement_=function(t){var e=this.trackElements_.length;""+e in this||Object.defineProperty(this,e,{get:function(){return this.trackElements_[e]}}),-1===this.trackElements_.indexOf(t)&&this.trackElements_.push(t)},t.prototype.getTrackElementByTrack_=function(t){for(var e=void 0,r=0,n=this.trackElements_.length;r<n;r++)if(t===this.trackElements_[r].track){e=this.trackElements_[r];break}return e},t.prototype.removeTrackElement_=function(t){for(var e=0,r=this.trackElements_.length;e<r;e++)if(t===this.trackElements_[e]){this.trackElements_.splice(e,1);break}},t}(),Zr=function(){function t(e){Ue(this,t);var r=this;if(Re){r=_e.createElement("custom");for(var n in t.prototype)"constructor"!==n&&(r[n]=t.prototype[n])}if(t.prototype.setCues_.call(r,e),Object.defineProperty(r,"length",{get:function(){return this.length_}}),Re)return r}return t.prototype.setCues_=function(t){var e=this.length||0,r=0,n=t.length;this.cues_=t,this.length_=t.length;var i=function(t){""+t in this||Object.defineProperty(this,""+t,{get:function(){return this.cues_[t]}})};if(e<n)for(r=e;r<n;r++)i.call(this,r)},t.prototype.getCueById=function(t){for(var e=null,r=0,n=this.length;r<n;r++){var i=this[r];if(i.id===t){e=i;break}}return e},t}(),tn={alternative:"alternative",captions:"captions",main:"main",sign:"sign",subtitles:"subtitles",commentary:"commentary"},en={alternative:"alternative",descriptions:"descriptions",main:"main","main-desc":"main-desc",translation:"translation",commentary:"commentary"},rn={subtitles:"subtitles",captions:"captions",descriptions:"descriptions",chapters:"chapters",metadata:"metadata"},nn={disabled:"disabled",hidden:"hidden",showing:"showing"},on=function(t){function e(){var r,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Ue(this,e);var i=qe(this,t.call(this)),o=i;if(Re){o=_e.createElement("custom");for(var s in e.prototype)"constructor"!==s&&(o[s]=e.prototype[s])}var a={id:n.id||"vjs_track_"+B(),kind:n.kind||"",label:n.label||"",language:n.language||""};for(var l in a)!function(t){Object.defineProperty(o,t,{get:function(){return a[t]},set:function(){}})}(l);return r=o,qe(i,r)}return Xe(e,t),e}(br),sn=function(t){var e=["protocol","hostname","port","pathname","search","hash","host"],r=_e.createElement("a");r.href=t;var n=""===r.host&&"file:"!==r.protocol,i=void 0;n&&(i=_e.createElement("div"),i.innerHTML='<a href="'+t+'"></a>',r=i.firstChild,i.setAttribute("style","display:none; position:absolute;"),_e.body.appendChild(i));for(var o={},s=0;s<e.length;s++)o[e[s]]=r[e[s]];return"http:"===o.protocol&&(o.host=o.host.replace(/:80$/,"")),"https:"===o.protocol&&(o.host=o.host.replace(/:443$/,"")),o.protocol||(o.protocol=fe.location.protocol),n&&_e.body.removeChild(i),o},an=function(t){if(!t.match(/^https?:\/\//)){var e=_e.createElement("div");e.innerHTML='<a href="'+t+'">x</a>',t=e.firstChild.href}return t},ln=function(t){if("string"==typeof t){var e=/^(\/?)([\s\S]*?)((?:\.{1,2}|[^\/]+?)(\.([^\.\/\?]+)))(?:[\/]*|[\?].*)$/i,r=e.exec(t);if(r)return r.pop().toLowerCase()}return""},cn=function(t){var e=fe.location,r=sn(t);return(":"===r.protocol?e.protocol:r.protocol)+r.host!==e.protocol+e.host},un=(Object.freeze||Object)({parseUrl:sn,getAbsoluteURL:an,getFileExtension:ln,isCrossOrigin:cn}),hn=ut,pn=Object.prototype.toString,dn=t(function(t,e){function r(t){return t.replace(/^\s*|\s*$/g,"")}e=t.exports=r,e.left=function(t){return t.replace(/^\s*/,"")},e.right=function(t){return t.replace(/\s*$/,"")}}),fn=ht,vn=Object.prototype.toString,yn=Object.prototype.hasOwnProperty,gn=function(t){return"[object Array]"===Object.prototype.toString.call(t)},mn=function(t){if(!t)return{};var e={};return fn(dn(t).split("\n"),function(t){var r=t.indexOf(":"),n=dn(t.slice(0,r)).toLowerCase(),i=dn(t.slice(r+1));void 0===e[n]?e[n]=i:gn(e[n])?e[n].push(i):e[n]=[e[n],i]}),e},_n=vt,bn=Object.prototype.hasOwnProperty,Tn=mt;mt.XMLHttpRequest=fe.XMLHttpRequest||Tt,mt.XDomainRequest="withCredentials"in new mt.XMLHttpRequest?mt.XMLHttpRequest:fe.XDomainRequest,function(t,e){for(var r=0;r<t.length;r++)e(t[r])}(["get","put","post","patch","head","delete"],function(t){mt["delete"===t?"del":t]=function(e,r,n){return r=gt(e,r,n),r.method=t.toUpperCase(),_t(r)}});var Cn=function(t,e){var r=new fe.WebVTT.Parser(fe,fe.vttjs,fe.WebVTT.StringDecoder()),n=[];r.oncue=function(t){e.addCue(t)},r.onparsingerror=function(t){n.push(t)},r.onflush=function(){e.trigger({type:"loadeddata",target:e})},r.parse(t),n.length>0&&(fe.console&&fe.console.groupCollapsed&&fe.console.groupCollapsed("Text Track parsing errors for "+e.src),n.forEach(function(t){return tr.error(t)}),fe.console&&fe.console.groupEnd&&fe.console.groupEnd()),r.flush()},kn=function(t,e){var r={uri:t},n=cn(t);n&&(r.cors=n),Tn(r,gr(this,function(t,r,n){if(t)return tr.error(t,r);if(e.loaded_=!0,"function"!=typeof fe.WebVTT){if(e.tech_){var i=function(){return Cn(n,e)};e.tech_.on("vttjsloaded",i),e.tech_.on("vttjserror",function(){tr.error("vttjs failed to load, stopping trying to process "+e.src),e.tech_.off("vttjsloaded",i)})}}else Cn(n,e)}))},En=function(t){function e(){var r,n,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(Ue(this,e),!i.tech)throw new Error("A tech was not provided.");var o=tt(i,{kind:rn[i.kind]||"subtitles",language:i.language||i.srclang||""}),s=nn[o.mode]||"disabled",a=o.default;"metadata"!==o.kind&&"chapters"!==o.kind||(s="hidden");var l=r=qe(this,t.call(this,o));if(l.tech_=o.tech,Re)for(var c in e.prototype)"constructor"!==c&&(l[c]=e.prototype[c]);l.cues_=[],l.activeCues_=[];var u=new Zr(l.cues_),h=new Zr(l.activeCues_),p=!1,d=gr(l,function(){this.activeCues,p&&(this.trigger("cuechange"),p=!1)});return"disabled"!==s&&l.tech_.ready(function(){l.tech_.on("timeupdate",d)},!0),Object.defineProperty(l,"default",{get:function(){return a},set:function(){}}),Object.defineProperty(l,"mode",{get:function(){return s},set:function(t){var e=this;nn[t]&&(s=t,"showing"===s&&this.tech_.ready(function(){e.tech_.on("timeupdate",d)},!0),this.trigger("modechange"))}}),Object.defineProperty(l,"cues",{get:function(){return this.loaded_?u:null},set:function(){}}),Object.defineProperty(l,"activeCues",{get:function(){if(!this.loaded_)return null;if(0===this.cues.length)return h;for(var t=this.tech_.currentTime(),e=[],r=0,n=this.cues.length;r<n;r++){var i=this.cues[r];i.startTime<=t&&i.endTime>=t?e.push(i):i.startTime===i.endTime&&i.startTime<=t&&i.startTime+.5>=t&&e.push(i)}if(p=!1,e.length!==this.activeCues_.length)p=!0;else for(var o=0;o<e.length;o++)-1===this.activeCues_.indexOf(e[o])&&(p=!0);return this.activeCues_=e,h.setCues_(this.activeCues_),h},set:function(){}}),o.src?(l.src=o.src,kn(o.src,l)):l.loaded_=!0,n=l,qe(r,n)}return Xe(e,t),e.prototype.addCue=function(t){var e=t;if(fe.vttjs&&!(t instanceof fe.vttjs.VTTCue)){e=new fe.vttjs.VTTCue(t.startTime,t.endTime,t.text)
;for(var r in t)r in e||(e[r]=t[r]);e.id=t.id,e.originalCue_=t}for(var n=this.tech_.textTracks(),i=0;i<n.length;i++)n[i]!==this&&n[i].removeCue(e);this.cues_.push(e),this.cues.setCues_(this.cues_)},e.prototype.removeCue=function(t){for(var e=this.cues_.length;e--;){var r=this.cues_[e];if(r===t||r.originalCue_&&r.originalCue_===t){this.cues_.splice(e,1),this.cues.setCues_(this.cues_);break}}},e}(on);En.prototype.allowedEvents_={cuechange:"cuechange"};var wn=function(t){function e(){var r,n,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Ue(this,e);var o=tt(i,{kind:en[i.kind]||""}),s=r=qe(this,t.call(this,o)),a=!1;if(Re)for(var l in e.prototype)"constructor"!==l&&(s[l]=e.prototype[l]);return Object.defineProperty(s,"enabled",{get:function(){return a},set:function(t){"boolean"==typeof t&&t!==a&&(a=t,this.trigger("enabledchange"))}}),o.enabled&&(s.enabled=o.enabled),s.loaded_=!0,n=s,qe(r,n)}return Xe(e,t),e}(on),Sn=function(t){function e(){var r,n,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Ue(this,e);var o=tt(i,{kind:tn[i.kind]||""}),s=r=qe(this,t.call(this,o)),a=!1;if(Re)for(var l in e.prototype)"constructor"!==l&&(s[l]=e.prototype[l]);return Object.defineProperty(s,"selected",{get:function(){return a},set:function(t){"boolean"==typeof t&&t!==a&&(a=t,this.trigger("selectedchange"))}}),o.selected&&(s.selected=o.selected),n=s,qe(r,n)}return Xe(e,t),e}(on),xn=0,jn=2,An=function(t){function e(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Ue(this,e);var n=qe(this,t.call(this)),i=void 0,o=n;if(Re){o=_e.createElement("custom");for(var s in e.prototype)"constructor"!==s&&(o[s]=e.prototype[s])}var a=new En(r);if(o.kind=a.kind,o.src=a.src,o.srclang=a.language,o.label=a.label,o.default=a.default,Object.defineProperty(o,"readyState",{get:function(){return i}}),Object.defineProperty(o,"track",{get:function(){return a}}),i=xn,a.addEventListener("loadeddata",function(){i=jn,o.trigger({type:"load",target:o})}),Re){var l;return l=o,qe(n,l)}return n}return Xe(e,t),e}(br);An.prototype.allowedEvents_={load:"load"},An.NONE=xn,An.LOADING=1,An.LOADED=jn,An.ERROR=3;var Pn={audio:{ListClass:$r,TrackClass:wn,capitalName:"Audio"},video:{ListClass:Gr,TrackClass:Sn,capitalName:"Video"},text:{ListClass:Jr,TrackClass:En,capitalName:"Text"}};Object.keys(Pn).forEach(function(t){Pn[t].getterName=t+"Tracks",Pn[t].privateName=t+"Tracks_"});var On={remoteText:{ListClass:Jr,TrackClass:En,capitalName:"RemoteText",getterName:"remoteTextTracks",privateName:"remoteTextTracks_"},remoteTextEl:{ListClass:Qr,TrackClass:An,capitalName:"RemoteTextTrackEls",getterName:"remoteTextTrackEls",privateName:"remoteTextTrackEls_"}},Mn=tt(Pn,On);On.names=Object.keys(On),Pn.names=Object.keys(Pn),Mn.names=[].concat(On.names).concat(Pn.names);var Nn=Object.create||function(){function t(){}return function(e){if(1!==arguments.length)throw new Error("Object.create shim only accepts one parameter.");return t.prototype=e,new t}}();Ct.prototype=Nn(Error.prototype),Ct.prototype.constructor=Ct,Ct.Errors={BadSignature:{code:0,message:"Malformed WebVTT signature."},BadTimeStamp:{code:1,message:"Malformed time stamp."}},Et.prototype={set:function(t,e){this.get(t)||""===e||(this.values[t]=e)},get:function(t,e,r){return r?this.has(t)?this.values[t]:e[r]:this.has(t)?this.values[t]:e},has:function(t){return t in this.values},alt:function(t,e,r){for(var n=0;n<r.length;++n)if(e===r[n]){this.set(t,e);break}},integer:function(t,e){/^-?\d+$/.test(e)&&this.set(t,parseInt(e,10))},percent:function(t,e){return!!(e.match(/^([\d]{1,3})(\.[\d]*)?%$/)&&(e=parseFloat(e))>=0&&e<=100)&&(this.set(t,e),!0)}};var In={"&amp;":"&","&lt;":"<","&gt;":">","&lrm;":"‎","&rlm;":"‏","&nbsp;":" "},Ln={c:"span",i:"i",b:"b",u:"u",ruby:"ruby",rt:"rt",v:"span",lang:"span"},Rn={v:"title",lang:"lang"},Dn={rt:"ruby"},Bn=[[1470,1470],[1472,1472],[1475,1475],[1478,1478],[1488,1514],[1520,1524],[1544,1544],[1547,1547],[1549,1549],[1563,1563],[1566,1610],[1645,1647],[1649,1749],[1765,1766],[1774,1775],[1786,1805],[1807,1808],[1810,1839],[1869,1957],[1969,1969],[1984,2026],[2036,2037],[2042,2042],[2048,2069],[2074,2074],[2084,2084],[2088,2088],[2096,2110],[2112,2136],[2142,2142],[2208,2208],[2210,2220],[8207,8207],[64285,64285],[64287,64296],[64298,64310],[64312,64316],[64318,64318],[64320,64321],[64323,64324],[64326,64449],[64467,64829],[64848,64911],[64914,64967],[65008,65020],[65136,65140],[65142,65276],[67584,67589],[67592,67592],[67594,67637],[67639,67640],[67644,67644],[67647,67669],[67671,67679],[67840,67867],[67872,67897],[67903,67903],[67968,68023],[68030,68031],[68096,68096],[68112,68115],[68117,68119],[68121,68147],[68160,68167],[68176,68184],[68192,68223],[68352,68405],[68416,68437],[68440,68466],[68472,68479],[68608,68680],[126464,126467],[126469,126495],[126497,126498],[126500,126500],[126503,126503],[126505,126514],[126516,126519],[126521,126521],[126523,126523],[126530,126530],[126535,126535],[126537,126537],[126539,126539],[126541,126543],[126545,126546],[126548,126548],[126551,126551],[126553,126553],[126555,126555],[126557,126557],[126559,126559],[126561,126562],[126564,126564],[126567,126570],[126572,126578],[126580,126583],[126585,126588],[126590,126590],[126592,126601],[126603,126619],[126625,126627],[126629,126633],[126635,126651],[1114109,1114109]];Ot.prototype.applyStyles=function(t,e){e=e||this.div;for(var r in t)t.hasOwnProperty(r)&&(e.style[r]=t[r])},Ot.prototype.formatStyle=function(t,e){return 0===t?0:t+e},Mt.prototype=Nn(Ot.prototype),Mt.prototype.constructor=Mt,Nt.prototype.move=function(t,e){switch(e=void 0!==e?e:this.lineHeight,t){case"+x":this.left+=e,this.right+=e;break;case"-x":this.left-=e,this.right-=e;break;case"+y":this.top+=e,this.bottom+=e;break;case"-y":this.top-=e,this.bottom-=e}},Nt.prototype.overlaps=function(t){return this.left<t.right&&this.right>t.left&&this.top<t.bottom&&this.bottom>t.top},Nt.prototype.overlapsAny=function(t){for(var e=0;e<t.length;e++)if(this.overlaps(t[e]))return!0;return!1},Nt.prototype.within=function(t){return this.top>=t.top&&this.bottom<=t.bottom&&this.left>=t.left&&this.right<=t.right},Nt.prototype.overlapsOppositeAxis=function(t,e){switch(e){case"+x":return this.left<t.left;case"-x":return this.right>t.right;case"+y":return this.top<t.top;case"-y":return this.bottom>t.bottom}},Nt.prototype.intersectPercentage=function(t){return Math.max(0,Math.min(this.right,t.right)-Math.max(this.left,t.left))*Math.max(0,Math.min(this.bottom,t.bottom)-Math.max(this.top,t.top))/(this.height*this.width)},Nt.prototype.toCSSCompatValues=function(t){return{top:this.top-t.top,bottom:t.bottom-this.bottom,left:this.left-t.left,right:t.right-this.right,height:this.height,width:this.width}},Nt.getSimpleBoxPosition=function(t){var e=t.div?t.div.offsetHeight:t.tagName?t.offsetHeight:0,r=t.div?t.div.offsetWidth:t.tagName?t.offsetWidth:0,n=t.div?t.div.offsetTop:t.tagName?t.offsetTop:0;return t=t.div?t.div.getBoundingClientRect():t.tagName?t.getBoundingClientRect():t,{left:t.left,right:t.right,top:t.top||n,height:t.height||e,bottom:t.bottom||n+(t.height||e),width:t.width||r}},Lt.StringDecoder=function(){return{decode:function(t){if(!t)return"";if("string"!=typeof t)throw new Error("Error - expected string data.");return decodeURIComponent(encodeURIComponent(t))}}},Lt.convertCueToDOMTree=function(t,e){return t&&e?xt(t,e):null};Lt.processCues=function(t,e,r){if(!t||!e||!r)return null;for(;r.firstChild;)r.removeChild(r.firstChild);var n=t.document.createElement("div");if(n.style.position="absolute",n.style.left="0",n.style.right="0",n.style.top="0",n.style.bottom="0",n.style.margin="1.5%",r.appendChild(n),function(t){for(var e=0;e<t.length;e++)if(t[e].hasBeenReset||!t[e].displayState)return!0;return!1}(e)){var i=[],o=Nt.getSimpleBoxPosition(n),s=Math.round(.05*o.height*100)/100,a={font:s+"px sans-serif"};!function(){for(var r,s,l=0;l<e.length;l++)s=e[l],r=new Mt(t,s,a),n.appendChild(r.div),It(t,r,o,i),s.displayState=r.div,i.push(Nt.getSimpleBoxPosition(r))}()}else for(var l=0;l<e.length;l++)n.appendChild(e[l].displayState)},Lt.Parser=function(t,e,r){r||(r=e,e={}),e||(e={}),this.window=t,this.vttjs=e,this.state="INITIAL",this.buffer="",this.decoder=r||new TextDecoder("utf8"),this.regionList=[]},Lt.Parser.prototype={reportOrThrowError:function(t){if(!(t instanceof Ct))throw t;this.onparsingerror&&this.onparsingerror(t)},parse:function(t){function e(){for(var t=i.buffer,e=0;e<t.length&&"\r"!==t[e]&&"\n"!==t[e];)++e;var r=t.substr(0,e);return"\r"===t[e]&&++e,"\n"===t[e]&&++e,i.buffer=t.substr(e),r}function r(t){var e=new Et;if(wt(t,function(t,r){switch(t){case"id":e.set(t,r);break;case"width":e.percent(t,r);break;case"lines":e.integer(t,r);break;case"regionanchor":case"viewportanchor":var n=r.split(",");if(2!==n.length)break;var i=new Et;if(i.percent("x",n[0]),i.percent("y",n[1]),!i.has("x")||!i.has("y"))break;e.set(t+"X",i.get("x")),e.set(t+"Y",i.get("y"));break;case"scroll":e.alt(t,r,["up"])}},/=/,/\s/),e.has("id")){var r=new(i.vttjs.VTTRegion||i.window.VTTRegion);r.width=e.get("width",100),r.lines=e.get("lines",3),r.regionAnchorX=e.get("regionanchorX",0),r.regionAnchorY=e.get("regionanchorY",100),r.viewportAnchorX=e.get("viewportanchorX",0),r.viewportAnchorY=e.get("viewportanchorY",100),r.scroll=e.get("scroll",""),i.onregion&&i.onregion(r),i.regionList.push({id:e.get("id"),region:r})}}function n(t){var e=new Et;wt(t,function(t,r){switch(t){case"MPEGT":e.integer(t+"S",r);break;case"LOCA":e.set(t+"L",kt(r))}},/[^\d]:/,/,/),i.ontimestampmap&&i.ontimestampmap({MPEGTS:e.get("MPEGTS"),LOCAL:e.get("LOCAL")})}var i=this;t&&(i.buffer+=i.decoder.decode(t,{stream:!0}));try{var o;if("INITIAL"===i.state){if(!/\r\n|\n/.test(i.buffer))return this;o=e();var s=o.match(/^WEBVTT([ \t].*)?$/);if(!s||!s[0])throw new Ct(Ct.Errors.BadSignature);i.state="HEADER"}for(var a=!1;i.buffer;){if(!/\r\n|\n/.test(i.buffer))return this;switch(a?a=!1:o=e(),i.state){case"HEADER":/:/.test(o)?function(t){t.match(/X-TIMESTAMP-MAP/)?wt(t,function(t,e){switch(t){case"X-TIMESTAMP-MAP":n(e)}},/=/):wt(t,function(t,e){switch(t){case"Region":r(e)}},/:/)}(o):o||(i.state="ID");continue;case"NOTE":o||(i.state="ID");continue;case"ID":if(/^NOTE($|[ \t])/.test(o)){i.state="NOTE";break}if(!o)continue;if(i.cue=new(i.vttjs.VTTCue||i.window.VTTCue)(0,0,""),i.state="CUE",-1===o.indexOf("--\x3e")){i.cue.id=o;continue}case"CUE":try{St(o,i.cue,i.regionList)}catch(t){i.reportOrThrowError(t),i.cue=null,i.state="BADCUE";continue}i.state="CUETEXT";continue;case"CUETEXT":var l=-1!==o.indexOf("--\x3e");if(!o||l&&(a=!0)){i.oncue&&i.oncue(i.cue),i.cue=null,i.state="ID";continue}i.cue.text&&(i.cue.text+="\n"),i.cue.text+=o;continue;case"BADCUE":o||(i.state="ID");continue}}}catch(t){i.reportOrThrowError(t),"CUETEXT"===i.state&&i.cue&&i.oncue&&i.oncue(i.cue),i.cue=null,i.state="INITIAL"===i.state?"BADWEBVTT":"BADCUE"}return this},flush:function(){var t=this;try{if(t.buffer+=t.decoder.decode(),(t.cue||"HEADER"===t.state)&&(t.buffer+="\n\n",t.parse()),"INITIAL"===t.state)throw new Ct(Ct.Errors.BadSignature)}catch(e){t.reportOrThrowError(e)}return t.onflush&&t.onflush(),this}};var Fn=Lt,Hn="auto",Vn={"":!0,lr:!0,rl:!0},zn={start:!0,middle:!0,end:!0,left:!0,right:!0};Ft.prototype.getCueAsHTML=function(){return WebVTT.convertCueToDOMTree(window,this.text)};var Wn=Ft,Un={"":!0,up:!0},Xn=zt,qn=t(function(t){var e=t.exports={WebVTT:Fn,VTTCue:Wn,VTTRegion:Xn};fe.vttjs=e,fe.WebVTT=e.WebVTT;var r=e.VTTCue,n=e.VTTRegion,i=fe.VTTCue,o=fe.VTTRegion;e.shim=function(){fe.VTTCue=r,fe.VTTRegion=n},e.restore=function(){fe.VTTCue=i,fe.VTTRegion=o},fe.VTTCue||e.shim()}),Kn=function(t){function e(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};Ue(this,e),r.reportTouchActivity=!1;var i=qe(this,t.call(this,null,r,n));return i.hasStarted_=!1,i.on("playing",function(){this.hasStarted_=!0}),i.on("loadstart",function(){this.hasStarted_=!1}),Mn.names.forEach(function(t){var e=Mn[t];r&&r[e.getterName]&&(i[e.privateName]=r[e.getterName])}),i.featuresProgressEvents||i.manualProgressOn(),i.featuresTimeupdateEvents||i.manualTimeUpdatesOn(),["Text","Audio","Video"].forEach(function(t){!1===r["native"+t+"Tracks"]&&(i["featuresNative"+t+"Tracks"]=!1)}),!1===r.nativeCaptions||!1===r.nativeTextTracks?i.featuresNativeTextTracks=!1:!0!==r.nativeCaptions&&!0!==r.nativeTextTracks||(i.featuresNativeTextTracks=!0),i.featuresNativeTextTracks||i.emulateTextTracks(),i.autoRemoteTextTracks_=new Mn.text.ListClass,i.initTrackListeners(),r.nativeControlsForTouch||i.emitTapEvents(),i.constructor&&(i.name_=i.constructor.name||"Unknown Tech"),i}return Xe(e,t),e.prototype.triggerSourceset=function(t){var e=this;this.isReady_||this.one("ready",function(){return e.setTimeout(function(){return e.triggerSourceset(t)},1)}),this.trigger({src:t,type:"sourceset"})},e.prototype.manualProgressOn=function(){this.on("durationchange",this.onDurationChange),this.manualProgress=!0,this.one("ready",this.trackProgress)},e.prototype.manualProgressOff=function(){this.manualProgress=!1,this.stopTrackingProgress(),this.off("durationchange",this.onDurationChange)},e.prototype.trackProgress=function(t){this.stopTrackingProgress(),this.progressInterval=this.setInterval(gr(this,function(){var t=this.bufferedPercent();this.bufferedPercent_!==t&&this.trigger("progress"),this.bufferedPercent_=t,1===t&&this.stopTrackingProgress()}),500)},e.prototype.onDurationChange=function(t){this.duration_=this.duration()},e.prototype.buffered=function(){return it(0,0)},e.prototype.bufferedPercent=function(){return ot(this.buffered(),this.duration_)},e.prototype.stopTrackingProgress=function(){this.clearInterval(this.progressInterval)},e.prototype.manualTimeUpdatesOn=function(){this.manualTimeUpdates=!0,this.on("play",this.trackCurrentTime),this.on("pause",this.stopTrackingCurrentTime)},e.prototype.manualTimeUpdatesOff=function(){this.manualTimeUpdates=!1,this.stopTrackingCurrentTime(),this.off("play",this.trackCurrentTime),this.off("pause",this.stopTrackingCurrentTime)},e.prototype.trackCurrentTime=function(){this.currentTimeInterval&&this.stopTrackingCurrentTime(),this.currentTimeInterval=this.setInterval(function(){this.trigger({type:"timeupdate",target:this,manuallyTriggered:!0})},250)},e.prototype.stopTrackingCurrentTime=function(){this.clearInterval(this.currentTimeInterval),this.trigger({type:"timeupdate",target:this,manuallyTriggered:!0})},e.prototype.dispose=function(){this.clearTracks(Pn.names),this.manualProgress&&this.manualProgressOff(),this.manualTimeUpdates&&this.manualTimeUpdatesOff(),t.prototype.dispose.call(this)},e.prototype.clearTracks=function(t){var e=this;t=[].concat(t),t.forEach(function(t){for(var r=e[t+"Tracks"]()||[],n=r.length;n--;){var i=r[n];"text"===t&&e.removeRemoteTextTrack(i),r.removeTrack(i)}})},e.prototype.cleanupAutoTextTracks=function(){for(var t=this.autoRemoteTextTracks_||[],e=t.length;e--;){var r=t[e];this.removeRemoteTextTrack(r)}},e.prototype.reset=function(){},e.prototype.error=function(t){return void 0!==t&&(this.error_=new st(t),this.trigger("error")),this.error_},e.prototype.played=function(){return this.hasStarted_?it(0,0):it()},e.prototype.setCurrentTime=function(){this.manualTimeUpdates&&this.trigger({type:"timeupdate",target:this,manuallyTriggered:!0})},e.prototype.initTrackListeners=function(){var t=this;Pn.names.forEach(function(e){var r=Pn[e],n=function(){t.trigger(e+"trackchange")},i=t[r.getterName]();i.addEventListener("removetrack",n),i.addEventListener("addtrack",n),t.on("dispose",function(){i.removeEventListener("removetrack",n),i.removeEventListener("addtrack",n)})})},e.prototype.addWebVttScript_=function(){var t=this;if(!fe.WebVTT)if(_e.body.contains(this.el())){if(!this.options_["vtt.js"]&&o(qn)&&Object.keys(qn).length>0)return void this.trigger("vttjsloaded");var e=_e.createElement("script");e.src=this.options_["vtt.js"]||"https://vjs.zencdn.net/vttjs/0.12.4/vtt.min.js",e.onload=function(){t.trigger("vttjsloaded")},e.onerror=function(){t.trigger("vttjserror")},this.on("dispose",function(){e.onload=null,e.onerror=null}),fe.WebVTT=!0,this.el().parentNode.appendChild(e)}else this.ready(this.addWebVttScript_)},e.prototype.emulateTextTracks=function(){var t=this,e=this.textTracks(),r=this.remoteTextTracks(),n=function(t){return e.addTrack(t.track)},i=function(t){return e.removeTrack(t.track)};r.on("addtrack",n),r.on("removetrack",i),this.addWebVttScript_();var o=function(){return t.trigger("texttrackchange")},s=function(){o();for(var t=0;t<e.length;t++){var r=e[t];r.removeEventListener("cuechange",o),"showing"===r.mode&&r.addEventListener("cuechange",o)}};s(),e.addEventListener("change",s),e.addEventListener("addtrack",s),e.addEventListener("removetrack",s),this.on("dispose",function(){r.off("addtrack",n),r.off("removetrack",i),e.removeEventListener("change",s),e.removeEventListener("addtrack",s),e.removeEventListener("removetrack",s);for(var t=0;t<e.length;t++){e[t].removeEventListener("cuechange",o)}})},e.prototype.addTextTrack=function(t,e,r){if(!t)throw new Error("TextTrack kind is required but was not provided");return Wt(this,t,e,r)},e.prototype.createRemoteTextTrack=function(t){var e=tt(t,{tech:this});return new On.remoteTextEl.TrackClass(e)},e.prototype.addRemoteTextTrack=function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments[1],n=this.createRemoteTextTrack(e);return!0!==r&&!1!==r&&(tr.warn('Calling addRemoteTextTrack without explicitly setting the "manualCleanup" parameter to `true` is deprecated and default to `false` in future version of video.js'),r=!0),this.remoteTextTrackEls().addTrackElement_(n),this.remoteTextTracks().addTrack(n.track),!0!==r&&this.ready(function(){return t.autoRemoteTextTracks_.addTrack(n.track)}),n},e.prototype.removeRemoteTextTrack=function(t){var e=this.remoteTextTrackEls().getTrackElementByTrack_(t);this.remoteTextTrackEls().removeTrackElement_(e),this.remoteTextTracks().removeTrack(t),this.autoRemoteTextTracks_.removeTrack(t)},e.prototype.getVideoPlaybackQuality=function(){return{}},e.prototype.setPoster=function(){},e.prototype.playsinline=function(){},e.prototype.setPlaysinline=function(){},e.prototype.canPlayType=function(){return""},e.canPlayType=function(){return""},e.canPlaySource=function(t,r){return e.canPlayType(t.type)},e.isTech=function(t){return t.prototype instanceof e||t instanceof e||t===e},e.registerTech=function(t,r){if(e.techs_||(e.techs_={}),!e.isTech(r))throw new Error("Tech "+t+" must be a Tech");if(!e.canPlayType)throw new Error("Techs must have a static canPlayType method on them");if(!e.canPlaySource)throw new Error("Techs must have a static canPlaySource method on them");return t=Q(t),e.techs_[t]=r,"Tech"!==t&&e.defaultTechOrder_.push(t),r},e.getTech=function(t){if(t)return t=Q(t),e.techs_&&e.techs_[t]?e.techs_[t]:fe&&fe.videojs&&fe.videojs[t]?(tr.warn("The "+t+" tech was added to the videojs object when it should be registered using videojs.registerTech(name, tech)"),fe.videojs[t]):void 0},e}(Pr);Mn.names.forEach(function(t){var e=Mn[t];Kn.prototype[e.getterName]=function(){return this[e.privateName]=this[e.privateName]||new e.ListClass,this[e.privateName]}}),Kn.prototype.featuresVolumeControl=!0,Kn.prototype.featuresFullscreenResize=!1,Kn.prototype.featuresPlaybackRate=!1,Kn.prototype.featuresProgressEvents=!1,Kn.prototype.featuresSourceset=!1,Kn.prototype.featuresTimeupdateEvents=!1,Kn.prototype.featuresNativeTextTracks=!1,Kn.withSourceHandlers=function(t){t.registerSourceHandler=function(e,r){var n=t.sourceHandlers;n||(n=t.sourceHandlers=[]),void 0===r&&(r=n.length),n.splice(r,0,e)},t.canPlayType=function(e){for(var r=t.sourceHandlers||[],n=void 0,i=0;i<r.length;i++)if(n=r[i].canPlayType(e))return n;return""},t.selectSourceHandler=function(e,r){for(var n=t.sourceHandlers||[],i=0;i<n.length;i++)if(n[i].canHandleSource(e,r))return n[i];return null},t.canPlaySource=function(e,r){var n=t.selectSourceHandler(e,r);return n?n.canHandleSource(e,r):""},["seekable","seeking","duration"].forEach(function(t){var e=this[t];"function"==typeof e&&(this[t]=function(){return this.sourceHandler_&&this.sourceHandler_[t]?this.sourceHandler_[t].apply(this.sourceHandler_,arguments):e.apply(this,arguments)})},t.prototype),t.prototype.setSource=function(e){var r=t.selectSourceHandler(e,this.options_);r||(t.nativeSourceHandler?r=t.nativeSourceHandler:tr.error("No source hander found for the current source.")),this.disposeSourceHandler(),this.off("dispose",this.disposeSourceHandler),r!==t.nativeSourceHandler&&(this.currentSource_=e),this.sourceHandler_=r.handleSource(e,this,this.options_),this.on("dispose",this.disposeSourceHandler)},t.prototype.disposeSourceHandler=function(){this.currentSource_&&(this.clearTracks(["audio","video"]),this.currentSource_=null),this.cleanupAutoTextTracks(),this.sourceHandler_&&(this.sourceHandler_.dispose&&this.sourceHandler_.dispose(),this.sourceHandler_=null)}},Pr.registerComponent("Tech",Kn),Kn.registerTech("Tech",Kn),Kn.defaultTechOrder_=[];var $n={},Yn={},Gn={},Jn={buffered:1,currentTime:1,duration:1,seekable:1,played:1,paused:1},Qn={setCurrentTime:1},Zn={play:1,pause:1},ti={opus:"video/ogg",ogv:"video/ogg",mp4:"video/mp4",mov:"video/mp4",m4v:"video/mp4",mkv:"video/x-matroska",mp3:"audio/mpeg",aac:"audio/aac",oga:"audio/ogg",m3u8:"application/x-mpegURL"},ei=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=ln(t);return ti[e.toLowerCase()]||""},ri=function(t,e){if(!e)return"";if(t.cache_.source.src===e&&t.cache_.source.type)return t.cache_.source.type;var r=t.cache_.sources.filter(function(t){return t.src===e});if(r.length)return r[0].type;for(var n=t.$$("source"),i=0;i<n.length;i++){var o=n[i];if(o.type&&o.src&&o.src===e)return o.type}return ei(e)},ni=function t(e){if(Array.isArray(e)){var r=[];e.forEach(function(e){e=t(e),Array.isArray(e)?r=r.concat(e):i(e)&&r.push(e)}),e=r}else e="string"==typeof e&&e.trim()?[ee({src:e})]:i(e)&&"string"==typeof e.src&&e.src&&e.src.trim()?[ee(e)]:[];return e},ii=function(t){function e(r,n,i){Ue(this,e);var o=tt({createEl:!1},n),s=qe(this,t.call(this,r,o,i));if(n.playerOptions.sources&&0!==n.playerOptions.sources.length)r.src(n.playerOptions.sources);else for(var a=0,l=n.playerOptions.techOrder;a<l.length;a++){var c=Q(l[a]),u=Kn.getTech(c);if(c||(u=Pr.getComponent(c)),u&&u.isSupported()){r.loadTech_(c);break}}return s}return Xe(e,t),e}(Pr);Pr.registerComponent("MediaLoader",ii);var oi=function(t){function e(r,n){Ue(this,e);var i=qe(this,t.call(this,r,n));return i.emitTapEvents(),i.enable(),i}return Xe(e,t),e.prototype.createEl=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"div",r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};r=n({innerHTML:'<span aria-hidden="true" class="vjs-icon-placeholder"></span>',className:this.buildCSSClass(),tabIndex:0},r),"button"===e&&tr.error("Creating a ClickableComponent with an HTML element of "+e+" is not supported; use a Button instead."),i=n({role:"button"},i),this.tabIndex_=r.tabIndex;var o=t.prototype.createEl.call(this,e,r,i);return this.createControlTextEl(o),o},e.prototype.dispose=function(){this.controlTextEl_=null,t.prototype.dispose.call(this)},e.prototype.createControlTextEl=function(t){return this.controlTextEl_=v("span",{className:"vjs-control-text"},{"aria-live":"polite"}),t&&t.appendChild(this.controlTextEl_),this.controlText(this.controlText_,t),this.controlTextEl_},e.prototype.controlText=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.el();if(void 0===t)return this.controlText_||"Need Text";var r=this.localize(t);this.controlText_=t,y(this.controlTextEl_,r),this.nonIconControl||e.setAttribute("title",r)},e.prototype.buildCSSClass=function(){return"vjs-control vjs-button "+t.prototype.buildCSSClass.call(this)},e.prototype.enable=function(){this.enabled_||(this.enabled_=!0,this.removeClass("vjs-disabled"),this.el_.setAttribute("aria-disabled","false"),void 0!==this.tabIndex_&&this.el_.setAttribute("tabIndex",this.tabIndex_),this.on(["tap","click"],this.handleClick),this.on("focus",this.handleFocus),this.on("blur",this.handleBlur))},e.prototype.disable=function(){this.enabled_=!1,this.addClass("vjs-disabled"),this.el_.setAttribute("aria-disabled","true"),void 0!==this.tabIndex_&&this.el_.removeAttribute("tabIndex"),this.off(["tap","click"],this.handleClick),this.off("focus",this.handleFocus),this.off("blur",this.handleBlur)},e.prototype.handleClick=function(t){},e.prototype.handleFocus=function(t){X(_e,"keydown",gr(this,this.handleKeyPress))},e.prototype.handleKeyPress=function(e){32===e.which||13===e.which?(e.preventDefault(),this.trigger("click")):t.prototype.handleKeyPress&&t.prototype.handleKeyPress.call(this,e)},e.prototype.handleBlur=function(t){q(_e,"keydown",gr(this,this.handleKeyPress))},e}(Pr);Pr.registerComponent("ClickableComponent",oi);var si=function(t){function e(r,n){Ue(this,e);var i=qe(this,t.call(this,r,n));return i.update(),r.on("posterchange",gr(i,i.update)),i}return Xe(e,t),e.prototype.dispose=function(){this.player().off("posterchange",this.update),t.prototype.dispose.call(this)},e.prototype.createEl=function(){var t=v("div",{className:"vjs-poster",tabIndex:-1});return Ve||(this.fallbackImg_=v("img"),t.appendChild(this.fallbackImg_)),t},e.prototype.update=function(t){var e=this.player().poster();this.setSrc(e),e?this.show():this.hide()},e.prototype.setSrc=function(t){if(this.fallbackImg_)this.fallbackImg_.src=t;else{var e="";t&&(e='url("'+t+'")'),this.el_.style.backgroundImage=e}},e.prototype.handleClick=function(t){this.player_.controls()&&(this.player_.paused()?this.player_.play():this.player_.pause())},e}(oi);Pr.registerComponent("PosterImage",si);var ai={monospace:"monospace",sansSerif:"sans-serif",serif:"serif",monospaceSansSerif:'"Andale Mono", "Lucida Console", monospace',monospaceSerif:'"Courier New", monospace',proportionalSansSerif:"sans-serif",proportionalSerif:"serif",casual:'"Comic Sans MS", Impact, fantasy',script:'"Monotype Corsiva", cursive',smallcaps:'"Andale Mono", "Lucida Console", monospace, sans-serif'},li=function(t){function e(r,n,i){Ue(this,e);var o=qe(this,t.call(this,r,n,i));return r.on("loadstart",gr(o,o.toggleDisplay)),r.on("texttrackchange",gr(o,o.updateDisplay)),r.on("loadstart",gr(o,o.preselectTrack)),r.ready(gr(o,function(){if(r.tech_&&r.tech_.featuresNativeTextTracks)return void this.hide();r.on("fullscreenchange",gr(this,this.updateDisplay));for(var t=this.options_.playerOptions.tracks||[],e=0;e<t.length;e++)this.player_.addRemoteTextTrack(t[e],!0);this.preselectTrack()})),o}return Xe(e,t),e.prototype.preselectTrack=function(){for(var t={captions:1,subtitles:1},e=this.player_.textTracks(),r=this.player_.cache_.selectedLanguage,n=void 0,i=void 0,o=void 0,s=0;s<e.length;s++){var a=e[s];r&&r.enabled&&r.language===a.language?a.kind===r.kind?o=a:o||(o=a):r&&!r.enabled?(o=null,n=null,i=null):a.default&&("descriptions"!==a.kind||n?a.kind in t&&!i&&(i=a):n=a)}o?o.mode="showing":i?i.mode="showing":n&&(n.mode="showing")},e.prototype.toggleDisplay=function(){this.player_.tech_&&this.player_.tech_.featuresNativeTextTracks?this.hide():this.show()},e.prototype.createEl=function(){return t.prototype.createEl.call(this,"div",{className:"vjs-text-track-display"},{"aria-live":"off","aria-atomic":"true"})},e.prototype.clearDisplay=function(){"function"==typeof fe.WebVTT&&fe.WebVTT.processCues(fe,[],this.el_)},e.prototype.updateDisplay=function(){var t=this.player_.textTracks();this.clearDisplay();for(var e=null,r=null,n=t.length;n--;){var i=t[n];"showing"===i.mode&&("descriptions"===i.kind?e=i:r=i)}r?("off"!==this.getAttribute("aria-live")&&this.setAttribute("aria-live","off"),this.updateForTrack(r)):e&&("assertive"!==this.getAttribute("aria-live")&&this.setAttribute("aria-live","assertive"),this.updateForTrack(e))},e.prototype.updateForTrack=function(t){if("function"==typeof fe.WebVTT&&t.activeCues){for(var e=[],r=0;r<t.activeCues.length;r++)e.push(t.activeCues[r]);if(fe.WebVTT.processCues(fe,e,this.el_),this.player_.textTrackSettings)for(var n=this.player_.textTrackSettings.getValues(),i=e.length;i--;){var o=e[i];if(o){var s=o.displayState;if(n.color&&(s.firstChild.style.color=n.color),n.textOpacity&&ne(s.firstChild,"color",re(n.color||"#fff",n.textOpacity)),n.backgroundColor&&(s.firstChild.style.backgroundColor=n.backgroundColor),n.backgroundOpacity&&ne(s.firstChild,"backgroundColor",re(n.backgroundColor||"#000",n.backgroundOpacity)),n.windowColor&&(n.windowOpacity?ne(s,"backgroundColor",re(n.windowColor,n.windowOpacity)):s.style.backgroundColor=n.windowColor),n.edgeStyle&&("dropshadow"===n.edgeStyle?s.firstChild.style.textShadow="2px 2px 3px #222, 2px 2px 4px #222, 2px 2px 5px #222":"raised"===n.edgeStyle?s.firstChild.style.textShadow="1px 1px #222, 2px 2px #222, 3px 3px #222":"depressed"===n.edgeStyle?s.firstChild.style.textShadow="1px 1px #ccc, 0 1px #ccc, -1px -1px #222, 0 -1px #222":"uniform"===n.edgeStyle&&(s.firstChild.style.textShadow="0 0 4px #222, 0 0 4px #222, 0 0 4px #222, 0 0 4px #222")),n.fontPercent&&1!==n.fontPercent){var a=fe.parseFloat(s.style.fontSize);s.style.fontSize=a*n.fontPercent+"px",s.style.height="auto",s.style.top="auto",s.style.bottom="2px"}n.fontFamily&&"default"!==n.fontFamily&&("small-caps"===n.fontFamily?s.firstChild.style.fontVariant="small-caps":s.firstChild.style.fontFamily=ai[n.fontFamily])}}}},e}(Pr);Pr.registerComponent("TextTrackDisplay",li);var ci=function(t){function e(){return Ue(this,e),qe(this,t.apply(this,arguments))}return Xe(e,t),e.prototype.createEl=function(){var e=this.player_.isAudio(),r=this.localize(e?"Audio Player":"Video Player"),n=v("span",{className:"vjs-control-text",innerHTML:this.localize("{1} is loading.",[r])}),i=t.prototype.createEl.call(this,"div",{className:"vjs-loading-spinner",dir:"ltr"});return i.appendChild(n),i},e}(Pr);Pr.registerComponent("LoadingSpinner",ci);var ui=function(t){function e(){return Ue(this,e),qe(this,t.apply(this,arguments))}return Xe(e,t),e.prototype.createEl=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};t="button",e=n({innerHTML:'<span aria-hidden="true" class="vjs-icon-placeholder"></span>',className:this.buildCSSClass()},e),r=n({type:"button"},r);var i=Pr.prototype.createEl.call(this,t,e,r);return this.createControlTextEl(i),i},e.prototype.addChild=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=this.constructor.name;return tr.warn("Adding an actionable (user controllable) child to a Button ("+r+") is not supported; use a ClickableComponent instead."),Pr.prototype.addChild.call(this,t,e)},e.prototype.enable=function(){t.prototype.enable.call(this),this.el_.removeAttribute("disabled")},e.prototype.disable=function(){t.prototype.disable.call(this),this.el_.setAttribute("disabled","disabled")},e.prototype.handleKeyPress=function(e){32!==e.which&&13!==e.which&&t.prototype.handleKeyPress.call(this,e)},e}(oi);Pr.registerComponent("Button",ui);var hi=function(t){function e(r,n){Ue(this,e);var i=qe(this,t.call(this,r,n));return i.mouseused_=!1,i.on("mousedown",i.handleMouseDown),i}return Xe(e,t),e.prototype.buildCSSClass=function(){return"vjs-big-play-button"},e.prototype.handleClick=function(t){var e=this.player_.play();if(!(this.mouseused_&&t.clientX&&t.clientY)){var r=this.player_.getChild("controlBar"),n=r&&r.getChild("playToggle");if(!n)return void this.player_.focus();var i=function(){return n.focus()};lt(e)?e.then(i,function(){}):this.setTimeout(i,1)}},e.prototype.handleKeyPress=function(e){this.mouseused_=!1,t.prototype.handleKeyPress.call(this,e)},e.prototype.handleMouseDown=function(t){this.mouseused_=!0},e}(ui);hi.prototype.controlText_="Play Video",Pr.registerComponent("BigPlayButton",hi);var pi=function(t){function e(r,n){Ue(this,e);var i=qe(this,t.call(this,r,n));return i.controlText(n&&n.controlText||i.localize("Close")),i}
return Xe(e,t),e.prototype.buildCSSClass=function(){return"vjs-close-button "+t.prototype.buildCSSClass.call(this)},e.prototype.handleClick=function(t){this.trigger({type:"close",bubbles:!1})},e}(ui);Pr.registerComponent("CloseButton",pi);var di=function(t){function e(r,n){Ue(this,e);var i=qe(this,t.call(this,r,n));return i.on(r,"play",i.handlePlay),i.on(r,"pause",i.handlePause),i.on(r,"ended",i.handleEnded),i}return Xe(e,t),e.prototype.buildCSSClass=function(){return"vjs-play-control "+t.prototype.buildCSSClass.call(this)},e.prototype.handleClick=function(t){this.player_.paused()?this.player_.play():this.player_.pause()},e.prototype.handleSeeked=function(t){this.removeClass("vjs-ended"),this.player_.paused()?this.handlePause(t):this.handlePlay(t)},e.prototype.handlePlay=function(t){this.removeClass("vjs-ended"),this.removeClass("vjs-paused"),this.addClass("vjs-playing"),this.controlText("Pause")},e.prototype.handlePause=function(t){this.removeClass("vjs-playing"),this.addClass("vjs-paused"),this.controlText("Play")},e.prototype.handleEnded=function(t){this.removeClass("vjs-playing"),this.addClass("vjs-ended"),this.controlText("Replay"),this.one(this.player_,"seeked",this.handleSeeked)},e}(ui);di.prototype.controlText_="Play",Pr.registerComponent("PlayToggle",di);var fi=function(t,e){t=t<0?0:t;var r=Math.floor(t%60),n=Math.floor(t/60%60),i=Math.floor(t/3600),o=Math.floor(e/60%60),s=Math.floor(e/3600);return(isNaN(t)||t===1/0)&&(i=n=r="-"),i=i>0||s>0?i+":":"",n=((i||o>=10)&&n<10?"0"+n:n)+":",r=r<10?"0"+r:r,i+n+r},vi=fi,yi=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t;return vi(t,e)},gi=function(t){function e(r,n){Ue(this,e);var i=qe(this,t.call(this,r,n));return i.throttledUpdateContent=mr(gr(i,i.updateContent),25),i.on(r,"timeupdate",i.throttledUpdateContent),i}return Xe(e,t),e.prototype.createEl=function(e){var r=this.buildCSSClass(),n=t.prototype.createEl.call(this,"div",{className:r+" vjs-time-control vjs-control",innerHTML:'<span class="vjs-control-text">'+this.localize(this.labelText_)+" </span>"});return this.contentEl_=v("span",{className:r+"-display"},{"aria-live":"off"}),this.updateTextNode_(),n.appendChild(this.contentEl_),n},e.prototype.dispose=function(){this.contentEl_=null,this.textNode_=null,t.prototype.dispose.call(this)},e.prototype.updateTextNode_=function(){if(this.contentEl_){for(;this.contentEl_.firstChild;)this.contentEl_.removeChild(this.contentEl_.firstChild);this.textNode_=_e.createTextNode(this.formattedTime_||this.formatTime_(0)),this.contentEl_.appendChild(this.textNode_)}},e.prototype.formatTime_=function(t){return yi(t)},e.prototype.updateFormattedTime_=function(t){var e=this.formatTime_(t);e!==this.formattedTime_&&(this.formattedTime_=e,this.requestAnimationFrame(this.updateTextNode_))},e.prototype.updateContent=function(t){},e}(Pr);gi.prototype.labelText_="Time",gi.prototype.controlText_="Time",Pr.registerComponent("TimeDisplay",gi);var mi=function(t){function e(r,n){Ue(this,e);var i=qe(this,t.call(this,r,n));return i.on(r,"ended",i.handleEnded),i}return Xe(e,t),e.prototype.buildCSSClass=function(){return"vjs-current-time"},e.prototype.updateContent=function(t){var e=this.player_.scrubbing()?this.player_.getCache().currentTime:this.player_.currentTime();this.updateFormattedTime_(e)},e.prototype.handleEnded=function(t){this.player_.duration()&&this.updateFormattedTime_(this.player_.duration())},e}(gi);mi.prototype.labelText_="Current Time",mi.prototype.controlText_="Current Time",Pr.registerComponent("CurrentTimeDisplay",mi);var _i=function(t){function e(r,n){Ue(this,e);var i=qe(this,t.call(this,r,n));return i.on(r,"durationchange",i.updateContent),i.on(r,"loadedmetadata",i.throttledUpdateContent),i}return Xe(e,t),e.prototype.buildCSSClass=function(){return"vjs-duration"},e.prototype.updateContent=function(t){var e=this.player_.duration();e&&this.duration_!==e&&(this.duration_=e,this.updateFormattedTime_(e))},e}(gi);_i.prototype.labelText_="Duration",_i.prototype.controlText_="Duration",Pr.registerComponent("DurationDisplay",_i);var bi=function(t){function e(){return Ue(this,e),qe(this,t.apply(this,arguments))}return Xe(e,t),e.prototype.createEl=function(){return t.prototype.createEl.call(this,"div",{className:"vjs-time-control vjs-time-divider",innerHTML:"<div><span>/</span></div>"})},e}(Pr);Pr.registerComponent("TimeDivider",bi);var Ti=function(t){function e(r,n){Ue(this,e);var i=qe(this,t.call(this,r,n));return i.on(r,"durationchange",i.throttledUpdateContent),i.on(r,"ended",i.handleEnded),i}return Xe(e,t),e.prototype.buildCSSClass=function(){return"vjs-remaining-time"},e.prototype.formatTime_=function(e){return"-"+t.prototype.formatTime_.call(this,e)},e.prototype.updateContent=function(t){this.player_.duration()&&(this.player_.remainingTimeDisplay?this.updateFormattedTime_(this.player_.remainingTimeDisplay()):this.updateFormattedTime_(this.player_.remainingTime()))},e.prototype.handleEnded=function(t){this.player_.duration()&&this.updateFormattedTime_(0)},e}(gi);Ti.prototype.labelText_="Remaining Time",Ti.prototype.controlText_="Remaining Time",Pr.registerComponent("RemainingTimeDisplay",Ti);var Ci=function(t){function e(r,n){Ue(this,e);var i=qe(this,t.call(this,r,n));return i.updateShowing(),i.on(i.player(),"durationchange",i.updateShowing),i}return Xe(e,t),e.prototype.createEl=function(){var e=t.prototype.createEl.call(this,"div",{className:"vjs-live-control vjs-control"});return this.contentEl_=v("div",{className:"vjs-live-display",innerHTML:'<span class="vjs-control-text">'+this.localize("Stream Type")+" </span>"+this.localize("LIVE")},{"aria-live":"off"}),e.appendChild(this.contentEl_),e},e.prototype.dispose=function(){this.contentEl_=null,t.prototype.dispose.call(this)},e.prototype.updateShowing=function(t){this.player().duration()===1/0?this.show():this.hide()},e}(Pr);Pr.registerComponent("LiveDisplay",Ci);var ki=function(t){function e(r,n){Ue(this,e);var i=qe(this,t.call(this,r,n));return i.bar=i.getChild(i.options_.barName),i.vertical(!!i.options_.vertical),i.enable(),i}return Xe(e,t),e.prototype.enabled=function(){return this.enabled_},e.prototype.enable=function(){this.enabled()||(this.on("mousedown",this.handleMouseDown),this.on("touchstart",this.handleMouseDown),this.on("focus",this.handleFocus),this.on("blur",this.handleBlur),this.on("click",this.handleClick),this.on(this.player_,"controlsvisible",this.update),this.playerEvent&&this.on(this.player_,this.playerEvent,this.update),this.removeClass("disabled"),this.setAttribute("tabindex",0),this.enabled_=!0)},e.prototype.disable=function(){if(this.enabled()){var t=this.bar.el_.ownerDocument;this.off("mousedown",this.handleMouseDown),this.off("touchstart",this.handleMouseDown),this.off("focus",this.handleFocus),this.off("blur",this.handleBlur),this.off("click",this.handleClick),this.off(this.player_,"controlsvisible",this.update),this.off(t,"mousemove",this.handleMouseMove),this.off(t,"mouseup",this.handleMouseUp),this.off(t,"touchmove",this.handleMouseMove),this.off(t,"touchend",this.handleMouseUp),this.removeAttribute("tabindex"),this.addClass("disabled"),this.playerEvent&&this.off(this.player_,this.playerEvent,this.update),this.enabled_=!1}},e.prototype.createEl=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return r.className=r.className+" vjs-slider",r=n({tabIndex:0},r),i=n({role:"slider","aria-valuenow":0,"aria-valuemin":0,"aria-valuemax":100,tabIndex:0},i),t.prototype.createEl.call(this,e,r,i)},e.prototype.handleMouseDown=function(t){var e=this.bar.el_.ownerDocument;t.preventDefault(),x(),this.addClass("vjs-sliding"),this.trigger("slideractive"),this.on(e,"mousemove",this.handleMouseMove),this.on(e,"mouseup",this.handleMouseUp),this.on(e,"touchmove",this.handleMouseMove),this.on(e,"touchend",this.handleMouseUp),this.handleMouseMove(t)},e.prototype.handleMouseMove=function(t){},e.prototype.handleMouseUp=function(){var t=this.bar.el_.ownerDocument;j(),this.removeClass("vjs-sliding"),this.trigger("sliderinactive"),this.off(t,"mousemove",this.handleMouseMove),this.off(t,"mouseup",this.handleMouseUp),this.off(t,"touchmove",this.handleMouseMove),this.off(t,"touchend",this.handleMouseUp),this.update()},e.prototype.update=function(){if(this.el_){var t=this.getPercent(),e=this.bar;if(e){("number"!=typeof t||t!==t||t<0||t===1/0)&&(t=0);var r=(100*t).toFixed(2)+"%",n=e.el().style;return this.vertical()?n.height=r:n.width=r,t}}},e.prototype.calculateDistance=function(t){var e=O(this.el_,t);return this.vertical()?e.y:e.x},e.prototype.handleFocus=function(){this.on(this.bar.el_.ownerDocument,"keydown",this.handleKeyPress)},e.prototype.handleKeyPress=function(t){37===t.which||40===t.which?(t.preventDefault(),this.stepBack()):38!==t.which&&39!==t.which||(t.preventDefault(),this.stepForward())},e.prototype.handleBlur=function(){this.off(this.bar.el_.ownerDocument,"keydown",this.handleKeyPress)},e.prototype.handleClick=function(t){t.stopImmediatePropagation(),t.preventDefault()},e.prototype.vertical=function(t){if(void 0===t)return this.vertical_||!1;this.vertical_=!!t,this.vertical_?this.addClass("vjs-slider-vertical"):this.addClass("vjs-slider-horizontal")},e}(Pr);Pr.registerComponent("Slider",ki);var Ei=function(t){function e(r,n){Ue(this,e);var i=qe(this,t.call(this,r,n));return i.partEls_=[],i.on(r,"progress",i.update),i}return Xe(e,t),e.prototype.createEl=function(){return t.prototype.createEl.call(this,"div",{className:"vjs-load-progress",innerHTML:'<span class="vjs-control-text"><span>'+this.localize("Loaded")+"</span>: 0%</span>"})},e.prototype.dispose=function(){this.partEls_=null,t.prototype.dispose.call(this)},e.prototype.update=function(t){var e=this.player_.buffered(),r=this.player_.duration(),n=this.player_.bufferedEnd(),i=this.partEls_,o=function(t,e){var r=t/e||0;return 100*(r>=1?1:r)+"%"};this.el_.style.width=o(n,r);for(var s=0;s<e.length;s++){var a=e.start(s),l=e.end(s),c=i[s];c||(c=this.el_.appendChild(v()),i[s]=c),c.style.left=o(a,n),c.style.width=o(l-a,n)}for(var u=i.length;u>e.length;u--)this.el_.removeChild(i[u-1]);i.length=e.length},e}(Pr);Pr.registerComponent("LoadProgressBar",Ei);var wi=function(t){function e(){return Ue(this,e),qe(this,t.apply(this,arguments))}return Xe(e,t),e.prototype.createEl=function(){return t.prototype.createEl.call(this,"div",{className:"vjs-time-tooltip"})},e.prototype.update=function(t,e,r){var n=A(this.el_),i=A(this.player_.el()),o=t.width*e;if(i&&n){var s=t.left-i.left+o,a=t.width-o+(i.right-t.right),l=n.width/2;s<l?l+=l-s:a<l&&(l=a),l<0?l=0:l>n.width&&(l=n.width),this.el_.style.right="-"+l+"px",y(this.el_,r)}},e}(Pr);Pr.registerComponent("TimeTooltip",wi);var Si=function(t){function e(){return Ue(this,e),qe(this,t.apply(this,arguments))}return Xe(e,t),e.prototype.createEl=function(){return t.prototype.createEl.call(this,"div",{className:"vjs-play-progress vjs-slider-bar",innerHTML:'<span class="vjs-control-text"><span>'+this.localize("Progress")+"</span>: 0%</span>"})},e.prototype.update=function(t,e){var r=this;this.rafId_&&this.cancelAnimationFrame(this.rafId_),this.rafId_=this.requestAnimationFrame(function(){var n=r.player_.scrubbing()?r.player_.getCache().currentTime:r.player_.currentTime(),i=yi(n,r.player_.duration()),o=r.getChild("timeTooltip");o&&o.update(t,e,i)})},e}(Pr);Si.prototype.options_={children:[]},De&&!(De>8)||Se||je||Si.prototype.options_.children.push("timeTooltip"),Pr.registerComponent("PlayProgressBar",Si);var xi=function(t){function e(r,n){Ue(this,e);var i=qe(this,t.call(this,r,n));return i.update=mr(gr(i,i.update),25),i}return Xe(e,t),e.prototype.createEl=function(){return t.prototype.createEl.call(this,"div",{className:"vjs-mouse-display"})},e.prototype.update=function(t,e){var r=this;this.rafId_&&this.cancelAnimationFrame(this.rafId_),this.rafId_=this.requestAnimationFrame(function(){var n=r.player_.duration(),i=yi(e*n,n);r.el_.style.left=t.width*e+"px",r.getChild("timeTooltip").update(t,e,i)})},e}(Pr);xi.prototype.options_={children:["timeTooltip"]},Pr.registerComponent("MouseTimeDisplay",xi);var ji=function(t){function e(r,n){Ue(this,e);var i=qe(this,t.call(this,r,n));return i.setEventHandlers_(),i}return Xe(e,t),e.prototype.setEventHandlers_=function(){var t=this;this.update=mr(gr(this,this.update),30),this.on(this.player_,"timeupdate",this.update),this.on(this.player_,"ended",this.handleEnded),this.updateInterval=null,this.on(this.player_,["playing"],function(){t.clearInterval(t.updateInterval),t.updateInterval=t.setInterval(function(){t.requestAnimationFrame(function(){t.update()})},30)}),this.on(this.player_,["ended","pause","waiting"],function(){t.clearInterval(t.updateInterval)}),this.on(this.player_,["timeupdate","ended"],this.update)},e.prototype.createEl=function(){return t.prototype.createEl.call(this,"div",{className:"vjs-progress-holder"},{"aria-label":this.localize("Progress Bar")})},e.prototype.update_=function(t,e){var r=this.player_.duration();this.el_.setAttribute("aria-valuenow",(100*e).toFixed(2)),this.el_.setAttribute("aria-valuetext",this.localize("progress bar timing: currentTime={1} duration={2}",[yi(t,r),yi(r,r)],"{1} of {2}")),this.bar.update(A(this.el_),e)},e.prototype.update=function(e){var r=t.prototype.update.call(this);return this.update_(this.getCurrentTime_(),r),r},e.prototype.getCurrentTime_=function(){return this.player_.scrubbing()?this.player_.getCache().currentTime:this.player_.currentTime()},e.prototype.handleEnded=function(t){this.update_(this.player_.duration(),1)},e.prototype.getPercent=function(){var t=this.getCurrentTime_()/this.player_.duration();return t>=1?1:t},e.prototype.handleMouseDown=function(e){D(e)&&(e.stopPropagation(),this.player_.scrubbing(!0),this.videoWasPlaying=!this.player_.paused(),this.player_.pause(),t.prototype.handleMouseDown.call(this,e))},e.prototype.handleMouseMove=function(t){if(D(t)){var e=this.calculateDistance(t)*this.player_.duration();e===this.player_.duration()&&(e-=.1),this.player_.currentTime(e)}},e.prototype.enable=function(){t.prototype.enable.call(this);var e=this.getChild("mouseTimeDisplay");e&&e.show()},e.prototype.disable=function(){t.prototype.disable.call(this);var e=this.getChild("mouseTimeDisplay");e&&e.hide()},e.prototype.handleMouseUp=function(e){t.prototype.handleMouseUp.call(this,e),e&&e.stopPropagation(),this.player_.scrubbing(!1),this.player_.trigger({type:"timeupdate",target:this,manuallyTriggered:!0}),this.videoWasPlaying&&ct(this.player_.play())},e.prototype.stepForward=function(){this.player_.currentTime(this.player_.currentTime()+5)},e.prototype.stepBack=function(){this.player_.currentTime(this.player_.currentTime()-5)},e.prototype.handleAction=function(t){this.player_.paused()?this.player_.play():this.player_.pause()},e.prototype.handleKeyPress=function(e){32===e.which||13===e.which?(e.preventDefault(),this.handleAction(e)):t.prototype.handleKeyPress&&t.prototype.handleKeyPress.call(this,e)},e}(ki);ji.prototype.options_={children:["loadProgressBar","playProgressBar"],barName:"playProgressBar"},De&&!(De>8)||Se||je||ji.prototype.options_.children.splice(1,0,"mouseTimeDisplay"),ji.prototype.playerEvent="timeupdate",Pr.registerComponent("SeekBar",ji);var Ai=function(t){function e(r,n){Ue(this,e);var i=qe(this,t.call(this,r,n));return i.handleMouseMove=mr(gr(i,i.handleMouseMove),25),i.throttledHandleMouseSeek=mr(gr(i,i.handleMouseSeek),25),i.enable(),i}return Xe(e,t),e.prototype.createEl=function(){return t.prototype.createEl.call(this,"div",{className:"vjs-progress-control vjs-control"})},e.prototype.handleMouseMove=function(t){var e=this.getChild("seekBar");if(e){var r=e.getChild("mouseTimeDisplay"),n=e.el(),i=A(n),o=O(n,t).x;o>1?o=1:o<0&&(o=0),r&&r.update(i,o)}},e.prototype.handleMouseSeek=function(t){var e=this.getChild("seekBar");e&&e.handleMouseMove(t)},e.prototype.enabled=function(){return this.enabled_},e.prototype.disable=function(){this.children().forEach(function(t){return t.disable&&t.disable()}),this.enabled()&&(this.off(["mousedown","touchstart"],this.handleMouseDown),this.off(this.el_,"mousemove",this.handleMouseMove),this.handleMouseUp(),this.addClass("disabled"),this.enabled_=!1)},e.prototype.enable=function(){this.children().forEach(function(t){return t.enable&&t.enable()}),this.enabled()||(this.on(["mousedown","touchstart"],this.handleMouseDown),this.on(this.el_,"mousemove",this.handleMouseMove),this.removeClass("disabled"),this.enabled_=!0)},e.prototype.handleMouseDown=function(t){var e=this.el_.ownerDocument,r=this.getChild("seekBar");r&&r.handleMouseDown(t),this.on(e,"mousemove",this.throttledHandleMouseSeek),this.on(e,"touchmove",this.throttledHandleMouseSeek),this.on(e,"mouseup",this.handleMouseUp),this.on(e,"touchend",this.handleMouseUp)},e.prototype.handleMouseUp=function(t){var e=this.el_.ownerDocument,r=this.getChild("seekBar");r&&r.handleMouseUp(t),this.off(e,"mousemove",this.throttledHandleMouseSeek),this.off(e,"touchmove",this.throttledHandleMouseSeek),this.off(e,"mouseup",this.handleMouseUp),this.off(e,"touchend",this.handleMouseUp)},e}(Pr);Ai.prototype.options_={children:["seekBar"]},Pr.registerComponent("ProgressControl",Ai);var Pi=function(t){function e(r,n){Ue(this,e);var i=qe(this,t.call(this,r,n));return i.on(r,"fullscreenchange",i.handleFullscreenChange),i}return Xe(e,t),e.prototype.buildCSSClass=function(){return"vjs-fullscreen-control "+t.prototype.buildCSSClass.call(this)},e.prototype.handleFullscreenChange=function(t){this.player_.isFullscreen()?this.controlText("Non-Fullscreen"):this.controlText("Fullscreen")},e.prototype.handleClick=function(t){this.player_.isFullscreen()?this.player_.exitFullscreen():this.player_.requestFullscreen()},e}(ui);Pi.prototype.controlText_="Fullscreen",Pr.registerComponent("FullscreenToggle",Pi);var Oi=function(t,e){e.tech_&&!e.tech_.featuresVolumeControl&&t.addClass("vjs-hidden"),t.on(e,"loadstart",function(){e.tech_.featuresVolumeControl?t.removeClass("vjs-hidden"):t.addClass("vjs-hidden")})},Mi=function(t){function e(){return Ue(this,e),qe(this,t.apply(this,arguments))}return Xe(e,t),e.prototype.createEl=function(){return t.prototype.createEl.call(this,"div",{className:"vjs-volume-level",innerHTML:'<span class="vjs-control-text"></span>'})},e}(Pr);Pr.registerComponent("VolumeLevel",Mi);var Ni=function(t){function e(r,n){Ue(this,e);var i=qe(this,t.call(this,r,n));return i.on("slideractive",i.updateLastVolume_),i.on(r,"volumechange",i.updateARIAAttributes),r.ready(function(){return i.updateARIAAttributes()}),i}return Xe(e,t),e.prototype.createEl=function(){return t.prototype.createEl.call(this,"div",{className:"vjs-volume-bar vjs-slider-bar"},{"aria-label":this.localize("Volume Level"),"aria-live":"polite"})},e.prototype.handleMouseDown=function(e){D(e)&&t.prototype.handleMouseDown.call(this,e)},e.prototype.handleMouseMove=function(t){D(t)&&(this.checkMuted(),this.player_.volume(this.calculateDistance(t)))},e.prototype.checkMuted=function(){this.player_.muted()&&this.player_.muted(!1)},e.prototype.getPercent=function(){return this.player_.muted()?0:this.player_.volume()},e.prototype.stepForward=function(){this.checkMuted(),this.player_.volume(this.player_.volume()+.1)},e.prototype.stepBack=function(){this.checkMuted(),this.player_.volume(this.player_.volume()-.1)},e.prototype.updateARIAAttributes=function(t){var e=this.player_.muted()?0:this.volumeAsPercentage_();this.el_.setAttribute("aria-valuenow",e),this.el_.setAttribute("aria-valuetext",e+"%")},e.prototype.volumeAsPercentage_=function(){return Math.round(100*this.player_.volume())},e.prototype.updateLastVolume_=function(){var t=this,e=this.player_.volume();this.one("sliderinactive",function(){0===t.player_.volume()&&t.player_.lastVolume_(e)})},e}(ki);Ni.prototype.options_={children:["volumeLevel"],barName:"volumeLevel"},Ni.prototype.playerEvent="volumechange",Pr.registerComponent("VolumeBar",Ni);var Ii=function(t){function e(r){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};Ue(this,e),n.vertical=n.vertical||!1,(void 0===n.volumeBar||o(n.volumeBar))&&(n.volumeBar=n.volumeBar||{},n.volumeBar.vertical=n.vertical);var i=qe(this,t.call(this,r,n));return Oi(i,r),i.throttledHandleMouseMove=mr(gr(i,i.handleMouseMove),25),i.on("mousedown",i.handleMouseDown),i.on("touchstart",i.handleMouseDown),i.on(i.volumeBar,["focus","slideractive"],function(){i.volumeBar.addClass("vjs-slider-active"),i.addClass("vjs-slider-active"),i.trigger("slideractive")}),i.on(i.volumeBar,["blur","sliderinactive"],function(){i.volumeBar.removeClass("vjs-slider-active"),i.removeClass("vjs-slider-active"),i.trigger("sliderinactive")}),i}return Xe(e,t),e.prototype.createEl=function(){var e="vjs-volume-horizontal";return this.options_.vertical&&(e="vjs-volume-vertical"),t.prototype.createEl.call(this,"div",{className:"vjs-volume-control vjs-control "+e})},e.prototype.handleMouseDown=function(t){var e=this.el_.ownerDocument;this.on(e,"mousemove",this.throttledHandleMouseMove),this.on(e,"touchmove",this.throttledHandleMouseMove),this.on(e,"mouseup",this.handleMouseUp),this.on(e,"touchend",this.handleMouseUp)},e.prototype.handleMouseUp=function(t){var e=this.el_.ownerDocument;this.off(e,"mousemove",this.throttledHandleMouseMove),this.off(e,"touchmove",this.throttledHandleMouseMove),this.off(e,"mouseup",this.handleMouseUp),this.off(e,"touchend",this.handleMouseUp)},e.prototype.handleMouseMove=function(t){this.volumeBar.handleMouseMove(t)},e}(Pr);Ii.prototype.options_={children:["volumeBar"]},Pr.registerComponent("VolumeControl",Ii);var Li=function(t){function e(r,n){Ue(this,e);var i=qe(this,t.call(this,r,n));return Oi(i,r),i.on(r,["loadstart","volumechange"],i.update),i}return Xe(e,t),e.prototype.buildCSSClass=function(){return"vjs-mute-control "+t.prototype.buildCSSClass.call(this)},e.prototype.handleClick=function(t){var e=this.player_.volume(),r=this.player_.lastVolume_();if(0===e){var n=r<.1?.1:r;this.player_.volume(n),this.player_.muted(!1)}else this.player_.muted(!this.player_.muted())},e.prototype.update=function(t){this.updateIcon_(),this.updateControlText_()},e.prototype.updateIcon_=function(){var t=this.player_.volume(),e=3;0===t||this.player_.muted()?e=0:t<.33?e=1:t<.67&&(e=2);for(var r=0;r<4;r++)b(this.el_,"vjs-vol-"+r);_(this.el_,"vjs-vol-"+e)},e.prototype.updateControlText_=function(){var t=this.player_.muted()||0===this.player_.volume(),e=t?"Unmute":"Mute";this.controlText()!==e&&this.controlText(e)},e}(ui);Li.prototype.controlText_="Mute",Pr.registerComponent("MuteToggle",Li);var Ri=function(t){function e(r){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};Ue(this,e),void 0!==n.inline?n.inline=n.inline:n.inline=!0,(void 0===n.volumeControl||o(n.volumeControl))&&(n.volumeControl=n.volumeControl||{},n.volumeControl.vertical=!n.inline);var i=qe(this,t.call(this,r,n));return Oi(i,r),i.on(i.volumeControl,["slideractive"],i.sliderActive_),i.on(i.volumeControl,["sliderinactive"],i.sliderInactive_),i}return Xe(e,t),e.prototype.sliderActive_=function(){this.addClass("vjs-slider-active")},e.prototype.sliderInactive_=function(){this.removeClass("vjs-slider-active")},e.prototype.createEl=function(){var e="vjs-volume-panel-horizontal";return this.options_.inline||(e="vjs-volume-panel-vertical"),t.prototype.createEl.call(this,"div",{className:"vjs-volume-panel vjs-control "+e})},e}(Pr);Ri.prototype.options_={children:["muteToggle","volumeControl"]},Pr.registerComponent("VolumePanel",Ri);var Di=function(t){function e(r,n){Ue(this,e);var i=qe(this,t.call(this,r,n));return n&&(i.menuButton_=n.menuButton),i.focusedChild_=-1,i.on("keydown",i.handleKeyPress),i}return Xe(e,t),e.prototype.addItem=function(t){this.addChild(t),t.on("click",gr(this,function(e){this.menuButton_&&(this.menuButton_.unpressButton(),"CaptionSettingsMenuItem"!==t.name()&&this.menuButton_.focus())}))},e.prototype.createEl=function(){var e=this.options_.contentElType||"ul";this.contentEl_=v(e,{className:"vjs-menu-content"}),this.contentEl_.setAttribute("role","menu");var r=t.prototype.createEl.call(this,"div",{append:this.contentEl_,className:"vjs-menu"});return r.appendChild(this.contentEl_),X(r,"click",function(t){t.preventDefault(),t.stopImmediatePropagation()}),r},e.prototype.dispose=function(){this.contentEl_=null,t.prototype.dispose.call(this)},e.prototype.handleKeyPress=function(t){37===t.which||40===t.which?(t.preventDefault(),this.stepForward()):38!==t.which&&39!==t.which||(t.preventDefault(),this.stepBack())},e.prototype.stepForward=function(){var t=0;void 0!==this.focusedChild_&&(t=this.focusedChild_+1),this.focus(t)},e.prototype.stepBack=function(){var t=0;void 0!==this.focusedChild_&&(t=this.focusedChild_-1),this.focus(t)},e.prototype.focus=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=this.children().slice();e.length&&e[0].className&&/vjs-menu-title/.test(e[0].className)&&e.shift(),e.length>0&&(t<0?t=0:t>=e.length&&(t=e.length-1),this.focusedChild_=t,e[t].el_.focus())},e}(Pr);Pr.registerComponent("Menu",Di);var Bi=function(t){function e(r){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};Ue(this,e);var i=qe(this,t.call(this,r,n));i.menuButton_=new ui(r,n),i.menuButton_.controlText(i.controlText_),i.menuButton_.el_.setAttribute("aria-haspopup","true");var o=ui.prototype.buildCSSClass();return i.menuButton_.el_.className=i.buildCSSClass()+" "+o,i.menuButton_.removeClass("vjs-control"),i.addChild(i.menuButton_),i.update(),i.enabled_=!0,i.on(i.menuButton_,"tap",i.handleClick),i.on(i.menuButton_,"click",i.handleClick),i.on(i.menuButton_,"focus",i.handleFocus),i.on(i.menuButton_,"blur",i.handleBlur),i.on("keydown",i.handleSubmenuKeyPress),i}return Xe(e,t),e.prototype.update=function(){var t=this.createMenu();this.menu&&(this.menu.dispose(),this.removeChild(this.menu)),this.menu=t,this.addChild(t),this.buttonPressed_=!1,this.menuButton_.el_.setAttribute("aria-expanded","false"),this.items&&this.items.length<=this.hideThreshold_?this.hide():this.show()},e.prototype.createMenu=function(){var t=new Di(this.player_,{menuButton:this});if(this.hideThreshold_=0,this.options_.title){var e=v("li",{className:"vjs-menu-title",innerHTML:Q(this.options_.title),tabIndex:-1});this.hideThreshold_+=1,t.children_.unshift(e),g(e,t.contentEl())}if(this.items=this.createItems(),this.items)for(var r=0;r<this.items.length;r++)t.addItem(this.items[r]);return t},e.prototype.createItems=function(){},e.prototype.createEl=function(){return t.prototype.createEl.call(this,"div",{className:this.buildWrapperCSSClass()},{})},e.prototype.buildWrapperCSSClass=function(){var e="vjs-menu-button";return!0===this.options_.inline?e+="-inline":e+="-popup","vjs-menu-button "+e+" "+ui.prototype.buildCSSClass()+" "+t.prototype.buildCSSClass.call(this)},e.prototype.buildCSSClass=function(){var e="vjs-menu-button";return!0===this.options_.inline?e+="-inline":e+="-popup","vjs-menu-button "+e+" "+t.prototype.buildCSSClass.call(this)},e.prototype.controlText=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.menuButton_.el();return this.menuButton_.controlText(t,e)},e.prototype.handleClick=function(t){this.one(this.menu.contentEl(),"mouseleave",gr(this,function(t){this.unpressButton(),this.el_.blur()})),this.buttonPressed_?this.unpressButton():this.pressButton()},e.prototype.focus=function(){this.menuButton_.focus()},e.prototype.blur=function(){this.menuButton_.blur()},e.prototype.handleFocus=function(){X(_e,"keydown",gr(this,this.handleKeyPress))},e.prototype.handleBlur=function(){q(_e,"keydown",gr(this,this.handleKeyPress))},e.prototype.handleKeyPress=function(t){27===t.which||9===t.which?(this.buttonPressed_&&this.unpressButton(),9!==t.which&&(t.preventDefault(),this.menuButton_.el_.focus())):38!==t.which&&40!==t.which||this.buttonPressed_||(this.pressButton(),t.preventDefault())},e.prototype.handleSubmenuKeyPress=function(t){27!==t.which&&9!==t.which||(this.buttonPressed_&&this.unpressButton(),9!==t.which&&(t.preventDefault(),this.menuButton_.el_.focus()))},e.prototype.pressButton=function(){if(this.enabled_){if(this.buttonPressed_=!0,this.menu.lockShowing(),this.menuButton_.el_.setAttribute("aria-expanded","true"),Se&&d())return;this.menu.focus()}},e.prototype.unpressButton=function(){this.enabled_&&(this.buttonPressed_=!1,this.menu.unlockShowing(),this.menuButton_.el_.setAttribute("aria-expanded","false"))},e.prototype.disable=function(){this.unpressButton(),this.enabled_=!1,this.addClass("vjs-disabled"),this.menuButton_.disable()},e.prototype.enable=function(){this.enabled_=!0,this.removeClass("vjs-disabled"),this.menuButton_.enable()},e}(Pr);Pr.registerComponent("MenuButton",Bi);var Fi=function(t){function e(r,n){Ue(this,e);var i=n.tracks,o=qe(this,t.call(this,r,n));if(o.items.length<=1&&o.hide(),!i)return qe(o);var s=gr(o,o.update);return i.addEventListener("removetrack",s),i.addEventListener("addtrack",s),o.player_.on("ready",s),o.player_.on("dispose",function(){i.removeEventListener("removetrack",s),i.removeEventListener("addtrack",s)}),o}return Xe(e,t),e}(Bi);Pr.registerComponent("TrackButton",Fi);var Hi=function(t){function e(r,n){Ue(this,e);var i=qe(this,t.call(this,r,n));return i.selectable=n.selectable,i.isSelected_=n.selected||!1,i.selected(i.isSelected_),i.selectable?i.el_.setAttribute("role","menuitemcheckbox"):i.el_.setAttribute("role","menuitem"),i}return Xe(e,t),e.prototype.createEl=function(e,r,i){return this.nonIconControl=!0,t.prototype.createEl.call(this,"li",n({className:"vjs-menu-item",innerHTML:'<span class="vjs-menu-item-text">'+this.localize(this.options_.label)+"</span>",tabIndex:-1},r),i)},e.prototype.handleClick=function(t){this.selected(!0)},e.prototype.selected=function(t){this.selectable&&(t?(this.addClass("vjs-selected"),this.el_.setAttribute("aria-checked","true"),this.controlText(", selected"),this.isSelected_=!0):(this.removeClass("vjs-selected"),this.el_.setAttribute("aria-checked","false"),this.controlText(""),this.isSelected_=!1))},e}(oi);Pr.registerComponent("MenuItem",Hi);var Vi=function(t){function e(r,n){Ue(this,e);var i=n.track,o=r.textTracks();n.label=i.label||i.language||"Unknown",n.selected="showing"===i.mode;var s=qe(this,t.call(this,r,n));s.track=i;var a=function(){for(var t=arguments.length,e=Array(t),r=0;r<t;r++)e[r]=arguments[r];s.handleTracksChange.apply(s,e)},l=function(){for(var t=arguments.length,e=Array(t),r=0;r<t;r++)e[r]=arguments[r];s.handleSelectedLanguageChange.apply(s,e)};if(r.on(["loadstart","texttrackchange"],a),o.addEventListener("change",a),o.addEventListener("selectedlanguagechange",l),s.on("dispose",function(){r.off(["loadstart","texttrackchange"],a),o.removeEventListener("change",a),o.removeEventListener("selectedlanguagechange",l)}),void 0===o.onchange){var c=void 0;s.on(["tap","click"],function(){if("object"!==We(fe.Event))try{c=new fe.Event("change")}catch(t){}c||(c=_e.createEvent("Event"),c.initEvent("change",!0,!0)),o.dispatchEvent(c)})}return s.handleTracksChange(),s}return Xe(e,t),e.prototype.handleClick=function(e){var r=this.track.kind,n=this.track.kinds,i=this.player_.textTracks();if(n||(n=[r]),t.prototype.handleClick.call(this,e),i)for(var o=0;o<i.length;o++){var s=i[o];s===this.track&&n.indexOf(s.kind)>-1?"showing"!==s.mode&&(s.mode="showing"):"disabled"!==s.mode&&(s.mode="disabled")}},e.prototype.handleTracksChange=function(t){var e="showing"===this.track.mode;e!==this.isSelected_&&this.selected(e)},e.prototype.handleSelectedLanguageChange=function(t){if("showing"===this.track.mode){var e=this.player_.cache_.selectedLanguage;if(e&&e.enabled&&e.language===this.track.language&&e.kind!==this.track.kind)return;this.player_.cache_.selectedLanguage={enabled:!0,language:this.track.language,kind:this.track.kind}}},e.prototype.dispose=function(){this.track=null,t.prototype.dispose.call(this)},e}(Hi);Pr.registerComponent("TextTrackMenuItem",Vi);var zi=function(t){function e(r,n){return Ue(this,e),n.track={player:r,kind:n.kind,kinds:n.kinds,default:!1,mode:"disabled"},n.kinds||(n.kinds=[n.kind]),
n.label?n.track.label=n.label:n.track.label=n.kinds.join(" and ")+" off",n.selectable=!0,qe(this,t.call(this,r,n))}return Xe(e,t),e.prototype.handleTracksChange=function(t){for(var e=this.player().textTracks(),r=!0,n=0,i=e.length;n<i;n++){var o=e[n];if(this.options_.kinds.indexOf(o.kind)>-1&&"showing"===o.mode){r=!1;break}}r!==this.isSelected_&&this.selected(r)},e.prototype.handleSelectedLanguageChange=function(t){for(var e=this.player().textTracks(),r=!0,n=0,i=e.length;n<i;n++){var o=e[n];if(["captions","descriptions","subtitles"].indexOf(o.kind)>-1&&"showing"===o.mode){r=!1;break}}r&&(this.player_.cache_.selectedLanguage={enabled:!1})},e}(Vi);Pr.registerComponent("OffTextTrackMenuItem",zi);var Wi=function(t){function e(r){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Ue(this,e),n.tracks=r.textTracks(),qe(this,t.call(this,r,n))}return Xe(e,t),e.prototype.createItems=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Vi,r=void 0;this.label_&&(r=this.label_+" off"),t.push(new zi(this.player_,{kinds:this.kinds_,kind:this.kind_,label:r})),this.hideThreshold_+=1;var n=this.player_.textTracks();Array.isArray(this.kinds_)||(this.kinds_=[this.kind_]);for(var i=0;i<n.length;i++){var o=n[i];if(this.kinds_.indexOf(o.kind)>-1){var s=new e(this.player_,{track:o,selectable:!0});s.addClass("vjs-"+o.kind+"-menu-item"),t.push(s)}}return t},e}(Fi);Pr.registerComponent("TextTrackButton",Wi);var Ui=function(t){function e(r,n){Ue(this,e);var i=n.track,o=n.cue,s=r.currentTime();n.selectable=!0,n.label=o.text,n.selected=o.startTime<=s&&s<o.endTime;var a=qe(this,t.call(this,r,n));return a.track=i,a.cue=o,i.addEventListener("cuechange",gr(a,a.update)),a}return Xe(e,t),e.prototype.handleClick=function(e){t.prototype.handleClick.call(this),this.player_.currentTime(this.cue.startTime),this.update(this.cue.startTime)},e.prototype.update=function(t){var e=this.cue,r=this.player_.currentTime();this.selected(e.startTime<=r&&r<e.endTime)},e}(Hi);Pr.registerComponent("ChaptersTrackMenuItem",Ui);var Xi=function(t){function e(r,n,i){return Ue(this,e),qe(this,t.call(this,r,n,i))}return Xe(e,t),e.prototype.buildCSSClass=function(){return"vjs-chapters-button "+t.prototype.buildCSSClass.call(this)},e.prototype.buildWrapperCSSClass=function(){return"vjs-chapters-button "+t.prototype.buildWrapperCSSClass.call(this)},e.prototype.update=function(e){this.track_&&(!e||"addtrack"!==e.type&&"removetrack"!==e.type)||this.setTrack(this.findChaptersTrack()),t.prototype.update.call(this)},e.prototype.setTrack=function(t){if(this.track_!==t){if(this.updateHandler_||(this.updateHandler_=this.update.bind(this)),this.track_){var e=this.player_.remoteTextTrackEls().getTrackElementByTrack_(this.track_);e&&e.removeEventListener("load",this.updateHandler_),this.track_=null}if(this.track_=t,this.track_){this.track_.mode="hidden";var r=this.player_.remoteTextTrackEls().getTrackElementByTrack_(this.track_);r&&r.addEventListener("load",this.updateHandler_)}}},e.prototype.findChaptersTrack=function(){for(var t=this.player_.textTracks()||[],e=t.length-1;e>=0;e--){var r=t[e];if(r.kind===this.kind_)return r}},e.prototype.getMenuCaption=function(){return this.track_&&this.track_.label?this.track_.label:this.localize(Q(this.kind_))},e.prototype.createMenu=function(){return this.options_.title=this.getMenuCaption(),t.prototype.createMenu.call(this)},e.prototype.createItems=function(){var t=[];if(!this.track_)return t;var e=this.track_.cues;if(!e)return t;for(var r=0,n=e.length;r<n;r++){var i=e[r],o=new Ui(this.player_,{track:this.track_,cue:i});t.push(o)}return t},e}(Wi);Xi.prototype.kind_="chapters",Xi.prototype.controlText_="Chapters",Pr.registerComponent("ChaptersButton",Xi);var qi=function(t){function e(r,n,i){Ue(this,e);var o=qe(this,t.call(this,r,n,i)),s=r.textTracks(),a=gr(o,o.handleTracksChange);return s.addEventListener("change",a),o.on("dispose",function(){s.removeEventListener("change",a)}),o}return Xe(e,t),e.prototype.handleTracksChange=function(t){for(var e=this.player().textTracks(),r=!1,n=0,i=e.length;n<i;n++){var o=e[n];if(o.kind!==this.kind_&&"showing"===o.mode){r=!0;break}}r?this.disable():this.enable()},e.prototype.buildCSSClass=function(){return"vjs-descriptions-button "+t.prototype.buildCSSClass.call(this)},e.prototype.buildWrapperCSSClass=function(){return"vjs-descriptions-button "+t.prototype.buildWrapperCSSClass.call(this)},e}(Wi);qi.prototype.kind_="descriptions",qi.prototype.controlText_="Descriptions",Pr.registerComponent("DescriptionsButton",qi);var Ki=function(t){function e(r,n,i){return Ue(this,e),qe(this,t.call(this,r,n,i))}return Xe(e,t),e.prototype.buildCSSClass=function(){return"vjs-subtitles-button "+t.prototype.buildCSSClass.call(this)},e.prototype.buildWrapperCSSClass=function(){return"vjs-subtitles-button "+t.prototype.buildWrapperCSSClass.call(this)},e}(Wi);Ki.prototype.kind_="subtitles",Ki.prototype.controlText_="Subtitles",Pr.registerComponent("SubtitlesButton",Ki);var $i=function(t){function e(r,n){Ue(this,e),n.track={player:r,kind:n.kind,label:n.kind+" settings",selectable:!1,default:!1,mode:"disabled"},n.selectable=!1,n.name="CaptionSettingsMenuItem";var i=qe(this,t.call(this,r,n));return i.addClass("vjs-texttrack-settings"),i.controlText(", opens "+n.kind+" settings dialog"),i}return Xe(e,t),e.prototype.handleClick=function(t){this.player().getChild("textTrackSettings").open()},e}(Vi);Pr.registerComponent("CaptionSettingsMenuItem",$i);var Yi=function(t){function e(r,n,i){return Ue(this,e),qe(this,t.call(this,r,n,i))}return Xe(e,t),e.prototype.buildCSSClass=function(){return"vjs-captions-button "+t.prototype.buildCSSClass.call(this)},e.prototype.buildWrapperCSSClass=function(){return"vjs-captions-button "+t.prototype.buildWrapperCSSClass.call(this)},e.prototype.createItems=function(){var e=[];return this.player().tech_&&this.player().tech_.featuresNativeTextTracks||!this.player().getChild("textTrackSettings")||(e.push(new $i(this.player_,{kind:this.kind_})),this.hideThreshold_+=1),t.prototype.createItems.call(this,e)},e}(Wi);Yi.prototype.kind_="captions",Yi.prototype.controlText_="Captions",Pr.registerComponent("CaptionsButton",Yi);var Gi=function(t){function e(){return Ue(this,e),qe(this,t.apply(this,arguments))}return Xe(e,t),e.prototype.createEl=function(e,r,i){var o='<span class="vjs-menu-item-text">'+this.localize(this.options_.label);return"captions"===this.options_.track.kind&&(o+='\n        <span aria-hidden="true" class="vjs-icon-placeholder"></span>\n        <span class="vjs-control-text"> '+this.localize("Captions")+"</span>\n      "),o+="</span>",t.prototype.createEl.call(this,e,n({innerHTML:o},r),i)},e}(Vi);Pr.registerComponent("SubsCapsMenuItem",Gi);var Ji=function(t){function e(r){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};Ue(this,e);var i=qe(this,t.call(this,r,n));return i.label_="subtitles",["en","en-us","en-ca","fr-ca"].indexOf(i.player_.language_)>-1&&(i.label_="captions"),i.menuButton_.controlText(Q(i.label_)),i}return Xe(e,t),e.prototype.buildCSSClass=function(){return"vjs-subs-caps-button "+t.prototype.buildCSSClass.call(this)},e.prototype.buildWrapperCSSClass=function(){return"vjs-subs-caps-button "+t.prototype.buildWrapperCSSClass.call(this)},e.prototype.createItems=function(){var e=[];return this.player().tech_&&this.player().tech_.featuresNativeTextTracks||!this.player().getChild("textTrackSettings")||(e.push(new $i(this.player_,{kind:this.label_})),this.hideThreshold_+=1),e=t.prototype.createItems.call(this,e,Gi)},e}(Wi);Ji.prototype.kinds_=["captions","subtitles"],Ji.prototype.controlText_="Subtitles",Pr.registerComponent("SubsCapsButton",Ji);var Qi=function(t){function e(r,n){Ue(this,e);var i=n.track,o=r.audioTracks();n.label=i.label||i.language||"Unknown",n.selected=i.enabled;var s=qe(this,t.call(this,r,n));s.track=i;var a=function(){for(var t=arguments.length,e=Array(t),r=0;r<t;r++)e[r]=arguments[r];s.handleTracksChange.apply(s,e)};return o.addEventListener("change",a),s.on("dispose",function(){o.removeEventListener("change",a)}),s}return Xe(e,t),e.prototype.handleClick=function(e){var r=this.player_.audioTracks();t.prototype.handleClick.call(this,e);for(var n=0;n<r.length;n++){var i=r[n];i.enabled=i===this.track}},e.prototype.handleTracksChange=function(t){this.selected(this.track.enabled)},e}(Hi);Pr.registerComponent("AudioTrackMenuItem",Qi);var Zi=function(t){function e(r){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Ue(this,e),n.tracks=r.audioTracks(),qe(this,t.call(this,r,n))}return Xe(e,t),e.prototype.buildCSSClass=function(){return"vjs-audio-button "+t.prototype.buildCSSClass.call(this)},e.prototype.buildWrapperCSSClass=function(){return"vjs-audio-button "+t.prototype.buildWrapperCSSClass.call(this)},e.prototype.createItems=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];this.hideThreshold_=1;for(var e=this.player_.audioTracks(),r=0;r<e.length;r++){var n=e[r];t.push(new Qi(this.player_,{track:n,selectable:!0}))}return t},e}(Fi);Zi.prototype.controlText_="Audio Track",Pr.registerComponent("AudioTrackButton",Zi);var to=function(t){function e(r,n){Ue(this,e);var i=n.rate,o=parseFloat(i,10);n.label=i,n.selected=1===o,n.selectable=!0;var s=qe(this,t.call(this,r,n));return s.label=i,s.rate=o,s.on(r,"ratechange",s.update),s}return Xe(e,t),e.prototype.handleClick=function(e){t.prototype.handleClick.call(this),this.player().playbackRate(this.rate)},e.prototype.update=function(t){this.selected(this.player().playbackRate()===this.rate)},e}(Hi);to.prototype.contentElType="button",Pr.registerComponent("PlaybackRateMenuItem",to);var eo=function(t){function e(r,n){Ue(this,e);var i=qe(this,t.call(this,r,n));return i.updateVisibility(),i.updateLabel(),i.on(r,"loadstart",i.updateVisibility),i.on(r,"ratechange",i.updateLabel),i}return Xe(e,t),e.prototype.createEl=function(){var e=t.prototype.createEl.call(this);return this.labelEl_=v("div",{className:"vjs-playback-rate-value",innerHTML:"1x"}),e.appendChild(this.labelEl_),e},e.prototype.dispose=function(){this.labelEl_=null,t.prototype.dispose.call(this)},e.prototype.buildCSSClass=function(){return"vjs-playback-rate "+t.prototype.buildCSSClass.call(this)},e.prototype.buildWrapperCSSClass=function(){return"vjs-playback-rate "+t.prototype.buildWrapperCSSClass.call(this)},e.prototype.createMenu=function(){var t=new Di(this.player()),e=this.playbackRates();if(e)for(var r=e.length-1;r>=0;r--)t.addChild(new to(this.player(),{rate:e[r]+"x"}));return t},e.prototype.updateARIAAttributes=function(){this.el().setAttribute("aria-valuenow",this.player().playbackRate())},e.prototype.handleClick=function(t){for(var e=this.player().playbackRate(),r=this.playbackRates(),n=r[0],i=0;i<r.length;i++)if(r[i]>e){n=r[i];break}this.player().playbackRate(n)},e.prototype.playbackRates=function(){return this.options_.playbackRates||this.options_.playerOptions&&this.options_.playerOptions.playbackRates},e.prototype.playbackRateSupported=function(){return this.player().tech_&&this.player().tech_.featuresPlaybackRate&&this.playbackRates()&&this.playbackRates().length>0},e.prototype.updateVisibility=function(t){this.playbackRateSupported()?this.removeClass("vjs-hidden"):this.addClass("vjs-hidden")},e.prototype.updateLabel=function(t){this.playbackRateSupported()&&(this.labelEl_.innerHTML=this.player().playbackRate()+"x")},e}(Bi);eo.prototype.controlText_="Playback Rate",Pr.registerComponent("PlaybackRateMenuButton",eo);var ro=function(t){function e(){return Ue(this,e),qe(this,t.apply(this,arguments))}return Xe(e,t),e.prototype.buildCSSClass=function(){return"vjs-spacer "+t.prototype.buildCSSClass.call(this)},e.prototype.createEl=function(){return t.prototype.createEl.call(this,"div",{className:this.buildCSSClass()})},e}(Pr);Pr.registerComponent("Spacer",ro);var no=function(t){function e(){return Ue(this,e),qe(this,t.apply(this,arguments))}return Xe(e,t),e.prototype.buildCSSClass=function(){return"vjs-custom-control-spacer "+t.prototype.buildCSSClass.call(this)},e.prototype.createEl=function(){var e=t.prototype.createEl.call(this,{className:this.buildCSSClass()});return e.innerHTML=" ",e},e}(ro);Pr.registerComponent("CustomControlSpacer",no);var io=function(t){function e(){return Ue(this,e),qe(this,t.apply(this,arguments))}return Xe(e,t),e.prototype.createEl=function(){return t.prototype.createEl.call(this,"div",{className:"vjs-control-bar",dir:"ltr"})},e}(Pr);io.prototype.options_={children:["playToggle","volumePanel","currentTimeDisplay","timeDivider","durationDisplay","progressControl","liveDisplay","remainingTimeDisplay","customControlSpacer","playbackRateMenuButton","chaptersButton","descriptionsButton","subsCapsButton","audioTrackButton","fullscreenToggle"]},Pr.registerComponent("ControlBar",io);var oo=function(t){function e(r,n){Ue(this,e);var i=qe(this,t.call(this,r,n));return i.on(r,"error",i.open),i}return Xe(e,t),e.prototype.buildCSSClass=function(){return"vjs-error-display "+t.prototype.buildCSSClass.call(this)},e.prototype.content=function(){var t=this.player().error();return t?this.localize(t.message):""},e}(Ur);oo.prototype.options_=tt(Ur.prototype.options_,{pauseOnOpen:!1,fillAlways:!0,temporary:!1,uncloseable:!0}),Pr.registerComponent("ErrorDisplay",oo);var so=["#000","Black"],ao=["#00F","Blue"],lo=["#0FF","Cyan"],co=["#0F0","Green"],uo=["#F0F","Magenta"],ho=["#F00","Red"],po=["#FFF","White"],fo=["#FF0","Yellow"],vo=["1","Opaque"],yo=["0.5","Semi-Transparent"],go=["0","Transparent"],mo={backgroundColor:{selector:".vjs-bg-color > select",id:"captions-background-color-%s",label:"Color",options:[so,po,ho,co,ao,fo,uo,lo]},backgroundOpacity:{selector:".vjs-bg-opacity > select",id:"captions-background-opacity-%s",label:"Transparency",options:[vo,yo,go]},color:{selector:".vjs-fg-color > select",id:"captions-foreground-color-%s",label:"Color",options:[po,so,ho,co,ao,fo,uo,lo]},edgeStyle:{selector:".vjs-edge-style > select",id:"%s",label:"Text Edge Style",options:[["none","None"],["raised","Raised"],["depressed","Depressed"],["uniform","Uniform"],["dropshadow","Dropshadow"]]},fontFamily:{selector:".vjs-font-family > select",id:"captions-font-family-%s",label:"Font Family",options:[["proportionalSansSerif","Proportional Sans-Serif"],["monospaceSansSerif","Monospace Sans-Serif"],["proportionalSerif","Proportional Serif"],["monospaceSerif","Monospace Serif"],["casual","Casual"],["script","Script"],["small-caps","Small Caps"]]},fontPercent:{selector:".vjs-font-percent > select",id:"captions-font-size-%s",label:"Font Size",options:[["0.50","50%"],["0.75","75%"],["1.00","100%"],["1.25","125%"],["1.50","150%"],["1.75","175%"],["2.00","200%"],["3.00","300%"],["4.00","400%"]],default:2,parser:function(t){return"1.00"===t?null:Number(t)}},textOpacity:{selector:".vjs-text-opacity > select",id:"captions-foreground-opacity-%s",label:"Transparency",options:[vo,yo]},windowColor:{selector:".vjs-window-color > select",id:"captions-window-color-%s",label:"Color"},windowOpacity:{selector:".vjs-window-opacity > select",id:"captions-window-opacity-%s",label:"Transparency",options:[go,yo,vo]}};mo.windowColor.options=mo.backgroundColor.options;var _o=function(t){function n(r,i){Ue(this,n),i.temporary=!1;var o=qe(this,t.call(this,r,i));return o.updateDisplay=gr(o,o.updateDisplay),o.fill(),o.hasBeenOpened_=o.hasBeenFilled_=!0,o.endDialog=v("p",{className:"vjs-control-text",textContent:o.localize("End of dialog window.")}),o.el().appendChild(o.endDialog),o.setDefaults(),void 0===i.persistTextTrackSettings&&(o.options_.persistTextTrackSettings=o.options_.playerOptions.persistTextTrackSettings),o.on(o.$(".vjs-done-button"),"click",function(){o.saveSettings(),o.close()}),o.on(o.$(".vjs-default-button"),"click",function(){o.setDefaults(),o.updateDisplay()}),e(mo,function(t){o.on(o.$(t.selector),"change",o.updateDisplay)}),o.options_.persistTextTrackSettings&&o.restoreSettings(),o}return Xe(n,t),n.prototype.dispose=function(){this.endDialog=null,t.prototype.dispose.call(this)},n.prototype.createElSelect_=function(t){var e=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"label",i=mo[t],o=i.id.replace("%s",this.id_),s=[r,o].join(" ").trim();return["<"+n+' id="'+o+'" class="'+("label"===n?"vjs-label":"")+'">',this.localize(i.label),"</"+n+">",'<select aria-labelledby="'+s+'">'].concat(i.options.map(function(t){var r=o+"-"+t[1].replace(/\W+/g,"");return['<option id="'+r+'" value="'+t[0]+'" ','aria-labelledby="'+s+" "+r+'">',e.localize(t[1]),"</option>"].join("")})).concat("</select>").join("")},n.prototype.createElFgColor_=function(){var t="captions-text-legend-"+this.id_;return['<fieldset class="vjs-fg-color vjs-track-setting">','<legend id="'+t+'">',this.localize("Text"),"</legend>",this.createElSelect_("color",t),'<span class="vjs-text-opacity vjs-opacity">',this.createElSelect_("textOpacity",t),"</span>","</fieldset>"].join("")},n.prototype.createElBgColor_=function(){var t="captions-background-"+this.id_;return['<fieldset class="vjs-bg-color vjs-track-setting">','<legend id="'+t+'">',this.localize("Background"),"</legend>",this.createElSelect_("backgroundColor",t),'<span class="vjs-bg-opacity vjs-opacity">',this.createElSelect_("backgroundOpacity",t),"</span>","</fieldset>"].join("")},n.prototype.createElWinColor_=function(){var t="captions-window-"+this.id_;return['<fieldset class="vjs-window-color vjs-track-setting">','<legend id="'+t+'">',this.localize("Window"),"</legend>",this.createElSelect_("windowColor",t),'<span class="vjs-window-opacity vjs-opacity">',this.createElSelect_("windowOpacity",t),"</span>","</fieldset>"].join("")},n.prototype.createElColors_=function(){return v("div",{className:"vjs-track-settings-colors",innerHTML:[this.createElFgColor_(),this.createElBgColor_(),this.createElWinColor_()].join("")})},n.prototype.createElFont_=function(){return v("div",{className:"vjs-track-settings-font",innerHTML:['<fieldset class="vjs-font-percent vjs-track-setting">',this.createElSelect_("fontPercent","","legend"),"</fieldset>",'<fieldset class="vjs-edge-style vjs-track-setting">',this.createElSelect_("edgeStyle","","legend"),"</fieldset>",'<fieldset class="vjs-font-family vjs-track-setting">',this.createElSelect_("fontFamily","","legend"),"</fieldset>"].join("")})},n.prototype.createElControls_=function(){var t=this.localize("restore all settings to the default values");return v("div",{className:"vjs-track-settings-controls",innerHTML:['<button class="vjs-default-button" title="'+t+'">',this.localize("Reset"),'<span class="vjs-control-text"> '+t+"</span>","</button>",'<button class="vjs-done-button">'+this.localize("Done")+"</button>"].join("")})},n.prototype.content=function(){return[this.createElColors_(),this.createElFont_(),this.createElControls_()]},n.prototype.label=function(){return this.localize("Caption Settings Dialog")},n.prototype.description=function(){return this.localize("Beginning of dialog window. Escape will cancel and close the window.")},n.prototype.buildCSSClass=function(){return t.prototype.buildCSSClass.call(this)+" vjs-text-track-settings"},n.prototype.getValues=function(){var t=this;return r(mo,function(e,r,n){var i=ae(t.$(r.selector),r.parser);return void 0!==i&&(e[n]=i),e},{})},n.prototype.setValues=function(t){var r=this;e(mo,function(e,n){le(r.$(e.selector),t[n],e.parser)})},n.prototype.setDefaults=function(){var t=this;e(mo,function(e){var r=e.hasOwnProperty("default")?e.default:0;t.$(e.selector).selectedIndex=r})},n.prototype.restoreSettings=function(){var t=void 0;try{t=JSON.parse(fe.localStorage.getItem("vjs-text-track-settings"))}catch(t){tr.warn(t)}t&&this.setValues(t)},n.prototype.saveSettings=function(){if(this.options_.persistTextTrackSettings){var t=this.getValues();try{Object.keys(t).length?fe.localStorage.setItem("vjs-text-track-settings",JSON.stringify(t)):fe.localStorage.removeItem("vjs-text-track-settings")}catch(t){tr.warn(t)}}},n.prototype.updateDisplay=function(){var t=this.player_.getChild("textTrackDisplay");t&&t.updateDisplay()},n.prototype.conditionalBlur_=function(){this.previouslyActiveEl_=null,this.off(_e,"keydown",this.handleKeyDown);var t=this.player_.controlBar,e=t&&t.subsCapsButton,r=t&&t.captionsButton;e?e.focus():r&&r.focus()},n}(Ur);Pr.registerComponent("TextTrackSettings",_o);var bo=function(t){function e(r,n){Ue(this,e);var i=n.ResizeObserver||fe.ResizeObserver;null===n.ResizeObserver&&(i=!1);var o=tt({createEl:!i},n),s=qe(this,t.call(this,r,o));return s.ResizeObserver=n.ResizeObserver||fe.ResizeObserver,s.loadListener_=null,s.resizeObserver_=null,s.debouncedHandler_=_r(function(){s.resizeHandler()},100,!1,r),i?(s.resizeObserver_=new s.ResizeObserver(s.debouncedHandler_),s.resizeObserver_.observe(r.el())):(s.loadListener_=function(){s.el_.contentWindow&&X(s.el_.contentWindow,"resize",s.debouncedHandler_),s.off("load",s.loadListener_)},s.on("load",s.loadListener_)),s}return Xe(e,t),e.prototype.createEl=function(){return t.prototype.createEl.call(this,"iframe",{className:"vjs-resize-manager"})},e.prototype.resizeHandler=function(){this.player_.trigger("playerresize")},e.prototype.dispose=function(){this.resizeObserver_&&(this.player_.el()&&this.resizeObserver_.unobserve(this.player_.el()),this.resizeObserver_.disconnect()),this.el_&&this.el_.contentWindow&&q(this.el_.contentWindow,"resize",this.debouncedHandler_),this.loadListener_&&this.off("load",this.loadListener_),this.ResizeObserver=null,this.resizeObserver=null,this.debouncedHandler_=null,this.loadListener_=null},e}(Pr);Pr.registerComponent("ResizeManager",bo);var To=function(t){var e=t.el();if(e.hasAttribute("src"))return t.triggerSourceset(e.src),!0;var r=t.$$("source"),n=[],i="";if(!r.length)return!1;for(var o=0;o<r.length;o++){var s=r[o].src;s&&-1===n.indexOf(s)&&n.push(s)}return!!n.length&&(1===n.length&&(i=n[0]),t.triggerSourceset(i),!0)},Co={};Re||(Co=Object.defineProperty({},"innerHTML",{get:function(){return this.cloneNode(!0).innerHTML},set:function(t){var e=_e.createElement(this.nodeName.toLowerCase());e.innerHTML=t;for(var r=_e.createDocumentFragment();e.childNodes.length;)r.appendChild(e.childNodes[0]);return this.innerText="",fe.Element.prototype.appendChild.call(this,r),this.innerHTML}}));var ko=function(t,e){for(var r={},n=0;n<t.length&&!((r=Object.getOwnPropertyDescriptor(t[n],e))&&r.set&&r.get);n++);return r.enumerable=!0,r.configurable=!0,r},Eo=function(t){return ko([t.el(),fe.HTMLMediaElement.prototype,fe.Element.prototype,Co],"innerHTML")},wo=function(t){var e=t.el();if(!e.resetSourceWatch_){var r={},n=Eo(t),i=function(r){return function(){for(var n=arguments.length,i=Array(n),o=0;o<n;o++)i[o]=arguments[o];var s=r.apply(e,i);return To(t),s}};["append","appendChild","insertAdjacentHTML"].forEach(function(t){e[t]&&(r[t]=e[t],e[t]=i(r[t]))}),Object.defineProperty(e,"innerHTML",tt(n,{set:i(n.set)})),e.resetSourceWatch_=function(){e.resetSourceWatch_=null,Object.keys(r).forEach(function(t){e[t]=r[t]}),Object.defineProperty(e,"innerHTML",n)},t.one("sourceset",e.resetSourceWatch_)}},So={};Re||(So=Object.defineProperty({},"src",{get:function(){return this.hasAttribute("src")?an(fe.Element.prototype.getAttribute.call(this,"src")):""},set:function(t){return fe.Element.prototype.setAttribute.call(this,"src",t),t}}));var xo=function(t){return ko([t.el(),fe.HTMLMediaElement.prototype,So],"src")},jo=function(t){if(t.featuresSourceset){var e=t.el();if(!e.resetSourceset_){var r=xo(t),n=e.setAttribute,i=e.load;Object.defineProperty(e,"src",tt(r,{set:function(n){var i=r.set.call(e,n);return t.triggerSourceset(e.src),i}})),e.setAttribute=function(r,i){var o=n.call(e,r,i);return/src/i.test(r)&&t.triggerSourceset(e.src),o},e.load=function(){var r=i.call(e);return To(t)||(t.triggerSourceset(""),wo(t)),r},e.currentSrc?t.triggerSourceset(e.currentSrc):To(t)||wo(t),e.resetSourceset_=function(){e.resetSourceset_=null,e.load=i,e.setAttribute=n,Object.defineProperty(e,"src",r),e.resetSourceWatch_&&e.resetSourceWatch_()}}}},Ao=Ke(["Text Tracks are being loaded from another origin but the crossorigin attribute isn't used.\n            This may prevent text tracks from loading."],["Text Tracks are being loaded from another origin but the crossorigin attribute isn't used.\n            This may prevent text tracks from loading."]),Po=function(t){function e(r,n){Ue(this,e);var i=qe(this,t.call(this,r,n)),o=r.source,s=!1;if(o&&(i.el_.currentSrc!==o.src||r.tag&&3===r.tag.initNetworkState_)?i.setSource(o):i.handleLateInit_(i.el_),r.enableSourceset&&i.setupSourcesetHandling_(),i.el_.hasChildNodes()){for(var a=i.el_.childNodes,l=a.length,c=[];l--;){var u=a[l];"track"===u.nodeName.toLowerCase()&&(i.featuresNativeTextTracks?(i.remoteTextTrackEls().addTrackElement_(u),i.remoteTextTracks().addTrack(u.track),i.textTracks().addTrack(u.track),s||i.el_.hasAttribute("crossorigin")||!cn(u.src)||(s=!0)):c.push(u))}for(var h=0;h<c.length;h++)i.el_.removeChild(c[h])}return i.proxyNativeTracks_(),i.featuresNativeTextTracks&&s&&tr.warn(er(Ao)),i.restoreMetadataTracksInIOSNativePlayer_(),(He||Ee||Oe)&&!0===r.nativeControlsForTouch&&i.setControls(!0),i.proxyWebkitFullscreen_(),i.triggerReady(),i}return Xe(e,t),e.prototype.dispose=function(){this.el_&&this.el_.resetSourceset_&&this.el_.resetSourceset_(),e.disposeMediaElement(this.el_),this.options_=null,t.prototype.dispose.call(this)},e.prototype.setupSourcesetHandling_=function(){jo(this)},e.prototype.restoreMetadataTracksInIOSNativePlayer_=function(){var t=this.textTracks(),e=void 0,r=function(){e=[];for(var r=0;r<t.length;r++){var n=t[r];"metadata"===n.kind&&e.push({track:n,storedMode:n.mode})}};r(),t.addEventListener("change",r),this.on("dispose",function(){return t.removeEventListener("change",r)});var n=function r(){for(var n=0;n<e.length;n++){var i=e[n];"disabled"===i.track.mode&&i.track.mode!==i.storedMode&&(i.track.mode=i.storedMode)}t.removeEventListener("change",r)};this.on("webkitbeginfullscreen",function(){t.removeEventListener("change",r),t.removeEventListener("change",n),t.addEventListener("change",n)}),this.on("webkitendfullscreen",function(){t.removeEventListener("change",r),t.addEventListener("change",r),t.removeEventListener("change",n)})},e.prototype.proxyNativeTracks_=function(){var t=this;Pn.names.forEach(function(e){var r=Pn[e],n=t.el()[r.getterName],i=t[r.getterName]();if(t["featuresNative"+r.capitalName+"Tracks"]&&n&&n.addEventListener){var o={change:function(t){i.trigger({type:"change",target:i,currentTarget:i,srcElement:i})},addtrack:function(t){i.addTrack(t.track)},removetrack:function(t){i.removeTrack(t.track)}},s=function(){for(var t=[],e=0;e<i.length;e++){for(var r=!1,o=0;o<n.length;o++)if(n[o]===i[e]){r=!0;break}r||t.push(i[e])}for(;t.length;)i.removeTrack(t.shift())};Object.keys(o).forEach(function(e){var r=o[e];n.addEventListener(e,r),t.on("dispose",function(t){return n.removeEventListener(e,r)})}),t.on("loadstart",s),t.on("dispose",function(e){return t.off("loadstart",s)})}})},e.prototype.createEl=function(){var t=this.options_.tag;if(!t||!this.options_.playerElIngest&&!this.movingMediaElementInDOM){if(t){var r=t.cloneNode(!0);t.parentNode&&t.parentNode.insertBefore(r,t),e.disposeMediaElement(t),t=r}else{t=_e.createElement("video");var i=this.options_.tag&&k(this.options_.tag),o=tt({},i);He&&!0===this.options_.nativeControlsForTouch||delete o.controls,C(t,n(o,{id:this.options_.techId,class:"vjs-tech"}))}t.playerId=this.options_.playerId}void 0!==this.options_.preload&&w(t,"preload",this.options_.preload);for(var s=["loop","muted","playsinline","autoplay"],a=0;a<s.length;a++){var l=s[a],c=this.options_[l];void 0!==c&&(c?w(t,l,l):S(t,l),t[l]=c)}return t},e.prototype.handleLateInit_=function(t){if(0!==t.networkState&&3!==t.networkState){if(0===t.readyState){var e=!1,r=function(){e=!0};this.on("loadstart",r);var n=function(){e||this.trigger("loadstart")};return this.on("loadedmetadata",n),void this.ready(function(){this.off("loadstart",r),this.off("loadedmetadata",n),e||this.trigger("loadstart")})}var i=["loadstart"];i.push("loadedmetadata"),t.readyState>=2&&i.push("loadeddata"),t.readyState>=3&&i.push("canplay"),t.readyState>=4&&i.push("canplaythrough"),this.ready(function(){i.forEach(function(t){this.trigger(t)},this)})}},e.prototype.setCurrentTime=function(t){try{this.el_.currentTime=t}catch(t){tr(t,"Video is not ready. (Video.js)")}},e.prototype.duration=function(){var t=this;if(this.el_.duration===1/0&&je&&Ie&&0===this.el_.currentTime){var e=function e(){t.el_.currentTime>0&&(t.el_.duration===1/0&&t.trigger("durationchange"),t.off("timeupdate",e))};return this.on("timeupdate",e),NaN}return this.el_.duration||NaN},e.prototype.width=function(){return this.el_.offsetWidth},e.prototype.height=function(){return this.el_.offsetHeight},e.prototype.proxyWebkitFullscreen_=function(){var t=this;if("webkitDisplayingFullscreen"in this.el_){var e=function(){this.trigger("fullscreenchange",{isFullscreen:!1})},r=function(){"webkitPresentationMode"in this.el_&&"picture-in-picture"!==this.el_.webkitPresentationMode&&(this.one("webkitendfullscreen",e),this.trigger("fullscreenchange",{isFullscreen:!0}))};this.on("webkitbeginfullscreen",r),this.on("dispose",function(){t.off("webkitbeginfullscreen",r),t.off("webkitendfullscreen",e)})}},e.prototype.supportsFullScreen=function(){if("function"==typeof this.el_.webkitEnterFullScreen){var t=fe.navigator&&fe.navigator.userAgent||"";if(/Android/.test(t)||!/Chrome|Mac OS X 10.5/.test(t))return!0}return!1},e.prototype.enterFullScreen=function(){var t=this.el_;t.paused&&t.networkState<=t.HAVE_METADATA?(this.el_.play(),this.setTimeout(function(){t.pause(),t.webkitEnterFullScreen()},0)):t.webkitEnterFullScreen()},e.prototype.exitFullScreen=function(){this.el_.webkitExitFullScreen()},e.prototype.src=function(t){if(void 0===t)return this.el_.src;this.setSrc(t)},e.prototype.reset=function(){e.resetMediaElement(this.el_)},e.prototype.currentSrc=function(){return this.currentSource_?this.currentSource_.src:this.el_.currentSrc},e.prototype.setControls=function(t){this.el_.controls=!!t},e.prototype.addTextTrack=function(e,r,n){return this.featuresNativeTextTracks?this.el_.addTextTrack(e,r,n):t.prototype.addTextTrack.call(this,e,r,n)},e.prototype.createRemoteTextTrack=function(e){if(!this.featuresNativeTextTracks)return t.prototype.createRemoteTextTrack.call(this,e);var r=_e.createElement("track");return e.kind&&(r.kind=e.kind),e.label&&(r.label=e.label),(e.language||e.srclang)&&(r.srclang=e.language||e.srclang),e.default&&(r.default=e.default),e.id&&(r.id=e.id),e.src&&(r.src=e.src),r},e.prototype.addRemoteTextTrack=function(e,r){var n=t.prototype.addRemoteTextTrack.call(this,e,r);return this.featuresNativeTextTracks&&this.el().appendChild(n),n},e.prototype.removeRemoteTextTrack=function(e){if(t.prototype.removeRemoteTextTrack.call(this,e),this.featuresNativeTextTracks)for(var r=this.$$("track"),n=r.length;n--;)e!==r[n]&&e!==r[n].track||this.el().removeChild(r[n])},e.prototype.getVideoPlaybackQuality=function(){if("function"==typeof this.el().getVideoPlaybackQuality)return this.el().getVideoPlaybackQuality();var t={};return void 0!==this.el().webkitDroppedFrameCount&&void 0!==this.el().webkitDecodedFrameCount&&(t.droppedVideoFrames=this.el().webkitDroppedFrameCount,t.totalVideoFrames=this.el().webkitDecodedFrameCount),fe.performance&&"function"==typeof fe.performance.now?t.creationTime=fe.performance.now():fe.performance&&fe.performance.timing&&"number"==typeof fe.performance.timing.navigationStart&&(t.creationTime=fe.Date.now()-fe.performance.timing.navigationStart),t},e}(Kn);if(h()){Po.TEST_VID=_e.createElement("video");var Oo=_e.createElement("track");Oo.kind="captions",Oo.srclang="en",Oo.label="English",Po.TEST_VID.appendChild(Oo)}Po.isSupported=function(){try{Po.TEST_VID.volume=.5}catch(t){return!1}return!(!Po.TEST_VID||!Po.TEST_VID.canPlayType)},Po.canPlayType=function(t){return Po.TEST_VID.canPlayType(t)},Po.canPlaySource=function(t,e){
return Po.canPlayType(t.type)},Po.canControlVolume=function(){try{var t=Po.TEST_VID.volume;return Po.TEST_VID.volume=t/2+.1,t!==Po.TEST_VID.volume}catch(t){return!1}},Po.canControlPlaybackRate=function(){if(je&&Ie&&Le<58)return!1;try{var t=Po.TEST_VID.playbackRate;return Po.TEST_VID.playbackRate=t/2+.1,t!==Po.TEST_VID.playbackRate}catch(t){return!1}},Po.canOverrideAttributes=function(){if(Re)return!1;try{var t=function(){};Object.defineProperty(_e.createElement("video"),"src",{get:t,set:t}),Object.defineProperty(_e.createElement("audio"),"src",{get:t,set:t}),Object.defineProperty(_e.createElement("video"),"innerHTML",{get:t,set:t}),Object.defineProperty(_e.createElement("audio"),"innerHTML",{get:t,set:t})}catch(t){return!1}return!0},Po.supportsNativeTextTracks=function(){return Fe},Po.supportsNativeVideoTracks=function(){return!(!Po.TEST_VID||!Po.TEST_VID.videoTracks)},Po.supportsNativeAudioTracks=function(){return!(!Po.TEST_VID||!Po.TEST_VID.audioTracks)},Po.Events=["loadstart","suspend","abort","error","emptied","stalled","loadedmetadata","loadeddata","canplay","canplaythrough","playing","waiting","seeking","seeked","ended","durationchange","timeupdate","progress","play","pause","ratechange","resize","volumechange"],Po.prototype.featuresVolumeControl=Po.canControlVolume(),Po.prototype.featuresPlaybackRate=Po.canControlPlaybackRate(),Po.prototype.featuresSourceset=Po.canOverrideAttributes(),Po.prototype.movingMediaElementInDOM=!Se,Po.prototype.featuresFullscreenResize=!0,Po.prototype.featuresProgressEvents=!0,Po.prototype.featuresTimeupdateEvents=!0,Po.prototype.featuresNativeTextTracks=Po.supportsNativeTextTracks(),Po.prototype.featuresNativeVideoTracks=Po.supportsNativeVideoTracks(),Po.prototype.featuresNativeAudioTracks=Po.supportsNativeAudioTracks();var Mo=Po.TEST_VID&&Po.TEST_VID.constructor.prototype.canPlayType,No=/^application\/(?:x-|vnd\.apple\.)mpegurl/i,Io=/^video\/mp4/i;Po.patchCanPlayType=function(){Ae>=4&&!Me&&!Ie?Po.TEST_VID.constructor.prototype.canPlayType=function(t){return t&&No.test(t)?"maybe":Mo.call(this,t)}:Pe&&(Po.TEST_VID.constructor.prototype.canPlayType=function(t){return t&&Io.test(t)?"maybe":Mo.call(this,t)})},Po.unpatchCanPlayType=function(){var t=Po.TEST_VID.constructor.prototype.canPlayType;return Po.TEST_VID.constructor.prototype.canPlayType=Mo,t},Po.patchCanPlayType(),Po.disposeMediaElement=function(t){if(t){for(t.parentNode&&t.parentNode.removeChild(t);t.hasChildNodes();)t.removeChild(t.firstChild);t.removeAttribute("src"),"function"==typeof t.load&&function(){try{t.load()}catch(t){}}()}},Po.resetMediaElement=function(t){if(t){for(var e=t.querySelectorAll("source"),r=e.length;r--;)t.removeChild(e[r]);t.removeAttribute("src"),"function"==typeof t.load&&function(){try{t.load()}catch(t){}}()}},["muted","defaultMuted","autoplay","controls","loop","playsinline"].forEach(function(t){Po.prototype[t]=function(){return this.el_[t]||this.el_.hasAttribute(t)}}),["muted","defaultMuted","autoplay","loop","playsinline"].forEach(function(t){Po.prototype["set"+Q(t)]=function(e){this.el_[t]=e,e?this.el_.setAttribute(t,t):this.el_.removeAttribute(t)}}),["paused","currentTime","buffered","volume","poster","preload","error","seeking","seekable","ended","playbackRate","defaultPlaybackRate","played","networkState","readyState","videoWidth","videoHeight"].forEach(function(t){Po.prototype[t]=function(){return this.el_[t]}}),["volume","src","poster","preload","playbackRate","defaultPlaybackRate"].forEach(function(t){Po.prototype["set"+Q(t)]=function(e){this.el_[t]=e}}),["pause","load","play"].forEach(function(t){Po.prototype[t]=function(){return this.el_[t]()}}),Kn.withSourceHandlers(Po),Po.nativeSourceHandler={},Po.nativeSourceHandler.canPlayType=function(t){try{return Po.TEST_VID.canPlayType(t)}catch(t){return""}},Po.nativeSourceHandler.canHandleSource=function(t,e){if(t.type)return Po.nativeSourceHandler.canPlayType(t.type);if(t.src){var r=ln(t.src);return Po.nativeSourceHandler.canPlayType("video/"+r)}return""},Po.nativeSourceHandler.handleSource=function(t,e,r){e.setSrc(t.src)},Po.nativeSourceHandler.dispose=function(){},Po.registerSourceHandler(Po.nativeSourceHandler),Kn.registerTech("Html5",Po);var Lo=Ke(["\n        Using the tech directly can be dangerous. I hope you know what you're doing.\n        See https://github.com/videojs/video.js/issues/2617 for more info.\n      "],["\n        Using the tech directly can be dangerous. I hope you know what you're doing.\n        See https://github.com/videojs/video.js/issues/2617 for more info.\n      "]),Ro=["progress","abort","suspend","emptied","stalled","loadedmetadata","loadeddata","timeupdate","resize","volumechange","texttrackchange"],Do={canplay:"CanPlay",canplaythrough:"CanPlayThrough",playing:"Playing",seeked:"Seeked"},Bo=function(t){function e(r,i,o){if(Ue(this,e),r.id=r.id||i.id||"vjs_video_"+B(),i=n(e.getTagSettings(r),i),i.initChildren=!1,i.createEl=!1,i.evented=!1,i.reportTouchActivity=!1,!i.language)if("function"==typeof r.closest){var s=r.closest("[lang]");s&&s.getAttribute&&(i.language=s.getAttribute("lang"))}else for(var a=r;a&&1===a.nodeType;){if(k(a).hasOwnProperty("lang")){i.language=a.getAttribute("lang");break}a=a.parentNode}var l=qe(this,t.call(this,null,i,o));if(l.isPosterFromTech_=!1,l.queuedCallbacks_=[],l.isReady_=!1,l.hasStarted_=!1,l.userActive_=!1,!l.options_||!l.options_.techOrder||!l.options_.techOrder.length)throw new Error("No techOrder specified. Did you overwrite videojs.options instead of just changing the properties you want to override?");if(l.tag=r,l.tagAttributes=r&&k(r),l.language(l.options_.language),i.languages){var c={};Object.getOwnPropertyNames(i.languages).forEach(function(t){c[t.toLowerCase()]=i.languages[t]}),l.languages_=c}else l.languages_=e.prototype.options_.languages;l.cache_={},l.poster_=i.poster||"",l.controls_=!!i.controls,l.cache_.lastVolume=1,r.controls=!1,r.removeAttribute("controls"),l.scrubbing_=!1,l.el_=l.createEl(),l.cache_.lastPlaybackRate=l.defaultPlaybackRate(),G(l,{eventBusKey:"el_"});var u=tt(l.options_);if(i.plugins){var h=i.plugins;Object.keys(h).forEach(function(t){if("function"!=typeof this[t])throw new Error('plugin "'+t+'" does not exist');this[t](h[t])},l)}l.options_.playerOptions=u,l.middleware_=[],l.initChildren(),l.isAudio("audio"===r.nodeName.toLowerCase()),l.controls()?l.addClass("vjs-controls-enabled"):l.addClass("vjs-controls-disabled"),l.el_.setAttribute("role","region"),l.isAudio()?l.el_.setAttribute("aria-label",l.localize("Audio Player")):l.el_.setAttribute("aria-label",l.localize("Video Player")),l.isAudio()&&l.addClass("vjs-audio"),l.flexNotSupported_()&&l.addClass("vjs-no-flex"),Se||l.addClass("vjs-workinghover"),e.players[l.id_]=l;var p=he.split(".")[0];return l.addClass("vjs-v"+p),l.userActive(!0),l.reportUserActivity(),l.one("play",l.listenForUserActivity_),l.on("fullscreenchange",l.handleFullscreenChange_),l.on("stageclick",l.handleStageClick_),l.changingSrc_=!1,l.playWaitingForReady_=!1,l.playOnLoadstart_=null,l}return Xe(e,t),e.prototype.dispose=function(){this.trigger("dispose"),this.off("dispose"),this.styleEl_&&this.styleEl_.parentNode&&(this.styleEl_.parentNode.removeChild(this.styleEl_),this.styleEl_=null),e.players[this.id_]=null,this.tag&&this.tag.player&&(this.tag.player=null),this.el_&&this.el_.player&&(this.el_.player=null),this.tech_&&(this.tech_.dispose(),this.isPosterFromTech_=!1,this.poster_=""),this.playerElIngest_&&(this.playerElIngest_=null),this.tag&&(this.tag=null),Qt(this),t.prototype.dispose.call(this)},e.prototype.createEl=function(){var e=this.tag,r=void 0,n=this.playerElIngest_=e.parentNode&&e.parentNode.hasAttribute&&e.parentNode.hasAttribute("data-vjs-player"),i="video-js"===this.tag.tagName.toLowerCase();n?r=this.el_=e.parentNode:i||(r=this.el_=t.prototype.createEl.call(this,"div"));var o=k(e);if(i){for(r=this.el_=e,e=this.tag=_e.createElement("video");r.children.length;)e.appendChild(r.firstChild);m(r,"video-js")||_(r,"video-js"),r.appendChild(e),n=this.playerElIngest_=r,["autoplay","controls","crossOrigin","defaultMuted","defaultPlaybackRate","loop","muted","playbackRate","src","volume"].forEach(function(t){void 0!==r[t]&&(e[t]=r[t])})}if(e.setAttribute("tabindex","-1"),e.removeAttribute("width"),e.removeAttribute("height"),Object.getOwnPropertyNames(o).forEach(function(t){"class"===t?(r.className+=" "+o[t],i&&(e.className+=" "+o[t])):(r.setAttribute(t,o[t]),i&&e.setAttribute(t,o[t]))}),e.playerId=e.id,e.id+="_html5_api",e.className="vjs-tech",e.player=r.player=this,this.addClass("vjs-paused"),!0!==fe.VIDEOJS_NO_DYNAMIC_STYLE){this.styleEl_=vr("vjs-styles-dimensions");var s=nr(".vjs-styles-defaults"),a=nr("head");a.insertBefore(this.styleEl_,s?s.nextSibling:a.firstChild)}this.width(this.options_.width),this.height(this.options_.height),this.fluid(this.options_.fluid),this.aspectRatio(this.options_.aspectRatio);for(var l=e.getElementsByTagName("a"),c=0;c<l.length;c++){var u=l.item(c);_(u,"vjs-hidden"),u.setAttribute("hidden","hidden")}return e.initNetworkState_=e.networkState,e.parentNode&&!n&&e.parentNode.insertBefore(r,e),g(e,r),this.children_.unshift(e),this.el_.setAttribute("lang",this.language_),this.el_=r,r},e.prototype.width=function(t){return this.dimension("width",t)},e.prototype.height=function(t){return this.dimension("height",t)},e.prototype.dimension=function(t,e){var r=t+"_";if(void 0===e)return this[r]||0;if(""===e)return this[r]=void 0,void this.updateStyleEl_();var n=parseFloat(e);if(isNaN(n))return void tr.error('Improper value "'+e+'" supplied for for '+t);this[r]=n,this.updateStyleEl_()},e.prototype.fluid=function(t){if(void 0===t)return!!this.fluid_;this.fluid_=!!t,t?this.addClass("vjs-fluid"):this.removeClass("vjs-fluid"),this.updateStyleEl_()},e.prototype.aspectRatio=function(t){if(void 0===t)return this.aspectRatio_;if(!/^\d+\:\d+$/.test(t))throw new Error("Improper value supplied for aspect ratio. The format should be width:height, for example 16:9.");this.aspectRatio_=t,this.fluid(!0),this.updateStyleEl_()},e.prototype.updateStyleEl_=function(){if(!0===fe.VIDEOJS_NO_DYNAMIC_STYLE){var t="number"==typeof this.width_?this.width_:this.options_.width,e="number"==typeof this.height_?this.height_:this.options_.height,r=this.tech_&&this.tech_.el();return void(r&&(t>=0&&(r.width=t),e>=0&&(r.height=e)))}var n=void 0,i=void 0,o=void 0,s=void 0;o=void 0!==this.aspectRatio_&&"auto"!==this.aspectRatio_?this.aspectRatio_:this.videoWidth()>0?this.videoWidth()+":"+this.videoHeight():"16:9";var a=o.split(":"),l=a[1]/a[0];n=void 0!==this.width_?this.width_:void 0!==this.height_?this.height_/l:this.videoWidth()||300,i=void 0!==this.height_?this.height_:n*l,s=/^[^a-zA-Z]/.test(this.id())?"dimensions-"+this.id():this.id()+"-dimensions",this.addClass(s),yr(this.styleEl_,"\n      ."+s+" {\n        width: "+n+"px;\n        height: "+i+"px;\n      }\n\n      ."+s+".vjs-fluid {\n        padding-top: "+100*l+"%;\n      }\n    ")},e.prototype.loadTech_=function(t,e){var r=this;this.tech_&&this.unloadTech_();var i=Q(t),o=t.charAt(0).toLowerCase()+t.slice(1);"Html5"!==i&&this.tag&&(Kn.getTech("Html5").disposeMediaElement(this.tag),this.tag.player=null,this.tag=null),this.techName_=i,this.isReady_=!1;var s={source:e,nativeControlsForTouch:this.options_.nativeControlsForTouch,playerId:this.id(),techId:this.id()+"_"+i+"_api",autoplay:this.options_.autoplay,playsinline:this.options_.playsinline,preload:this.options_.preload,loop:this.options_.loop,muted:this.options_.muted,poster:this.poster(),language:this.language(),playerElIngest:this.playerElIngest_||!1,"vtt.js":this.options_["vtt.js"],canOverridePoster:!!this.options_.techCanOverridePoster,enableSourceset:this.options_.enableSourceset};Mn.names.forEach(function(t){var e=Mn[t];s[e.getterName]=r[e.privateName]}),n(s,this.options_[i]),n(s,this.options_[o]),n(s,this.options_[t.toLowerCase()]),this.tag&&(s.tag=this.tag),e&&e.src===this.cache_.src&&this.cache_.currentTime>0&&(s.startTime=this.cache_.currentTime);var a=Kn.getTech(t);if(!a)throw new Error("No Tech named '"+i+"' exists! '"+i+"' should be registered using videojs.registerTech()'");this.tech_=new a(s),this.tech_.ready(gr(this,this.handleTechReady_),!0),zr.jsonToTextTracks(this.textTracksJson_||[],this.tech_),Ro.forEach(function(t){r.on(r.tech_,t,r["handleTech"+Q(t)+"_"])}),Object.keys(Do).forEach(function(t){r.on(r.tech_,t,function(e){if(0===r.tech_.playbackRate()&&r.tech_.seeking())return void r.queuedCallbacks_.push({callback:r["handleTech"+Do[t]+"_"].bind(r),event:e});r["handleTech"+Do[t]+"_"](e)})}),this.on(this.tech_,"loadstart",this.handleTechLoadStart_),this.on(this.tech_,"sourceset",this.handleTechSourceset_),this.on(this.tech_,"waiting",this.handleTechWaiting_),this.on(this.tech_,"ended",this.handleTechEnded_),this.on(this.tech_,"seeking",this.handleTechSeeking_),this.on(this.tech_,"play",this.handleTechPlay_),this.on(this.tech_,"firstplay",this.handleTechFirstPlay_),this.on(this.tech_,"pause",this.handleTechPause_),this.on(this.tech_,"durationchange",this.handleTechDurationChange_),this.on(this.tech_,"fullscreenchange",this.handleTechFullscreenChange_),this.on(this.tech_,"error",this.handleTechError_),this.on(this.tech_,"loadedmetadata",this.updateStyleEl_),this.on(this.tech_,"posterchange",this.handleTechPosterChange_),this.on(this.tech_,"textdata",this.handleTechTextData_),this.on(this.tech_,"ratechange",this.handleTechRateChange_),this.usingNativeControls(this.techGet_("controls")),this.controls()&&!this.usingNativeControls()&&this.addTechControlsListeners_(),this.tech_.el().parentNode===this.el()||"Html5"===i&&this.tag||g(this.tech_.el(),this.el()),this.tag&&(this.tag.player=null,this.tag=null)},e.prototype.unloadTech_=function(){var t=this;Mn.names.forEach(function(e){var r=Mn[e];t[r.privateName]=t[r.getterName]()}),this.textTracksJson_=zr.textTracksToJson(this.tech_),this.isReady_=!1,this.tech_.dispose(),this.tech_=!1,this.isPosterFromTech_&&(this.poster_="",this.trigger("posterchange")),this.isPosterFromTech_=!1},e.prototype.tech=function(t){return void 0===t&&tr.warn(er(Lo)),this.tech_},e.prototype.addTechControlsListeners_=function(){this.removeTechControlsListeners_(),this.on(this.tech_,"mousedown",this.handleTechClick_),this.on(this.tech_,"touchstart",this.handleTechTouchStart_),this.on(this.tech_,"touchmove",this.handleTechTouchMove_),this.on(this.tech_,"touchend",this.handleTechTouchEnd_),this.on(this.tech_,"tap",this.handleTechTap_)},e.prototype.removeTechControlsListeners_=function(){this.off(this.tech_,"tap",this.handleTechTap_),this.off(this.tech_,"touchstart",this.handleTechTouchStart_),this.off(this.tech_,"touchmove",this.handleTechTouchMove_),this.off(this.tech_,"touchend",this.handleTechTouchEnd_),this.off(this.tech_,"mousedown",this.handleTechClick_)},e.prototype.handleTechReady_=function(){if(this.triggerReady(),this.cache_.volume&&this.techCall_("setVolume",this.cache_.volume),this.handleTechPosterChange_(),this.handleTechDurationChange_(),(this.src()||this.currentSrc())&&this.tag&&this.options_.autoplay&&this.paused())try{delete this.tag.poster}catch(t){tr("deleting tag.poster throws in some browsers",t)}},e.prototype.handleTechLoadStart_=function(){this.removeClass("vjs-ended"),this.removeClass("vjs-seeking"),this.error(null),this.paused()?(this.hasStarted(!1),this.trigger("loadstart")):(this.trigger("loadstart"),this.trigger("firstplay"))},e.prototype.updateSourceCaches_=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=t,r="";"string"!=typeof e&&(e=t.src,r=t.type),this.cache_.source=this.cache_.source||{},this.cache_.sources=this.cache_.sources||[],e&&!r&&(r=ri(this,e)),this.cache_.source={src:e,type:r};for(var n=this.cache_.sources.filter(function(t){return t.src&&t.src===e}),i=[],o=this.$$("source"),s=[],a=0;a<o.length;a++){var l=k(o[a]);i.push(l),l.src&&l.src===e&&s.push(l.src)}s.length&&!n.length?this.cache_.sources=i:n.length||(this.cache_.sources=[this.cache_.source]),this.cache_.src=e},e.prototype.handleTechSourceset_=function(t){var e=this;if(!this.changingSrc_&&(this.updateSourceCaches_(t.src),!t.src)){var r=function t(r){"sourceset"!==r.type&&e.updateSourceCaches_(e.techGet_("currentSrc")),e.tech_.off(["sourceset","loadstart"],t)};this.tech_.one(["sourceset","loadstart"],r)}this.trigger({src:t.src,type:"sourceset"})},e.prototype.hasStarted=function(t){if(void 0===t)return this.hasStarted_;t!==this.hasStarted_&&(this.hasStarted_=t,this.hasStarted_?(this.addClass("vjs-has-started"),this.trigger("firstplay")):this.removeClass("vjs-has-started"))},e.prototype.handleTechPlay_=function(){this.removeClass("vjs-ended"),this.removeClass("vjs-paused"),this.addClass("vjs-playing"),this.hasStarted(!0),this.trigger("play")},e.prototype.handleTechRateChange_=function(){this.tech_.playbackRate()>0&&0===this.cache_.lastPlaybackRate&&(this.queuedCallbacks_.forEach(function(t){return t.callback(t.event)}),this.queuedCallbacks_=[]),this.cache_.lastPlaybackRate=this.tech_.playbackRate(),this.trigger("ratechange")},e.prototype.handleTechWaiting_=function(){var t=this;this.addClass("vjs-waiting"),this.trigger("waiting"),this.one("timeupdate",function(){return t.removeClass("vjs-waiting")})},e.prototype.handleTechCanPlay_=function(){this.removeClass("vjs-waiting"),this.trigger("canplay")},e.prototype.handleTechCanPlayThrough_=function(){this.removeClass("vjs-waiting"),this.trigger("canplaythrough")},e.prototype.handleTechPlaying_=function(){this.removeClass("vjs-waiting"),this.trigger("playing")},e.prototype.handleTechSeeking_=function(){this.addClass("vjs-seeking"),this.trigger("seeking")},e.prototype.handleTechSeeked_=function(){this.removeClass("vjs-seeking"),this.trigger("seeked")},e.prototype.handleTechFirstPlay_=function(){this.options_.starttime&&(tr.warn("Passing the `starttime` option to the player will be deprecated in 6.0"),this.currentTime(this.options_.starttime)),this.addClass("vjs-has-started"),this.trigger("firstplay")},e.prototype.handleTechPause_=function(){this.removeClass("vjs-playing"),this.addClass("vjs-paused"),this.trigger("pause")},e.prototype.handleTechEnded_=function(){this.addClass("vjs-ended"),this.options_.loop?(this.currentTime(0),this.play()):this.paused()||this.pause(),this.trigger("ended")},e.prototype.handleTechDurationChange_=function(){this.duration(this.techGet_("duration"))},e.prototype.handleTechClick_=function(t){D(t)&&this.controls_&&(this.paused()?this.play():this.pause())},e.prototype.handleTechTap_=function(){this.userActive(!this.userActive())},e.prototype.handleTechTouchStart_=function(){this.userWasActive=this.userActive()},e.prototype.handleTechTouchMove_=function(){this.userWasActive&&this.reportUserActivity()},e.prototype.handleTechTouchEnd_=function(t){t.preventDefault()},e.prototype.handleFullscreenChange_=function(){this.isFullscreen()?this.addClass("vjs-fullscreen"):this.removeClass("vjs-fullscreen")},e.prototype.handleStageClick_=function(){this.reportUserActivity()},e.prototype.handleTechFullscreenChange_=function(t,e){e&&this.isFullscreen(e.isFullscreen),this.trigger("fullscreenchange")},e.prototype.handleTechError_=function(){var t=this.tech_.error();this.error(t)},e.prototype.handleTechTextData_=function(){var t=null;arguments.length>1&&(t=arguments[1]),this.trigger("textdata",t)},e.prototype.getCache=function(){return this.cache_},e.prototype.techCall_=function(t,e){this.ready(function(){if(t in Qn)return $t(this.middleware_,this.tech_,t,e);if(t in Zn)return Yt(this.middleware_,this.tech_,t,e);try{this.tech_&&this.tech_[t](e)}catch(t){throw tr(t),t}},!0)},e.prototype.techGet_=function(t){if(this.tech_&&this.tech_.isReady_){if(t in Jn)return Kt(this.middleware_,this.tech_,t);if(t in Zn)return Yt(this.middleware_,this.tech_,t);try{return this.tech_[t]()}catch(e){if(void 0===this.tech_[t])throw tr("Video.js: "+t+" method not defined for "+this.techName_+" playback technology.",e),e;if("TypeError"===e.name)throw tr("Video.js: "+t+" unavailable on "+this.techName_+" playback technology element.",e),this.tech_.isReady_=!1,e;throw tr(e),e}}},e.prototype.play=function(){var t=this;if(this.playOnLoadstart_&&this.off("loadstart",this.playOnLoadstart_),this.isReady_){if(!this.changingSrc_&&(this.src()||this.currentSrc()))return this.techGet_("play");this.playOnLoadstart_=function(){t.playOnLoadstart_=null,ct(t.play())},this.one("loadstart",this.playOnLoadstart_)}else{if(this.playWaitingForReady_)return;this.playWaitingForReady_=!0,this.ready(function(){t.playWaitingForReady_=!1,ct(t.play())})}},e.prototype.pause=function(){this.techCall_("pause")},e.prototype.paused=function(){return!1!==this.techGet_("paused")},e.prototype.played=function(){return this.techGet_("played")||it(0,0)},e.prototype.scrubbing=function(t){if(void 0===t)return this.scrubbing_;this.scrubbing_=!!t,t?this.addClass("vjs-scrubbing"):this.removeClass("vjs-scrubbing")},e.prototype.currentTime=function(t){return void 0!==t?(t<0&&(t=0),void this.techCall_("setCurrentTime",t)):(this.cache_.currentTime=this.techGet_("currentTime")||0,this.cache_.currentTime)},e.prototype.duration=function(t){if(void 0===t)return void 0!==this.cache_.duration?this.cache_.duration:NaN;t=parseFloat(t),t<0&&(t=1/0),t!==this.cache_.duration&&(this.cache_.duration=t,t===1/0?this.addClass("vjs-live"):this.removeClass("vjs-live"),this.trigger("durationchange"))},e.prototype.remainingTime=function(){return this.duration()-this.currentTime()},e.prototype.remainingTimeDisplay=function(){return Math.floor(this.duration())-Math.floor(this.currentTime())},e.prototype.buffered=function(){var t=this.techGet_("buffered");return t&&t.length||(t=it(0,0)),t},e.prototype.bufferedPercent=function(){return ot(this.buffered(),this.duration())},e.prototype.bufferedEnd=function(){var t=this.buffered(),e=this.duration(),r=t.end(t.length-1);return r>e&&(r=e),r},e.prototype.volume=function(t){var e=void 0;return void 0!==t?(e=Math.max(0,Math.min(1,parseFloat(t))),this.cache_.volume=e,this.techCall_("setVolume",e),void(e>0&&this.lastVolume_(e))):(e=parseFloat(this.techGet_("volume")),isNaN(e)?1:e)},e.prototype.muted=function(t){return void 0!==t?void this.techCall_("setMuted",t):this.techGet_("muted")||!1},e.prototype.defaultMuted=function(t){return void 0!==t?this.techCall_("setDefaultMuted",t):this.techGet_("defaultMuted")||!1},e.prototype.lastVolume_=function(t){return void 0!==t&&0!==t?void(this.cache_.lastVolume=t):this.cache_.lastVolume},e.prototype.supportsFullScreen=function(){return this.techGet_("supportsFullScreen")||!1},e.prototype.isFullscreen=function(t){return void 0!==t?void(this.isFullscreen_=!!t):!!this.isFullscreen_},e.prototype.requestFullscreen=function(){var t=Or;this.isFullscreen(!0),t.requestFullscreen?(X(_e,t.fullscreenchange,gr(this,function e(r){this.isFullscreen(_e[t.fullscreenElement]),!1===this.isFullscreen()&&q(_e,t.fullscreenchange,e),this.trigger("fullscreenchange")})),this.el_[t.requestFullscreen]()):this.tech_.supportsFullScreen()?this.techCall_("enterFullScreen"):(this.enterFullWindow(),this.trigger("fullscreenchange"))},e.prototype.exitFullscreen=function(){var t=Or;this.isFullscreen(!1),t.requestFullscreen?_e[t.exitFullscreen]():this.tech_.supportsFullScreen()?this.techCall_("exitFullScreen"):(this.exitFullWindow(),this.trigger("fullscreenchange"))},e.prototype.enterFullWindow=function(){this.isFullWindow=!0,this.docOrigOverflow=_e.documentElement.style.overflow,X(_e,"keydown",gr(this,this.fullWindowOnEscKey)),_e.documentElement.style.overflow="hidden",_(_e.body,"vjs-full-window"),this.trigger("enterFullWindow")},e.prototype.fullWindowOnEscKey=function(t){27===t.keyCode&&(!0===this.isFullscreen()?this.exitFullscreen():this.exitFullWindow())},e.prototype.exitFullWindow=function(){this.isFullWindow=!1,q(_e,"keydown",this.fullWindowOnEscKey),_e.documentElement.style.overflow=this.docOrigOverflow,b(_e.body,"vjs-full-window"),this.trigger("exitFullWindow")},e.prototype.canPlayType=function(t){for(var e=void 0,r=0,n=this.options_.techOrder;r<n.length;r++){var i=n[r],o=Kn.getTech(i);if(o||(o=Pr.getComponent(i)),o){if(o.isSupported()&&(e=o.canPlayType(t)))return e}else tr.error('The "'+i+'" tech is undefined. Skipped browser support check for that tech.')}return""},e.prototype.selectSource=function(t){var e=this,r=this.options_.techOrder.map(function(t){return[t,Kn.getTech(t)]}).filter(function(t){var e=t[0],r=t[1];return r?r.isSupported():(tr.error('The "'+e+'" tech is undefined. Skipped browser support check for that tech.'),!1)}),n=function(t,e,r){var n=void 0;return t.some(function(t){return e.some(function(e){if(n=r(t,e))return!0})}),n},i=function(t,r){var n=t[0];if(t[1].canPlaySource(r,e.options_[n.toLowerCase()]))return{source:r,tech:n}};return(this.options_.sourceOrder?n(t,r,function(t){return function(e,r){return t(r,e)}}(i)):n(r,t,i))||!1},e.prototype.src=function(t){var e=this;if(void 0===t)return this.cache_.src||"";var r=ni(t);if(!r.length)return void this.setTimeout(function(){this.error({code:4,message:this.localize(this.options_.notSupportedMessage)})},0);this.changingSrc_=!0,this.cache_.sources=r,this.updateSourceCaches_(r[0]),Xt(this,r[0],function(t,n){if(e.middleware_=n,e.cache_.sources=r,e.updateSourceCaches_(t),e.src_(t))return r.length>1?e.src(r.slice(1)):(e.changingSrc_=!1,e.setTimeout(function(){this.error({code:4,message:this.localize(this.options_.notSupportedMessage)})},0),void e.triggerReady());qt(n,e.tech_)})},e.prototype.src_=function(t){var e=this,r=this.selectSource([t]);return!r||(Z(r.tech,this.techName_)?(this.ready(function(){this.tech_.constructor.prototype.hasOwnProperty("setSource")?this.techCall_("setSource",t):this.techCall_("src",t.src),this.changingSrc_=!1},!0),!1):(this.changingSrc_=!0,this.loadTech_(r.tech,r.source),this.tech_.ready(function(){e.changingSrc_=!1}),!1))},e.prototype.load=function(){this.techCall_("load")},e.prototype.reset=function(){this.loadTech_(this.options_.techOrder[0],null),this.techCall_("reset")},e.prototype.currentSources=function(){var t=this.currentSource(),e=[];return 0!==Object.keys(t).length&&e.push(t),this.cache_.sources||e},e.prototype.currentSource=function(){return this.cache_.source||{}},e.prototype.currentSrc=function(){return this.currentSource()&&this.currentSource().src||""},e.prototype.currentType=function(){return this.currentSource()&&this.currentSource().type||""},e.prototype.preload=function(t){return void 0!==t?(this.techCall_("setPreload",t),void(this.options_.preload=t)):this.techGet_("preload")},e.prototype.autoplay=function(t){return void 0!==t?(this.techCall_("setAutoplay",t),void(this.options_.autoplay=t)):this.techGet_("autoplay",t)},e.prototype.playsinline=function(t){return void 0!==t?(this.techCall_("setPlaysinline",t),this.options_.playsinline=t,this):this.techGet_("playsinline")},e.prototype.loop=function(t){return void 0!==t?(this.techCall_("setLoop",t),void(this.options_.loop=t)):this.techGet_("loop")},e.prototype.poster=function(t){if(void 0===t)return this.poster_;t||(t=""),t!==this.poster_&&(this.poster_=t,this.techCall_("setPoster",t),this.isPosterFromTech_=!1,this.trigger("posterchange"))},e.prototype.handleTechPosterChange_=function(){if((!this.poster_||this.options_.techCanOverridePoster)&&this.tech_&&this.tech_.poster){var t=this.tech_.poster()||"";t!==this.poster_&&(this.poster_=t,this.isPosterFromTech_=!0,this.trigger("posterchange"))}},e.prototype.controls=function(t){if(void 0===t)return!!this.controls_;t=!!t,this.controls_!==t&&(this.controls_=t,this.usingNativeControls()&&this.techCall_("setControls",t),this.controls_?(this.removeClass("vjs-controls-disabled"),this.addClass("vjs-controls-enabled"),this.trigger("controlsenabled"),this.usingNativeControls()||this.addTechControlsListeners_()):(this.removeClass("vjs-controls-enabled"),this.addClass("vjs-controls-disabled"),this.trigger("controlsdisabled"),this.usingNativeControls()||this.removeTechControlsListeners_()))},e.prototype.usingNativeControls=function(t){if(void 0===t)return!!this.usingNativeControls_;t=!!t,this.usingNativeControls_!==t&&(this.usingNativeControls_=t,this.usingNativeControls_?(this.addClass("vjs-using-native-controls"),this.trigger("usingnativecontrols")):(this.removeClass("vjs-using-native-controls"),this.trigger("usingcustomcontrols")))},e.prototype.error=function(t){return void 0===t?this.error_||null:null===t?(this.error_=t,this.removeClass("vjs-error"),void(this.errorDisplay&&this.errorDisplay.close())):(this.error_=new st(t),this.addClass("vjs-error"),tr.error("(CODE:"+this.error_.code+" "+st.errorTypes[this.error_.code]+")",this.error_.message,this.error_),void this.trigger("error"))},e.prototype.reportUserActivity=function(t){this.userActivity_=!0},e.prototype.userActive=function(t){if(void 0===t)return this.userActive_;if((t=!!t)!==this.userActive_){if(this.userActive_=t,this.userActive_)return this.userActivity_=!0,this.removeClass("vjs-user-inactive"),this.addClass("vjs-user-active"),void this.trigger("useractive");this.tech_&&this.tech_.one("mousemove",function(t){t.stopPropagation(),t.preventDefault()}),this.userActivity_=!1,this.removeClass("vjs-user-active"),this.addClass("vjs-user-inactive"),this.trigger("userinactive")}},e.prototype.listenForUserActivity_=function(){var t=void 0,e=void 0,r=void 0,n=gr(this,this.reportUserActivity),i=function(t){t.screenX===e&&t.screenY===r||(e=t.screenX,r=t.screenY,n())},o=function(){n(),this.clearInterval(t),t=this.setInterval(n,250)},s=function(e){n(),this.clearInterval(t)};this.on("mousedown",o),this.on("mousemove",i),this.on("mouseup",s),this.on("keydown",n),this.on("keyup",n);var a=void 0;this.setInterval(function(){if(this.userActivity_){this.userActivity_=!1,this.userActive(!0),this.clearTimeout(a);var t=this.options_.inactivityTimeout;t<=0||(a=this.setTimeout(function(){this.userActivity_||this.userActive(!1)},t))}},250)},e.prototype.playbackRate=function(t){return void 0!==t?void this.techCall_("setPlaybackRate",t):this.tech_&&this.tech_.featuresPlaybackRate?this.cache_.lastPlaybackRate||this.techGet_("playbackRate"):1},e.prototype.defaultPlaybackRate=function(t){return void 0!==t?this.techCall_("setDefaultPlaybackRate",t):this.tech_&&this.tech_.featuresPlaybackRate?this.techGet_("defaultPlaybackRate"):1},e.prototype.isAudio=function(t){return void 0!==t?void(this.isAudio_=!!t):!!this.isAudio_},e.prototype.addTextTrack=function(t,e,r){if(this.tech_)return this.tech_.addTextTrack(t,e,r)},e.prototype.addRemoteTextTrack=function(t,e){if(this.tech_)return this.tech_.addRemoteTextTrack(t,e)},e.prototype.removeRemoteTextTrack=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.track,r=void 0===e?arguments[0]:e;if(this.tech_)return this.tech_.removeRemoteTextTrack(r)},e.prototype.getVideoPlaybackQuality=function(){return this.techGet_("getVideoPlaybackQuality")},e.prototype.videoWidth=function(){return this.tech_&&this.tech_.videoWidth&&this.tech_.videoWidth()||0},e.prototype.videoHeight=function(){return this.tech_&&this.tech_.videoHeight&&this.tech_.videoHeight()||0},e.prototype.language=function(t){if(void 0===t)return this.language_;this.language_=String(t).toLowerCase()},e.prototype.languages=function(){return tt(e.prototype.options_.languages,this.languages_)},e.prototype.toJSON=function(){var t=tt(this.options_),e=t.tracks;t.tracks=[];for(var r=0;r<e.length;r++){var n=e[r];n=tt(n),n.player=void 0,t.tracks[r]=n}return t},e.prototype.createModal=function(t,e){var r=this;e=e||{},e.content=t||"";var n=new Ur(this,e);return this.addChild(n),n.on("dispose",function(){r.removeChild(n)}),n.open(),n},e.getTagSettings=function(t){var e={sources:[],tracks:[]},r=k(t),i=r["data-setup"];if(m(t,"vjs-fluid")&&(r.fluid=!0),null!==i){var o=Br(i||"{}"),s=o[0],a=o[1];s&&tr.error(s),n(r,a)}if(n(e,r),t.hasChildNodes())for(var l=t.childNodes,c=0,u=l.length;c<u;c++){var h=l[c],p=h.nodeName.toLowerCase();"source"===p?e.sources.push(k(h)):"track"===p&&e.tracks.push(k(h))}return e},e.prototype.flexNotSupported_=function(){var t=_e.createElement("i")
;return!("flexBasis"in t.style||"webkitFlexBasis"in t.style||"mozFlexBasis"in t.style||"msFlexBasis"in t.style||"msFlexOrder"in t.style)},e}(Pr);Mn.names.forEach(function(t){var e=Mn[t];Bo.prototype[e.getterName]=function(){return this.tech_?this.tech_[e.getterName]():(this[e.privateName]=this[e.privateName]||new e.ListClass,this[e.privateName])}}),Bo.players={};var Fo=fe.navigator;Bo.prototype.options_={techOrder:Kn.defaultTechOrder_,html5:{},flash:{},inactivityTimeout:2e3,playbackRates:[],children:["mediaLoader","posterImage","textTrackDisplay","loadingSpinner","bigPlayButton","controlBar","errorDisplay","textTrackSettings"],language:Fo&&(Fo.languages&&Fo.languages[0]||Fo.userLanguage||Fo.language)||"en",languages:{},notSupportedMessage:"No compatible source was found for this media."},Re||Bo.prototype.options_.children.push("resizeManager"),["ended","seeking","seekable","networkState","readyState"].forEach(function(t){Bo.prototype[t]=function(){return this.techGet_(t)}}),Ro.forEach(function(t){Bo.prototype["handleTech"+Q(t)+"_"]=function(){return this.trigger(t)}}),Pr.registerComponent("Player",Bo);var Ho={},Vo=function(t){return Ho.hasOwnProperty(t)},zo=function(t){return Vo(t)?Ho[t]:void 0},Wo=function(t,e){t.activePlugins_=t.activePlugins_||{},t.activePlugins_[e]=!0},Uo=function(t,e,r){var n=(r?"before":"")+"pluginsetup";t.trigger(n,e),t.trigger(n+":"+e.name,e)},Xo=function(t,e){var r=function(){Uo(this,{name:t,plugin:e,instance:null},!0);var r=e.apply(this,arguments);return Wo(this,t),Uo(this,{name:t,plugin:e,instance:r}),r};return Object.keys(e).forEach(function(t){r[t]=e[t]}),r},qo=function(t,e){return e.prototype.name=t,function(){Uo(this,{name:t,plugin:e,instance:null},!0);for(var r=arguments.length,n=Array(r),i=0;i<r;i++)n[i]=arguments[i];var o=new(Function.prototype.bind.apply(e,[null].concat([this].concat(n))));return this[t]=function(){return o},Uo(this,o.getEventHash()),o}},Ko=function(){function t(e){if(Ue(this,t),this.constructor===t)throw new Error("Plugin must be sub-classed; not directly instantiated.");this.player=e,G(this),delete this.trigger,J(this,this.constructor.defaultState),Wo(e,this.name),this.dispose=gr(this,this.dispose),e.on("dispose",this.dispose)}return t.prototype.version=function(){return this.constructor.VERSION},t.prototype.getEventHash=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t.name=this.name,t.plugin=this.constructor,t.instance=this,t},t.prototype.trigger=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return K(this.eventBusEl_,t,this.getEventHash(e))},t.prototype.handleStateChanged=function(t){},t.prototype.dispose=function(){var t=this.name,e=this.player;this.trigger("dispose"),this.off(),e.off("dispose",this.dispose),e.activePlugins_[t]=!1,this.player=this.state=null,e[t]=qo(t,Ho[t])},t.isBasic=function(e){var r="string"==typeof e?zo(e):e;return"function"==typeof r&&!t.prototype.isPrototypeOf(r.prototype)},t.registerPlugin=function(e,r){if("string"!=typeof e)throw new Error('Illegal plugin name, "'+e+'", must be a string, was '+(void 0===e?"undefined":We(e))+".");if(Vo(e))tr.warn('A plugin named "'+e+'" already exists. You may want to avoid re-registering plugins!');else if(Bo.prototype.hasOwnProperty(e))throw new Error('Illegal plugin name, "'+e+'", cannot share a name with an existing player method!');if("function"!=typeof r)throw new Error('Illegal plugin for "'+e+'", must be a function, was '+(void 0===r?"undefined":We(r))+".");return Ho[e]=r,"plugin"!==e&&(t.isBasic(r)?Bo.prototype[e]=Xo(e,r):Bo.prototype[e]=qo(e,r)),r},t.deregisterPlugin=function(t){if("plugin"===t)throw new Error("Cannot de-register base plugin.");Vo(t)&&(delete Ho[t],delete Bo.prototype[t])},t.getPlugins=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Object.keys(Ho),e=void 0;return t.forEach(function(t){var r=zo(t);r&&(e=e||{},e[t]=r)}),e},t.getPluginVersion=function(t){var e=zo(t);return e&&e.VERSION||""},t}();Ko.getPlugin=zo,Ko.BASE_PLUGIN_NAME="plugin",Ko.registerPlugin("plugin",Ko),Bo.prototype.usingPlugin=function(t){return!!this.activePlugins_&&!0===this.activePlugins_[t]},Bo.prototype.hasPlugin=function(t){return!!Vo(t)};var $o=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+(void 0===e?"undefined":We(e)));t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(t.super_=e)},Yo=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=function(){t.apply(this,arguments)},n={};"object"===(void 0===e?"undefined":We(e))?(e.constructor!==Object.prototype.constructor&&(r=e.constructor),n=e):"function"==typeof e&&(r=e),$o(r,t);for(var i in n)n.hasOwnProperty(i)&&(r.prototype[i]=n[i]);return r};"undefined"==typeof HTMLVideoElement&&h()&&(_e.createElement("video"),_e.createElement("audio"),_e.createElement("track"),_e.createElement("video-js"));var Go=function(t){return 0===t.indexOf("#")?t.slice(1):t};if(ce.hooks_={},ce.hooks=function(t,e){return ce.hooks_[t]=ce.hooks_[t]||[],e&&(ce.hooks_[t]=ce.hooks_[t].concat(e)),ce.hooks_[t]},ce.hook=function(t,e){ce.hooks(t,e)},ce.hookOnce=function(t,e){ce.hooks(t,[].concat(e).map(function(e){return function r(){return ce.removeHook(t,r),e.apply(void 0,arguments)}}))},ce.removeHook=function(t,e){var r=ce.hooks(t).indexOf(e);return!(r<=-1)&&(ce.hooks_[t]=ce.hooks_[t].slice(),ce.hooks_[t].splice(r,1),!0)},!0!==fe.VIDEOJS_NO_DYNAMIC_STYLE&&h()){var Jo=nr(".vjs-styles-defaults");if(!Jo){Jo=vr("vjs-styles-defaults");var Qo=nr("head");Qo&&Qo.insertBefore(Jo,Qo.firstChild),yr(Jo,"\n      .video-js {\n        width: 300px;\n        height: 150px;\n      }\n\n      .vjs-fluid {\n        padding-top: 56.25%\n      }\n    ")}}return Y(1,ce),ce.VERSION=he,ce.options=Bo.prototype.options_,ce.getPlayers=function(){return Bo.players},ce.getPlayer=function(t){var e=Bo.players,r=void 0;if("string"==typeof t){var n=Go(t),i=e[n];if(i)return i;r=nr("#"+n)}else r=t;if(p(r)){var o=r,s=o.player,a=o.playerId;if(s||e[a])return s||e[a]}},ce.getAllPlayers=function(){return Object.keys(Bo.players).map(function(t){return Bo.players[t]}).filter(Boolean)},ce.players=Bo.players,ce.getComponent=Pr.getComponent,ce.registerComponent=function(t,e){Kn.isTech(e)&&tr.warn("The "+t+" tech was registered as a component. It should instead be registered using videojs.registerTech(name, tech)"),Pr.registerComponent.call(Pr,t,e)},ce.getTech=Kn.getTech,ce.registerTech=Kn.registerTech,ce.use=Ut,!Re&&Object.defineProperty?(Object.defineProperty(ce,"middleware",{value:{},writeable:!1,enumerable:!0}),Object.defineProperty(ce.middleware,"TERMINATOR",{value:Gn,writeable:!1,enumerable:!0})):ce.middleware={TERMINATOR:Gn},ce.browser=ze,ce.TOUCH_ENABLED=He,ce.extend=Yo,ce.mergeOptions=tt,ce.bind=gr,ce.registerPlugin=Ko.registerPlugin,ce.plugin=function(t,e){return tr.warn("videojs.plugin() is deprecated; use videojs.registerPlugin() instead"),Ko.registerPlugin(t,e)},ce.getPlugins=Ko.getPlugins,ce.getPlugin=Ko.getPlugin,ce.getPluginVersion=Ko.getPluginVersion,ce.addLanguage=function(t,e){var r;return t=(""+t).toLowerCase(),ce.options.languages=tt(ce.options.languages,(r={},r[t]=e,r)),ce.options.languages[t]},ce.log=tr,ce.createTimeRange=ce.createTimeRanges=it,ce.formatTime=yi,ce.setFormatTime=ie,ce.resetFormatTime=oe,ce.parseUrl=sn,ce.isCrossOrigin=cn,ce.EventTarget=br,ce.on=X,ce.one=$,ce.off=q,ce.trigger=K,ce.xhr=Tn,ce.TextTrack=En,ce.AudioTrack=wn,ce.VideoTrack=Sn,["isEl","isTextNode","createEl","hasClass","addClass","removeClass","toggleClass","setAttributes","getAttributes","emptyEl","appendContent","insertContent"].forEach(function(t){ce[t]=function(){return tr.warn("videojs."+t+"() is deprecated; use videojs.dom."+t+"() instead"),or[t].apply(null,arguments)}}),ce.computedStyle=a,ce.dom=or,ce.url=un,ce});

;/*!
 * Bootstrap v3.3.7 (http://getbootstrap.com)
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under the MIT license
 */

if (typeof jQuery === 'undefined') {
  throw new Error('Bootstrap\'s JavaScript requires jQuery')
}

+function ($) {
  'use strict';
  var version = $.fn.jquery.split(' ')[0].split('.')
  if ((version[0] < 2 && version[1] < 9) || (version[0] == 1 && version[1] == 9 && version[2] < 1) || (version[0] > 3)) {
    throw new Error('Bootstrap\'s JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4')
  }
}(jQuery);

/* ========================================================================
 * Bootstrap: transition.js v3.3.7
 * http://getbootstrap.com/javascript/#transitions
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
  // ============================================================

  function transitionEnd() {
    var el = document.createElement('bootstrap')

    var transEndEventNames = {
      WebkitTransition : 'webkitTransitionEnd',
      MozTransition    : 'transitionend',
      OTransition      : 'oTransitionEnd otransitionend',
      transition       : 'transitionend'
    }

    for (var name in transEndEventNames) {
      if (el.style[name] !== undefined) {
        return { end: transEndEventNames[name] }
      }
    }

    return false // explicit for ie8 (  ._.)
  }

  // http://blog.alexmaccaw.com/css-transitions
  $.fn.emulateTransitionEnd = function (duration) {
    var called = false
    var $el = this
    $(this).one('bsTransitionEnd', function () { called = true })
    var callback = function () { if (!called) $($el).trigger($.support.transition.end) }
    setTimeout(callback, duration)
    return this
  }

  $(function () {
    $.support.transition = transitionEnd()

    if (!$.support.transition) return

    $.event.special.bsTransitionEnd = {
      bindType: $.support.transition.end,
      delegateType: $.support.transition.end,
      handle: function (e) {
        if ($(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
      }
    }
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: alert.js v3.3.7
 * http://getbootstrap.com/javascript/#alerts
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // ALERT CLASS DEFINITION
  // ======================

  var dismiss = '[data-dismiss="alert"]'
  var Alert   = function (el) {
    $(el).on('click', dismiss, this.close)
  }

  Alert.VERSION = '3.3.7'

  Alert.TRANSITION_DURATION = 150

  Alert.prototype.close = function (e) {
    var $this    = $(this)
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    var $parent = $(selector === '#' ? [] : selector)

    if (e) e.preventDefault()

    if (!$parent.length) {
      $parent = $this.closest('.alert')
    }

    $parent.trigger(e = $.Event('close.bs.alert'))

    if (e.isDefaultPrevented()) return

    $parent.removeClass('in')

    function removeElement() {
      // detach from parent, fire event then clean up data
      $parent.detach().trigger('closed.bs.alert').remove()
    }

    $.support.transition && $parent.hasClass('fade') ?
      $parent
        .one('bsTransitionEnd', removeElement)
        .emulateTransitionEnd(Alert.TRANSITION_DURATION) :
      removeElement()
  }


  // ALERT PLUGIN DEFINITION
  // =======================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.alert')

      if (!data) $this.data('bs.alert', (data = new Alert(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  var old = $.fn.alert

  $.fn.alert             = Plugin
  $.fn.alert.Constructor = Alert


  // ALERT NO CONFLICT
  // =================

  $.fn.alert.noConflict = function () {
    $.fn.alert = old
    return this
  }


  // ALERT DATA-API
  // ==============

  $(document).on('click.bs.alert.data-api', dismiss, Alert.prototype.close)

}(jQuery);

/* ========================================================================
 * Bootstrap: button.js v3.3.7
 * http://getbootstrap.com/javascript/#buttons
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // BUTTON PUBLIC CLASS DEFINITION
  // ==============================

  var Button = function (element, options) {
    this.$element  = $(element)
    this.options   = $.extend({}, Button.DEFAULTS, options)
    this.isLoading = false
  }

  Button.VERSION  = '3.3.7'

  Button.DEFAULTS = {
    loadingText: 'loading...'
  }

  Button.prototype.setState = function (state) {
    var d    = 'disabled'
    var $el  = this.$element
    var val  = $el.is('input') ? 'val' : 'html'
    var data = $el.data()

    state += 'Text'

    if (data.resetText == null) $el.data('resetText', $el[val]())

    // push to event loop to allow forms to submit
    setTimeout($.proxy(function () {
      $el[val](data[state] == null ? this.options[state] : data[state])

      if (state == 'loadingText') {
        this.isLoading = true
        $el.addClass(d).attr(d, d).prop(d, true)
      } else if (this.isLoading) {
        this.isLoading = false
        $el.removeClass(d).removeAttr(d).prop(d, false)
      }
    }, this), 0)
  }

  Button.prototype.toggle = function () {
    var changed = true
    var $parent = this.$element.closest('[data-toggle="buttons"]')

    if ($parent.length) {
      var $input = this.$element.find('input')
      if ($input.prop('type') == 'radio') {
        if ($input.prop('checked')) changed = false
        $parent.find('.active').removeClass('active')
        this.$element.addClass('active')
      } else if ($input.prop('type') == 'checkbox') {
        if (($input.prop('checked')) !== this.$element.hasClass('active')) changed = false
        this.$element.toggleClass('active')
      }
      $input.prop('checked', this.$element.hasClass('active'))
      if (changed) $input.trigger('change')
    } else {
      this.$element.attr('aria-pressed', !this.$element.hasClass('active'))
      this.$element.toggleClass('active')
    }
  }


  // BUTTON PLUGIN DEFINITION
  // ========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.button')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.button', (data = new Button(this, options)))

      if (option == 'toggle') data.toggle()
      else if (option) data.setState(option)
    })
  }

  var old = $.fn.button

  $.fn.button             = Plugin
  $.fn.button.Constructor = Button


  // BUTTON NO CONFLICT
  // ==================

  $.fn.button.noConflict = function () {
    $.fn.button = old
    return this
  }


  // BUTTON DATA-API
  // ===============

  $(document)
    .on('click.bs.button.data-api', '[data-toggle^="button"]', function (e) {
      var $btn = $(e.target).closest('.btn')
      Plugin.call($btn, 'toggle')
      if (!($(e.target).is('input[type="radio"], input[type="checkbox"]'))) {
        // Prevent double click on radios, and the double selections (so cancellation) on checkboxes
        e.preventDefault()
        // The target component still receive the focus
        if ($btn.is('input,button')) $btn.trigger('focus')
        else $btn.find('input:visible,button:visible').first().trigger('focus')
      }
    })
    .on('focus.bs.button.data-api blur.bs.button.data-api', '[data-toggle^="button"]', function (e) {
      $(e.target).closest('.btn').toggleClass('focus', /^focus(in)?$/.test(e.type))
    })

}(jQuery);

/* ========================================================================
 * Bootstrap: carousel.js v3.3.7
 * http://getbootstrap.com/javascript/#carousel
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // CAROUSEL CLASS DEFINITION
  // =========================

  var Carousel = function (element, options) {
    this.$element    = $(element)
    this.$indicators = this.$element.find('.carousel-indicators')
    this.options     = options
    this.paused      = null
    this.sliding     = null
    this.interval    = null
    this.$active     = null
    this.$items      = null

    this.options.keyboard && this.$element.on('keydown.bs.carousel', $.proxy(this.keydown, this))

    this.options.pause == 'hover' && !('ontouchstart' in document.documentElement) && this.$element
      .on('mouseenter.bs.carousel', $.proxy(this.pause, this))
      .on('mouseleave.bs.carousel', $.proxy(this.cycle, this))
  }

  Carousel.VERSION  = '3.3.7'

  Carousel.TRANSITION_DURATION = 600

  Carousel.DEFAULTS = {
    interval: 5000,
    pause: 'hover',
    wrap: true,
    keyboard: true
  }

  Carousel.prototype.keydown = function (e) {
    if (/input|textarea/i.test(e.target.tagName)) return
    switch (e.which) {
      case 37: this.prev(); break
      case 39: this.next(); break
      default: return
    }

    e.preventDefault()
  }

  Carousel.prototype.cycle = function (e) {
    e || (this.paused = false)

    this.interval && clearInterval(this.interval)

    this.options.interval
      && !this.paused
      && (this.interval = setInterval($.proxy(this.next, this), this.options.interval))

    return this
  }

  Carousel.prototype.getItemIndex = function (item) {
    this.$items = item.parent().children('.item')
    return this.$items.index(item || this.$active)
  }

  Carousel.prototype.getItemForDirection = function (direction, active) {
    var activeIndex = this.getItemIndex(active)
    var willWrap = (direction == 'prev' && activeIndex === 0)
                || (direction == 'next' && activeIndex == (this.$items.length - 1))
    if (willWrap && !this.options.wrap) return active
    var delta = direction == 'prev' ? -1 : 1
    var itemIndex = (activeIndex + delta) % this.$items.length
    return this.$items.eq(itemIndex)
  }

  Carousel.prototype.to = function (pos) {
    var that        = this
    var activeIndex = this.getItemIndex(this.$active = this.$element.find('.item.active'))

    if (pos > (this.$items.length - 1) || pos < 0) return

    if (this.sliding)       return this.$element.one('slid.bs.carousel', function () { that.to(pos) }) // yes, "slid"
    if (activeIndex == pos) return this.pause().cycle()

    return this.slide(pos > activeIndex ? 'next' : 'prev', this.$items.eq(pos))
  }

  Carousel.prototype.pause = function (e) {
    e || (this.paused = true)

    if (this.$element.find('.next, .prev').length && $.support.transition) {
      this.$element.trigger($.support.transition.end)
      this.cycle(true)
    }

    this.interval = clearInterval(this.interval)

    return this
  }

  Carousel.prototype.next = function () {
    if (this.sliding) return
    return this.slide('next')
  }

  Carousel.prototype.prev = function () {
    if (this.sliding) return
    return this.slide('prev')
  }

  Carousel.prototype.slide = function (type, next) {
    var $active   = this.$element.find('.item.active')
    var $next     = next || this.getItemForDirection(type, $active)
    var isCycling = this.interval
    var direction = type == 'next' ? 'left' : 'right'
    var that      = this

    if ($next.hasClass('active')) return (this.sliding = false)

    var relatedTarget = $next[0]
    var slideEvent = $.Event('slide.bs.carousel', {
      relatedTarget: relatedTarget,
      direction: direction
    })
    this.$element.trigger(slideEvent)
    if (slideEvent.isDefaultPrevented()) return

    this.sliding = true

    isCycling && this.pause()

    if (this.$indicators.length) {
      this.$indicators.find('.active').removeClass('active')
      var $nextIndicator = $(this.$indicators.children()[this.getItemIndex($next)])
      $nextIndicator && $nextIndicator.addClass('active')
    }

    var slidEvent = $.Event('slid.bs.carousel', { relatedTarget: relatedTarget, direction: direction }) // yes, "slid"
    if ($.support.transition && this.$element.hasClass('slide')) {
      $next.addClass(type)
      $next[0].offsetWidth // force reflow
      $active.addClass(direction)
      $next.addClass(direction)
      $active
        .one('bsTransitionEnd', function () {
          $next.removeClass([type, direction].join(' ')).addClass('active')
          $active.removeClass(['active', direction].join(' '))
          that.sliding = false
          setTimeout(function () {
            that.$element.trigger(slidEvent)
          }, 0)
        })
        .emulateTransitionEnd(Carousel.TRANSITION_DURATION)
    } else {
      $active.removeClass('active')
      $next.addClass('active')
      this.sliding = false
      this.$element.trigger(slidEvent)
    }

    isCycling && this.cycle()

    return this
  }


  // CAROUSEL PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.carousel')
      var options = $.extend({}, Carousel.DEFAULTS, $this.data(), typeof option == 'object' && option)
      var action  = typeof option == 'string' ? option : options.slide

      if (!data) $this.data('bs.carousel', (data = new Carousel(this, options)))
      if (typeof option == 'number') data.to(option)
      else if (action) data[action]()
      else if (options.interval) data.pause().cycle()
    })
  }

  var old = $.fn.carousel

  $.fn.carousel             = Plugin
  $.fn.carousel.Constructor = Carousel


  // CAROUSEL NO CONFLICT
  // ====================

  $.fn.carousel.noConflict = function () {
    $.fn.carousel = old
    return this
  }


  // CAROUSEL DATA-API
  // =================

  var clickHandler = function (e) {
    var href
    var $this   = $(this)
    var $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) // strip for ie7
    if (!$target.hasClass('carousel')) return
    var options = $.extend({}, $target.data(), $this.data())
    var slideIndex = $this.attr('data-slide-to')
    if (slideIndex) options.interval = false

    Plugin.call($target, options)

    if (slideIndex) {
      $target.data('bs.carousel').to(slideIndex)
    }

    e.preventDefault()
  }

  $(document)
    .on('click.bs.carousel.data-api', '[data-slide]', clickHandler)
    .on('click.bs.carousel.data-api', '[data-slide-to]', clickHandler)

  $(window).on('load', function () {
    $('[data-ride="carousel"]').each(function () {
      var $carousel = $(this)
      Plugin.call($carousel, $carousel.data())
    })
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: collapse.js v3.3.7
 * http://getbootstrap.com/javascript/#collapse
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

/* jshint latedef: false */

+function ($) {
  'use strict';

  // COLLAPSE PUBLIC CLASS DEFINITION
  // ================================

  var Collapse = function (element, options) {
    this.$element      = $(element)
    this.options       = $.extend({}, Collapse.DEFAULTS, options)
    this.$trigger      = $('[data-toggle="collapse"][href="#' + element.id + '"],' +
                           '[data-toggle="collapse"][data-target="#' + element.id + '"]')
    this.transitioning = null

    if (this.options.parent) {
      this.$parent = this.getParent()
    } else {
      this.addAriaAndCollapsedClass(this.$element, this.$trigger)
    }

    if (this.options.toggle) this.toggle()
  }

  Collapse.VERSION  = '3.3.7'

  Collapse.TRANSITION_DURATION = 350

  Collapse.DEFAULTS = {
    toggle: true
  }

  Collapse.prototype.dimension = function () {
    var hasWidth = this.$element.hasClass('width')
    return hasWidth ? 'width' : 'height'
  }

  Collapse.prototype.show = function () {
    if (this.transitioning || this.$element.hasClass('in')) return

    var activesData
    var actives = this.$parent && this.$parent.children('.panel').children('.in, .collapsing')

    if (actives && actives.length) {
      activesData = actives.data('bs.collapse')
      if (activesData && activesData.transitioning) return
    }

    var startEvent = $.Event('show.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    if (actives && actives.length) {
      Plugin.call(actives, 'hide')
      activesData || actives.data('bs.collapse', null)
    }

    var dimension = this.dimension()

    this.$element
      .removeClass('collapse')
      .addClass('collapsing')[dimension](0)
      .attr('aria-expanded', true)

    this.$trigger
      .removeClass('collapsed')
      .attr('aria-expanded', true)

    this.transitioning = 1

    var complete = function () {
      this.$element
        .removeClass('collapsing')
        .addClass('collapse in')[dimension]('')
      this.transitioning = 0
      this.$element
        .trigger('shown.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    var scrollSize = $.camelCase(['scroll', dimension].join('-'))

    this.$element
      .one('bsTransitionEnd', $.proxy(complete, this))
      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)[dimension](this.$element[0][scrollSize])
  }

  Collapse.prototype.hide = function () {
    if (this.transitioning || !this.$element.hasClass('in')) return

    var startEvent = $.Event('hide.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    var dimension = this.dimension()

    this.$element[dimension](this.$element[dimension]())[0].offsetHeight

    this.$element
      .addClass('collapsing')
      .removeClass('collapse in')
      .attr('aria-expanded', false)

    this.$trigger
      .addClass('collapsed')
      .attr('aria-expanded', false)

    this.transitioning = 1

    var complete = function () {
      this.transitioning = 0
      this.$element
        .removeClass('collapsing')
        .addClass('collapse')
        .trigger('hidden.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    this.$element
      [dimension](0)
      .one('bsTransitionEnd', $.proxy(complete, this))
      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)
  }

  Collapse.prototype.toggle = function () {
    this[this.$element.hasClass('in') ? 'hide' : 'show']()
  }

  Collapse.prototype.getParent = function () {
    return $(this.options.parent)
      .find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]')
      .each($.proxy(function (i, element) {
        var $element = $(element)
        this.addAriaAndCollapsedClass(getTargetFromTrigger($element), $element)
      }, this))
      .end()
  }

  Collapse.prototype.addAriaAndCollapsedClass = function ($element, $trigger) {
    var isOpen = $element.hasClass('in')

    $element.attr('aria-expanded', isOpen)
    $trigger
      .toggleClass('collapsed', !isOpen)
      .attr('aria-expanded', isOpen)
  }

  function getTargetFromTrigger($trigger) {
    var href
    var target = $trigger.attr('data-target')
      || (href = $trigger.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') // strip for ie7

    return $(target)
  }


  // COLLAPSE PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.collapse')
      var options = $.extend({}, Collapse.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data && options.toggle && /show|hide/.test(option)) options.toggle = false
      if (!data) $this.data('bs.collapse', (data = new Collapse(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.collapse

  $.fn.collapse             = Plugin
  $.fn.collapse.Constructor = Collapse


  // COLLAPSE NO CONFLICT
  // ====================

  $.fn.collapse.noConflict = function () {
    $.fn.collapse = old
    return this
  }


  // COLLAPSE DATA-API
  // =================

  $(document).on('click.bs.collapse.data-api', '[data-toggle="collapse"]', function (e) {
    var $this   = $(this)

    if (!$this.attr('data-target')) e.preventDefault()

    var $target = getTargetFromTrigger($this)
    var data    = $target.data('bs.collapse')
    var option  = data ? 'toggle' : $this.data()

    Plugin.call($target, option)
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: dropdown.js v3.3.7
 * http://getbootstrap.com/javascript/#dropdowns
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // DROPDOWN CLASS DEFINITION
  // =========================

  var backdrop = '.dropdown-backdrop'
  var toggle   = '[data-toggle="dropdown"]'
  var Dropdown = function (element) {
    $(element).on('click.bs.dropdown', this.toggle)
  }

  Dropdown.VERSION = '3.3.7'

  function getParent($this) {
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    var $parent = selector && $(selector)

    return $parent && $parent.length ? $parent : $this.parent()
  }

  function clearMenus(e) {
    if (e && e.which === 3) return
    $(backdrop).remove()
    $(toggle).each(function () {
      var $this         = $(this)
      var $parent       = getParent($this)
      var relatedTarget = { relatedTarget: this }

      if (!$parent.hasClass('open')) return

      if (e && e.type == 'click' && /input|textarea/i.test(e.target.tagName) && $.contains($parent[0], e.target)) return

      $parent.trigger(e = $.Event('hide.bs.dropdown', relatedTarget))

      if (e.isDefaultPrevented()) return

      $this.attr('aria-expanded', 'false')
      $parent.removeClass('open').trigger($.Event('hidden.bs.dropdown', relatedTarget))
    })
  }

  Dropdown.prototype.toggle = function (e) {
    var $this = $(this)

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    clearMenus()

    if (!isActive) {
      if ('ontouchstart' in document.documentElement && !$parent.closest('.navbar-nav').length) {
        // if mobile we use a backdrop because click events don't delegate
        $(document.createElement('div'))
          .addClass('dropdown-backdrop')
          .insertAfter($(this))
          .on('click', clearMenus)
      }

      var relatedTarget = { relatedTarget: this }
      $parent.trigger(e = $.Event('show.bs.dropdown', relatedTarget))

      if (e.isDefaultPrevented()) return

      $this
        .trigger('focus')
        .attr('aria-expanded', 'true')

      $parent
        .toggleClass('open')
        .trigger($.Event('shown.bs.dropdown', relatedTarget))
    }

    return false
  }

  Dropdown.prototype.keydown = function (e) {
    if (!/(38|40|27|32)/.test(e.which) || /input|textarea/i.test(e.target.tagName)) return

    var $this = $(this)

    e.preventDefault()
    e.stopPropagation()

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    if (!isActive && e.which != 27 || isActive && e.which == 27) {
      if (e.which == 27) $parent.find(toggle).trigger('focus')
      return $this.trigger('click')
    }

    var desc = ' li:not(.disabled):visible a'
    var $items = $parent.find('.dropdown-menu' + desc)

    if (!$items.length) return

    var index = $items.index(e.target)

    if (e.which == 38 && index > 0)                 index--         // up
    if (e.which == 40 && index < $items.length - 1) index++         // down
    if (!~index)                                    index = 0

    $items.eq(index).trigger('focus')
  }


  // DROPDOWN PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.dropdown')

      if (!data) $this.data('bs.dropdown', (data = new Dropdown(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  var old = $.fn.dropdown

  $.fn.dropdown             = Plugin
  $.fn.dropdown.Constructor = Dropdown


  // DROPDOWN NO CONFLICT
  // ====================

  $.fn.dropdown.noConflict = function () {
    $.fn.dropdown = old
    return this
  }


  // APPLY TO STANDARD DROPDOWN ELEMENTS
  // ===================================

  $(document)
    .on('click.bs.dropdown.data-api', clearMenus)
    .on('click.bs.dropdown.data-api', '.dropdown form', function (e) { e.stopPropagation() })
    .on('click.bs.dropdown.data-api', toggle, Dropdown.prototype.toggle)
    .on('keydown.bs.dropdown.data-api', toggle, Dropdown.prototype.keydown)
    .on('keydown.bs.dropdown.data-api', '.dropdown-menu', Dropdown.prototype.keydown)

}(jQuery);

/* ========================================================================
 * Bootstrap: modal.js v3.3.7
 * http://getbootstrap.com/javascript/#modals
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // MODAL CLASS DEFINITION
  // ======================

  var Modal = function (element, options) {
    this.options             = options
    this.$body               = $(document.body)
    this.$element            = $(element)
    this.$dialog             = this.$element.find('.modal-dialog')
    this.$backdrop           = null
    this.isShown             = null
    this.originalBodyPad     = null
    this.scrollbarWidth      = 0
    this.ignoreBackdropClick = false

    if (this.options.remote) {
      this.$element
        .find('.modal-content')
        .load(this.options.remote, $.proxy(function () {
          this.$element.trigger('loaded.bs.modal')
        }, this))
    }
  }

  Modal.VERSION  = '3.3.7'

  Modal.TRANSITION_DURATION = 300
  Modal.BACKDROP_TRANSITION_DURATION = 150

  Modal.DEFAULTS = {
    backdrop: true,
    keyboard: true,
    show: true
  }

  Modal.prototype.toggle = function (_relatedTarget) {
    return this.isShown ? this.hide() : this.show(_relatedTarget)
  }

  Modal.prototype.show = function (_relatedTarget) {
    var that = this
    var e    = $.Event('show.bs.modal', { relatedTarget: _relatedTarget })

    this.$element.trigger(e)

    if (this.isShown || e.isDefaultPrevented()) return

    this.isShown = true

    this.checkScrollbar()
    this.setScrollbar()
    this.$body.addClass('modal-open')

    this.escape()
    this.resize()

    this.$element.on('click.dismiss.bs.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this))

    this.$dialog.on('mousedown.dismiss.bs.modal', function () {
      that.$element.one('mouseup.dismiss.bs.modal', function (e) {
        if ($(e.target).is(that.$element)) that.ignoreBackdropClick = true
      })
    })

    this.backdrop(function () {
      var transition = $.support.transition && that.$element.hasClass('fade')

      if (!that.$element.parent().length) {
        that.$element.appendTo(that.$body) // don't move modals dom position
      }

      that.$element
        .show()
        .scrollTop(0)

      that.adjustDialog()

      if (transition) {
        that.$element[0].offsetWidth // force reflow
      }

      that.$element.addClass('in')

      that.enforceFocus()

      var e = $.Event('shown.bs.modal', { relatedTarget: _relatedTarget })

      transition ?
        that.$dialog // wait for modal to slide in
          .one('bsTransitionEnd', function () {
            that.$element.trigger('focus').trigger(e)
          })
          .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
        that.$element.trigger('focus').trigger(e)
    })
  }

  Modal.prototype.hide = function (e) {
    if (e) e.preventDefault()

    e = $.Event('hide.bs.modal')

    this.$element.trigger(e)

    if (!this.isShown || e.isDefaultPrevented()) return

    this.isShown = false

    this.escape()
    this.resize()

    $(document).off('focusin.bs.modal')

    this.$element
      .removeClass('in')
      .off('click.dismiss.bs.modal')
      .off('mouseup.dismiss.bs.modal')

    this.$dialog.off('mousedown.dismiss.bs.modal')

    $.support.transition && this.$element.hasClass('fade') ?
      this.$element
        .one('bsTransitionEnd', $.proxy(this.hideModal, this))
        .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
      this.hideModal()
  }

  Modal.prototype.enforceFocus = function () {
    $(document)
      .off('focusin.bs.modal') // guard against infinite focus loop
      .on('focusin.bs.modal', $.proxy(function (e) {
        if (document !== e.target &&
            this.$element[0] !== e.target &&
            !this.$element.has(e.target).length) {
          this.$element.trigger('focus')
        }
      }, this))
  }

  Modal.prototype.escape = function () {
    if (this.isShown && this.options.keyboard) {
      this.$element.on('keydown.dismiss.bs.modal', $.proxy(function (e) {
        e.which == 27 && this.hide()
      }, this))
    } else if (!this.isShown) {
      this.$element.off('keydown.dismiss.bs.modal')
    }
  }

  Modal.prototype.resize = function () {
    if (this.isShown) {
      $(window).on('resize.bs.modal', $.proxy(this.handleUpdate, this))
    } else {
      $(window).off('resize.bs.modal')
    }
  }

  Modal.prototype.hideModal = function () {
    var that = this
    this.$element.hide()
    this.backdrop(function () {
      that.$body.removeClass('modal-open')
      that.resetAdjustments()
      that.resetScrollbar()
      that.$element.trigger('hidden.bs.modal')
    })
  }

  Modal.prototype.removeBackdrop = function () {
    this.$backdrop && this.$backdrop.remove()
    this.$backdrop = null
  }

  Modal.prototype.backdrop = function (callback) {
    var that = this
    var animate = this.$element.hasClass('fade') ? 'fade' : ''

    if (this.isShown && this.options.backdrop) {
      var doAnimate = $.support.transition && animate

      this.$backdrop = $(document.createElement('div'))
        .addClass('modal-backdrop ' + animate)
        .appendTo(this.$body)

      this.$element.on('click.dismiss.bs.modal', $.proxy(function (e) {
        if (this.ignoreBackdropClick) {
          this.ignoreBackdropClick = false
          return
        }
        if (e.target !== e.currentTarget) return
        this.options.backdrop == 'static'
          ? this.$element[0].focus()
          : this.hide()
      }, this))

      if (doAnimate) this.$backdrop[0].offsetWidth // force reflow

      this.$backdrop.addClass('in')

      if (!callback) return

      doAnimate ?
        this.$backdrop
          .one('bsTransitionEnd', callback)
          .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
        callback()

    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass('in')

      var callbackRemove = function () {
        that.removeBackdrop()
        callback && callback()
      }
      $.support.transition && this.$element.hasClass('fade') ?
        this.$backdrop
          .one('bsTransitionEnd', callbackRemove)
          .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
        callbackRemove()

    } else if (callback) {
      callback()
    }
  }

  // these following methods are used to handle overflowing modals

  Modal.prototype.handleUpdate = function () {
    this.adjustDialog()
  }

  Modal.prototype.adjustDialog = function () {
    var modalIsOverflowing = this.$element[0].scrollHeight > document.documentElement.clientHeight

    this.$element.css({
      paddingLeft:  !this.bodyIsOverflowing && modalIsOverflowing ? this.scrollbarWidth : '',
      paddingRight: this.bodyIsOverflowing && !modalIsOverflowing ? this.scrollbarWidth : ''
    })
  }

  Modal.prototype.resetAdjustments = function () {
    this.$element.css({
      paddingLeft: '',
      paddingRight: ''
    })
  }

  Modal.prototype.checkScrollbar = function () {
    var fullWindowWidth = window.innerWidth
    if (!fullWindowWidth) { // workaround for missing window.innerWidth in IE8
      var documentElementRect = document.documentElement.getBoundingClientRect()
      fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left)
    }
    this.bodyIsOverflowing = document.body.clientWidth < fullWindowWidth
    this.scrollbarWidth = this.measureScrollbar()
  }

  Modal.prototype.setScrollbar = function () {
    var bodyPad = parseInt((this.$body.css('padding-right') || 0), 10)
    this.originalBodyPad = document.body.style.paddingRight || ''
    if (this.bodyIsOverflowing) this.$body.css('padding-right', bodyPad + this.scrollbarWidth)
  }

  Modal.prototype.resetScrollbar = function () {
    this.$body.css('padding-right', this.originalBodyPad)
  }

  Modal.prototype.measureScrollbar = function () { // thx walsh
    var scrollDiv = document.createElement('div')
    scrollDiv.className = 'modal-scrollbar-measure'
    this.$body.append(scrollDiv)
    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
    this.$body[0].removeChild(scrollDiv)
    return scrollbarWidth
  }


  // MODAL PLUGIN DEFINITION
  // =======================

  function Plugin(option, _relatedTarget) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.modal')
      var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data) $this.data('bs.modal', (data = new Modal(this, options)))
      if (typeof option == 'string') data[option](_relatedTarget)
      else if (options.show) data.show(_relatedTarget)
    })
  }

  var old = $.fn.modal

  $.fn.modal             = Plugin
  $.fn.modal.Constructor = Modal


  // MODAL NO CONFLICT
  // =================

  $.fn.modal.noConflict = function () {
    $.fn.modal = old
    return this
  }


  // MODAL DATA-API
  // ==============

  $(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) {
    var $this   = $(this)
    var href    = $this.attr('href')
    var $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) // strip for ie7
    var option  = $target.data('bs.modal') ? 'toggle' : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data())

    if ($this.is('a')) e.preventDefault()

    $target.one('show.bs.modal', function (showEvent) {
      if (showEvent.isDefaultPrevented()) return // only register focus restorer if modal will actually get shown
      $target.one('hidden.bs.modal', function () {
        $this.is(':visible') && $this.trigger('focus')
      })
    })
    Plugin.call($target, option, this)
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: tooltip.js v3.3.7
 * http://getbootstrap.com/javascript/#tooltip
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // TOOLTIP PUBLIC CLASS DEFINITION
  // ===============================

  var Tooltip = function (element, options) {
    this.type       = null
    this.options    = null
    this.enabled    = null
    this.timeout    = null
    this.hoverState = null
    this.$element   = null
    this.inState    = null

    this.init('tooltip', element, options)
  }

  Tooltip.VERSION  = '3.3.7'

  Tooltip.TRANSITION_DURATION = 150

  Tooltip.DEFAULTS = {
    animation: true,
    placement: 'top',
    selector: false,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    container: false,
    viewport: {
      selector: 'body',
      padding: 0
    }
  }

  Tooltip.prototype.init = function (type, element, options) {
    this.enabled   = true
    this.type      = type
    this.$element  = $(element)
    this.options   = this.getOptions(options)
    this.$viewport = this.options.viewport && $($.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : (this.options.viewport.selector || this.options.viewport))
    this.inState   = { click: false, hover: false, focus: false }

    if (this.$element[0] instanceof document.constructor && !this.options.selector) {
      throw new Error('`selector` option must be specified when initializing ' + this.type + ' on the window.document object!')
    }

    var triggers = this.options.trigger.split(' ')

    for (var i = triggers.length; i--;) {
      var trigger = triggers[i]

      if (trigger == 'click') {
        this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this))
      } else if (trigger != 'manual') {
        var eventIn  = trigger == 'hover' ? 'mouseenter' : 'focusin'
        var eventOut = trigger == 'hover' ? 'mouseleave' : 'focusout'

        this.$element.on(eventIn  + '.' + this.type, this.options.selector, $.proxy(this.enter, this))
        this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this))
      }
    }

    this.options.selector ?
      (this._options = $.extend({}, this.options, { trigger: 'manual', selector: '' })) :
      this.fixTitle()
  }

  Tooltip.prototype.getDefaults = function () {
    return Tooltip.DEFAULTS
  }

  Tooltip.prototype.getOptions = function (options) {
    options = $.extend({}, this.getDefaults(), this.$element.data(), options)

    if (options.delay && typeof options.delay == 'number') {
      options.delay = {
        show: options.delay,
        hide: options.delay
      }
    }

    return options
  }

  Tooltip.prototype.getDelegateOptions = function () {
    var options  = {}
    var defaults = this.getDefaults()

    this._options && $.each(this._options, function (key, value) {
      if (defaults[key] != value) options[key] = value
    })

    return options
  }

  Tooltip.prototype.enter = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget).data('bs.' + this.type)

    if (!self) {
      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
      $(obj.currentTarget).data('bs.' + this.type, self)
    }

    if (obj instanceof $.Event) {
      self.inState[obj.type == 'focusin' ? 'focus' : 'hover'] = true
    }

    if (self.tip().hasClass('in') || self.hoverState == 'in') {
      self.hoverState = 'in'
      return
    }

    clearTimeout(self.timeout)

    self.hoverState = 'in'

    if (!self.options.delay || !self.options.delay.show) return self.show()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'in') self.show()
    }, self.options.delay.show)
  }

  Tooltip.prototype.isInStateTrue = function () {
    for (var key in this.inState) {
      if (this.inState[key]) return true
    }

    return false
  }

  Tooltip.prototype.leave = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget).data('bs.' + this.type)

    if (!self) {
      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
      $(obj.currentTarget).data('bs.' + this.type, self)
    }

    if (obj instanceof $.Event) {
      self.inState[obj.type == 'focusout' ? 'focus' : 'hover'] = false
    }

    if (self.isInStateTrue()) return

    clearTimeout(self.timeout)

    self.hoverState = 'out'

    if (!self.options.delay || !self.options.delay.hide) return self.hide()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'out') self.hide()
    }, self.options.delay.hide)
  }

  Tooltip.prototype.show = function () {
    var e = $.Event('show.bs.' + this.type)

    if (this.hasContent() && this.enabled) {
      this.$element.trigger(e)

      var inDom = $.contains(this.$element[0].ownerDocument.documentElement, this.$element[0])
      if (e.isDefaultPrevented() || !inDom) return
      var that = this

      var $tip = this.tip()

      var tipId = this.getUID(this.type)

      this.setContent()
      $tip.attr('id', tipId)
      this.$element.attr('aria-describedby', tipId)

      if (this.options.animation) $tip.addClass('fade')

      var placement = typeof this.options.placement == 'function' ?
        this.options.placement.call(this, $tip[0], this.$element[0]) :
        this.options.placement

      var autoToken = /\s?auto?\s?/i
      var autoPlace = autoToken.test(placement)
      if (autoPlace) placement = placement.replace(autoToken, '') || 'top'

      $tip
        .detach()
        .css({ top: 0, left: 0, display: 'block' })
        .addClass(placement)
        .data('bs.' + this.type, this)

      this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element)
      this.$element.trigger('inserted.bs.' + this.type)

      var pos          = this.getPosition()
      var actualWidth  = $tip[0].offsetWidth
      var actualHeight = $tip[0].offsetHeight

      if (autoPlace) {
        var orgPlacement = placement
        var viewportDim = this.getPosition(this.$viewport)

        placement = placement == 'bottom' && pos.bottom + actualHeight > viewportDim.bottom ? 'top'    :
                    placement == 'top'    && pos.top    - actualHeight < viewportDim.top    ? 'bottom' :
                    placement == 'right'  && pos.right  + actualWidth  > viewportDim.width  ? 'left'   :
                    placement == 'left'   && pos.left   - actualWidth  < viewportDim.left   ? 'right'  :
                    placement

        $tip
          .removeClass(orgPlacement)
          .addClass(placement)
      }

      var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight)

      this.applyPlacement(calculatedOffset, placement)

      var complete = function () {
        var prevHoverState = that.hoverState
        that.$element.trigger('shown.bs.' + that.type)
        that.hoverState = null

        if (prevHoverState == 'out') that.leave(that)
      }

      $.support.transition && this.$tip.hasClass('fade') ?
        $tip
          .one('bsTransitionEnd', complete)
          .emulateTransitionEnd(Tooltip.TRANSITION_DURATION) :
        complete()
    }
  }

  Tooltip.prototype.applyPlacement = function (offset, placement) {
    var $tip   = this.tip()
    var width  = $tip[0].offsetWidth
    var height = $tip[0].offsetHeight

    // manually read margins because getBoundingClientRect includes difference
    var marginTop = parseInt($tip.css('margin-top'), 10)
    var marginLeft = parseInt($tip.css('margin-left'), 10)

    // we must check for NaN for ie 8/9
    if (isNaN(marginTop))  marginTop  = 0
    if (isNaN(marginLeft)) marginLeft = 0

    offset.top  += marginTop
    offset.left += marginLeft

    // $.fn.offset doesn't round pixel values
    // so we use setOffset directly with our own function B-0
    $.offset.setOffset($tip[0], $.extend({
      using: function (props) {
        $tip.css({
          top: Math.round(props.top),
          left: Math.round(props.left)
        })
      }
    }, offset), 0)

    $tip.addClass('in')

    // check to see if placing tip in new offset caused the tip to resize itself
    var actualWidth  = $tip[0].offsetWidth
    var actualHeight = $tip[0].offsetHeight

    if (placement == 'top' && actualHeight != height) {
      offset.top = offset.top + height - actualHeight
    }

    var delta = this.getViewportAdjustedDelta(placement, offset, actualWidth, actualHeight)

    if (delta.left) offset.left += delta.left
    else offset.top += delta.top

    var isVertical          = /top|bottom/.test(placement)
    var arrowDelta          = isVertical ? delta.left * 2 - width + actualWidth : delta.top * 2 - height + actualHeight
    var arrowOffsetPosition = isVertical ? 'offsetWidth' : 'offsetHeight'

    $tip.offset(offset)
    this.replaceArrow(arrowDelta, $tip[0][arrowOffsetPosition], isVertical)
  }

  Tooltip.prototype.replaceArrow = function (delta, dimension, isVertical) {
    this.arrow()
      .css(isVertical ? 'left' : 'top', 50 * (1 - delta / dimension) + '%')
      .css(isVertical ? 'top' : 'left', '')
  }

  Tooltip.prototype.setContent = function () {
    var $tip  = this.tip()
    var title = this.getTitle()

    $tip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title)
    $tip.removeClass('fade in top bottom left right')
  }

  Tooltip.prototype.hide = function (callback) {
    var that = this
    var $tip = $(this.$tip)
    var e    = $.Event('hide.bs.' + this.type)

    function complete() {
      if (that.hoverState != 'in') $tip.detach()
      if (that.$element) { // TODO: Check whether guarding this code with this `if` is really necessary.
        that.$element
          .removeAttr('aria-describedby')
          .trigger('hidden.bs.' + that.type)
      }
      callback && callback()
    }

    this.$element.trigger(e)

    if (e.isDefaultPrevented()) return

    $tip.removeClass('in')

    $.support.transition && $tip.hasClass('fade') ?
      $tip
        .one('bsTransitionEnd', complete)
        .emulateTransitionEnd(Tooltip.TRANSITION_DURATION) :
      complete()

    this.hoverState = null

    return this
  }

  Tooltip.prototype.fixTitle = function () {
    var $e = this.$element
    if ($e.attr('title') || typeof $e.attr('data-original-title') != 'string') {
      $e.attr('data-original-title', $e.attr('title') || '').attr('title', '')
    }
  }

  Tooltip.prototype.hasContent = function () {
    return this.getTitle()
  }

  Tooltip.prototype.getPosition = function ($element) {
    $element   = $element || this.$element

    var el     = $element[0]
    var isBody = el.tagName == 'BODY'

    var elRect    = el.getBoundingClientRect()
    if (elRect.width == null) {
      // width and height are missing in IE8, so compute them manually; see https://github.com/twbs/bootstrap/issues/14093
      elRect = $.extend({}, elRect, { width: elRect.right - elRect.left, height: elRect.bottom - elRect.top })
    }
    var isSvg = window.SVGElement && el instanceof window.SVGElement
    // Avoid using $.offset() on SVGs since it gives incorrect results in jQuery 3.
    // See https://github.com/twbs/bootstrap/issues/20280
    var elOffset  = isBody ? { top: 0, left: 0 } : (isSvg ? null : $element.offset())
    var scroll    = { scroll: isBody ? document.documentElement.scrollTop || document.body.scrollTop : $element.scrollTop() }
    var outerDims = isBody ? { width: $(window).width(), height: $(window).height() } : null

    return $.extend({}, elRect, scroll, outerDims, elOffset)
  }

  Tooltip.prototype.getCalculatedOffset = function (placement, pos, actualWidth, actualHeight) {
    return placement == 'bottom' ? { top: pos.top + pos.height,   left: pos.left + pos.width / 2 - actualWidth / 2 } :
           placement == 'top'    ? { top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2 } :
           placement == 'left'   ? { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth } :
        /* placement == 'right' */ { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width }

  }

  Tooltip.prototype.getViewportAdjustedDelta = function (placement, pos, actualWidth, actualHeight) {
    var delta = { top: 0, left: 0 }
    if (!this.$viewport) return delta

    var viewportPadding = this.options.viewport && this.options.viewport.padding || 0
    var viewportDimensions = this.getPosition(this.$viewport)

    if (/right|left/.test(placement)) {
      var topEdgeOffset    = pos.top - viewportPadding - viewportDimensions.scroll
      var bottomEdgeOffset = pos.top + viewportPadding - viewportDimensions.scroll + actualHeight
      if (topEdgeOffset < viewportDimensions.top) { // top overflow
        delta.top = viewportDimensions.top - topEdgeOffset
      } else if (bottomEdgeOffset > viewportDimensions.top + viewportDimensions.height) { // bottom overflow
        delta.top = viewportDimensions.top + viewportDimensions.height - bottomEdgeOffset
      }
    } else {
      var leftEdgeOffset  = pos.left - viewportPadding
      var rightEdgeOffset = pos.left + viewportPadding + actualWidth
      if (leftEdgeOffset < viewportDimensions.left) { // left overflow
        delta.left = viewportDimensions.left - leftEdgeOffset
      } else if (rightEdgeOffset > viewportDimensions.right) { // right overflow
        delta.left = viewportDimensions.left + viewportDimensions.width - rightEdgeOffset
      }
    }

    return delta
  }

  Tooltip.prototype.getTitle = function () {
    var title
    var $e = this.$element
    var o  = this.options

    title = $e.attr('data-original-title')
      || (typeof o.title == 'function' ? o.title.call($e[0]) :  o.title)

    return title
  }

  Tooltip.prototype.getUID = function (prefix) {
    do prefix += ~~(Math.random() * 1000000)
    while (document.getElementById(prefix))
    return prefix
  }

  Tooltip.prototype.tip = function () {
    if (!this.$tip) {
      this.$tip = $(this.options.template)
      if (this.$tip.length != 1) {
        throw new Error(this.type + ' `template` option must consist of exactly 1 top-level element!')
      }
    }
    return this.$tip
  }

  Tooltip.prototype.arrow = function () {
    return (this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow'))
  }

  Tooltip.prototype.enable = function () {
    this.enabled = true
  }

  Tooltip.prototype.disable = function () {
    this.enabled = false
  }

  Tooltip.prototype.toggleEnabled = function () {
    this.enabled = !this.enabled
  }

  Tooltip.prototype.toggle = function (e) {
    var self = this
    if (e) {
      self = $(e.currentTarget).data('bs.' + this.type)
      if (!self) {
        self = new this.constructor(e.currentTarget, this.getDelegateOptions())
        $(e.currentTarget).data('bs.' + this.type, self)
      }
    }

    if (e) {
      self.inState.click = !self.inState.click
      if (self.isInStateTrue()) self.enter(self)
      else self.leave(self)
    } else {
      self.tip().hasClass('in') ? self.leave(self) : self.enter(self)
    }
  }

  Tooltip.prototype.destroy = function () {
    var that = this
    clearTimeout(this.timeout)
    this.hide(function () {
      that.$element.off('.' + that.type).removeData('bs.' + that.type)
      if (that.$tip) {
        that.$tip.detach()
      }
      that.$tip = null
      that.$arrow = null
      that.$viewport = null
      that.$element = null
    })
  }


  // TOOLTIP PLUGIN DEFINITION
  // =========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.tooltip')
      var options = typeof option == 'object' && option

      if (!data && /destroy|hide/.test(option)) return
      if (!data) $this.data('bs.tooltip', (data = new Tooltip(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.tooltip

  $.fn.tooltip             = Plugin
  $.fn.tooltip.Constructor = Tooltip


  // TOOLTIP NO CONFLICT
  // ===================

  $.fn.tooltip.noConflict = function () {
    $.fn.tooltip = old
    return this
  }

}(jQuery);

/* ========================================================================
 * Bootstrap: popover.js v3.3.7
 * http://getbootstrap.com/javascript/#popovers
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // POPOVER PUBLIC CLASS DEFINITION
  // ===============================

  var Popover = function (element, options) {
    this.init('popover', element, options)
  }

  if (!$.fn.tooltip) throw new Error('Popover requires tooltip.js')

  Popover.VERSION  = '3.3.7'

  Popover.DEFAULTS = $.extend({}, $.fn.tooltip.Constructor.DEFAULTS, {
    placement: 'right',
    trigger: 'click',
    content: '',
    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
  })


  // NOTE: POPOVER EXTENDS tooltip.js
  // ================================

  Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype)

  Popover.prototype.constructor = Popover

  Popover.prototype.getDefaults = function () {
    return Popover.DEFAULTS
  }

  Popover.prototype.setContent = function () {
    var $tip    = this.tip()
    var title   = this.getTitle()
    var content = this.getContent()

    $tip.find('.popover-title')[this.options.html ? 'html' : 'text'](title)
    $tip.find('.popover-content').children().detach().end()[ // we use append for html objects to maintain js events
      this.options.html ? (typeof content == 'string' ? 'html' : 'append') : 'text'
    ](content)

    $tip.removeClass('fade top bottom left right in')

    // IE8 doesn't accept hiding via the `:empty` pseudo selector, we have to do
    // this manually by checking the contents.
    if (!$tip.find('.popover-title').html()) $tip.find('.popover-title').hide()
  }

  Popover.prototype.hasContent = function () {
    return this.getTitle() || this.getContent()
  }

  Popover.prototype.getContent = function () {
    var $e = this.$element
    var o  = this.options

    return $e.attr('data-content')
      || (typeof o.content == 'function' ?
            o.content.call($e[0]) :
            o.content)
  }

  Popover.prototype.arrow = function () {
    return (this.$arrow = this.$arrow || this.tip().find('.arrow'))
  }


  // POPOVER PLUGIN DEFINITION
  // =========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.popover')
      var options = typeof option == 'object' && option

      if (!data && /destroy|hide/.test(option)) return
      if (!data) $this.data('bs.popover', (data = new Popover(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.popover

  $.fn.popover             = Plugin
  $.fn.popover.Constructor = Popover


  // POPOVER NO CONFLICT
  // ===================

  $.fn.popover.noConflict = function () {
    $.fn.popover = old
    return this
  }

}(jQuery);

/* ========================================================================
 * Bootstrap: scrollspy.js v3.3.7
 * http://getbootstrap.com/javascript/#scrollspy
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // SCROLLSPY CLASS DEFINITION
  // ==========================

  function ScrollSpy(element, options) {
    this.$body          = $(document.body)
    this.$scrollElement = $(element).is(document.body) ? $(window) : $(element)
    this.options        = $.extend({}, ScrollSpy.DEFAULTS, options)
    this.selector       = (this.options.target || '') + ' .nav li > a'
    this.offsets        = []
    this.targets        = []
    this.activeTarget   = null
    this.scrollHeight   = 0

    this.$scrollElement.on('scroll.bs.scrollspy', $.proxy(this.process, this))
    this.refresh()
    this.process()
  }

  ScrollSpy.VERSION  = '3.3.7'

  ScrollSpy.DEFAULTS = {
    offset: 10
  }

  ScrollSpy.prototype.getScrollHeight = function () {
    return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
  }

  ScrollSpy.prototype.refresh = function () {
    var that          = this
    var offsetMethod  = 'offset'
    var offsetBase    = 0

    this.offsets      = []
    this.targets      = []
    this.scrollHeight = this.getScrollHeight()

    if (!$.isWindow(this.$scrollElement[0])) {
      offsetMethod = 'position'
      offsetBase   = this.$scrollElement.scrollTop()
    }

    this.$body
      .find(this.selector)
      .map(function () {
        var $el   = $(this)
        var href  = $el.data('target') || $el.attr('href')
        var $href = /^#./.test(href) && $(href)

        return ($href
          && $href.length
          && $href.is(':visible')
          && [[$href[offsetMethod]().top + offsetBase, href]]) || null
      })
      .sort(function (a, b) { return a[0] - b[0] })
      .each(function () {
        that.offsets.push(this[0])
        that.targets.push(this[1])
      })
  }

  ScrollSpy.prototype.process = function () {
    var scrollTop    = this.$scrollElement.scrollTop() + this.options.offset
    var scrollHeight = this.getScrollHeight()
    var maxScroll    = this.options.offset + scrollHeight - this.$scrollElement.height()
    var offsets      = this.offsets
    var targets      = this.targets
    var activeTarget = this.activeTarget
    var i

    if (this.scrollHeight != scrollHeight) {
      this.refresh()
    }

    if (scrollTop >= maxScroll) {
      return activeTarget != (i = targets[targets.length - 1]) && this.activate(i)
    }

    if (activeTarget && scrollTop < offsets[0]) {
      this.activeTarget = null
      return this.clear()
    }

    for (i = offsets.length; i--;) {
      activeTarget != targets[i]
        && scrollTop >= offsets[i]
        && (offsets[i + 1] === undefined || scrollTop < offsets[i + 1])
        && this.activate(targets[i])
    }
  }

  ScrollSpy.prototype.activate = function (target) {
    this.activeTarget = target

    this.clear()

    var selector = this.selector +
      '[data-target="' + target + '"],' +
      this.selector + '[href="' + target + '"]'

    var active = $(selector)
      .parents('li')
      .addClass('active')

    if (active.parent('.dropdown-menu').length) {
      active = active
        .closest('li.dropdown')
        .addClass('active')
    }

    active.trigger('activate.bs.scrollspy')
  }

  ScrollSpy.prototype.clear = function () {
    $(this.selector)
      .parentsUntil(this.options.target, '.active')
      .removeClass('active')
  }


  // SCROLLSPY PLUGIN DEFINITION
  // ===========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.scrollspy')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.scrollspy', (data = new ScrollSpy(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.scrollspy

  $.fn.scrollspy             = Plugin
  $.fn.scrollspy.Constructor = ScrollSpy


  // SCROLLSPY NO CONFLICT
  // =====================

  $.fn.scrollspy.noConflict = function () {
    $.fn.scrollspy = old
    return this
  }


  // SCROLLSPY DATA-API
  // ==================

  $(window).on('load.bs.scrollspy.data-api', function () {
    $('[data-spy="scroll"]').each(function () {
      var $spy = $(this)
      Plugin.call($spy, $spy.data())
    })
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: tab.js v3.3.7
 * http://getbootstrap.com/javascript/#tabs
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // TAB CLASS DEFINITION
  // ====================

  var Tab = function (element) {
    // jscs:disable requireDollarBeforejQueryAssignment
    this.element = $(element)
    // jscs:enable requireDollarBeforejQueryAssignment
  }

  Tab.VERSION = '3.3.7'

  Tab.TRANSITION_DURATION = 150

  Tab.prototype.show = function () {
    var $this    = this.element
    var $ul      = $this.closest('ul:not(.dropdown-menu)')
    var selector = $this.data('target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    if ($this.parent('li').hasClass('active')) return

    var $previous = $ul.find('.active:last a')
    var hideEvent = $.Event('hide.bs.tab', {
      relatedTarget: $this[0]
    })
    var showEvent = $.Event('show.bs.tab', {
      relatedTarget: $previous[0]
    })

    $previous.trigger(hideEvent)
    $this.trigger(showEvent)

    if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) return

    var $target = $(selector)

    this.activate($this.closest('li'), $ul)
    this.activate($target, $target.parent(), function () {
      $previous.trigger({
        type: 'hidden.bs.tab',
        relatedTarget: $this[0]
      })
      $this.trigger({
        type: 'shown.bs.tab',
        relatedTarget: $previous[0]
      })
    })
  }

  Tab.prototype.activate = function (element, container, callback) {
    var $active    = container.find('> .active')
    var transition = callback
      && $.support.transition
      && ($active.length && $active.hasClass('fade') || !!container.find('> .fade').length)

    function next() {
      $active
        .removeClass('active')
        .find('> .dropdown-menu > .active')
          .removeClass('active')
        .end()
        .find('[data-toggle="tab"]')
          .attr('aria-expanded', false)

      element
        .addClass('active')
        .find('[data-toggle="tab"]')
          .attr('aria-expanded', true)

      if (transition) {
        element[0].offsetWidth // reflow for transition
        element.addClass('in')
      } else {
        element.removeClass('fade')
      }

      if (element.parent('.dropdown-menu').length) {
        element
          .closest('li.dropdown')
            .addClass('active')
          .end()
          .find('[data-toggle="tab"]')
            .attr('aria-expanded', true)
      }

      callback && callback()
    }

    $active.length && transition ?
      $active
        .one('bsTransitionEnd', next)
        .emulateTransitionEnd(Tab.TRANSITION_DURATION) :
      next()

    $active.removeClass('in')
  }


  // TAB PLUGIN DEFINITION
  // =====================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.tab')

      if (!data) $this.data('bs.tab', (data = new Tab(this)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.tab

  $.fn.tab             = Plugin
  $.fn.tab.Constructor = Tab


  // TAB NO CONFLICT
  // ===============

  $.fn.tab.noConflict = function () {
    $.fn.tab = old
    return this
  }


  // TAB DATA-API
  // ============

  var clickHandler = function (e) {
    e.preventDefault()
    Plugin.call($(this), 'show')
  }

  $(document)
    .on('click.bs.tab.data-api', '[data-toggle="tab"]', clickHandler)
    .on('click.bs.tab.data-api', '[data-toggle="pill"]', clickHandler)

}(jQuery);

/* ========================================================================
 * Bootstrap: affix.js v3.3.7
 * http://getbootstrap.com/javascript/#affix
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // AFFIX CLASS DEFINITION
  // ======================

  var Affix = function (element, options) {
    this.options = $.extend({}, Affix.DEFAULTS, options)

    this.$target = $(this.options.target)
      .on('scroll.bs.affix.data-api', $.proxy(this.checkPosition, this))
      .on('click.bs.affix.data-api',  $.proxy(this.checkPositionWithEventLoop, this))

    this.$element     = $(element)
    this.affixed      = null
    this.unpin        = null
    this.pinnedOffset = null

    this.checkPosition()
  }

  Affix.VERSION  = '3.3.7'

  Affix.RESET    = 'affix affix-top affix-bottom'

  Affix.DEFAULTS = {
    offset: 0,
    target: window
  }

  Affix.prototype.getState = function (scrollHeight, height, offsetTop, offsetBottom) {
    var scrollTop    = this.$target.scrollTop()
    var position     = this.$element.offset()
    var targetHeight = this.$target.height()

    if (offsetTop != null && this.affixed == 'top') return scrollTop < offsetTop ? 'top' : false

    if (this.affixed == 'bottom') {
      if (offsetTop != null) return (scrollTop + this.unpin <= position.top) ? false : 'bottom'
      return (scrollTop + targetHeight <= scrollHeight - offsetBottom) ? false : 'bottom'
    }

    var initializing   = this.affixed == null
    var colliderTop    = initializing ? scrollTop : position.top
    var colliderHeight = initializing ? targetHeight : height

    if (offsetTop != null && scrollTop <= offsetTop) return 'top'
    if (offsetBottom != null && (colliderTop + colliderHeight >= scrollHeight - offsetBottom)) return 'bottom'

    return false
  }

  Affix.prototype.getPinnedOffset = function () {
    if (this.pinnedOffset) return this.pinnedOffset
    this.$element.removeClass(Affix.RESET).addClass('affix')
    var scrollTop = this.$target.scrollTop()
    var position  = this.$element.offset()
    return (this.pinnedOffset = position.top - scrollTop)
  }

  Affix.prototype.checkPositionWithEventLoop = function () {
    setTimeout($.proxy(this.checkPosition, this), 1)
  }

  Affix.prototype.checkPosition = function () {
    if (!this.$element.is(':visible')) return

    var height       = this.$element.height()
    var offset       = this.options.offset
    var offsetTop    = offset.top
    var offsetBottom = offset.bottom
    var scrollHeight = Math.max($(document).height(), $(document.body).height())

    if (typeof offset != 'object')         offsetBottom = offsetTop = offset
    if (typeof offsetTop == 'function')    offsetTop    = offset.top(this.$element)
    if (typeof offsetBottom == 'function') offsetBottom = offset.bottom(this.$element)

    var affix = this.getState(scrollHeight, height, offsetTop, offsetBottom)

    if (this.affixed != affix) {
      if (this.unpin != null) this.$element.css('top', '')

      var affixType = 'affix' + (affix ? '-' + affix : '')
      var e         = $.Event(affixType + '.bs.affix')

      this.$element.trigger(e)

      if (e.isDefaultPrevented()) return

      this.affixed = affix
      this.unpin = affix == 'bottom' ? this.getPinnedOffset() : null

      this.$element
        .removeClass(Affix.RESET)
        .addClass(affixType)
        .trigger(affixType.replace('affix', 'affixed') + '.bs.affix')
    }

    if (affix == 'bottom') {
      this.$element.offset({
        top: scrollHeight - height - offsetBottom
      })
    }
  }


  // AFFIX PLUGIN DEFINITION
  // =======================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.affix')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.affix', (data = new Affix(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.affix

  $.fn.affix             = Plugin
  $.fn.affix.Constructor = Affix


  // AFFIX NO CONFLICT
  // =================

  $.fn.affix.noConflict = function () {
    $.fn.affix = old
    return this
  }


  // AFFIX DATA-API
  // ==============

  $(window).on('load', function () {
    $('[data-spy="affix"]').each(function () {
      var $spy = $(this)
      var data = $spy.data()

      data.offset = data.offset || {}

      if (data.offsetBottom != null) data.offset.bottom = data.offsetBottom
      if (data.offsetTop    != null) data.offset.top    = data.offsetTop

      Plugin.call($spy, data)
    })
  })

}(jQuery);

;/*!
 * Bootstrap-select v1.13.1 (https://developer.snapappointments.com/bootstrap-select)
 *
 * Copyright 2012-2018 SnapAppointments, LLC
 * Licensed under MIT (https://github.com/snapappointments/bootstrap-select/blob/master/LICENSE)
 */
!function(a,b){"function"==typeof define&&define.amd?define(["jquery"],function(a){return b(a)}):"object"==typeof module&&module.exports?module.exports=b(require("jquery")):b(a.jQuery)}(this,function(a){!function(a){"use strict";function b(a,b){return a.length===b.length&&a.every(function(a,c){return a===b[c]})}function c(a){var b,c=[],d=a&&a.options;if(a.multiple)for(var e=0,f=d.length;e<f;e++)b=d[e],b.selected&&c.push(b.value||b.text);else c=a.value;return c}function d(a,b,c,d){for(var e=["content","subtext","tokens"],g=!1,h=0;h<e.length;h++){var i=e[h],j=a[i];if(j&&(j=j.toString(),"content"===i&&(j=j.replace(/<[^>]+>/g,"")),d&&(j=f(j)),j=j.toUpperCase(),g="contains"===c?j.indexOf(b)>=0:j.startsWith(b)))break}return g}function e(a){return parseInt(a,10)||0}function f(b){var c=[{re:/[\xC0-\xC6]/g,ch:"A"},{re:/[\xE0-\xE6]/g,ch:"a"},{re:/[\xC8-\xCB]/g,ch:"E"},{re:/[\xE8-\xEB]/g,ch:"e"},{re:/[\xCC-\xCF]/g,ch:"I"},{re:/[\xEC-\xEF]/g,ch:"i"},{re:/[\xD2-\xD6]/g,ch:"O"},{re:/[\xF2-\xF6]/g,ch:"o"},{re:/[\xD9-\xDC]/g,ch:"U"},{re:/[\xF9-\xFC]/g,ch:"u"},{re:/[\xC7-\xE7]/g,ch:"c"},{re:/[\xD1]/g,ch:"N"},{re:/[\xF1]/g,ch:"n"}];return a.each(c,function(){b=b?b.replace(this.re,this.ch):""}),b}function g(b){var c=arguments,d=b;[].shift.apply(c);var e,f=this.each(function(){var b=a(this);if(b.is("select")){var f=b.data("selectpicker"),g="object"==typeof d&&d;if(f){if(g)for(var h in g)g.hasOwnProperty(h)&&(f.options[h]=g[h])}else{var i=a.extend({},x.DEFAULTS,a.fn.selectpicker.defaults||{},b.data(),g);i.template=a.extend({},x.DEFAULTS.template,a.fn.selectpicker.defaults?a.fn.selectpicker.defaults.template:{},b.data().template,g.template),b.data("selectpicker",f=new x(this,i))}"string"==typeof d&&(e=f[d]instanceof Function?f[d].apply(f,c):f.options[d])}});return void 0!==e?e:f}var h=document.createElement("_");if(h.classList.toggle("c3",!1),h.classList.contains("c3")){var i=DOMTokenList.prototype.toggle;DOMTokenList.prototype.toggle=function(a,b){return 1 in arguments&&!this.contains(a)==!b?b:i.call(this,a)}}String.prototype.startsWith||function(){var a=function(){try{var a={},b=Object.defineProperty,c=b(a,a,a)&&b}catch(a){}return c}(),b={}.toString,c=function(a){if(null==this)throw new TypeError;var c=String(this);if(a&&"[object RegExp]"==b.call(a))throw new TypeError;var d=c.length,e=String(a),f=e.length,g=arguments.length>1?arguments[1]:void 0,h=g?Number(g):0;h!=h&&(h=0);var i=Math.min(Math.max(h,0),d);if(f+i>d)return!1;for(var j=-1;++j<f;)if(c.charCodeAt(i+j)!=e.charCodeAt(j))return!1;return!0};a?a(String.prototype,"startsWith",{value:c,configurable:!0,writable:!0}):String.prototype.startsWith=c}(),Object.keys||(Object.keys=function(a,b,c){c=[];for(b in a)c.hasOwnProperty.call(a,b)&&c.push(b);return c});var j={useDefault:!1,_set:a.valHooks.select.set};a.valHooks.select.set=function(b,c){return c&&!j.useDefault&&a(b).data("selected",!0),j._set.apply(this,arguments)};var k=null,l=function(){try{return new Event("change"),!0}catch(a){return!1}}();a.fn.triggerNative=function(a){var b,c=this[0];c.dispatchEvent?(l?b=new Event(a,{bubbles:!0}):(b=document.createEvent("Event"),b.initEvent(a,!0,!1)),c.dispatchEvent(b)):c.fireEvent?(b=document.createEventObject(),b.eventType=a,c.fireEvent("on"+a,b)):this.trigger(a)};var m={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},n={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#x27;":"'","&#x60;":"`"},o=function(a){var b=function(b){return a[b]},c="(?:"+Object.keys(a).join("|")+")",d=RegExp(c),e=RegExp(c,"g");return function(a){return a=null==a?"":""+a,d.test(a)?a.replace(e,b):a}},p=o(m),q=o(n),r={32:" ",48:"0",49:"1",50:"2",51:"3",52:"4",53:"5",54:"6",55:"7",56:"8",57:"9",59:";",65:"A",66:"B",67:"C",68:"D",69:"E",70:"F",71:"G",72:"H",73:"I",74:"J",75:"K",76:"L",77:"M",78:"N",79:"O",80:"P",81:"Q",82:"R",83:"S",84:"T",85:"U",86:"V",87:"W",88:"X",89:"Y",90:"Z",96:"0",97:"1",98:"2",99:"3",100:"4",101:"5",102:"6",103:"7",104:"8",105:"9"},s={ESCAPE:27,ENTER:13,SPACE:32,TAB:9,ARROW_UP:38,ARROW_DOWN:40},t={};try{t.full=(a.fn.dropdown.Constructor.VERSION||"").split(" ")[0].split("."),t.major=t.full[0]}catch(a){console.error("There was an issue retrieving Bootstrap's version. Ensure Bootstrap is being loaded before bootstrap-select and there is no namespace collision.",a),t.major="3"}var u={DISABLED:"disabled",DIVIDER:"4"===t.major?"dropdown-divider":"divider",SHOW:"4"===t.major?"show":"open",DROPUP:"dropup",MENURIGHT:"dropdown-menu-right",MENULEFT:"dropdown-menu-left",BUTTONCLASS:"4"===t.major?"btn-light":"btn-default",POPOVERHEADER:"4"===t.major?"popover-header":"popover-title"},v=new RegExp(s.ARROW_UP+"|"+s.ARROW_DOWN),w=new RegExp("^"+s.TAB+"$|"+s.ESCAPE),x=(new RegExp(s.ENTER+"|"+s.SPACE),function(b,c){var d=this;j.useDefault||(a.valHooks.select.set=j._set,j.useDefault=!0),this.$element=a(b),this.$newElement=null,this.$button=null,this.$menu=null,this.options=c,this.selectpicker={main:{map:{newIndex:{},originalIndex:{}}},current:{map:{}},search:{map:{}},view:{},keydown:{keyHistory:"",resetKeyHistory:{start:function(){return setTimeout(function(){d.selectpicker.keydown.keyHistory=""},800)}}}},null===this.options.title&&(this.options.title=this.$element.attr("title"));var e=this.options.windowPadding;"number"==typeof e&&(this.options.windowPadding=[e,e,e,e]),this.val=x.prototype.val,this.render=x.prototype.render,this.refresh=x.prototype.refresh,this.setStyle=x.prototype.setStyle,this.selectAll=x.prototype.selectAll,this.deselectAll=x.prototype.deselectAll,this.destroy=x.prototype.destroy,this.remove=x.prototype.remove,this.show=x.prototype.show,this.hide=x.prototype.hide,this.init()});x.VERSION="1.13.1",x.DEFAULTS={noneSelectedText:"Nothing selected",noneResultsText:"No results matched {0}",countSelectedText:function(a,b){return 1==a?"{0} item selected":"{0} items selected"},maxOptionsText:function(a,b){return[1==a?"Limit reached ({n} item max)":"Limit reached ({n} items max)",1==b?"Group limit reached ({n} item max)":"Group limit reached ({n} items max)"]},selectAllText:"Select All",deselectAllText:"Deselect All",doneButton:!1,doneButtonText:"Close",multipleSeparator:", ",styleBase:"btn",style:"btn-default",size:"auto",title:null,selectedTextFormat:"values",width:!1,container:!1,hideDisabled:!1,showSubtext:!1,showIcon:!0,showContent:!0,dropupAuto:!0,header:!1,liveSearch:!1,liveSearchPlaceholder:null,liveSearchNormalize:!1,liveSearchStyle:"contains",actionsBox:!1,iconBase:"glyphicon",tickIcon:"glyphicon-ok",showTick:!1,template:{caret:'<span class="caret"></span>'},maxOptions:!1,mobile:!1,selectOnTab:!1,dropdownAlignRight:!1,windowPadding:0,virtualScroll:600},"4"===t.major&&(x.DEFAULTS.style="btn-light",x.DEFAULTS.iconBase="",x.DEFAULTS.tickIcon="bs-ok-default"),x.prototype={constructor:x,init:function(){var a=this,b=this.$element.attr("id");this.$element.addClass("bs-select-hidden"),this.multiple=this.$element.prop("multiple"),this.autofocus=this.$element.prop("autofocus"),this.$newElement=this.createDropdown(),this.createLi(),this.$element.after(this.$newElement).prependTo(this.$newElement),this.$button=this.$newElement.children("button"),this.$menu=this.$newElement.children(".dropdown-menu"),this.$menuInner=this.$menu.children(".inner"),this.$searchbox=this.$menu.find("input"),this.$element.removeClass("bs-select-hidden"),!0===this.options.dropdownAlignRight&&this.$menu.addClass(u.MENURIGHT),void 0!==b&&this.$button.attr("data-id",b),this.checkDisabled(),this.clickListener(),this.options.liveSearch&&this.liveSearchListener(),this.render(),this.setStyle(),this.setWidth(),this.options.container?this.selectPosition():this.$element.on("hide.bs.select",function(){if(a.isVirtual()){var b=a.$menuInner[0],c=b.firstChild.cloneNode(!1);b.replaceChild(c,b.firstChild),b.scrollTop=0}}),this.$menu.data("this",this),this.$newElement.data("this",this),this.options.mobile&&this.mobile(),this.$newElement.on({"hide.bs.dropdown":function(b){a.$menuInner.attr("aria-expanded",!1),a.$element.trigger("hide.bs.select",b)},"hidden.bs.dropdown":function(b){a.$element.trigger("hidden.bs.select",b)},"show.bs.dropdown":function(b){a.$menuInner.attr("aria-expanded",!0),a.$element.trigger("show.bs.select",b)},"shown.bs.dropdown":function(b){a.$element.trigger("shown.bs.select",b)}}),a.$element[0].hasAttribute("required")&&this.$element.on("invalid",function(){a.$button.addClass("bs-invalid"),a.$element.on({"shown.bs.select":function(){a.$element.val(a.$element.val()).off("shown.bs.select")},"rendered.bs.select":function(){this.validity.valid&&a.$button.removeClass("bs-invalid"),a.$element.off("rendered.bs.select")}}),a.$button.on("blur.bs.select",function(){a.$element.focus().blur(),a.$button.off("blur.bs.select")})}),setTimeout(function(){a.$element.trigger("loaded.bs.select")})},createDropdown:function(){var b=this.multiple||this.options.showTick?" show-tick":"",c=this.autofocus?" autofocus":"",d=this.options.header?'<div class="'+u.POPOVERHEADER+'"><button type="button" class="close" aria-hidden="true">&times;</button>'+this.options.header+"</div>":"",e=this.options.liveSearch?'<div class="bs-searchbox"><input type="text" class="form-control" autocomplete="off"'+(null===this.options.liveSearchPlaceholder?"":' placeholder="'+p(this.options.liveSearchPlaceholder)+'"')+' role="textbox" aria-label="Search"></div>':"",f=this.multiple&&this.options.actionsBox?'<div class="bs-actionsbox"><div class="btn-group btn-group-sm btn-block"><button type="button" class="actions-btn bs-select-all btn '+u.BUTTONCLASS+'">'+this.options.selectAllText+'</button><button type="button" class="actions-btn bs-deselect-all btn '+u.BUTTONCLASS+'">'+this.options.deselectAllText+"</button></div></div>":"",g=this.multiple&&this.options.doneButton?'<div class="bs-donebutton"><div class="btn-group btn-block"><button type="button" class="btn btn-sm '+u.BUTTONCLASS+'">'+this.options.doneButtonText+"</button></div></div>":"",h='<div class="dropdown bootstrap-select'+b+'"><button type="button" class="'+this.options.styleBase+' dropdown-toggle" data-toggle="dropdown"'+c+' role="button"><div class="filter-option"><div class="filter-option-inner"><div class="filter-option-inner-inner"></div></div> </div>'+("4"===t.major?"":'<span class="bs-caret">'+this.options.template.caret+"</span>")+'</button><div class="dropdown-menu '+("4"===t.major?"":u.SHOW)+'" role="combobox">'+d+e+f+'<div class="inner '+u.SHOW+'" role="listbox" aria-expanded="false" tabindex="-1"><ul class="dropdown-menu inner '+("4"===t.major?u.SHOW:"")+'"></ul></div>'+g+"</div></div>";return a(h)},setPositionData:function(){this.selectpicker.view.canHighlight=[];for(var a=0;a<this.selectpicker.current.data.length;a++){var b=this.selectpicker.current.data[a],c=!0;"divider"===b.type?(c=!1,b.height=this.sizeInfo.dividerHeight):"optgroup-label"===b.type?(c=!1,b.height=this.sizeInfo.dropdownHeaderHeight):b.height=this.sizeInfo.liHeight,b.disabled&&(c=!1),this.selectpicker.view.canHighlight.push(c),b.position=(0===a?0:this.selectpicker.current.data[a-1].position)+b.height}},isVirtual:function(){return!1!==this.options.virtualScroll&&this.selectpicker.main.elements.length>=this.options.virtualScroll||!0===this.options.virtualScroll},createView:function(c,d){function e(a,d){var e,j,k,l,m,n,o,p=f.selectpicker.current.elements.length,q=[],r=void 0,s=!0,t=f.isVirtual();f.selectpicker.view.scrollTop=a,!0===t&&f.sizeInfo.hasScrollBar&&f.$menu[0].offsetWidth>f.sizeInfo.totalMenuWidth&&(f.sizeInfo.menuWidth=f.$menu[0].offsetWidth,f.sizeInfo.totalMenuWidth=f.sizeInfo.menuWidth+f.sizeInfo.scrollBarWidth,f.$menu.css("min-width",f.sizeInfo.menuWidth)),e=Math.ceil(f.sizeInfo.menuInnerHeight/f.sizeInfo.liHeight*1.5),j=Math.round(p/e)||1;for(var u=0;u<j;u++){var v=(u+1)*e;if(u===j-1&&(v=p),q[u]=[u*e+(u?1:0),v],!p)break;void 0===r&&a<=f.selectpicker.current.data[v-1].position-f.sizeInfo.menuInnerHeight&&(r=u)}if(void 0===r&&(r=0),m=[f.selectpicker.view.position0,f.selectpicker.view.position1],k=Math.max(0,r-1),l=Math.min(j-1,r+1),f.selectpicker.view.position0=Math.max(0,q[k][0])||0,f.selectpicker.view.position1=Math.min(p,q[l][1])||0,n=m[0]!==f.selectpicker.view.position0||m[1]!==f.selectpicker.view.position1,void 0!==f.activeIndex&&(h=f.selectpicker.current.elements[f.selectpicker.current.map.newIndex[f.prevActiveIndex]],i=f.selectpicker.current.elements[f.selectpicker.current.map.newIndex[f.activeIndex]],g=f.selectpicker.current.elements[f.selectpicker.current.map.newIndex[f.selectedIndex]],d&&(f.activeIndex!==f.selectedIndex&&(i.classList.remove("active"),i.firstChild&&i.firstChild.classList.remove("active")),f.activeIndex=void 0),f.activeIndex&&f.activeIndex!==f.selectedIndex&&g&&g.length&&(g.classList.remove("active"),g.firstChild&&g.firstChild.classList.remove("active"))),void 0!==f.prevActiveIndex&&f.prevActiveIndex!==f.activeIndex&&f.prevActiveIndex!==f.selectedIndex&&h&&h.length&&(h.classList.remove("active"),h.firstChild&&h.firstChild.classList.remove("active")),(d||n)&&(o=f.selectpicker.view.visibleElements?f.selectpicker.view.visibleElements.slice():[],f.selectpicker.view.visibleElements=f.selectpicker.current.elements.slice(f.selectpicker.view.position0,f.selectpicker.view.position1),f.setOptionStatus(),(c||!1===t&&d)&&(s=!b(o,f.selectpicker.view.visibleElements)),(d||!0===t)&&s)){var w,x,y=f.$menuInner[0],z=document.createDocumentFragment(),A=y.firstChild.cloneNode(!1),B=!0===t?f.selectpicker.view.visibleElements:f.selectpicker.current.elements;y.replaceChild(A,y.firstChild);for(var u=0,C=B.length;u<C;u++)z.appendChild(B[u]);!0===t&&(w=0===f.selectpicker.view.position0?0:f.selectpicker.current.data[f.selectpicker.view.position0-1].position,x=f.selectpicker.view.position1>p-1?0:f.selectpicker.current.data[p-1].position-f.selectpicker.current.data[f.selectpicker.view.position1-1].position,y.firstChild.style.marginTop=w+"px",y.firstChild.style.marginBottom=x+"px"),y.firstChild.appendChild(z)}if(f.prevActiveIndex=f.activeIndex,f.options.liveSearch){if(c&&d){var D,E=0;f.selectpicker.view.canHighlight[E]||(E=1+f.selectpicker.view.canHighlight.slice(1).indexOf(!0)),D=f.selectpicker.view.visibleElements[E],f.selectpicker.view.currentActive&&(f.selectpicker.view.currentActive.classList.remove("active"),f.selectpicker.view.currentActive.firstChild&&f.selectpicker.view.currentActive.firstChild.classList.remove("active")),D&&(D.classList.add("active"),D.firstChild&&D.firstChild.classList.add("active")),f.activeIndex=f.selectpicker.current.map.originalIndex[E]}}else f.$menuInner.focus()}d=d||0;var f=this;this.selectpicker.current=c?this.selectpicker.search:this.selectpicker.main;var g,h,i=[];this.setPositionData(),e(d,!0),this.$menuInner.off("scroll.createView").on("scroll.createView",function(a,b){f.noScroll||e(this.scrollTop,b),f.noScroll=!1}),a(window).off("resize.createView").on("resize.createView",function(){e(f.$menuInner[0].scrollTop)})},createLi:function(){var b,c=this,d=[],e=0,f=0,g=[],h=0,i=0,j=-1;this.selectpicker.view.titleOption||(this.selectpicker.view.titleOption=document.createElement("option"));var k={span:document.createElement("span"),subtext:document.createElement("small"),a:document.createElement("a"),li:document.createElement("li"),whitespace:document.createTextNode(" ")},l=k.span.cloneNode(!1),m=document.createDocumentFragment();l.className=c.options.iconBase+" "+c.options.tickIcon+" check-mark",k.a.appendChild(l),k.a.setAttribute("role","option"),k.subtext.className="text-muted",k.text=k.span.cloneNode(!1),k.text.className="text";var n=function(a,b,c,d){var e=k.li.cloneNode(!1);return a&&(1===a.nodeType||11===a.nodeType?e.appendChild(a):e.innerHTML=a),void 0!==c&&""!==c&&(e.className=c),void 0!==d&&null!==d&&e.classList.add("optgroup-"+d),e},o=function(a,b,c){var d=k.a.cloneNode(!0);return a&&(11===a.nodeType?d.appendChild(a):d.insertAdjacentHTML("beforeend",a)),void 0!==b&""!==b&&(d.className=b),"4"===t.major&&d.classList.add("dropdown-item"),c&&d.setAttribute("style",c),d},q=function(a){var b,d,e=k.text.cloneNode(!1);if(a.optionContent)e.innerHTML=a.optionContent;else{if(e.textContent=a.text,a.optionIcon){var f=k.whitespace.cloneNode(!1);d=k.span.cloneNode(!1),d.className=c.options.iconBase+" "+a.optionIcon,m.appendChild(d),m.appendChild(f)}a.optionSubtext&&(b=k.subtext.cloneNode(!1),b.innerHTML=a.optionSubtext,e.appendChild(b))}return m.appendChild(e),m},r=function(a){var b,d,e=k.text.cloneNode(!1);if(e.textContent=a.labelEscaped,a.labelIcon){var f=k.whitespace.cloneNode(!1);d=k.span.cloneNode(!1),d.className=c.options.iconBase+" "+a.labelIcon,m.appendChild(d),m.appendChild(f)}return a.labelSubtext&&(b=k.subtext.cloneNode(!1),b.textContent=a.labelSubtext,e.appendChild(b)),m.appendChild(e),m};if(this.options.title&&!this.multiple){j--;var s=this.$element[0],v=!1,w=!this.selectpicker.view.titleOption.parentNode;if(w){this.selectpicker.view.titleOption.className="bs-title-option",this.selectpicker.view.titleOption.value="";v=void 0===a(s.options[s.selectedIndex]).attr("selected")&&void 0===this.$element.data("selected")}(w||0!==this.selectpicker.view.titleOption.index)&&s.insertBefore(this.selectpicker.view.titleOption,s.firstChild),v&&(s.selectedIndex=0)}var x=this.$element.find("option");x.each(function(k){var l=a(this);if(j++,!l.hasClass("bs-title-option")){var m,s,t=l.data(),v=this.className||"",w=p(this.style.cssText),y=t.content,z=this.textContent,A=t.tokens,B=t.subtext,C=t.icon,D=l.parent(),E=D[0],F="OPTGROUP"===E.tagName,G=F&&E.disabled,H=this.disabled||G,I=this.previousElementSibling&&"OPTGROUP"===this.previousElementSibling.tagName,J=D.data();if(!0===t.hidden||c.options.hideDisabled&&(H&&!F||G)){if(m=t.prevHiddenIndex,l.next().data("prevHiddenIndex",void 0!==m?m:k),j--,!I&&void 0!==m){var K=x[m].previousElementSibling;K&&"OPTGROUP"===K.tagName&&!K.disabled&&(I=!0)}return void(I&&"divider"!==g[g.length-1].type&&(j++,d.push(n(!1,0,u.DIVIDER,h+"div")),g.push({type:"divider",optID:h,originalIndex:k})))}if(F&&!0!==t.divider){if(c.options.hideDisabled&&H){if(void 0===J.allOptionsDisabled){var L=D.children();D.data("allOptionsDisabled",L.filter(":disabled").length===L.length)}if(D.data("allOptionsDisabled"))return void j--}var M=" "+E.className||"";if(!this.previousElementSibling){h+=1;var N=E.label,O=p(N),P=J.subtext,Q=J.icon;0!==k&&d.length>0&&(j++,d.push(n(!1,0,u.DIVIDER,h+"div")),g.push({type:"divider",optID:h,originalIndex:k})),j++;var R=r({labelEscaped:O,labelSubtext:P,labelIcon:Q});d.push(n(R,0,"dropdown-header"+M,h)),g.push({content:O,subtext:P,type:"optgroup-label",optID:h,originalIndex:k}),i=j-1}if(c.options.hideDisabled&&H||!0===t.hidden)return void j--;s=q({text:z,optionContent:y,optionSubtext:B,optionIcon:C}),d.push(n(o(s,"opt "+v+M,w),0,"",h)),g.push({content:y||z,subtext:B,tokens:A,type:"option",optID:h,headerIndex:i,lastIndex:i+E.childElementCount,originalIndex:k,data:t}),e++}else if(!0===t.divider)d.push(n(!1,0,"divider")),g.push({type:"divider",originalIndex:k});else{if(!I&&c.options.hideDisabled&&void 0!==(m=t.prevHiddenIndex)){var K=x[m].previousElementSibling;K&&"OPTGROUP"===K.tagName&&!K.disabled&&(I=!0)}I&&"divider"!==g[g.length-1].type&&(j++,d.push(n(!1,0,u.DIVIDER,h+"div")),g.push({type:"divider",optID:h,originalIndex:k})),s=q({text:z,optionContent:y,optionSubtext:B,optionIcon:C}),d.push(n(o(s,v,w))),g.push({content:y||z,subtext:B,tokens:A,type:"option",originalIndex:k,data:t}),e++}c.selectpicker.main.map.newIndex[k]=j,c.selectpicker.main.map.originalIndex[j]=k;var S=g[g.length-1];S.disabled=H;var T=0;S.content&&(T+=S.content.length),S.subtext&&(T+=S.subtext.length),C&&(T+=1),T>f&&(f=T,b=d[d.length-1])}}),this.selectpicker.main.elements=d,this.selectpicker.main.data=g,this.selectpicker.current=this.selectpicker.main,this.selectpicker.view.widestOption=b,this.selectpicker.view.availableOptionsCount=e},findLis:function(){return this.$menuInner.find(".inner > li")},render:function(){var a=this,b=this.$element.find("option"),c=[],d=[];this.togglePlaceholder(),this.tabIndex();for(var e=0,f=this.selectpicker.main.elements.length;e<f;e++){var g=this.selectpicker.main.map.originalIndex[e],h=b[g];if(h&&h.selected&&(c.push(h),d.length<100&&"count"!==a.options.selectedTextFormat||1===c.length)){if(a.options.hideDisabled&&(h.disabled||"OPTGROUP"===h.parentNode.tagName&&h.parentNode.disabled))return;var i,j,k=this.selectpicker.main.data[e].data,l=k.icon&&a.options.showIcon?'<i class="'+a.options.iconBase+" "+k.icon+'"></i> ':"";i=a.options.showSubtext&&k.subtext&&!a.multiple?' <small class="text-muted">'+k.subtext+"</small>":"",j=h.title?h.title:k.content&&a.options.showContent?k.content.toString():l+h.innerHTML.trim()+i,d.push(j)}}var m=this.multiple?d.join(this.options.multipleSeparator):d[0];if(c.length>50&&(m+="..."),this.multiple&&-1!==this.options.selectedTextFormat.indexOf("count")){var n=this.options.selectedTextFormat.split(">");if(n.length>1&&c.length>n[1]||1===n.length&&c.length>=2){var o=this.selectpicker.view.availableOptionsCount;m=("function"==typeof this.options.countSelectedText?this.options.countSelectedText(c.length,o):this.options.countSelectedText).replace("{0}",c.length.toString()).replace("{1}",o.toString())}}void 0==this.options.title&&(this.options.title=this.$element.attr("title")),"static"==this.options.selectedTextFormat&&(m=this.options.title),m||(m=void 0!==this.options.title?this.options.title:this.options.noneSelectedText),this.$button[0].title=q(m.replace(/<[^>]*>?/g,"").trim()),this.$button.find(".filter-option-inner-inner")[0].innerHTML=m,this.$element.trigger("rendered.bs.select")},setStyle:function(a,b){this.$element.attr("class")&&this.$newElement.addClass(this.$element.attr("class").replace(/selectpicker|mobile-device|bs-select-hidden|validate\[.*\]/gi,""));var c=a||this.options.style;"add"==b?this.$button.addClass(c):"remove"==b?this.$button.removeClass(c):(this.$button.removeClass(this.options.style),this.$button.addClass(c))},liHeight:function(b){if(b||!1!==this.options.size&&!this.sizeInfo){this.sizeInfo||(this.sizeInfo={});var c=document.createElement("div"),d=document.createElement("div"),f=document.createElement("div"),g=document.createElement("ul"),h=document.createElement("li"),i=document.createElement("li"),j=document.createElement("li"),k=document.createElement("a"),l=document.createElement("span"),m=this.options.header&&this.$menu.find("."+u.POPOVERHEADER).length>0?this.$menu.find("."+u.POPOVERHEADER)[0].cloneNode(!0):null,n=this.options.liveSearch?document.createElement("div"):null,o=this.options.actionsBox&&this.multiple&&this.$menu.find(".bs-actionsbox").length>0?this.$menu.find(".bs-actionsbox")[0].cloneNode(!0):null,p=this.options.doneButton&&this.multiple&&this.$menu.find(".bs-donebutton").length>0?this.$menu.find(".bs-donebutton")[0].cloneNode(!0):null;if(this.sizeInfo.selectWidth=this.$newElement[0].offsetWidth,l.className="text",k.className="dropdown-item",c.className=this.$menu[0].parentNode.className+" "+u.SHOW,c.style.width=this.sizeInfo.selectWidth+"px",d.className="dropdown-menu "+u.SHOW,f.className="inner "+u.SHOW,g.className="dropdown-menu inner "+("4"===t.major?u.SHOW:""),h.className=u.DIVIDER,i.className="dropdown-header",l.appendChild(document.createTextNode("Inner text")),k.appendChild(l),j.appendChild(k),i.appendChild(l.cloneNode(!0)),this.selectpicker.view.widestOption&&g.appendChild(this.selectpicker.view.widestOption.cloneNode(!0)),g.appendChild(j),g.appendChild(h),g.appendChild(i),m&&d.appendChild(m),n){var q=document.createElement("input");n.className="bs-searchbox",q.className="form-control",n.appendChild(q),d.appendChild(n)}o&&d.appendChild(o),f.appendChild(g),d.appendChild(f),p&&d.appendChild(p),c.appendChild(d),document.body.appendChild(c);var r,s=k.offsetHeight,v=i?i.offsetHeight:0,w=m?m.offsetHeight:0,x=n?n.offsetHeight:0,y=o?o.offsetHeight:0,z=p?p.offsetHeight:0,A=a(h).outerHeight(!0),B=!!window.getComputedStyle&&window.getComputedStyle(d),C=d.offsetWidth,D=B?null:a(d),E={vert:e(B?B.paddingTop:D.css("paddingTop"))+e(B?B.paddingBottom:D.css("paddingBottom"))+e(B?B.borderTopWidth:D.css("borderTopWidth"))+e(B?B.borderBottomWidth:D.css("borderBottomWidth")),horiz:e(B?B.paddingLeft:D.css("paddingLeft"))+e(B?B.paddingRight:D.css("paddingRight"))+e(B?B.borderLeftWidth:D.css("borderLeftWidth"))+e(B?B.borderRightWidth:D.css("borderRightWidth"))},F={vert:E.vert+e(B?B.marginTop:D.css("marginTop"))+e(B?B.marginBottom:D.css("marginBottom"))+2,horiz:E.horiz+e(B?B.marginLeft:D.css("marginLeft"))+e(B?B.marginRight:D.css("marginRight"))+2};f.style.overflowY="scroll",r=d.offsetWidth-C,document.body.removeChild(c),this.sizeInfo.liHeight=s,this.sizeInfo.dropdownHeaderHeight=v,this.sizeInfo.headerHeight=w,this.sizeInfo.searchHeight=x,this.sizeInfo.actionsHeight=y,this.sizeInfo.doneButtonHeight=z,this.sizeInfo.dividerHeight=A,this.sizeInfo.menuPadding=E,this.sizeInfo.menuExtras=F,this.sizeInfo.menuWidth=C,this.sizeInfo.totalMenuWidth=this.sizeInfo.menuWidth,this.sizeInfo.scrollBarWidth=r,this.sizeInfo.selectHeight=this.$newElement[0].offsetHeight,this.setPositionData()}},getSelectPosition:function(){var b,c=this,d=a(window),e=c.$newElement.offset(),f=a(c.options.container);c.options.container&&!f.is("body")?(b=f.offset(),b.top+=parseInt(f.css("borderTopWidth")),b.left+=parseInt(f.css("borderLeftWidth"))):b={top:0,left:0};var g=c.options.windowPadding;this.sizeInfo.selectOffsetTop=e.top-b.top-d.scrollTop(),this.sizeInfo.selectOffsetBot=d.height()-this.sizeInfo.selectOffsetTop-this.sizeInfo.selectHeight-b.top-g[2],this.sizeInfo.selectOffsetLeft=e.left-b.left-d.scrollLeft(),this.sizeInfo.selectOffsetRight=d.width()-this.sizeInfo.selectOffsetLeft-this.sizeInfo.selectWidth-b.left-g[1],this.sizeInfo.selectOffsetTop-=g[0],this.sizeInfo.selectOffsetLeft-=g[3]},setMenuSize:function(a){this.getSelectPosition();var b,c,d,e,f,g,h,i=this.sizeInfo.selectWidth,j=this.sizeInfo.liHeight,k=this.sizeInfo.headerHeight,l=this.sizeInfo.searchHeight,m=this.sizeInfo.actionsHeight,n=this.sizeInfo.doneButtonHeight,o=this.sizeInfo.dividerHeight,p=this.sizeInfo.menuPadding,q=0;if(this.options.dropupAuto&&(h=j*this.selectpicker.current.elements.length+p.vert,this.$newElement.toggleClass(u.DROPUP,this.sizeInfo.selectOffsetTop-this.sizeInfo.selectOffsetBot>this.sizeInfo.menuExtras.vert&&h+this.sizeInfo.menuExtras.vert+50>this.sizeInfo.selectOffsetBot)),"auto"===this.options.size)e=this.selectpicker.current.elements.length>3?3*this.sizeInfo.liHeight+this.sizeInfo.menuExtras.vert-2:0,c=this.sizeInfo.selectOffsetBot-this.sizeInfo.menuExtras.vert,d=e+k+l+m+n,g=Math.max(e-p.vert,0),this.$newElement.hasClass(u.DROPUP)&&(c=this.sizeInfo.selectOffsetTop-this.sizeInfo.menuExtras.vert),f=c,b=c-k-l-m-n-p.vert;else if(this.options.size&&"auto"!=this.options.size&&this.selectpicker.current.elements.length>this.options.size){for(var r=0;r<this.options.size;r++)"divider"===this.selectpicker.current.data[r].type&&q++;c=j*this.options.size+q*o+p.vert,b=c-p.vert,f=c+k+l+m+n,d=g=""}"auto"===this.options.dropdownAlignRight&&this.$menu.toggleClass(u.MENURIGHT,this.sizeInfo.selectOffsetLeft>this.sizeInfo.selectOffsetRight&&this.sizeInfo.selectOffsetRight<this.$menu[0].offsetWidth-i),this.$menu.css({"max-height":f+"px",overflow:"hidden","min-height":d+"px"}),this.$menuInner.css({"max-height":b+"px","overflow-y":"auto","min-height":g+"px"}),this.sizeInfo.menuInnerHeight=b,this.selectpicker.current.data.length&&this.selectpicker.current.data[this.selectpicker.current.data.length-1].position>this.sizeInfo.menuInnerHeight&&(this.sizeInfo.hasScrollBar=!0,this.sizeInfo.totalMenuWidth=this.sizeInfo.menuWidth+this.sizeInfo.scrollBarWidth,this.$menu.css("min-width",this.sizeInfo.totalMenuWidth)),this.dropdown&&this.dropdown._popper&&this.dropdown._popper.update()},setSize:function(b){if(this.liHeight(b),this.options.header&&this.$menu.css("padding-top",0),!1!==this.options.size){var c,d=this,e=a(window),f=0;this.setMenuSize(),"auto"===this.options.size?(this.$searchbox.off("input.setMenuSize propertychange.setMenuSize").on("input.setMenuSize propertychange.setMenuSize",function(){return d.setMenuSize()}),e.off("resize.setMenuSize scroll.setMenuSize").on("resize.setMenuSize scroll.setMenuSize",function(){return d.setMenuSize()})):this.options.size&&"auto"!=this.options.size&&this.selectpicker.current.elements.length>this.options.size&&(this.$searchbox.off("input.setMenuSize propertychange.setMenuSize"),e.off("resize.setMenuSize scroll.setMenuSize")),b?f=this.$menuInner[0].scrollTop:d.multiple||"number"==typeof(c=d.selectpicker.main.map.newIndex[d.$element[0].selectedIndex])&&!1!==d.options.size&&(f=d.sizeInfo.liHeight*c,f=f-d.sizeInfo.menuInnerHeight/2+d.sizeInfo.liHeight/2),d.createView(!1,f)}},setWidth:function(){var a=this;"auto"===this.options.width?requestAnimationFrame(function(){a.$menu.css("min-width","0"),a.liHeight(),a.setMenuSize();var b=a.$newElement.clone().appendTo("body"),c=b.css("width","auto").children("button").outerWidth();b.remove(),a.sizeInfo.selectWidth=Math.max(a.sizeInfo.totalMenuWidth,c),a.$newElement.css("width",a.sizeInfo.selectWidth+"px")}):"fit"===this.options.width?(this.$menu.css("min-width",""),this.$newElement.css("width","").addClass("fit-width")):this.options.width?(this.$menu.css("min-width",""),this.$newElement.css("width",this.options.width)):(this.$menu.css("min-width",""),this.$newElement.css("width","")),this.$newElement.hasClass("fit-width")&&"fit"!==this.options.width&&this.$newElement.removeClass("fit-width")},selectPosition:function(){this.$bsContainer=a('<div class="bs-container" />');var b,c,d,e=this,f=a(this.options.container),g=function(a){var g={};e.$bsContainer.addClass(a.attr("class").replace(/form-control|fit-width/gi,"")).toggleClass(u.DROPUP,a.hasClass(u.DROPUP)),b=a.offset(),f.is("body")?c={top:0,left:0}:(c=f.offset(),c.top+=parseInt(f.css("borderTopWidth"))-f.scrollTop(),c.left+=parseInt(f.css("borderLeftWidth"))-f.scrollLeft()),d=a.hasClass(u.DROPUP)?0:a[0].offsetHeight,t.major<4&&(g.top=b.top-c.top+d,g.left=b.left-c.left),g.width=a[0].offsetWidth,e.$bsContainer.css(g)};this.$button.on("click.bs.dropdown.data-api",function(){e.isDisabled()||(g(e.$newElement),e.$bsContainer.appendTo(e.options.container).toggleClass(u.SHOW,!e.$button.hasClass(u.SHOW)).append(e.$menu))}),a(window).on("resize scroll",function(){g(e.$newElement)}),this.$element.on("hide.bs.select",function(){e.$menu.data("height",e.$menu.height()),e.$bsContainer.detach()})},setOptionStatus:function(){var a=this,b=this.$element.find("option");if(a.noScroll=!1,a.selectpicker.view.visibleElements&&a.selectpicker.view.visibleElements.length)for(var c=0;c<a.selectpicker.view.visibleElements.length;c++){var d=a.selectpicker.current.map.originalIndex[c+a.selectpicker.view.position0],e=b[d];if(e){var f=this.selectpicker.main.map.newIndex[d],g=this.selectpicker.main.elements[f];a.setDisabled(d,e.disabled||"OPTGROUP"===e.parentNode.tagName&&e.parentNode.disabled,f,g),a.setSelected(d,e.selected,f,g)}}},setSelected:function(a,b,c,d){var e,f,g,h=void 0!==this.activeIndex,i=this.activeIndex===a,j=i||b&&!this.multiple&&!h;c||(c=this.selectpicker.main.map.newIndex[a]),d||(d=this.selectpicker.main.elements[c]),g=d.firstChild,b&&(this.selectedIndex=a),d.classList.toggle("selected",b),d.classList.toggle("active",j),j&&(this.selectpicker.view.currentActive=d,this.activeIndex=a),g&&(g.classList.toggle("selected",b),g.classList.toggle("active",j),g.setAttribute("aria-selected",b)),j||!h&&b&&void 0!==this.prevActiveIndex&&(e=this.selectpicker.main.map.newIndex[this.prevActiveIndex],f=this.selectpicker.main.elements[e],f.classList.remove("selected"),f.classList.remove("active"),f.firstChild&&(f.firstChild.classList.remove("selected"),f.firstChild.classList.remove("active")))},setDisabled:function(a,b,c,d){var e;c||(c=this.selectpicker.main.map.newIndex[a]),d||(d=this.selectpicker.main.elements[c]),e=d.firstChild,d.classList.toggle(u.DISABLED,b),e&&("4"===t.major&&e.classList.toggle(u.DISABLED,b),e.setAttribute("aria-disabled",b),b?e.setAttribute("tabindex",-1):e.setAttribute("tabindex",0))},isDisabled:function(){
return this.$element[0].disabled},checkDisabled:function(){var a=this;this.isDisabled()?(this.$newElement.addClass(u.DISABLED),this.$button.addClass(u.DISABLED).attr("tabindex",-1).attr("aria-disabled",!0)):(this.$button.hasClass(u.DISABLED)&&(this.$newElement.removeClass(u.DISABLED),this.$button.removeClass(u.DISABLED).attr("aria-disabled",!1)),-1!=this.$button.attr("tabindex")||this.$element.data("tabindex")||this.$button.removeAttr("tabindex")),this.$button.click(function(){return!a.isDisabled()})},togglePlaceholder:function(){var a=this.$element[0],b=a.selectedIndex,c=-1===b;c||a.options[b].value||(c=!0),this.$button.toggleClass("bs-placeholder",c)},tabIndex:function(){this.$element.data("tabindex")!==this.$element.attr("tabindex")&&-98!==this.$element.attr("tabindex")&&"-98"!==this.$element.attr("tabindex")&&(this.$element.data("tabindex",this.$element.attr("tabindex")),this.$button.attr("tabindex",this.$element.data("tabindex"))),this.$element.attr("tabindex",-98)},clickListener:function(){var b=this,d=a(document);d.data("spaceSelect",!1),this.$button.on("keyup",function(a){/(32)/.test(a.keyCode.toString(10))&&d.data("spaceSelect")&&(a.preventDefault(),d.data("spaceSelect",!1))}),this.$newElement.on("show.bs.dropdown",function(){t.major>3&&!b.dropdown&&(b.dropdown=b.$button.data("bs.dropdown"),b.dropdown._menu=b.$menu[0])}),this.$button.on("click.bs.dropdown.data-api",function(){b.$newElement.hasClass(u.SHOW)||b.setSize()}),this.$element.on("shown.bs.select",function(){b.$menuInner[0].scrollTop!==b.selectpicker.view.scrollTop&&(b.$menuInner[0].scrollTop=b.selectpicker.view.scrollTop),b.options.liveSearch?b.$searchbox.focus():b.$menuInner.focus()}),this.$menuInner.on("click","li a",function(d,e){var f=a(this),g=b.isVirtual()?b.selectpicker.view.position0:0,h=b.selectpicker.current.map.originalIndex[f.parent().index()+g],i=c(b.$element[0]),j=b.$element.prop("selectedIndex"),l=!0;if(b.multiple&&1!==b.options.maxOptions&&d.stopPropagation(),d.preventDefault(),!b.isDisabled()&&!f.parent().hasClass(u.DISABLED)){var m=b.$element.find("option"),n=m.eq(h),o=n.prop("selected"),p=n.parent("optgroup"),q=b.options.maxOptions,r=p.data("maxOptions")||!1;if(h===b.activeIndex&&(e=!0),e||(b.prevActiveIndex=b.activeIndex,b.activeIndex=void 0),b.multiple){if(n.prop("selected",!o),b.setSelected(h,!o),f.blur(),!1!==q||!1!==r){var s=q<m.filter(":selected").length,t=r<p.find("option:selected").length;if(q&&s||r&&t)if(q&&1==q)m.prop("selected",!1),n.prop("selected",!0),b.$menuInner.find(".selected").removeClass("selected"),b.setSelected(h,!0);else if(r&&1==r){p.find("option:selected").prop("selected",!1),n.prop("selected",!0);var v=b.selectpicker.current.data[f.parent().index()+b.selectpicker.view.position0].optID;b.$menuInner.find(".optgroup-"+v).removeClass("selected"),b.setSelected(h,!0)}else{var w="string"==typeof b.options.maxOptionsText?[b.options.maxOptionsText,b.options.maxOptionsText]:b.options.maxOptionsText,x="function"==typeof w?w(q,r):w,y=x[0].replace("{n}",q),z=x[1].replace("{n}",r),A=a('<div class="notify"></div>');x[2]&&(y=y.replace("{var}",x[2][q>1?0:1]),z=z.replace("{var}",x[2][r>1?0:1])),n.prop("selected",!1),b.$menu.append(A),q&&s&&(A.append(a("<div>"+y+"</div>")),l=!1,b.$element.trigger("maxReached.bs.select")),r&&t&&(A.append(a("<div>"+z+"</div>")),l=!1,b.$element.trigger("maxReachedGrp.bs.select")),setTimeout(function(){b.setSelected(h,!1)},10),A.delay(750).fadeOut(300,function(){a(this).remove()})}}}else m.prop("selected",!1),n.prop("selected",!0),b.setSelected(h,!0);!b.multiple||b.multiple&&1===b.options.maxOptions?b.$button.focus():b.options.liveSearch&&b.$searchbox.focus(),l&&(i!=c(b.$element[0])&&b.multiple||j!=b.$element.prop("selectedIndex")&&!b.multiple)&&(k=[h,n.prop("selected"),i],b.$element.triggerNative("change"))}}),this.$menu.on("click","li."+u.DISABLED+" a, ."+u.POPOVERHEADER+", ."+u.POPOVERHEADER+" :not(.close)",function(c){c.currentTarget==this&&(c.preventDefault(),c.stopPropagation(),b.options.liveSearch&&!a(c.target).hasClass("close")?b.$searchbox.focus():b.$button.focus())}),this.$menuInner.on("click",".divider, .dropdown-header",function(a){a.preventDefault(),a.stopPropagation(),b.options.liveSearch?b.$searchbox.focus():b.$button.focus()}),this.$menu.on("click","."+u.POPOVERHEADER+" .close",function(){b.$button.click()}),this.$searchbox.on("click",function(a){a.stopPropagation()}),this.$menu.on("click",".actions-btn",function(c){b.options.liveSearch?b.$searchbox.focus():b.$button.focus(),c.preventDefault(),c.stopPropagation(),a(this).hasClass("bs-select-all")?b.selectAll():b.deselectAll()}),this.$element.on({change:function(){b.render(),b.$element.trigger("changed.bs.select",k),k=null},focus:function(){b.$button.focus()}})},liveSearchListener:function(){var a=this,b=document.createElement("li");this.$button.on("click.bs.dropdown.data-api",function(){a.$searchbox.val()&&a.$searchbox.val("")}),this.$searchbox.on("click.bs.dropdown.data-api focus.bs.dropdown.data-api touchend.bs.dropdown.data-api",function(a){a.stopPropagation()}),this.$searchbox.on("input propertychange",function(){var c=a.$searchbox.val();if(a.selectpicker.search.map.newIndex={},a.selectpicker.search.map.originalIndex={},a.selectpicker.search.elements=[],a.selectpicker.search.data=[],c){var e,f=[],g=c.toUpperCase(),h={},i=[],j=a._searchStyle(),k=a.options.liveSearchNormalize;a._$lisSelected=a.$menuInner.find(".selected");for(var e=0;e<a.selectpicker.main.data.length;e++){var l=a.selectpicker.main.data[e];h[e]||(h[e]=d(l,g,j,k)),h[e]&&void 0!==l.headerIndex&&-1===i.indexOf(l.headerIndex)&&(l.headerIndex>0&&(h[l.headerIndex-1]=!0,i.push(l.headerIndex-1)),h[l.headerIndex]=!0,i.push(l.headerIndex),h[l.lastIndex+1]=!0),h[e]&&"optgroup-label"!==l.type&&i.push(e)}for(var e=0,m=i.length;e<m;e++){var n=i[e],o=i[e-1],l=a.selectpicker.main.data[n],q=a.selectpicker.main.data[o];("divider"!==l.type||"divider"===l.type&&q&&"divider"!==q.type&&m-1!==e)&&(a.selectpicker.search.data.push(l),f.push(a.selectpicker.main.elements[n]),a.selectpicker.search.map.newIndex[l.originalIndex]=f.length-1,a.selectpicker.search.map.originalIndex[f.length-1]=l.originalIndex)}a.activeIndex=void 0,a.noScroll=!0,a.$menuInner.scrollTop(0),a.selectpicker.search.elements=f,a.createView(!0),f.length||(b.className="no-results",b.innerHTML=a.options.noneResultsText.replace("{0}",'"'+p(c)+'"'),a.$menuInner[0].firstChild.appendChild(b))}else a.$menuInner.scrollTop(0),a.createView(!1)})},_searchStyle:function(){return this.options.liveSearchStyle||"contains"},val:function(a){return void 0!==a?(this.$element.val(a).triggerNative("change"),this.$element):this.$element.val()},changeAll:function(a){if(this.multiple){void 0===a&&(a=!0);var b=this.$element.find("option"),d=0,e=0,f=c(this.$element[0]);this.$element.addClass("bs-select-hidden");for(var g=0;g<this.selectpicker.current.elements.length;g++){var h=this.selectpicker.current.map.originalIndex[g],i=b[h];i&&(i.selected&&d++,i.selected=a,i.selected&&e++)}this.$element.removeClass("bs-select-hidden"),d!==e&&(this.setOptionStatus(),this.togglePlaceholder(),k=[null,null,f],this.$element.triggerNative("change"))}},selectAll:function(){return this.changeAll(!0)},deselectAll:function(){return this.changeAll(!1)},toggle:function(a){a=a||window.event,a&&a.stopPropagation(),this.$button.trigger("click.bs.dropdown.data-api")},keydown:function(b){var c,e,f,g,h,i=a(this),j=i.is("input")?i.parent().parent():i.parent(),k=j.data("this"),l=k.findLis(),m=!1,n=b.which===s.TAB&&!i.hasClass("dropdown-toggle")&&!k.options.selectOnTab,o=v.test(b.which)||n,p=k.$menuInner[0].scrollTop,q=k.isVirtual(),t=!0===q?k.selectpicker.view.position0:0;if(e=k.$newElement.hasClass(u.SHOW),!e&&(o||b.which>=48&&b.which<=57||b.which>=96&&b.which<=105||b.which>=65&&b.which<=90)&&k.$button.trigger("click.bs.dropdown.data-api"),b.which===s.ESCAPE&&e&&(b.preventDefault(),k.$button.trigger("click.bs.dropdown.data-api").focus()),o){if(!l.length)return;c=!0===q?l.index(l.filter(".active")):k.selectpicker.current.map.newIndex[k.activeIndex],void 0===c&&(c=-1),-1!==c&&(f=k.selectpicker.current.elements[c+t],f.classList.remove("active"),f.firstChild&&f.firstChild.classList.remove("active")),b.which===s.ARROW_UP?(-1!==c&&c--,c+t<0&&(c+=l.length),k.selectpicker.view.canHighlight[c+t]||-1===(c=k.selectpicker.view.canHighlight.slice(0,c+t).lastIndexOf(!0)-t)&&(c=l.length-1)):(b.which===s.ARROW_DOWN||n)&&(c++,c+t>=k.selectpicker.view.canHighlight.length&&(c=0),k.selectpicker.view.canHighlight[c+t]||(c=c+1+k.selectpicker.view.canHighlight.slice(c+t+1).indexOf(!0))),b.preventDefault();var x=t+c;b.which===s.ARROW_UP?0===t&&c===l.length-1?(k.$menuInner[0].scrollTop=k.$menuInner[0].scrollHeight,x=k.selectpicker.current.elements.length-1):(g=k.selectpicker.current.data[x],h=g.position-g.height,m=h<p):(b.which===s.ARROW_DOWN||n)&&(0!==t&&0===c?(k.$menuInner[0].scrollTop=0,x=0):(g=k.selectpicker.current.data[x],h=g.position-k.sizeInfo.menuInnerHeight,m=h>p)),f=k.selectpicker.current.elements[x],f.classList.add("active"),f.firstChild&&f.firstChild.classList.add("active"),k.activeIndex=k.selectpicker.current.map.originalIndex[x],k.selectpicker.view.currentActive=f,m&&(k.$menuInner[0].scrollTop=h),k.options.liveSearch?k.$searchbox.focus():i.focus()}else if(!i.is("input")&&!w.test(b.which)||b.which===s.SPACE&&k.selectpicker.keydown.keyHistory){var y,z,A=[];b.preventDefault(),k.selectpicker.keydown.keyHistory+=r[b.which],k.selectpicker.keydown.resetKeyHistory.cancel&&clearTimeout(k.selectpicker.keydown.resetKeyHistory.cancel),k.selectpicker.keydown.resetKeyHistory.cancel=k.selectpicker.keydown.resetKeyHistory.start(),z=k.selectpicker.keydown.keyHistory,/^(.)\1+$/.test(z)&&(z=z.charAt(0));for(var B=0;B<k.selectpicker.current.data.length;B++){var C,D=k.selectpicker.current.data[B];C=d(D,z,"startsWith",!0),C&&k.selectpicker.view.canHighlight[B]&&(D.index=B,A.push(D.originalIndex))}if(A.length){var E=0;l.removeClass("active").find("a").removeClass("active"),1===z.length&&(E=A.indexOf(k.activeIndex),-1===E||E===A.length-1?E=0:E++),y=k.selectpicker.current.map.newIndex[A[E]],g=k.selectpicker.current.data[y],p-g.position>0?(h=g.position-g.height,m=!0):(h=g.position-k.sizeInfo.menuInnerHeight,m=g.position>p+k.sizeInfo.menuInnerHeight),f=k.selectpicker.current.elements[y],f.classList.add("active"),f.firstChild&&f.firstChild.classList.add("active"),k.activeIndex=A[E],f.firstChild.focus(),m&&(k.$menuInner[0].scrollTop=h),i.focus()}}e&&(b.which===s.SPACE&&!k.selectpicker.keydown.keyHistory||b.which===s.ENTER||b.which===s.TAB&&k.options.selectOnTab)&&(b.which!==s.SPACE&&b.preventDefault(),k.options.liveSearch&&b.which===s.SPACE||(k.$menuInner.find(".active a").trigger("click",!0),i.focus(),k.options.liveSearch||(b.preventDefault(),a(document).data("spaceSelect",!0))))},mobile:function(){this.$element.addClass("mobile-device")},refresh:function(){var b=a.extend({},this.options,this.$element.data());this.options=b,this.selectpicker.main.map.newIndex={},this.selectpicker.main.map.originalIndex={},this.createLi(),this.checkDisabled(),this.render(),this.setStyle(),this.setWidth(),this.setSize(!0),this.$element.trigger("refreshed.bs.select")},hide:function(){this.$newElement.hide()},show:function(){this.$newElement.show()},remove:function(){this.$newElement.remove(),this.$element.remove()},destroy:function(){this.$newElement.before(this.$element).remove(),this.$bsContainer?this.$bsContainer.remove():this.$menu.remove(),this.$element.off(".bs.select").removeData("selectpicker").removeClass("bs-select-hidden selectpicker")}};var y=a.fn.selectpicker;a.fn.selectpicker=g,a.fn.selectpicker.Constructor=x,a.fn.selectpicker.noConflict=function(){return a.fn.selectpicker=y,this},a(document).off("keydown.bs.dropdown.data-api").on("keydown.bs.select",'.bootstrap-select [data-toggle="dropdown"], .bootstrap-select [role="listbox"], .bs-searchbox input',x.prototype.keydown).on("focusin.modal",'.bootstrap-select [data-toggle="dropdown"], .bootstrap-select [role="listbox"], .bs-searchbox input',function(a){a.stopPropagation()}),a(window).on("load.bs.select.data-api",function(){a(".selectpicker").each(function(){var b=a(this);g.call(b,b.data())})})}(a)});
//# sourceMappingURL=bootstrap-select.js.map
;
//# sourceMappingURL=scripts.bundle.js.map