(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{175:function(t,e,r){r(176),t.exports=r(177)},223:function(t,e,r){"use strict";r.r(e),r.d(e,"state",(function(){return f}));var n=r(6),o=(r(44),r(27),r(45),r(35),r(224),r(172)),c=r.n(o),f=function(){return{products:[],categories:[],filterData:[],totalPage:0,currentPage:0}},d={fetchData:function(t,e){return Object(n.a)(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.a.get("https://trayvonnorthern.com/Edgewood-API/public/api/products?page=".concat(e));case 2:n=r.sent,t.commit("setData",n.data);case 4:case"end":return r.stop()}}),r)})))()},filterData:function(t,e){return Object(n.a)(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:n=e.target.options[e.target.options.selectedIndex].innerText.trim(),t.commit("setProducts",n);case 2:case"end":return r.stop()}}),r)})))()}};e.default={state:f,getters:{getProducts:function(t){return t.filterData},getCategories:function(t){return t.categories},getTotalPage:function(t){return t.totalPage},getCurrentPage:function(t){return t.currentPage}},actions:d,mutations:{setData:function(t,e){t.products=e.data,t.filterData=e.data;var r=[];e.data.forEach((function(t){r.includes(t.catname)||r.push(t.catname)})),t.categories=r,t.currentPage=e.current_page,t.totalPage=e.last_page},setProducts:function(t,e){if(""===e)t.filterData=t.products;else{var r=t.products.filter((function(t){return t.catname===e}));t.filterData=r}}}}}},[[175,7,1,8]]]);