(window.webpackJsonp=window.webpackJsonp||[]).push([[5,2,3,4],{244:function(t,e,r){"use strict";r.r(e);r(37),r(34),r(35),r(62),r(27),r(63);var n=r(85);var c=r(119),o=r(64);function l(t){return function(t){if(Array.isArray(t))return Object(n.a)(t)}(t)||Object(c.a)(t)||Object(o.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var f=r(28),d=(r(39),r(14),r(36),r(47));function O(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?O(Object(source),!0).forEach((function(e){Object(f.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):O(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var j={name:"Pagination",methods:v({},Object(d.b)(["fetchData"])),computed:v(v({},Object(d.c)({totalPage:"getTotalPage",currentPage:"getCurrentPage"})),{},{pages:function(){return l(Array(this.totalPage).keys()).map((function(i){return i+1}))}})},m=r(38),component=Object(m.a)(j,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"w-full text-center mt-2 mx-auto flex justify-center"},[r("ul",{staticClass:"flex"},[t.currentPage>1?r("li",{staticClass:"\n        border border-black\n        rounded\n        cursor-pointer\n        p-1\n        mr-1\n        bg-blue-400\n        hover:bg-blue-700\n      "},[r("a",{attrs:{href:"#"},on:{click:function(e){return t.fetchData(t.currentPage-1)}}},[t._v("Prev")])]):t._e(),t._v(" "),t._l(t.pages,(function(e,n){return r("li",{key:n,staticClass:"\n        border border-black\n        rounded\n        cursor-pointer\n        p-1\n        mr-1\n        bg-blue-400\n        hover:bg-blue-700\n      "},[r("a",{class:t.currentPage===e?"text-white":"text-black",attrs:{href:"#"},on:{click:function(r){return t.fetchData(e)}}},[t._v("\n        "+t._s(e)+"\n      ")])])})),t._v(" "),t.currentPage<t.totalPage?r("li",{staticClass:"\n        border border-black\n        rounded\n        cursor-pointer\n        p-1\n        bg-blue-400\n        hover:bg-blue-700\n      "},[r("a",{attrs:{href:"#"},on:{click:function(e){return t.fetchData(t.currentPage+1)}}},[t._v("Next")])]):t._e()],2)])}),[],!1,null,null,null);e.default=component.exports},245:function(t,e,r){"use strict";r.r(e);r(37),r(34),r(35),r(62),r(27),r(63);var n=r(28),c=r(47);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var l={name:"FilterCategory",methods:Object(c.b)(["filterData"]),computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.c)({categories:"getCategories"}))},f=r(38),component=Object(f.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"mt-4 flex justify-content"},[r("select",{staticClass:"mx-auto w-9/12",on:{change:function(e){return t.filterData(e)}}},[r("option",{attrs:{value:""}}),t._v(" "),t._l(t.categories,(function(e,n){return r("option",{key:n,domProps:{value:e}},[t._v("\n      "+t._s(e)+"\n    ")])}))],2)])}),[],!1,null,null,null);e.default=component.exports},246:function(t,e,r){"use strict";r.r(e);r(37),r(34),r(35),r(62),r(27),r(63);var n=r(28),c=r(47);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={name:"ProductList",methods:l({},Object(c.b)(["fetchData"])),computed:l({},Object(c.c)({data:"getProducts"})),created:function(){this.fetchData(1)}},d=r(38),component=Object(d.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-2 mx-8"},t._l(t.data,(function(e){return r("div",{key:e.id,staticClass:"\n        border border-gray-300\n        rounded\n        bg-white\n        text-center\n        relative\n        h-40\n        sm:h-44\n        md:h-52\n      "},[r("img",{staticClass:"h-full w-full",attrs:{src:e.image,alt:"image"}}),t._v(" "),r("div",{staticClass:"\n          absolute\n          bottom-0\n          mx-auto\n          bg-black bg-opacity-70\n          text-white\n          w-full\n        "},[r("p",[t._v("\n          "+t._s(e.name)+"\n        ")]),t._v(" "),r("p",[t._v("$"+t._s(e.price.toFixed(2)))])])])})),0)])}),[],!1,null,null,null);e.default=component.exports},247:function(t,e,r){"use strict";r.r(e);var n=r(245),c=r(246),o=r(244),l={name:"Products",components:{FilterCategory:n.default,ProductList:c.default,Pagination:o.default}},f=r(38),component=Object(f.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container mt-8 px-8 pb-6 bg-red-50 mx-auto"},[r("h2",{staticClass:"text-red-400 flex justify-center pt-4 text-3xl font-semibold"},[t._v("\n    Products\n  ")]),t._v(" "),r("FilterCategory"),t._v(" "),r("ProductList"),t._v(" "),r("Pagination")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{FilterCategory:r(245).default,ProductList:r(246).default,Pagination:r(244).default})}}]);