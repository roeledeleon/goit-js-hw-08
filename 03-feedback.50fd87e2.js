var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var o={id:e,exports:{}};return t[e]=o,n.call(o.exports,o,o.exports),o.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},e.parcelRequired7c6=n),(0,n.register)("9OeKo",function(t,r){var n="Expected a function",o=0/0,i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,u=/^0o[0-7]+$/i,f=parseInt,s="object"==typeof e&&e&&e.Object===Object&&e,c="object"==typeof self&&self&&self.Object===Object&&self,m=s||c||Function("return this")(),d=Object.prototype.toString,v=Math.max,g=Math.min,p=function(){return m.Date.now()};function y(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if("symbol"==typeof(t=e)||t&&"object"==typeof t&&"[object Symbol]"==d.call(t))return o;if(y(e)){var t,r="function"==typeof e.valueOf?e.valueOf():e;e=y(r)?r+"":r}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=l.test(e);return n||u.test(e)?f(e.slice(2),n?2:8):a.test(e)?o:+e}t.exports=function(e,t,r){var o=!0,i=!0;if("function"!=typeof e)throw TypeError(n);return y(r)&&(o="leading"in r?!!r.leading:o,i="trailing"in r?!!r.trailing:i),function(e,t,r){var o,i,a,l,u,f,s=0,c=!1,m=!1,d=!0;if("function"!=typeof e)throw TypeError(n);function O(t){var r=o,n=i;return o=i=void 0,s=t,l=e.apply(n,r)}function h(e){var r=e-f,n=e-s;return void 0===f||r>=t||r<0||m&&n>=a}function x(){var e,r,n,o=p();if(h(o))return T(o);u=setTimeout(x,(e=o-f,r=o-s,n=t-e,m?g(n,a-r):n))}function T(e){return(u=void 0,d&&o)?O(e):(o=i=void 0,l)}function S(){var e,r=p(),n=h(r);if(o=arguments,i=this,f=r,n){if(void 0===u)return s=e=f,u=setTimeout(x,t),c?O(e):l;if(m)return u=setTimeout(x,t),O(f)}return void 0===u&&(u=setTimeout(x,t)),l}return t=b(t)||0,y(r)&&(c=!!r.leading,a=(m="maxWait"in r)?v(b(r.maxWait)||0,t):a,d="trailing"in r?!!r.trailing:d),S.cancel=function(){void 0!==u&&clearTimeout(u),s=0,o=f=i=u=void 0},S.flush=function(){return void 0===u?l:T(p())},S}(e,t,{leading:o,maxWait:t,trailing:i})}});var o=n("9OeKo");const i=document.querySelector(".feedback-form"),a="feedback-form-state",l={form:document.querySelector(".feedback-form"),email:document.querySelector('[name="email"]'),message:document.querySelector('[name="message"]')},u=function(e){let t;try{t=JSON.parse(e)}catch(e){console.log(e.name),console.log(e.message)}return t}(localStorage.getItem(a))||{};u&&(l.email.value=u.email||"",l.message.value=u.message||""),l.form.addEventListener("input",(o&&o.__esModule?o.default:o)(()=>{i.addEventListener("input",e=>{let{email:t,message:r}=e.currentTarget.elements;localStorage.setItem(a,JSON.stringify({email:t.value,message:r.value}))})},500)),i.addEventListener("submit",e=>{let{email:t,message:r}=e.currentTarget.elements;if(e.preventDefault(),""==t.value||""==r.value){alert("Enter both parameters!"),i.reset();return}console.log({email:t.value,message:r.value}),localStorage.removeItem(a),i.reset()});
//# sourceMappingURL=03-feedback.50fd87e2.js.map