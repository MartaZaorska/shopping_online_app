(this.webpackJsonpshopping_online_app=this.webpackJsonpshopping_online_app||[]).push([[5],{47:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var o=n(25);function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],o=!0,r=!1,c=void 0;try{for(var a,i=e[Symbol.iterator]();!(o=(a=i.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(s){r=!0,c=s}finally{try{o||null==i.return||i.return()}finally{if(r)throw c}}return n}}(e,t)||Object(o.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},51:function(e,t,n){"use strict";var o=n(1),r=n(6),c=n(52),a=n.n(c),i=n(2),s=function(e){var t=e.product,n=t.id,o=t.name,c=t.image_link,s=t.price,l=t.brand;return Object(i.jsxs)(r.b,{className:"product-item",to:"/product/".concat(n),children:[Object(i.jsx)("div",{className:"product-item__image",children:Object(i.jsx)(a.a,{children:Object(i.jsx)("img",{src:c,alt:o,width:"238",height:"277"})})}),Object(i.jsx)("p",{className:"product-item__brand",children:l}),Object(i.jsx)("h4",{className:"product-item__name",dangerouslySetInnerHTML:{__html:"".concat(o)}}),Object(i.jsx)("div",{className:"product-item__price",children:Object(i.jsxs)("span",{children:["$",s]})})]})};t.a=Object(o.memo)(s)},52:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.forceVisible=t.forceCheck=t.lazyload=void 0;var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=n(1),c=d(r),a=d(n(11)),i=n(53),s=d(n(54)),l=d(n(55)),u=d(n(56));function d(e){return e&&e.__esModule?e:{default:e}}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function m(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var b=0,h=0,v=0,j=0,y="data-lazyload-listened",O=[],_=[],x=!1;try{var g=Object.defineProperty({},"passive",{get:function(){x=!0}});window.addEventListener("test",null,g)}catch(A){}var w=!!x&&{capture:!1,passive:!0},N=function(e){var t=e.ref;if(t instanceof HTMLElement){var n=(0,s.default)(t),o=e.props.overflow&&n!==t.ownerDocument&&n!==document&&n!==document.documentElement?function(e,t){var n=e.ref,o=void 0,r=void 0,c=void 0,a=void 0;try{var i=t.getBoundingClientRect();o=i.top,r=i.left,c=i.height,a=i.width}catch(A){o=b,r=h,c=j,a=v}var s=window.innerHeight||document.documentElement.clientHeight,l=window.innerWidth||document.documentElement.clientWidth,u=Math.max(o,0),d=Math.max(r,0),f=Math.min(s,o+c)-u,p=Math.min(l,r+a)-d,m=void 0,y=void 0,O=void 0,_=void 0;try{var x=n.getBoundingClientRect();m=x.top,y=x.left,O=x.height,_=x.width}catch(A){m=b,y=h,O=j,_=v}var g=m-u,w=y-d,N=Array.isArray(e.props.offset)?e.props.offset:[e.props.offset,e.props.offset];return g-N[0]<=f&&g+O+N[1]>=0&&w-N[0]<=p&&w+_+N[1]>=0}(e,n):function(e){var t=e.ref;if(!(t.offsetWidth||t.offsetHeight||t.getClientRects().length))return!1;var n=void 0,o=void 0;try{var r=t.getBoundingClientRect();n=r.top,o=r.height}catch(A){n=b,o=j}var c=window.innerHeight||document.documentElement.clientHeight,a=Array.isArray(e.props.offset)?e.props.offset:[e.props.offset,e.props.offset];return n-a[0]<=c&&n+o+a[1]>=0}(e);o?e.visible||(e.props.once&&_.push(e),e.visible=!0,e.forceUpdate()):e.props.once&&e.visible||(e.visible=!1,e.props.unmountIfInvisible&&e.forceUpdate())}},E=function(){_.forEach((function(e){var t=O.indexOf(e);-1!==t&&O.splice(t,1)})),_=[]},C=function(){for(var e=0;e<O.length;++e){var t=O[e];N(t)}E()},k=void 0,T=null,M=function(e){function t(e){f(this,t);var n=p(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.visible=!1,n.setRef=n.setRef.bind(n),n}return m(t,e),o(t,[{key:"componentDidMount",value:function(){var e=window,t=this.props.scrollContainer;t&&"string"===typeof t&&(e=e.document.querySelector(t));var n=void 0!==this.props.debounce&&"throttle"===k||"debounce"===k&&void 0===this.props.debounce;if(n&&((0,i.off)(e,"scroll",T,w),(0,i.off)(window,"resize",T,w),T=null),T||(void 0!==this.props.debounce?(T=(0,l.default)(C,"number"===typeof this.props.debounce?this.props.debounce:300),k="debounce"):void 0!==this.props.throttle?(T=(0,u.default)(C,"number"===typeof this.props.throttle?this.props.throttle:300),k="throttle"):T=C),this.props.overflow){var o=(0,s.default)(this.ref);if(o&&"function"===typeof o.getAttribute){var r=+o.getAttribute(y)+1;1===r&&o.addEventListener("scroll",T,w),o.setAttribute(y,r)}}else if(0===O.length||n){var c=this.props,a=c.scroll,d=c.resize;a&&(0,i.on)(e,"scroll",T,w),d&&(0,i.on)(window,"resize",T,w)}O.push(this),N(this)}},{key:"shouldComponentUpdate",value:function(){return this.visible}},{key:"componentWillUnmount",value:function(){if(this.props.overflow){var e=(0,s.default)(this.ref);if(e&&"function"===typeof e.getAttribute){var t=+e.getAttribute(y)-1;0===t?(e.removeEventListener("scroll",T,w),e.removeAttribute(y)):e.setAttribute(y,t)}}var n=O.indexOf(this);-1!==n&&O.splice(n,1),0===O.length&&"undefined"!==typeof window&&((0,i.off)(window,"resize",T,w),(0,i.off)(window,"scroll",T,w))}},{key:"setRef",value:function(e){e&&(this.ref=e)}},{key:"render",value:function(){var e=this.props,t=e.height,n=e.children,o=e.placeholder,r=e.className,a=e.classNamePrefix,i=e.style;return c.default.createElement("div",{className:a+"-wrapper "+r,ref:this.setRef,style:i},this.visible?n:o||c.default.createElement("div",{style:{height:t},className:a+"-placeholder"}))}}]),t}(r.Component);M.propTypes={className:a.default.string,classNamePrefix:a.default.string,once:a.default.bool,height:a.default.oneOfType([a.default.number,a.default.string]),offset:a.default.oneOfType([a.default.number,a.default.arrayOf(a.default.number)]),overflow:a.default.bool,resize:a.default.bool,scroll:a.default.bool,children:a.default.node,throttle:a.default.oneOfType([a.default.number,a.default.bool]),debounce:a.default.oneOfType([a.default.number,a.default.bool]),placeholder:a.default.node,scrollContainer:a.default.oneOfType([a.default.string,a.default.object]),unmountIfInvisible:a.default.bool,style:a.default.object},M.defaultProps={className:"",classNamePrefix:"lazyload",once:!1,offset:0,overflow:!1,resize:!1,scroll:!0,unmountIfInvisible:!1};var P=function(e){return e.displayName||e.name||"Component"};t.lazyload=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(t){return function(n){function r(){f(this,r);var e=p(this,(r.__proto__||Object.getPrototypeOf(r)).call(this));return e.displayName="LazyLoad"+P(t),e}return m(r,n),o(r,[{key:"render",value:function(){return c.default.createElement(M,e,c.default.createElement(t,this.props))}}]),r}(r.Component)}},t.default=M,t.forceCheck=C,t.forceVisible=function(){for(var e=0;e<O.length;++e){var t=O[e];t.visible=!0,t.forceUpdate()}E()}},53:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.on=function(e,t,n,o){o=o||!1,e.addEventListener?e.addEventListener(t,n,o):e.attachEvent&&e.attachEvent("on"+t,(function(t){n.call(e,t||window.event)}))},t.off=function(e,t,n,o){o=o||!1,e.removeEventListener?e.removeEventListener(t,n,o):e.detachEvent&&e.detachEvent("on"+t,n)}},54:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(!(e instanceof HTMLElement))return document.documentElement;for(var t="absolute"===e.style.position,n=/(scroll|auto)/,o=e;o;){if(!o.parentNode)return e.ownerDocument||document.documentElement;var r=window.getComputedStyle(o),c=r.position,a=r.overflow,i=r["overflow-x"],s=r["overflow-y"];if("static"===c&&t)o=o.parentNode;else{if(n.test(a)&&n.test(i)&&n.test(s))return o;o=o.parentNode}}return e.ownerDocument||e.documentElement||document.documentElement}},55:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){var o=void 0,r=void 0,c=void 0,a=void 0,i=void 0,s=function s(){var l=+new Date-a;l<t&&l>=0?o=setTimeout(s,t-l):(o=null,n||(i=e.apply(c,r),o||(c=null,r=null)))};return function(){c=this,r=arguments,a=+new Date;var l=n&&!o;return o||(o=setTimeout(s,t)),l&&(i=e.apply(c,r),c=null,r=null),i}}},56:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){var o,r;return t||(t=250),function(){var c=n||this,a=+new Date,i=arguments;o&&a<o+t?(clearTimeout(r),r=setTimeout((function(){o=a,e.apply(c,i)}),t)):(o=a,e.apply(c,i))}}},60:function(e,t,n){"use strict";n.r(t);var o=n(1),r=n(15),c=n(12),a=n(16),i=n(47),s=n(21),l=n(18),u=n(2),d=function(e){var t=e.total,n=e.clearCart,r=Object(o.useState)(!1),c=Object(i.a)(r,2),a=c[0],d=c[1],f=Object(o.useState)(""),p=Object(i.a)(f,2),m=p[0],b=p[1],h=Object(o.useState)(""),v=Object(i.a)(h,2),j=v[0],y=v[1],O=Object(o.useMemo)((function(){return a?+(t*(1-l.c/100)).toFixed(2):t}),[a,t]),_=Object(o.useMemo)((function(){return O>=100?0:9.99}),[O]);return Object(u.jsxs)("div",{className:"summary",children:[Object(u.jsx)("button",{onClick:function(){return n()},"aria-label":"Clear cart",className:"summary__button",children:"Clear your shopping bag"}),Object(u.jsxs)("form",{className:"summary__form",onSubmit:function(e){e.preventDefault(),m===l.d?(d(!0),y("")):(b(""),d(!1),y("Wrong discount code"))},children:[Object(u.jsx)("input",{type:"text",disabled:a,placeholder:"Discount Code",value:m,onChange:function(e){return b(e.currentTarget.value)}}),Object(u.jsx)("button",{type:"submit","aria-label":"Add discount code",disabled:a,children:Object(u.jsx)(s.b,{className:"icon"})})]}),j&&Object(u.jsx)("p",{className:"summary__message",children:j}),Object(u.jsxs)("p",{className:"summary__text",children:[Object(u.jsx)("span",{children:"Subtotal"}),Object(u.jsxs)("span",{className:"bold",children:["$",O]})]}),Object(u.jsxs)("p",{className:"summary__text",children:[Object(u.jsx)("span",{children:"Delivery"}),Object(u.jsxs)("span",{className:"bold",children:["$",_]})]}),Object(u.jsxs)("p",{className:"summary__text total",children:[Object(u.jsx)("span",{children:"Total"}),Object(u.jsxs)("span",{className:"bold",children:["$",(O+_).toFixed(2)]})]}),Object(u.jsx)("button",{className:"checkout__button","aria-label":"Go to checkout",children:"Proceed to checkout"})]})},f=Object(o.memo)(d),p=n(6),m=n(51),b=function(e){var t=e.products,n=void 0===t?[]:t;return Object(u.jsxs)("div",{className:"empty-cart content",children:[Object(u.jsx)("h4",{className:"empty-cart__subtitle",children:"Your bag is empty"}),n.length>0?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{children:"Recommended products"}),Object(u.jsx)("div",{className:"empty-cart__content",children:n.map((function(e){return Object(u.jsx)(m.a,{product:e},e.id)}))})]}):Object(u.jsx)(p.b,{className:"empty-cart__link",to:"/shop",children:"Shop now"})]})},h=Object(o.memo)(b),v=n(48),j=function(e){var t=e.data,n=e.addHandler,o=e.removeHandler,r=t.product,c=r.id,a=r.image_link,i=r.price,s=r.brand,l=r.category;return Object(u.jsxs)("div",{className:"cart-item",children:[Object(u.jsxs)(p.b,{className:"cart-item__content",to:"/product/".concat(c),children:[Object(u.jsx)("img",{width:"74",height:"85",className:"cart-item__image",src:a,alt:l}),Object(u.jsxs)("div",{className:"cart-item__information",children:[Object(u.jsx)("p",{className:"cart-item__brand",children:s}),Object(u.jsx)("h3",{className:"cart-item__name",children:l.replace("_"," ")}),t.color&&Object(u.jsxs)("p",{className:"cart-item__color",children:["Color: ",t.color.colour_name||"<span style={{background: ".concat(t.color.hex_value,"}}></span>")]}),Object(u.jsxs)("h4",{className:"cart-item__price",children:["$",i]})]})]}),Object(u.jsxs)("div",{className:"cart-item__controls",children:[Object(u.jsx)("button",{onClick:function(){return o(t.product.id,t.color)},"aria-label":"Remove from cart",children:Object(u.jsx)(v.g,{className:"icon"})}),Object(u.jsx)("span",{children:"".concat(t.quantity).padStart(2,"0")}),Object(u.jsx)("button",{onClick:function(){return n(t.product,t.color)},"aria-label":"Add to cart",children:Object(u.jsx)(v.i,{className:"icon"})})]})]})},y=Object(o.memo)(j),O=function(e){var t=e.total,n=Object(r.c)(a.b),i=n.cart,s=n.products,l=Object(r.b)(),d=Object(c.b)(a.a,l),p=d.addToCart,m=d.removeFromCart,b=d.clearCart,v=Object(o.useCallback)((function(e,t){p(e,t)}),[p]),j=Object(o.useCallback)((function(e,t){m(e,t)}),[m]);return 0===i.length?Object(u.jsx)(h,{products:(null===s||void 0===s?void 0:s.slice(0,3))||[]}):Object(u.jsxs)("section",{className:"cart content",children:[Object(u.jsx)("div",{className:"cart__products",children:i.map((function(e){var t;return Object(u.jsx)(y,{data:e,addHandler:v,removeHandler:j},"".concat(e.product.id,"-").concat(null===(t=e.color)||void 0===t?void 0:t.hex_value))}))}),Object(u.jsx)(f,{clearCart:b,total:t})]})};t.default=Object(o.memo)(O)}}]);
//# sourceMappingURL=5.f23dcea5.chunk.js.map