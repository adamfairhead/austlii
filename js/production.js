/*! jQuery v1.11.3 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l="1.11.3",m=function(a,b){return new m.fn.init(a,b)},n=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,o=/^-ms-/,p=/-([\da-z])/gi,q=function(a,b){return b.toUpperCase()};m.fn=m.prototype={jquery:l,constructor:m,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=m.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return m.each(this,a,b)},map:function(a){return this.pushStack(m.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},m.extend=m.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||m.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(m.isPlainObject(c)||(b=m.isArray(c)))?(b?(b=!1,f=a&&m.isArray(a)?a:[]):f=a&&m.isPlainObject(a)?a:{},g[d]=m.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},m.extend({expando:"jQuery"+(l+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===m.type(a)},isArray:Array.isArray||function(a){return"array"===m.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return!m.isArray(a)&&a-parseFloat(a)+1>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==m.type(a)||a.nodeType||m.isWindow(a))return!1;try{if(a.constructor&&!j.call(a,"constructor")&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(k.ownLast)for(b in a)return j.call(a,b);for(b in a);return void 0===b||j.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(b){b&&m.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(o,"ms-").replace(p,q)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=r(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(n,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(r(Object(a))?m.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(g)return g.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=r(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(f=a[b],b=a,a=f),m.isFunction(a)?(c=d.call(arguments,2),e=function(){return a.apply(b||this,c.concat(d.call(arguments)))},e.guid=a.guid=a.guid||m.guid++,e):void 0},now:function(){return+new Date},support:k}),m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function r(a){var b="length"in a&&a.length,c=m.type(a);return"function"===c||m.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var s=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,aa=/[+~]/,ba=/'|\\/g,ca=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),da=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ea=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fa){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(ba,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+ra(o[l]);w=aa.test(a)&&pa(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",ea,!1):e.attachEvent&&e.attachEvent("onunload",ea)),p=!f(g),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?la(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ca,da),a[3]=(a[3]||a[4]||a[5]||"").replace(ca,da),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ca,da).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(ca,da),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return W.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(ca,da).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:oa(function(){return[0]}),last:oa(function(a,b){return[b-1]}),eq:oa(function(a,b,c){return[0>c?c+b:c]}),even:oa(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:oa(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:oa(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:oa(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function qa(){}qa.prototype=d.filters=d.pseudos,d.setFilters=new qa,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function ra(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sa(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function ta(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ua(a,b,c){for(var d=0,e=b.length;e>d;d++)ga(a,b[d],c);return c}function va(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wa(a,b,c,d,e,f){return d&&!d[u]&&(d=wa(d)),e&&!e[u]&&(e=wa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ua(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:va(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=va(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=va(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sa(function(a){return a===b},h,!0),l=sa(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sa(ta(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wa(i>1&&ta(m),i>1&&ra(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xa(a.slice(i,e)),f>e&&xa(a=a.slice(e)),f>e&&ra(a))}m.push(c)}return ta(m)}function ya(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=va(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&ga.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,ya(e,d)),f.selector=a}return f},i=ga.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ca,da),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ca,da),aa.test(j[0].type)&&pa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&ra(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,aa.test(a)&&pa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);m.find=s,m.expr=s.selectors,m.expr[":"]=m.expr.pseudos,m.unique=s.uniqueSort,m.text=s.getText,m.isXMLDoc=s.isXML,m.contains=s.contains;var t=m.expr.match.needsContext,u=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,v=/^.[^:#\[\.,]*$/;function w(a,b,c){if(m.isFunction(b))return m.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return m.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(v.test(b))return m.filter(b,a,c);b=m.filter(b,a)}return m.grep(a,function(a){return m.inArray(a,b)>=0!==c})}m.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?m.find.matchesSelector(d,a)?[d]:[]:m.find.matches(a,m.grep(b,function(a){return 1===a.nodeType}))},m.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(m(a).filter(function(){for(b=0;e>b;b++)if(m.contains(d[b],this))return!0}));for(b=0;e>b;b++)m.find(a,d[b],c);return c=this.pushStack(e>1?m.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(w(this,a||[],!1))},not:function(a){return this.pushStack(w(this,a||[],!0))},is:function(a){return!!w(this,"string"==typeof a&&t.test(a)?m(a):a||[],!1).length}});var x,y=a.document,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=m.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||x).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof m?b[0]:b,m.merge(this,m.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:y,!0)),u.test(c[1])&&m.isPlainObject(b))for(c in b)m.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}if(d=y.getElementById(c[2]),d&&d.parentNode){if(d.id!==c[2])return x.find(a);this.length=1,this[0]=d}return this.context=y,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):m.isFunction(a)?"undefined"!=typeof x.ready?x.ready(a):a(m):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),m.makeArray(a,this))};A.prototype=m.fn,x=m(y);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};m.extend({dir:function(a,b,c){var d=[],e=a[b];while(e&&9!==e.nodeType&&(void 0===c||1!==e.nodeType||!m(e).is(c)))1===e.nodeType&&d.push(e),e=e[b];return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),m.fn.extend({has:function(a){var b,c=m(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(m.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=t.test(a)||"string"!=typeof a?m(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&m.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?m.unique(f):f)},index:function(a){return a?"string"==typeof a?m.inArray(this[0],m(a)):m.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(m.unique(m.merge(this.get(),m(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}m.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return m.dir(a,"parentNode")},parentsUntil:function(a,b,c){return m.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return m.dir(a,"nextSibling")},prevAll:function(a){return m.dir(a,"previousSibling")},nextUntil:function(a,b,c){return m.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return m.dir(a,"previousSibling",c)},siblings:function(a){return m.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return m.sibling(a.firstChild)},contents:function(a){return m.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:m.merge([],a.childNodes)}},function(a,b){m.fn[a]=function(c,d){var e=m.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=m.filter(d,e)),this.length>1&&(C[a]||(e=m.unique(e)),B.test(a)&&(e=e.reverse())),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return m.each(a.match(E)||[],function(a,c){b[c]=!0}),b}m.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):m.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(c=a.memory&&l,d=!0,f=g||0,g=0,e=h.length,b=!0;h&&e>f;f++)if(h[f].apply(l[0],l[1])===!1&&a.stopOnFalse){c=!1;break}b=!1,h&&(i?i.length&&j(i.shift()):c?h=[]:k.disable())},k={add:function(){if(h){var d=h.length;!function f(b){m.each(b,function(b,c){var d=m.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&f(c)})}(arguments),b?e=h.length:c&&(g=d,j(c))}return this},remove:function(){return h&&m.each(arguments,function(a,c){var d;while((d=m.inArray(c,h,d))>-1)h.splice(d,1),b&&(e>=d&&e--,f>=d&&f--)}),this},has:function(a){return a?m.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],e=0,this},disable:function(){return h=i=c=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,c||k.disable(),this},locked:function(){return!i},fireWith:function(a,c){return!h||d&&!i||(c=c||[],c=[a,c.slice?c.slice():c],b?i.push(c):j(c)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!d}};return k},m.extend({Deferred:function(a){var b=[["resolve","done",m.Callbacks("once memory"),"resolved"],["reject","fail",m.Callbacks("once memory"),"rejected"],["notify","progress",m.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return m.Deferred(function(c){m.each(b,function(b,f){var g=m.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&m.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?m.extend(a,d):d}},e={};return d.pipe=d.then,m.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&m.isFunction(a.promise)?e:0,g=1===f?a:m.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&m.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;m.fn.ready=function(a){return m.ready.promise().done(a),this},m.extend({isReady:!1,readyWait:1,holdReady:function(a){a?m.readyWait++:m.ready(!0)},ready:function(a){if(a===!0?!--m.readyWait:!m.isReady){if(!y.body)return setTimeout(m.ready);m.isReady=!0,a!==!0&&--m.readyWait>0||(H.resolveWith(y,[m]),m.fn.triggerHandler&&(m(y).triggerHandler("ready"),m(y).off("ready")))}}});function I(){y.addEventListener?(y.removeEventListener("DOMContentLoaded",J,!1),a.removeEventListener("load",J,!1)):(y.detachEvent("onreadystatechange",J),a.detachEvent("onload",J))}function J(){(y.addEventListener||"load"===event.type||"complete"===y.readyState)&&(I(),m.ready())}m.ready.promise=function(b){if(!H)if(H=m.Deferred(),"complete"===y.readyState)setTimeout(m.ready);else if(y.addEventListener)y.addEventListener("DOMContentLoaded",J,!1),a.addEventListener("load",J,!1);else{y.attachEvent("onreadystatechange",J),a.attachEvent("onload",J);var c=!1;try{c=null==a.frameElement&&y.documentElement}catch(d){}c&&c.doScroll&&!function e(){if(!m.isReady){try{c.doScroll("left")}catch(a){return setTimeout(e,50)}I(),m.ready()}}()}return H.promise(b)};var K="undefined",L;for(L in m(k))break;k.ownLast="0"!==L,k.inlineBlockNeedsLayout=!1,m(function(){var a,b,c,d;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",k.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(d))}),function(){var a=y.createElement("div");if(null==k.deleteExpando){k.deleteExpando=!0;try{delete a.test}catch(b){k.deleteExpando=!1}}a=null}(),m.acceptData=function(a){var b=m.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b};var M=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,N=/([A-Z])/g;function O(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(N,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:M.test(c)?m.parseJSON(c):c}catch(e){}m.data(a,b,c)}else c=void 0}return c}function P(a){var b;for(b in a)if(("data"!==b||!m.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;

return!0}function Q(a,b,d,e){if(m.acceptData(a)){var f,g,h=m.expando,i=a.nodeType,j=i?m.cache:a,k=i?a[h]:a[h]&&h;if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||m.guid++:h),j[k]||(j[k]=i?{}:{toJSON:m.noop}),("object"==typeof b||"function"==typeof b)&&(e?j[k]=m.extend(j[k],b):j[k].data=m.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[m.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[m.camelCase(b)])):f=g,f}}function R(a,b,c){if(m.acceptData(a)){var d,e,f=a.nodeType,g=f?m.cache:a,h=f?a[m.expando]:m.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){m.isArray(b)?b=b.concat(m.map(b,m.camelCase)):b in d?b=[b]:(b=m.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!P(d):!m.isEmptyObject(d))return}(c||(delete g[h].data,P(g[h])))&&(f?m.cleanData([a],!0):k.deleteExpando||g!=g.window?delete g[h]:g[h]=null)}}}m.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?m.cache[a[m.expando]]:a[m.expando],!!a&&!P(a)},data:function(a,b,c){return Q(a,b,c)},removeData:function(a,b){return R(a,b)},_data:function(a,b,c){return Q(a,b,c,!0)},_removeData:function(a,b){return R(a,b,!0)}}),m.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=m.data(f),1===f.nodeType&&!m._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=m.camelCase(d.slice(5)),O(f,d,e[d])));m._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){m.data(this,a)}):arguments.length>1?this.each(function(){m.data(this,a,b)}):f?O(f,a,m.data(f,a)):void 0},removeData:function(a){return this.each(function(){m.removeData(this,a)})}}),m.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=m._data(a,b),c&&(!d||m.isArray(c)?d=m._data(a,b,m.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=m.queue(a,b),d=c.length,e=c.shift(),f=m._queueHooks(a,b),g=function(){m.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return m._data(a,c)||m._data(a,c,{empty:m.Callbacks("once memory").add(function(){m._removeData(a,b+"queue"),m._removeData(a,c)})})}}),m.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?m.queue(this[0],a):void 0===b?this:this.each(function(){var c=m.queue(this,a,b);m._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&m.dequeue(this,a)})},dequeue:function(a){return this.each(function(){m.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=m.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=m._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=["Top","Right","Bottom","Left"],U=function(a,b){return a=b||a,"none"===m.css(a,"display")||!m.contains(a.ownerDocument,a)},V=m.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===m.type(c)){e=!0;for(h in c)m.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,m.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(m(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},W=/^(?:checkbox|radio)$/i;!function(){var a=y.createElement("input"),b=y.createElement("div"),c=y.createDocumentFragment();if(b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",k.leadingWhitespace=3===b.firstChild.nodeType,k.tbody=!b.getElementsByTagName("tbody").length,k.htmlSerialize=!!b.getElementsByTagName("link").length,k.html5Clone="<:nav></:nav>"!==y.createElement("nav").cloneNode(!0).outerHTML,a.type="checkbox",a.checked=!0,c.appendChild(a),k.appendChecked=a.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue,c.appendChild(b),b.innerHTML="<input type='radio' checked='checked' name='t'/>",k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,k.noCloneEvent=!0,b.attachEvent&&(b.attachEvent("onclick",function(){k.noCloneEvent=!1}),b.cloneNode(!0).click()),null==k.deleteExpando){k.deleteExpando=!0;try{delete b.test}catch(d){k.deleteExpando=!1}}}(),function(){var b,c,d=y.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(k[b+"Bubbles"]=c in a)||(d.setAttribute(c,"t"),k[b+"Bubbles"]=d.attributes[c].expando===!1);d=null}();var X=/^(?:input|select|textarea)$/i,Y=/^key/,Z=/^(?:mouse|pointer|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=/^([^.]*)(?:\.(.+)|)$/;function aa(){return!0}function ba(){return!1}function ca(){try{return y.activeElement}catch(a){}}m.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=m.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return typeof m===K||a&&m.event.triggered===a.type?void 0:m.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(E)||[""],h=b.length;while(h--)f=_.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=m.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=m.event.special[o]||{},l=m.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&m.expr.match.needsContext.test(e),namespace:p.join(".")},i),(n=g[o])||(n=g[o]=[],n.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?n.splice(n.delegateCount++,0,l):n.push(l),m.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m.hasData(a)&&m._data(a);if(r&&(k=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=_.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=m.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,n=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=n.length;while(f--)g=n[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(n.splice(f,1),g.selector&&n.delegateCount--,l.remove&&l.remove.call(a,g));i&&!n.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||m.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)m.event.remove(a,o+b[j],c,d,!0);m.isEmptyObject(k)&&(delete r.handle,m._removeData(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,n,o=[d||y],p=j.call(b,"type")?b.type:b,q=j.call(b,"namespace")?b.namespace.split("."):[];if(h=l=d=d||y,3!==d.nodeType&&8!==d.nodeType&&!$.test(p+m.event.triggered)&&(p.indexOf(".")>=0&&(q=p.split("."),p=q.shift(),q.sort()),g=p.indexOf(":")<0&&"on"+p,b=b[m.expando]?b:new m.Event(p,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=q.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:m.makeArray(c,[b]),k=m.event.special[p]||{},e||!k.trigger||k.trigger.apply(d,c)!==!1)){if(!e&&!k.noBubble&&!m.isWindow(d)){for(i=k.delegateType||p,$.test(i+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),l=h;l===(d.ownerDocument||y)&&o.push(l.defaultView||l.parentWindow||a)}n=0;while((h=o[n++])&&!b.isPropagationStopped())b.type=n>1?i:k.bindType||p,f=(m._data(h,"events")||{})[b.type]&&m._data(h,"handle"),f&&f.apply(h,c),f=g&&h[g],f&&f.apply&&m.acceptData(h)&&(b.result=f.apply(h,c),b.result===!1&&b.preventDefault());if(b.type=p,!e&&!b.isDefaultPrevented()&&(!k._default||k._default.apply(o.pop(),c)===!1)&&m.acceptData(d)&&g&&d[p]&&!m.isWindow(d)){l=d[g],l&&(d[g]=null),m.event.triggered=p;try{d[p]()}catch(r){}m.event.triggered=void 0,l&&(d[g]=l)}return b.result}},dispatch:function(a){a=m.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(m._data(this,"events")||{})[a.type]||[],k=m.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=m.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,g=0;while((e=f.handlers[g++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(e.namespace))&&(a.handleObj=e,a.data=e.data,c=((m.event.special[e.origType]||{}).handle||e.handler).apply(f.elem,i),void 0!==c&&(a.result=c)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(e=[],f=0;h>f;f++)d=b[f],c=d.selector+" ",void 0===e[c]&&(e[c]=d.needsContext?m(c,this).index(i)>=0:m.find(c,this,null,[i]).length),e[c]&&e.push(d);e.length&&g.push({elem:i,handlers:e})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[m.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=Z.test(e)?this.mouseHooks:Y.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new m.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=f.srcElement||y),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button,g=b.fromElement;return null==a.pageX&&null!=b.clientX&&(d=a.target.ownerDocument||y,e=d.documentElement,c=d.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&g&&(a.relatedTarget=g===a.target?b.toElement:g),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==ca()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===ca()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return m.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return m.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=m.extend(new m.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?m.event.trigger(e,null,b):m.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},m.removeEvent=y.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]===K&&(a[d]=null),a.detachEvent(d,c))},m.Event=function(a,b){return this instanceof m.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?aa:ba):this.type=a,b&&m.extend(this,b),this.timeStamp=a&&a.timeStamp||m.now(),void(this[m.expando]=!0)):new m.Event(a,b)},m.Event.prototype={isDefaultPrevented:ba,isPropagationStopped:ba,isImmediatePropagationStopped:ba,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=aa,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=aa,a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=aa,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},m.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){m.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!m.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.submitBubbles||(m.event.special.submit={setup:function(){return m.nodeName(this,"form")?!1:void m.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=m.nodeName(b,"input")||m.nodeName(b,"button")?b.form:void 0;c&&!m._data(c,"submitBubbles")&&(m.event.add(c,"submit._submit",function(a){a._submit_bubble=!0}),m._data(c,"submitBubbles",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&m.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){return m.nodeName(this,"form")?!1:void m.event.remove(this,"._submit")}}),k.changeBubbles||(m.event.special.change={setup:function(){return X.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(m.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)}),m.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),m.event.simulate("change",this,a,!0)})),!1):void m.event.add(this,"beforeactivate._change",function(a){var b=a.target;X.test(b.nodeName)&&!m._data(b,"changeBubbles")&&(m.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||m.event.simulate("change",this.parentNode,a,!0)}),m._data(b,"changeBubbles",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return m.event.remove(this,"._change"),!X.test(this.nodeName)}}),k.focusinBubbles||m.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){m.event.simulate(b,a.target,m.event.fix(a),!0)};m.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=m._data(d,b);e||d.addEventListener(a,c,!0),m._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=m._data(d,b)-1;e?m._data(d,b,e):(d.removeEventListener(a,c,!0),m._removeData(d,b))}}}),m.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(f in a)this.on(f,b,c,a[f],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=ba;else if(!d)return this;return 1===e&&(g=d,d=function(a){return m().off(a),g.apply(this,arguments)},d.guid=g.guid||(g.guid=m.guid++)),this.each(function(){m.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,m(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=ba),this.each(function(){m.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){m.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?m.event.trigger(a,b,c,!0):void 0}});function da(a){var b=ea.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}var ea="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",fa=/ jQuery\d+="(?:null|\d+)"/g,ga=new RegExp("<(?:"+ea+")[\\s/>]","i"),ha=/^\s+/,ia=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ja=/<([\w:]+)/,ka=/<tbody/i,la=/<|&#?\w+;/,ma=/<(?:script|style|link)/i,na=/checked\s*(?:[^=]|=\s*.checked.)/i,oa=/^$|\/(?:java|ecma)script/i,pa=/^true\/(.*)/,qa=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ra={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:k.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},sa=da(y),ta=sa.appendChild(y.createElement("div"));ra.optgroup=ra.option,ra.tbody=ra.tfoot=ra.colgroup=ra.caption=ra.thead,ra.th=ra.td;function ua(a,b){var c,d,e=0,f=typeof a.getElementsByTagName!==K?a.getElementsByTagName(b||"*"):typeof a.querySelectorAll!==K?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||m.nodeName(d,b)?f.push(d):m.merge(f,ua(d,b));return void 0===b||b&&m.nodeName(a,b)?m.merge([a],f):f}function va(a){W.test(a.type)&&(a.defaultChecked=a.checked)}function wa(a,b){return m.nodeName(a,"table")&&m.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function xa(a){return a.type=(null!==m.find.attr(a,"type"))+"/"+a.type,a}function ya(a){var b=pa.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function za(a,b){for(var c,d=0;null!=(c=a[d]);d++)m._data(c,"globalEval",!b||m._data(b[d],"globalEval"))}function Aa(a,b){if(1===b.nodeType&&m.hasData(a)){var c,d,e,f=m._data(a),g=m._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)m.event.add(b,c,h[c][d])}g.data&&(g.data=m.extend({},g.data))}}function Ba(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!k.noCloneEvent&&b[m.expando]){e=m._data(b);for(d in e.events)m.removeEvent(b,d,e.handle);b.removeAttribute(m.expando)}"script"===c&&b.text!==a.text?(xa(b).text=a.text,ya(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),k.html5Clone&&a.innerHTML&&!m.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&W.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}}m.extend({clone:function(a,b,c){var d,e,f,g,h,i=m.contains(a.ownerDocument,a);if(k.html5Clone||m.isXMLDoc(a)||!ga.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(ta.innerHTML=a.outerHTML,ta.removeChild(f=ta.firstChild)),!(k.noCloneEvent&&k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||m.isXMLDoc(a)))for(d=ua(f),h=ua(a),g=0;null!=(e=h[g]);++g)d[g]&&Ba(e,d[g]);if(b)if(c)for(h=h||ua(a),d=d||ua(f),g=0;null!=(e=h[g]);g++)Aa(e,d[g]);else Aa(a,f);return d=ua(f,"script"),d.length>0&&za(d,!i&&ua(a,"script")),d=h=e=null,f},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,l,n=a.length,o=da(b),p=[],q=0;n>q;q++)if(f=a[q],f||0===f)if("object"===m.type(f))m.merge(p,f.nodeType?[f]:f);else if(la.test(f)){h=h||o.appendChild(b.createElement("div")),i=(ja.exec(f)||["",""])[1].toLowerCase(),l=ra[i]||ra._default,h.innerHTML=l[1]+f.replace(ia,"<$1></$2>")+l[2],e=l[0];while(e--)h=h.lastChild;if(!k.leadingWhitespace&&ha.test(f)&&p.push(b.createTextNode(ha.exec(f)[0])),!k.tbody){f="table"!==i||ka.test(f)?"<table>"!==l[1]||ka.test(f)?0:h:h.firstChild,e=f&&f.childNodes.length;while(e--)m.nodeName(j=f.childNodes[e],"tbody")&&!j.childNodes.length&&f.removeChild(j)}m.merge(p,h.childNodes),h.textContent="";while(h.firstChild)h.removeChild(h.firstChild);h=o.lastChild}else p.push(b.createTextNode(f));h&&o.removeChild(h),k.appendChecked||m.grep(ua(p,"input"),va),q=0;while(f=p[q++])if((!d||-1===m.inArray(f,d))&&(g=m.contains(f.ownerDocument,f),h=ua(o.appendChild(f),"script"),g&&za(h),c)){e=0;while(f=h[e++])oa.test(f.type||"")&&c.push(f)}return h=null,o},cleanData:function(a,b){for(var d,e,f,g,h=0,i=m.expando,j=m.cache,l=k.deleteExpando,n=m.event.special;null!=(d=a[h]);h++)if((b||m.acceptData(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)n[e]?m.event.remove(d,e):m.removeEvent(d,e,g.handle);j[f]&&(delete j[f],l?delete d[i]:typeof d.removeAttribute!==K?d.removeAttribute(i):d[i]=null,c.push(f))}}}),m.fn.extend({text:function(a){return V(this,function(a){return void 0===a?m.text(this):this.empty().append((this[0]&&this[0].ownerDocument||y).createTextNode(a))},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wa(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wa(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?m.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||m.cleanData(ua(c)),c.parentNode&&(b&&m.contains(c.ownerDocument,c)&&za(ua(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&m.cleanData(ua(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&m.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return m.clone(this,a,b)})},html:function(a){return V(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(fa,""):void 0;if(!("string"!=typeof a||ma.test(a)||!k.htmlSerialize&&ga.test(a)||!k.leadingWhitespace&&ha.test(a)||ra[(ja.exec(a)||["",""])[1].toLowerCase()])){a=a.replace(ia,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(m.cleanData(ua(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,m.cleanData(ua(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,n=this,o=l-1,p=a[0],q=m.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&na.test(p))return this.each(function(c){var d=n.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(i=m.buildFragment(a,this[0].ownerDocument,!1,this),c=i.firstChild,1===i.childNodes.length&&(i=c),c)){for(g=m.map(ua(i,"script"),xa),f=g.length;l>j;j++)d=i,j!==o&&(d=m.clone(d,!0,!0),f&&m.merge(g,ua(d,"script"))),b.call(this[j],d,j);if(f)for(h=g[g.length-1].ownerDocument,m.map(g,ya),j=0;f>j;j++)d=g[j],oa.test(d.type||"")&&!m._data(d,"globalEval")&&m.contains(h,d)&&(d.src?m._evalUrl&&m._evalUrl(d.src):m.globalEval((d.text||d.textContent||d.innerHTML||"").replace(qa,"")));i=c=null}return this}}),m.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){m.fn[a]=function(a){for(var c,d=0,e=[],g=m(a),h=g.length-1;h>=d;d++)c=d===h?this:this.clone(!0),m(g[d])[b](c),f.apply(e,c.get());return this.pushStack(e)}});var Ca,Da={};function Ea(b,c){var d,e=m(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:m.css(e[0],"display");return e.detach(),f}function Fa(a){var b=y,c=Da[a];return c||(c=Ea(a,b),"none"!==c&&c||(Ca=(Ca||m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Ca[0].contentWindow||Ca[0].contentDocument).document,b.write(),b.close(),c=Ea(a,b),Ca.detach()),Da[a]=c),c}!function(){var a;k.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,d;return c=y.getElementsByTagName("body")[0],c&&c.style?(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(y.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(d),a):void 0}}();var Ga=/^margin/,Ha=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ia,Ja,Ka=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ia=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)},Ja=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ia(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||m.contains(a.ownerDocument,a)||(g=m.style(a,b)),Ha.test(g)&&Ga.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0===g?g:g+""}):y.documentElement.currentStyle&&(Ia=function(a){return a.currentStyle},Ja=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ia(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Ha.test(g)&&!Ka.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function La(a,b){return{get:function(){var c=a();if(null!=c)return c?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d,e,f,g,h;if(b=y.createElement("div"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=d&&d.style){c.cssText="float:left;opacity:.5",k.opacity="0.5"===c.opacity,k.cssFloat=!!c.cssFloat,b.style.backgroundClip="content-box",b.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===b.style.backgroundClip,k.boxSizing=""===c.boxSizing||""===c.MozBoxSizing||""===c.WebkitBoxSizing,m.extend(k,{reliableHiddenOffsets:function(){return null==g&&i(),g},boxSizingReliable:function(){return null==f&&i(),f},pixelPosition:function(){return null==e&&i(),e},reliableMarginRight:function(){return null==h&&i(),h}});function i(){var b,c,d,i;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),b.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",e=f=!1,h=!0,a.getComputedStyle&&(e="1%"!==(a.getComputedStyle(b,null)||{}).top,f="4px"===(a.getComputedStyle(b,null)||{width:"4px"}).width,i=b.appendChild(y.createElement("div")),i.style.cssText=b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",i.style.marginRight=i.style.width="0",b.style.width="1px",h=!parseFloat((a.getComputedStyle(i,null)||{}).marginRight),b.removeChild(i)),b.innerHTML="<table><tr><td></td><td>t</td></tr></table>",i=b.getElementsByTagName("td"),i[0].style.cssText="margin:0;border:0;padding:0;display:none",g=0===i[0].offsetHeight,g&&(i[0].style.display="",i[1].style.display="none",g=0===i[0].offsetHeight),c.removeChild(d))}}}(),m.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var Ma=/alpha\([^)]*\)/i,Na=/opacity\s*=\s*([^)]*)/,Oa=/^(none|table(?!-c[ea]).+)/,Pa=new RegExp("^("+S+")(.*)$","i"),Qa=new RegExp("^([+-])=("+S+")","i"),Ra={position:"absolute",visibility:"hidden",display:"block"},Sa={letterSpacing:"0",fontWeight:"400"},Ta=["Webkit","O","Moz","ms"];function Ua(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=Ta.length;while(e--)if(b=Ta[e]+c,b in a)return b;return d}function Va(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=m._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&U(d)&&(f[g]=m._data(d,"olddisplay",Fa(d.nodeName)))):(e=U(d),(c&&"none"!==c||!e)&&m._data(d,"olddisplay",e?c:m.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function Wa(a,b,c){var d=Pa.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Xa(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=m.css(a,c+T[f],!0,e)),d?("content"===c&&(g-=m.css(a,"padding"+T[f],!0,e)),"margin"!==c&&(g-=m.css(a,"border"+T[f]+"Width",!0,e))):(g+=m.css(a,"padding"+T[f],!0,e),"padding"!==c&&(g+=m.css(a,"border"+T[f]+"Width",!0,e)));return g}function Ya(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ia(a),g=k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Ja(a,b,f),(0>e||null==e)&&(e=a.style[b]),Ha.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Xa(a,b,c||(g?"border":"content"),d,f)+"px"}m.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Ja(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":k.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=m.camelCase(b),i=a.style;if(b=m.cssProps[h]||(m.cssProps[h]=Ua(i,h)),g=m.cssHooks[b]||m.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=Qa.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(m.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||m.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=m.camelCase(b);return b=m.cssProps[h]||(m.cssProps[h]=Ua(a.style,h)),g=m.cssHooks[b]||m.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Ja(a,b,d)),"normal"===f&&b in Sa&&(f=Sa[b]),""===c||c?(e=parseFloat(f),c===!0||m.isNumeric(e)?e||0:f):f}}),m.each(["height","width"],function(a,b){m.cssHooks[b]={get:function(a,c,d){return c?Oa.test(m.css(a,"display"))&&0===a.offsetWidth?m.swap(a,Ra,function(){return Ya(a,b,d)}):Ya(a,b,d):void 0},set:function(a,c,d){var e=d&&Ia(a);return Wa(a,c,d?Xa(a,b,d,k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,e),e):0)}}}),k.opacity||(m.cssHooks.opacity={get:function(a,b){return Na.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=m.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===m.trim(f.replace(Ma,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Ma.test(f)?f.replace(Ma,e):f+" "+e)}}),m.cssHooks.marginRight=La(k.reliableMarginRight,function(a,b){return b?m.swap(a,{display:"inline-block"},Ja,[a,"marginRight"]):void 0}),m.each({margin:"",padding:"",border:"Width"},function(a,b){m.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+T[d]+b]=f[d]||f[d-2]||f[0];return e}},Ga.test(a)||(m.cssHooks[a+b].set=Wa)}),m.fn.extend({css:function(a,b){return V(this,function(a,b,c){var d,e,f={},g=0;if(m.isArray(b)){for(d=Ia(a),e=b.length;e>g;g++)f[b[g]]=m.css(a,b[g],!1,d);return f}return void 0!==c?m.style(a,b,c):m.css(a,b)},a,b,arguments.length>1)},show:function(){return Va(this,!0)},hide:function(){return Va(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){U(this)?m(this).show():m(this).hide()})}});function Za(a,b,c,d,e){
return new Za.prototype.init(a,b,c,d,e)}m.Tween=Za,Za.prototype={constructor:Za,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(m.cssNumber[c]?"":"px")},cur:function(){var a=Za.propHooks[this.prop];return a&&a.get?a.get(this):Za.propHooks._default.get(this)},run:function(a){var b,c=Za.propHooks[this.prop];return this.options.duration?this.pos=b=m.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Za.propHooks._default.set(this),this}},Za.prototype.init.prototype=Za.prototype,Za.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=m.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){m.fx.step[a.prop]?m.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[m.cssProps[a.prop]]||m.cssHooks[a.prop])?m.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Za.propHooks.scrollTop=Za.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},m.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},m.fx=Za.prototype.init,m.fx.step={};var $a,_a,ab=/^(?:toggle|show|hide)$/,bb=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),cb=/queueHooks$/,db=[ib],eb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=bb.exec(b),f=e&&e[3]||(m.cssNumber[a]?"":"px"),g=(m.cssNumber[a]||"px"!==f&&+d)&&bb.exec(m.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,m.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function fb(){return setTimeout(function(){$a=void 0}),$a=m.now()}function gb(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=T[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function hb(a,b,c){for(var d,e=(eb[b]||[]).concat(eb["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ib(a,b,c){var d,e,f,g,h,i,j,l,n=this,o={},p=a.style,q=a.nodeType&&U(a),r=m._data(a,"fxshow");c.queue||(h=m._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,n.always(function(){n.always(function(){h.unqueued--,m.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=m.css(a,"display"),l="none"===j?m._data(a,"olddisplay")||Fa(a.nodeName):j,"inline"===l&&"none"===m.css(a,"float")&&(k.inlineBlockNeedsLayout&&"inline"!==Fa(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",k.shrinkWrapBlocks()||n.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],ab.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||m.style(a,d)}else j=void 0;if(m.isEmptyObject(o))"inline"===("none"===j?Fa(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=m._data(a,"fxshow",{}),f&&(r.hidden=!q),q?m(a).show():n.done(function(){m(a).hide()}),n.done(function(){var b;m._removeData(a,"fxshow");for(b in o)m.style(a,b,o[b])});for(d in o)g=hb(q?r[d]:0,d,n),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function jb(a,b){var c,d,e,f,g;for(c in a)if(d=m.camelCase(c),e=b[d],f=a[c],m.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=m.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kb(a,b,c){var d,e,f=0,g=db.length,h=m.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=$a||fb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:m.extend({},b),opts:m.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:$a||fb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=m.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jb(k,j.opts.specialEasing);g>f;f++)if(d=db[f].call(j,a,k,j.opts))return d;return m.map(k,hb,j),m.isFunction(j.opts.start)&&j.opts.start.call(a,j),m.fx.timer(m.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}m.Animation=m.extend(kb,{tweener:function(a,b){m.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],eb[c]=eb[c]||[],eb[c].unshift(b)},prefilter:function(a,b){b?db.unshift(a):db.push(a)}}),m.speed=function(a,b,c){var d=a&&"object"==typeof a?m.extend({},a):{complete:c||!c&&b||m.isFunction(a)&&a,duration:a,easing:c&&b||b&&!m.isFunction(b)&&b};return d.duration=m.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in m.fx.speeds?m.fx.speeds[d.duration]:m.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){m.isFunction(d.old)&&d.old.call(this),d.queue&&m.dequeue(this,d.queue)},d},m.fn.extend({fadeTo:function(a,b,c,d){return this.filter(U).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=m.isEmptyObject(a),f=m.speed(b,c,d),g=function(){var b=kb(this,m.extend({},a),f);(e||m._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=m.timers,g=m._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&cb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&m.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=m._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=m.timers,g=d?d.length:0;for(c.finish=!0,m.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),m.each(["toggle","show","hide"],function(a,b){var c=m.fn[b];m.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gb(b,!0),a,d,e)}}),m.each({slideDown:gb("show"),slideUp:gb("hide"),slideToggle:gb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){m.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),m.timers=[],m.fx.tick=function(){var a,b=m.timers,c=0;for($a=m.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||m.fx.stop(),$a=void 0},m.fx.timer=function(a){m.timers.push(a),a()?m.fx.start():m.timers.pop()},m.fx.interval=13,m.fx.start=function(){_a||(_a=setInterval(m.fx.tick,m.fx.interval))},m.fx.stop=function(){clearInterval(_a),_a=null},m.fx.speeds={slow:600,fast:200,_default:400},m.fn.delay=function(a,b){return a=m.fx?m.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a,b,c,d,e;b=y.createElement("div"),b.setAttribute("className","t"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=y.createElement("select"),e=c.appendChild(y.createElement("option")),a=b.getElementsByTagName("input")[0],d.style.cssText="top:1px",k.getSetAttribute="t"!==b.className,k.style=/top/.test(d.getAttribute("style")),k.hrefNormalized="/a"===d.getAttribute("href"),k.checkOn=!!a.value,k.optSelected=e.selected,k.enctype=!!y.createElement("form").enctype,c.disabled=!0,k.optDisabled=!e.disabled,a=y.createElement("input"),a.setAttribute("value",""),k.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),k.radioValue="t"===a.value}();var lb=/\r/g;m.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=m.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,m(this).val()):a,null==e?e="":"number"==typeof e?e+="":m.isArray(e)&&(e=m.map(e,function(a){return null==a?"":a+""})),b=m.valHooks[this.type]||m.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=m.valHooks[e.type]||m.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(lb,""):null==c?"":c)}}}),m.extend({valHooks:{option:{get:function(a){var b=m.find.attr(a,"value");return null!=b?b:m.trim(m.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&m.nodeName(c.parentNode,"optgroup"))){if(b=m(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=m.makeArray(b),g=e.length;while(g--)if(d=e[g],m.inArray(m.valHooks.option.get(d),f)>=0)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),m.each(["radio","checkbox"],function(){m.valHooks[this]={set:function(a,b){return m.isArray(b)?a.checked=m.inArray(m(a).val(),b)>=0:void 0}},k.checkOn||(m.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var mb,nb,ob=m.expr.attrHandle,pb=/^(?:checked|selected)$/i,qb=k.getSetAttribute,rb=k.input;m.fn.extend({attr:function(a,b){return V(this,m.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){m.removeAttr(this,a)})}}),m.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===K?m.prop(a,b,c):(1===f&&m.isXMLDoc(a)||(b=b.toLowerCase(),d=m.attrHooks[b]||(m.expr.match.bool.test(b)?nb:mb)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=m.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void m.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=m.propFix[c]||c,m.expr.match.bool.test(c)?rb&&qb||!pb.test(c)?a[d]=!1:a[m.camelCase("default-"+c)]=a[d]=!1:m.attr(a,c,""),a.removeAttribute(qb?c:d)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&m.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),nb={set:function(a,b,c){return b===!1?m.removeAttr(a,c):rb&&qb||!pb.test(c)?a.setAttribute(!qb&&m.propFix[c]||c,c):a[m.camelCase("default-"+c)]=a[c]=!0,c}},m.each(m.expr.match.bool.source.match(/\w+/g),function(a,b){var c=ob[b]||m.find.attr;ob[b]=rb&&qb||!pb.test(b)?function(a,b,d){var e,f;return d||(f=ob[b],ob[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,ob[b]=f),e}:function(a,b,c){return c?void 0:a[m.camelCase("default-"+b)]?b.toLowerCase():null}}),rb&&qb||(m.attrHooks.value={set:function(a,b,c){return m.nodeName(a,"input")?void(a.defaultValue=b):mb&&mb.set(a,b,c)}}),qb||(mb={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},ob.id=ob.name=ob.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},m.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:mb.set},m.attrHooks.contenteditable={set:function(a,b,c){mb.set(a,""===b?!1:b,c)}},m.each(["width","height"],function(a,b){m.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),k.style||(m.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var sb=/^(?:input|select|textarea|button|object)$/i,tb=/^(?:a|area)$/i;m.fn.extend({prop:function(a,b){return V(this,m.prop,a,b,arguments.length>1)},removeProp:function(a){return a=m.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),m.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!m.isXMLDoc(a),f&&(b=m.propFix[b]||b,e=m.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=m.find.attr(a,"tabindex");return b?parseInt(b,10):sb.test(a.nodeName)||tb.test(a.nodeName)&&a.href?0:-1}}}}),k.hrefNormalized||m.each(["href","src"],function(a,b){m.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),k.optSelected||(m.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}}),m.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){m.propFix[this.toLowerCase()]=this}),k.enctype||(m.propFix.enctype="encoding");var ub=/[\t\r\n\f]/g;m.fn.extend({addClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j="string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).addClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ub," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=m.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j=0===arguments.length||"string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).removeClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ub," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?m.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(m.isFunction(a)?function(c){m(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=m(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===K||"boolean"===c)&&(this.className&&m._data(this,"__className__",this.className),this.className=this.className||a===!1?"":m._data(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ub," ").indexOf(b)>=0)return!0;return!1}}),m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){m.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),m.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var vb=m.now(),wb=/\?/,xb=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;m.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=m.trim(b+"");return e&&!m.trim(e.replace(xb,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():m.error("Invalid JSON: "+b)},m.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||m.error("Invalid XML: "+b),c};var yb,zb,Ab=/#.*$/,Bb=/([?&])_=[^&]*/,Cb=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Db=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Eb=/^(?:GET|HEAD)$/,Fb=/^\/\//,Gb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Hb={},Ib={},Jb="*/".concat("*");try{zb=location.href}catch(Kb){zb=y.createElement("a"),zb.href="",zb=zb.href}yb=Gb.exec(zb.toLowerCase())||[];function Lb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(m.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Mb(a,b,c,d){var e={},f=a===Ib;function g(h){var i;return e[h]=!0,m.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Nb(a,b){var c,d,e=m.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&m.extend(!0,a,c),a}function Ob(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Pb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}m.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:zb,type:"GET",isLocal:Db.test(yb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Jb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":m.parseJSON,"text xml":m.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Nb(Nb(a,m.ajaxSettings),b):Nb(m.ajaxSettings,a)},ajaxPrefilter:Lb(Hb),ajaxTransport:Lb(Ib),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=m.ajaxSetup({},b),l=k.context||k,n=k.context&&(l.nodeType||l.jquery)?m(l):m.event,o=m.Deferred(),p=m.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!j){j={};while(b=Cb.exec(f))j[b[1].toLowerCase()]=b[2]}b=j[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?f:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return i&&i.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||zb)+"").replace(Ab,"").replace(Fb,yb[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=m.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(c=Gb.exec(k.url.toLowerCase()),k.crossDomain=!(!c||c[1]===yb[1]&&c[2]===yb[2]&&(c[3]||("http:"===c[1]?"80":"443"))===(yb[3]||("http:"===yb[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=m.param(k.data,k.traditional)),Mb(Hb,k,b,v),2===t)return v;h=m.event&&k.global,h&&0===m.active++&&m.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!Eb.test(k.type),e=k.url,k.hasContent||(k.data&&(e=k.url+=(wb.test(e)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=Bb.test(e)?e.replace(Bb,"$1_="+vb++):e+(wb.test(e)?"&":"?")+"_="+vb++)),k.ifModified&&(m.lastModified[e]&&v.setRequestHeader("If-Modified-Since",m.lastModified[e]),m.etag[e]&&v.setRequestHeader("If-None-Match",m.etag[e])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+Jb+"; q=0.01":""):k.accepts["*"]);for(d in k.headers)v.setRequestHeader(d,k.headers[d]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(d in{success:1,error:1,complete:1})v[d](k[d]);if(i=Mb(Ib,k,b,v)){v.readyState=1,h&&n.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,i.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,c,d){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),i=void 0,f=d||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,c&&(u=Ob(k,v,c)),u=Pb(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(m.lastModified[e]=w),w=v.getResponseHeader("etag"),w&&(m.etag[e]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,h&&n.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),h&&(n.trigger("ajaxComplete",[v,k]),--m.active||m.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return m.get(a,b,c,"json")},getScript:function(a,b){return m.get(a,void 0,b,"script")}}),m.each(["get","post"],function(a,b){m[b]=function(a,c,d,e){return m.isFunction(c)&&(e=e||d,d=c,c=void 0),m.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),m._evalUrl=function(a){return m.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},m.fn.extend({wrapAll:function(a){if(m.isFunction(a))return this.each(function(b){m(this).wrapAll(a.call(this,b))});if(this[0]){var b=m(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return this.each(m.isFunction(a)?function(b){m(this).wrapInner(a.call(this,b))}:function(){var b=m(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=m.isFunction(a);return this.each(function(c){m(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){m.nodeName(this,"body")||m(this).replaceWith(this.childNodes)}).end()}}),m.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0||!k.reliableHiddenOffsets()&&"none"===(a.style&&a.style.display||m.css(a,"display"))},m.expr.filters.visible=function(a){return!m.expr.filters.hidden(a)};var Qb=/%20/g,Rb=/\[\]$/,Sb=/\r?\n/g,Tb=/^(?:submit|button|image|reset|file)$/i,Ub=/^(?:input|select|textarea|keygen)/i;function Vb(a,b,c,d){var e;if(m.isArray(b))m.each(b,function(b,e){c||Rb.test(a)?d(a,e):Vb(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==m.type(b))d(a,b);else for(e in b)Vb(a+"["+e+"]",b[e],c,d)}m.param=function(a,b){var c,d=[],e=function(a,b){b=m.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=m.ajaxSettings&&m.ajaxSettings.traditional),m.isArray(a)||a.jquery&&!m.isPlainObject(a))m.each(a,function(){e(this.name,this.value)});else for(c in a)Vb(c,a[c],b,e);return d.join("&").replace(Qb,"+")},m.fn.extend({serialize:function(){return m.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=m.prop(this,"elements");return a?m.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!m(this).is(":disabled")&&Ub.test(this.nodeName)&&!Tb.test(a)&&(this.checked||!W.test(a))}).map(function(a,b){var c=m(this).val();return null==c?null:m.isArray(c)?m.map(c,function(a){return{name:b.name,value:a.replace(Sb,"\r\n")}}):{name:b.name,value:c.replace(Sb,"\r\n")}}).get()}}),m.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&Zb()||$b()}:Zb;var Wb=0,Xb={},Yb=m.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Xb)Xb[a](void 0,!0)}),k.cors=!!Yb&&"withCredentials"in Yb,Yb=k.ajax=!!Yb,Yb&&m.ajaxTransport(function(a){if(!a.crossDomain||k.cors){var b;return{send:function(c,d){var e,f=a.xhr(),g=++Wb;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)void 0!==c[e]&&f.setRequestHeader(e,c[e]+"");f.send(a.hasContent&&a.data||null),b=function(c,e){var h,i,j;if(b&&(e||4===f.readyState))if(delete Xb[g],b=void 0,f.onreadystatechange=m.noop,e)4!==f.readyState&&f.abort();else{j={},h=f.status,"string"==typeof f.responseText&&(j.text=f.responseText);try{i=f.statusText}catch(k){i=""}h||!a.isLocal||a.crossDomain?1223===h&&(h=204):h=j.text?200:404}j&&d(h,i,j,f.getAllResponseHeaders())},a.async?4===f.readyState?setTimeout(b):f.onreadystatechange=Xb[g]=b:b()},abort:function(){b&&b(void 0,!0)}}}});function Zb(){try{return new a.XMLHttpRequest}catch(b){}}function $b(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}m.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return m.globalEval(a),a}}}),m.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),m.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=y.head||m("head")[0]||y.documentElement;return{send:function(d,e){b=y.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||e(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var _b=[],ac=/(=)\?(?=&|$)|\?\?/;m.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=_b.pop()||m.expando+"_"+vb++;return this[a]=!0,a}}),m.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(ac.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&ac.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=m.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(ac,"$1"+e):b.jsonp!==!1&&(b.url+=(wb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||m.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,_b.push(e)),g&&m.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),m.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||y;var d=u.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=m.buildFragment([a],b,e),e&&e.length&&m(e).remove(),m.merge([],d.childNodes))};var bc=m.fn.load;m.fn.load=function(a,b,c){if("string"!=typeof a&&bc)return bc.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=m.trim(a.slice(h,a.length)),a=a.slice(0,h)),m.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(f="POST"),g.length>0&&m.ajax({url:a,type:f,dataType:"html",data:b}).done(function(a){e=arguments,g.html(d?m("<div>").append(m.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,e||[a.responseText,b,a])}),this},m.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){m.fn[b]=function(a){return this.on(b,a)}}),m.expr.filters.animated=function(a){return m.grep(m.timers,function(b){return a===b.elem}).length};var cc=a.document.documentElement;function dc(a){return m.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}m.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=m.css(a,"position"),l=m(a),n={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=m.css(a,"top"),i=m.css(a,"left"),j=("absolute"===k||"fixed"===k)&&m.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),m.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(n.top=b.top-h.top+g),null!=b.left&&(n.left=b.left-h.left+e),"using"in b?b.using.call(a,n):l.css(n)}},m.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){m.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,m.contains(b,e)?(typeof e.getBoundingClientRect!==K&&(d=e.getBoundingClientRect()),c=dc(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===m.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),m.nodeName(a[0],"html")||(c=a.offset()),c.top+=m.css(a[0],"borderTopWidth",!0),c.left+=m.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-m.css(d,"marginTop",!0),left:b.left-c.left-m.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||cc;while(a&&!m.nodeName(a,"html")&&"static"===m.css(a,"position"))a=a.offsetParent;return a||cc})}}),m.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);m.fn[a]=function(d){return V(this,function(a,d,e){var f=dc(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?m(f).scrollLeft():e,c?e:m(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),m.each(["top","left"],function(a,b){m.cssHooks[b]=La(k.pixelPosition,function(a,c){return c?(c=Ja(a,b),Ha.test(c)?m(a).position()[b]+"px":c):void 0})}),m.each({Height:"height",Width:"width"},function(a,b){m.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){m.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return V(this,function(b,c,d){var e;return m.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?m.css(b,c,g):m.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),m.fn.size=function(){return this.length},m.fn.andSelf=m.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return m});var ec=a.jQuery,fc=a.$;return m.noConflict=function(b){return a.$===m&&(a.$=fc),b&&a.jQuery===m&&(a.jQuery=ec),m},typeof b===K&&(a.jQuery=a.$=m),m});

/* Copyright 2012 Mozilla Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(function (root, factory) {
 'use strict';
 if (typeof define === 'function' && define.amd) {
  define('pdfjs-dist/build/pdf', ['exports'], factory);
 } else if (typeof exports !== 'undefined') {
  factory(exports);
 } else {
  factory(root['pdfjsDistBuildPdf'] = {});
 }
}(this, function (exports) {
 'use strict';
 var pdfjsVersion = '1.6.444';
 var pdfjsBuild = '00ab0abd';
 var pdfjsFilePath = typeof document !== 'undefined' && document.currentScript ? document.currentScript.src : null;
 var pdfjsLibs = {};
 (function pdfjsWrapper() {
  (function (root, factory) {
   factory(root.pdfjsSharedUtil = {});
  }(this, function (exports) {
   var globalScope = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : this;
   var FONT_IDENTITY_MATRIX = [
    0.001,
    0,
    0,
    0.001,
    0,
    0
   ];
   var TextRenderingMode = {
    FILL: 0,
    STROKE: 1,
    FILL_STROKE: 2,
    INVISIBLE: 3,
    FILL_ADD_TO_PATH: 4,
    STROKE_ADD_TO_PATH: 5,
    FILL_STROKE_ADD_TO_PATH: 6,
    ADD_TO_PATH: 7,
    FILL_STROKE_MASK: 3,
    ADD_TO_PATH_FLAG: 4
   };
   var ImageKind = {
    GRAYSCALE_1BPP: 1,
    RGB_24BPP: 2,
    RGBA_32BPP: 3
   };
   var AnnotationType = {
    TEXT: 1,
    LINK: 2,
    FREETEXT: 3,
    LINE: 4,
    SQUARE: 5,
    CIRCLE: 6,
    POLYGON: 7,
    POLYLINE: 8,
    HIGHLIGHT: 9,
    UNDERLINE: 10,
    SQUIGGLY: 11,
    STRIKEOUT: 12,
    STAMP: 13,
    CARET: 14,
    INK: 15,
    POPUP: 16,
    FILEATTACHMENT: 17,
    SOUND: 18,
    MOVIE: 19,
    WIDGET: 20,
    SCREEN: 21,
    PRINTERMARK: 22,
    TRAPNET: 23,
    WATERMARK: 24,
    THREED: 25,
    REDACT: 26
   };
   var AnnotationFlag = {
    INVISIBLE: 0x01,
    HIDDEN: 0x02,
    PRINT: 0x04,
    NOZOOM: 0x08,
    NOROTATE: 0x10,
    NOVIEW: 0x20,
    READONLY: 0x40,
    LOCKED: 0x80,
    TOGGLENOVIEW: 0x100,
    LOCKEDCONTENTS: 0x200
   };
   var AnnotationFieldFlag = {
    READONLY: 0x0000001,
    REQUIRED: 0x0000002,
    NOEXPORT: 0x0000004,
    MULTILINE: 0x0001000,
    PASSWORD: 0x0002000,
    NOTOGGLETOOFF: 0x0004000,
    RADIO: 0x0008000,
    PUSHBUTTON: 0x0010000,
    COMBO: 0x0020000,
    EDIT: 0x0040000,
    SORT: 0x0080000,
    FILESELECT: 0x0100000,
    MULTISELECT: 0x0200000,
    DONOTSPELLCHECK: 0x0400000,
    DONOTSCROLL: 0x0800000,
    COMB: 0x1000000,
    RICHTEXT: 0x2000000,
    RADIOSINUNISON: 0x2000000,
    COMMITONSELCHANGE: 0x4000000
   };
   var AnnotationBorderStyleType = {
    SOLID: 1,
    DASHED: 2,
    BEVELED: 3,
    INSET: 4,
    UNDERLINE: 5
   };
   var StreamType = {
    UNKNOWN: 0,
    FLATE: 1,
    LZW: 2,
    DCT: 3,
    JPX: 4,
    JBIG: 5,
    A85: 6,
    AHX: 7,
    CCF: 8,
    RL: 9
   };
   var FontType = {
    UNKNOWN: 0,
    TYPE1: 1,
    TYPE1C: 2,
    CIDFONTTYPE0: 3,
    CIDFONTTYPE0C: 4,
    TRUETYPE: 5,
    CIDFONTTYPE2: 6,
    TYPE3: 7,
    OPENTYPE: 8,
    TYPE0: 9,
    MMTYPE1: 10
   };
   var VERBOSITY_LEVELS = {
    errors: 0,
    warnings: 1,
    infos: 5
   };
   var OPS = {
    dependency: 1,
    setLineWidth: 2,
    setLineCap: 3,
    setLineJoin: 4,
    setMiterLimit: 5,
    setDash: 6,
    setRenderingIntent: 7,
    setFlatness: 8,
    setGState: 9,
    save: 10,
    restore: 11,
    transform: 12,
    moveTo: 13,
    lineTo: 14,
    curveTo: 15,
    curveTo2: 16,
    curveTo3: 17,
    closePath: 18,
    rectangle: 19,
    stroke: 20,
    closeStroke: 21,
    fill: 22,
    eoFill: 23,
    fillStroke: 24,
    eoFillStroke: 25,
    closeFillStroke: 26,
    closeEOFillStroke: 27,
    endPath: 28,
    clip: 29,
    eoClip: 30,
    beginText: 31,
    endText: 32,
    setCharSpacing: 33,
    setWordSpacing: 34,
    setHScale: 35,
    setLeading: 36,
    setFont: 37,
    setTextRenderingMode: 38,
    setTextRise: 39,
    moveText: 40,
    setLeadingMoveText: 41,
    setTextMatrix: 42,
    nextLine: 43,
    showText: 44,
    showSpacedText: 45,
    nextLineShowText: 46,
    nextLineSetSpacingShowText: 47,
    setCharWidth: 48,
    setCharWidthAndBounds: 49,
    setStrokeColorSpace: 50,
    setFillColorSpace: 51,
    setStrokeColor: 52,
    setStrokeColorN: 53,
    setFillColor: 54,
    setFillColorN: 55,
    setStrokeGray: 56,
    setFillGray: 57,
    setStrokeRGBColor: 58,
    setFillRGBColor: 59,
    setStrokeCMYKColor: 60,
    setFillCMYKColor: 61,
    shadingFill: 62,
    beginInlineImage: 63,
    beginImageData: 64,
    endInlineImage: 65,
    paintXObject: 66,
    markPoint: 67,
    markPointProps: 68,
    beginMarkedContent: 69,
    beginMarkedContentProps: 70,
    endMarkedContent: 71,
    beginCompat: 72,
    endCompat: 73,
    paintFormXObjectBegin: 74,
    paintFormXObjectEnd: 75,
    beginGroup: 76,
    endGroup: 77,
    beginAnnotations: 78,
    endAnnotations: 79,
    beginAnnotation: 80,
    endAnnotation: 81,
    paintJpegXObject: 82,
    paintImageMaskXObject: 83,
    paintImageMaskXObjectGroup: 84,
    paintImageXObject: 85,
    paintInlineImageXObject: 86,
    paintInlineImageXObjectGroup: 87,
    paintImageXObjectRepeat: 88,
    paintImageMaskXObjectRepeat: 89,
    paintSolidColorImageMask: 90,
    constructPath: 91
   };
   var verbosity = VERBOSITY_LEVELS.warnings;
   function setVerbosityLevel(level) {
    verbosity = level;
   }
   function getVerbosityLevel() {
    return verbosity;
   }
   function info(msg) {
    if (verbosity >= VERBOSITY_LEVELS.infos) {
     console.log('Info: ' + msg);
    }
   }
   function warn(msg) {
    if (verbosity >= VERBOSITY_LEVELS.warnings) {
     console.log('Warning: ' + msg);
    }
   }
   function deprecated(details) {
    console.log('Deprecated API usage: ' + details);
   }
   function error(msg) {
    if (verbosity >= VERBOSITY_LEVELS.errors) {
     console.log('Error: ' + msg);
     console.log(backtrace());
    }
    throw new Error(msg);
   }
   function backtrace() {
    try {
     throw new Error();
    } catch (e) {
     return e.stack ? e.stack.split('\n').slice(2).join('\n') : '';
    }
   }
   function assert(cond, msg) {
    if (!cond) {
     error(msg);
    }
   }
   var UNSUPPORTED_FEATURES = {
    unknown: 'unknown',
    forms: 'forms',
    javaScript: 'javaScript',
    smask: 'smask',
    shadingPattern: 'shadingPattern',
    font: 'font'
   };
   function isSameOrigin(baseUrl, otherUrl) {
    try {
     var base = new URL(baseUrl);
     if (!base.origin || base.origin === 'null') {
      return false;
     }
    } catch (e) {
     return false;
    }
    var other = new URL(otherUrl, base);
    return base.origin === other.origin;
   }
   function isValidProtocol(url) {
    if (!url) {
     return false;
    }
    switch (url.protocol) {
    case 'http:':
    case 'https:':
    case 'ftp:':
    case 'mailto:':
    case 'tel:':
     return true;
    default:
     return false;
    }
   }
   function createValidAbsoluteUrl(url, baseUrl) {
    if (!url) {
     return null;
    }
    try {
     var absoluteUrl = baseUrl ? new URL(url, baseUrl) : new URL(url);
     if (isValidProtocol(absoluteUrl)) {
      return absoluteUrl;
     }
    } catch (ex) {
    }
    return null;
   }
   function shadow(obj, prop, value) {
    Object.defineProperty(obj, prop, {
     value: value,
     enumerable: true,
     configurable: true,
     writable: false
    });
    return value;
   }
   function getLookupTableFactory(initializer) {
    var lookup;
    return function () {
     if (initializer) {
      lookup = Object.create(null);
      initializer(lookup);
      initializer = null;
     }
     return lookup;
    };
   }
   var PasswordResponses = {
    NEED_PASSWORD: 1,
    INCORRECT_PASSWORD: 2
   };
   var PasswordException = function PasswordExceptionClosure() {
    function PasswordException(msg, code) {
     this.name = 'PasswordException';
     this.message = msg;
     this.code = code;
    }
    PasswordException.prototype = new Error();
    PasswordException.constructor = PasswordException;
    return PasswordException;
   }();
   var UnknownErrorException = function UnknownErrorExceptionClosure() {
    function UnknownErrorException(msg, details) {
     this.name = 'UnknownErrorException';
     this.message = msg;
     this.details = details;
    }
    UnknownErrorException.prototype = new Error();
    UnknownErrorException.constructor = UnknownErrorException;
    return UnknownErrorException;
   }();
   var InvalidPDFException = function InvalidPDFExceptionClosure() {
    function InvalidPDFException(msg) {
     this.name = 'InvalidPDFException';
     this.message = msg;
    }
    InvalidPDFException.prototype = new Error();
    InvalidPDFException.constructor = InvalidPDFException;
    return InvalidPDFException;
   }();
   var MissingPDFException = function MissingPDFExceptionClosure() {
    function MissingPDFException(msg) {
     this.name = 'MissingPDFException';
     this.message = msg;
    }
    MissingPDFException.prototype = new Error();
    MissingPDFException.constructor = MissingPDFException;
    return MissingPDFException;
   }();
   var UnexpectedResponseException = function UnexpectedResponseExceptionClosure() {
    function UnexpectedResponseException(msg, status) {
     this.name = 'UnexpectedResponseException';
     this.message = msg;
     this.status = status;
    }
    UnexpectedResponseException.prototype = new Error();
    UnexpectedResponseException.constructor = UnexpectedResponseException;
    return UnexpectedResponseException;
   }();
   var NotImplementedException = function NotImplementedExceptionClosure() {
    function NotImplementedException(msg) {
     this.message = msg;
    }
    NotImplementedException.prototype = new Error();
    NotImplementedException.prototype.name = 'NotImplementedException';
    NotImplementedException.constructor = NotImplementedException;
    return NotImplementedException;
   }();
   var MissingDataException = function MissingDataExceptionClosure() {
    function MissingDataException(begin, end) {
     this.begin = begin;
     this.end = end;
     this.message = 'Missing data [' + begin + ', ' + end + ')';
    }
    MissingDataException.prototype = new Error();
    MissingDataException.prototype.name = 'MissingDataException';
    MissingDataException.constructor = MissingDataException;
    return MissingDataException;
   }();
   var XRefParseException = function XRefParseExceptionClosure() {
    function XRefParseException(msg) {
     this.message = msg;
    }
    XRefParseException.prototype = new Error();
    XRefParseException.prototype.name = 'XRefParseException';
    XRefParseException.constructor = XRefParseException;
    return XRefParseException;
   }();
   var NullCharactersRegExp = /\x00/g;
   function removeNullCharacters(str) {
    if (typeof str !== 'string') {
     warn('The argument for removeNullCharacters must be a string.');
     return str;
    }
    return str.replace(NullCharactersRegExp, '');
   }
   function bytesToString(bytes) {
    assert(bytes !== null && typeof bytes === 'object' && bytes.length !== undefined, 'Invalid argument for bytesToString');
    var length = bytes.length;
    var MAX_ARGUMENT_COUNT = 8192;
    if (length < MAX_ARGUMENT_COUNT) {
     return String.fromCharCode.apply(null, bytes);
    }
    var strBuf = [];
    for (var i = 0; i < length; i += MAX_ARGUMENT_COUNT) {
     var chunkEnd = Math.min(i + MAX_ARGUMENT_COUNT, length);
     var chunk = bytes.subarray(i, chunkEnd);
     strBuf.push(String.fromCharCode.apply(null, chunk));
    }
    return strBuf.join('');
   }
   function stringToBytes(str) {
    assert(typeof str === 'string', 'Invalid argument for stringToBytes');
    var length = str.length;
    var bytes = new Uint8Array(length);
    for (var i = 0; i < length; ++i) {
     bytes[i] = str.charCodeAt(i) & 0xFF;
    }
    return bytes;
   }
   function arrayByteLength(arr) {
    if (arr.length !== undefined) {
     return arr.length;
    }
    assert(arr.byteLength !== undefined);
    return arr.byteLength;
   }
   function arraysToBytes(arr) {
    if (arr.length === 1 && arr[0] instanceof Uint8Array) {
     return arr[0];
    }
    var resultLength = 0;
    var i, ii = arr.length;
    var item, itemLength;
    for (i = 0; i < ii; i++) {
     item = arr[i];
     itemLength = arrayByteLength(item);
     resultLength += itemLength;
    }
    var pos = 0;
    var data = new Uint8Array(resultLength);
    for (i = 0; i < ii; i++) {
     item = arr[i];
     if (!(item instanceof Uint8Array)) {
      if (typeof item === 'string') {
       item = stringToBytes(item);
      } else {
       item = new Uint8Array(item);
      }
     }
     itemLength = item.byteLength;
     data.set(item, pos);
     pos += itemLength;
    }
    return data;
   }
   function string32(value) {
    return String.fromCharCode(value >> 24 & 0xff, value >> 16 & 0xff, value >> 8 & 0xff, value & 0xff);
   }
   function log2(x) {
    var n = 1, i = 0;
    while (x > n) {
     n <<= 1;
     i++;
    }
    return i;
   }
   function readInt8(data, start) {
    return data[start] << 24 >> 24;
   }
   function readUint16(data, offset) {
    return data[offset] << 8 | data[offset + 1];
   }
   function readUint32(data, offset) {
    return (data[offset] << 24 | data[offset + 1] << 16 | data[offset + 2] << 8 | data[offset + 3]) >>> 0;
   }
   function isLittleEndian() {
    var buffer8 = new Uint8Array(2);
    buffer8[0] = 1;
    var buffer16 = new Uint16Array(buffer8.buffer);
    return buffer16[0] === 1;
   }
   function isEvalSupported() {
    try {
     new Function('');
     return true;
    } catch (e) {
     return false;
    }
   }
   var Uint32ArrayView = function Uint32ArrayViewClosure() {
    function Uint32ArrayView(buffer, length) {
     this.buffer = buffer;
     this.byteLength = buffer.length;
     this.length = length === undefined ? this.byteLength >> 2 : length;
     ensureUint32ArrayViewProps(this.length);
    }
    Uint32ArrayView.prototype = Object.create(null);
    var uint32ArrayViewSetters = 0;
    function createUint32ArrayProp(index) {
     return {
      get: function () {
       var buffer = this.buffer, offset = index << 2;
       return (buffer[offset] | buffer[offset + 1] << 8 | buffer[offset + 2] << 16 | buffer[offset + 3] << 24) >>> 0;
      },
      set: function (value) {
       var buffer = this.buffer, offset = index << 2;
       buffer[offset] = value & 255;
       buffer[offset + 1] = value >> 8 & 255;
       buffer[offset + 2] = value >> 16 & 255;
       buffer[offset + 3] = value >>> 24 & 255;
      }
     };
    }
    function ensureUint32ArrayViewProps(length) {
     while (uint32ArrayViewSetters < length) {
      Object.defineProperty(Uint32ArrayView.prototype, uint32ArrayViewSetters, createUint32ArrayProp(uint32ArrayViewSetters));
      uint32ArrayViewSetters++;
     }
    }
    return Uint32ArrayView;
   }();
   exports.Uint32ArrayView = Uint32ArrayView;
   var IDENTITY_MATRIX = [
    1,
    0,
    0,
    1,
    0,
    0
   ];
   var Util = function UtilClosure() {
    function Util() {
    }
    var rgbBuf = [
     'rgb(',
     0,
     ',',
     0,
     ',',
     0,
     ')'
    ];
    Util.makeCssRgb = function Util_makeCssRgb(r, g, b) {
     rgbBuf[1] = r;
     rgbBuf[3] = g;
     rgbBuf[5] = b;
     return rgbBuf.join('');
    };
    Util.transform = function Util_transform(m1, m2) {
     return [
      m1[0] * m2[0] + m1[2] * m2[1],
      m1[1] * m2[0] + m1[3] * m2[1],
      m1[0] * m2[2] + m1[2] * m2[3],
      m1[1] * m2[2] + m1[3] * m2[3],
      m1[0] * m2[4] + m1[2] * m2[5] + m1[4],
      m1[1] * m2[4] + m1[3] * m2[5] + m1[5]
     ];
    };
    Util.applyTransform = function Util_applyTransform(p, m) {
     var xt = p[0] * m[0] + p[1] * m[2] + m[4];
     var yt = p[0] * m[1] + p[1] * m[3] + m[5];
     return [
      xt,
      yt
     ];
    };
    Util.applyInverseTransform = function Util_applyInverseTransform(p, m) {
     var d = m[0] * m[3] - m[1] * m[2];
     var xt = (p[0] * m[3] - p[1] * m[2] + m[2] * m[5] - m[4] * m[3]) / d;
     var yt = (-p[0] * m[1] + p[1] * m[0] + m[4] * m[1] - m[5] * m[0]) / d;
     return [
      xt,
      yt
     ];
    };
    Util.getAxialAlignedBoundingBox = function Util_getAxialAlignedBoundingBox(r, m) {
     var p1 = Util.applyTransform(r, m);
     var p2 = Util.applyTransform(r.slice(2, 4), m);
     var p3 = Util.applyTransform([
      r[0],
      r[3]
     ], m);
     var p4 = Util.applyTransform([
      r[2],
      r[1]
     ], m);
     return [
      Math.min(p1[0], p2[0], p3[0], p4[0]),
      Math.min(p1[1], p2[1], p3[1], p4[1]),
      Math.max(p1[0], p2[0], p3[0], p4[0]),
      Math.max(p1[1], p2[1], p3[1], p4[1])
     ];
    };
    Util.inverseTransform = function Util_inverseTransform(m) {
     var d = m[0] * m[3] - m[1] * m[2];
     return [
      m[3] / d,
      -m[1] / d,
      -m[2] / d,
      m[0] / d,
      (m[2] * m[5] - m[4] * m[3]) / d,
      (m[4] * m[1] - m[5] * m[0]) / d
     ];
    };
    Util.apply3dTransform = function Util_apply3dTransform(m, v) {
     return [
      m[0] * v[0] + m[1] * v[1] + m[2] * v[2],
      m[3] * v[0] + m[4] * v[1] + m[5] * v[2],
      m[6] * v[0] + m[7] * v[1] + m[8] * v[2]
     ];
    };
    Util.singularValueDecompose2dScale = function Util_singularValueDecompose2dScale(m) {
     var transpose = [
      m[0],
      m[2],
      m[1],
      m[3]
     ];
     var a = m[0] * transpose[0] + m[1] * transpose[2];
     var b = m[0] * transpose[1] + m[1] * transpose[3];
     var c = m[2] * transpose[0] + m[3] * transpose[2];
     var d = m[2] * transpose[1] + m[3] * transpose[3];
     var first = (a + d) / 2;
     var second = Math.sqrt((a + d) * (a + d) - 4 * (a * d - c * b)) / 2;
     var sx = first + second || 1;
     var sy = first - second || 1;
     return [
      Math.sqrt(sx),
      Math.sqrt(sy)
     ];
    };
    Util.normalizeRect = function Util_normalizeRect(rect) {
     var r = rect.slice(0);
     if (rect[0] > rect[2]) {
      r[0] = rect[2];
      r[2] = rect[0];
     }
     if (rect[1] > rect[3]) {
      r[1] = rect[3];
      r[3] = rect[1];
     }
     return r;
    };
    Util.intersect = function Util_intersect(rect1, rect2) {
     function compare(a, b) {
      return a - b;
     }
     var orderedX = [
       rect1[0],
       rect1[2],
       rect2[0],
       rect2[2]
      ].sort(compare), orderedY = [
       rect1[1],
       rect1[3],
       rect2[1],
       rect2[3]
      ].sort(compare), result = [];
     rect1 = Util.normalizeRect(rect1);
     rect2 = Util.normalizeRect(rect2);
     if (orderedX[0] === rect1[0] && orderedX[1] === rect2[0] || orderedX[0] === rect2[0] && orderedX[1] === rect1[0]) {
      result[0] = orderedX[1];
      result[2] = orderedX[2];
     } else {
      return false;
     }
     if (orderedY[0] === rect1[1] && orderedY[1] === rect2[1] || orderedY[0] === rect2[1] && orderedY[1] === rect1[1]) {
      result[1] = orderedY[1];
      result[3] = orderedY[2];
     } else {
      return false;
     }
     return result;
    };
    Util.sign = function Util_sign(num) {
     return num < 0 ? -1 : 1;
    };
    var ROMAN_NUMBER_MAP = [
     '',
     'C',
     'CC',
     'CCC',
     'CD',
     'D',
     'DC',
     'DCC',
     'DCCC',
     'CM',
     '',
     'X',
     'XX',
     'XXX',
     'XL',
     'L',
     'LX',
     'LXX',
     'LXXX',
     'XC',
     '',
     'I',
     'II',
     'III',
     'IV',
     'V',
     'VI',
     'VII',
     'VIII',
     'IX'
    ];
    Util.toRoman = function Util_toRoman(number, lowerCase) {
     assert(isInt(number) && number > 0, 'The number should be a positive integer.');
     var pos, romanBuf = [];
     while (number >= 1000) {
      number -= 1000;
      romanBuf.push('M');
     }
     pos = number / 100 | 0;
     number %= 100;
     romanBuf.push(ROMAN_NUMBER_MAP[pos]);
     pos = number / 10 | 0;
     number %= 10;
     romanBuf.push(ROMAN_NUMBER_MAP[10 + pos]);
     romanBuf.push(ROMAN_NUMBER_MAP[20 + number]);
     var romanStr = romanBuf.join('');
     return lowerCase ? romanStr.toLowerCase() : romanStr;
    };
    Util.appendToArray = function Util_appendToArray(arr1, arr2) {
     Array.prototype.push.apply(arr1, arr2);
    };
    Util.prependToArray = function Util_prependToArray(arr1, arr2) {
     Array.prototype.unshift.apply(arr1, arr2);
    };
    Util.extendObj = function extendObj(obj1, obj2) {
     for (var key in obj2) {
      obj1[key] = obj2[key];
     }
    };
    Util.getInheritableProperty = function Util_getInheritableProperty(dict, name, getArray) {
     while (dict && !dict.has(name)) {
      dict = dict.get('Parent');
     }
     if (!dict) {
      return null;
     }
     return getArray ? dict.getArray(name) : dict.get(name);
    };
    Util.inherit = function Util_inherit(sub, base, prototype) {
     sub.prototype = Object.create(base.prototype);
     sub.prototype.constructor = sub;
     for (var prop in prototype) {
      sub.prototype[prop] = prototype[prop];
     }
    };
    Util.loadScript = function Util_loadScript(src, callback) {
     var script = document.createElement('script');
     var loaded = false;
     script.setAttribute('src', src);
     if (callback) {
      script.onload = function () {
       if (!loaded) {
        callback();
       }
       loaded = true;
      };
     }
     document.getElementsByTagName('head')[0].appendChild(script);
    };
    return Util;
   }();
   var PageViewport = function PageViewportClosure() {
    function PageViewport(viewBox, scale, rotation, offsetX, offsetY, dontFlip) {
     this.viewBox = viewBox;
     this.scale = scale;
     this.rotation = rotation;
     this.offsetX = offsetX;
     this.offsetY = offsetY;
     var centerX = (viewBox[2] + viewBox[0]) / 2;
     var centerY = (viewBox[3] + viewBox[1]) / 2;
     var rotateA, rotateB, rotateC, rotateD;
     rotation = rotation % 360;
     rotation = rotation < 0 ? rotation + 360 : rotation;
     switch (rotation) {
     case 180:
      rotateA = -1;
      rotateB = 0;
      rotateC = 0;
      rotateD = 1;
      break;
     case 90:
      rotateA = 0;
      rotateB = 1;
      rotateC = 1;
      rotateD = 0;
      break;
     case 270:
      rotateA = 0;
      rotateB = -1;
      rotateC = -1;
      rotateD = 0;
      break;
     default:
      rotateA = 1;
      rotateB = 0;
      rotateC = 0;
      rotateD = -1;
      break;
     }
     if (dontFlip) {
      rotateC = -rotateC;
      rotateD = -rotateD;
     }
     var offsetCanvasX, offsetCanvasY;
     var width, height;
     if (rotateA === 0) {
      offsetCanvasX = Math.abs(centerY - viewBox[1]) * scale + offsetX;
      offsetCanvasY = Math.abs(centerX - viewBox[0]) * scale + offsetY;
      width = Math.abs(viewBox[3] - viewBox[1]) * scale;
      height = Math.abs(viewBox[2] - viewBox[0]) * scale;
     } else {
      offsetCanvasX = Math.abs(centerX - viewBox[0]) * scale + offsetX;
      offsetCanvasY = Math.abs(centerY - viewBox[1]) * scale + offsetY;
      width = Math.abs(viewBox[2] - viewBox[0]) * scale;
      height = Math.abs(viewBox[3] - viewBox[1]) * scale;
     }
     this.transform = [
      rotateA * scale,
      rotateB * scale,
      rotateC * scale,
      rotateD * scale,
      offsetCanvasX - rotateA * scale * centerX - rotateC * scale * centerY,
      offsetCanvasY - rotateB * scale * centerX - rotateD * scale * centerY
     ];
     this.width = width;
     this.height = height;
     this.fontScale = scale;
    }
    PageViewport.prototype = {
     clone: function PageViewPort_clone(args) {
      args = args || {};
      var scale = 'scale' in args ? args.scale : this.scale;
      var rotation = 'rotation' in args ? args.rotation : this.rotation;
      return new PageViewport(this.viewBox.slice(), scale, rotation, this.offsetX, this.offsetY, args.dontFlip);
     },
     convertToViewportPoint: function PageViewport_convertToViewportPoint(x, y) {
      return Util.applyTransform([
       x,
       y
      ], this.transform);
     },
     convertToViewportRectangle: function PageViewport_convertToViewportRectangle(rect) {
      var tl = Util.applyTransform([
       rect[0],
       rect[1]
      ], this.transform);
      var br = Util.applyTransform([
       rect[2],
       rect[3]
      ], this.transform);
      return [
       tl[0],
       tl[1],
       br[0],
       br[1]
      ];
     },
     convertToPdfPoint: function PageViewport_convertToPdfPoint(x, y) {
      return Util.applyInverseTransform([
       x,
       y
      ], this.transform);
     }
    };
    return PageViewport;
   }();
   var PDFStringTranslateTable = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0x2D8,
    0x2C7,
    0x2C6,
    0x2D9,
    0x2DD,
    0x2DB,
    0x2DA,
    0x2DC,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0x2022,
    0x2020,
    0x2021,
    0x2026,
    0x2014,
    0x2013,
    0x192,
    0x2044,
    0x2039,
    0x203A,
    0x2212,
    0x2030,
    0x201E,
    0x201C,
    0x201D,
    0x2018,
    0x2019,
    0x201A,
    0x2122,
    0xFB01,
    0xFB02,
    0x141,
    0x152,
    0x160,
    0x178,
    0x17D,
    0x131,
    0x142,
    0x153,
    0x161,
    0x17E,
    0,
    0x20AC
   ];
   function stringToPDFString(str) {
    var i, n = str.length, strBuf = [];
    if (str[0] === '\xFE' && str[1] === '\xFF') {
     for (i = 2; i < n; i += 2) {
      strBuf.push(String.fromCharCode(str.charCodeAt(i) << 8 | str.charCodeAt(i + 1)));
     }
    } else {
     for (i = 0; i < n; ++i) {
      var code = PDFStringTranslateTable[str.charCodeAt(i)];
      strBuf.push(code ? String.fromCharCode(code) : str.charAt(i));
     }
    }
    return strBuf.join('');
   }
   function stringToUTF8String(str) {
    return decodeURIComponent(escape(str));
   }
   function utf8StringToString(str) {
    return unescape(encodeURIComponent(str));
   }
   function isEmptyObj(obj) {
    for (var key in obj) {
     return false;
    }
    return true;
   }
   function isBool(v) {
    return typeof v === 'boolean';
   }
   function isInt(v) {
    return typeof v === 'number' && (v | 0) === v;
   }
   function isNum(v) {
    return typeof v === 'number';
   }
   function isString(v) {
    return typeof v === 'string';
   }
   function isArray(v) {
    return v instanceof Array;
   }
   function isArrayBuffer(v) {
    return typeof v === 'object' && v !== null && v.byteLength !== undefined;
   }
   function isSpace(ch) {
    return ch === 0x20 || ch === 0x09 || ch === 0x0D || ch === 0x0A;
   }
   function createPromiseCapability() {
    var capability = {};
    capability.promise = new Promise(function (resolve, reject) {
     capability.resolve = resolve;
     capability.reject = reject;
    });
    return capability;
   }
   (function PromiseClosure() {
    if (globalScope.Promise) {
     if (typeof globalScope.Promise.all !== 'function') {
      globalScope.Promise.all = function (iterable) {
       var count = 0, results = [], resolve, reject;
       var promise = new globalScope.Promise(function (resolve_, reject_) {
        resolve = resolve_;
        reject = reject_;
       });
       iterable.forEach(function (p, i) {
        count++;
        p.then(function (result) {
         results[i] = result;
         count--;
         if (count === 0) {
          resolve(results);
         }
        }, reject);
       });
       if (count === 0) {
        resolve(results);
       }
       return promise;
      };
     }
     if (typeof globalScope.Promise.resolve !== 'function') {
      globalScope.Promise.resolve = function (value) {
       return new globalScope.Promise(function (resolve) {
        resolve(value);
       });
      };
     }
     if (typeof globalScope.Promise.reject !== 'function') {
      globalScope.Promise.reject = function (reason) {
       return new globalScope.Promise(function (resolve, reject) {
        reject(reason);
       });
      };
     }
     if (typeof globalScope.Promise.prototype.catch !== 'function') {
      globalScope.Promise.prototype.catch = function (onReject) {
       return globalScope.Promise.prototype.then(undefined, onReject);
      };
     }
     return;
    }
    var STATUS_PENDING = 0;
    var STATUS_RESOLVED = 1;
    var STATUS_REJECTED = 2;
    var REJECTION_TIMEOUT = 500;
    var HandlerManager = {
     handlers: [],
     running: false,
     unhandledRejections: [],
     pendingRejectionCheck: false,
     scheduleHandlers: function scheduleHandlers(promise) {
      if (promise._status === STATUS_PENDING) {
       return;
      }
      this.handlers = this.handlers.concat(promise._handlers);
      promise._handlers = [];
      if (this.running) {
       return;
      }
      this.running = true;
      setTimeout(this.runHandlers.bind(this), 0);
     },
     runHandlers: function runHandlers() {
      var RUN_TIMEOUT = 1;
      var timeoutAt = Date.now() + RUN_TIMEOUT;
      while (this.handlers.length > 0) {
       var handler = this.handlers.shift();
       var nextStatus = handler.thisPromise._status;
       var nextValue = handler.thisPromise._value;
       try {
        if (nextStatus === STATUS_RESOLVED) {
         if (typeof handler.onResolve === 'function') {
          nextValue = handler.onResolve(nextValue);
         }
        } else if (typeof handler.onReject === 'function') {
         nextValue = handler.onReject(nextValue);
         nextStatus = STATUS_RESOLVED;
         if (handler.thisPromise._unhandledRejection) {
          this.removeUnhandeledRejection(handler.thisPromise);
         }
        }
       } catch (ex) {
        nextStatus = STATUS_REJECTED;
        nextValue = ex;
       }
       handler.nextPromise._updateStatus(nextStatus, nextValue);
       if (Date.now() >= timeoutAt) {
        break;
       }
      }
      if (this.handlers.length > 0) {
       setTimeout(this.runHandlers.bind(this), 0);
       return;
      }
      this.running = false;
     },
     addUnhandledRejection: function addUnhandledRejection(promise) {
      this.unhandledRejections.push({
       promise: promise,
       time: Date.now()
      });
      this.scheduleRejectionCheck();
     },
     removeUnhandeledRejection: function removeUnhandeledRejection(promise) {
      promise._unhandledRejection = false;
      for (var i = 0; i < this.unhandledRejections.length; i++) {
       if (this.unhandledRejections[i].promise === promise) {
        this.unhandledRejections.splice(i);
        i--;
       }
      }
     },
     scheduleRejectionCheck: function scheduleRejectionCheck() {
      if (this.pendingRejectionCheck) {
       return;
      }
      this.pendingRejectionCheck = true;
      setTimeout(function rejectionCheck() {
       this.pendingRejectionCheck = false;
       var now = Date.now();
       for (var i = 0; i < this.unhandledRejections.length; i++) {
        if (now - this.unhandledRejections[i].time > REJECTION_TIMEOUT) {
         var unhandled = this.unhandledRejections[i].promise._value;
         var msg = 'Unhandled rejection: ' + unhandled;
         if (unhandled.stack) {
          msg += '\n' + unhandled.stack;
         }
         warn(msg);
         this.unhandledRejections.splice(i);
         i--;
        }
       }
       if (this.unhandledRejections.length) {
        this.scheduleRejectionCheck();
       }
      }.bind(this), REJECTION_TIMEOUT);
     }
    };
    var Promise = function Promise(resolver) {
     this._status = STATUS_PENDING;
     this._handlers = [];
     try {
      resolver.call(this, this._resolve.bind(this), this._reject.bind(this));
     } catch (e) {
      this._reject(e);
     }
    };
    Promise.all = function Promise_all(promises) {
     var resolveAll, rejectAll;
     var deferred = new Promise(function (resolve, reject) {
      resolveAll = resolve;
      rejectAll = reject;
     });
     var unresolved = promises.length;
     var results = [];
     if (unresolved === 0) {
      resolveAll(results);
      return deferred;
     }
     function reject(reason) {
      if (deferred._status === STATUS_REJECTED) {
       return;
      }
      results = [];
      rejectAll(reason);
     }
     for (var i = 0, ii = promises.length; i < ii; ++i) {
      var promise = promises[i];
      var resolve = function (i) {
       return function (value) {
        if (deferred._status === STATUS_REJECTED) {
         return;
        }
        results[i] = value;
        unresolved--;
        if (unresolved === 0) {
         resolveAll(results);
        }
       };
      }(i);
      if (Promise.isPromise(promise)) {
       promise.then(resolve, reject);
      } else {
       resolve(promise);
      }
     }
     return deferred;
    };
    Promise.isPromise = function Promise_isPromise(value) {
     return value && typeof value.then === 'function';
    };
    Promise.resolve = function Promise_resolve(value) {
     return new Promise(function (resolve) {
      resolve(value);
     });
    };
    Promise.reject = function Promise_reject(reason) {
     return new Promise(function (resolve, reject) {
      reject(reason);
     });
    };
    Promise.prototype = {
     _status: null,
     _value: null,
     _handlers: null,
     _unhandledRejection: null,
     _updateStatus: function Promise__updateStatus(status, value) {
      if (this._status === STATUS_RESOLVED || this._status === STATUS_REJECTED) {
       return;
      }
      if (status === STATUS_RESOLVED && Promise.isPromise(value)) {
       value.then(this._updateStatus.bind(this, STATUS_RESOLVED), this._updateStatus.bind(this, STATUS_REJECTED));
       return;
      }
      this._status = status;
      this._value = value;
      if (status === STATUS_REJECTED && this._handlers.length === 0) {
       this._unhandledRejection = true;
       HandlerManager.addUnhandledRejection(this);
      }
      HandlerManager.scheduleHandlers(this);
     },
     _resolve: function Promise_resolve(value) {
      this._updateStatus(STATUS_RESOLVED, value);
     },
     _reject: function Promise_reject(reason) {
      this._updateStatus(STATUS_REJECTED, reason);
     },
     then: function Promise_then(onResolve, onReject) {
      var nextPromise = new Promise(function (resolve, reject) {
       this.resolve = resolve;
       this.reject = reject;
      });
      this._handlers.push({
       thisPromise: this,
       onResolve: onResolve,
       onReject: onReject,
       nextPromise: nextPromise
      });
      HandlerManager.scheduleHandlers(this);
      return nextPromise;
     },
     catch: function Promise_catch(onReject) {
      return this.then(undefined, onReject);
     }
    };
    globalScope.Promise = Promise;
   }());
   (function WeakMapClosure() {
    if (globalScope.WeakMap) {
     return;
    }
    var id = 0;
    function WeakMap() {
     this.id = '$weakmap' + id++;
    }
    WeakMap.prototype = {
     has: function (obj) {
      return !!Object.getOwnPropertyDescriptor(obj, this.id);
     },
     get: function (obj, defaultValue) {
      return this.has(obj) ? obj[this.id] : defaultValue;
     },
     set: function (obj, value) {
      Object.defineProperty(obj, this.id, {
       value: value,
       enumerable: false,
       configurable: true
      });
     },
     delete: function (obj) {
      delete obj[this.id];
     }
    };
    globalScope.WeakMap = WeakMap;
   }());
   var StatTimer = function StatTimerClosure() {
    function rpad(str, pad, length) {
     while (str.length < length) {
      str += pad;
     }
     return str;
    }
    function StatTimer() {
     this.started = Object.create(null);
     this.times = [];
     this.enabled = true;
    }
    StatTimer.prototype = {
     time: function StatTimer_time(name) {
      if (!this.enabled) {
       return;
      }
      if (name in this.started) {
       warn('Timer is already running for ' + name);
      }
      this.started[name] = Date.now();
     },
     timeEnd: function StatTimer_timeEnd(name) {
      if (!this.enabled) {
       return;
      }
      if (!(name in this.started)) {
       warn('Timer has not been started for ' + name);
      }
      this.times.push({
       'name': name,
       'start': this.started[name],
       'end': Date.now()
      });
      delete this.started[name];
     },
     toString: function StatTimer_toString() {
      var i, ii;
      var times = this.times;
      var out = '';
      var longest = 0;
      for (i = 0, ii = times.length; i < ii; ++i) {
       var name = times[i]['name'];
       if (name.length > longest) {
        longest = name.length;
       }
      }
      for (i = 0, ii = times.length; i < ii; ++i) {
       var span = times[i];
       var duration = span.end - span.start;
       out += rpad(span['name'], ' ', longest) + ' ' + duration + 'ms\n';
      }
      return out;
     }
    };
    return StatTimer;
   }();
   var createBlob = function createBlob(data, contentType) {
    if (typeof Blob !== 'undefined') {
     return new Blob([data], { type: contentType });
    }
    warn('The "Blob" constructor is not supported.');
   };
   var createObjectURL = function createObjectURLClosure() {
    var digits = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
    return function createObjectURL(data, contentType, forceDataSchema) {
     if (!forceDataSchema && typeof URL !== 'undefined' && URL.createObjectURL) {
      var blob = createBlob(data, contentType);
      return URL.createObjectURL(blob);
     }
     var buffer = 'data:' + contentType + ';base64,';
     for (var i = 0, ii = data.length; i < ii; i += 3) {
      var b1 = data[i] & 0xFF;
      var b2 = data[i + 1] & 0xFF;
      var b3 = data[i + 2] & 0xFF;
      var d1 = b1 >> 2, d2 = (b1 & 3) << 4 | b2 >> 4;
      var d3 = i + 1 < ii ? (b2 & 0xF) << 2 | b3 >> 6 : 64;
      var d4 = i + 2 < ii ? b3 & 0x3F : 64;
      buffer += digits[d1] + digits[d2] + digits[d3] + digits[d4];
     }
     return buffer;
    };
   }();
   function MessageHandler(sourceName, targetName, comObj) {
    this.sourceName = sourceName;
    this.targetName = targetName;
    this.comObj = comObj;
    this.callbackIndex = 1;
    this.postMessageTransfers = true;
    var callbacksCapabilities = this.callbacksCapabilities = Object.create(null);
    var ah = this.actionHandler = Object.create(null);
    this._onComObjOnMessage = function messageHandlerComObjOnMessage(event) {
     var data = event.data;
     if (data.targetName !== this.sourceName) {
      return;
     }
     if (data.isReply) {
      var callbackId = data.callbackId;
      if (data.callbackId in callbacksCapabilities) {
       var callback = callbacksCapabilities[callbackId];
       delete callbacksCapabilities[callbackId];
       if ('error' in data) {
        callback.reject(data.error);
       } else {
        callback.resolve(data.data);
       }
      } else {
       error('Cannot resolve callback ' + callbackId);
      }
     } else if (data.action in ah) {
      var action = ah[data.action];
      if (data.callbackId) {
       var sourceName = this.sourceName;
       var targetName = data.sourceName;
       Promise.resolve().then(function () {
        return action[0].call(action[1], data.data);
       }).then(function (result) {
        comObj.postMessage({
         sourceName: sourceName,
         targetName: targetName,
         isReply: true,
         callbackId: data.callbackId,
         data: result
        });
       }, function (reason) {
        if (reason instanceof Error) {
         reason = reason + '';
        }
        comObj.postMessage({
         sourceName: sourceName,
         targetName: targetName,
         isReply: true,
         callbackId: data.callbackId,
         error: reason
        });
       });
      } else {
       action[0].call(action[1], data.data);
      }
     } else {
      error('Unknown action from worker: ' + data.action);
     }
    }.bind(this);
    comObj.addEventListener('message', this._onComObjOnMessage);
   }
   MessageHandler.prototype = {
    on: function messageHandlerOn(actionName, handler, scope) {
     var ah = this.actionHandler;
     if (ah[actionName]) {
      error('There is already an actionName called "' + actionName + '"');
     }
     ah[actionName] = [
      handler,
      scope
     ];
    },
    send: function messageHandlerSend(actionName, data, transfers) {
     var message = {
      sourceName: this.sourceName,
      targetName: this.targetName,
      action: actionName,
      data: data
     };
     this.postMessage(message, transfers);
    },
    sendWithPromise: function messageHandlerSendWithPromise(actionName, data, transfers) {
     var callbackId = this.callbackIndex++;
     var message = {
      sourceName: this.sourceName,
      targetName: this.targetName,
      action: actionName,
      data: data,
      callbackId: callbackId
     };
     var capability = createPromiseCapability();
     this.callbacksCapabilities[callbackId] = capability;
     try {
      this.postMessage(message, transfers);
     } catch (e) {
      capability.reject(e);
     }
     return capability.promise;
    },
    postMessage: function (message, transfers) {
     if (transfers && this.postMessageTransfers) {
      this.comObj.postMessage(message, transfers);
     } else {
      this.comObj.postMessage(message);
     }
    },
    destroy: function () {
     this.comObj.removeEventListener('message', this._onComObjOnMessage);
    }
   };
   function loadJpegStream(id, imageUrl, objs) {
    var img = new Image();
    img.onload = function loadJpegStream_onloadClosure() {
     objs.resolve(id, img);
    };
    img.onerror = function loadJpegStream_onerrorClosure() {
     objs.resolve(id, null);
     warn('Error during JPEG image loading');
    };
    img.src = imageUrl;
   }
   /* Any copyright is dedicated to the Public Domain.
    * http://creativecommons.org/publicdomain/zero/1.0/ */
   (function checkURLConstructor(scope) {
    var hasWorkingUrl = false;
    try {
     if (typeof URL === 'function' && typeof URL.prototype === 'object' && 'origin' in URL.prototype) {
      var u = new URL('b', 'http://a');
      u.pathname = 'c%20d';
      hasWorkingUrl = u.href === 'http://a/c%20d';
     }
    } catch (e) {
    }
    if (hasWorkingUrl) {
     return;
    }
    var relative = Object.create(null);
    relative['ftp'] = 21;
    relative['file'] = 0;
    relative['gopher'] = 70;
    relative['http'] = 80;
    relative['https'] = 443;
    relative['ws'] = 80;
    relative['wss'] = 443;
    var relativePathDotMapping = Object.create(null);
    relativePathDotMapping['%2e'] = '.';
    relativePathDotMapping['.%2e'] = '..';
    relativePathDotMapping['%2e.'] = '..';
    relativePathDotMapping['%2e%2e'] = '..';
    function isRelativeScheme(scheme) {
     return relative[scheme] !== undefined;
    }
    function invalid() {
     clear.call(this);
     this._isInvalid = true;
    }
    function IDNAToASCII(h) {
     if ('' === h) {
      invalid.call(this);
     }
     return h.toLowerCase();
    }
    function percentEscape(c) {
     var unicode = c.charCodeAt(0);
     if (unicode > 0x20 && unicode < 0x7F && [
       0x22,
       0x23,
       0x3C,
       0x3E,
       0x3F,
       0x60
      ].indexOf(unicode) === -1) {
      return c;
     }
     return encodeURIComponent(c);
    }
    function percentEscapeQuery(c) {
     var unicode = c.charCodeAt(0);
     if (unicode > 0x20 && unicode < 0x7F && [
       0x22,
       0x23,
       0x3C,
       0x3E,
       0x60
      ].indexOf(unicode) === -1) {
      return c;
     }
     return encodeURIComponent(c);
    }
    var EOF, ALPHA = /[a-zA-Z]/, ALPHANUMERIC = /[a-zA-Z0-9\+\-\.]/;
    function parse(input, stateOverride, base) {
     function err(message) {
      errors.push(message);
     }
     var state = stateOverride || 'scheme start', cursor = 0, buffer = '', seenAt = false, seenBracket = false, errors = [];
     loop:
      while ((input[cursor - 1] !== EOF || cursor === 0) && !this._isInvalid) {
       var c = input[cursor];
       switch (state) {
       case 'scheme start':
        if (c && ALPHA.test(c)) {
         buffer += c.toLowerCase();
         state = 'scheme';
        } else if (!stateOverride) {
         buffer = '';
         state = 'no scheme';
         continue;
        } else {
         err('Invalid scheme.');
         break loop;
        }
        break;
       case 'scheme':
        if (c && ALPHANUMERIC.test(c)) {
         buffer += c.toLowerCase();
        } else if (':' === c) {
         this._scheme = buffer;
         buffer = '';
         if (stateOverride) {
          break loop;
         }
         if (isRelativeScheme(this._scheme)) {
          this._isRelative = true;
         }
         if ('file' === this._scheme) {
          state = 'relative';
         } else if (this._isRelative && base && base._scheme === this._scheme) {
          state = 'relative or authority';
         } else if (this._isRelative) {
          state = 'authority first slash';
         } else {
          state = 'scheme data';
         }
        } else if (!stateOverride) {
         buffer = '';
         cursor = 0;
         state = 'no scheme';
         continue;
        } else if (EOF === c) {
         break loop;
        } else {
         err('Code point not allowed in scheme: ' + c);
         break loop;
        }
        break;
       case 'scheme data':
        if ('?' === c) {
         this._query = '?';
         state = 'query';
        } else if ('#' === c) {
         this._fragment = '#';
         state = 'fragment';
        } else {
         if (EOF !== c && '\t' !== c && '\n' !== c && '\r' !== c) {
          this._schemeData += percentEscape(c);
         }
        }
        break;
       case 'no scheme':
        if (!base || !isRelativeScheme(base._scheme)) {
         err('Missing scheme.');
         invalid.call(this);
        } else {
         state = 'relative';
         continue;
        }
        break;
       case 'relative or authority':
        if ('/' === c && '/' === input[cursor + 1]) {
         state = 'authority ignore slashes';
        } else {
         err('Expected /, got: ' + c);
         state = 'relative';
         continue;
        }
        break;
       case 'relative':
        this._isRelative = true;
        if ('file' !== this._scheme) {
         this._scheme = base._scheme;
        }
        if (EOF === c) {
         this._host = base._host;
         this._port = base._port;
         this._path = base._path.slice();
         this._query = base._query;
         this._username = base._username;
         this._password = base._password;
         break loop;
        } else if ('/' === c || '\\' === c) {
         if ('\\' === c) {
          err('\\ is an invalid code point.');
         }
         state = 'relative slash';
        } else if ('?' === c) {
         this._host = base._host;
         this._port = base._port;
         this._path = base._path.slice();
         this._query = '?';
         this._username = base._username;
         this._password = base._password;
         state = 'query';
        } else if ('#' === c) {
         this._host = base._host;
         this._port = base._port;
         this._path = base._path.slice();
         this._query = base._query;
         this._fragment = '#';
         this._username = base._username;
         this._password = base._password;
         state = 'fragment';
        } else {
         var nextC = input[cursor + 1];
         var nextNextC = input[cursor + 2];
         if ('file' !== this._scheme || !ALPHA.test(c) || nextC !== ':' && nextC !== '|' || EOF !== nextNextC && '/' !== nextNextC && '\\' !== nextNextC && '?' !== nextNextC && '#' !== nextNextC) {
          this._host = base._host;
          this._port = base._port;
          this._username = base._username;
          this._password = base._password;
          this._path = base._path.slice();
          this._path.pop();
         }
         state = 'relative path';
         continue;
        }
        break;
       case 'relative slash':
        if ('/' === c || '\\' === c) {
         if ('\\' === c) {
          err('\\ is an invalid code point.');
         }
         if ('file' === this._scheme) {
          state = 'file host';
         } else {
          state = 'authority ignore slashes';
         }
        } else {
         if ('file' !== this._scheme) {
          this._host = base._host;
          this._port = base._port;
          this._username = base._username;
          this._password = base._password;
         }
         state = 'relative path';
         continue;
        }
        break;
       case 'authority first slash':
        if ('/' === c) {
         state = 'authority second slash';
        } else {
         err('Expected \'/\', got: ' + c);
         state = 'authority ignore slashes';
         continue;
        }
        break;
       case 'authority second slash':
        state = 'authority ignore slashes';
        if ('/' !== c) {
         err('Expected \'/\', got: ' + c);
         continue;
        }
        break;
       case 'authority ignore slashes':
        if ('/' !== c && '\\' !== c) {
         state = 'authority';
         continue;
        } else {
         err('Expected authority, got: ' + c);
        }
        break;
       case 'authority':
        if ('@' === c) {
         if (seenAt) {
          err('@ already seen.');
          buffer += '%40';
         }
         seenAt = true;
         for (var i = 0; i < buffer.length; i++) {
          var cp = buffer[i];
          if ('\t' === cp || '\n' === cp || '\r' === cp) {
           err('Invalid whitespace in authority.');
           continue;
          }
          if (':' === cp && null === this._password) {
           this._password = '';
           continue;
          }
          var tempC = percentEscape(cp);
          if (null !== this._password) {
           this._password += tempC;
          } else {
           this._username += tempC;
          }
         }
         buffer = '';
        } else if (EOF === c || '/' === c || '\\' === c || '?' === c || '#' === c) {
         cursor -= buffer.length;
         buffer = '';
         state = 'host';
         continue;
        } else {
         buffer += c;
        }
        break;
       case 'file host':
        if (EOF === c || '/' === c || '\\' === c || '?' === c || '#' === c) {
         if (buffer.length === 2 && ALPHA.test(buffer[0]) && (buffer[1] === ':' || buffer[1] === '|')) {
          state = 'relative path';
         } else if (buffer.length === 0) {
          state = 'relative path start';
         } else {
          this._host = IDNAToASCII.call(this, buffer);
          buffer = '';
          state = 'relative path start';
         }
         continue;
        } else if ('\t' === c || '\n' === c || '\r' === c) {
         err('Invalid whitespace in file host.');
        } else {
         buffer += c;
        }
        break;
       case 'host':
       case 'hostname':
        if (':' === c && !seenBracket) {
         this._host = IDNAToASCII.call(this, buffer);
         buffer = '';
         state = 'port';
         if ('hostname' === stateOverride) {
          break loop;
         }
        } else if (EOF === c || '/' === c || '\\' === c || '?' === c || '#' === c) {
         this._host = IDNAToASCII.call(this, buffer);
         buffer = '';
         state = 'relative path start';
         if (stateOverride) {
          break loop;
         }
         continue;
        } else if ('\t' !== c && '\n' !== c && '\r' !== c) {
         if ('[' === c) {
          seenBracket = true;
         } else if (']' === c) {
          seenBracket = false;
         }
         buffer += c;
        } else {
         err('Invalid code point in host/hostname: ' + c);
        }
        break;
       case 'port':
        if (/[0-9]/.test(c)) {
         buffer += c;
        } else if (EOF === c || '/' === c || '\\' === c || '?' === c || '#' === c || stateOverride) {
         if ('' !== buffer) {
          var temp = parseInt(buffer, 10);
          if (temp !== relative[this._scheme]) {
           this._port = temp + '';
          }
          buffer = '';
         }
         if (stateOverride) {
          break loop;
         }
         state = 'relative path start';
         continue;
        } else if ('\t' === c || '\n' === c || '\r' === c) {
         err('Invalid code point in port: ' + c);
        } else {
         invalid.call(this);
        }
        break;
       case 'relative path start':
        if ('\\' === c) {
         err('\'\\\' not allowed in path.');
        }
        state = 'relative path';
        if ('/' !== c && '\\' !== c) {
         continue;
        }
        break;
       case 'relative path':
        if (EOF === c || '/' === c || '\\' === c || !stateOverride && ('?' === c || '#' === c)) {
         if ('\\' === c) {
          err('\\ not allowed in relative path.');
         }
         var tmp;
         if (tmp = relativePathDotMapping[buffer.toLowerCase()]) {
          buffer = tmp;
         }
         if ('..' === buffer) {
          this._path.pop();
          if ('/' !== c && '\\' !== c) {
           this._path.push('');
          }
         } else if ('.' === buffer && '/' !== c && '\\' !== c) {
          this._path.push('');
         } else if ('.' !== buffer) {
          if ('file' === this._scheme && this._path.length === 0 && buffer.length === 2 && ALPHA.test(buffer[0]) && buffer[1] === '|') {
           buffer = buffer[0] + ':';
          }
          this._path.push(buffer);
         }
         buffer = '';
         if ('?' === c) {
          this._query = '?';
          state = 'query';
         } else if ('#' === c) {
          this._fragment = '#';
          state = 'fragment';
         }
        } else if ('\t' !== c && '\n' !== c && '\r' !== c) {
         buffer += percentEscape(c);
        }
        break;
       case 'query':
        if (!stateOverride && '#' === c) {
         this._fragment = '#';
         state = 'fragment';
        } else if (EOF !== c && '\t' !== c && '\n' !== c && '\r' !== c) {
         this._query += percentEscapeQuery(c);
        }
        break;
       case 'fragment':
        if (EOF !== c && '\t' !== c && '\n' !== c && '\r' !== c) {
         this._fragment += c;
        }
        break;
       }
       cursor++;
      }
    }
    function clear() {
     this._scheme = '';
     this._schemeData = '';
     this._username = '';
     this._password = null;
     this._host = '';
     this._port = '';
     this._path = [];
     this._query = '';
     this._fragment = '';
     this._isInvalid = false;
     this._isRelative = false;
    }
    function JURL(url, base)
     {
      if (base !== undefined && !(base instanceof JURL)) {
       base = new JURL(String(base));
      }
      this._url = url;
      clear.call(this);
      var input = url.replace(/^[ \t\r\n\f]+|[ \t\r\n\f]+$/g, '');
      parse.call(this, input, null, base);
     }
    JURL.prototype = {
     toString: function () {
      return this.href;
     },
     get href() {
      if (this._isInvalid) {
       return this._url;
      }
      var authority = '';
      if ('' !== this._username || null !== this._password) {
       authority = this._username + (null !== this._password ? ':' + this._password : '') + '@';
      }
      return this.protocol + (this._isRelative ? '//' + authority + this.host : '') + this.pathname + this._query + this._fragment;
     },
     set href(href) {
      clear.call(this);
      parse.call(this, href);
     },
     get protocol() {
      return this._scheme + ':';
     },
     set protocol(protocol) {
      if (this._isInvalid) {
       return;
      }
      parse.call(this, protocol + ':', 'scheme start');
     },
     get host() {
      return this._isInvalid ? '' : this._port ? this._host + ':' + this._port : this._host;
     },
     set host(host) {
      if (this._isInvalid || !this._isRelative) {
       return;
      }
      parse.call(this, host, 'host');
     },
     get hostname() {
      return this._host;
     },
     set hostname(hostname) {
      if (this._isInvalid || !this._isRelative) {
       return;
      }
      parse.call(this, hostname, 'hostname');
     },
     get port() {
      return this._port;
     },
     set port(port) {
      if (this._isInvalid || !this._isRelative) {
       return;
      }
      parse.call(this, port, 'port');
     },
     get pathname() {
      return this._isInvalid ? '' : this._isRelative ? '/' + this._path.join('/') : this._schemeData;
     },
     set pathname(pathname) {
      if (this._isInvalid || !this._isRelative) {
       return;
      }
      this._path = [];
      parse.call(this, pathname, 'relative path start');
     },
     get search() {
      return this._isInvalid || !this._query || '?' === this._query ? '' : this._query;
     },
     set search(search) {
      if (this._isInvalid || !this._isRelative) {
       return;
      }
      this._query = '?';
      if ('?' === search[0]) {
       search = search.slice(1);
      }
      parse.call(this, search, 'query');
     },
     get hash() {
      return this._isInvalid || !this._fragment || '#' === this._fragment ? '' : this._fragment;
     },
     set hash(hash) {
      if (this._isInvalid) {
       return;
      }
      this._fragment = '#';
      if ('#' === hash[0]) {
       hash = hash.slice(1);
      }
      parse.call(this, hash, 'fragment');
     },
     get origin() {
      var host;
      if (this._isInvalid || !this._scheme) {
       return '';
      }
      switch (this._scheme) {
      case 'data':
      case 'file':
      case 'javascript':
      case 'mailto':
       return 'null';
      }
      host = this.host;
      if (!host) {
       return '';
      }
      return this._scheme + '://' + host;
     }
    };
    var OriginalURL = scope.URL;
    if (OriginalURL) {
     JURL.createObjectURL = function (blob) {
      return OriginalURL.createObjectURL.apply(OriginalURL, arguments);
     };
     JURL.revokeObjectURL = function (url) {
      OriginalURL.revokeObjectURL(url);
     };
    }
    scope.URL = JURL;
   }(globalScope));
   exports.FONT_IDENTITY_MATRIX = FONT_IDENTITY_MATRIX;
   exports.IDENTITY_MATRIX = IDENTITY_MATRIX;
   exports.OPS = OPS;
   exports.VERBOSITY_LEVELS = VERBOSITY_LEVELS;
   exports.UNSUPPORTED_FEATURES = UNSUPPORTED_FEATURES;
   exports.AnnotationBorderStyleType = AnnotationBorderStyleType;
   exports.AnnotationFieldFlag = AnnotationFieldFlag;
   exports.AnnotationFlag = AnnotationFlag;
   exports.AnnotationType = AnnotationType;
   exports.FontType = FontType;
   exports.ImageKind = ImageKind;
   exports.InvalidPDFException = InvalidPDFException;
   exports.MessageHandler = MessageHandler;
   exports.MissingDataException = MissingDataException;
   exports.MissingPDFException = MissingPDFException;
   exports.NotImplementedException = NotImplementedException;
   exports.PageViewport = PageViewport;
   exports.PasswordException = PasswordException;
   exports.PasswordResponses = PasswordResponses;
   exports.StatTimer = StatTimer;
   exports.StreamType = StreamType;
   exports.TextRenderingMode = TextRenderingMode;
   exports.UnexpectedResponseException = UnexpectedResponseException;
   exports.UnknownErrorException = UnknownErrorException;
   exports.Util = Util;
   exports.XRefParseException = XRefParseException;
   exports.arrayByteLength = arrayByteLength;
   exports.arraysToBytes = arraysToBytes;
   exports.assert = assert;
   exports.bytesToString = bytesToString;
   exports.createBlob = createBlob;
   exports.createPromiseCapability = createPromiseCapability;
   exports.createObjectURL = createObjectURL;
   exports.deprecated = deprecated;
   exports.error = error;
   exports.getLookupTableFactory = getLookupTableFactory;
   exports.getVerbosityLevel = getVerbosityLevel;
   exports.globalScope = globalScope;
   exports.info = info;
   exports.isArray = isArray;
   exports.isArrayBuffer = isArrayBuffer;
   exports.isBool = isBool;
   exports.isEmptyObj = isEmptyObj;
   exports.isInt = isInt;
   exports.isNum = isNum;
   exports.isString = isString;
   exports.isSpace = isSpace;
   exports.isSameOrigin = isSameOrigin;
   exports.createValidAbsoluteUrl = createValidAbsoluteUrl;
   exports.isLittleEndian = isLittleEndian;
   exports.isEvalSupported = isEvalSupported;
   exports.loadJpegStream = loadJpegStream;
   exports.log2 = log2;
   exports.readInt8 = readInt8;
   exports.readUint16 = readUint16;
   exports.readUint32 = readUint32;
   exports.removeNullCharacters = removeNullCharacters;
   exports.setVerbosityLevel = setVerbosityLevel;
   exports.shadow = shadow;
   exports.string32 = string32;
   exports.stringToBytes = stringToBytes;
   exports.stringToPDFString = stringToPDFString;
   exports.stringToUTF8String = stringToUTF8String;
   exports.utf8StringToString = utf8StringToString;
   exports.warn = warn;
  }));
  (function (root, factory) {
   factory(root.pdfjsDisplayDOMUtils = {}, root.pdfjsSharedUtil);
  }(this, function (exports, sharedUtil) {
   var removeNullCharacters = sharedUtil.removeNullCharacters;
   var warn = sharedUtil.warn;
   var deprecated = sharedUtil.deprecated;
   var createValidAbsoluteUrl = sharedUtil.createValidAbsoluteUrl;
   var CustomStyle = function CustomStyleClosure() {
    var prefixes = [
     'ms',
     'Moz',
     'Webkit',
     'O'
    ];
    var _cache = Object.create(null);
    function CustomStyle() {
    }
    CustomStyle.getProp = function get(propName, element) {
     if (arguments.length === 1 && typeof _cache[propName] === 'string') {
      return _cache[propName];
     }
     element = element || document.documentElement;
     var style = element.style, prefixed, uPropName;
     if (typeof style[propName] === 'string') {
      return _cache[propName] = propName;
     }
     uPropName = propName.charAt(0).toUpperCase() + propName.slice(1);
     for (var i = 0, l = prefixes.length; i < l; i++) {
      prefixed = prefixes[i] + uPropName;
      if (typeof style[prefixed] === 'string') {
       return _cache[propName] = prefixed;
      }
     }
     return _cache[propName] = 'undefined';
    };
    CustomStyle.setProp = function set(propName, element, str) {
     var prop = this.getProp(propName);
     if (prop !== 'undefined') {
      element.style[prop] = str;
     }
    };
    return CustomStyle;
   }();
   var hasCanvasTypedArrays;
   hasCanvasTypedArrays = function hasCanvasTypedArrays() {
    var canvas = document.createElement('canvas');
    canvas.width = canvas.height = 1;
    var ctx = canvas.getContext('2d');
    var imageData = ctx.createImageData(1, 1);
    return typeof imageData.data.buffer !== 'undefined';
   };
   var LinkTarget = {
    NONE: 0,
    SELF: 1,
    BLANK: 2,
    PARENT: 3,
    TOP: 4
   };
   var LinkTargetStringMap = [
    '',
    '_self',
    '_blank',
    '_parent',
    '_top'
   ];
   function addLinkAttributes(link, params) {
    var url = params && params.url;
    link.href = link.title = url ? removeNullCharacters(url) : '';
    if (url) {
     var target = params.target;
     if (typeof target === 'undefined') {
      target = getDefaultSetting('externalLinkTarget');
     }
     link.target = LinkTargetStringMap[target];
     var rel = params.rel;
     if (typeof rel === 'undefined') {
      rel = getDefaultSetting('externalLinkRel');
     }
     link.rel = rel;
    }
   }
   function getFilenameFromUrl(url) {
    var anchor = url.indexOf('#');
    var query = url.indexOf('?');
    var end = Math.min(anchor > 0 ? anchor : url.length, query > 0 ? query : url.length);
    return url.substring(url.lastIndexOf('/', end) + 1, end);
   }
   function getDefaultSetting(id) {
    var globalSettings = sharedUtil.globalScope.PDFJS;
    switch (id) {
    case 'pdfBug':
     return globalSettings ? globalSettings.pdfBug : false;
    case 'disableAutoFetch':
     return globalSettings ? globalSettings.disableAutoFetch : false;
    case 'disableStream':
     return globalSettings ? globalSettings.disableStream : false;
    case 'disableRange':
     return globalSettings ? globalSettings.disableRange : false;
    case 'disableFontFace':
     return globalSettings ? globalSettings.disableFontFace : false;
    case 'disableCreateObjectURL':
     return globalSettings ? globalSettings.disableCreateObjectURL : false;
    case 'disableWebGL':
     return globalSettings ? globalSettings.disableWebGL : true;
    case 'cMapUrl':
     return globalSettings ? globalSettings.cMapUrl : null;
    case 'cMapPacked':
     return globalSettings ? globalSettings.cMapPacked : false;
    case 'postMessageTransfers':
     return globalSettings ? globalSettings.postMessageTransfers : true;
    case 'workerSrc':
     return globalSettings ? globalSettings.workerSrc : null;
    case 'disableWorker':
     return globalSettings ? globalSettings.disableWorker : false;
    case 'maxImageSize':
     return globalSettings ? globalSettings.maxImageSize : -1;
    case 'imageResourcesPath':
     return globalSettings ? globalSettings.imageResourcesPath : '';
    case 'isEvalSupported':
     return globalSettings ? globalSettings.isEvalSupported : true;
    case 'externalLinkTarget':
     if (!globalSettings) {
      return LinkTarget.NONE;
     }
     switch (globalSettings.externalLinkTarget) {
     case LinkTarget.NONE:
     case LinkTarget.SELF:
     case LinkTarget.BLANK:
     case LinkTarget.PARENT:
     case LinkTarget.TOP:
      return globalSettings.externalLinkTarget;
     }
     warn('PDFJS.externalLinkTarget is invalid: ' + globalSettings.externalLinkTarget);
     globalSettings.externalLinkTarget = LinkTarget.NONE;
     return LinkTarget.NONE;
    case 'externalLinkRel':
     return globalSettings ? globalSettings.externalLinkRel : 'noreferrer';
    case 'enableStats':
     return !!(globalSettings && globalSettings.enableStats);
    default:
     throw new Error('Unknown default setting: ' + id);
    }
   }
   function isExternalLinkTargetSet() {
    var externalLinkTarget = getDefaultSetting('externalLinkTarget');
    switch (externalLinkTarget) {
    case LinkTarget.NONE:
     return false;
    case LinkTarget.SELF:
    case LinkTarget.BLANK:
    case LinkTarget.PARENT:
    case LinkTarget.TOP:
     return true;
    }
   }
   function isValidUrl(url, allowRelative) {
    deprecated('isValidUrl(), please use createValidAbsoluteUrl() instead.');
    var baseUrl = allowRelative ? 'http://example.com' : null;
    return createValidAbsoluteUrl(url, baseUrl) !== null;
   }
   exports.CustomStyle = CustomStyle;
   exports.addLinkAttributes = addLinkAttributes;
   exports.isExternalLinkTargetSet = isExternalLinkTargetSet;
   exports.isValidUrl = isValidUrl;
   exports.getFilenameFromUrl = getFilenameFromUrl;
   exports.LinkTarget = LinkTarget;
   exports.hasCanvasTypedArrays = hasCanvasTypedArrays;
   exports.getDefaultSetting = getDefaultSetting;
  }));
  (function (root, factory) {
   factory(root.pdfjsDisplayFontLoader = {}, root.pdfjsSharedUtil);
  }(this, function (exports, sharedUtil) {
   var assert = sharedUtil.assert;
   var bytesToString = sharedUtil.bytesToString;
   var string32 = sharedUtil.string32;
   var shadow = sharedUtil.shadow;
   var warn = sharedUtil.warn;
   function FontLoader(docId) {
    this.docId = docId;
    this.styleElement = null;
    this.nativeFontFaces = [];
    this.loadTestFontId = 0;
    this.loadingContext = {
     requests: [],
     nextRequestId: 0
    };
   }
   FontLoader.prototype = {
    insertRule: function fontLoaderInsertRule(rule) {
     var styleElement = this.styleElement;
     if (!styleElement) {
      styleElement = this.styleElement = document.createElement('style');
      styleElement.id = 'PDFJS_FONT_STYLE_TAG_' + this.docId;
      document.documentElement.getElementsByTagName('head')[0].appendChild(styleElement);
     }
     var styleSheet = styleElement.sheet;
     styleSheet.insertRule(rule, styleSheet.cssRules.length);
    },
    clear: function fontLoaderClear() {
     var styleElement = this.styleElement;
     if (styleElement) {
      styleElement.parentNode.removeChild(styleElement);
      styleElement = this.styleElement = null;
     }
     this.nativeFontFaces.forEach(function (nativeFontFace) {
      document.fonts.delete(nativeFontFace);
     });
     this.nativeFontFaces.length = 0;
    }
   };
   var getLoadTestFont = function () {
    return atob('T1RUTwALAIAAAwAwQ0ZGIDHtZg4AAAOYAAAAgUZGVE1lkzZwAAAEHAAAABxHREVGABQAFQ' + 'AABDgAAAAeT1MvMlYNYwkAAAEgAAAAYGNtYXABDQLUAAACNAAAAUJoZWFk/xVFDQAAALwA' + 'AAA2aGhlYQdkA+oAAAD0AAAAJGhtdHgD6AAAAAAEWAAAAAZtYXhwAAJQAAAAARgAAAAGbm' + 'FtZVjmdH4AAAGAAAAAsXBvc3T/hgAzAAADeAAAACAAAQAAAAEAALZRFsRfDzz1AAsD6AAA' + 'AADOBOTLAAAAAM4KHDwAAAAAA+gDIQAAAAgAAgAAAAAAAAABAAADIQAAAFoD6AAAAAAD6A' + 'ABAAAAAAAAAAAAAAAAAAAAAQAAUAAAAgAAAAQD6AH0AAUAAAKKArwAAACMAooCvAAAAeAA' + 'MQECAAACAAYJAAAAAAAAAAAAAQAAAAAAAAAAAAAAAFBmRWQAwAAuAC4DIP84AFoDIQAAAA' + 'AAAQAAAAAAAAAAACAAIAABAAAADgCuAAEAAAAAAAAAAQAAAAEAAAAAAAEAAQAAAAEAAAAA' + 'AAIAAQAAAAEAAAAAAAMAAQAAAAEAAAAAAAQAAQAAAAEAAAAAAAUAAQAAAAEAAAAAAAYAAQ' + 'AAAAMAAQQJAAAAAgABAAMAAQQJAAEAAgABAAMAAQQJAAIAAgABAAMAAQQJAAMAAgABAAMA' + 'AQQJAAQAAgABAAMAAQQJAAUAAgABAAMAAQQJAAYAAgABWABYAAAAAAAAAwAAAAMAAAAcAA' + 'EAAAAAADwAAwABAAAAHAAEACAAAAAEAAQAAQAAAC7//wAAAC7////TAAEAAAAAAAABBgAA' + 'AQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAA' + 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA' + 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA' + 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA' + 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAA' + 'AAAAD/gwAyAAAAAQAAAAAAAAAAAAAAAAAAAAABAAQEAAEBAQJYAAEBASH4DwD4GwHEAvgc' + 'A/gXBIwMAYuL+nz5tQXkD5j3CBLnEQACAQEBIVhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWF' + 'hYWFhYWFhYAAABAQAADwACAQEEE/t3Dov6fAH6fAT+fPp8+nwHDosMCvm1Cvm1DAz6fBQA' + 'AAAAAAABAAAAAMmJbzEAAAAAzgTjFQAAAADOBOQpAAEAAAAAAAAADAAUAAQAAAABAAAAAg' + 'ABAAAAAAAAAAAD6AAAAAAAAA==');
   };
   Object.defineProperty(FontLoader.prototype, 'loadTestFont', {
    get: function () {
     return shadow(this, 'loadTestFont', getLoadTestFont());
    },
    configurable: true
   });
   FontLoader.prototype.addNativeFontFace = function fontLoader_addNativeFontFace(nativeFontFace) {
    this.nativeFontFaces.push(nativeFontFace);
    document.fonts.add(nativeFontFace);
   };
   FontLoader.prototype.bind = function fontLoaderBind(fonts, callback) {
    var rules = [];
    var fontsToLoad = [];
    var fontLoadPromises = [];
    var getNativeFontPromise = function (nativeFontFace) {
     return nativeFontFace.loaded.catch(function (e) {
      warn('Failed to load font "' + nativeFontFace.family + '": ' + e);
     });
    };
    var isFontLoadingAPISupported = FontLoader.isFontLoadingAPISupported && !FontLoader.isSyncFontLoadingSupported;
    for (var i = 0, ii = fonts.length; i < ii; i++) {
     var font = fonts[i];
     if (font.attached || font.loading === false) {
      continue;
     }
     font.attached = true;
     if (isFontLoadingAPISupported) {
      var nativeFontFace = font.createNativeFontFace();
      if (nativeFontFace) {
       this.addNativeFontFace(nativeFontFace);
       fontLoadPromises.push(getNativeFontPromise(nativeFontFace));
      }
     } else {
      var rule = font.createFontFaceRule();
      if (rule) {
       this.insertRule(rule);
       rules.push(rule);
       fontsToLoad.push(font);
      }
     }
    }
    var request = this.queueLoadingCallback(callback);
    if (isFontLoadingAPISupported) {
     Promise.all(fontLoadPromises).then(function () {
      request.complete();
     });
    } else if (rules.length > 0 && !FontLoader.isSyncFontLoadingSupported) {
     this.prepareFontLoadEvent(rules, fontsToLoad, request);
    } else {
     request.complete();
    }
   };
   FontLoader.prototype.queueLoadingCallback = function FontLoader_queueLoadingCallback(callback) {
    function LoadLoader_completeRequest() {
     assert(!request.end, 'completeRequest() cannot be called twice');
     request.end = Date.now();
     while (context.requests.length > 0 && context.requests[0].end) {
      var otherRequest = context.requests.shift();
      setTimeout(otherRequest.callback, 0);
     }
    }
    var context = this.loadingContext;
    var requestId = 'pdfjs-font-loading-' + context.nextRequestId++;
    var request = {
     id: requestId,
     complete: LoadLoader_completeRequest,
     callback: callback,
     started: Date.now()
    };
    context.requests.push(request);
    return request;
   };
   FontLoader.prototype.prepareFontLoadEvent = function fontLoaderPrepareFontLoadEvent(rules, fonts, request) {
    function int32(data, offset) {
     return data.charCodeAt(offset) << 24 | data.charCodeAt(offset + 1) << 16 | data.charCodeAt(offset + 2) << 8 | data.charCodeAt(offset + 3) & 0xff;
    }
    function spliceString(s, offset, remove, insert) {
     var chunk1 = s.substr(0, offset);
     var chunk2 = s.substr(offset + remove);
     return chunk1 + insert + chunk2;
    }
    var i, ii;
    var canvas = document.createElement('canvas');
    canvas.width = 1;
    canvas.height = 1;
    var ctx = canvas.getContext('2d');
    var called = 0;
    function isFontReady(name, callback) {
     called++;
     if (called > 30) {
      warn('Load test font never loaded.');
      callback();
      return;
     }
     ctx.font = '30px ' + name;
     ctx.fillText('.', 0, 20);
     var imageData = ctx.getImageData(0, 0, 1, 1);
     if (imageData.data[3] > 0) {
      callback();
      return;
     }
     setTimeout(isFontReady.bind(null, name, callback));
    }
    var loadTestFontId = 'lt' + Date.now() + this.loadTestFontId++;
    var data = this.loadTestFont;
    var COMMENT_OFFSET = 976;
    data = spliceString(data, COMMENT_OFFSET, loadTestFontId.length, loadTestFontId);
    var CFF_CHECKSUM_OFFSET = 16;
    var XXXX_VALUE = 0x58585858;
    var checksum = int32(data, CFF_CHECKSUM_OFFSET);
    for (i = 0, ii = loadTestFontId.length - 3; i < ii; i += 4) {
     checksum = checksum - XXXX_VALUE + int32(loadTestFontId, i) | 0;
    }
    if (i < loadTestFontId.length) {
     checksum = checksum - XXXX_VALUE + int32(loadTestFontId + 'XXX', i) | 0;
    }
    data = spliceString(data, CFF_CHECKSUM_OFFSET, 4, string32(checksum));
    var url = 'url(data:font/opentype;base64,' + btoa(data) + ');';
    var rule = '@font-face { font-family:"' + loadTestFontId + '";src:' + url + '}';
    this.insertRule(rule);
    var names = [];
    for (i = 0, ii = fonts.length; i < ii; i++) {
     names.push(fonts[i].loadedName);
    }
    names.push(loadTestFontId);
    var div = document.createElement('div');
    div.setAttribute('style', 'visibility: hidden;' + 'width: 10px; height: 10px;' + 'position: absolute; top: 0px; left: 0px;');
    for (i = 0, ii = names.length; i < ii; ++i) {
     var span = document.createElement('span');
     span.textContent = 'Hi';
     span.style.fontFamily = names[i];
     div.appendChild(span);
    }
    document.body.appendChild(div);
    isFontReady(loadTestFontId, function () {
     document.body.removeChild(div);
     request.complete();
    });
   };
   FontLoader.isFontLoadingAPISupported = typeof document !== 'undefined' && !!document.fonts;
   var isSyncFontLoadingSupported = function isSyncFontLoadingSupported() {
    if (typeof navigator === 'undefined') {
     return true;
    }
    var supported = false;
    var m = /Mozilla\/5.0.*?rv:(\d+).*? Gecko/.exec(navigator.userAgent);
    if (m && m[1] >= 14) {
     supported = true;
    }
    return supported;
   };
   Object.defineProperty(FontLoader, 'isSyncFontLoadingSupported', {
    get: function () {
     return shadow(FontLoader, 'isSyncFontLoadingSupported', isSyncFontLoadingSupported());
    },
    enumerable: true,
    configurable: true
   });
   var IsEvalSupportedCached = {
    get value() {
     return shadow(this, 'value', sharedUtil.isEvalSupported());
    }
   };
   var FontFaceObject = function FontFaceObjectClosure() {
    function FontFaceObject(translatedData, options) {
     this.compiledGlyphs = Object.create(null);
     for (var i in translatedData) {
      this[i] = translatedData[i];
     }
     this.options = options;
    }
    FontFaceObject.prototype = {
     createNativeFontFace: function FontFaceObject_createNativeFontFace() {
      if (!this.data) {
       return null;
      }
      if (this.options.disableFontFace) {
       this.disableFontFace = true;
       return null;
      }
      var nativeFontFace = new FontFace(this.loadedName, this.data, {});
      if (this.options.fontRegistry) {
       this.options.fontRegistry.registerFont(this);
      }
      return nativeFontFace;
     },
     createFontFaceRule: function FontFaceObject_createFontFaceRule() {
      if (!this.data) {
       return null;
      }
      if (this.options.disableFontFace) {
       this.disableFontFace = true;
       return null;
      }
      var data = bytesToString(new Uint8Array(this.data));
      var fontName = this.loadedName;
      var url = 'url(data:' + this.mimetype + ';base64,' + btoa(data) + ');';
      var rule = '@font-face { font-family:"' + fontName + '";src:' + url + '}';
      if (this.options.fontRegistry) {
       this.options.fontRegistry.registerFont(this, url);
      }
      return rule;
     },
     getPathGenerator: function FontFaceObject_getPathGenerator(objs, character) {
      if (!(character in this.compiledGlyphs)) {
       var cmds = objs.get(this.loadedName + '_path_' + character);
       var current, i, len;
       if (this.options.isEvalSupported && IsEvalSupportedCached.value) {
        var args, js = '';
        for (i = 0, len = cmds.length; i < len; i++) {
         current = cmds[i];
         if (current.args !== undefined) {
          args = current.args.join(',');
         } else {
          args = '';
         }
         js += 'c.' + current.cmd + '(' + args + ');\n';
        }
        this.compiledGlyphs[character] = new Function('c', 'size', js);
       } else {
        this.compiledGlyphs[character] = function (c, size) {
         for (i = 0, len = cmds.length; i < len; i++) {
          current = cmds[i];
          if (current.cmd === 'scale') {
           current.args = [
            size,
            -size
           ];
          }
          c[current.cmd].apply(c, current.args);
         }
        };
       }
      }
      return this.compiledGlyphs[character];
     }
    };
    return FontFaceObject;
   }();
   exports.FontFaceObject = FontFaceObject;
   exports.FontLoader = FontLoader;
  }));
  (function (root, factory) {
   factory(root.pdfjsDisplayMetadata = {}, root.pdfjsSharedUtil);
  }(this, function (exports, sharedUtil) {
   var error = sharedUtil.error;
   function fixMetadata(meta) {
    return meta.replace(/>\\376\\377([^<]+)/g, function (all, codes) {
     var bytes = codes.replace(/\\([0-3])([0-7])([0-7])/g, function (code, d1, d2, d3) {
      return String.fromCharCode(d1 * 64 + d2 * 8 + d3 * 1);
     });
     var chars = '';
     for (var i = 0; i < bytes.length; i += 2) {
      var code = bytes.charCodeAt(i) * 256 + bytes.charCodeAt(i + 1);
      chars += code >= 32 && code < 127 && code !== 60 && code !== 62 && code !== 38 ? String.fromCharCode(code) : '&#x' + (0x10000 + code).toString(16).substring(1) + ';';
     }
     return '>' + chars;
    });
   }
   function Metadata(meta) {
    if (typeof meta === 'string') {
     meta = fixMetadata(meta);
     var parser = new DOMParser();
     meta = parser.parseFromString(meta, 'application/xml');
    } else if (!(meta instanceof Document)) {
     error('Metadata: Invalid metadata object');
    }
    this.metaDocument = meta;
    this.metadata = Object.create(null);
    this.parse();
   }
   Metadata.prototype = {
    parse: function Metadata_parse() {
     var doc = this.metaDocument;
     var rdf = doc.documentElement;
     if (rdf.nodeName.toLowerCase() !== 'rdf:rdf') {
      rdf = rdf.firstChild;
      while (rdf && rdf.nodeName.toLowerCase() !== 'rdf:rdf') {
       rdf = rdf.nextSibling;
      }
     }
     var nodeName = rdf ? rdf.nodeName.toLowerCase() : null;
     if (!rdf || nodeName !== 'rdf:rdf' || !rdf.hasChildNodes()) {
      return;
     }
     var children = rdf.childNodes, desc, entry, name, i, ii, length, iLength;
     for (i = 0, length = children.length; i < length; i++) {
      desc = children[i];
      if (desc.nodeName.toLowerCase() !== 'rdf:description') {
       continue;
      }
      for (ii = 0, iLength = desc.childNodes.length; ii < iLength; ii++) {
       if (desc.childNodes[ii].nodeName.toLowerCase() !== '#text') {
        entry = desc.childNodes[ii];
        name = entry.nodeName.toLowerCase();
        this.metadata[name] = entry.textContent.trim();
       }
      }
     }
    },
    get: function Metadata_get(name) {
     return this.metadata[name] || null;
    },
    has: function Metadata_has(name) {
     return typeof this.metadata[name] !== 'undefined';
    }
   };
   exports.Metadata = Metadata;
  }));
  (function (root, factory) {
   factory(root.pdfjsDisplaySVG = {}, root.pdfjsSharedUtil);
  }(this, function (exports, sharedUtil) {
   var FONT_IDENTITY_MATRIX = sharedUtil.FONT_IDENTITY_MATRIX;
   var IDENTITY_MATRIX = sharedUtil.IDENTITY_MATRIX;
   var ImageKind = sharedUtil.ImageKind;
   var OPS = sharedUtil.OPS;
   var Util = sharedUtil.Util;
   var isNum = sharedUtil.isNum;
   var isArray = sharedUtil.isArray;
   var warn = sharedUtil.warn;
   var createObjectURL = sharedUtil.createObjectURL;
   var SVG_DEFAULTS = {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fillColor: '#000000'
   };
   var convertImgDataToPng = function convertImgDataToPngClosure() {
    var PNG_HEADER = new Uint8Array([
     0x89,
     0x50,
     0x4e,
     0x47,
     0x0d,
     0x0a,
     0x1a,
     0x0a
    ]);
    var CHUNK_WRAPPER_SIZE = 12;
    var crcTable = new Int32Array(256);
    for (var i = 0; i < 256; i++) {
     var c = i;
     for (var h = 0; h < 8; h++) {
      if (c & 1) {
       c = 0xedB88320 ^ c >> 1 & 0x7fffffff;
      } else {
       c = c >> 1 & 0x7fffffff;
      }
     }
     crcTable[i] = c;
    }
    function crc32(data, start, end) {
     var crc = -1;
     for (var i = start; i < end; i++) {
      var a = (crc ^ data[i]) & 0xff;
      var b = crcTable[a];
      crc = crc >>> 8 ^ b;
     }
     return crc ^ -1;
    }
    function writePngChunk(type, body, data, offset) {
     var p = offset;
     var len = body.length;
     data[p] = len >> 24 & 0xff;
     data[p + 1] = len >> 16 & 0xff;
     data[p + 2] = len >> 8 & 0xff;
     data[p + 3] = len & 0xff;
     p += 4;
     data[p] = type.charCodeAt(0) & 0xff;
     data[p + 1] = type.charCodeAt(1) & 0xff;
     data[p + 2] = type.charCodeAt(2) & 0xff;
     data[p + 3] = type.charCodeAt(3) & 0xff;
     p += 4;
     data.set(body, p);
     p += body.length;
     var crc = crc32(data, offset + 4, p);
     data[p] = crc >> 24 & 0xff;
     data[p + 1] = crc >> 16 & 0xff;
     data[p + 2] = crc >> 8 & 0xff;
     data[p + 3] = crc & 0xff;
    }
    function adler32(data, start, end) {
     var a = 1;
     var b = 0;
     for (var i = start; i < end; ++i) {
      a = (a + (data[i] & 0xff)) % 65521;
      b = (b + a) % 65521;
     }
     return b << 16 | a;
    }
    function encode(imgData, kind, forceDataSchema) {
     var width = imgData.width;
     var height = imgData.height;
     var bitDepth, colorType, lineSize;
     var bytes = imgData.data;
     switch (kind) {
     case ImageKind.GRAYSCALE_1BPP:
      colorType = 0;
      bitDepth = 1;
      lineSize = width + 7 >> 3;
      break;
     case ImageKind.RGB_24BPP:
      colorType = 2;
      bitDepth = 8;
      lineSize = width * 3;
      break;
     case ImageKind.RGBA_32BPP:
      colorType = 6;
      bitDepth = 8;
      lineSize = width * 4;
      break;
     default:
      throw new Error('invalid format');
     }
     var literals = new Uint8Array((1 + lineSize) * height);
     var offsetLiterals = 0, offsetBytes = 0;
     var y, i;
     for (y = 0; y < height; ++y) {
      literals[offsetLiterals++] = 0;
      literals.set(bytes.subarray(offsetBytes, offsetBytes + lineSize), offsetLiterals);
      offsetBytes += lineSize;
      offsetLiterals += lineSize;
     }
     if (kind === ImageKind.GRAYSCALE_1BPP) {
      offsetLiterals = 0;
      for (y = 0; y < height; y++) {
       offsetLiterals++;
       for (i = 0; i < lineSize; i++) {
        literals[offsetLiterals++] ^= 0xFF;
       }
      }
     }
     var ihdr = new Uint8Array([
      width >> 24 & 0xff,
      width >> 16 & 0xff,
      width >> 8 & 0xff,
      width & 0xff,
      height >> 24 & 0xff,
      height >> 16 & 0xff,
      height >> 8 & 0xff,
      height & 0xff,
      bitDepth,
      colorType,
      0x00,
      0x00,
      0x00
     ]);
     var len = literals.length;
     var maxBlockLength = 0xFFFF;
     var deflateBlocks = Math.ceil(len / maxBlockLength);
     var idat = new Uint8Array(2 + len + deflateBlocks * 5 + 4);
     var pi = 0;
     idat[pi++] = 0x78;
     idat[pi++] = 0x9c;
     var pos = 0;
     while (len > maxBlockLength) {
      idat[pi++] = 0x00;
      idat[pi++] = 0xff;
      idat[pi++] = 0xff;
      idat[pi++] = 0x00;
      idat[pi++] = 0x00;
      idat.set(literals.subarray(pos, pos + maxBlockLength), pi);
      pi += maxBlockLength;
      pos += maxBlockLength;
      len -= maxBlockLength;
     }
     idat[pi++] = 0x01;
     idat[pi++] = len & 0xff;
     idat[pi++] = len >> 8 & 0xff;
     idat[pi++] = ~len & 0xffff & 0xff;
     idat[pi++] = (~len & 0xffff) >> 8 & 0xff;
     idat.set(literals.subarray(pos), pi);
     pi += literals.length - pos;
     var adler = adler32(literals, 0, literals.length);
     idat[pi++] = adler >> 24 & 0xff;
     idat[pi++] = adler >> 16 & 0xff;
     idat[pi++] = adler >> 8 & 0xff;
     idat[pi++] = adler & 0xff;
     var pngLength = PNG_HEADER.length + CHUNK_WRAPPER_SIZE * 3 + ihdr.length + idat.length;
     var data = new Uint8Array(pngLength);
     var offset = 0;
     data.set(PNG_HEADER, offset);
     offset += PNG_HEADER.length;
     writePngChunk('IHDR', ihdr, data, offset);
     offset += CHUNK_WRAPPER_SIZE + ihdr.length;
     writePngChunk('IDATA', idat, data, offset);
     offset += CHUNK_WRAPPER_SIZE + idat.length;
     writePngChunk('IEND', new Uint8Array(0), data, offset);
     return createObjectURL(data, 'image/png', forceDataSchema);
    }
    return function convertImgDataToPng(imgData, forceDataSchema) {
     var kind = imgData.kind === undefined ? ImageKind.GRAYSCALE_1BPP : imgData.kind;
     return encode(imgData, kind, forceDataSchema);
    };
   }();
   var SVGExtraState = function SVGExtraStateClosure() {
    function SVGExtraState() {
     this.fontSizeScale = 1;
     this.fontWeight = SVG_DEFAULTS.fontWeight;
     this.fontSize = 0;
     this.textMatrix = IDENTITY_MATRIX;
     this.fontMatrix = FONT_IDENTITY_MATRIX;
     this.leading = 0;
     this.x = 0;
     this.y = 0;
     this.lineX = 0;
     this.lineY = 0;
     this.charSpacing = 0;
     this.wordSpacing = 0;
     this.textHScale = 1;
     this.textRise = 0;
     this.fillColor = SVG_DEFAULTS.fillColor;
     this.strokeColor = '#000000';
     this.fillAlpha = 1;
     this.strokeAlpha = 1;
     this.lineWidth = 1;
     this.lineJoin = '';
     this.lineCap = '';
     this.miterLimit = 0;
     this.dashArray = [];
     this.dashPhase = 0;
     this.dependencies = [];
     this.activeClipUrl = null;
     this.clipGroup = null;
     this.maskId = '';
    }
    SVGExtraState.prototype = {
     clone: function SVGExtraState_clone() {
      return Object.create(this);
     },
     setCurrentPoint: function SVGExtraState_setCurrentPoint(x, y) {
      this.x = x;
      this.y = y;
     }
    };
    return SVGExtraState;
   }();
   var SVGGraphics = function SVGGraphicsClosure() {
    function opListToTree(opList) {
     var opTree = [];
     var tmp = [];
     var opListLen = opList.length;
     for (var x = 0; x < opListLen; x++) {
      if (opList[x].fn === 'save') {
       opTree.push({
        'fnId': 92,
        'fn': 'group',
        'items': []
       });
       tmp.push(opTree);
       opTree = opTree[opTree.length - 1].items;
       continue;
      }
      if (opList[x].fn === 'restore') {
       opTree = tmp.pop();
      } else {
       opTree.push(opList[x]);
      }
     }
     return opTree;
    }
    function pf(value) {
     if (value === (value | 0)) {
      return value.toString();
     }
     var s = value.toFixed(10);
     var i = s.length - 1;
     if (s[i] !== '0') {
      return s;
     }
     do {
      i--;
     } while (s[i] === '0');
     return s.substr(0, s[i] === '.' ? i : i + 1);
    }
    function pm(m) {
     if (m[4] === 0 && m[5] === 0) {
      if (m[1] === 0 && m[2] === 0) {
       if (m[0] === 1 && m[3] === 1) {
        return '';
       }
       return 'scale(' + pf(m[0]) + ' ' + pf(m[3]) + ')';
      }
      if (m[0] === m[3] && m[1] === -m[2]) {
       var a = Math.acos(m[0]) * 180 / Math.PI;
       return 'rotate(' + pf(a) + ')';
      }
     } else {
      if (m[0] === 1 && m[1] === 0 && m[2] === 0 && m[3] === 1) {
       return 'translate(' + pf(m[4]) + ' ' + pf(m[5]) + ')';
      }
     }
     return 'matrix(' + pf(m[0]) + ' ' + pf(m[1]) + ' ' + pf(m[2]) + ' ' + pf(m[3]) + ' ' + pf(m[4]) + ' ' + pf(m[5]) + ')';
    }
    function SVGGraphics(commonObjs, objs, forceDataSchema) {
     this.current = new SVGExtraState();
     this.transformMatrix = IDENTITY_MATRIX;
     this.transformStack = [];
     this.extraStack = [];
     this.commonObjs = commonObjs;
     this.objs = objs;
     this.pendingEOFill = false;
     this.embedFonts = false;
     this.embeddedFonts = Object.create(null);
     this.cssStyle = null;
     this.forceDataSchema = !!forceDataSchema;
    }
    var NS = 'http://www.w3.org/2000/svg';
    var XML_NS = 'http://www.w3.org/XML/1998/namespace';
    var XLINK_NS = 'http://www.w3.org/1999/xlink';
    var LINE_CAP_STYLES = [
     'butt',
     'round',
     'square'
    ];
    var LINE_JOIN_STYLES = [
     'miter',
     'round',
     'bevel'
    ];
    var clipCount = 0;
    var maskCount = 0;
    SVGGraphics.prototype = {
     save: function SVGGraphics_save() {
      this.transformStack.push(this.transformMatrix);
      var old = this.current;
      this.extraStack.push(old);
      this.current = old.clone();
     },
     restore: function SVGGraphics_restore() {
      this.transformMatrix = this.transformStack.pop();
      this.current = this.extraStack.pop();
      this.tgrp = null;
     },
     group: function SVGGraphics_group(items) {
      this.save();
      this.executeOpTree(items);
      this.restore();
     },
     loadDependencies: function SVGGraphics_loadDependencies(operatorList) {
      var fnArray = operatorList.fnArray;
      var fnArrayLen = fnArray.length;
      var argsArray = operatorList.argsArray;
      var self = this;
      for (var i = 0; i < fnArrayLen; i++) {
       if (OPS.dependency === fnArray[i]) {
        var deps = argsArray[i];
        for (var n = 0, nn = deps.length; n < nn; n++) {
         var obj = deps[n];
         var common = obj.substring(0, 2) === 'g_';
         var promise;
         if (common) {
          promise = new Promise(function (resolve) {
           self.commonObjs.get(obj, resolve);
          });
         } else {
          promise = new Promise(function (resolve) {
           self.objs.get(obj, resolve);
          });
         }
         this.current.dependencies.push(promise);
        }
       }
      }
      return Promise.all(this.current.dependencies);
     },
     transform: function SVGGraphics_transform(a, b, c, d, e, f) {
      var transformMatrix = [
       a,
       b,
       c,
       d,
       e,
       f
      ];
      this.transformMatrix = Util.transform(this.transformMatrix, transformMatrix);
      this.tgrp = null;
     },
     getSVG: function SVGGraphics_getSVG(operatorList, viewport) {
      this.viewport = viewport;
      var svgElement = this._initialize(viewport);
      return this.loadDependencies(operatorList).then(function () {
       this.transformMatrix = IDENTITY_MATRIX;
       var opTree = this.convertOpList(operatorList);
       this.executeOpTree(opTree);
       return svgElement;
      }.bind(this));
     },
     convertOpList: function SVGGraphics_convertOpList(operatorList) {
      var argsArray = operatorList.argsArray;
      var fnArray = operatorList.fnArray;
      var fnArrayLen = fnArray.length;
      var REVOPS = [];
      var opList = [];
      for (var op in OPS) {
       REVOPS[OPS[op]] = op;
      }
      for (var x = 0; x < fnArrayLen; x++) {
       var fnId = fnArray[x];
       opList.push({
        'fnId': fnId,
        'fn': REVOPS[fnId],
        'args': argsArray[x]
       });
      }
      return opListToTree(opList);
     },
     executeOpTree: function SVGGraphics_executeOpTree(opTree) {
      var opTreeLen = opTree.length;
      for (var x = 0; x < opTreeLen; x++) {
       var fn = opTree[x].fn;
       var fnId = opTree[x].fnId;
       var args = opTree[x].args;
       switch (fnId | 0) {
       case OPS.beginText:
        this.beginText();
        break;
       case OPS.setLeading:
        this.setLeading(args);
        break;
       case OPS.setLeadingMoveText:
        this.setLeadingMoveText(args[0], args[1]);
        break;
       case OPS.setFont:
        this.setFont(args);
        break;
       case OPS.showText:
        this.showText(args[0]);
        break;
       case OPS.showSpacedText:
        this.showText(args[0]);
        break;
       case OPS.endText:
        this.endText();
        break;
       case OPS.moveText:
        this.moveText(args[0], args[1]);
        break;
       case OPS.setCharSpacing:
        this.setCharSpacing(args[0]);
        break;
       case OPS.setWordSpacing:
        this.setWordSpacing(args[0]);
        break;
       case OPS.setHScale:
        this.setHScale(args[0]);
        break;
       case OPS.setTextMatrix:
        this.setTextMatrix(args[0], args[1], args[2], args[3], args[4], args[5]);
        break;
       case OPS.setLineWidth:
        this.setLineWidth(args[0]);
        break;
       case OPS.setLineJoin:
        this.setLineJoin(args[0]);
        break;
       case OPS.setLineCap:
        this.setLineCap(args[0]);
        break;
       case OPS.setMiterLimit:
        this.setMiterLimit(args[0]);
        break;
       case OPS.setFillRGBColor:
        this.setFillRGBColor(args[0], args[1], args[2]);
        break;
       case OPS.setStrokeRGBColor:
        this.setStrokeRGBColor(args[0], args[1], args[2]);
        break;
       case OPS.setDash:
        this.setDash(args[0], args[1]);
        break;
       case OPS.setGState:
        this.setGState(args[0]);
        break;
       case OPS.fill:
        this.fill();
        break;
       case OPS.eoFill:
        this.eoFill();
        break;
       case OPS.stroke:
        this.stroke();
        break;
       case OPS.fillStroke:
        this.fillStroke();
        break;
       case OPS.eoFillStroke:
        this.eoFillStroke();
        break;
       case OPS.clip:
        this.clip('nonzero');
        break;
       case OPS.eoClip:
        this.clip('evenodd');
        break;
       case OPS.paintSolidColorImageMask:
        this.paintSolidColorImageMask();
        break;
       case OPS.paintJpegXObject:
        this.paintJpegXObject(args[0], args[1], args[2]);
        break;
       case OPS.paintImageXObject:
        this.paintImageXObject(args[0]);
        break;
       case OPS.paintInlineImageXObject:
        this.paintInlineImageXObject(args[0]);
        break;
       case OPS.paintImageMaskXObject:
        this.paintImageMaskXObject(args[0]);
        break;
       case OPS.paintFormXObjectBegin:
        this.paintFormXObjectBegin(args[0], args[1]);
        break;
       case OPS.paintFormXObjectEnd:
        this.paintFormXObjectEnd();
        break;
       case OPS.closePath:
        this.closePath();
        break;
       case OPS.closeStroke:
        this.closeStroke();
        break;
       case OPS.closeFillStroke:
        this.closeFillStroke();
        break;
       case OPS.nextLine:
        this.nextLine();
        break;
       case OPS.transform:
        this.transform(args[0], args[1], args[2], args[3], args[4], args[5]);
        break;
       case OPS.constructPath:
        this.constructPath(args[0], args[1]);
        break;
       case OPS.endPath:
        this.endPath();
        break;
       case 92:
        this.group(opTree[x].items);
        break;
       default:
        warn('Unimplemented operator ' + fn);
        break;
       }
      }
     },
     setWordSpacing: function SVGGraphics_setWordSpacing(wordSpacing) {
      this.current.wordSpacing = wordSpacing;
     },
     setCharSpacing: function SVGGraphics_setCharSpacing(charSpacing) {
      this.current.charSpacing = charSpacing;
     },
     nextLine: function SVGGraphics_nextLine() {
      this.moveText(0, this.current.leading);
     },
     setTextMatrix: function SVGGraphics_setTextMatrix(a, b, c, d, e, f) {
      var current = this.current;
      this.current.textMatrix = this.current.lineMatrix = [
       a,
       b,
       c,
       d,
       e,
       f
      ];
      this.current.x = this.current.lineX = 0;
      this.current.y = this.current.lineY = 0;
      current.xcoords = [];
      current.tspan = document.createElementNS(NS, 'svg:tspan');
      current.tspan.setAttributeNS(null, 'font-family', current.fontFamily);
      current.tspan.setAttributeNS(null, 'font-size', pf(current.fontSize) + 'px');
      current.tspan.setAttributeNS(null, 'y', pf(-current.y));
      current.txtElement = document.createElementNS(NS, 'svg:text');
      current.txtElement.appendChild(current.tspan);
     },
     beginText: function SVGGraphics_beginText() {
      this.current.x = this.current.lineX = 0;
      this.current.y = this.current.lineY = 0;
      this.current.textMatrix = IDENTITY_MATRIX;
      this.current.lineMatrix = IDENTITY_MATRIX;
      this.current.tspan = document.createElementNS(NS, 'svg:tspan');
      this.current.txtElement = document.createElementNS(NS, 'svg:text');
      this.current.txtgrp = document.createElementNS(NS, 'svg:g');
      this.current.xcoords = [];
     },
     moveText: function SVGGraphics_moveText(x, y) {
      var current = this.current;
      this.current.x = this.current.lineX += x;
      this.current.y = this.current.lineY += y;
      current.xcoords = [];
      current.tspan = document.createElementNS(NS, 'svg:tspan');
      current.tspan.setAttributeNS(null, 'font-family', current.fontFamily);
      current.tspan.setAttributeNS(null, 'font-size', pf(current.fontSize) + 'px');
      current.tspan.setAttributeNS(null, 'y', pf(-current.y));
     },
     showText: function SVGGraphics_showText(glyphs) {
      var current = this.current;
      var font = current.font;
      var fontSize = current.fontSize;
      if (fontSize === 0) {
       return;
      }
      var charSpacing = current.charSpacing;
      var wordSpacing = current.wordSpacing;
      var fontDirection = current.fontDirection;
      var textHScale = current.textHScale * fontDirection;
      var glyphsLength = glyphs.length;
      var vertical = font.vertical;
      var widthAdvanceScale = fontSize * current.fontMatrix[0];
      var x = 0, i;
      for (i = 0; i < glyphsLength; ++i) {
       var glyph = glyphs[i];
       if (glyph === null) {
        x += fontDirection * wordSpacing;
        continue;
       } else if (isNum(glyph)) {
        x += -glyph * fontSize * 0.001;
        continue;
       }
       current.xcoords.push(current.x + x * textHScale);
       var width = glyph.width;
       var character = glyph.fontChar;
       var charWidth = width * widthAdvanceScale + charSpacing * fontDirection;
       x += charWidth;
       current.tspan.textContent += character;
      }
      if (vertical) {
       current.y -= x * textHScale;
      } else {
       current.x += x * textHScale;
      }
      current.tspan.setAttributeNS(null, 'x', current.xcoords.map(pf).join(' '));
      current.tspan.setAttributeNS(null, 'y', pf(-current.y));
      current.tspan.setAttributeNS(null, 'font-family', current.fontFamily);
      current.tspan.setAttributeNS(null, 'font-size', pf(current.fontSize) + 'px');
      if (current.fontStyle !== SVG_DEFAULTS.fontStyle) {
       current.tspan.setAttributeNS(null, 'font-style', current.fontStyle);
      }
      if (current.fontWeight !== SVG_DEFAULTS.fontWeight) {
       current.tspan.setAttributeNS(null, 'font-weight', current.fontWeight);
      }
      if (current.fillColor !== SVG_DEFAULTS.fillColor) {
       current.tspan.setAttributeNS(null, 'fill', current.fillColor);
      }
      current.txtElement.setAttributeNS(null, 'transform', pm(current.textMatrix) + ' scale(1, -1)');
      current.txtElement.setAttributeNS(XML_NS, 'xml:space', 'preserve');
      current.txtElement.appendChild(current.tspan);
      current.txtgrp.appendChild(current.txtElement);
      this._ensureTransformGroup().appendChild(current.txtElement);
     },
     setLeadingMoveText: function SVGGraphics_setLeadingMoveText(x, y) {
      this.setLeading(-y);
      this.moveText(x, y);
     },
     addFontStyle: function SVGGraphics_addFontStyle(fontObj) {
      if (!this.cssStyle) {
       this.cssStyle = document.createElementNS(NS, 'svg:style');
       this.cssStyle.setAttributeNS(null, 'type', 'text/css');
       this.defs.appendChild(this.cssStyle);
      }
      var url = createObjectURL(fontObj.data, fontObj.mimetype, this.forceDataSchema);
      this.cssStyle.textContent += '@font-face { font-family: "' + fontObj.loadedName + '";' + ' src: url(' + url + '); }\n';
     },
     setFont: function SVGGraphics_setFont(details) {
      var current = this.current;
      var fontObj = this.commonObjs.get(details[0]);
      var size = details[1];
      this.current.font = fontObj;
      if (this.embedFonts && fontObj.data && !this.embeddedFonts[fontObj.loadedName]) {
       this.addFontStyle(fontObj);
       this.embeddedFonts[fontObj.loadedName] = fontObj;
      }
      current.fontMatrix = fontObj.fontMatrix ? fontObj.fontMatrix : FONT_IDENTITY_MATRIX;
      var bold = fontObj.black ? fontObj.bold ? 'bolder' : 'bold' : fontObj.bold ? 'bold' : 'normal';
      var italic = fontObj.italic ? 'italic' : 'normal';
      if (size < 0) {
       size = -size;
       current.fontDirection = -1;
      } else {
       current.fontDirection = 1;
      }
      current.fontSize = size;
      current.fontFamily = fontObj.loadedName;
      current.fontWeight = bold;
      current.fontStyle = italic;
      current.tspan = document.createElementNS(NS, 'svg:tspan');
      current.tspan.setAttributeNS(null, 'y', pf(-current.y));
      current.xcoords = [];
     },
     endText: function SVGGraphics_endText() {
     },
     setLineWidth: function SVGGraphics_setLineWidth(width) {
      this.current.lineWidth = width;
     },
     setLineCap: function SVGGraphics_setLineCap(style) {
      this.current.lineCap = LINE_CAP_STYLES[style];
     },
     setLineJoin: function SVGGraphics_setLineJoin(style) {
      this.current.lineJoin = LINE_JOIN_STYLES[style];
     },
     setMiterLimit: function SVGGraphics_setMiterLimit(limit) {
      this.current.miterLimit = limit;
     },
     setStrokeRGBColor: function SVGGraphics_setStrokeRGBColor(r, g, b) {
      var color = Util.makeCssRgb(r, g, b);
      this.current.strokeColor = color;
     },
     setFillRGBColor: function SVGGraphics_setFillRGBColor(r, g, b) {
      var color = Util.makeCssRgb(r, g, b);
      this.current.fillColor = color;
      this.current.tspan = document.createElementNS(NS, 'svg:tspan');
      this.current.xcoords = [];
     },
     setDash: function SVGGraphics_setDash(dashArray, dashPhase) {
      this.current.dashArray = dashArray;
      this.current.dashPhase = dashPhase;
     },
     constructPath: function SVGGraphics_constructPath(ops, args) {
      var current = this.current;
      var x = current.x, y = current.y;
      current.path = document.createElementNS(NS, 'svg:path');
      var d = [];
      var opLength = ops.length;
      for (var i = 0, j = 0; i < opLength; i++) {
       switch (ops[i] | 0) {
       case OPS.rectangle:
        x = args[j++];
        y = args[j++];
        var width = args[j++];
        var height = args[j++];
        var xw = x + width;
        var yh = y + height;
        d.push('M', pf(x), pf(y), 'L', pf(xw), pf(y), 'L', pf(xw), pf(yh), 'L', pf(x), pf(yh), 'Z');
        break;
       case OPS.moveTo:
        x = args[j++];
        y = args[j++];
        d.push('M', pf(x), pf(y));
        break;
       case OPS.lineTo:
        x = args[j++];
        y = args[j++];
        d.push('L', pf(x), pf(y));
        break;
       case OPS.curveTo:
        x = args[j + 4];
        y = args[j + 5];
        d.push('C', pf(args[j]), pf(args[j + 1]), pf(args[j + 2]), pf(args[j + 3]), pf(x), pf(y));
        j += 6;
        break;
       case OPS.curveTo2:
        x = args[j + 2];
        y = args[j + 3];
        d.push('C', pf(x), pf(y), pf(args[j]), pf(args[j + 1]), pf(args[j + 2]), pf(args[j + 3]));
        j += 4;
        break;
       case OPS.curveTo3:
        x = args[j + 2];
        y = args[j + 3];
        d.push('C', pf(args[j]), pf(args[j + 1]), pf(x), pf(y), pf(x), pf(y));
        j += 4;
        break;
       case OPS.closePath:
        d.push('Z');
        break;
       }
      }
      current.path.setAttributeNS(null, 'd', d.join(' '));
      current.path.setAttributeNS(null, 'stroke-miterlimit', pf(current.miterLimit));
      current.path.setAttributeNS(null, 'stroke-linecap', current.lineCap);
      current.path.setAttributeNS(null, 'stroke-linejoin', current.lineJoin);
      current.path.setAttributeNS(null, 'stroke-width', pf(current.lineWidth) + 'px');
      current.path.setAttributeNS(null, 'stroke-dasharray', current.dashArray.map(pf).join(' '));
      current.path.setAttributeNS(null, 'stroke-dashoffset', pf(current.dashPhase) + 'px');
      current.path.setAttributeNS(null, 'fill', 'none');
      this._ensureTransformGroup().appendChild(current.path);
      current.element = current.path;
      current.setCurrentPoint(x, y);
     },
     endPath: function SVGGraphics_endPath() {
     },
     clip: function SVGGraphics_clip(type) {
      var current = this.current;
      var clipId = 'clippath' + clipCount;
      clipCount++;
      var clipPath = document.createElementNS(NS, 'svg:clipPath');
      clipPath.setAttributeNS(null, 'id', clipId);
      clipPath.setAttributeNS(null, 'transform', pm(this.transformMatrix));
      var clipElement = current.element.cloneNode();
      if (type === 'evenodd') {
       clipElement.setAttributeNS(null, 'clip-rule', 'evenodd');
      } else {
       clipElement.setAttributeNS(null, 'clip-rule', 'nonzero');
      }
      clipPath.appendChild(clipElement);
      this.defs.appendChild(clipPath);
      if (current.activeClipUrl) {
       current.clipGroup = null;
       this.extraStack.forEach(function (prev) {
        prev.clipGroup = null;
       });
      }
      current.activeClipUrl = 'url(#' + clipId + ')';
      this.tgrp = null;
     },
     closePath: function SVGGraphics_closePath() {
      var current = this.current;
      var d = current.path.getAttributeNS(null, 'd');
      d += 'Z';
      current.path.setAttributeNS(null, 'd', d);
     },
     setLeading: function SVGGraphics_setLeading(leading) {
      this.current.leading = -leading;
     },
     setTextRise: function SVGGraphics_setTextRise(textRise) {
      this.current.textRise = textRise;
     },
     setHScale: function SVGGraphics_setHScale(scale) {
      this.current.textHScale = scale / 100;
     },
     setGState: function SVGGraphics_setGState(states) {
      for (var i = 0, ii = states.length; i < ii; i++) {
       var state = states[i];
       var key = state[0];
       var value = state[1];
       switch (key) {
       case 'LW':
        this.setLineWidth(value);
        break;
       case 'LC':
        this.setLineCap(value);
        break;
       case 'LJ':
        this.setLineJoin(value);
        break;
       case 'ML':
        this.setMiterLimit(value);
        break;
       case 'D':
        this.setDash(value[0], value[1]);
        break;
       case 'Font':
        this.setFont(value);
        break;
       default:
        warn('Unimplemented graphic state ' + key);
        break;
       }
      }
     },
     fill: function SVGGraphics_fill() {
      var current = this.current;
      current.element.setAttributeNS(null, 'fill', current.fillColor);
     },
     stroke: function SVGGraphics_stroke() {
      var current = this.current;
      current.element.setAttributeNS(null, 'stroke', current.strokeColor);
      current.element.setAttributeNS(null, 'fill', 'none');
     },
     eoFill: function SVGGraphics_eoFill() {
      var current = this.current;
      current.element.setAttributeNS(null, 'fill', current.fillColor);
      current.element.setAttributeNS(null, 'fill-rule', 'evenodd');
     },
     fillStroke: function SVGGraphics_fillStroke() {
      this.stroke();
      this.fill();
     },
     eoFillStroke: function SVGGraphics_eoFillStroke() {
      this.current.element.setAttributeNS(null, 'fill-rule', 'evenodd');
      this.fillStroke();
     },
     closeStroke: function SVGGraphics_closeStroke() {
      this.closePath();
      this.stroke();
     },
     closeFillStroke: function SVGGraphics_closeFillStroke() {
      this.closePath();
      this.fillStroke();
     },
     paintSolidColorImageMask: function SVGGraphics_paintSolidColorImageMask() {
      var current = this.current;
      var rect = document.createElementNS(NS, 'svg:rect');
      rect.setAttributeNS(null, 'x', '0');
      rect.setAttributeNS(null, 'y', '0');
      rect.setAttributeNS(null, 'width', '1px');
      rect.setAttributeNS(null, 'height', '1px');
      rect.setAttributeNS(null, 'fill', current.fillColor);
      this._ensureTransformGroup().appendChild(rect);
     },
     paintJpegXObject: function SVGGraphics_paintJpegXObject(objId, w, h) {
      var imgObj = this.objs.get(objId);
      var imgEl = document.createElementNS(NS, 'svg:image');
      imgEl.setAttributeNS(XLINK_NS, 'xlink:href', imgObj.src);
      imgEl.setAttributeNS(null, 'width', imgObj.width + 'px');
      imgEl.setAttributeNS(null, 'height', imgObj.height + 'px');
      imgEl.setAttributeNS(null, 'x', '0');
      imgEl.setAttributeNS(null, 'y', pf(-h));
      imgEl.setAttributeNS(null, 'transform', 'scale(' + pf(1 / w) + ' ' + pf(-1 / h) + ')');
      this._ensureTransformGroup().appendChild(imgEl);
     },
     paintImageXObject: function SVGGraphics_paintImageXObject(objId) {
      var imgData = this.objs.get(objId);
      if (!imgData) {
       warn('Dependent image isn\'t ready yet');
       return;
      }
      this.paintInlineImageXObject(imgData);
     },
     paintInlineImageXObject: function SVGGraphics_paintInlineImageXObject(imgData, mask) {
      var width = imgData.width;
      var height = imgData.height;
      var imgSrc = convertImgDataToPng(imgData, this.forceDataSchema);
      var cliprect = document.createElementNS(NS, 'svg:rect');
      cliprect.setAttributeNS(null, 'x', '0');
      cliprect.setAttributeNS(null, 'y', '0');
      cliprect.setAttributeNS(null, 'width', pf(width));
      cliprect.setAttributeNS(null, 'height', pf(height));
      this.current.element = cliprect;
      this.clip('nonzero');
      var imgEl = document.createElementNS(NS, 'svg:image');
      imgEl.setAttributeNS(XLINK_NS, 'xlink:href', imgSrc);
      imgEl.setAttributeNS(null, 'x', '0');
      imgEl.setAttributeNS(null, 'y', pf(-height));
      imgEl.setAttributeNS(null, 'width', pf(width) + 'px');
      imgEl.setAttributeNS(null, 'height', pf(height) + 'px');
      imgEl.setAttributeNS(null, 'transform', 'scale(' + pf(1 / width) + ' ' + pf(-1 / height) + ')');
      if (mask) {
       mask.appendChild(imgEl);
      } else {
       this._ensureTransformGroup().appendChild(imgEl);
      }
     },
     paintImageMaskXObject: function SVGGraphics_paintImageMaskXObject(imgData) {
      var current = this.current;
      var width = imgData.width;
      var height = imgData.height;
      var fillColor = current.fillColor;
      current.maskId = 'mask' + maskCount++;
      var mask = document.createElementNS(NS, 'svg:mask');
      mask.setAttributeNS(null, 'id', current.maskId);
      var rect = document.createElementNS(NS, 'svg:rect');
      rect.setAttributeNS(null, 'x', '0');
      rect.setAttributeNS(null, 'y', '0');
      rect.setAttributeNS(null, 'width', pf(width));
      rect.setAttributeNS(null, 'height', pf(height));
      rect.setAttributeNS(null, 'fill', fillColor);
      rect.setAttributeNS(null, 'mask', 'url(#' + current.maskId + ')');
      this.defs.appendChild(mask);
      this._ensureTransformGroup().appendChild(rect);
      this.paintInlineImageXObject(imgData, mask);
     },
     paintFormXObjectBegin: function SVGGraphics_paintFormXObjectBegin(matrix, bbox) {
      if (isArray(matrix) && matrix.length === 6) {
       this.transform(matrix[0], matrix[1], matrix[2], matrix[3], matrix[4], matrix[5]);
      }
      if (isArray(bbox) && bbox.length === 4) {
       var width = bbox[2] - bbox[0];
       var height = bbox[3] - bbox[1];
       var cliprect = document.createElementNS(NS, 'svg:rect');
       cliprect.setAttributeNS(null, 'x', bbox[0]);
       cliprect.setAttributeNS(null, 'y', bbox[1]);
       cliprect.setAttributeNS(null, 'width', pf(width));
       cliprect.setAttributeNS(null, 'height', pf(height));
       this.current.element = cliprect;
       this.clip('nonzero');
       this.endPath();
      }
     },
     paintFormXObjectEnd: function SVGGraphics_paintFormXObjectEnd() {
     },
     _initialize: function SVGGraphics_initialize(viewport) {
      var svg = document.createElementNS(NS, 'svg:svg');
      svg.setAttributeNS(null, 'version', '1.1');
      svg.setAttributeNS(null, 'width', viewport.width + 'px');
      svg.setAttributeNS(null, 'height', viewport.height + 'px');
      svg.setAttributeNS(null, 'preserveAspectRatio', 'none');
      svg.setAttributeNS(null, 'viewBox', '0 0 ' + viewport.width + ' ' + viewport.height);
      var definitions = document.createElementNS(NS, 'svg:defs');
      svg.appendChild(definitions);
      this.defs = definitions;
      var rootGroup = document.createElementNS(NS, 'svg:g');
      rootGroup.setAttributeNS(null, 'transform', pm(viewport.transform));
      svg.appendChild(rootGroup);
      this.svg = rootGroup;
      return svg;
     },
     _ensureClipGroup: function SVGGraphics_ensureClipGroup() {
      if (!this.current.clipGroup) {
       var clipGroup = document.createElementNS(NS, 'svg:g');
       clipGroup.setAttributeNS(null, 'clip-path', this.current.activeClipUrl);
       this.svg.appendChild(clipGroup);
       this.current.clipGroup = clipGroup;
      }
      return this.current.clipGroup;
     },
     _ensureTransformGroup: function SVGGraphics_ensureTransformGroup() {
      if (!this.tgrp) {
       this.tgrp = document.createElementNS(NS, 'svg:g');
       this.tgrp.setAttributeNS(null, 'transform', pm(this.transformMatrix));
       if (this.current.activeClipUrl) {
        this._ensureClipGroup().appendChild(this.tgrp);
       } else {
        this.svg.appendChild(this.tgrp);
       }
      }
      return this.tgrp;
     }
    };
    return SVGGraphics;
   }();
   exports.SVGGraphics = SVGGraphics;
  }));
  (function (root, factory) {
   factory(root.pdfjsDisplayAnnotationLayer = {}, root.pdfjsSharedUtil, root.pdfjsDisplayDOMUtils);
  }(this, function (exports, sharedUtil, displayDOMUtils) {
   var AnnotationBorderStyleType = sharedUtil.AnnotationBorderStyleType;
   var AnnotationType = sharedUtil.AnnotationType;
   var Util = sharedUtil.Util;
   var addLinkAttributes = displayDOMUtils.addLinkAttributes;
   var LinkTarget = displayDOMUtils.LinkTarget;
   var getFilenameFromUrl = displayDOMUtils.getFilenameFromUrl;
   var warn = sharedUtil.warn;
   var CustomStyle = displayDOMUtils.CustomStyle;
   var getDefaultSetting = displayDOMUtils.getDefaultSetting;
   function AnnotationElementFactory() {
   }
   AnnotationElementFactory.prototype = {
    create: function AnnotationElementFactory_create(parameters) {
     var subtype = parameters.data.annotationType;
     switch (subtype) {
     case AnnotationType.LINK:
      return new LinkAnnotationElement(parameters);
     case AnnotationType.TEXT:
      return new TextAnnotationElement(parameters);
     case AnnotationType.WIDGET:
      var fieldType = parameters.data.fieldType;
      switch (fieldType) {
      case 'Tx':
       return new TextWidgetAnnotationElement(parameters);
      case 'Btn':
       if (parameters.data.radioButton) {
        return new RadioButtonWidgetAnnotationElement(parameters);
       } else if (parameters.data.checkBox) {
        return new CheckboxWidgetAnnotationElement(parameters);
       }
       warn('Unimplemented button widget annotation: pushbutton');
       break;
      case 'Ch':
       return new ChoiceWidgetAnnotationElement(parameters);
      }
      return new WidgetAnnotationElement(parameters);
     case AnnotationType.POPUP:
      return new PopupAnnotationElement(parameters);
     case AnnotationType.HIGHLIGHT:
      return new HighlightAnnotationElement(parameters);
     case AnnotationType.UNDERLINE:
      return new UnderlineAnnotationElement(parameters);
     case AnnotationType.SQUIGGLY:
      return new SquigglyAnnotationElement(parameters);
     case AnnotationType.STRIKEOUT:
      return new StrikeOutAnnotationElement(parameters);
     case AnnotationType.FILEATTACHMENT:
      return new FileAttachmentAnnotationElement(parameters);
     default:
      return new AnnotationElement(parameters);
     }
    }
   };
   var AnnotationElement = function AnnotationElementClosure() {
    function AnnotationElement(parameters, isRenderable) {
     this.isRenderable = isRenderable || false;
     this.data = parameters.data;
     this.layer = parameters.layer;
     this.page = parameters.page;
     this.viewport = parameters.viewport;
     this.linkService = parameters.linkService;
     this.downloadManager = parameters.downloadManager;
     this.imageResourcesPath = parameters.imageResourcesPath;
     this.renderInteractiveForms = parameters.renderInteractiveForms;
     if (isRenderable) {
      this.container = this._createContainer();
     }
    }
    AnnotationElement.prototype = {
     _createContainer: function AnnotationElement_createContainer() {
      var data = this.data, page = this.page, viewport = this.viewport;
      var container = document.createElement('section');
      var width = data.rect[2] - data.rect[0];
      var height = data.rect[3] - data.rect[1];
      container.setAttribute('data-annotation-id', data.id);
      var rect = Util.normalizeRect([
       data.rect[0],
       page.view[3] - data.rect[1] + page.view[1],
       data.rect[2],
       page.view[3] - data.rect[3] + page.view[1]
      ]);
      CustomStyle.setProp('transform', container, 'matrix(' + viewport.transform.join(',') + ')');
      CustomStyle.setProp('transformOrigin', container, -rect[0] + 'px ' + -rect[1] + 'px');
      if (data.borderStyle.width > 0) {
       container.style.borderWidth = data.borderStyle.width + 'px';
       if (data.borderStyle.style !== AnnotationBorderStyleType.UNDERLINE) {
        width = width - 2 * data.borderStyle.width;
        height = height - 2 * data.borderStyle.width;
       }
       var horizontalRadius = data.borderStyle.horizontalCornerRadius;
       var verticalRadius = data.borderStyle.verticalCornerRadius;
       if (horizontalRadius > 0 || verticalRadius > 0) {
        var radius = horizontalRadius + 'px / ' + verticalRadius + 'px';
        CustomStyle.setProp('borderRadius', container, radius);
       }
       switch (data.borderStyle.style) {
       case AnnotationBorderStyleType.SOLID:
        container.style.borderStyle = 'solid';
        break;
       case AnnotationBorderStyleType.DASHED:
        container.style.borderStyle = 'dashed';
        break;
       case AnnotationBorderStyleType.BEVELED:
        warn('Unimplemented border style: beveled');
        break;
       case AnnotationBorderStyleType.INSET:
        warn('Unimplemented border style: inset');
        break;
       case AnnotationBorderStyleType.UNDERLINE:
        container.style.borderBottomStyle = 'solid';
        break;
       default:
        break;
       }
       if (data.color) {
        container.style.borderColor = Util.makeCssRgb(data.color[0] | 0, data.color[1] | 0, data.color[2] | 0);
       } else {
        container.style.borderWidth = 0;
       }
      }
      container.style.left = rect[0] + 'px';
      container.style.top = rect[1] + 'px';
      container.style.width = width + 'px';
      container.style.height = height + 'px';
      return container;
     },
     _createPopup: function AnnotationElement_createPopup(container, trigger, data) {
      if (!trigger) {
       trigger = document.createElement('div');
       trigger.style.height = container.style.height;
       trigger.style.width = container.style.width;
       container.appendChild(trigger);
      }
      var popupElement = new PopupElement({
       container: container,
       trigger: trigger,
       color: data.color,
       title: data.title,
       contents: data.contents,
       hideWrapper: true
      });
      var popup = popupElement.render();
      popup.style.left = container.style.width;
      container.appendChild(popup);
     },
     render: function AnnotationElement_render() {
      throw new Error('Abstract method AnnotationElement.render called');
     }
    };
    return AnnotationElement;
   }();
   var LinkAnnotationElement = function LinkAnnotationElementClosure() {
    function LinkAnnotationElement(parameters) {
     AnnotationElement.call(this, parameters, true);
    }
    Util.inherit(LinkAnnotationElement, AnnotationElement, {
     render: function LinkAnnotationElement_render() {
      this.container.className = 'linkAnnotation';
      var link = document.createElement('a');
      addLinkAttributes(link, {
       url: this.data.url,
       target: this.data.newWindow ? LinkTarget.BLANK : undefined
      });
      if (!this.data.url) {
       if (this.data.action) {
        this._bindNamedAction(link, this.data.action);
       } else {
        this._bindLink(link, this.data.dest);
       }
      }
      this.container.appendChild(link);
      return this.container;
     },
     _bindLink: function LinkAnnotationElement_bindLink(link, destination) {
      var self = this;
      link.href = this.linkService.getDestinationHash(destination);
      link.onclick = function () {
       if (destination) {
        self.linkService.navigateTo(destination);
       }
       return false;
      };
      if (destination) {
       link.className = 'internalLink';
      }
     },
     _bindNamedAction: function LinkAnnotationElement_bindNamedAction(link, action) {
      var self = this;
      link.href = this.linkService.getAnchorUrl('');
      link.onclick = function () {
       self.linkService.executeNamedAction(action);
       return false;
      };
      link.className = 'internalLink';
     }
    });
    return LinkAnnotationElement;
   }();
   var TextAnnotationElement = function TextAnnotationElementClosure() {
    function TextAnnotationElement(parameters) {
     var isRenderable = !!(parameters.data.hasPopup || parameters.data.title || parameters.data.contents);
     AnnotationElement.call(this, parameters, isRenderable);
    }
    Util.inherit(TextAnnotationElement, AnnotationElement, {
     render: function TextAnnotationElement_render() {
      this.container.className = 'textAnnotation';
      var image = document.createElement('img');
      image.style.height = this.container.style.height;
      image.style.width = this.container.style.width;
      image.src = this.imageResourcesPath + 'annotation-' + this.data.name.toLowerCase() + '.svg';
      image.alt = '[{{type}} Annotation]';
      image.dataset.l10nId = 'text_annotation_type';
      image.dataset.l10nArgs = JSON.stringify({ type: this.data.name });
      if (!this.data.hasPopup) {
       this._createPopup(this.container, image, this.data);
      }
      this.container.appendChild(image);
      return this.container;
     }
    });
    return TextAnnotationElement;
   }();
   var WidgetAnnotationElement = function WidgetAnnotationElementClosure() {
    function WidgetAnnotationElement(parameters, isRenderable) {
     AnnotationElement.call(this, parameters, isRenderable);
    }
    Util.inherit(WidgetAnnotationElement, AnnotationElement, {
     render: function WidgetAnnotationElement_render() {
      return this.container;
     }
    });
    return WidgetAnnotationElement;
   }();
   var TextWidgetAnnotationElement = function TextWidgetAnnotationElementClosure() {
    var TEXT_ALIGNMENT = [
     'left',
     'center',
     'right'
    ];
    function TextWidgetAnnotationElement(parameters) {
     var isRenderable = parameters.renderInteractiveForms || !parameters.data.hasAppearance && !!parameters.data.fieldValue;
     WidgetAnnotationElement.call(this, parameters, isRenderable);
    }
    Util.inherit(TextWidgetAnnotationElement, WidgetAnnotationElement, {
     render: function TextWidgetAnnotationElement_render() {
      this.container.className = 'textWidgetAnnotation';
      var element = null;
      if (this.renderInteractiveForms) {
       if (this.data.multiLine) {
        element = document.createElement('textarea');
        element.textContent = this.data.fieldValue;
       } else {
        element = document.createElement('input');
        element.type = 'text';
        element.setAttribute('value', this.data.fieldValue);
       }
       element.disabled = this.data.readOnly;
       if (this.data.maxLen !== null) {
        element.maxLength = this.data.maxLen;
       }
       if (this.data.comb) {
        var fieldWidth = this.data.rect[2] - this.data.rect[0];
        var combWidth = fieldWidth / this.data.maxLen;
        element.classList.add('comb');
        element.style.letterSpacing = 'calc(' + combWidth + 'px - 1ch)';
       }
      } else {
       element = document.createElement('div');
       element.textContent = this.data.fieldValue;
       element.style.verticalAlign = 'middle';
       element.style.display = 'table-cell';
       var font = null;
       if (this.data.fontRefName) {
        font = this.page.commonObjs.getData(this.data.fontRefName);
       }
       this._setTextStyle(element, font);
      }
      if (this.data.textAlignment !== null) {
       element.style.textAlign = TEXT_ALIGNMENT[this.data.textAlignment];
      }
      this.container.appendChild(element);
      return this.container;
     },
     _setTextStyle: function TextWidgetAnnotationElement_setTextStyle(element, font) {
      var style = element.style;
      style.fontSize = this.data.fontSize + 'px';
      style.direction = this.data.fontDirection < 0 ? 'rtl' : 'ltr';
      if (!font) {
       return;
      }
      style.fontWeight = font.black ? font.bold ? '900' : 'bold' : font.bold ? 'bold' : 'normal';
      style.fontStyle = font.italic ? 'italic' : 'normal';
      var fontFamily = font.loadedName ? '"' + font.loadedName + '", ' : '';
      var fallbackName = font.fallbackName || 'Helvetica, sans-serif';
      style.fontFamily = fontFamily + fallbackName;
     }
    });
    return TextWidgetAnnotationElement;
   }();
   var CheckboxWidgetAnnotationElement = function CheckboxWidgetAnnotationElementClosure() {
    function CheckboxWidgetAnnotationElement(parameters) {
     WidgetAnnotationElement.call(this, parameters, parameters.renderInteractiveForms);
    }
    Util.inherit(CheckboxWidgetAnnotationElement, WidgetAnnotationElement, {
     render: function CheckboxWidgetAnnotationElement_render() {
      this.container.className = 'buttonWidgetAnnotation checkBox';
      var element = document.createElement('input');
      element.disabled = this.data.readOnly;
      element.type = 'checkbox';
      if (this.data.fieldValue && this.data.fieldValue !== 'Off') {
       element.setAttribute('checked', true);
      }
      this.container.appendChild(element);
      return this.container;
     }
    });
    return CheckboxWidgetAnnotationElement;
   }();
   var RadioButtonWidgetAnnotationElement = function RadioButtonWidgetAnnotationElementClosure() {
    function RadioButtonWidgetAnnotationElement(parameters) {
     WidgetAnnotationElement.call(this, parameters, parameters.renderInteractiveForms);
    }
    Util.inherit(RadioButtonWidgetAnnotationElement, WidgetAnnotationElement, {
     render: function RadioButtonWidgetAnnotationElement_render() {
      this.container.className = 'buttonWidgetAnnotation radioButton';
      var element = document.createElement('input');
      element.disabled = this.data.readOnly;
      element.type = 'radio';
      element.name = this.data.fieldName;
      if (this.data.fieldValue === this.data.buttonValue) {
       element.setAttribute('checked', true);
      }
      this.container.appendChild(element);
      return this.container;
     }
    });
    return RadioButtonWidgetAnnotationElement;
   }();
   var ChoiceWidgetAnnotationElement = function ChoiceWidgetAnnotationElementClosure() {
    function ChoiceWidgetAnnotationElement(parameters) {
     WidgetAnnotationElement.call(this, parameters, parameters.renderInteractiveForms);
    }
    Util.inherit(ChoiceWidgetAnnotationElement, WidgetAnnotationElement, {
     render: function ChoiceWidgetAnnotationElement_render() {
      this.container.className = 'choiceWidgetAnnotation';
      var selectElement = document.createElement('select');
      selectElement.disabled = this.data.readOnly;
      if (!this.data.combo) {
       selectElement.size = this.data.options.length;
       if (this.data.multiSelect) {
        selectElement.multiple = true;
       }
      }
      for (var i = 0, ii = this.data.options.length; i < ii; i++) {
       var option = this.data.options[i];
       var optionElement = document.createElement('option');
       optionElement.textContent = option.displayValue;
       optionElement.value = option.exportValue;
       if (this.data.fieldValue.indexOf(option.displayValue) >= 0) {
        optionElement.setAttribute('selected', true);
       }
       selectElement.appendChild(optionElement);
      }
      this.container.appendChild(selectElement);
      return this.container;
     }
    });
    return ChoiceWidgetAnnotationElement;
   }();
   var PopupAnnotationElement = function PopupAnnotationElementClosure() {
    function PopupAnnotationElement(parameters) {
     var isRenderable = !!(parameters.data.title || parameters.data.contents);
     AnnotationElement.call(this, parameters, isRenderable);
    }
    Util.inherit(PopupAnnotationElement, AnnotationElement, {
     render: function PopupAnnotationElement_render() {
      this.container.className = 'popupAnnotation';
      var selector = '[data-annotation-id="' + this.data.parentId + '"]';
      var parentElement = this.layer.querySelector(selector);
      if (!parentElement) {
       return this.container;
      }
      var popup = new PopupElement({
       container: this.container,
       trigger: parentElement,
       color: this.data.color,
       title: this.data.title,
       contents: this.data.contents
      });
      var parentLeft = parseFloat(parentElement.style.left);
      var parentWidth = parseFloat(parentElement.style.width);
      CustomStyle.setProp('transformOrigin', this.container, -(parentLeft + parentWidth) + 'px -' + parentElement.style.top);
      this.container.style.left = parentLeft + parentWidth + 'px';
      this.container.appendChild(popup.render());
      return this.container;
     }
    });
    return PopupAnnotationElement;
   }();
   var PopupElement = function PopupElementClosure() {
    var BACKGROUND_ENLIGHT = 0.7;
    function PopupElement(parameters) {
     this.container = parameters.container;
     this.trigger = parameters.trigger;
     this.color = parameters.color;
     this.title = parameters.title;
     this.contents = parameters.contents;
     this.hideWrapper = parameters.hideWrapper || false;
     this.pinned = false;
    }
    PopupElement.prototype = {
     render: function PopupElement_render() {
      var wrapper = document.createElement('div');
      wrapper.className = 'popupWrapper';
      this.hideElement = this.hideWrapper ? wrapper : this.container;
      this.hideElement.setAttribute('hidden', true);
      var popup = document.createElement('div');
      popup.className = 'popup';
      var color = this.color;
      if (color) {
       var r = BACKGROUND_ENLIGHT * (255 - color[0]) + color[0];
       var g = BACKGROUND_ENLIGHT * (255 - color[1]) + color[1];
       var b = BACKGROUND_ENLIGHT * (255 - color[2]) + color[2];
       popup.style.backgroundColor = Util.makeCssRgb(r | 0, g | 0, b | 0);
      }
      var contents = this._formatContents(this.contents);
      var title = document.createElement('h1');
      title.textContent = this.title;
      this.trigger.addEventListener('click', this._toggle.bind(this));
      this.trigger.addEventListener('mouseover', this._show.bind(this, false));
      this.trigger.addEventListener('mouseout', this._hide.bind(this, false));
      popup.addEventListener('click', this._hide.bind(this, true));
      popup.appendChild(title);
      popup.appendChild(contents);
      wrapper.appendChild(popup);
      return wrapper;
     },
     _formatContents: function PopupElement_formatContents(contents) {
      var p = document.createElement('p');
      var lines = contents.split(/(?:\r\n?|\n)/);
      for (var i = 0, ii = lines.length; i < ii; ++i) {
       var line = lines[i];
       p.appendChild(document.createTextNode(line));
       if (i < ii - 1) {
        p.appendChild(document.createElement('br'));
       }
      }
      return p;
     },
     _toggle: function PopupElement_toggle() {
      if (this.pinned) {
       this._hide(true);
      } else {
       this._show(true);
      }
     },
     _show: function PopupElement_show(pin) {
      if (pin) {
       this.pinned = true;
      }
      if (this.hideElement.hasAttribute('hidden')) {
       this.hideElement.removeAttribute('hidden');
       this.container.style.zIndex += 1;
      }
     },
     _hide: function PopupElement_hide(unpin) {
      if (unpin) {
       this.pinned = false;
      }
      if (!this.hideElement.hasAttribute('hidden') && !this.pinned) {
       this.hideElement.setAttribute('hidden', true);
       this.container.style.zIndex -= 1;
      }
     }
    };
    return PopupElement;
   }();
   var HighlightAnnotationElement = function HighlightAnnotationElementClosure() {
    function HighlightAnnotationElement(parameters) {
     var isRenderable = !!(parameters.data.hasPopup || parameters.data.title || parameters.data.contents);
     AnnotationElement.call(this, parameters, isRenderable);
    }
    Util.inherit(HighlightAnnotationElement, AnnotationElement, {
     render: function HighlightAnnotationElement_render() {
      this.container.className = 'highlightAnnotation';
      if (!this.data.hasPopup) {
       this._createPopup(this.container, null, this.data);
      }
      return this.container;
     }
    });
    return HighlightAnnotationElement;
   }();
   var UnderlineAnnotationElement = function UnderlineAnnotationElementClosure() {
    function UnderlineAnnotationElement(parameters) {
     var isRenderable = !!(parameters.data.hasPopup || parameters.data.title || parameters.data.contents);
     AnnotationElement.call(this, parameters, isRenderable);
    }
    Util.inherit(UnderlineAnnotationElement, AnnotationElement, {
     render: function UnderlineAnnotationElement_render() {
      this.container.className = 'underlineAnnotation';
      if (!this.data.hasPopup) {
       this._createPopup(this.container, null, this.data);
      }
      return this.container;
     }
    });
    return UnderlineAnnotationElement;
   }();
   var SquigglyAnnotationElement = function SquigglyAnnotationElementClosure() {
    function SquigglyAnnotationElement(parameters) {
     var isRenderable = !!(parameters.data.hasPopup || parameters.data.title || parameters.data.contents);
     AnnotationElement.call(this, parameters, isRenderable);
    }
    Util.inherit(SquigglyAnnotationElement, AnnotationElement, {
     render: function SquigglyAnnotationElement_render() {
      this.container.className = 'squigglyAnnotation';
      if (!this.data.hasPopup) {
       this._createPopup(this.container, null, this.data);
      }
      return this.container;
     }
    });
    return SquigglyAnnotationElement;
   }();
   var StrikeOutAnnotationElement = function StrikeOutAnnotationElementClosure() {
    function StrikeOutAnnotationElement(parameters) {
     var isRenderable = !!(parameters.data.hasPopup || parameters.data.title || parameters.data.contents);
     AnnotationElement.call(this, parameters, isRenderable);
    }
    Util.inherit(StrikeOutAnnotationElement, AnnotationElement, {
     render: function StrikeOutAnnotationElement_render() {
      this.container.className = 'strikeoutAnnotation';
      if (!this.data.hasPopup) {
       this._createPopup(this.container, null, this.data);
      }
      return this.container;
     }
    });
    return StrikeOutAnnotationElement;
   }();
   var FileAttachmentAnnotationElement = function FileAttachmentAnnotationElementClosure() {
    function FileAttachmentAnnotationElement(parameters) {
     AnnotationElement.call(this, parameters, true);
     this.filename = getFilenameFromUrl(parameters.data.file.filename);
     this.content = parameters.data.file.content;
    }
    Util.inherit(FileAttachmentAnnotationElement, AnnotationElement, {
     render: function FileAttachmentAnnotationElement_render() {
      this.container.className = 'fileAttachmentAnnotation';
      var trigger = document.createElement('div');
      trigger.style.height = this.container.style.height;
      trigger.style.width = this.container.style.width;
      trigger.addEventListener('dblclick', this._download.bind(this));
      if (!this.data.hasPopup && (this.data.title || this.data.contents)) {
       this._createPopup(this.container, trigger, this.data);
      }
      this.container.appendChild(trigger);
      return this.container;
     },
     _download: function FileAttachmentAnnotationElement_download() {
      if (!this.downloadManager) {
       warn('Download cannot be started due to unavailable download manager');
       return;
      }
      this.downloadManager.downloadData(this.content, this.filename, '');
     }
    });
    return FileAttachmentAnnotationElement;
   }();
   var AnnotationLayer = function AnnotationLayerClosure() {
    return {
     render: function AnnotationLayer_render(parameters) {
      var annotationElementFactory = new AnnotationElementFactory();
      for (var i = 0, ii = parameters.annotations.length; i < ii; i++) {
       var data = parameters.annotations[i];
       if (!data) {
        continue;
       }
       var properties = {
        data: data,
        layer: parameters.div,
        page: parameters.page,
        viewport: parameters.viewport,
        linkService: parameters.linkService,
        downloadManager: parameters.downloadManager,
        imageResourcesPath: parameters.imageResourcesPath || getDefaultSetting('imageResourcesPath'),
        renderInteractiveForms: parameters.renderInteractiveForms || false
       };
       var element = annotationElementFactory.create(properties);
       if (element.isRenderable) {
        parameters.div.appendChild(element.render());
       }
      }
     },
     update: function AnnotationLayer_update(parameters) {
      for (var i = 0, ii = parameters.annotations.length; i < ii; i++) {
       var data = parameters.annotations[i];
       var element = parameters.div.querySelector('[data-annotation-id="' + data.id + '"]');
       if (element) {
        CustomStyle.setProp('transform', element, 'matrix(' + parameters.viewport.transform.join(',') + ')');
       }
      }
      parameters.div.removeAttribute('hidden');
     }
    };
   }();
   exports.AnnotationLayer = AnnotationLayer;
  }));
  (function (root, factory) {
   factory(root.pdfjsDisplayTextLayer = {}, root.pdfjsSharedUtil, root.pdfjsDisplayDOMUtils);
  }(this, function (exports, sharedUtil, displayDOMUtils) {
   var Util = sharedUtil.Util;
   var createPromiseCapability = sharedUtil.createPromiseCapability;
   var CustomStyle = displayDOMUtils.CustomStyle;
   var getDefaultSetting = displayDOMUtils.getDefaultSetting;
   var renderTextLayer = function renderTextLayerClosure() {
    var MAX_TEXT_DIVS_TO_RENDER = 100000;
    var NonWhitespaceRegexp = /\S/;
    function isAllWhitespace(str) {
     return !NonWhitespaceRegexp.test(str);
    }
    var styleBuf = [
     'left: ',
     0,
     'px; top: ',
     0,
     'px; font-size: ',
     0,
     'px; font-family: ',
     '',
     ';'
    ];
    function appendText(task, geom, styles) {
     var textDiv = document.createElement('div');
     var textDivProperties = {
      style: null,
      angle: 0,
      canvasWidth: 0,
      isWhitespace: false,
      originalTransform: null,
      paddingBottom: 0,
      paddingLeft: 0,
      paddingRight: 0,
      paddingTop: 0,
      scale: 1
     };
     task._textDivs.push(textDiv);
     if (isAllWhitespace(geom.str)) {
      textDivProperties.isWhitespace = true;
      task._textDivProperties.set(textDiv, textDivProperties);
      return;
     }
     var tx = Util.transform(task._viewport.transform, geom.transform);
     var angle = Math.atan2(tx[1], tx[0]);
     var style = styles[geom.fontName];
     if (style.vertical) {
      angle += Math.PI / 2;
     }
     var fontHeight = Math.sqrt(tx[2] * tx[2] + tx[3] * tx[3]);
     var fontAscent = fontHeight;
     if (style.ascent) {
      fontAscent = style.ascent * fontAscent;
     } else if (style.descent) {
      fontAscent = (1 + style.descent) * fontAscent;
     }
     var left;
     var top;
     if (angle === 0) {
      left = tx[4];
      top = tx[5] - fontAscent;
     } else {
      left = tx[4] + fontAscent * Math.sin(angle);
      top = tx[5] - fontAscent * Math.cos(angle);
     }
     styleBuf[1] = left;
     styleBuf[3] = top;
     styleBuf[5] = fontHeight;
     styleBuf[7] = style.fontFamily;
     textDivProperties.style = styleBuf.join('');
     textDiv.setAttribute('style', textDivProperties.style);
     textDiv.textContent = geom.str;
     if (getDefaultSetting('pdfBug')) {
      textDiv.dataset.fontName = geom.fontName;
     }
     if (angle !== 0) {
      textDivProperties.angle = angle * (180 / Math.PI);
     }
     if (geom.str.length > 1) {
      if (style.vertical) {
       textDivProperties.canvasWidth = geom.height * task._viewport.scale;
      } else {
       textDivProperties.canvasWidth = geom.width * task._viewport.scale;
      }
     }
     task._textDivProperties.set(textDiv, textDivProperties);
     if (task._enhanceTextSelection) {
      var angleCos = 1, angleSin = 0;
      if (angle !== 0) {
       angleCos = Math.cos(angle);
       angleSin = Math.sin(angle);
      }
      var divWidth = (style.vertical ? geom.height : geom.width) * task._viewport.scale;
      var divHeight = fontHeight;
      var m, b;
      if (angle !== 0) {
       m = [
        angleCos,
        angleSin,
        -angleSin,
        angleCos,
        left,
        top
       ];
       b = Util.getAxialAlignedBoundingBox([
        0,
        0,
        divWidth,
        divHeight
       ], m);
      } else {
       b = [
        left,
        top,
        left + divWidth,
        top + divHeight
       ];
      }
      task._bounds.push({
       left: b[0],
       top: b[1],
       right: b[2],
       bottom: b[3],
       div: textDiv,
       size: [
        divWidth,
        divHeight
       ],
       m: m
      });
     }
    }
    function render(task) {
     if (task._canceled) {
      return;
     }
     var textLayerFrag = task._container;
     var textDivs = task._textDivs;
     var capability = task._capability;
     var textDivsLength = textDivs.length;
     if (textDivsLength > MAX_TEXT_DIVS_TO_RENDER) {
      task._renderingDone = true;
      capability.resolve();
      return;
     }
     var canvas = document.createElement('canvas');
     canvas.mozOpaque = true;
     var ctx = canvas.getContext('2d', { alpha: false });
     var lastFontSize;
     var lastFontFamily;
     for (var i = 0; i < textDivsLength; i++) {
      var textDiv = textDivs[i];
      var textDivProperties = task._textDivProperties.get(textDiv);
      if (textDivProperties.isWhitespace) {
       continue;
      }
      var fontSize = textDiv.style.fontSize;
      var fontFamily = textDiv.style.fontFamily;
      if (fontSize !== lastFontSize || fontFamily !== lastFontFamily) {
       ctx.font = fontSize + ' ' + fontFamily;
       lastFontSize = fontSize;
       lastFontFamily = fontFamily;
      }
      var width = ctx.measureText(textDiv.textContent).width;
      textLayerFrag.appendChild(textDiv);
      var transform = '';
      if (textDivProperties.canvasWidth !== 0 && width > 0) {
       textDivProperties.scale = textDivProperties.canvasWidth / width;
       transform = 'scaleX(' + textDivProperties.scale + ')';
      }
      if (textDivProperties.angle !== 0) {
       transform = 'rotate(' + textDivProperties.angle + 'deg) ' + transform;
      }
      if (transform !== '') {
       textDivProperties.originalTransform = transform;
       CustomStyle.setProp('transform', textDiv, transform);
      }
      task._textDivProperties.set(textDiv, textDivProperties);
     }
     task._renderingDone = true;
     capability.resolve();
    }
    function expand(task) {
     var bounds = task._bounds;
     var viewport = task._viewport;
     var expanded = expandBounds(viewport.width, viewport.height, bounds);
     for (var i = 0; i < expanded.length; i++) {
      var div = bounds[i].div;
      var divProperties = task._textDivProperties.get(div);
      if (divProperties.angle === 0) {
       divProperties.paddingLeft = bounds[i].left - expanded[i].left;
       divProperties.paddingTop = bounds[i].top - expanded[i].top;
       divProperties.paddingRight = expanded[i].right - bounds[i].right;
       divProperties.paddingBottom = expanded[i].bottom - bounds[i].bottom;
       task._textDivProperties.set(div, divProperties);
       continue;
      }
      var e = expanded[i], b = bounds[i];
      var m = b.m, c = m[0], s = m[1];
      var points = [
       [
        0,
        0
       ],
       [
        0,
        b.size[1]
       ],
       [
        b.size[0],
        0
       ],
       b.size
      ];
      var ts = new Float64Array(64);
      points.forEach(function (p, i) {
       var t = Util.applyTransform(p, m);
       ts[i + 0] = c && (e.left - t[0]) / c;
       ts[i + 4] = s && (e.top - t[1]) / s;
       ts[i + 8] = c && (e.right - t[0]) / c;
       ts[i + 12] = s && (e.bottom - t[1]) / s;
       ts[i + 16] = s && (e.left - t[0]) / -s;
       ts[i + 20] = c && (e.top - t[1]) / c;
       ts[i + 24] = s && (e.right - t[0]) / -s;
       ts[i + 28] = c && (e.bottom - t[1]) / c;
       ts[i + 32] = c && (e.left - t[0]) / -c;
       ts[i + 36] = s && (e.top - t[1]) / -s;
       ts[i + 40] = c && (e.right - t[0]) / -c;
       ts[i + 44] = s && (e.bottom - t[1]) / -s;
       ts[i + 48] = s && (e.left - t[0]) / s;
       ts[i + 52] = c && (e.top - t[1]) / -c;
       ts[i + 56] = s && (e.right - t[0]) / s;
       ts[i + 60] = c && (e.bottom - t[1]) / -c;
      });
      var findPositiveMin = function (ts, offset, count) {
       var result = 0;
       for (var i = 0; i < count; i++) {
        var t = ts[offset++];
        if (t > 0) {
         result = result ? Math.min(t, result) : t;
        }
       }
       return result;
      };
      var boxScale = 1 + Math.min(Math.abs(c), Math.abs(s));
      divProperties.paddingLeft = findPositiveMin(ts, 32, 16) / boxScale;
      divProperties.paddingTop = findPositiveMin(ts, 48, 16) / boxScale;
      divProperties.paddingRight = findPositiveMin(ts, 0, 16) / boxScale;
      divProperties.paddingBottom = findPositiveMin(ts, 16, 16) / boxScale;
      task._textDivProperties.set(div, divProperties);
     }
    }
    function expandBounds(width, height, boxes) {
     var bounds = boxes.map(function (box, i) {
      return {
       x1: box.left,
       y1: box.top,
       x2: box.right,
       y2: box.bottom,
       index: i,
       x1New: undefined,
       x2New: undefined
      };
     });
     expandBoundsLTR(width, bounds);
     var expanded = new Array(boxes.length);
     bounds.forEach(function (b) {
      var i = b.index;
      expanded[i] = {
       left: b.x1New,
       top: 0,
       right: b.x2New,
       bottom: 0
      };
     });
     boxes.map(function (box, i) {
      var e = expanded[i], b = bounds[i];
      b.x1 = box.top;
      b.y1 = width - e.right;
      b.x2 = box.bottom;
      b.y2 = width - e.left;
      b.index = i;
      b.x1New = undefined;
      b.x2New = undefined;
     });
     expandBoundsLTR(height, bounds);
     bounds.forEach(function (b) {
      var i = b.index;
      expanded[i].top = b.x1New;
      expanded[i].bottom = b.x2New;
     });
     return expanded;
    }
    function expandBoundsLTR(width, bounds) {
     bounds.sort(function (a, b) {
      return a.x1 - b.x1 || a.index - b.index;
     });
     var fakeBoundary = {
      x1: -Infinity,
      y1: -Infinity,
      x2: 0,
      y2: Infinity,
      index: -1,
      x1New: 0,
      x2New: 0
     };
     var horizon = [{
       start: -Infinity,
       end: Infinity,
       boundary: fakeBoundary
      }];
     bounds.forEach(function (boundary) {
      var i = 0;
      while (i < horizon.length && horizon[i].end <= boundary.y1) {
       i++;
      }
      var j = horizon.length - 1;
      while (j >= 0 && horizon[j].start >= boundary.y2) {
       j--;
      }
      var horizonPart, affectedBoundary;
      var q, k, maxXNew = -Infinity;
      for (q = i; q <= j; q++) {
       horizonPart = horizon[q];
       affectedBoundary = horizonPart.boundary;
       var xNew;
       if (affectedBoundary.x2 > boundary.x1) {
        xNew = affectedBoundary.index > boundary.index ? affectedBoundary.x1New : boundary.x1;
       } else if (affectedBoundary.x2New === undefined) {
        xNew = (affectedBoundary.x2 + boundary.x1) / 2;
       } else {
        xNew = affectedBoundary.x2New;
       }
       if (xNew > maxXNew) {
        maxXNew = xNew;
       }
      }
      boundary.x1New = maxXNew;
      for (q = i; q <= j; q++) {
       horizonPart = horizon[q];
       affectedBoundary = horizonPart.boundary;
       if (affectedBoundary.x2New === undefined) {
        if (affectedBoundary.x2 > boundary.x1) {
         if (affectedBoundary.index > boundary.index) {
          affectedBoundary.x2New = affectedBoundary.x2;
         }
        } else {
         affectedBoundary.x2New = maxXNew;
        }
       } else if (affectedBoundary.x2New > maxXNew) {
        affectedBoundary.x2New = Math.max(maxXNew, affectedBoundary.x2);
       }
      }
      var changedHorizon = [], lastBoundary = null;
      for (q = i; q <= j; q++) {
       horizonPart = horizon[q];
       affectedBoundary = horizonPart.boundary;
       var useBoundary = affectedBoundary.x2 > boundary.x2 ? affectedBoundary : boundary;
       if (lastBoundary === useBoundary) {
        changedHorizon[changedHorizon.length - 1].end = horizonPart.end;
       } else {
        changedHorizon.push({
         start: horizonPart.start,
         end: horizonPart.end,
         boundary: useBoundary
        });
        lastBoundary = useBoundary;
       }
      }
      if (horizon[i].start < boundary.y1) {
       changedHorizon[0].start = boundary.y1;
       changedHorizon.unshift({
        start: horizon[i].start,
        end: boundary.y1,
        boundary: horizon[i].boundary
       });
      }
      if (boundary.y2 < horizon[j].end) {
       changedHorizon[changedHorizon.length - 1].end = boundary.y2;
       changedHorizon.push({
        start: boundary.y2,
        end: horizon[j].end,
        boundary: horizon[j].boundary
       });
      }
      for (q = i; q <= j; q++) {
       horizonPart = horizon[q];
       affectedBoundary = horizonPart.boundary;
       if (affectedBoundary.x2New !== undefined) {
        continue;
       }
       var used = false;
       for (k = i - 1; !used && k >= 0 && horizon[k].start >= affectedBoundary.y1; k--) {
        used = horizon[k].boundary === affectedBoundary;
       }
       for (k = j + 1; !used && k < horizon.length && horizon[k].end <= affectedBoundary.y2; k++) {
        used = horizon[k].boundary === affectedBoundary;
       }
       for (k = 0; !used && k < changedHorizon.length; k++) {
        used = changedHorizon[k].boundary === affectedBoundary;
       }
       if (!used) {
        affectedBoundary.x2New = maxXNew;
       }
      }
      Array.prototype.splice.apply(horizon, [
       i,
       j - i + 1
      ].concat(changedHorizon));
     });
     horizon.forEach(function (horizonPart) {
      var affectedBoundary = horizonPart.boundary;
      if (affectedBoundary.x2New === undefined) {
       affectedBoundary.x2New = Math.max(width, affectedBoundary.x2);
      }
     });
    }
    function TextLayerRenderTask(textContent, container, viewport, textDivs, enhanceTextSelection) {
     this._textContent = textContent;
     this._container = container;
     this._viewport = viewport;
     this._textDivs = textDivs || [];
     this._textDivProperties = new WeakMap();
     this._renderingDone = false;
     this._canceled = false;
     this._capability = createPromiseCapability();
     this._renderTimer = null;
     this._bounds = [];
     this._enhanceTextSelection = !!enhanceTextSelection;
    }
    TextLayerRenderTask.prototype = {
     get promise() {
      return this._capability.promise;
     },
     cancel: function TextLayer_cancel() {
      this._canceled = true;
      if (this._renderTimer !== null) {
       clearTimeout(this._renderTimer);
       this._renderTimer = null;
      }
      this._capability.reject('canceled');
     },
     _render: function TextLayer_render(timeout) {
      var textItems = this._textContent.items;
      var textStyles = this._textContent.styles;
      for (var i = 0, len = textItems.length; i < len; i++) {
       appendText(this, textItems[i], textStyles);
      }
      if (!timeout) {
       render(this);
      } else {
       var self = this;
       this._renderTimer = setTimeout(function () {
        render(self);
        self._renderTimer = null;
       }, timeout);
      }
     },
     expandTextDivs: function TextLayer_expandTextDivs(expandDivs) {
      if (!this._enhanceTextSelection || !this._renderingDone) {
       return;
      }
      if (this._bounds !== null) {
       expand(this);
       this._bounds = null;
      }
      for (var i = 0, ii = this._textDivs.length; i < ii; i++) {
       var div = this._textDivs[i];
       var divProperties = this._textDivProperties.get(div);
       if (divProperties.isWhitespace) {
        continue;
       }
       if (expandDivs) {
        var transform = '', padding = '';
        if (divProperties.scale !== 1) {
         transform = 'scaleX(' + divProperties.scale + ')';
        }
        if (divProperties.angle !== 0) {
         transform = 'rotate(' + divProperties.angle + 'deg) ' + transform;
        }
        if (divProperties.paddingLeft !== 0) {
         padding += ' padding-left: ' + divProperties.paddingLeft / divProperties.scale + 'px;';
         transform += ' translateX(' + -divProperties.paddingLeft / divProperties.scale + 'px)';
        }
        if (divProperties.paddingTop !== 0) {
         padding += ' padding-top: ' + divProperties.paddingTop + 'px;';
         transform += ' translateY(' + -divProperties.paddingTop + 'px)';
        }
        if (divProperties.paddingRight !== 0) {
         padding += ' padding-right: ' + divProperties.paddingRight / divProperties.scale + 'px;';
        }
        if (divProperties.paddingBottom !== 0) {
         padding += ' padding-bottom: ' + divProperties.paddingBottom + 'px;';
        }
        if (padding !== '') {
         div.setAttribute('style', divProperties.style + padding);
        }
        if (transform !== '') {
         CustomStyle.setProp('transform', div, transform);
        }
       } else {
        div.style.padding = 0;
        CustomStyle.setProp('transform', div, divProperties.originalTransform || '');
       }
      }
     }
    };
    function renderTextLayer(renderParameters) {
     var task = new TextLayerRenderTask(renderParameters.textContent, renderParameters.container, renderParameters.viewport, renderParameters.textDivs, renderParameters.enhanceTextSelection);
     task._render(renderParameters.timeout);
     return task;
    }
    return renderTextLayer;
   }();
   exports.renderTextLayer = renderTextLayer;
  }));
  (function (root, factory) {
   factory(root.pdfjsDisplayWebGL = {}, root.pdfjsSharedUtil, root.pdfjsDisplayDOMUtils);
  }(this, function (exports, sharedUtil, displayDOMUtils) {
   var shadow = sharedUtil.shadow;
   var getDefaultSetting = displayDOMUtils.getDefaultSetting;
   var WebGLUtils = function WebGLUtilsClosure() {
    function loadShader(gl, code, shaderType) {
     var shader = gl.createShader(shaderType);
     gl.shaderSource(shader, code);
     gl.compileShader(shader);
     var compiled = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
     if (!compiled) {
      var errorMsg = gl.getShaderInfoLog(shader);
      throw new Error('Error during shader compilation: ' + errorMsg);
     }
     return shader;
    }
    function createVertexShader(gl, code) {
     return loadShader(gl, code, gl.VERTEX_SHADER);
    }
    function createFragmentShader(gl, code) {
     return loadShader(gl, code, gl.FRAGMENT_SHADER);
    }
    function createProgram(gl, shaders) {
     var program = gl.createProgram();
     for (var i = 0, ii = shaders.length; i < ii; ++i) {
      gl.attachShader(program, shaders[i]);
     }
     gl.linkProgram(program);
     var linked = gl.getProgramParameter(program, gl.LINK_STATUS);
     if (!linked) {
      var errorMsg = gl.getProgramInfoLog(program);
      throw new Error('Error during program linking: ' + errorMsg);
     }
     return program;
    }
    function createTexture(gl, image, textureId) {
     gl.activeTexture(textureId);
     var texture = gl.createTexture();
     gl.bindTexture(gl.TEXTURE_2D, texture);
     gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
     gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
     gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
     gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
     gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
     return texture;
    }
    var currentGL, currentCanvas;
    function generateGL() {
     if (currentGL) {
      return;
     }
     currentCanvas = document.createElement('canvas');
     currentGL = currentCanvas.getContext('webgl', { premultipliedalpha: false });
    }
    var smaskVertexShaderCode = '\
  attribute vec2 a_position;                                    \
  attribute vec2 a_texCoord;                                    \
                                                                \
  uniform vec2 u_resolution;                                    \
                                                                \
  varying vec2 v_texCoord;                                      \
                                                                \
  void main() {                                                 \
    vec2 clipSpace = (a_position / u_resolution) * 2.0 - 1.0;   \
    gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);          \
                                                                \
    v_texCoord = a_texCoord;                                    \
  }                                                             ';
    var smaskFragmentShaderCode = '\
  precision mediump float;                                      \
                                                                \
  uniform vec4 u_backdrop;                                      \
  uniform int u_subtype;                                        \
  uniform sampler2D u_image;                                    \
  uniform sampler2D u_mask;                                     \
                                                                \
  varying vec2 v_texCoord;                                      \
                                                                \
  void main() {                                                 \
    vec4 imageColor = texture2D(u_image, v_texCoord);           \
    vec4 maskColor = texture2D(u_mask, v_texCoord);             \
    if (u_backdrop.a > 0.0) {                                   \
      maskColor.rgb = maskColor.rgb * maskColor.a +             \
                      u_backdrop.rgb * (1.0 - maskColor.a);     \
    }                                                           \
    float lum;                                                  \
    if (u_subtype == 0) {                                       \
      lum = maskColor.a;                                        \
    } else {                                                    \
      lum = maskColor.r * 0.3 + maskColor.g * 0.59 +            \
            maskColor.b * 0.11;                                 \
    }                                                           \
    imageColor.a *= lum;                                        \
    imageColor.rgb *= imageColor.a;                             \
    gl_FragColor = imageColor;                                  \
  }                                                             ';
    var smaskCache = null;
    function initSmaskGL() {
     var canvas, gl;
     generateGL();
     canvas = currentCanvas;
     currentCanvas = null;
     gl = currentGL;
     currentGL = null;
     var vertexShader = createVertexShader(gl, smaskVertexShaderCode);
     var fragmentShader = createFragmentShader(gl, smaskFragmentShaderCode);
     var program = createProgram(gl, [
      vertexShader,
      fragmentShader
     ]);
     gl.useProgram(program);
     var cache = {};
     cache.gl = gl;
     cache.canvas = canvas;
     cache.resolutionLocation = gl.getUniformLocation(program, 'u_resolution');
     cache.positionLocation = gl.getAttribLocation(program, 'a_position');
     cache.backdropLocation = gl.getUniformLocation(program, 'u_backdrop');
     cache.subtypeLocation = gl.getUniformLocation(program, 'u_subtype');
     var texCoordLocation = gl.getAttribLocation(program, 'a_texCoord');
     var texLayerLocation = gl.getUniformLocation(program, 'u_image');
     var texMaskLocation = gl.getUniformLocation(program, 'u_mask');
     var texCoordBuffer = gl.createBuffer();
     gl.bindBuffer(gl.ARRAY_BUFFER, texCoordBuffer);
     gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
      0.0,
      0.0,
      1.0,
      0.0,
      0.0,
      1.0,
      0.0,
      1.0,
      1.0,
      0.0,
      1.0,
      1.0
     ]), gl.STATIC_DRAW);
     gl.enableVertexAttribArray(texCoordLocation);
     gl.vertexAttribPointer(texCoordLocation, 2, gl.FLOAT, false, 0, 0);
     gl.uniform1i(texLayerLocation, 0);
     gl.uniform1i(texMaskLocation, 1);
     smaskCache = cache;
    }
    function composeSMask(layer, mask, properties) {
     var width = layer.width, height = layer.height;
     if (!smaskCache) {
      initSmaskGL();
     }
     var cache = smaskCache, canvas = cache.canvas, gl = cache.gl;
     canvas.width = width;
     canvas.height = height;
     gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
     gl.uniform2f(cache.resolutionLocation, width, height);
     if (properties.backdrop) {
      gl.uniform4f(cache.resolutionLocation, properties.backdrop[0], properties.backdrop[1], properties.backdrop[2], 1);
     } else {
      gl.uniform4f(cache.resolutionLocation, 0, 0, 0, 0);
     }
     gl.uniform1i(cache.subtypeLocation, properties.subtype === 'Luminosity' ? 1 : 0);
     var texture = createTexture(gl, layer, gl.TEXTURE0);
     var maskTexture = createTexture(gl, mask, gl.TEXTURE1);
     var buffer = gl.createBuffer();
     gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
     gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
      0,
      0,
      width,
      0,
      0,
      height,
      0,
      height,
      width,
      0,
      width,
      height
     ]), gl.STATIC_DRAW);
     gl.enableVertexAttribArray(cache.positionLocation);
     gl.vertexAttribPointer(cache.positionLocation, 2, gl.FLOAT, false, 0, 0);
     gl.clearColor(0, 0, 0, 0);
     gl.enable(gl.BLEND);
     gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
     gl.clear(gl.COLOR_BUFFER_BIT);
     gl.drawArrays(gl.TRIANGLES, 0, 6);
     gl.flush();
     gl.deleteTexture(texture);
     gl.deleteTexture(maskTexture);
     gl.deleteBuffer(buffer);
     return canvas;
    }
    var figuresVertexShaderCode = '\
  attribute vec2 a_position;                                    \
  attribute vec3 a_color;                                       \
                                                                \
  uniform vec2 u_resolution;                                    \
  uniform vec2 u_scale;                                         \
  uniform vec2 u_offset;                                        \
                                                                \
  varying vec4 v_color;                                         \
                                                                \
  void main() {                                                 \
    vec2 position = (a_position + u_offset) * u_scale;          \
    vec2 clipSpace = (position / u_resolution) * 2.0 - 1.0;     \
    gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);          \
                                                                \
    v_color = vec4(a_color / 255.0, 1.0);                       \
  }                                                             ';
    var figuresFragmentShaderCode = '\
  precision mediump float;                                      \
                                                                \
  varying vec4 v_color;                                         \
                                                                \
  void main() {                                                 \
    gl_FragColor = v_color;                                     \
  }                                                             ';
    var figuresCache = null;
    function initFiguresGL() {
     var canvas, gl;
     generateGL();
     canvas = currentCanvas;
     currentCanvas = null;
     gl = currentGL;
     currentGL = null;
     var vertexShader = createVertexShader(gl, figuresVertexShaderCode);
     var fragmentShader = createFragmentShader(gl, figuresFragmentShaderCode);
     var program = createProgram(gl, [
      vertexShader,
      fragmentShader
     ]);
     gl.useProgram(program);
     var cache = {};
     cache.gl = gl;
     cache.canvas = canvas;
     cache.resolutionLocation = gl.getUniformLocation(program, 'u_resolution');
     cache.scaleLocation = gl.getUniformLocation(program, 'u_scale');
     cache.offsetLocation = gl.getUniformLocation(program, 'u_offset');
     cache.positionLocation = gl.getAttribLocation(program, 'a_position');
     cache.colorLocation = gl.getAttribLocation(program, 'a_color');
     figuresCache = cache;
    }
    function drawFigures(width, height, backgroundColor, figures, context) {
     if (!figuresCache) {
      initFiguresGL();
     }
     var cache = figuresCache, canvas = cache.canvas, gl = cache.gl;
     canvas.width = width;
     canvas.height = height;
     gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
     gl.uniform2f(cache.resolutionLocation, width, height);
     var count = 0;
     var i, ii, rows;
     for (i = 0, ii = figures.length; i < ii; i++) {
      switch (figures[i].type) {
      case 'lattice':
       rows = figures[i].coords.length / figures[i].verticesPerRow | 0;
       count += (rows - 1) * (figures[i].verticesPerRow - 1) * 6;
       break;
      case 'triangles':
       count += figures[i].coords.length;
       break;
      }
     }
     var coords = new Float32Array(count * 2);
     var colors = new Uint8Array(count * 3);
     var coordsMap = context.coords, colorsMap = context.colors;
     var pIndex = 0, cIndex = 0;
     for (i = 0, ii = figures.length; i < ii; i++) {
      var figure = figures[i], ps = figure.coords, cs = figure.colors;
      switch (figure.type) {
      case 'lattice':
       var cols = figure.verticesPerRow;
       rows = ps.length / cols | 0;
       for (var row = 1; row < rows; row++) {
        var offset = row * cols + 1;
        for (var col = 1; col < cols; col++, offset++) {
         coords[pIndex] = coordsMap[ps[offset - cols - 1]];
         coords[pIndex + 1] = coordsMap[ps[offset - cols - 1] + 1];
         coords[pIndex + 2] = coordsMap[ps[offset - cols]];
         coords[pIndex + 3] = coordsMap[ps[offset - cols] + 1];
         coords[pIndex + 4] = coordsMap[ps[offset - 1]];
         coords[pIndex + 5] = coordsMap[ps[offset - 1] + 1];
         colors[cIndex] = colorsMap[cs[offset - cols - 1]];
         colors[cIndex + 1] = colorsMap[cs[offset - cols - 1] + 1];
         colors[cIndex + 2] = colorsMap[cs[offset - cols - 1] + 2];
         colors[cIndex + 3] = colorsMap[cs[offset - cols]];
         colors[cIndex + 4] = colorsMap[cs[offset - cols] + 1];
         colors[cIndex + 5] = colorsMap[cs[offset - cols] + 2];
         colors[cIndex + 6] = colorsMap[cs[offset - 1]];
         colors[cIndex + 7] = colorsMap[cs[offset - 1] + 1];
         colors[cIndex + 8] = colorsMap[cs[offset - 1] + 2];
         coords[pIndex + 6] = coords[pIndex + 2];
         coords[pIndex + 7] = coords[pIndex + 3];
         coords[pIndex + 8] = coords[pIndex + 4];
         coords[pIndex + 9] = coords[pIndex + 5];
         coords[pIndex + 10] = coordsMap[ps[offset]];
         coords[pIndex + 11] = coordsMap[ps[offset] + 1];
         colors[cIndex + 9] = colors[cIndex + 3];
         colors[cIndex + 10] = colors[cIndex + 4];
         colors[cIndex + 11] = colors[cIndex + 5];
         colors[cIndex + 12] = colors[cIndex + 6];
         colors[cIndex + 13] = colors[cIndex + 7];
         colors[cIndex + 14] = colors[cIndex + 8];
         colors[cIndex + 15] = colorsMap[cs[offset]];
         colors[cIndex + 16] = colorsMap[cs[offset] + 1];
         colors[cIndex + 17] = colorsMap[cs[offset] + 2];
         pIndex += 12;
         cIndex += 18;
        }
       }
       break;
      case 'triangles':
       for (var j = 0, jj = ps.length; j < jj; j++) {
        coords[pIndex] = coordsMap[ps[j]];
        coords[pIndex + 1] = coordsMap[ps[j] + 1];
        colors[cIndex] = colorsMap[cs[j]];
        colors[cIndex + 1] = colorsMap[cs[j] + 1];
        colors[cIndex + 2] = colorsMap[cs[j] + 2];
        pIndex += 2;
        cIndex += 3;
       }
       break;
      }
     }
     if (backgroundColor) {
      gl.clearColor(backgroundColor[0] / 255, backgroundColor[1] / 255, backgroundColor[2] / 255, 1.0);
     } else {
      gl.clearColor(0, 0, 0, 0);
     }
     gl.clear(gl.COLOR_BUFFER_BIT);
     var coordsBuffer = gl.createBuffer();
     gl.bindBuffer(gl.ARRAY_BUFFER, coordsBuffer);
     gl.bufferData(gl.ARRAY_BUFFER, coords, gl.STATIC_DRAW);
     gl.enableVertexAttribArray(cache.positionLocation);
     gl.vertexAttribPointer(cache.positionLocation, 2, gl.FLOAT, false, 0, 0);
     var colorsBuffer = gl.createBuffer();
     gl.bindBuffer(gl.ARRAY_BUFFER, colorsBuffer);
     gl.bufferData(gl.ARRAY_BUFFER, colors, gl.STATIC_DRAW);
     gl.enableVertexAttribArray(cache.colorLocation);
     gl.vertexAttribPointer(cache.colorLocation, 3, gl.UNSIGNED_BYTE, false, 0, 0);
     gl.uniform2f(cache.scaleLocation, context.scaleX, context.scaleY);
     gl.uniform2f(cache.offsetLocation, context.offsetX, context.offsetY);
     gl.drawArrays(gl.TRIANGLES, 0, count);
     gl.flush();
     gl.deleteBuffer(coordsBuffer);
     gl.deleteBuffer(colorsBuffer);
     return canvas;
    }
    function cleanup() {
     if (smaskCache && smaskCache.canvas) {
      smaskCache.canvas.width = 0;
      smaskCache.canvas.height = 0;
     }
     if (figuresCache && figuresCache.canvas) {
      figuresCache.canvas.width = 0;
      figuresCache.canvas.height = 0;
     }
     smaskCache = null;
     figuresCache = null;
    }
    return {
     get isEnabled() {
      if (getDefaultSetting('disableWebGL')) {
       return false;
      }
      var enabled = false;
      try {
       generateGL();
       enabled = !!currentGL;
      } catch (e) {
      }
      return shadow(this, 'isEnabled', enabled);
     },
     composeSMask: composeSMask,
     drawFigures: drawFigures,
     clear: cleanup
    };
   }();
   exports.WebGLUtils = WebGLUtils;
  }));
  (function (root, factory) {
   factory(root.pdfjsDisplayPatternHelper = {}, root.pdfjsSharedUtil, root.pdfjsDisplayWebGL);
  }(this, function (exports, sharedUtil, displayWebGL) {
   var Util = sharedUtil.Util;
   var info = sharedUtil.info;
   var isArray = sharedUtil.isArray;
   var error = sharedUtil.error;
   var WebGLUtils = displayWebGL.WebGLUtils;
   var ShadingIRs = {};
   ShadingIRs.RadialAxial = {
    fromIR: function RadialAxial_fromIR(raw) {
     var type = raw[1];
     var colorStops = raw[2];
     var p0 = raw[3];
     var p1 = raw[4];
     var r0 = raw[5];
     var r1 = raw[6];
     return {
      type: 'Pattern',
      getPattern: function RadialAxial_getPattern(ctx) {
       var grad;
       if (type === 'axial') {
        grad = ctx.createLinearGradient(p0[0], p0[1], p1[0], p1[1]);
       } else if (type === 'radial') {
        grad = ctx.createRadialGradient(p0[0], p0[1], r0, p1[0], p1[1], r1);
       }
       for (var i = 0, ii = colorStops.length; i < ii; ++i) {
        var c = colorStops[i];
        grad.addColorStop(c[0], c[1]);
       }
       return grad;
      }
     };
    }
   };
   var createMeshCanvas = function createMeshCanvasClosure() {
    function drawTriangle(data, context, p1, p2, p3, c1, c2, c3) {
     var coords = context.coords, colors = context.colors;
     var bytes = data.data, rowSize = data.width * 4;
     var tmp;
     if (coords[p1 + 1] > coords[p2 + 1]) {
      tmp = p1;
      p1 = p2;
      p2 = tmp;
      tmp = c1;
      c1 = c2;
      c2 = tmp;
     }
     if (coords[p2 + 1] > coords[p3 + 1]) {
      tmp = p2;
      p2 = p3;
      p3 = tmp;
      tmp = c2;
      c2 = c3;
      c3 = tmp;
     }
     if (coords[p1 + 1] > coords[p2 + 1]) {
      tmp = p1;
      p1 = p2;
      p2 = tmp;
      tmp = c1;
      c1 = c2;
      c2 = tmp;
     }
     var x1 = (coords[p1] + context.offsetX) * context.scaleX;
     var y1 = (coords[p1 + 1] + context.offsetY) * context.scaleY;
     var x2 = (coords[p2] + context.offsetX) * context.scaleX;
     var y2 = (coords[p2 + 1] + context.offsetY) * context.scaleY;
     var x3 = (coords[p3] + context.offsetX) * context.scaleX;
     var y3 = (coords[p3 + 1] + context.offsetY) * context.scaleY;
     if (y1 >= y3) {
      return;
     }
     var c1r = colors[c1], c1g = colors[c1 + 1], c1b = colors[c1 + 2];
     var c2r = colors[c2], c2g = colors[c2 + 1], c2b = colors[c2 + 2];
     var c3r = colors[c3], c3g = colors[c3 + 1], c3b = colors[c3 + 2];
     var minY = Math.round(y1), maxY = Math.round(y3);
     var xa, car, cag, cab;
     var xb, cbr, cbg, cbb;
     var k;
     for (var y = minY; y <= maxY; y++) {
      if (y < y2) {
       k = y < y1 ? 0 : y1 === y2 ? 1 : (y1 - y) / (y1 - y2);
       xa = x1 - (x1 - x2) * k;
       car = c1r - (c1r - c2r) * k;
       cag = c1g - (c1g - c2g) * k;
       cab = c1b - (c1b - c2b) * k;
      } else {
       k = y > y3 ? 1 : y2 === y3 ? 0 : (y2 - y) / (y2 - y3);
       xa = x2 - (x2 - x3) * k;
       car = c2r - (c2r - c3r) * k;
       cag = c2g - (c2g - c3g) * k;
       cab = c2b - (c2b - c3b) * k;
      }
      k = y < y1 ? 0 : y > y3 ? 1 : (y1 - y) / (y1 - y3);
      xb = x1 - (x1 - x3) * k;
      cbr = c1r - (c1r - c3r) * k;
      cbg = c1g - (c1g - c3g) * k;
      cbb = c1b - (c1b - c3b) * k;
      var x1_ = Math.round(Math.min(xa, xb));
      var x2_ = Math.round(Math.max(xa, xb));
      var j = rowSize * y + x1_ * 4;
      for (var x = x1_; x <= x2_; x++) {
       k = (xa - x) / (xa - xb);
       k = k < 0 ? 0 : k > 1 ? 1 : k;
       bytes[j++] = car - (car - cbr) * k | 0;
       bytes[j++] = cag - (cag - cbg) * k | 0;
       bytes[j++] = cab - (cab - cbb) * k | 0;
       bytes[j++] = 255;
      }
     }
    }
    function drawFigure(data, figure, context) {
     var ps = figure.coords;
     var cs = figure.colors;
     var i, ii;
     switch (figure.type) {
     case 'lattice':
      var verticesPerRow = figure.verticesPerRow;
      var rows = Math.floor(ps.length / verticesPerRow) - 1;
      var cols = verticesPerRow - 1;
      for (i = 0; i < rows; i++) {
       var q = i * verticesPerRow;
       for (var j = 0; j < cols; j++, q++) {
        drawTriangle(data, context, ps[q], ps[q + 1], ps[q + verticesPerRow], cs[q], cs[q + 1], cs[q + verticesPerRow]);
        drawTriangle(data, context, ps[q + verticesPerRow + 1], ps[q + 1], ps[q + verticesPerRow], cs[q + verticesPerRow + 1], cs[q + 1], cs[q + verticesPerRow]);
       }
      }
      break;
     case 'triangles':
      for (i = 0, ii = ps.length; i < ii; i += 3) {
       drawTriangle(data, context, ps[i], ps[i + 1], ps[i + 2], cs[i], cs[i + 1], cs[i + 2]);
      }
      break;
     default:
      error('illigal figure');
      break;
     }
    }
    function createMeshCanvas(bounds, combinesScale, coords, colors, figures, backgroundColor, cachedCanvases) {
     var EXPECTED_SCALE = 1.1;
     var MAX_PATTERN_SIZE = 3000;
     var BORDER_SIZE = 2;
     var offsetX = Math.floor(bounds[0]);
     var offsetY = Math.floor(bounds[1]);
     var boundsWidth = Math.ceil(bounds[2]) - offsetX;
     var boundsHeight = Math.ceil(bounds[3]) - offsetY;
     var width = Math.min(Math.ceil(Math.abs(boundsWidth * combinesScale[0] * EXPECTED_SCALE)), MAX_PATTERN_SIZE);
     var height = Math.min(Math.ceil(Math.abs(boundsHeight * combinesScale[1] * EXPECTED_SCALE)), MAX_PATTERN_SIZE);
     var scaleX = boundsWidth / width;
     var scaleY = boundsHeight / height;
     var context = {
      coords: coords,
      colors: colors,
      offsetX: -offsetX,
      offsetY: -offsetY,
      scaleX: 1 / scaleX,
      scaleY: 1 / scaleY
     };
     var paddedWidth = width + BORDER_SIZE * 2;
     var paddedHeight = height + BORDER_SIZE * 2;
     var canvas, tmpCanvas, i, ii;
     if (WebGLUtils.isEnabled) {
      canvas = WebGLUtils.drawFigures(width, height, backgroundColor, figures, context);
      tmpCanvas = cachedCanvases.getCanvas('mesh', paddedWidth, paddedHeight, false);
      tmpCanvas.context.drawImage(canvas, BORDER_SIZE, BORDER_SIZE);
      canvas = tmpCanvas.canvas;
     } else {
      tmpCanvas = cachedCanvases.getCanvas('mesh', paddedWidth, paddedHeight, false);
      var tmpCtx = tmpCanvas.context;
      var data = tmpCtx.createImageData(width, height);
      if (backgroundColor) {
       var bytes = data.data;
       for (i = 0, ii = bytes.length; i < ii; i += 4) {
        bytes[i] = backgroundColor[0];
        bytes[i + 1] = backgroundColor[1];
        bytes[i + 2] = backgroundColor[2];
        bytes[i + 3] = 255;
       }
      }
      for (i = 0; i < figures.length; i++) {
       drawFigure(data, figures[i], context);
      }
      tmpCtx.putImageData(data, BORDER_SIZE, BORDER_SIZE);
      canvas = tmpCanvas.canvas;
     }
     return {
      canvas: canvas,
      offsetX: offsetX - BORDER_SIZE * scaleX,
      offsetY: offsetY - BORDER_SIZE * scaleY,
      scaleX: scaleX,
      scaleY: scaleY
     };
    }
    return createMeshCanvas;
   }();
   ShadingIRs.Mesh = {
    fromIR: function Mesh_fromIR(raw) {
     var coords = raw[2];
     var colors = raw[3];
     var figures = raw[4];
     var bounds = raw[5];
     var matrix = raw[6];
     var background = raw[8];
     return {
      type: 'Pattern',
      getPattern: function Mesh_getPattern(ctx, owner, shadingFill) {
       var scale;
       if (shadingFill) {
        scale = Util.singularValueDecompose2dScale(ctx.mozCurrentTransform);
       } else {
        scale = Util.singularValueDecompose2dScale(owner.baseTransform);
        if (matrix) {
         var matrixScale = Util.singularValueDecompose2dScale(matrix);
         scale = [
          scale[0] * matrixScale[0],
          scale[1] * matrixScale[1]
         ];
        }
       }
       var temporaryPatternCanvas = createMeshCanvas(bounds, scale, coords, colors, figures, shadingFill ? null : background, owner.cachedCanvases);
       if (!shadingFill) {
        ctx.setTransform.apply(ctx, owner.baseTransform);
        if (matrix) {
         ctx.transform.apply(ctx, matrix);
        }
       }
       ctx.translate(temporaryPatternCanvas.offsetX, temporaryPatternCanvas.offsetY);
       ctx.scale(temporaryPatternCanvas.scaleX, temporaryPatternCanvas.scaleY);
       return ctx.createPattern(temporaryPatternCanvas.canvas, 'no-repeat');
      }
     };
    }
   };
   ShadingIRs.Dummy = {
    fromIR: function Dummy_fromIR() {
     return {
      type: 'Pattern',
      getPattern: function Dummy_fromIR_getPattern() {
       return 'hotpink';
      }
     };
    }
   };
   function getShadingPatternFromIR(raw) {
    var shadingIR = ShadingIRs[raw[0]];
    if (!shadingIR) {
     error('Unknown IR type: ' + raw[0]);
    }
    return shadingIR.fromIR(raw);
   }
   var TilingPattern = function TilingPatternClosure() {
    var PaintType = {
     COLORED: 1,
     UNCOLORED: 2
    };
    var MAX_PATTERN_SIZE = 3000;
    function TilingPattern(IR, color, ctx, canvasGraphicsFactory, baseTransform) {
     this.operatorList = IR[2];
     this.matrix = IR[3] || [
      1,
      0,
      0,
      1,
      0,
      0
     ];
     this.bbox = IR[4];
     this.xstep = IR[5];
     this.ystep = IR[6];
     this.paintType = IR[7];
     this.tilingType = IR[8];
     this.color = color;
     this.canvasGraphicsFactory = canvasGraphicsFactory;
     this.baseTransform = baseTransform;
     this.type = 'Pattern';
     this.ctx = ctx;
    }
    TilingPattern.prototype = {
     createPatternCanvas: function TilinPattern_createPatternCanvas(owner) {
      var operatorList = this.operatorList;
      var bbox = this.bbox;
      var xstep = this.xstep;
      var ystep = this.ystep;
      var paintType = this.paintType;
      var tilingType = this.tilingType;
      var color = this.color;
      var canvasGraphicsFactory = this.canvasGraphicsFactory;
      info('TilingType: ' + tilingType);
      var x0 = bbox[0], y0 = bbox[1], x1 = bbox[2], y1 = bbox[3];
      var topLeft = [
       x0,
       y0
      ];
      var botRight = [
       x0 + xstep,
       y0 + ystep
      ];
      var width = botRight[0] - topLeft[0];
      var height = botRight[1] - topLeft[1];
      var matrixScale = Util.singularValueDecompose2dScale(this.matrix);
      var curMatrixScale = Util.singularValueDecompose2dScale(this.baseTransform);
      var combinedScale = [
       matrixScale[0] * curMatrixScale[0],
       matrixScale[1] * curMatrixScale[1]
      ];
      width = Math.min(Math.ceil(Math.abs(width * combinedScale[0])), MAX_PATTERN_SIZE);
      height = Math.min(Math.ceil(Math.abs(height * combinedScale[1])), MAX_PATTERN_SIZE);
      var tmpCanvas = owner.cachedCanvases.getCanvas('pattern', width, height, true);
      var tmpCtx = tmpCanvas.context;
      var graphics = canvasGraphicsFactory.createCanvasGraphics(tmpCtx);
      graphics.groupLevel = owner.groupLevel;
      this.setFillAndStrokeStyleToContext(tmpCtx, paintType, color);
      this.setScale(width, height, xstep, ystep);
      this.transformToScale(graphics);
      var tmpTranslate = [
       1,
       0,
       0,
       1,
       -topLeft[0],
       -topLeft[1]
      ];
      graphics.transform.apply(graphics, tmpTranslate);
      this.clipBbox(graphics, bbox, x0, y0, x1, y1);
      graphics.executeOperatorList(operatorList);
      return tmpCanvas.canvas;
     },
     setScale: function TilingPattern_setScale(width, height, xstep, ystep) {
      this.scale = [
       width / xstep,
       height / ystep
      ];
     },
     transformToScale: function TilingPattern_transformToScale(graphics) {
      var scale = this.scale;
      var tmpScale = [
       scale[0],
       0,
       0,
       scale[1],
       0,
       0
      ];
      graphics.transform.apply(graphics, tmpScale);
     },
     scaleToContext: function TilingPattern_scaleToContext() {
      var scale = this.scale;
      this.ctx.scale(1 / scale[0], 1 / scale[1]);
     },
     clipBbox: function clipBbox(graphics, bbox, x0, y0, x1, y1) {
      if (bbox && isArray(bbox) && bbox.length === 4) {
       var bboxWidth = x1 - x0;
       var bboxHeight = y1 - y0;
       graphics.ctx.rect(x0, y0, bboxWidth, bboxHeight);
       graphics.clip();
       graphics.endPath();
      }
     },
     setFillAndStrokeStyleToContext: function setFillAndStrokeStyleToContext(context, paintType, color) {
      switch (paintType) {
      case PaintType.COLORED:
       var ctx = this.ctx;
       context.fillStyle = ctx.fillStyle;
       context.strokeStyle = ctx.strokeStyle;
       break;
      case PaintType.UNCOLORED:
       var cssColor = Util.makeCssRgb(color[0], color[1], color[2]);
       context.fillStyle = cssColor;
       context.strokeStyle = cssColor;
       break;
      default:
       error('Unsupported paint type: ' + paintType);
      }
     },
     getPattern: function TilingPattern_getPattern(ctx, owner) {
      var temporaryPatternCanvas = this.createPatternCanvas(owner);
      ctx = this.ctx;
      ctx.setTransform.apply(ctx, this.baseTransform);
      ctx.transform.apply(ctx, this.matrix);
      this.scaleToContext();
      return ctx.createPattern(temporaryPatternCanvas, 'repeat');
     }
    };
    return TilingPattern;
   }();
   exports.getShadingPatternFromIR = getShadingPatternFromIR;
   exports.TilingPattern = TilingPattern;
  }));
  (function (root, factory) {
   factory(root.pdfjsDisplayCanvas = {}, root.pdfjsSharedUtil, root.pdfjsDisplayDOMUtils, root.pdfjsDisplayPatternHelper, root.pdfjsDisplayWebGL);
  }(this, function (exports, sharedUtil, displayDOMUtils, displayPatternHelper, displayWebGL) {
   var FONT_IDENTITY_MATRIX = sharedUtil.FONT_IDENTITY_MATRIX;
   var IDENTITY_MATRIX = sharedUtil.IDENTITY_MATRIX;
   var ImageKind = sharedUtil.ImageKind;
   var OPS = sharedUtil.OPS;
   var TextRenderingMode = sharedUtil.TextRenderingMode;
   var Uint32ArrayView = sharedUtil.Uint32ArrayView;
   var Util = sharedUtil.Util;
   var assert = sharedUtil.assert;
   var info = sharedUtil.info;
   var isNum = sharedUtil.isNum;
   var isArray = sharedUtil.isArray;
   var isLittleEndian = sharedUtil.isLittleEndian;
   var error = sharedUtil.error;
   var shadow = sharedUtil.shadow;
   var warn = sharedUtil.warn;
   var TilingPattern = displayPatternHelper.TilingPattern;
   var getShadingPatternFromIR = displayPatternHelper.getShadingPatternFromIR;
   var WebGLUtils = displayWebGL.WebGLUtils;
   var hasCanvasTypedArrays = displayDOMUtils.hasCanvasTypedArrays;
   var MIN_FONT_SIZE = 16;
   var MAX_FONT_SIZE = 100;
   var MAX_GROUP_SIZE = 4096;
   var MIN_WIDTH_FACTOR = 0.65;
   var COMPILE_TYPE3_GLYPHS = true;
   var MAX_SIZE_TO_COMPILE = 1000;
   var FULL_CHUNK_HEIGHT = 16;
   var HasCanvasTypedArraysCached = {
    get value() {
     return shadow(HasCanvasTypedArraysCached, 'value', hasCanvasTypedArrays());
    }
   };
   var IsLittleEndianCached = {
    get value() {
     return shadow(IsLittleEndianCached, 'value', isLittleEndian());
    }
   };
   function createScratchCanvas(width, height) {
    var canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    return canvas;
   }
   function addContextCurrentTransform(ctx) {
    if (!ctx.mozCurrentTransform) {
     ctx._originalSave = ctx.save;
     ctx._originalRestore = ctx.restore;
     ctx._originalRotate = ctx.rotate;
     ctx._originalScale = ctx.scale;
     ctx._originalTranslate = ctx.translate;
     ctx._originalTransform = ctx.transform;
     ctx._originalSetTransform = ctx.setTransform;
     ctx._transformMatrix = ctx._transformMatrix || [
      1,
      0,
      0,
      1,
      0,
      0
     ];
     ctx._transformStack = [];
     Object.defineProperty(ctx, 'mozCurrentTransform', {
      get: function getCurrentTransform() {
       return this._transformMatrix;
      }
     });
     Object.defineProperty(ctx, 'mozCurrentTransformInverse', {
      get: function getCurrentTransformInverse() {
       var m = this._transformMatrix;
       var a = m[0], b = m[1], c = m[2], d = m[3], e = m[4], f = m[5];
       var ad_bc = a * d - b * c;
       var bc_ad = b * c - a * d;
       return [
        d / ad_bc,
        b / bc_ad,
        c / bc_ad,
        a / ad_bc,
        (d * e - c * f) / bc_ad,
        (b * e - a * f) / ad_bc
       ];
      }
     });
     ctx.save = function ctxSave() {
      var old = this._transformMatrix;
      this._transformStack.push(old);
      this._transformMatrix = old.slice(0, 6);
      this._originalSave();
     };
     ctx.restore = function ctxRestore() {
      var prev = this._transformStack.pop();
      if (prev) {
       this._transformMatrix = prev;
       this._originalRestore();
      }
     };
     ctx.translate = function ctxTranslate(x, y) {
      var m = this._transformMatrix;
      m[4] = m[0] * x + m[2] * y + m[4];
      m[5] = m[1] * x + m[3] * y + m[5];
      this._originalTranslate(x, y);
     };
     ctx.scale = function ctxScale(x, y) {
      var m = this._transformMatrix;
      m[0] = m[0] * x;
      m[1] = m[1] * x;
      m[2] = m[2] * y;
      m[3] = m[3] * y;
      this._originalScale(x, y);
     };
     ctx.transform = function ctxTransform(a, b, c, d, e, f) {
      var m = this._transformMatrix;
      this._transformMatrix = [
       m[0] * a + m[2] * b,
       m[1] * a + m[3] * b,
       m[0] * c + m[2] * d,
       m[1] * c + m[3] * d,
       m[0] * e + m[2] * f + m[4],
       m[1] * e + m[3] * f + m[5]
      ];
      ctx._originalTransform(a, b, c, d, e, f);
     };
     ctx.setTransform = function ctxSetTransform(a, b, c, d, e, f) {
      this._transformMatrix = [
       a,
       b,
       c,
       d,
       e,
       f
      ];
      ctx._originalSetTransform(a, b, c, d, e, f);
     };
     ctx.rotate = function ctxRotate(angle) {
      var cosValue = Math.cos(angle);
      var sinValue = Math.sin(angle);
      var m = this._transformMatrix;
      this._transformMatrix = [
       m[0] * cosValue + m[2] * sinValue,
       m[1] * cosValue + m[3] * sinValue,
       m[0] * -sinValue + m[2] * cosValue,
       m[1] * -sinValue + m[3] * cosValue,
       m[4],
       m[5]
      ];
      this._originalRotate(angle);
     };
    }
   }
   var CachedCanvases = function CachedCanvasesClosure() {
    function CachedCanvases() {
     this.cache = Object.create(null);
    }
    CachedCanvases.prototype = {
     getCanvas: function CachedCanvases_getCanvas(id, width, height, trackTransform) {
      var canvasEntry;
      if (this.cache[id] !== undefined) {
       canvasEntry = this.cache[id];
       canvasEntry.canvas.width = width;
       canvasEntry.canvas.height = height;
       canvasEntry.context.setTransform(1, 0, 0, 1, 0, 0);
      } else {
       var canvas = createScratchCanvas(width, height);
       var ctx = canvas.getContext('2d');
       if (trackTransform) {
        addContextCurrentTransform(ctx);
       }
       this.cache[id] = canvasEntry = {
        canvas: canvas,
        context: ctx
       };
      }
      return canvasEntry;
     },
     clear: function () {
      for (var id in this.cache) {
       var canvasEntry = this.cache[id];
       canvasEntry.canvas.width = 0;
       canvasEntry.canvas.height = 0;
       delete this.cache[id];
      }
     }
    };
    return CachedCanvases;
   }();
   function compileType3Glyph(imgData) {
    var POINT_TO_PROCESS_LIMIT = 1000;
    var width = imgData.width, height = imgData.height;
    var i, j, j0, width1 = width + 1;
    var points = new Uint8Array(width1 * (height + 1));
    var POINT_TYPES = new Uint8Array([
     0,
     2,
     4,
     0,
     1,
     0,
     5,
     4,
     8,
     10,
     0,
     8,
     0,
     2,
     1,
     0
    ]);
    var lineSize = width + 7 & ~7, data0 = imgData.data;
    var data = new Uint8Array(lineSize * height), pos = 0, ii;
    for (i = 0, ii = data0.length; i < ii; i++) {
     var mask = 128, elem = data0[i];
     while (mask > 0) {
      data[pos++] = elem & mask ? 0 : 255;
      mask >>= 1;
     }
    }
    var count = 0;
    pos = 0;
    if (data[pos] !== 0) {
     points[0] = 1;
     ++count;
    }
    for (j = 1; j < width; j++) {
     if (data[pos] !== data[pos + 1]) {
      points[j] = data[pos] ? 2 : 1;
      ++count;
     }
     pos++;
    }
    if (data[pos] !== 0) {
     points[j] = 2;
     ++count;
    }
    for (i = 1; i < height; i++) {
     pos = i * lineSize;
     j0 = i * width1;
     if (data[pos - lineSize] !== data[pos]) {
      points[j0] = data[pos] ? 1 : 8;
      ++count;
     }
     var sum = (data[pos] ? 4 : 0) + (data[pos - lineSize] ? 8 : 0);
     for (j = 1; j < width; j++) {
      sum = (sum >> 2) + (data[pos + 1] ? 4 : 0) + (data[pos - lineSize + 1] ? 8 : 0);
      if (POINT_TYPES[sum]) {
       points[j0 + j] = POINT_TYPES[sum];
       ++count;
      }
      pos++;
     }
     if (data[pos - lineSize] !== data[pos]) {
      points[j0 + j] = data[pos] ? 2 : 4;
      ++count;
     }
     if (count > POINT_TO_PROCESS_LIMIT) {
      return null;
     }
    }
    pos = lineSize * (height - 1);
    j0 = i * width1;
    if (data[pos] !== 0) {
     points[j0] = 8;
     ++count;
    }
    for (j = 1; j < width; j++) {
     if (data[pos] !== data[pos + 1]) {
      points[j0 + j] = data[pos] ? 4 : 8;
      ++count;
     }
     pos++;
    }
    if (data[pos] !== 0) {
     points[j0 + j] = 4;
     ++count;
    }
    if (count > POINT_TO_PROCESS_LIMIT) {
     return null;
    }
    var steps = new Int32Array([
     0,
     width1,
     -1,
     0,
     -width1,
     0,
     0,
     0,
     1
    ]);
    var outlines = [];
    for (i = 0; count && i <= height; i++) {
     var p = i * width1;
     var end = p + width;
     while (p < end && !points[p]) {
      p++;
     }
     if (p === end) {
      continue;
     }
     var coords = [
      p % width1,
      i
     ];
     var type = points[p], p0 = p, pp;
     do {
      var step = steps[type];
      do {
       p += step;
      } while (!points[p]);
      pp = points[p];
      if (pp !== 5 && pp !== 10) {
       type = pp;
       points[p] = 0;
      } else {
       type = pp & 0x33 * type >> 4;
       points[p] &= type >> 2 | type << 2;
      }
      coords.push(p % width1);
      coords.push(p / width1 | 0);
      --count;
     } while (p0 !== p);
     outlines.push(coords);
     --i;
    }
    var drawOutline = function (c) {
     c.save();
     c.scale(1 / width, -1 / height);
     c.translate(0, -height);
     c.beginPath();
     for (var i = 0, ii = outlines.length; i < ii; i++) {
      var o = outlines[i];
      c.moveTo(o[0], o[1]);
      for (var j = 2, jj = o.length; j < jj; j += 2) {
       c.lineTo(o[j], o[j + 1]);
      }
     }
     c.fill();
     c.beginPath();
     c.restore();
    };
    return drawOutline;
   }
   var CanvasExtraState = function CanvasExtraStateClosure() {
    function CanvasExtraState(old) {
     this.alphaIsShape = false;
     this.fontSize = 0;
     this.fontSizeScale = 1;
     this.textMatrix = IDENTITY_MATRIX;
     this.textMatrixScale = 1;
     this.fontMatrix = FONT_IDENTITY_MATRIX;
     this.leading = 0;
     this.x = 0;
     this.y = 0;
     this.lineX = 0;
     this.lineY = 0;
     this.charSpacing = 0;
     this.wordSpacing = 0;
     this.textHScale = 1;
     this.textRenderingMode = TextRenderingMode.FILL;
     this.textRise = 0;
     this.fillColor = '#000000';
     this.strokeColor = '#000000';
     this.patternFill = false;
     this.fillAlpha = 1;
     this.strokeAlpha = 1;
     this.lineWidth = 1;
     this.activeSMask = null;
     this.resumeSMaskCtx = null;
     this.old = old;
    }
    CanvasExtraState.prototype = {
     clone: function CanvasExtraState_clone() {
      return Object.create(this);
     },
     setCurrentPoint: function CanvasExtraState_setCurrentPoint(x, y) {
      this.x = x;
      this.y = y;
     }
    };
    return CanvasExtraState;
   }();
   var CanvasGraphics = function CanvasGraphicsClosure() {
    var EXECUTION_TIME = 15;
    var EXECUTION_STEPS = 10;
    function CanvasGraphics(canvasCtx, commonObjs, objs, imageLayer) {
     this.ctx = canvasCtx;
     this.current = new CanvasExtraState();
     this.stateStack = [];
     this.pendingClip = null;
     this.pendingEOFill = false;
     this.res = null;
     this.xobjs = null;
     this.commonObjs = commonObjs;
     this.objs = objs;
     this.imageLayer = imageLayer;
     this.groupStack = [];
     this.processingType3 = null;
     this.baseTransform = null;
     this.baseTransformStack = [];
     this.groupLevel = 0;
     this.smaskStack = [];
     this.smaskCounter = 0;
     this.tempSMask = null;
     this.cachedCanvases = new CachedCanvases();
     if (canvasCtx) {
      addContextCurrentTransform(canvasCtx);
     }
     this.cachedGetSinglePixelWidth = null;
    }
    function putBinaryImageData(ctx, imgData) {
     if (typeof ImageData !== 'undefined' && imgData instanceof ImageData) {
      ctx.putImageData(imgData, 0, 0);
      return;
     }
     var height = imgData.height, width = imgData.width;
     var partialChunkHeight = height % FULL_CHUNK_HEIGHT;
     var fullChunks = (height - partialChunkHeight) / FULL_CHUNK_HEIGHT;
     var totalChunks = partialChunkHeight === 0 ? fullChunks : fullChunks + 1;
     var chunkImgData = ctx.createImageData(width, FULL_CHUNK_HEIGHT);
     var srcPos = 0, destPos;
     var src = imgData.data;
     var dest = chunkImgData.data;
     var i, j, thisChunkHeight, elemsInThisChunk;
     if (imgData.kind === ImageKind.GRAYSCALE_1BPP) {
      var srcLength = src.byteLength;
      var dest32 = HasCanvasTypedArraysCached.value ? new Uint32Array(dest.buffer) : new Uint32ArrayView(dest);
      var dest32DataLength = dest32.length;
      var fullSrcDiff = width + 7 >> 3;
      var white = 0xFFFFFFFF;
      var black = IsLittleEndianCached.value || !HasCanvasTypedArraysCached.value ? 0xFF000000 : 0x000000FF;
      for (i = 0; i < totalChunks; i++) {
       thisChunkHeight = i < fullChunks ? FULL_CHUNK_HEIGHT : partialChunkHeight;
       destPos = 0;
       for (j = 0; j < thisChunkHeight; j++) {
        var srcDiff = srcLength - srcPos;
        var k = 0;
        var kEnd = srcDiff > fullSrcDiff ? width : srcDiff * 8 - 7;
        var kEndUnrolled = kEnd & ~7;
        var mask = 0;
        var srcByte = 0;
        for (; k < kEndUnrolled; k += 8) {
         srcByte = src[srcPos++];
         dest32[destPos++] = srcByte & 128 ? white : black;
         dest32[destPos++] = srcByte & 64 ? white : black;
         dest32[destPos++] = srcByte & 32 ? white : black;
         dest32[destPos++] = srcByte & 16 ? white : black;
         dest32[destPos++] = srcByte & 8 ? white : black;
         dest32[destPos++] = srcByte & 4 ? white : black;
         dest32[destPos++] = srcByte & 2 ? white : black;
         dest32[destPos++] = srcByte & 1 ? white : black;
        }
        for (; k < kEnd; k++) {
         if (mask === 0) {
          srcByte = src[srcPos++];
          mask = 128;
         }
         dest32[destPos++] = srcByte & mask ? white : black;
         mask >>= 1;
        }
       }
       while (destPos < dest32DataLength) {
        dest32[destPos++] = 0;
       }
       ctx.putImageData(chunkImgData, 0, i * FULL_CHUNK_HEIGHT);
      }
     } else if (imgData.kind === ImageKind.RGBA_32BPP) {
      j = 0;
      elemsInThisChunk = width * FULL_CHUNK_HEIGHT * 4;
      for (i = 0; i < fullChunks; i++) {
       dest.set(src.subarray(srcPos, srcPos + elemsInThisChunk));
       srcPos += elemsInThisChunk;
       ctx.putImageData(chunkImgData, 0, j);
       j += FULL_CHUNK_HEIGHT;
      }
      if (i < totalChunks) {
       elemsInThisChunk = width * partialChunkHeight * 4;
       dest.set(src.subarray(srcPos, srcPos + elemsInThisChunk));
       ctx.putImageData(chunkImgData, 0, j);
      }
     } else if (imgData.kind === ImageKind.RGB_24BPP) {
      thisChunkHeight = FULL_CHUNK_HEIGHT;
      elemsInThisChunk = width * thisChunkHeight;
      for (i = 0; i < totalChunks; i++) {
       if (i >= fullChunks) {
        thisChunkHeight = partialChunkHeight;
        elemsInThisChunk = width * thisChunkHeight;
       }
       destPos = 0;
       for (j = elemsInThisChunk; j--;) {
        dest[destPos++] = src[srcPos++];
        dest[destPos++] = src[srcPos++];
        dest[destPos++] = src[srcPos++];
        dest[destPos++] = 255;
       }
       ctx.putImageData(chunkImgData, 0, i * FULL_CHUNK_HEIGHT);
      }
     } else {
      error('bad image kind: ' + imgData.kind);
     }
    }
    function putBinaryImageMask(ctx, imgData) {
     var height = imgData.height, width = imgData.width;
     var partialChunkHeight = height % FULL_CHUNK_HEIGHT;
     var fullChunks = (height - partialChunkHeight) / FULL_CHUNK_HEIGHT;
     var totalChunks = partialChunkHeight === 0 ? fullChunks : fullChunks + 1;
     var chunkImgData = ctx.createImageData(width, FULL_CHUNK_HEIGHT);
     var srcPos = 0;
     var src = imgData.data;
     var dest = chunkImgData.data;
     for (var i = 0; i < totalChunks; i++) {
      var thisChunkHeight = i < fullChunks ? FULL_CHUNK_HEIGHT : partialChunkHeight;
      var destPos = 3;
      for (var j = 0; j < thisChunkHeight; j++) {
       var mask = 0;
       for (var k = 0; k < width; k++) {
        if (!mask) {
         var elem = src[srcPos++];
         mask = 128;
        }
        dest[destPos] = elem & mask ? 0 : 255;
        destPos += 4;
        mask >>= 1;
       }
      }
      ctx.putImageData(chunkImgData, 0, i * FULL_CHUNK_HEIGHT);
     }
    }
    function copyCtxState(sourceCtx, destCtx) {
     var properties = [
      'strokeStyle',
      'fillStyle',
      'fillRule',
      'globalAlpha',
      'lineWidth',
      'lineCap',
      'lineJoin',
      'miterLimit',
      'globalCompositeOperation',
      'font'
     ];
     for (var i = 0, ii = properties.length; i < ii; i++) {
      var property = properties[i];
      if (sourceCtx[property] !== undefined) {
       destCtx[property] = sourceCtx[property];
      }
     }
     if (sourceCtx.setLineDash !== undefined) {
      destCtx.setLineDash(sourceCtx.getLineDash());
      destCtx.lineDashOffset = sourceCtx.lineDashOffset;
     }
    }
    function composeSMaskBackdrop(bytes, r0, g0, b0) {
     var length = bytes.length;
     for (var i = 3; i < length; i += 4) {
      var alpha = bytes[i];
      if (alpha === 0) {
       bytes[i - 3] = r0;
       bytes[i - 2] = g0;
       bytes[i - 1] = b0;
      } else if (alpha < 255) {
       var alpha_ = 255 - alpha;
       bytes[i - 3] = bytes[i - 3] * alpha + r0 * alpha_ >> 8;
       bytes[i - 2] = bytes[i - 2] * alpha + g0 * alpha_ >> 8;
       bytes[i - 1] = bytes[i - 1] * alpha + b0 * alpha_ >> 8;
      }
     }
    }
    function composeSMaskAlpha(maskData, layerData, transferMap) {
     var length = maskData.length;
     var scale = 1 / 255;
     for (var i = 3; i < length; i += 4) {
      var alpha = transferMap ? transferMap[maskData[i]] : maskData[i];
      layerData[i] = layerData[i] * alpha * scale | 0;
     }
    }
    function composeSMaskLuminosity(maskData, layerData, transferMap) {
     var length = maskData.length;
     for (var i = 3; i < length; i += 4) {
      var y = maskData[i - 3] * 77 + maskData[i - 2] * 152 + maskData[i - 1] * 28;
      layerData[i] = transferMap ? layerData[i] * transferMap[y >> 8] >> 8 : layerData[i] * y >> 16;
     }
    }
    function genericComposeSMask(maskCtx, layerCtx, width, height, subtype, backdrop, transferMap) {
     var hasBackdrop = !!backdrop;
     var r0 = hasBackdrop ? backdrop[0] : 0;
     var g0 = hasBackdrop ? backdrop[1] : 0;
     var b0 = hasBackdrop ? backdrop[2] : 0;
     var composeFn;
     if (subtype === 'Luminosity') {
      composeFn = composeSMaskLuminosity;
     } else {
      composeFn = composeSMaskAlpha;
     }
     var PIXELS_TO_PROCESS = 1048576;
     var chunkSize = Math.min(height, Math.ceil(PIXELS_TO_PROCESS / width));
     for (var row = 0; row < height; row += chunkSize) {
      var chunkHeight = Math.min(chunkSize, height - row);
      var maskData = maskCtx.getImageData(0, row, width, chunkHeight);
      var layerData = layerCtx.getImageData(0, row, width, chunkHeight);
      if (hasBackdrop) {
       composeSMaskBackdrop(maskData.data, r0, g0, b0);
      }
      composeFn(maskData.data, layerData.data, transferMap);
      maskCtx.putImageData(layerData, 0, row);
     }
    }
    function composeSMask(ctx, smask, layerCtx) {
     var mask = smask.canvas;
     var maskCtx = smask.context;
     ctx.setTransform(smask.scaleX, 0, 0, smask.scaleY, smask.offsetX, smask.offsetY);
     var backdrop = smask.backdrop || null;
     if (!smask.transferMap && WebGLUtils.isEnabled) {
      var composed = WebGLUtils.composeSMask(layerCtx.canvas, mask, {
       subtype: smask.subtype,
       backdrop: backdrop
      });
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.drawImage(composed, smask.offsetX, smask.offsetY);
      return;
     }
     genericComposeSMask(maskCtx, layerCtx, mask.width, mask.height, smask.subtype, backdrop, smask.transferMap);
     ctx.drawImage(mask, 0, 0);
    }
    var LINE_CAP_STYLES = [
     'butt',
     'round',
     'square'
    ];
    var LINE_JOIN_STYLES = [
     'miter',
     'round',
     'bevel'
    ];
    var NORMAL_CLIP = {};
    var EO_CLIP = {};
    CanvasGraphics.prototype = {
     beginDrawing: function CanvasGraphics_beginDrawing(transform, viewport, transparency) {
      var width = this.ctx.canvas.width;
      var height = this.ctx.canvas.height;
      this.ctx.save();
      this.ctx.fillStyle = 'rgb(255, 255, 255)';
      this.ctx.fillRect(0, 0, width, height);
      this.ctx.restore();
      if (transparency) {
       var transparentCanvas = this.cachedCanvases.getCanvas('transparent', width, height, true);
       this.compositeCtx = this.ctx;
       this.transparentCanvas = transparentCanvas.canvas;
       this.ctx = transparentCanvas.context;
       this.ctx.save();
       this.ctx.transform.apply(this.ctx, this.compositeCtx.mozCurrentTransform);
      }
      this.ctx.save();
      if (transform) {
       this.ctx.transform.apply(this.ctx, transform);
      }
      this.ctx.transform.apply(this.ctx, viewport.transform);
      this.baseTransform = this.ctx.mozCurrentTransform.slice();
      if (this.imageLayer) {
       this.imageLayer.beginLayout();
      }
     },
     executeOperatorList: function CanvasGraphics_executeOperatorList(operatorList, executionStartIdx, continueCallback, stepper) {
      var argsArray = operatorList.argsArray;
      var fnArray = operatorList.fnArray;
      var i = executionStartIdx || 0;
      var argsArrayLen = argsArray.length;
      if (argsArrayLen === i) {
       return i;
      }
      var chunkOperations = argsArrayLen - i > EXECUTION_STEPS && typeof continueCallback === 'function';
      var endTime = chunkOperations ? Date.now() + EXECUTION_TIME : 0;
      var steps = 0;
      var commonObjs = this.commonObjs;
      var objs = this.objs;
      var fnId;
      while (true) {
       if (stepper !== undefined && i === stepper.nextBreakPoint) {
        stepper.breakIt(i, continueCallback);
        return i;
       }
       fnId = fnArray[i];
       if (fnId !== OPS.dependency) {
        this[fnId].apply(this, argsArray[i]);
       } else {
        var deps = argsArray[i];
        for (var n = 0, nn = deps.length; n < nn; n++) {
         var depObjId = deps[n];
         var common = depObjId[0] === 'g' && depObjId[1] === '_';
         var objsPool = common ? commonObjs : objs;
         if (!objsPool.isResolved(depObjId)) {
          objsPool.get(depObjId, continueCallback);
          return i;
         }
        }
       }
       i++;
       if (i === argsArrayLen) {
        return i;
       }
       if (chunkOperations && ++steps > EXECUTION_STEPS) {
        if (Date.now() > endTime) {
         continueCallback();
         return i;
        }
        steps = 0;
       }
      }
     },
     endDrawing: function CanvasGraphics_endDrawing() {
      if (this.current.activeSMask !== null) {
       this.endSMaskGroup();
      }
      this.ctx.restore();
      if (this.transparentCanvas) {
       this.ctx = this.compositeCtx;
       this.ctx.save();
       this.ctx.setTransform(1, 0, 0, 1, 0, 0);
       this.ctx.drawImage(this.transparentCanvas, 0, 0);
       this.ctx.restore();
       this.transparentCanvas = null;
      }
      this.cachedCanvases.clear();
      WebGLUtils.clear();
      if (this.imageLayer) {
       this.imageLayer.endLayout();
      }
     },
     setLineWidth: function CanvasGraphics_setLineWidth(width) {
      this.current.lineWidth = width;
      this.ctx.lineWidth = width;
     },
     setLineCap: function CanvasGraphics_setLineCap(style) {
      this.ctx.lineCap = LINE_CAP_STYLES[style];
     },
     setLineJoin: function CanvasGraphics_setLineJoin(style) {
      this.ctx.lineJoin = LINE_JOIN_STYLES[style];
     },
     setMiterLimit: function CanvasGraphics_setMiterLimit(limit) {
      this.ctx.miterLimit = limit;
     },
     setDash: function CanvasGraphics_setDash(dashArray, dashPhase) {
      var ctx = this.ctx;
      if (ctx.setLineDash !== undefined) {
       ctx.setLineDash(dashArray);
       ctx.lineDashOffset = dashPhase;
      }
     },
     setRenderingIntent: function CanvasGraphics_setRenderingIntent(intent) {
     },
     setFlatness: function CanvasGraphics_setFlatness(flatness) {
     },
     setGState: function CanvasGraphics_setGState(states) {
      for (var i = 0, ii = states.length; i < ii; i++) {
       var state = states[i];
       var key = state[0];
       var value = state[1];
       switch (key) {
       case 'LW':
        this.setLineWidth(value);
        break;
       case 'LC':
        this.setLineCap(value);
        break;
       case 'LJ':
        this.setLineJoin(value);
        break;
       case 'ML':
        this.setMiterLimit(value);
        break;
       case 'D':
        this.setDash(value[0], value[1]);
        break;
       case 'RI':
        this.setRenderingIntent(value);
        break;
       case 'FL':
        this.setFlatness(value);
        break;
       case 'Font':
        this.setFont(value[0], value[1]);
        break;
       case 'CA':
        this.current.strokeAlpha = state[1];
        break;
       case 'ca':
        this.current.fillAlpha = state[1];
        this.ctx.globalAlpha = state[1];
        break;
       case 'BM':
        if (value && value.name && value.name !== 'Normal') {
         var mode = value.name.replace(/([A-Z])/g, function (c) {
          return '-' + c.toLowerCase();
         }).substring(1);
         this.ctx.globalCompositeOperation = mode;
         if (this.ctx.globalCompositeOperation !== mode) {
          warn('globalCompositeOperation "' + mode + '" is not supported');
         }
        } else {
         this.ctx.globalCompositeOperation = 'source-over';
        }
        break;
       case 'SMask':
        if (this.current.activeSMask) {
         if (this.stateStack.length > 0 && this.stateStack[this.stateStack.length - 1].activeSMask === this.current.activeSMask) {
          this.suspendSMaskGroup();
         } else {
          this.endSMaskGroup();
         }
        }
        this.current.activeSMask = value ? this.tempSMask : null;
        if (this.current.activeSMask) {
         this.beginSMaskGroup();
        }
        this.tempSMask = null;
        break;
       }
      }
     },
     beginSMaskGroup: function CanvasGraphics_beginSMaskGroup() {
      var activeSMask = this.current.activeSMask;
      var drawnWidth = activeSMask.canvas.width;
      var drawnHeight = activeSMask.canvas.height;
      var cacheId = 'smaskGroupAt' + this.groupLevel;
      var scratchCanvas = this.cachedCanvases.getCanvas(cacheId, drawnWidth, drawnHeight, true);
      var currentCtx = this.ctx;
      var currentTransform = currentCtx.mozCurrentTransform;
      this.ctx.save();
      var groupCtx = scratchCanvas.context;
      groupCtx.scale(1 / activeSMask.scaleX, 1 / activeSMask.scaleY);
      groupCtx.translate(-activeSMask.offsetX, -activeSMask.offsetY);
      groupCtx.transform.apply(groupCtx, currentTransform);
      activeSMask.startTransformInverse = groupCtx.mozCurrentTransformInverse;
      copyCtxState(currentCtx, groupCtx);
      this.ctx = groupCtx;
      this.setGState([
       [
        'BM',
        'Normal'
       ],
       [
        'ca',
        1
       ],
       [
        'CA',
        1
       ]
      ]);
      this.groupStack.push(currentCtx);
      this.groupLevel++;
     },
     suspendSMaskGroup: function CanvasGraphics_endSMaskGroup() {
      var groupCtx = this.ctx;
      this.groupLevel--;
      this.ctx = this.groupStack.pop();
      composeSMask(this.ctx, this.current.activeSMask, groupCtx);
      this.ctx.restore();
      this.ctx.save();
      copyCtxState(groupCtx, this.ctx);
      this.current.resumeSMaskCtx = groupCtx;
      var deltaTransform = Util.transform(this.current.activeSMask.startTransformInverse, groupCtx.mozCurrentTransform);
      this.ctx.transform.apply(this.ctx, deltaTransform);
      groupCtx.save();
      groupCtx.setTransform(1, 0, 0, 1, 0, 0);
      groupCtx.clearRect(0, 0, groupCtx.canvas.width, groupCtx.canvas.height);
      groupCtx.restore();
     },
     resumeSMaskGroup: function CanvasGraphics_endSMaskGroup() {
      var groupCtx = this.current.resumeSMaskCtx;
      var currentCtx = this.ctx;
      this.ctx = groupCtx;
      this.groupStack.push(currentCtx);
      this.groupLevel++;
     },
     endSMaskGroup: function CanvasGraphics_endSMaskGroup() {
      var groupCtx = this.ctx;
      this.groupLevel--;
      this.ctx = this.groupStack.pop();
      composeSMask(this.ctx, this.current.activeSMask, groupCtx);
      this.ctx.restore();
      copyCtxState(groupCtx, this.ctx);
      var deltaTransform = Util.transform(this.current.activeSMask.startTransformInverse, groupCtx.mozCurrentTransform);
      this.ctx.transform.apply(this.ctx, deltaTransform);
     },
     save: function CanvasGraphics_save() {
      this.ctx.save();
      var old = this.current;
      this.stateStack.push(old);
      this.current = old.clone();
      this.current.resumeSMaskCtx = null;
     },
     restore: function CanvasGraphics_restore() {
      if (this.current.resumeSMaskCtx) {
       this.resumeSMaskGroup();
      }
      if (this.current.activeSMask !== null && (this.stateStack.length === 0 || this.stateStack[this.stateStack.length - 1].activeSMask !== this.current.activeSMask)) {
       this.endSMaskGroup();
      }
      if (this.stateStack.length !== 0) {
       this.current = this.stateStack.pop();
       this.ctx.restore();
       this.pendingClip = null;
       this.cachedGetSinglePixelWidth = null;
      }
     },
     transform: function CanvasGraphics_transform(a, b, c, d, e, f) {
      this.ctx.transform(a, b, c, d, e, f);
      this.cachedGetSinglePixelWidth = null;
     },
     constructPath: function CanvasGraphics_constructPath(ops, args) {
      var ctx = this.ctx;
      var current = this.current;
      var x = current.x, y = current.y;
      for (var i = 0, j = 0, ii = ops.length; i < ii; i++) {
       switch (ops[i] | 0) {
       case OPS.rectangle:
        x = args[j++];
        y = args[j++];
        var width = args[j++];
        var height = args[j++];
        if (width === 0) {
         width = this.getSinglePixelWidth();
        }
        if (height === 0) {
         height = this.getSinglePixelWidth();
        }
        var xw = x + width;
        var yh = y + height;
        this.ctx.moveTo(x, y);
        this.ctx.lineTo(xw, y);
        this.ctx.lineTo(xw, yh);
        this.ctx.lineTo(x, yh);
        this.ctx.lineTo(x, y);
        this.ctx.closePath();
        break;
       case OPS.moveTo:
        x = args[j++];
        y = args[j++];
        ctx.moveTo(x, y);
        break;
       case OPS.lineTo:
        x = args[j++];
        y = args[j++];
        ctx.lineTo(x, y);
        break;
       case OPS.curveTo:
        x = args[j + 4];
        y = args[j + 5];
        ctx.bezierCurveTo(args[j], args[j + 1], args[j + 2], args[j + 3], x, y);
        j += 6;
        break;
       case OPS.curveTo2:
        ctx.bezierCurveTo(x, y, args[j], args[j + 1], args[j + 2], args[j + 3]);
        x = args[j + 2];
        y = args[j + 3];
        j += 4;
        break;
       case OPS.curveTo3:
        x = args[j + 2];
        y = args[j + 3];
        ctx.bezierCurveTo(args[j], args[j + 1], x, y, x, y);
        j += 4;
        break;
       case OPS.closePath:
        ctx.closePath();
        break;
       }
      }
      current.setCurrentPoint(x, y);
     },
     closePath: function CanvasGraphics_closePath() {
      this.ctx.closePath();
     },
     stroke: function CanvasGraphics_stroke(consumePath) {
      consumePath = typeof consumePath !== 'undefined' ? consumePath : true;
      var ctx = this.ctx;
      var strokeColor = this.current.strokeColor;
      ctx.lineWidth = Math.max(this.getSinglePixelWidth() * MIN_WIDTH_FACTOR, this.current.lineWidth);
      ctx.globalAlpha = this.current.strokeAlpha;
      if (strokeColor && strokeColor.hasOwnProperty('type') && strokeColor.type === 'Pattern') {
       ctx.save();
       ctx.strokeStyle = strokeColor.getPattern(ctx, this);
       ctx.stroke();
       ctx.restore();
      } else {
       ctx.stroke();
      }
      if (consumePath) {
       this.consumePath();
      }
      ctx.globalAlpha = this.current.fillAlpha;
     },
     closeStroke: function CanvasGraphics_closeStroke() {
      this.closePath();
      this.stroke();
     },
     fill: function CanvasGraphics_fill(consumePath) {
      consumePath = typeof consumePath !== 'undefined' ? consumePath : true;
      var ctx = this.ctx;
      var fillColor = this.current.fillColor;
      var isPatternFill = this.current.patternFill;
      var needRestore = false;
      if (isPatternFill) {
       ctx.save();
       if (this.baseTransform) {
        ctx.setTransform.apply(ctx, this.baseTransform);
       }
       ctx.fillStyle = fillColor.getPattern(ctx, this);
       needRestore = true;
      }
      if (this.pendingEOFill) {
       if (ctx.mozFillRule !== undefined) {
        ctx.mozFillRule = 'evenodd';
        ctx.fill();
        ctx.mozFillRule = 'nonzero';
       } else {
        ctx.fill('evenodd');
       }
       this.pendingEOFill = false;
      } else {
       ctx.fill();
      }
      if (needRestore) {
       ctx.restore();
      }
      if (consumePath) {
       this.consumePath();
      }
     },
     eoFill: function CanvasGraphics_eoFill() {
      this.pendingEOFill = true;
      this.fill();
     },
     fillStroke: function CanvasGraphics_fillStroke() {
      this.fill(false);
      this.stroke(false);
      this.consumePath();
     },
     eoFillStroke: function CanvasGraphics_eoFillStroke() {
      this.pendingEOFill = true;
      this.fillStroke();
     },
     closeFillStroke: function CanvasGraphics_closeFillStroke() {
      this.closePath();
      this.fillStroke();
     },
     closeEOFillStroke: function CanvasGraphics_closeEOFillStroke() {
      this.pendingEOFill = true;
      this.closePath();
      this.fillStroke();
     },
     endPath: function CanvasGraphics_endPath() {
      this.consumePath();
     },
     clip: function CanvasGraphics_clip() {
      this.pendingClip = NORMAL_CLIP;
     },
     eoClip: function CanvasGraphics_eoClip() {
      this.pendingClip = EO_CLIP;
     },
     beginText: function CanvasGraphics_beginText() {
      this.current.textMatrix = IDENTITY_MATRIX;
      this.current.textMatrixScale = 1;
      this.current.x = this.current.lineX = 0;
      this.current.y = this.current.lineY = 0;
     },
     endText: function CanvasGraphics_endText() {
      var paths = this.pendingTextPaths;
      var ctx = this.ctx;
      if (paths === undefined) {
       ctx.beginPath();
       return;
      }
      ctx.save();
      ctx.beginPath();
      for (var i = 0; i < paths.length; i++) {
       var path = paths[i];
       ctx.setTransform.apply(ctx, path.transform);
       ctx.translate(path.x, path.y);
       path.addToPath(ctx, path.fontSize);
      }
      ctx.restore();
      ctx.clip();
      ctx.beginPath();
      delete this.pendingTextPaths;
     },
     setCharSpacing: function CanvasGraphics_setCharSpacing(spacing) {
      this.current.charSpacing = spacing;
     },
     setWordSpacing: function CanvasGraphics_setWordSpacing(spacing) {
      this.current.wordSpacing = spacing;
     },
     setHScale: function CanvasGraphics_setHScale(scale) {
      this.current.textHScale = scale / 100;
     },
     setLeading: function CanvasGraphics_setLeading(leading) {
      this.current.leading = -leading;
     },
     setFont: function CanvasGraphics_setFont(fontRefName, size) {
      var fontObj = this.commonObjs.get(fontRefName);
      var current = this.current;
      if (!fontObj) {
       error('Can\'t find font for ' + fontRefName);
      }
      current.fontMatrix = fontObj.fontMatrix ? fontObj.fontMatrix : FONT_IDENTITY_MATRIX;
      if (current.fontMatrix[0] === 0 || current.fontMatrix[3] === 0) {
       warn('Invalid font matrix for font ' + fontRefName);
      }
      if (size < 0) {
       size = -size;
       current.fontDirection = -1;
      } else {
       current.fontDirection = 1;
      }
      this.current.font = fontObj;
      this.current.fontSize = size;
      if (fontObj.isType3Font) {
       return;
      }
      var name = fontObj.loadedName || 'sans-serif';
      var bold = fontObj.black ? '900' : fontObj.bold ? 'bold' : 'normal';
      var italic = fontObj.italic ? 'italic' : 'normal';
      var typeface = '"' + name + '", ' + fontObj.fallbackName;
      var browserFontSize = size < MIN_FONT_SIZE ? MIN_FONT_SIZE : size > MAX_FONT_SIZE ? MAX_FONT_SIZE : size;
      this.current.fontSizeScale = size / browserFontSize;
      var rule = italic + ' ' + bold + ' ' + browserFontSize + 'px ' + typeface;
      this.ctx.font = rule;
     },
     setTextRenderingMode: function CanvasGraphics_setTextRenderingMode(mode) {
      this.current.textRenderingMode = mode;
     },
     setTextRise: function CanvasGraphics_setTextRise(rise) {
      this.current.textRise = rise;
     },
     moveText: function CanvasGraphics_moveText(x, y) {
      this.current.x = this.current.lineX += x;
      this.current.y = this.current.lineY += y;
     },
     setLeadingMoveText: function CanvasGraphics_setLeadingMoveText(x, y) {
      this.setLeading(-y);
      this.moveText(x, y);
     },
     setTextMatrix: function CanvasGraphics_setTextMatrix(a, b, c, d, e, f) {
      this.current.textMatrix = [
       a,
       b,
       c,
       d,
       e,
       f
      ];
      this.current.textMatrixScale = Math.sqrt(a * a + b * b);
      this.current.x = this.current.lineX = 0;
      this.current.y = this.current.lineY = 0;
     },
     nextLine: function CanvasGraphics_nextLine() {
      this.moveText(0, this.current.leading);
     },
     paintChar: function CanvasGraphics_paintChar(character, x, y) {
      var ctx = this.ctx;
      var current = this.current;
      var font = current.font;
      var textRenderingMode = current.textRenderingMode;
      var fontSize = current.fontSize / current.fontSizeScale;
      var fillStrokeMode = textRenderingMode & TextRenderingMode.FILL_STROKE_MASK;
      var isAddToPathSet = !!(textRenderingMode & TextRenderingMode.ADD_TO_PATH_FLAG);
      var addToPath;
      if (font.disableFontFace || isAddToPathSet) {
       addToPath = font.getPathGenerator(this.commonObjs, character);
      }
      if (font.disableFontFace) {
       ctx.save();
       ctx.translate(x, y);
       ctx.beginPath();
       addToPath(ctx, fontSize);
       if (fillStrokeMode === TextRenderingMode.FILL || fillStrokeMode === TextRenderingMode.FILL_STROKE) {
        ctx.fill();
       }
       if (fillStrokeMode === TextRenderingMode.STROKE || fillStrokeMode === TextRenderingMode.FILL_STROKE) {
        ctx.stroke();
       }
       ctx.restore();
      } else {
       if (fillStrokeMode === TextRenderingMode.FILL || fillStrokeMode === TextRenderingMode.FILL_STROKE) {
        ctx.fillText(character, x, y);
       }
       if (fillStrokeMode === TextRenderingMode.STROKE || fillStrokeMode === TextRenderingMode.FILL_STROKE) {
        ctx.strokeText(character, x, y);
       }
      }
      if (isAddToPathSet) {
       var paths = this.pendingTextPaths || (this.pendingTextPaths = []);
       paths.push({
        transform: ctx.mozCurrentTransform,
        x: x,
        y: y,
        fontSize: fontSize,
        addToPath: addToPath
       });
      }
     },
     get isFontSubpixelAAEnabled() {
      var ctx = document.createElement('canvas').getContext('2d');
      ctx.scale(1.5, 1);
      ctx.fillText('I', 0, 10);
      var data = ctx.getImageData(0, 0, 10, 10).data;
      var enabled = false;
      for (var i = 3; i < data.length; i += 4) {
       if (data[i] > 0 && data[i] < 255) {
        enabled = true;
        break;
       }
      }
      return shadow(this, 'isFontSubpixelAAEnabled', enabled);
     },
     showText: function CanvasGraphics_showText(glyphs) {
      var current = this.current;
      var font = current.font;
      if (font.isType3Font) {
       return this.showType3Text(glyphs);
      }
      var fontSize = current.fontSize;
      if (fontSize === 0) {
       return;
      }
      var ctx = this.ctx;
      var fontSizeScale = current.fontSizeScale;
      var charSpacing = current.charSpacing;
      var wordSpacing = current.wordSpacing;
      var fontDirection = current.fontDirection;
      var textHScale = current.textHScale * fontDirection;
      var glyphsLength = glyphs.length;
      var vertical = font.vertical;
      var spacingDir = vertical ? 1 : -1;
      var defaultVMetrics = font.defaultVMetrics;
      var widthAdvanceScale = fontSize * current.fontMatrix[0];
      var simpleFillText = current.textRenderingMode === TextRenderingMode.FILL && !font.disableFontFace;
      ctx.save();
      ctx.transform.apply(ctx, current.textMatrix);
      ctx.translate(current.x, current.y + current.textRise);
      if (current.patternFill) {
       ctx.fillStyle = current.fillColor.getPattern(ctx, this);
      }
      if (fontDirection > 0) {
       ctx.scale(textHScale, -1);
      } else {
       ctx.scale(textHScale, 1);
      }
      var lineWidth = current.lineWidth;
      var scale = current.textMatrixScale;
      if (scale === 0 || lineWidth === 0) {
       var fillStrokeMode = current.textRenderingMode & TextRenderingMode.FILL_STROKE_MASK;
       if (fillStrokeMode === TextRenderingMode.STROKE || fillStrokeMode === TextRenderingMode.FILL_STROKE) {
        this.cachedGetSinglePixelWidth = null;
        lineWidth = this.getSinglePixelWidth() * MIN_WIDTH_FACTOR;
       }
      } else {
       lineWidth /= scale;
      }
      if (fontSizeScale !== 1.0) {
       ctx.scale(fontSizeScale, fontSizeScale);
       lineWidth /= fontSizeScale;
      }
      ctx.lineWidth = lineWidth;
      var x = 0, i;
      for (i = 0; i < glyphsLength; ++i) {
       var glyph = glyphs[i];
       if (isNum(glyph)) {
        x += spacingDir * glyph * fontSize / 1000;
        continue;
       }
       var restoreNeeded = false;
       var spacing = (glyph.isSpace ? wordSpacing : 0) + charSpacing;
       var character = glyph.fontChar;
       var accent = glyph.accent;
       var scaledX, scaledY, scaledAccentX, scaledAccentY;
       var width = glyph.width;
       if (vertical) {
        var vmetric, vx, vy;
        vmetric = glyph.vmetric || defaultVMetrics;
        vx = glyph.vmetric ? vmetric[1] : width * 0.5;
        vx = -vx * widthAdvanceScale;
        vy = vmetric[2] * widthAdvanceScale;
        width = vmetric ? -vmetric[0] : width;
        scaledX = vx / fontSizeScale;
        scaledY = (x + vy) / fontSizeScale;
       } else {
        scaledX = x / fontSizeScale;
        scaledY = 0;
       }
       if (font.remeasure && width > 0) {
        var measuredWidth = ctx.measureText(character).width * 1000 / fontSize * fontSizeScale;
        if (width < measuredWidth && this.isFontSubpixelAAEnabled) {
         var characterScaleX = width / measuredWidth;
         restoreNeeded = true;
         ctx.save();
         ctx.scale(characterScaleX, 1);
         scaledX /= characterScaleX;
        } else if (width !== measuredWidth) {
         scaledX += (width - measuredWidth) / 2000 * fontSize / fontSizeScale;
        }
       }
       if (glyph.isInFont || font.missingFile) {
        if (simpleFillText && !accent) {
         ctx.fillText(character, scaledX, scaledY);
        } else {
         this.paintChar(character, scaledX, scaledY);
         if (accent) {
          scaledAccentX = scaledX + accent.offset.x / fontSizeScale;
          scaledAccentY = scaledY - accent.offset.y / fontSizeScale;
          this.paintChar(accent.fontChar, scaledAccentX, scaledAccentY);
         }
        }
       }
       var charWidth = width * widthAdvanceScale + spacing * fontDirection;
       x += charWidth;
       if (restoreNeeded) {
        ctx.restore();
       }
      }
      if (vertical) {
       current.y -= x * textHScale;
      } else {
       current.x += x * textHScale;
      }
      ctx.restore();
     },
     showType3Text: function CanvasGraphics_showType3Text(glyphs) {
      var ctx = this.ctx;
      var current = this.current;
      var font = current.font;
      var fontSize = current.fontSize;
      var fontDirection = current.fontDirection;
      var spacingDir = font.vertical ? 1 : -1;
      var charSpacing = current.charSpacing;
      var wordSpacing = current.wordSpacing;
      var textHScale = current.textHScale * fontDirection;
      var fontMatrix = current.fontMatrix || FONT_IDENTITY_MATRIX;
      var glyphsLength = glyphs.length;
      var isTextInvisible = current.textRenderingMode === TextRenderingMode.INVISIBLE;
      var i, glyph, width, spacingLength;
      if (isTextInvisible || fontSize === 0) {
       return;
      }
      this.cachedGetSinglePixelWidth = null;
      ctx.save();
      ctx.transform.apply(ctx, current.textMatrix);
      ctx.translate(current.x, current.y);
      ctx.scale(textHScale, fontDirection);
      for (i = 0; i < glyphsLength; ++i) {
       glyph = glyphs[i];
       if (isNum(glyph)) {
        spacingLength = spacingDir * glyph * fontSize / 1000;
        this.ctx.translate(spacingLength, 0);
        current.x += spacingLength * textHScale;
        continue;
       }
       var spacing = (glyph.isSpace ? wordSpacing : 0) + charSpacing;
       var operatorList = font.charProcOperatorList[glyph.operatorListId];
       if (!operatorList) {
        warn('Type3 character \"' + glyph.operatorListId + '\" is not available');
        continue;
       }
       this.processingType3 = glyph;
       this.save();
       ctx.scale(fontSize, fontSize);
       ctx.transform.apply(ctx, fontMatrix);
       this.executeOperatorList(operatorList);
       this.restore();
       var transformed = Util.applyTransform([
        glyph.width,
        0
       ], fontMatrix);
       width = transformed[0] * fontSize + spacing;
       ctx.translate(width, 0);
       current.x += width * textHScale;
      }
      ctx.restore();
      this.processingType3 = null;
     },
     setCharWidth: function CanvasGraphics_setCharWidth(xWidth, yWidth) {
     },
     setCharWidthAndBounds: function CanvasGraphics_setCharWidthAndBounds(xWidth, yWidth, llx, lly, urx, ury) {
      this.ctx.rect(llx, lly, urx - llx, ury - lly);
      this.clip();
      this.endPath();
     },
     getColorN_Pattern: function CanvasGraphics_getColorN_Pattern(IR) {
      var pattern;
      if (IR[0] === 'TilingPattern') {
       var color = IR[1];
       var baseTransform = this.baseTransform || this.ctx.mozCurrentTransform.slice();
       var self = this;
       var canvasGraphicsFactory = {
        createCanvasGraphics: function (ctx) {
         return new CanvasGraphics(ctx, self.commonObjs, self.objs);
        }
       };
       pattern = new TilingPattern(IR, color, this.ctx, canvasGraphicsFactory, baseTransform);
      } else {
       pattern = getShadingPatternFromIR(IR);
      }
      return pattern;
     },
     setStrokeColorN: function CanvasGraphics_setStrokeColorN()
      {
       this.current.strokeColor = this.getColorN_Pattern(arguments);
      },
     setFillColorN: function CanvasGraphics_setFillColorN()
      {
       this.current.fillColor = this.getColorN_Pattern(arguments);
       this.current.patternFill = true;
      },
     setStrokeRGBColor: function CanvasGraphics_setStrokeRGBColor(r, g, b) {
      var color = Util.makeCssRgb(r, g, b);
      this.ctx.strokeStyle = color;
      this.current.strokeColor = color;
     },
     setFillRGBColor: function CanvasGraphics_setFillRGBColor(r, g, b) {
      var color = Util.makeCssRgb(r, g, b);
      this.ctx.fillStyle = color;
      this.current.fillColor = color;
      this.current.patternFill = false;
     },
     shadingFill: function CanvasGraphics_shadingFill(patternIR) {
      var ctx = this.ctx;
      this.save();
      var pattern = getShadingPatternFromIR(patternIR);
      ctx.fillStyle = pattern.getPattern(ctx, this, true);
      var inv = ctx.mozCurrentTransformInverse;
      if (inv) {
       var canvas = ctx.canvas;
       var width = canvas.width;
       var height = canvas.height;
       var bl = Util.applyTransform([
        0,
        0
       ], inv);
       var br = Util.applyTransform([
        0,
        height
       ], inv);
       var ul = Util.applyTransform([
        width,
        0
       ], inv);
       var ur = Util.applyTransform([
        width,
        height
       ], inv);
       var x0 = Math.min(bl[0], br[0], ul[0], ur[0]);
       var y0 = Math.min(bl[1], br[1], ul[1], ur[1]);
       var x1 = Math.max(bl[0], br[0], ul[0], ur[0]);
       var y1 = Math.max(bl[1], br[1], ul[1], ur[1]);
       this.ctx.fillRect(x0, y0, x1 - x0, y1 - y0);
      } else {
       this.ctx.fillRect(-1e10, -1e10, 2e10, 2e10);
      }
      this.restore();
     },
     beginInlineImage: function CanvasGraphics_beginInlineImage() {
      error('Should not call beginInlineImage');
     },
     beginImageData: function CanvasGraphics_beginImageData() {
      error('Should not call beginImageData');
     },
     paintFormXObjectBegin: function CanvasGraphics_paintFormXObjectBegin(matrix, bbox) {
      this.save();
      this.baseTransformStack.push(this.baseTransform);
      if (isArray(matrix) && matrix.length === 6) {
       this.transform.apply(this, matrix);
      }
      this.baseTransform = this.ctx.mozCurrentTransform;
      if (isArray(bbox) && bbox.length === 4) {
       var width = bbox[2] - bbox[0];
       var height = bbox[3] - bbox[1];
       this.ctx.rect(bbox[0], bbox[1], width, height);
       this.clip();
       this.endPath();
      }
     },
     paintFormXObjectEnd: function CanvasGraphics_paintFormXObjectEnd() {
      this.restore();
      this.baseTransform = this.baseTransformStack.pop();
     },
     beginGroup: function CanvasGraphics_beginGroup(group) {
      this.save();
      var currentCtx = this.ctx;
      if (!group.isolated) {
       info('TODO: Support non-isolated groups.');
      }
      if (group.knockout) {
       warn('Knockout groups not supported.');
      }
      var currentTransform = currentCtx.mozCurrentTransform;
      if (group.matrix) {
       currentCtx.transform.apply(currentCtx, group.matrix);
      }
      assert(group.bbox, 'Bounding box is required.');
      var bounds = Util.getAxialAlignedBoundingBox(group.bbox, currentCtx.mozCurrentTransform);
      var canvasBounds = [
       0,
       0,
       currentCtx.canvas.width,
       currentCtx.canvas.height
      ];
      bounds = Util.intersect(bounds, canvasBounds) || [
       0,
       0,
       0,
       0
      ];
      var offsetX = Math.floor(bounds[0]);
      var offsetY = Math.floor(bounds[1]);
      var drawnWidth = Math.max(Math.ceil(bounds[2]) - offsetX, 1);
      var drawnHeight = Math.max(Math.ceil(bounds[3]) - offsetY, 1);
      var scaleX = 1, scaleY = 1;
      if (drawnWidth > MAX_GROUP_SIZE) {
       scaleX = drawnWidth / MAX_GROUP_SIZE;
       drawnWidth = MAX_GROUP_SIZE;
      }
      if (drawnHeight > MAX_GROUP_SIZE) {
       scaleY = drawnHeight / MAX_GROUP_SIZE;
       drawnHeight = MAX_GROUP_SIZE;
      }
      var cacheId = 'groupAt' + this.groupLevel;
      if (group.smask) {
       cacheId += '_smask_' + this.smaskCounter++ % 2;
      }
      var scratchCanvas = this.cachedCanvases.getCanvas(cacheId, drawnWidth, drawnHeight, true);
      var groupCtx = scratchCanvas.context;
      groupCtx.scale(1 / scaleX, 1 / scaleY);
      groupCtx.translate(-offsetX, -offsetY);
      groupCtx.transform.apply(groupCtx, currentTransform);
      if (group.smask) {
       this.smaskStack.push({
        canvas: scratchCanvas.canvas,
        context: groupCtx,
        offsetX: offsetX,
        offsetY: offsetY,
        scaleX: scaleX,
        scaleY: scaleY,
        subtype: group.smask.subtype,
        backdrop: group.smask.backdrop,
        transferMap: group.smask.transferMap || null,
        startTransformInverse: null
       });
      } else
       {
        currentCtx.setTransform(1, 0, 0, 1, 0, 0);
        currentCtx.translate(offsetX, offsetY);
        currentCtx.scale(scaleX, scaleY);
       }
      copyCtxState(currentCtx, groupCtx);
      this.ctx = groupCtx;
      this.setGState([
       [
        'BM',
        'Normal'
       ],
       [
        'ca',
        1
       ],
       [
        'CA',
        1
       ]
      ]);
      this.groupStack.push(currentCtx);
      this.groupLevel++;
      this.current.activeSMask = null;
     },
     endGroup: function CanvasGraphics_endGroup(group) {
      this.groupLevel--;
      var groupCtx = this.ctx;
      this.ctx = this.groupStack.pop();
      if (this.ctx.imageSmoothingEnabled !== undefined) {
       this.ctx.imageSmoothingEnabled = false;
      } else {
       this.ctx.mozImageSmoothingEnabled = false;
      }
      if (group.smask) {
       this.tempSMask = this.smaskStack.pop();
      } else {
       this.ctx.drawImage(groupCtx.canvas, 0, 0);
      }
      this.restore();
     },
     beginAnnotations: function CanvasGraphics_beginAnnotations() {
      this.save();
      this.current = new CanvasExtraState();
      if (this.baseTransform) {
       this.ctx.setTransform.apply(this.ctx, this.baseTransform);
      }
     },
     endAnnotations: function CanvasGraphics_endAnnotations() {
      this.restore();
     },
     beginAnnotation: function CanvasGraphics_beginAnnotation(rect, transform, matrix) {
      this.save();
      if (isArray(rect) && rect.length === 4) {
       var width = rect[2] - rect[0];
       var height = rect[3] - rect[1];
       this.ctx.rect(rect[0], rect[1], width, height);
       this.clip();
       this.endPath();
      }
      this.transform.apply(this, transform);
      this.transform.apply(this, matrix);
     },
     endAnnotation: function CanvasGraphics_endAnnotation() {
      this.restore();
     },
     paintJpegXObject: function CanvasGraphics_paintJpegXObject(objId, w, h) {
      var domImage = this.objs.get(objId);
      if (!domImage) {
       warn('Dependent image isn\'t ready yet');
       return;
      }
      this.save();
      var ctx = this.ctx;
      ctx.scale(1 / w, -1 / h);
      ctx.drawImage(domImage, 0, 0, domImage.width, domImage.height, 0, -h, w, h);
      if (this.imageLayer) {
       var currentTransform = ctx.mozCurrentTransformInverse;
       var position = this.getCanvasPosition(0, 0);
       this.imageLayer.appendImage({
        objId: objId,
        left: position[0],
        top: position[1],
        width: w / currentTransform[0],
        height: h / currentTransform[3]
       });
      }
      this.restore();
     },
     paintImageMaskXObject: function CanvasGraphics_paintImageMaskXObject(img) {
      var ctx = this.ctx;
      var width = img.width, height = img.height;
      var fillColor = this.current.fillColor;
      var isPatternFill = this.current.patternFill;
      var glyph = this.processingType3;
      if (COMPILE_TYPE3_GLYPHS && glyph && glyph.compiled === undefined) {
       if (width <= MAX_SIZE_TO_COMPILE && height <= MAX_SIZE_TO_COMPILE) {
        glyph.compiled = compileType3Glyph({
         data: img.data,
         width: width,
         height: height
        });
       } else {
        glyph.compiled = null;
       }
      }
      if (glyph && glyph.compiled) {
       glyph.compiled(ctx);
       return;
      }
      var maskCanvas = this.cachedCanvases.getCanvas('maskCanvas', width, height);
      var maskCtx = maskCanvas.context;
      maskCtx.save();
      putBinaryImageMask(maskCtx, img);
      maskCtx.globalCompositeOperation = 'source-in';
      maskCtx.fillStyle = isPatternFill ? fillColor.getPattern(maskCtx, this) : fillColor;
      maskCtx.fillRect(0, 0, width, height);
      maskCtx.restore();
      this.paintInlineImageXObject(maskCanvas.canvas);
     },
     paintImageMaskXObjectRepeat: function CanvasGraphics_paintImageMaskXObjectRepeat(imgData, scaleX, scaleY, positions) {
      var width = imgData.width;
      var height = imgData.height;
      var fillColor = this.current.fillColor;
      var isPatternFill = this.current.patternFill;
      var maskCanvas = this.cachedCanvases.getCanvas('maskCanvas', width, height);
      var maskCtx = maskCanvas.context;
      maskCtx.save();
      putBinaryImageMask(maskCtx, imgData);
      maskCtx.globalCompositeOperation = 'source-in';
      maskCtx.fillStyle = isPatternFill ? fillColor.getPattern(maskCtx, this) : fillColor;
      maskCtx.fillRect(0, 0, width, height);
      maskCtx.restore();
      var ctx = this.ctx;
      for (var i = 0, ii = positions.length; i < ii; i += 2) {
       ctx.save();
       ctx.transform(scaleX, 0, 0, scaleY, positions[i], positions[i + 1]);
       ctx.scale(1, -1);
       ctx.drawImage(maskCanvas.canvas, 0, 0, width, height, 0, -1, 1, 1);
       ctx.restore();
      }
     },
     paintImageMaskXObjectGroup: function CanvasGraphics_paintImageMaskXObjectGroup(images) {
      var ctx = this.ctx;
      var fillColor = this.current.fillColor;
      var isPatternFill = this.current.patternFill;
      for (var i = 0, ii = images.length; i < ii; i++) {
       var image = images[i];
       var width = image.width, height = image.height;
       var maskCanvas = this.cachedCanvases.getCanvas('maskCanvas', width, height);
       var maskCtx = maskCanvas.context;
       maskCtx.save();
       putBinaryImageMask(maskCtx, image);
       maskCtx.globalCompositeOperation = 'source-in';
       maskCtx.fillStyle = isPatternFill ? fillColor.getPattern(maskCtx, this) : fillColor;
       maskCtx.fillRect(0, 0, width, height);
       maskCtx.restore();
       ctx.save();
       ctx.transform.apply(ctx, image.transform);
       ctx.scale(1, -1);
       ctx.drawImage(maskCanvas.canvas, 0, 0, width, height, 0, -1, 1, 1);
       ctx.restore();
      }
     },
     paintImageXObject: function CanvasGraphics_paintImageXObject(objId) {
      var imgData = this.objs.get(objId);
      if (!imgData) {
       warn('Dependent image isn\'t ready yet');
       return;
      }
      this.paintInlineImageXObject(imgData);
     },
     paintImageXObjectRepeat: function CanvasGraphics_paintImageXObjectRepeat(objId, scaleX, scaleY, positions) {
      var imgData = this.objs.get(objId);
      if (!imgData) {
       warn('Dependent image isn\'t ready yet');
       return;
      }
      var width = imgData.width;
      var height = imgData.height;
      var map = [];
      for (var i = 0, ii = positions.length; i < ii; i += 2) {
       map.push({
        transform: [
         scaleX,
         0,
         0,
         scaleY,
         positions[i],
         positions[i + 1]
        ],
        x: 0,
        y: 0,
        w: width,
        h: height
       });
      }
      this.paintInlineImageXObjectGroup(imgData, map);
     },
     paintInlineImageXObject: function CanvasGraphics_paintInlineImageXObject(imgData) {
      var width = imgData.width;
      var height = imgData.height;
      var ctx = this.ctx;
      this.save();
      ctx.scale(1 / width, -1 / height);
      var currentTransform = ctx.mozCurrentTransformInverse;
      var a = currentTransform[0], b = currentTransform[1];
      var widthScale = Math.max(Math.sqrt(a * a + b * b), 1);
      var c = currentTransform[2], d = currentTransform[3];
      var heightScale = Math.max(Math.sqrt(c * c + d * d), 1);
      var imgToPaint, tmpCanvas;
      if (imgData instanceof HTMLElement || !imgData.data) {
       imgToPaint = imgData;
      } else {
       tmpCanvas = this.cachedCanvases.getCanvas('inlineImage', width, height);
       var tmpCtx = tmpCanvas.context;
       putBinaryImageData(tmpCtx, imgData);
       imgToPaint = tmpCanvas.canvas;
      }
      var paintWidth = width, paintHeight = height;
      var tmpCanvasId = 'prescale1';
      while (widthScale > 2 && paintWidth > 1 || heightScale > 2 && paintHeight > 1) {
       var newWidth = paintWidth, newHeight = paintHeight;
       if (widthScale > 2 && paintWidth > 1) {
        newWidth = Math.ceil(paintWidth / 2);
        widthScale /= paintWidth / newWidth;
       }
       if (heightScale > 2 && paintHeight > 1) {
        newHeight = Math.ceil(paintHeight / 2);
        heightScale /= paintHeight / newHeight;
       }
       tmpCanvas = this.cachedCanvases.getCanvas(tmpCanvasId, newWidth, newHeight);
       tmpCtx = tmpCanvas.context;
       tmpCtx.clearRect(0, 0, newWidth, newHeight);
       tmpCtx.drawImage(imgToPaint, 0, 0, paintWidth, paintHeight, 0, 0, newWidth, newHeight);
       imgToPaint = tmpCanvas.canvas;
       paintWidth = newWidth;
       paintHeight = newHeight;
       tmpCanvasId = tmpCanvasId === 'prescale1' ? 'prescale2' : 'prescale1';
      }
      ctx.drawImage(imgToPaint, 0, 0, paintWidth, paintHeight, 0, -height, width, height);
      if (this.imageLayer) {
       var position = this.getCanvasPosition(0, -height);
       this.imageLayer.appendImage({
        imgData: imgData,
        left: position[0],
        top: position[1],
        width: width / currentTransform[0],
        height: height / currentTransform[3]
       });
      }
      this.restore();
     },
     paintInlineImageXObjectGroup: function CanvasGraphics_paintInlineImageXObjectGroup(imgData, map) {
      var ctx = this.ctx;
      var w = imgData.width;
      var h = imgData.height;
      var tmpCanvas = this.cachedCanvases.getCanvas('inlineImage', w, h);
      var tmpCtx = tmpCanvas.context;
      putBinaryImageData(tmpCtx, imgData);
      for (var i = 0, ii = map.length; i < ii; i++) {
       var entry = map[i];
       ctx.save();
       ctx.transform.apply(ctx, entry.transform);
       ctx.scale(1, -1);
       ctx.drawImage(tmpCanvas.canvas, entry.x, entry.y, entry.w, entry.h, 0, -1, 1, 1);
       if (this.imageLayer) {
        var position = this.getCanvasPosition(entry.x, entry.y);
        this.imageLayer.appendImage({
         imgData: imgData,
         left: position[0],
         top: position[1],
         width: w,
         height: h
        });
       }
       ctx.restore();
      }
     },
     paintSolidColorImageMask: function CanvasGraphics_paintSolidColorImageMask() {
      this.ctx.fillRect(0, 0, 1, 1);
     },
     paintXObject: function CanvasGraphics_paintXObject() {
      warn('Unsupported \'paintXObject\' command.');
     },
     markPoint: function CanvasGraphics_markPoint(tag) {
     },
     markPointProps: function CanvasGraphics_markPointProps(tag, properties) {
     },
     beginMarkedContent: function CanvasGraphics_beginMarkedContent(tag) {
     },
     beginMarkedContentProps: function CanvasGraphics_beginMarkedContentProps(tag, properties) {
     },
     endMarkedContent: function CanvasGraphics_endMarkedContent() {
     },
     beginCompat: function CanvasGraphics_beginCompat() {
     },
     endCompat: function CanvasGraphics_endCompat() {
     },
     consumePath: function CanvasGraphics_consumePath() {
      var ctx = this.ctx;
      if (this.pendingClip) {
       if (this.pendingClip === EO_CLIP) {
        if (ctx.mozFillRule !== undefined) {
         ctx.mozFillRule = 'evenodd';
         ctx.clip();
         ctx.mozFillRule = 'nonzero';
        } else {
         ctx.clip('evenodd');
        }
       } else {
        ctx.clip();
       }
       this.pendingClip = null;
      }
      ctx.beginPath();
     },
     getSinglePixelWidth: function CanvasGraphics_getSinglePixelWidth(scale) {
      if (this.cachedGetSinglePixelWidth === null) {
       this.ctx.save();
       var inverse = this.ctx.mozCurrentTransformInverse;
       this.ctx.restore();
       this.cachedGetSinglePixelWidth = Math.sqrt(Math.max(inverse[0] * inverse[0] + inverse[1] * inverse[1], inverse[2] * inverse[2] + inverse[3] * inverse[3]));
      }
      return this.cachedGetSinglePixelWidth;
     },
     getCanvasPosition: function CanvasGraphics_getCanvasPosition(x, y) {
      var transform = this.ctx.mozCurrentTransform;
      return [
       transform[0] * x + transform[2] * y + transform[4],
       transform[1] * x + transform[3] * y + transform[5]
      ];
     }
    };
    for (var op in OPS) {
     CanvasGraphics.prototype[OPS[op]] = CanvasGraphics.prototype[op];
    }
    return CanvasGraphics;
   }();
   exports.CanvasGraphics = CanvasGraphics;
   exports.createScratchCanvas = createScratchCanvas;
  }));
  (function (root, factory) {
   factory(root.pdfjsDisplayAPI = {}, root.pdfjsSharedUtil, root.pdfjsDisplayFontLoader, root.pdfjsDisplayCanvas, root.pdfjsDisplayMetadata, root.pdfjsDisplayDOMUtils);
  }(this, function (exports, sharedUtil, displayFontLoader, displayCanvas, displayMetadata, displayDOMUtils, amdRequire) {
   var InvalidPDFException = sharedUtil.InvalidPDFException;
   var MessageHandler = sharedUtil.MessageHandler;
   var MissingPDFException = sharedUtil.MissingPDFException;
   var PageViewport = sharedUtil.PageViewport;
   var PasswordResponses = sharedUtil.PasswordResponses;
   var PasswordException = sharedUtil.PasswordException;
   var StatTimer = sharedUtil.StatTimer;
   var UnexpectedResponseException = sharedUtil.UnexpectedResponseException;
   var UnknownErrorException = sharedUtil.UnknownErrorException;
   var Util = sharedUtil.Util;
   var createPromiseCapability = sharedUtil.createPromiseCapability;
   var error = sharedUtil.error;
   var deprecated = sharedUtil.deprecated;
   var getVerbosityLevel = sharedUtil.getVerbosityLevel;
   var info = sharedUtil.info;
   var isInt = sharedUtil.isInt;
   var isArray = sharedUtil.isArray;
   var isArrayBuffer = sharedUtil.isArrayBuffer;
   var isSameOrigin = sharedUtil.isSameOrigin;
   var loadJpegStream = sharedUtil.loadJpegStream;
   var stringToBytes = sharedUtil.stringToBytes;
   var globalScope = sharedUtil.globalScope;
   var warn = sharedUtil.warn;
   var FontFaceObject = displayFontLoader.FontFaceObject;
   var FontLoader = displayFontLoader.FontLoader;
   var CanvasGraphics = displayCanvas.CanvasGraphics;
   var createScratchCanvas = displayCanvas.createScratchCanvas;
   var Metadata = displayMetadata.Metadata;
   var getDefaultSetting = displayDOMUtils.getDefaultSetting;
   var DEFAULT_RANGE_CHUNK_SIZE = 65536;
   var isWorkerDisabled = false;
   var workerSrc;
   var isPostMessageTransfersDisabled = false;
   var fakeWorkerFilesLoader = null;
   var useRequireEnsure = false;
   if (typeof window === 'undefined') {
    isWorkerDisabled = true;
    if (typeof require.ensure === 'undefined') {
     require.ensure = require('node-ensure');
    }
    useRequireEnsure = true;
   }
   if (typeof __webpack_require__ !== 'undefined') {
    useRequireEnsure = true;
   }
   if (typeof requirejs !== 'undefined' && requirejs.toUrl) {
    workerSrc = requirejs.toUrl('pdfjs-dist/build/pdf.worker.js');
   }
   var dynamicLoaderSupported = typeof requirejs !== 'undefined' && requirejs.load;
   fakeWorkerFilesLoader = useRequireEnsure ? function (callback) {
    require.ensure([], function () {
     var worker = require('./pdf.worker.js');
     callback(worker.WorkerMessageHandler);
    });
   } : dynamicLoaderSupported ? function (callback) {
    requirejs(['pdfjs-dist/build/pdf.worker'], function (worker) {
     callback(worker.WorkerMessageHandler);
    });
   } : null;
   function getDocument(src, pdfDataRangeTransport, passwordCallback, progressCallback) {
    var task = new PDFDocumentLoadingTask();
    if (arguments.length > 1) {
     deprecated('getDocument is called with pdfDataRangeTransport, ' + 'passwordCallback or progressCallback argument');
    }
    if (pdfDataRangeTransport) {
     if (!(pdfDataRangeTransport instanceof PDFDataRangeTransport)) {
      pdfDataRangeTransport = Object.create(pdfDataRangeTransport);
      pdfDataRangeTransport.length = src.length;
      pdfDataRangeTransport.initialData = src.initialData;
      if (!pdfDataRangeTransport.abort) {
       pdfDataRangeTransport.abort = function () {
       };
      }
     }
     src = Object.create(src);
     src.range = pdfDataRangeTransport;
    }
    task.onPassword = passwordCallback || null;
    task.onProgress = progressCallback || null;
    var source;
    if (typeof src === 'string') {
     source = { url: src };
    } else if (isArrayBuffer(src)) {
     source = { data: src };
    } else if (src instanceof PDFDataRangeTransport) {
     source = { range: src };
    } else {
     if (typeof src !== 'object') {
      error('Invalid parameter in getDocument, need either Uint8Array, ' + 'string or a parameter object');
     }
     if (!src.url && !src.data && !src.range) {
      error('Invalid parameter object: need either .data, .range or .url');
     }
     source = src;
    }
    var params = {};
    var rangeTransport = null;
    var worker = null;
    for (var key in source) {
     if (key === 'url' && typeof window !== 'undefined') {
      params[key] = new URL(source[key], window.location).href;
      continue;
     } else if (key === 'range') {
      rangeTransport = source[key];
      continue;
     } else if (key === 'worker') {
      worker = source[key];
      continue;
     } else if (key === 'data' && !(source[key] instanceof Uint8Array)) {
      var pdfBytes = source[key];
      if (typeof pdfBytes === 'string') {
       params[key] = stringToBytes(pdfBytes);
      } else if (typeof pdfBytes === 'object' && pdfBytes !== null && !isNaN(pdfBytes.length)) {
       params[key] = new Uint8Array(pdfBytes);
      } else if (isArrayBuffer(pdfBytes)) {
       params[key] = new Uint8Array(pdfBytes);
      } else {
       error('Invalid PDF binary data: either typed array, string or ' + 'array-like object is expected in the data property.');
      }
      continue;
     }
     params[key] = source[key];
    }
    params.rangeChunkSize = params.rangeChunkSize || DEFAULT_RANGE_CHUNK_SIZE;
    if (!worker) {
     worker = new PDFWorker();
     task._worker = worker;
    }
    var docId = task.docId;
    worker.promise.then(function () {
     if (task.destroyed) {
      throw new Error('Loading aborted');
     }
     return _fetchDocument(worker, params, rangeTransport, docId).then(function (workerId) {
      if (task.destroyed) {
       throw new Error('Loading aborted');
      }
      var messageHandler = new MessageHandler(docId, workerId, worker.port);
      var transport = new WorkerTransport(messageHandler, task, rangeTransport);
      task._transport = transport;
      messageHandler.send('Ready', null);
     });
    }).catch(task._capability.reject);
    return task;
   }
   function _fetchDocument(worker, source, pdfDataRangeTransport, docId) {
    if (worker.destroyed) {
     return Promise.reject(new Error('Worker was destroyed'));
    }
    source.disableAutoFetch = getDefaultSetting('disableAutoFetch');
    source.disableStream = getDefaultSetting('disableStream');
    source.chunkedViewerLoading = !!pdfDataRangeTransport;
    if (pdfDataRangeTransport) {
     source.length = pdfDataRangeTransport.length;
     source.initialData = pdfDataRangeTransport.initialData;
    }
    return worker.messageHandler.sendWithPromise('GetDocRequest', {
     docId: docId,
     source: source,
     disableRange: getDefaultSetting('disableRange'),
     maxImageSize: getDefaultSetting('maxImageSize'),
     cMapUrl: getDefaultSetting('cMapUrl'),
     cMapPacked: getDefaultSetting('cMapPacked'),
     disableFontFace: getDefaultSetting('disableFontFace'),
     disableCreateObjectURL: getDefaultSetting('disableCreateObjectURL'),
     postMessageTransfers: getDefaultSetting('postMessageTransfers') && !isPostMessageTransfersDisabled,
     docBaseUrl: source.docBaseUrl
    }).then(function (workerId) {
     if (worker.destroyed) {
      throw new Error('Worker was destroyed');
     }
     return workerId;
    });
   }
   var PDFDocumentLoadingTask = function PDFDocumentLoadingTaskClosure() {
    var nextDocumentId = 0;
    function PDFDocumentLoadingTask() {
     this._capability = createPromiseCapability();
     this._transport = null;
     this._worker = null;
     this.docId = 'd' + nextDocumentId++;
     this.destroyed = false;
     this.onPassword = null;
     this.onProgress = null;
     this.onUnsupportedFeature = null;
    }
    PDFDocumentLoadingTask.prototype = {
     get promise() {
      return this._capability.promise;
     },
     destroy: function () {
      this.destroyed = true;
      var transportDestroyed = !this._transport ? Promise.resolve() : this._transport.destroy();
      return transportDestroyed.then(function () {
       this._transport = null;
       if (this._worker) {
        this._worker.destroy();
        this._worker = null;
       }
      }.bind(this));
     },
     then: function PDFDocumentLoadingTask_then(onFulfilled, onRejected) {
      return this.promise.then.apply(this.promise, arguments);
     }
    };
    return PDFDocumentLoadingTask;
   }();
   var PDFDataRangeTransport = function pdfDataRangeTransportClosure() {
    function PDFDataRangeTransport(length, initialData) {
     this.length = length;
     this.initialData = initialData;
     this._rangeListeners = [];
     this._progressListeners = [];
     this._progressiveReadListeners = [];
     this._readyCapability = createPromiseCapability();
    }
    PDFDataRangeTransport.prototype = {
     addRangeListener: function PDFDataRangeTransport_addRangeListener(listener) {
      this._rangeListeners.push(listener);
     },
     addProgressListener: function PDFDataRangeTransport_addProgressListener(listener) {
      this._progressListeners.push(listener);
     },
     addProgressiveReadListener: function PDFDataRangeTransport_addProgressiveReadListener(listener) {
      this._progressiveReadListeners.push(listener);
     },
     onDataRange: function PDFDataRangeTransport_onDataRange(begin, chunk) {
      var listeners = this._rangeListeners;
      for (var i = 0, n = listeners.length; i < n; ++i) {
       listeners[i](begin, chunk);
      }
     },
     onDataProgress: function PDFDataRangeTransport_onDataProgress(loaded) {
      this._readyCapability.promise.then(function () {
       var listeners = this._progressListeners;
       for (var i = 0, n = listeners.length; i < n; ++i) {
        listeners[i](loaded);
       }
      }.bind(this));
     },
     onDataProgressiveRead: function PDFDataRangeTransport_onDataProgress(chunk) {
      this._readyCapability.promise.then(function () {
       var listeners = this._progressiveReadListeners;
       for (var i = 0, n = listeners.length; i < n; ++i) {
        listeners[i](chunk);
       }
      }.bind(this));
     },
     transportReady: function PDFDataRangeTransport_transportReady() {
      this._readyCapability.resolve();
     },
     requestDataRange: function PDFDataRangeTransport_requestDataRange(begin, end) {
      throw new Error('Abstract method PDFDataRangeTransport.requestDataRange');
     },
     abort: function PDFDataRangeTransport_abort() {
     }
    };
    return PDFDataRangeTransport;
   }();
   var PDFDocumentProxy = function PDFDocumentProxyClosure() {
    function PDFDocumentProxy(pdfInfo, transport, loadingTask) {
     this.pdfInfo = pdfInfo;
     this.transport = transport;
     this.loadingTask = loadingTask;
    }
    PDFDocumentProxy.prototype = {
     get numPages() {
      return this.pdfInfo.numPages;
     },
     get fingerprint() {
      return this.pdfInfo.fingerprint;
     },
     getPage: function PDFDocumentProxy_getPage(pageNumber) {
      return this.transport.getPage(pageNumber);
     },
     getPageIndex: function PDFDocumentProxy_getPageIndex(ref) {
      return this.transport.getPageIndex(ref);
     },
     getDestinations: function PDFDocumentProxy_getDestinations() {
      return this.transport.getDestinations();
     },
     getDestination: function PDFDocumentProxy_getDestination(id) {
      return this.transport.getDestination(id);
     },
     getPageLabels: function PDFDocumentProxy_getPageLabels() {
      return this.transport.getPageLabels();
     },
     getAttachments: function PDFDocumentProxy_getAttachments() {
      return this.transport.getAttachments();
     },
     getJavaScript: function PDFDocumentProxy_getJavaScript() {
      return this.transport.getJavaScript();
     },
     getOutline: function PDFDocumentProxy_getOutline() {
      return this.transport.getOutline();
     },
     getMetadata: function PDFDocumentProxy_getMetadata() {
      return this.transport.getMetadata();
     },
     getData: function PDFDocumentProxy_getData() {
      return this.transport.getData();
     },
     getDownloadInfo: function PDFDocumentProxy_getDownloadInfo() {
      return this.transport.downloadInfoCapability.promise;
     },
     getStats: function PDFDocumentProxy_getStats() {
      return this.transport.getStats();
     },
     cleanup: function PDFDocumentProxy_cleanup() {
      this.transport.startCleanup();
     },
     destroy: function PDFDocumentProxy_destroy() {
      return this.loadingTask.destroy();
     }
    };
    return PDFDocumentProxy;
   }();
   var PDFPageProxy = function PDFPageProxyClosure() {
    function PDFPageProxy(pageIndex, pageInfo, transport) {
     this.pageIndex = pageIndex;
     this.pageInfo = pageInfo;
     this.transport = transport;
     this.stats = new StatTimer();
     this.stats.enabled = getDefaultSetting('enableStats');
     this.commonObjs = transport.commonObjs;
     this.objs = new PDFObjects();
     this.cleanupAfterRender = false;
     this.pendingCleanup = false;
     this.intentStates = Object.create(null);
     this.destroyed = false;
    }
    PDFPageProxy.prototype = {
     get pageNumber() {
      return this.pageIndex + 1;
     },
     get rotate() {
      return this.pageInfo.rotate;
     },
     get ref() {
      return this.pageInfo.ref;
     },
     get userUnit() {
      return this.pageInfo.userUnit;
     },
     get view() {
      return this.pageInfo.view;
     },
     getViewport: function PDFPageProxy_getViewport(scale, rotate) {
      if (arguments.length < 2) {
       rotate = this.rotate;
      }
      return new PageViewport(this.view, scale, rotate, 0, 0);
     },
     getAnnotations: function PDFPageProxy_getAnnotations(params) {
      var intent = params && params.intent || null;
      if (!this.annotationsPromise || this.annotationsIntent !== intent) {
       this.annotationsPromise = this.transport.getAnnotations(this.pageIndex, intent);
       this.annotationsIntent = intent;
      }
      return this.annotationsPromise;
     },
     render: function PDFPageProxy_render(params) {
      var stats = this.stats;
      stats.time('Overall');
      this.pendingCleanup = false;
      var renderingIntent = params.intent === 'print' ? 'print' : 'display';
      var renderInteractiveForms = params.renderInteractiveForms === true ? true : false;
      if (!this.intentStates[renderingIntent]) {
       this.intentStates[renderingIntent] = Object.create(null);
      }
      var intentState = this.intentStates[renderingIntent];
      if (!intentState.displayReadyCapability) {
       intentState.receivingOperatorList = true;
       intentState.displayReadyCapability = createPromiseCapability();
       intentState.operatorList = {
        fnArray: [],
        argsArray: [],
        lastChunk: false
       };
       this.stats.time('Page Request');
       this.transport.messageHandler.send('RenderPageRequest', {
        pageIndex: this.pageNumber - 1,
        intent: renderingIntent,
        renderInteractiveForms: renderInteractiveForms
       });
      }
      var internalRenderTask = new InternalRenderTask(complete, params, this.objs, this.commonObjs, intentState.operatorList, this.pageNumber);
      internalRenderTask.useRequestAnimationFrame = renderingIntent !== 'print';
      if (!intentState.renderTasks) {
       intentState.renderTasks = [];
      }
      intentState.renderTasks.push(internalRenderTask);
      var renderTask = internalRenderTask.task;
      if (params.continueCallback) {
       deprecated('render is used with continueCallback parameter');
       renderTask.onContinue = params.continueCallback;
      }
      var self = this;
      intentState.displayReadyCapability.promise.then(function pageDisplayReadyPromise(transparency) {
       if (self.pendingCleanup) {
        complete();
        return;
       }
       stats.time('Rendering');
       internalRenderTask.initializeGraphics(transparency);
       internalRenderTask.operatorListChanged();
      }, function pageDisplayReadPromiseError(reason) {
       complete(reason);
      });
      function complete(error) {
       var i = intentState.renderTasks.indexOf(internalRenderTask);
       if (i >= 0) {
        intentState.renderTasks.splice(i, 1);
       }
       if (self.cleanupAfterRender) {
        self.pendingCleanup = true;
       }
       self._tryCleanup();
       if (error) {
        internalRenderTask.capability.reject(error);
       } else {
        internalRenderTask.capability.resolve();
       }
       stats.timeEnd('Rendering');
       stats.timeEnd('Overall');
      }
      return renderTask;
     },
     getOperatorList: function PDFPageProxy_getOperatorList() {
      function operatorListChanged() {
       if (intentState.operatorList.lastChunk) {
        intentState.opListReadCapability.resolve(intentState.operatorList);
        var i = intentState.renderTasks.indexOf(opListTask);
        if (i >= 0) {
         intentState.renderTasks.splice(i, 1);
        }
       }
      }
      var renderingIntent = 'oplist';
      if (!this.intentStates[renderingIntent]) {
       this.intentStates[renderingIntent] = Object.create(null);
      }
      var intentState = this.intentStates[renderingIntent];
      var opListTask;
      if (!intentState.opListReadCapability) {
       opListTask = {};
       opListTask.operatorListChanged = operatorListChanged;
       intentState.receivingOperatorList = true;
       intentState.opListReadCapability = createPromiseCapability();
       intentState.renderTasks = [];
       intentState.renderTasks.push(opListTask);
       intentState.operatorList = {
        fnArray: [],
        argsArray: [],
        lastChunk: false
       };
       this.transport.messageHandler.send('RenderPageRequest', {
        pageIndex: this.pageIndex,
        intent: renderingIntent
       });
      }
      return intentState.opListReadCapability.promise;
     },
     getTextContent: function PDFPageProxy_getTextContent(params) {
      return this.transport.messageHandler.sendWithPromise('GetTextContent', {
       pageIndex: this.pageNumber - 1,
       normalizeWhitespace: params && params.normalizeWhitespace === true ? true : false,
       combineTextItems: params && params.disableCombineTextItems === true ? false : true
      });
     },
     _destroy: function PDFPageProxy_destroy() {
      this.destroyed = true;
      this.transport.pageCache[this.pageIndex] = null;
      var waitOn = [];
      Object.keys(this.intentStates).forEach(function (intent) {
       if (intent === 'oplist') {
        return;
       }
       var intentState = this.intentStates[intent];
       intentState.renderTasks.forEach(function (renderTask) {
        var renderCompleted = renderTask.capability.promise.catch(function () {
        });
        waitOn.push(renderCompleted);
        renderTask.cancel();
       });
      }, this);
      this.objs.clear();
      this.annotationsPromise = null;
      this.pendingCleanup = false;
      return Promise.all(waitOn);
     },
     destroy: function () {
      deprecated('page destroy method, use cleanup() instead');
      this.cleanup();
     },
     cleanup: function PDFPageProxy_cleanup() {
      this.pendingCleanup = true;
      this._tryCleanup();
     },
     _tryCleanup: function PDFPageProxy_tryCleanup() {
      if (!this.pendingCleanup || Object.keys(this.intentStates).some(function (intent) {
        var intentState = this.intentStates[intent];
        return intentState.renderTasks.length !== 0 || intentState.receivingOperatorList;
       }, this)) {
       return;
      }
      Object.keys(this.intentStates).forEach(function (intent) {
       delete this.intentStates[intent];
      }, this);
      this.objs.clear();
      this.annotationsPromise = null;
      this.pendingCleanup = false;
     },
     _startRenderPage: function PDFPageProxy_startRenderPage(transparency, intent) {
      var intentState = this.intentStates[intent];
      if (intentState.displayReadyCapability) {
       intentState.displayReadyCapability.resolve(transparency);
      }
     },
     _renderPageChunk: function PDFPageProxy_renderPageChunk(operatorListChunk, intent) {
      var intentState = this.intentStates[intent];
      var i, ii;
      for (i = 0, ii = operatorListChunk.length; i < ii; i++) {
       intentState.operatorList.fnArray.push(operatorListChunk.fnArray[i]);
       intentState.operatorList.argsArray.push(operatorListChunk.argsArray[i]);
      }
      intentState.operatorList.lastChunk = operatorListChunk.lastChunk;
      for (i = 0; i < intentState.renderTasks.length; i++) {
       intentState.renderTasks[i].operatorListChanged();
      }
      if (operatorListChunk.lastChunk) {
       intentState.receivingOperatorList = false;
       this._tryCleanup();
      }
     }
    };
    return PDFPageProxy;
   }();
   var PDFWorker = function PDFWorkerClosure() {
    var nextFakeWorkerId = 0;
    function getWorkerSrc() {
     if (typeof workerSrc !== 'undefined') {
      return workerSrc;
     }
     if (getDefaultSetting('workerSrc')) {
      return getDefaultSetting('workerSrc');
     }
     if (pdfjsFilePath) {
      return pdfjsFilePath.replace(/\.js$/i, '.worker.js');
     }
     error('No PDFJS.workerSrc specified');
    }
    var fakeWorkerFilesLoadedCapability;
    function setupFakeWorkerGlobal() {
     var WorkerMessageHandler;
     if (fakeWorkerFilesLoadedCapability) {
      return fakeWorkerFilesLoadedCapability.promise;
     }
     fakeWorkerFilesLoadedCapability = createPromiseCapability();
     var loader = fakeWorkerFilesLoader || function (callback) {
      Util.loadScript(getWorkerSrc(), function () {
       callback(window.pdfjsDistBuildPdfWorker.WorkerMessageHandler);
      });
     };
     loader(fakeWorkerFilesLoadedCapability.resolve);
     return fakeWorkerFilesLoadedCapability.promise;
    }
    function FakeWorkerPort(defer) {
     this._listeners = [];
     this._defer = defer;
     this._deferred = Promise.resolve(undefined);
    }
    FakeWorkerPort.prototype = {
     postMessage: function (obj, transfers) {
      function cloneValue(value) {
       if (typeof value !== 'object' || value === null) {
        return value;
       }
       if (cloned.has(value)) {
        return cloned.get(value);
       }
       var result;
       var buffer;
       if ((buffer = value.buffer) && isArrayBuffer(buffer)) {
        var transferable = transfers && transfers.indexOf(buffer) >= 0;
        if (value === buffer) {
         result = value;
        } else if (transferable) {
         result = new value.constructor(buffer, value.byteOffset, value.byteLength);
        } else {
         result = new value.constructor(value);
        }
        cloned.set(value, result);
        return result;
       }
       result = isArray(value) ? [] : {};
       cloned.set(value, result);
       for (var i in value) {
        var desc, p = value;
        while (!(desc = Object.getOwnPropertyDescriptor(p, i))) {
         p = Object.getPrototypeOf(p);
        }
        if (typeof desc.value === 'undefined' || typeof desc.value === 'function') {
         continue;
        }
        result[i] = cloneValue(desc.value);
       }
       return result;
      }
      if (!this._defer) {
       this._listeners.forEach(function (listener) {
        listener.call(this, { data: obj });
       }, this);
       return;
      }
      var cloned = new WeakMap();
      var e = { data: cloneValue(obj) };
      this._deferred.then(function () {
       this._listeners.forEach(function (listener) {
        listener.call(this, e);
       }, this);
      }.bind(this));
     },
     addEventListener: function (name, listener) {
      this._listeners.push(listener);
     },
     removeEventListener: function (name, listener) {
      var i = this._listeners.indexOf(listener);
      this._listeners.splice(i, 1);
     },
     terminate: function () {
      this._listeners = [];
     }
    };
    function createCDNWrapper(url) {
     var wrapper = 'importScripts(\'' + url + '\');';
     return URL.createObjectURL(new Blob([wrapper]));
    }
    function PDFWorker(name) {
     this.name = name;
     this.destroyed = false;
     this._readyCapability = createPromiseCapability();
     this._port = null;
     this._webWorker = null;
     this._messageHandler = null;
     this._initialize();
    }
    PDFWorker.prototype = {
     get promise() {
      return this._readyCapability.promise;
     },
     get port() {
      return this._port;
     },
     get messageHandler() {
      return this._messageHandler;
     },
     _initialize: function PDFWorker_initialize() {
      if (!isWorkerDisabled && !getDefaultSetting('disableWorker') && typeof Worker !== 'undefined') {
       var workerSrc = getWorkerSrc();
       try {
        if (!isSameOrigin(window.location.href, workerSrc)) {
         workerSrc = createCDNWrapper(new URL(workerSrc, window.location).href);
        }
        var worker = new Worker(workerSrc);
        var messageHandler = new MessageHandler('main', 'worker', worker);
        var terminateEarly = function () {
         worker.removeEventListener('error', onWorkerError);
         messageHandler.destroy();
         worker.terminate();
         if (this.destroyed) {
          this._readyCapability.reject(new Error('Worker was destroyed'));
         } else {
          this._setupFakeWorker();
         }
        }.bind(this);
        var onWorkerError = function (event) {
         if (!this._webWorker) {
          terminateEarly();
         }
        }.bind(this);
        worker.addEventListener('error', onWorkerError);
        messageHandler.on('test', function PDFWorker_test(data) {
         worker.removeEventListener('error', onWorkerError);
         if (this.destroyed) {
          terminateEarly();
          return;
         }
         var supportTypedArray = data && data.supportTypedArray;
         if (supportTypedArray) {
          this._messageHandler = messageHandler;
          this._port = worker;
          this._webWorker = worker;
          if (!data.supportTransfers) {
           isPostMessageTransfersDisabled = true;
          }
          this._readyCapability.resolve();
          messageHandler.send('configure', { verbosity: getVerbosityLevel() });
         } else {
          this._setupFakeWorker();
          messageHandler.destroy();
          worker.terminate();
         }
        }.bind(this));
        messageHandler.on('console_log', function (data) {
         console.log.apply(console, data);
        });
        messageHandler.on('console_error', function (data) {
         console.error.apply(console, data);
        });
        messageHandler.on('ready', function (data) {
         worker.removeEventListener('error', onWorkerError);
         if (this.destroyed) {
          terminateEarly();
          return;
         }
         try {
          sendTest();
         } catch (e) {
          this._setupFakeWorker();
         }
        }.bind(this));
        var sendTest = function () {
         var postMessageTransfers = getDefaultSetting('postMessageTransfers') && !isPostMessageTransfersDisabled;
         var testObj = new Uint8Array([postMessageTransfers ? 255 : 0]);
         try {
          messageHandler.send('test', testObj, [testObj.buffer]);
         } catch (ex) {
          info('Cannot use postMessage transfers');
          testObj[0] = 0;
          messageHandler.send('test', testObj);
         }
        };
        sendTest();
        return;
       } catch (e) {
        info('The worker has been disabled.');
       }
      }
      this._setupFakeWorker();
     },
     _setupFakeWorker: function PDFWorker_setupFakeWorker() {
      if (!isWorkerDisabled && !getDefaultSetting('disableWorker')) {
       warn('Setting up fake worker.');
       isWorkerDisabled = true;
      }
      setupFakeWorkerGlobal().then(function (WorkerMessageHandler) {
       if (this.destroyed) {
        this._readyCapability.reject(new Error('Worker was destroyed'));
        return;
       }
       var isTypedArraysPresent = Uint8Array !== Float32Array;
       var port = new FakeWorkerPort(isTypedArraysPresent);
       this._port = port;
       var id = 'fake' + nextFakeWorkerId++;
       var workerHandler = new MessageHandler(id + '_worker', id, port);
       WorkerMessageHandler.setup(workerHandler, port);
       var messageHandler = new MessageHandler(id, id + '_worker', port);
       this._messageHandler = messageHandler;
       this._readyCapability.resolve();
      }.bind(this));
     },
     destroy: function PDFWorker_destroy() {
      this.destroyed = true;
      if (this._webWorker) {
       this._webWorker.terminate();
       this._webWorker = null;
      }
      this._port = null;
      if (this._messageHandler) {
       this._messageHandler.destroy();
       this._messageHandler = null;
      }
     }
    };
    return PDFWorker;
   }();
   var WorkerTransport = function WorkerTransportClosure() {
    function WorkerTransport(messageHandler, loadingTask, pdfDataRangeTransport) {
     this.messageHandler = messageHandler;
     this.loadingTask = loadingTask;
     this.pdfDataRangeTransport = pdfDataRangeTransport;
     this.commonObjs = new PDFObjects();
     this.fontLoader = new FontLoader(loadingTask.docId);
     this.destroyed = false;
     this.destroyCapability = null;
     this._passwordCapability = null;
     this.pageCache = [];
     this.pagePromises = [];
     this.downloadInfoCapability = createPromiseCapability();
     this.setupMessageHandler();
    }
    WorkerTransport.prototype = {
     destroy: function WorkerTransport_destroy() {
      if (this.destroyCapability) {
       return this.destroyCapability.promise;
      }
      this.destroyed = true;
      this.destroyCapability = createPromiseCapability();
      if (this._passwordCapability) {
       this._passwordCapability.reject(new Error('Worker was destroyed during onPassword callback'));
      }
      var waitOn = [];
      this.pageCache.forEach(function (page) {
       if (page) {
        waitOn.push(page._destroy());
       }
      });
      this.pageCache = [];
      this.pagePromises = [];
      var self = this;
      var terminated = this.messageHandler.sendWithPromise('Terminate', null);
      waitOn.push(terminated);
      Promise.all(waitOn).then(function () {
       self.fontLoader.clear();
       if (self.pdfDataRangeTransport) {
        self.pdfDataRangeTransport.abort();
        self.pdfDataRangeTransport = null;
       }
       if (self.messageHandler) {
        self.messageHandler.destroy();
        self.messageHandler = null;
       }
       self.destroyCapability.resolve();
      }, this.destroyCapability.reject);
      return this.destroyCapability.promise;
     },
     setupMessageHandler: function WorkerTransport_setupMessageHandler() {
      var messageHandler = this.messageHandler;
      var loadingTask = this.loadingTask;
      var pdfDataRangeTransport = this.pdfDataRangeTransport;
      if (pdfDataRangeTransport) {
       pdfDataRangeTransport.addRangeListener(function (begin, chunk) {
        messageHandler.send('OnDataRange', {
         begin: begin,
         chunk: chunk
        });
       });
       pdfDataRangeTransport.addProgressListener(function (loaded) {
        messageHandler.send('OnDataProgress', { loaded: loaded });
       });
       pdfDataRangeTransport.addProgressiveReadListener(function (chunk) {
        messageHandler.send('OnDataRange', { chunk: chunk });
       });
       messageHandler.on('RequestDataRange', function transportDataRange(data) {
        pdfDataRangeTransport.requestDataRange(data.begin, data.end);
       }, this);
      }
      messageHandler.on('GetDoc', function transportDoc(data) {
       var pdfInfo = data.pdfInfo;
       this.numPages = data.pdfInfo.numPages;
       var loadingTask = this.loadingTask;
       var pdfDocument = new PDFDocumentProxy(pdfInfo, this, loadingTask);
       this.pdfDocument = pdfDocument;
       loadingTask._capability.resolve(pdfDocument);
      }, this);
      messageHandler.on('PasswordRequest', function transportPasswordRequest(exception) {
       this._passwordCapability = createPromiseCapability();
       if (loadingTask.onPassword) {
        var updatePassword = function (password) {
         this._passwordCapability.resolve({ password: password });
        }.bind(this);
        loadingTask.onPassword(updatePassword, exception.code);
       } else {
        this._passwordCapability.reject(new PasswordException(exception.message, exception.code));
       }
       return this._passwordCapability.promise;
      }, this);
      messageHandler.on('PasswordException', function transportPasswordException(exception) {
       loadingTask._capability.reject(new PasswordException(exception.message, exception.code));
      }, this);
      messageHandler.on('InvalidPDF', function transportInvalidPDF(exception) {
       this.loadingTask._capability.reject(new InvalidPDFException(exception.message));
      }, this);
      messageHandler.on('MissingPDF', function transportMissingPDF(exception) {
       this.loadingTask._capability.reject(new MissingPDFException(exception.message));
      }, this);
      messageHandler.on('UnexpectedResponse', function transportUnexpectedResponse(exception) {
       this.loadingTask._capability.reject(new UnexpectedResponseException(exception.message, exception.status));
      }, this);
      messageHandler.on('UnknownError', function transportUnknownError(exception) {
       this.loadingTask._capability.reject(new UnknownErrorException(exception.message, exception.details));
      }, this);
      messageHandler.on('DataLoaded', function transportPage(data) {
       this.downloadInfoCapability.resolve(data);
      }, this);
      messageHandler.on('PDFManagerReady', function transportPage(data) {
       if (this.pdfDataRangeTransport) {
        this.pdfDataRangeTransport.transportReady();
       }
      }, this);
      messageHandler.on('StartRenderPage', function transportRender(data) {
       if (this.destroyed) {
        return;
       }
       var page = this.pageCache[data.pageIndex];
       page.stats.timeEnd('Page Request');
       page._startRenderPage(data.transparency, data.intent);
      }, this);
      messageHandler.on('RenderPageChunk', function transportRender(data) {
       if (this.destroyed) {
        return;
       }
       var page = this.pageCache[data.pageIndex];
       page._renderPageChunk(data.operatorList, data.intent);
      }, this);
      messageHandler.on('commonobj', function transportObj(data) {
       if (this.destroyed) {
        return;
       }
       var id = data[0];
       var type = data[1];
       if (this.commonObjs.hasData(id)) {
        return;
       }
       switch (type) {
       case 'Font':
        var exportedData = data[2];
        if ('error' in exportedData) {
         var exportedError = exportedData.error;
         warn('Error during font loading: ' + exportedError);
         this.commonObjs.resolve(id, exportedError);
         break;
        }
        var fontRegistry = null;
        if (getDefaultSetting('pdfBug') && globalScope.FontInspector && globalScope['FontInspector'].enabled) {
         fontRegistry = {
          registerFont: function (font, url) {
           globalScope['FontInspector'].fontAdded(font, url);
          }
         };
        }
        var font = new FontFaceObject(exportedData, {
         isEvalSuported: getDefaultSetting('isEvalSupported'),
         disableFontFace: getDefaultSetting('disableFontFace'),
         fontRegistry: fontRegistry
        });
        this.fontLoader.bind([font], function fontReady(fontObjs) {
         this.commonObjs.resolve(id, font);
        }.bind(this));
        break;
       case 'FontPath':
        this.commonObjs.resolve(id, data[2]);
        break;
       default:
        error('Got unknown common object type ' + type);
       }
      }, this);
      messageHandler.on('obj', function transportObj(data) {
       if (this.destroyed) {
        return;
       }
       var id = data[0];
       var pageIndex = data[1];
       var type = data[2];
       var pageProxy = this.pageCache[pageIndex];
       var imageData;
       if (pageProxy.objs.hasData(id)) {
        return;
       }
       switch (type) {
       case 'JpegStream':
        imageData = data[3];
        loadJpegStream(id, imageData, pageProxy.objs);
        break;
       case 'Image':
        imageData = data[3];
        pageProxy.objs.resolve(id, imageData);
        var MAX_IMAGE_SIZE_TO_STORE = 8000000;
        if (imageData && 'data' in imageData && imageData.data.length > MAX_IMAGE_SIZE_TO_STORE) {
         pageProxy.cleanupAfterRender = true;
        }
        break;
       default:
        error('Got unknown object type ' + type);
       }
      }, this);
      messageHandler.on('DocProgress', function transportDocProgress(data) {
       if (this.destroyed) {
        return;
       }
       var loadingTask = this.loadingTask;
       if (loadingTask.onProgress) {
        loadingTask.onProgress({
         loaded: data.loaded,
         total: data.total
        });
       }
      }, this);
      messageHandler.on('PageError', function transportError(data) {
       if (this.destroyed) {
        return;
       }
       var page = this.pageCache[data.pageNum - 1];
       var intentState = page.intentStates[data.intent];
       if (intentState.displayReadyCapability) {
        intentState.displayReadyCapability.reject(data.error);
       } else {
        error(data.error);
       }
       if (intentState.operatorList) {
        intentState.operatorList.lastChunk = true;
        for (var i = 0; i < intentState.renderTasks.length; i++) {
         intentState.renderTasks[i].operatorListChanged();
        }
       }
      }, this);
      messageHandler.on('UnsupportedFeature', function transportUnsupportedFeature(data) {
       if (this.destroyed) {
        return;
       }
       var featureId = data.featureId;
       var loadingTask = this.loadingTask;
       if (loadingTask.onUnsupportedFeature) {
        loadingTask.onUnsupportedFeature(featureId);
       }
       _UnsupportedManager.notify(featureId);
      }, this);
      messageHandler.on('JpegDecode', function (data) {
       if (this.destroyed) {
        return Promise.reject(new Error('Worker was destroyed'));
       }
       var imageUrl = data[0];
       var components = data[1];
       if (components !== 3 && components !== 1) {
        return Promise.reject(new Error('Only 3 components or 1 component can be returned'));
       }
       return new Promise(function (resolve, reject) {
        var img = new Image();
        img.onload = function () {
         var width = img.width;
         var height = img.height;
         var size = width * height;
         var rgbaLength = size * 4;
         var buf = new Uint8Array(size * components);
         var tmpCanvas = createScratchCanvas(width, height);
         var tmpCtx = tmpCanvas.getContext('2d');
         tmpCtx.drawImage(img, 0, 0);
         var data = tmpCtx.getImageData(0, 0, width, height).data;
         var i, j;
         if (components === 3) {
          for (i = 0, j = 0; i < rgbaLength; i += 4, j += 3) {
           buf[j] = data[i];
           buf[j + 1] = data[i + 1];
           buf[j + 2] = data[i + 2];
          }
         } else if (components === 1) {
          for (i = 0, j = 0; i < rgbaLength; i += 4, j++) {
           buf[j] = data[i];
          }
         }
         resolve({
          data: buf,
          width: width,
          height: height
         });
        };
        img.onerror = function () {
         reject(new Error('JpegDecode failed to load image'));
        };
        img.src = imageUrl;
       });
      }, this);
     },
     getData: function WorkerTransport_getData() {
      return this.messageHandler.sendWithPromise('GetData', null);
     },
     getPage: function WorkerTransport_getPage(pageNumber, capability) {
      if (!isInt(pageNumber) || pageNumber <= 0 || pageNumber > this.numPages) {
       return Promise.reject(new Error('Invalid page request'));
      }
      var pageIndex = pageNumber - 1;
      if (pageIndex in this.pagePromises) {
       return this.pagePromises[pageIndex];
      }
      var promise = this.messageHandler.sendWithPromise('GetPage', { pageIndex: pageIndex }).then(function (pageInfo) {
       if (this.destroyed) {
        throw new Error('Transport destroyed');
       }
       var page = new PDFPageProxy(pageIndex, pageInfo, this);
       this.pageCache[pageIndex] = page;
       return page;
      }.bind(this));
      this.pagePromises[pageIndex] = promise;
      return promise;
     },
     getPageIndex: function WorkerTransport_getPageIndexByRef(ref) {
      return this.messageHandler.sendWithPromise('GetPageIndex', { ref: ref }).catch(function (reason) {
       return Promise.reject(new Error(reason));
      });
     },
     getAnnotations: function WorkerTransport_getAnnotations(pageIndex, intent) {
      return this.messageHandler.sendWithPromise('GetAnnotations', {
       pageIndex: pageIndex,
       intent: intent
      });
     },
     getDestinations: function WorkerTransport_getDestinations() {
      return this.messageHandler.sendWithPromise('GetDestinations', null);
     },
     getDestination: function WorkerTransport_getDestination(id) {
      return this.messageHandler.sendWithPromise('GetDestination', { id: id });
     },
     getPageLabels: function WorkerTransport_getPageLabels() {
      return this.messageHandler.sendWithPromise('GetPageLabels', null);
     },
     getAttachments: function WorkerTransport_getAttachments() {
      return this.messageHandler.sendWithPromise('GetAttachments', null);
     },
     getJavaScript: function WorkerTransport_getJavaScript() {
      return this.messageHandler.sendWithPromise('GetJavaScript', null);
     },
     getOutline: function WorkerTransport_getOutline() {
      return this.messageHandler.sendWithPromise('GetOutline', null);
     },
     getMetadata: function WorkerTransport_getMetadata() {
      return this.messageHandler.sendWithPromise('GetMetadata', null).then(function transportMetadata(results) {
       return {
        info: results[0],
        metadata: results[1] ? new Metadata(results[1]) : null
       };
      });
     },
     getStats: function WorkerTransport_getStats() {
      return this.messageHandler.sendWithPromise('GetStats', null);
     },
     startCleanup: function WorkerTransport_startCleanup() {
      this.messageHandler.sendWithPromise('Cleanup', null).then(function endCleanup() {
       for (var i = 0, ii = this.pageCache.length; i < ii; i++) {
        var page = this.pageCache[i];
        if (page) {
         page.cleanup();
        }
       }
       this.commonObjs.clear();
       this.fontLoader.clear();
      }.bind(this));
     }
    };
    return WorkerTransport;
   }();
   var PDFObjects = function PDFObjectsClosure() {
    function PDFObjects() {
     this.objs = Object.create(null);
    }
    PDFObjects.prototype = {
     ensureObj: function PDFObjects_ensureObj(objId) {
      if (this.objs[objId]) {
       return this.objs[objId];
      }
      var obj = {
       capability: createPromiseCapability(),
       data: null,
       resolved: false
      };
      this.objs[objId] = obj;
      return obj;
     },
     get: function PDFObjects_get(objId, callback) {
      if (callback) {
       this.ensureObj(objId).capability.promise.then(callback);
       return null;
      }
      var obj = this.objs[objId];
      if (!obj || !obj.resolved) {
       error('Requesting object that isn\'t resolved yet ' + objId);
      }
      return obj.data;
     },
     resolve: function PDFObjects_resolve(objId, data) {
      var obj = this.ensureObj(objId);
      obj.resolved = true;
      obj.data = data;
      obj.capability.resolve(data);
     },
     isResolved: function PDFObjects_isResolved(objId) {
      var objs = this.objs;
      if (!objs[objId]) {
       return false;
      }
      return objs[objId].resolved;
     },
     hasData: function PDFObjects_hasData(objId) {
      return this.isResolved(objId);
     },
     getData: function PDFObjects_getData(objId) {
      var objs = this.objs;
      if (!objs[objId] || !objs[objId].resolved) {
       return null;
      }
      return objs[objId].data;
     },
     clear: function PDFObjects_clear() {
      this.objs = Object.create(null);
     }
    };
    return PDFObjects;
   }();
   var RenderTask = function RenderTaskClosure() {
    function RenderTask(internalRenderTask) {
     this._internalRenderTask = internalRenderTask;
     this.onContinue = null;
    }
    RenderTask.prototype = {
     get promise() {
      return this._internalRenderTask.capability.promise;
     },
     cancel: function RenderTask_cancel() {
      this._internalRenderTask.cancel();
     },
     then: function RenderTask_then(onFulfilled, onRejected) {
      return this.promise.then.apply(this.promise, arguments);
     }
    };
    return RenderTask;
   }();
   var InternalRenderTask = function InternalRenderTaskClosure() {
    function InternalRenderTask(callback, params, objs, commonObjs, operatorList, pageNumber) {
     this.callback = callback;
     this.params = params;
     this.objs = objs;
     this.commonObjs = commonObjs;
     this.operatorListIdx = null;
     this.operatorList = operatorList;
     this.pageNumber = pageNumber;
     this.running = false;
     this.graphicsReadyCallback = null;
     this.graphicsReady = false;
     this.useRequestAnimationFrame = false;
     this.cancelled = false;
     this.capability = createPromiseCapability();
     this.task = new RenderTask(this);
     this._continueBound = this._continue.bind(this);
     this._scheduleNextBound = this._scheduleNext.bind(this);
     this._nextBound = this._next.bind(this);
    }
    InternalRenderTask.prototype = {
     initializeGraphics: function InternalRenderTask_initializeGraphics(transparency) {
      if (this.cancelled) {
       return;
      }
      if (getDefaultSetting('pdfBug') && globalScope.StepperManager && globalScope.StepperManager.enabled) {
       this.stepper = globalScope.StepperManager.create(this.pageNumber - 1);
       this.stepper.init(this.operatorList);
       this.stepper.nextBreakPoint = this.stepper.getNextBreakPoint();
      }
      var params = this.params;
      this.gfx = new CanvasGraphics(params.canvasContext, this.commonObjs, this.objs, params.imageLayer);
      this.gfx.beginDrawing(params.transform, params.viewport, transparency);
      this.operatorListIdx = 0;
      this.graphicsReady = true;
      if (this.graphicsReadyCallback) {
       this.graphicsReadyCallback();
      }
     },
     cancel: function InternalRenderTask_cancel() {
      this.running = false;
      this.cancelled = true;
      this.callback('cancelled');
     },
     operatorListChanged: function InternalRenderTask_operatorListChanged() {
      if (!this.graphicsReady) {
       if (!this.graphicsReadyCallback) {
        this.graphicsReadyCallback = this._continueBound;
       }
       return;
      }
      if (this.stepper) {
       this.stepper.updateOperatorList(this.operatorList);
      }
      if (this.running) {
       return;
      }
      this._continue();
     },
     _continue: function InternalRenderTask__continue() {
      this.running = true;
      if (this.cancelled) {
       return;
      }
      if (this.task.onContinue) {
       this.task.onContinue.call(this.task, this._scheduleNextBound);
      } else {
       this._scheduleNext();
      }
     },
     _scheduleNext: function InternalRenderTask__scheduleNext() {
      if (this.useRequestAnimationFrame && typeof window !== 'undefined') {
       window.requestAnimationFrame(this._nextBound);
      } else {
       Promise.resolve(undefined).then(this._nextBound);
      }
     },
     _next: function InternalRenderTask__next() {
      if (this.cancelled) {
       return;
      }
      this.operatorListIdx = this.gfx.executeOperatorList(this.operatorList, this.operatorListIdx, this._continueBound, this.stepper);
      if (this.operatorListIdx === this.operatorList.argsArray.length) {
       this.running = false;
       if (this.operatorList.lastChunk) {
        this.gfx.endDrawing();
        this.callback();
       }
      }
     }
    };
    return InternalRenderTask;
   }();
   var _UnsupportedManager = function UnsupportedManagerClosure() {
    var listeners = [];
    return {
     listen: function (cb) {
      deprecated('Global UnsupportedManager.listen is used: ' + ' use PDFDocumentLoadingTask.onUnsupportedFeature instead');
      listeners.push(cb);
     },
     notify: function (featureId) {
      for (var i = 0, ii = listeners.length; i < ii; i++) {
       listeners[i](featureId);
      }
     }
    };
   }();
   if (typeof pdfjsVersion !== 'undefined') {
    exports.version = pdfjsVersion;
   }
   if (typeof pdfjsBuild !== 'undefined') {
    exports.build = pdfjsBuild;
   }
   exports.getDocument = getDocument;
   exports.PDFDataRangeTransport = PDFDataRangeTransport;
   exports.PDFWorker = PDFWorker;
   exports.PDFDocumentProxy = PDFDocumentProxy;
   exports.PDFPageProxy = PDFPageProxy;
   exports._UnsupportedManager = _UnsupportedManager;
  }));
  (function (root, factory) {
   factory(root.pdfjsDisplayGlobal = {}, root.pdfjsSharedUtil, root.pdfjsDisplayDOMUtils, root.pdfjsDisplayAPI, root.pdfjsDisplayAnnotationLayer, root.pdfjsDisplayTextLayer, root.pdfjsDisplayMetadata, root.pdfjsDisplaySVG);
  }(this, function (exports, sharedUtil, displayDOMUtils, displayAPI, displayAnnotationLayer, displayTextLayer, displayMetadata, displaySVG) {
   var globalScope = sharedUtil.globalScope;
   var deprecated = sharedUtil.deprecated;
   var warn = sharedUtil.warn;
   var LinkTarget = displayDOMUtils.LinkTarget;
   var isWorker = typeof window === 'undefined';
   if (!globalScope.PDFJS) {
    globalScope.PDFJS = {};
   }
   var PDFJS = globalScope.PDFJS;
   if (typeof pdfjsVersion !== 'undefined') {
    PDFJS.version = pdfjsVersion;
   }
   if (typeof pdfjsBuild !== 'undefined') {
    PDFJS.build = pdfjsBuild;
   }
   PDFJS.pdfBug = false;
   if (PDFJS.verbosity !== undefined) {
    sharedUtil.setVerbosityLevel(PDFJS.verbosity);
   }
   delete PDFJS.verbosity;
   Object.defineProperty(PDFJS, 'verbosity', {
    get: function () {
     return sharedUtil.getVerbosityLevel();
    },
    set: function (level) {
     sharedUtil.setVerbosityLevel(level);
    },
    enumerable: true,
    configurable: true
   });
   PDFJS.VERBOSITY_LEVELS = sharedUtil.VERBOSITY_LEVELS;
   PDFJS.OPS = sharedUtil.OPS;
   PDFJS.UNSUPPORTED_FEATURES = sharedUtil.UNSUPPORTED_FEATURES;
   PDFJS.isValidUrl = displayDOMUtils.isValidUrl;
   PDFJS.shadow = sharedUtil.shadow;
   PDFJS.createBlob = sharedUtil.createBlob;
   PDFJS.createObjectURL = function PDFJS_createObjectURL(data, contentType) {
    return sharedUtil.createObjectURL(data, contentType, PDFJS.disableCreateObjectURL);
   };
   Object.defineProperty(PDFJS, 'isLittleEndian', {
    configurable: true,
    get: function PDFJS_isLittleEndian() {
     var value = sharedUtil.isLittleEndian();
     return sharedUtil.shadow(PDFJS, 'isLittleEndian', value);
    }
   });
   PDFJS.removeNullCharacters = sharedUtil.removeNullCharacters;
   PDFJS.PasswordResponses = sharedUtil.PasswordResponses;
   PDFJS.PasswordException = sharedUtil.PasswordException;
   PDFJS.UnknownErrorException = sharedUtil.UnknownErrorException;
   PDFJS.InvalidPDFException = sharedUtil.InvalidPDFException;
   PDFJS.MissingPDFException = sharedUtil.MissingPDFException;
   PDFJS.UnexpectedResponseException = sharedUtil.UnexpectedResponseException;
   PDFJS.Util = sharedUtil.Util;
   PDFJS.PageViewport = sharedUtil.PageViewport;
   PDFJS.createPromiseCapability = sharedUtil.createPromiseCapability;
   PDFJS.maxImageSize = PDFJS.maxImageSize === undefined ? -1 : PDFJS.maxImageSize;
   PDFJS.cMapUrl = PDFJS.cMapUrl === undefined ? null : PDFJS.cMapUrl;
   PDFJS.cMapPacked = PDFJS.cMapPacked === undefined ? false : PDFJS.cMapPacked;
   PDFJS.disableFontFace = PDFJS.disableFontFace === undefined ? false : PDFJS.disableFontFace;
   PDFJS.imageResourcesPath = PDFJS.imageResourcesPath === undefined ? '' : PDFJS.imageResourcesPath;
   PDFJS.disableWorker = PDFJS.disableWorker === undefined ? false : PDFJS.disableWorker;
   PDFJS.workerSrc = PDFJS.workerSrc === undefined ? null : PDFJS.workerSrc;
   PDFJS.disableRange = PDFJS.disableRange === undefined ? false : PDFJS.disableRange;
   PDFJS.disableStream = PDFJS.disableStream === undefined ? false : PDFJS.disableStream;
   PDFJS.disableAutoFetch = PDFJS.disableAutoFetch === undefined ? false : PDFJS.disableAutoFetch;
   PDFJS.pdfBug = PDFJS.pdfBug === undefined ? false : PDFJS.pdfBug;
   PDFJS.postMessageTransfers = PDFJS.postMessageTransfers === undefined ? true : PDFJS.postMessageTransfers;
   PDFJS.disableCreateObjectURL = PDFJS.disableCreateObjectURL === undefined ? false : PDFJS.disableCreateObjectURL;
   PDFJS.disableWebGL = PDFJS.disableWebGL === undefined ? true : PDFJS.disableWebGL;
   PDFJS.externalLinkTarget = PDFJS.externalLinkTarget === undefined ? LinkTarget.NONE : PDFJS.externalLinkTarget;
   PDFJS.externalLinkRel = PDFJS.externalLinkRel === undefined ? 'noreferrer' : PDFJS.externalLinkRel;
   PDFJS.isEvalSupported = PDFJS.isEvalSupported === undefined ? true : PDFJS.isEvalSupported;
   var savedOpenExternalLinksInNewWindow = PDFJS.openExternalLinksInNewWindow;
   delete PDFJS.openExternalLinksInNewWindow;
   Object.defineProperty(PDFJS, 'openExternalLinksInNewWindow', {
    get: function () {
     return PDFJS.externalLinkTarget === LinkTarget.BLANK;
    },
    set: function (value) {
     if (value) {
      deprecated('PDFJS.openExternalLinksInNewWindow, please use ' + '"PDFJS.externalLinkTarget = PDFJS.LinkTarget.BLANK" instead.');
     }
     if (PDFJS.externalLinkTarget !== LinkTarget.NONE) {
      warn('PDFJS.externalLinkTarget is already initialized');
      return;
     }
     PDFJS.externalLinkTarget = value ? LinkTarget.BLANK : LinkTarget.NONE;
    },
    enumerable: true,
    configurable: true
   });
   if (savedOpenExternalLinksInNewWindow) {
    PDFJS.openExternalLinksInNewWindow = savedOpenExternalLinksInNewWindow;
   }
   PDFJS.getDocument = displayAPI.getDocument;
   PDFJS.PDFDataRangeTransport = displayAPI.PDFDataRangeTransport;
   PDFJS.PDFWorker = displayAPI.PDFWorker;
   Object.defineProperty(PDFJS, 'hasCanvasTypedArrays', {
    configurable: true,
    get: function PDFJS_hasCanvasTypedArrays() {
     var value = displayDOMUtils.hasCanvasTypedArrays();
     return sharedUtil.shadow(PDFJS, 'hasCanvasTypedArrays', value);
    }
   });
   PDFJS.CustomStyle = displayDOMUtils.CustomStyle;
   PDFJS.LinkTarget = LinkTarget;
   PDFJS.addLinkAttributes = displayDOMUtils.addLinkAttributes;
   PDFJS.getFilenameFromUrl = displayDOMUtils.getFilenameFromUrl;
   PDFJS.isExternalLinkTargetSet = displayDOMUtils.isExternalLinkTargetSet;
   PDFJS.AnnotationLayer = displayAnnotationLayer.AnnotationLayer;
   PDFJS.renderTextLayer = displayTextLayer.renderTextLayer;
   PDFJS.Metadata = displayMetadata.Metadata;
   PDFJS.SVGGraphics = displaySVG.SVGGraphics;
   PDFJS.UnsupportedManager = displayAPI._UnsupportedManager;
   exports.globalScope = globalScope;
   exports.isWorker = isWorker;
   exports.PDFJS = globalScope.PDFJS;
  }));
 }.call(pdfjsLibs));
 exports.PDFJS = pdfjsLibs.pdfjsDisplayGlobal.PDFJS;
 exports.build = pdfjsLibs.pdfjsDisplayAPI.build;
 exports.version = pdfjsLibs.pdfjsDisplayAPI.version;
 exports.getDocument = pdfjsLibs.pdfjsDisplayAPI.getDocument;
 exports.PDFDataRangeTransport = pdfjsLibs.pdfjsDisplayAPI.PDFDataRangeTransport;
 exports.PDFWorker = pdfjsLibs.pdfjsDisplayAPI.PDFWorker;
 exports.renderTextLayer = pdfjsLibs.pdfjsDisplayTextLayer.renderTextLayer;
 exports.AnnotationLayer = pdfjsLibs.pdfjsDisplayAnnotationLayer.AnnotationLayer;
 exports.CustomStyle = pdfjsLibs.pdfjsDisplayDOMUtils.CustomStyle;
 exports.PasswordResponses = pdfjsLibs.pdfjsSharedUtil.PasswordResponses;
 exports.InvalidPDFException = pdfjsLibs.pdfjsSharedUtil.InvalidPDFException;
 exports.MissingPDFException = pdfjsLibs.pdfjsSharedUtil.MissingPDFException;
 exports.SVGGraphics = pdfjsLibs.pdfjsDisplaySVG.SVGGraphics;
 exports.UnexpectedResponseException = pdfjsLibs.pdfjsSharedUtil.UnexpectedResponseException;
 exports.OPS = pdfjsLibs.pdfjsSharedUtil.OPS;
 exports.UNSUPPORTED_FEATURES = pdfjsLibs.pdfjsSharedUtil.UNSUPPORTED_FEATURES;
 exports.isValidUrl = pdfjsLibs.pdfjsDisplayDOMUtils.isValidUrl;
 exports.createValidAbsoluteUrl = pdfjsLibs.pdfjsSharedUtil.createValidAbsoluteUrl;
 exports.createObjectURL = pdfjsLibs.pdfjsSharedUtil.createObjectURL;
 exports.removeNullCharacters = pdfjsLibs.pdfjsSharedUtil.removeNullCharacters;
 exports.shadow = pdfjsLibs.pdfjsSharedUtil.shadow;
 exports.createBlob = pdfjsLibs.pdfjsSharedUtil.createBlob;
 exports.getFilenameFromUrl = pdfjsLibs.pdfjsDisplayDOMUtils.getFilenameFromUrl;
 exports.addLinkAttributes = pdfjsLibs.pdfjsDisplayDOMUtils.addLinkAttributes;
}));
$(function () {
  "use strict";
  
  //set up vars - alphabet is an array of alphabet letters to be used with latin-style ordered lists
  var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split(''),
      listLatin = $('ol[type="a"] li'),
      listRoman = $('ol[type="i"] li');
 
  //function to bind digits and roman numerals, turn them into strings and loop through available numbers to generate roman number
  
  function romanize(num) {
    var lookup = {
      m: 1000,
      cm: 900,
      d: 500,
      cd: 400,
      c: 100,
      xc: 90,
      l: 50,
      xl: 40,
      x: 10,
      ix: 9,
      v: 5,
      iv: 4,
      i: 1
    }, roman = '', i;
    for (i in lookup) {
      while (num >= lookup[i]) {
        roman += i;
        num -= lookup[i];
      }
    }
    return roman;
  }
 
  //get value from list element value attribute, attach correct letter to it and pass to data-value attribute to be processed by css
  
  listLatin.each(function () {
    var thisValue = $(this).attr('value'),
        thisAlphabet = alphabet[thisValue-1];
    $(this).attr('data-value', thisAlphabet);
  });
  
  //get value from list element value attribute, attach correct roman number to it and pass to data-value attribute to be processed by css
  
  listRoman.each(function () {
    var thisValue = $(this).attr('value'),
        thisRoman = romanize(thisValue);
    $(this).attr('data-value', thisRoman);
  });

});

$(function() {

  var body = $('body');
  //let browser cache the print version of screen.css to avoid screen flicker
  $('head').append('<link rel="stylesheet" type="text/css" href="css/screen.css?print" media="screen" />');
  $('[href="css/screen.css?print"]').remove();
  
  // Select a panel item
  $('#panels a').on('click', function() {
    $('#panels li').removeClass('is-selected');
    $(this).parent().addClass('is-selected');
  });

  // Select 'Specific Year' panel dropdown
  $('.year-specific-dropdown').on('click', function() {
    if ($(this).hasClass('is-selected')) {
      $(this).removeClass('is-selected');
      $('.year-options').removeClass('is-visible');
    } else {
      $('.year-options').removeClass('is-visible');
      $('.year-specific-options').addClass('is-visible');
      $('.year-range-dropdown-1, .year-range-dropdown-2').removeClass('is-selected');
      $(this).addClass('is-selected');
    }
    return false;
  });

  // Select 'Year Range #1' panel dropdown
  $('.year-range-dropdown-1').on('click', function() {
    if ($(this).hasClass('is-selected')) {
      $(this).removeClass('is-selected');
      $('.year-options').removeClass('is-visible');
    } else {
      $('.year-options').removeClass('is-visible');
      $('.year-range-1-options').addClass('is-visible');
      $('#panel-year .is-selected').removeClass('is-selected');
      $(this).addClass('is-selected');
    }
    return false;
  });

  // Select 'Year Range #2' panel dropdown
  $('.year-range-dropdown-2').on('click', function() {
    if ($(this).hasClass('is-selected')) {
      $(this).removeClass('is-selected');
      $('.year-options').removeClass('is-visible');
    } else {
      $('.year-options').removeClass('is-visible');
      $('.year-range-2-options').addClass('is-visible');
      $('#panel-year .is-selected').removeClass('is-selected');
      $(this).addClass('is-selected');
    }
    return false;
  });

  // Hide the year options dropdown when a year is selected
  $('.year-options a').on('click', function() {
    $('.year-options.is-visible').removeClass('is-visible');
    $('#panel-year a.is-selected').removeClass('is-selected');
  });

  // Move year option selection over to the panel selector
  $('.year-options a').on('click', function() {
    if( $(this).parent().parent().parent().parent().hasClass('year-specific-options') ) {
      $('.year-specific-dropdown').text($(this).text());
    } else if( $(this).parent().parent().parent().parent().hasClass('year-range-1-options') ) {
      $('.year-range-dropdown-1').text($(this).text());
    } else if( $(this).parent().parent().parent().parent().hasClass('year-range-2-options') ) {
      $('.year-range-dropdown-2').text($(this).text());
    };
  });

  //hide year options when clicking outside
  $(document).click(function(event) { 
    var dropdown = $('.year-options');
    if(!$(event.target).closest('.year-options').length) {
      if(dropdown.hasClass("is-visible")) {
          dropdown.removeClass("is-visible");
      }
    }        
  });

  // Open option if closed and tab focus
  $(document).keyup(function() {
    if ($('.search-options input').is(":focus")) {
      $('.search-box').addClass('options-visible');
      console.log('true');
    }
  });

  // Set print layout
  $(document).on('click', '.print-special', function() {
    body.addClass('special');
    $('head').append('<link rel="stylesheet" type="text/css" href="css/screen.css?print" media="screen" />');
    setTimeout(function(){
      $('[href="css/screen.css"]').remove();
      $('head').append('<link rel="stylesheet" type="text/css" href="css/print.css" media="print" />');
      setTimeout(function(){
        window.print();
        $('head').append('<link rel="stylesheet" type="text/css" href="css/screen.css" media="all" />');
        setTimeout(function(){
          body.removeClass('special');
          $('[href="css/print.css"]').remove();
          $('[href="css/screen.css?print"]').remove();
          return false;
        }, 300);
      }, 500);
    }, 500);
  });

  $(document).on('click', '.print-minimal', function() {
    $('head').append('<link rel="stylesheet" type="text/css" href="css/screen.css?print" media="screen" />');
    setTimeout(function(){
      $('[href="css/screen.css"]').remove();
      $('head').append('<link rel="stylesheet" type="text/css" href="css/print.css" media="print" />');
      setTimeout(function(){
        window.print();
        $('head').append('<link rel="stylesheet" type="text/css" href="css/screen.css" media="all" />');
        setTimeout(function(){
          $('[href="css/print.css"]').remove();
          $('[href="css/screen.css?print"]').remove();
          return false;
        }, 300);
      }, 500);
    }, 500);
  });

  $(document).on('click', '.print-webview', function() {
    console.log('blah');
    window.print();
  });

  // Annual reports dropdown
  $('.annual-reports.is-open').removeClass('is-open');
  $(document).on('click', '.annual-reports-button', function() {
    $('.annual-reports').toggleClass('is-open');
  });
});

var url = "documents/AU_Contribute.pdf";


  var pdfDoc = null,
      pageNum = 1,
      pageRendering = false,
      pageNumPending = null,
      scale = 0.8,
      canvas = document.getElementById('the-canvas'),
      ctx = canvas.getContext('2d');

  /**
   * Get page info from document, resize canvas accordingly, and render page.
   * @param num Page number.
   */
  function renderPage(num) {
    pageRendering = true;
    // Using promise to fetch the page
    pdfDoc.getPage(num).then(function(page) {
      var viewport = page.getViewport(scale);
      canvas.height = viewport.height;
      canvas.width = viewport.width;

      // Render PDF page into canvas context
      var renderContext = {
        canvasContext: ctx,
        viewport: viewport
      };
      var renderTask = page.render(renderContext);

      // Wait for rendering to finish
      renderTask.promise.then(function () {
        pageRendering = false;
        if (pageNumPending !== null) {
          // New page rendering is pending
          renderPage(pageNumPending);
          pageNumPending = null;
        }
      });
    });

    // Update page counters
    document.getElementById('page_num').textContent = pageNum;
  }

  /**
   * If another page rendering in progress, waits until the rendering is
   * finised. Otherwise, executes rendering immediately.
   */
  function queueRenderPage(num) {
    if (pageRendering) {
      pageNumPending = num;
    } else {
      renderPage(num);
    }
  }

  /**
   * Displays previous page.
   */
  function onPrevPage() {
    if (pageNum <= 1) {
      return;
    }
    pageNum--;
    queueRenderPage(pageNum);
  }
  document.getElementById('prev').addEventListener('click', onPrevPage);

  /**
   * Displays next page.
   */
  function onNextPage() {
    if (pageNum >= pdfDoc.numPages) {
      return;
    }
    pageNum++;
    queueRenderPage(pageNum);
  }
  document.getElementById('next').addEventListener('click', onNextPage);

  /**
   * Asynchronously downloads PDF.
   */
  PDFJS.getDocument(url).then(function (pdfDoc_) {
    pdfDoc = pdfDoc_;
    document.getElementById('page_count').textContent = pdfDoc.numPages;

    // Initial/first page rendering
    renderPage(pageNum);
  });
$(function() {
  // Make fill in left-space on ribbon if first is selected
  $('#ribbon a').on('click', function() {
    $('#ribbon').removeClass('first-selected');
  });
  $('.ribbon-type').on('click', function() {
    $('#ribbon').addClass('first-selected');
  });

  // Select a ribbon item
  $('#ribbon li a').on('click', function(e) {
    if ($(this).parent().hasClass('is-selected')) {
      $('#panels').removeClass().addClass('is-closed');
      $('#ribbon li').removeClass('is-selected');
      $('.year-options').removeClass('is-visible');
      e.stopPropagation();
    } else {
      $('#ribbon li').removeClass('is-selected');
      $(this).parent().addClass('is-selected');
    };
  });

  // Select 'Type' ribbon item
  $('.ribbon-type').on('click', function() {
    $('#panels').removeClass().addClass('is-type');
    $('.year-options').removeClass('is-visible');
    $('#panel-year .is-selected').removeClass('is-selected');
  });

  // Select 'Jurisdiction' ribbon item
  $('.ribbon-jurisdiction').on('click', function() {
    $('#panels').removeClass().addClass('is-jurisdiction');
    $('.year-options').removeClass('is-visible');
    $('#panel-year .is-selected').removeClass('is-selected');
  });

  // Select 'Year' ribbon item
  $('.ribbon-year').on('click', function() {
    $('#panels').removeClass().addClass('is-year');
  });

  // Select 'Letter' ribbon item
  $('.ribbon-letter').on('click', function() {
    $('#panels').removeClass().addClass('is-letter');
    $('.year-options').removeClass('is-visible');
    $('#panel-year .is-selected').removeClass('is-selected');
  });
});

$(function() {

  // Show search on mobile
  $('.go-search, .go-primary').on('click', function() {
    $('body').toggleClass('search-is-visible');
  });

  // Hovering on the search box
  $(document).on('mouseover', '.search-box', function() {
    $('.search-box').addClass('hover');
  });
  $(document).on('mouseout', '.search-box', function() {
    $('.search-box').removeClass('hover');
  });
  $(document).on('focus', '#search-box', function() {
    $('.search-box').addClass('focus');
  });
  $(document).on('focusout', '#search-box', function() {
    $('.search-box').removeClass('focus');
  });

  // Clear search box
  if($('#search-box').length > 0) {
    if( $('#search-box').val().length === 0 ) {}else{
      $('.search-box-clear').removeClass('hide');
    };
  };
  $('#search-box').keyup(function() {
    if( $(this).val().length === 0 ) {
      $('.search-box-clear').addClass('hide');
    } else {
      $('.search-box-clear').removeClass('hide');
    };
  });
  $(document).on('click', '.search-box-clear', function() {
    $('#search-box').val('');
    $(this).addClass('hide');
  });

  // Close search options when you click on the page
  $(document).on('click', function() {
    $('.search-box').removeClass('options-visible');
  });

  // Show search options (without closing itself)
  $('.search-dropdown').on('click', function(e) {
    $('.search-box').toggleClass('options-visible');
    e.stopPropagation();
  });

  // Keep search options open when you click on it
  $('.search-options').on('click', function(e) {
    e.stopPropagation();
  });

  // Document page index expand/collapse
  $(document).on('click', '.index-expand', function() {
    $('#page-index').toggleClass('is-expanded');

    if ($(this).parent().parent().hasClass('is-expanded')) {
      $(this).text('Hide');
    } else {
      $(this).text('Show');
    };
  });
});

//globals
var switchAll = $('.card-options--toggle'),
  $sortItem,
  sortItemElement = $('.sort-item'),
  type = window.location.hash.substr(1),
  allSection = $('.all-section'),
  tagged = $('.all-section.tag'),
  taggedInput = $('.all-section.tag .card-title input'),
  sortTarget = $('.sort-url'),
  sortSelect = {
    activate: function (getEl) {
      'use strict';
      $('#page-sort .selected').removeClass('selected').removeClass('disabled');
      getEl.addClass('selected');
      switchAll.addClass('checked');
      $sortItem = getEl.attr('data-sort');
      allSection.addClass('is-hidden').find('.checkbox').removeClass('checked');
      allSection.find('.checkbox input').prop('checked', false);
      $('#' + $sortItem).removeClass('is-hidden');
      $('#' + $sortItem).find('.checkbox').addClass('checked');
      $('#' + $sortItem).find('.checkbox input').prop('checked', true);
      $('.card-title input').removeClass('range-selected');
      taggedInput.addClass('range-selected');
    },
    targetTab: function (getEl) {
      'use strict';
      if (sortTarget.length) {
        sortItemElement.removeClass('is-loading');
        getEl.addClass('is-loading');
      }
    }
  };

$(function () {
  
  if(sortItemElement.length === 0 && window.location.hash) {
    var scrollTo = window.location.hash;
    $('html,body').animate({scrollTop:$('' + scrollTo + '').offset().top}, 600);
  }
  
  //cleanup on page load
  sortItemElement.removeClass('is-loading');
  
  // Sort item filtering
  sortItemElement.each(function () {
    
    if ($(this).attr('data-sort') === type) {
      sortSelect.activate($(this));
    }

    $(this).on('click', function (e) {
      e.preventDefault();
      sortSelect.activate($(this));
      sortSelect.targetTab($(this));
      if ($('#' + $sortItem).hasClass('tag')) {
        var range = $('[data-sort="' + $sortItem + '"] .range-options').val(),
          tag = $('#' + $sortItem + '.tag');
        var allSelect = $('.range-options').val();
        if ( allSelect !== 'All') {
          tag.find('.checkbox').toggleClass('checked');
          tag.find('.checkbox input').prop('checked', false);
          tag.find('.' + range + ' .checkbox').addClass('checked');
          tag.find('.' + range + ' .checkbox input').prop('checked', true);
          tag.find('.card-title input').addClass('range-selected').prop('checked', true);
          tag.find('.card-title label').addClass('checked');
        }      
      }
      var pathname = window.location.pathname;
      if ($sortItem === undefined) {
        var historyHash = pathname;
      } else {
        var historyHash = pathname + '#' + $sortItem;
      }
      history.pushState(null, null, historyHash);
      $(window).scrollTop(0);
    });

  });
  
  $('.range-options').change(function (e) {
    e.stopPropagation();
    var range = $(this).val(),
      parentId = $(this).closest('.sort-item').attr('data-sort'),
      parent = $('#' + parentId);
    parent.addClass('tag');
    parent.find('li').hide();
    parent.find('.checkbox').removeClass('checked');
    parent.find('.checkbox input').prop('checked', false);
    parent.find('.card-title input').addClass('range-selected').prop('checked', true);
    parent.find('.card-title label').addClass('checked');
    parent.find('.' + range).show();
    parent.find('.' + range + ' .checkbox').addClass('checked');
    parent.find('.' + range + ' .checkbox input').prop('checked', true);
    if (range == 'All') {
      parent.find('li').show();
      parent.find('.checkbox').addClass('checked');
      parent.find('.checkbox input').prop('checked', true);
      parent.find('.card-title input').removeClass('range-selected');
    }
  });

  // Sort item "all"
  $('.sort-all').on('click', function () {
    $('.all-section').removeClass('is-hidden');
    $('.all-section.tag').removeClass('tag').find('li').show();
    $('.range-options').val('All');
    if (switchAll.hasClass('checked')) {
      $('.all-section').find(".checkbox").addClass('checked');
      $('.all-section').find(".checkbox input").prop('checked', true);
    }
  });

  //reset select range value on reload
  $('.range-options').val('All');

  // Show 'more' sidebar items
  $('.side-about-more-link').on('click', function () {
    if ($('.side-about').hasClass('has-more')) {
      $('.side-about').removeClass('has-more');
      $(this).text('More...');
    } else {
      $('.side-about').addClass('has-more');
      $(this).text('Less');
    }
  });
  
  //Hide and Show more sidebar list elements
  var sideList = $('[data-expand-after]');
  
  sideList.each(function () {
    var sideListElThis = $(this).find('li'),
      sideListShowLength = parseInt($(this).attr('data-expand-after'), 10) + 1,
      sideListElOver = $(this).find('li:nth-child(n+' + sideListShowLength + ')');
    sideListElOver.addClass('hide');
    if (sideListElThis.length > sideListShowLength - 1) {
      $(this).after('<span data-show="Less" class="hide">Less</span>');
      $(this).after('<span data-show="More">More</span>');
    }
  
    $(this).next($('[data-show="More"]')).on('click', function () {
      $(this).parent().find('ul li.hide').removeClass('hide');
      $(this).addClass('hide');
      $(this).next($('[data-show="Less"]')).removeClass('hide');
    });

    $(this).next().next($('[data-show="Less"]')).on('click', function () {
      $(this).parent().find('ul li:nth-child(n+' + sideListShowLength + ')').addClass('hide');
      $(this).addClass('hide');
      $(this).parent().find($('[data-show="More"]')).removeClass('hide');
    });
  });


  // Card checkboxes using JS so Firefox etc. can see the custom styles
  $('input[type="checkbox"]').parent().addClass('checkbox checked');
  $('input[type="checkbox"]').change(function () {
    if (this.checked) {
      $(this).parent().addClass('checked');
    } else {
      $(this).parent().removeClass('checked');
    }
  });

  $(document).on('click', '.card-title input', function (e) {
    var traverse = $(this).parent().parent().parent().parent(),
      parentId = $(this).closest('.all-section').attr('id'),
      parent = $('#' + parentId),
      range = $('[data-sort="' + parentId + '"] .range-options').val();
    switchAll.removeClass('checked');
    if ($(this).parent().hasClass('checked')) {
      traverse.find('.card-checkboxes .checkbox').removeClass('checked');
      traverse.find('.card-checkboxes .checkbox input').prop('checked', false);
      switchAll.removeClass('checked');
    } else if ($(this).hasClass('range-selected')) {
      parent.find('.checkbox').removeClass('checked');
      parent.find('.checkbox input').prop('checked', false);
      parent.find(' .checkbox').addClass('checked');
      parent.find('.' + range + ' .checkbox input').prop('checked', true);
      parent.find('.card-title input').prop('checked', true);
      parent.find('.card-title label').addClass('checked');
      switchAll.addClass('checked');
    } else {
      traverse.find('.card-checkboxes .checkbox').addClass('checked');
      traverse.find('.card-checkboxes .checkbox input').prop('checked', true);
      switchAll.addClass('checked');
    }
  });

  $('.card-options--show').on('click', function () {
    if ($(this).hasClass('checked')) {
      $(this).removeClass('checked');
      $('.card-checkboxes').removeClass('is-collapsed');
    } else {
      $(this).addClass('checked');
      $('.card-checkboxes').addClass('is-collapsed');
    }
    return false;
  });

  $('.card-options--detail').on('click', function () {
    if ($(this).hasClass('checked')) {
      $(this).removeClass('checked').text('List View');
    } else {
      $(this).addClass('checked').text('Detail View');
    }
  });

  // Card Options: Solo (for non-visual changes)
  $('.card-options--solo').on('click', function () {
    if ($(this).hasClass('checked')) {
      $(this).removeClass('checked');
    } else {
      $(this).addClass('checked');
    }
    return false;
  });

  // Narrow Results option for Adv. Search
  $('.search #show-databases').on('click', function (e) {
    if ($(this).hasClass('checked')) {
      $(this).removeClass('checked');
      $('.card-checkboxes').addClass('is-collapsed');
    } else {
      $(this).addClass('checked');
      $('.card-checkboxes.is-collapsed').removeClass('is-collapsed');
    }
    e.stopPropagation();
    return false;
  });

  // Card Options: Toggle (for 'select all' / 'select none')
  switchAll.on('click', function () {
    tag = $('#' + $sortItem + '.tag');
    
    if ($(this).hasClass('checked')) {
      $(this).removeClass('checked');
      $('.checkbox input').prop('checked', false).parent().removeClass('checked');
    } else if ($('.all-section:not(.is-hidden)').hasClass('tag')) {
      var sortItem = $('.all-section:not(.is-hidden)').attr('id'),
        range = $('[data-sort="' + sortItem + '"] .range-options').val();
      $(this).addClass('checked');
      $('.all-section:not(.is-hidden)' + ' .checkbox input').prop('checked', true).parent().addClass('checked');
      tag.find('.card-title input').addClass('range-selected').prop('checked', true);
      tag.find('.card-title label').addClass('checked');
    } else {
      $(this).addClass('checked');
      $('.all-section:not(.is-hidden) .checkbox input').prop('checked', true).parent().addClass('checked');
      tag.find('.card-title input').addClass('range-selected').prop('checked', true);
      tag.find('.card-title label').addClass('checked');
    }
    return false;
  });


  // Sort alphabetically if Letter search
  $('#panel-letter a').on('click', function () {
    if (!$('#page-sort').hasClass('has-special')) {
      $('#page-sort').addClass('has-special').find('.selected').removeClass('selected');
      $('<li class="sort-item sort-special selected"><a href="#">Alphabetically</a></li>').insertBefore('#page-sort .sort-recent');
    }

    if ($(this).parent().hasClass('panel-letter-any')) {
      $('.sort-special').remove();
      $('#page-sort').removeClass('has-special').find('.sort-recent').addClass('selected');
    }
  });

  //show/hide switchers
  $('[data-target]').each(function () {
    $(this).hide();
  });

  $('[data-switch]').on('click', function () {
    var switchTarget = $(this).attr('data-switch');

    $('[data-target="' + switchTarget + '"]').slideDown('fast').addClass('opened');
    $(this).addClass('checked');
    $(this).siblings().removeClass('checked');
  });

  $('[data-close]').on('click', function () {
    var closeTarget = $(this).attr('data-close');

    $(this).addClass('checked');
    $(this).siblings().removeClass('checked');
    if ($('[data-target="' + closeTarget + '"]').hasClass('opened')) {
      $('[data-target="' + closeTarget + '"]').slideUp('fast').removeClass('opened');
    }

  });

  // radio elements
  var radioLabel = $('.radio-options'),
    radioFirst = $('.radio-options:first-child');
  radioLabel.parent().find('input[type="text"]').val('');
  radioFirst.find('input').prop('checked', true);

  radioLabel.on('click', function () {
    var nameTarget = $(this).attr('data-name'),
      siblings = $('[data-name="' + nameTarget + '"]'),
      parent = $(this).parent(),
      textField = $(this).find('input[type="text"]'),
      placeholder = $(this).find('.text-placeholder');

    siblings.removeClass('checked');
    $(this).addClass('checked');
    parent.find('input').prop('checked', false);
    $(this).find('input').prop('checked', true);
    parent.find('input[type="text"]').val('');
    textField.focus();
    parent.find('.text-placeholder').css('display', 'inline');
    placeholder.css('display', 'none');

  });

});

$(function () {
  
  if (location.hash) {
    setTimeout(function() {
      window.scrollTo(0, 0);
    }, 0);
  }
  
   setTimeout(function() {
      //$('body').removeClass('is-hidden');
    }, 30);
  
  $('body').removeClass('no-js');

  $('.contribute header').on('click', function () {
    $(this).toggleClass('image-on');
  });

});
