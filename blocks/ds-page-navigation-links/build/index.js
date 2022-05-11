!function(){"use strict";var e,n={17:function(){var e=window.wp.blocks,n=window.wp.element,t=window.wp.i18n,r=window.wp.blockEditor,o=window.wp.components,i=window.wp.primitives,l=(0,n.createElement)(i.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,n.createElement)(i.Path,{d:"M15.6 7.2H14v1.5h1.6c2 0 3.7 1.7 3.7 3.7s-1.7 3.7-3.7 3.7H14v1.5h1.6c2.8 0 5.2-2.3 5.2-5.2 0-2.9-2.3-5.2-5.2-5.2zM4.7 12.4c0-2 1.7-3.7 3.7-3.7H10V7.2H8.4c-2.9 0-5.2 2.3-5.2 5.2 0 2.9 2.3 5.2 5.2 5.2H10v-1.5H8.4c-2 0-3.7-1.7-3.7-3.7zm4.6.9h5.3v-1.5H9.3v1.5z"}));(0,e.registerBlockType)("cagov-design-system/ds-page-navigation-links",{edit:function(e){let{setAttributes:i,attributes:{linkText:a,linkInfo:s}}=e;const c=(0,r.useBlockProps)(),[u,v]=(0,n.useState)(!1);return(0,n.createElement)("li",c,(0,n.createElement)(r.BlockControls,null,(0,n.createElement)(o.Toolbar,null,(0,n.createElement)(o.ToolbarGroup,null,(0,n.createElement)(o.ToolbarButton,{icon:l,onClick:()=>{v((e=>!e))}},u&&(0,n.createElement)(r.URLPopover,null,(0,n.createElement)(r.__experimentalLinkControl,{value:s,onChange:e=>{i({linkInfo:e})},onRemove:()=>{i({linkInfo:""})},settings:[{id:"linkTarget",title:"Open in New Tab?"}],withCreateSuggestion:!1,allowDirectEntry:!0,withURLSuggestion:!1})))))),(0,n.createElement)("a",null,(0,n.createElement)(r.RichText,{tagName:"span",multiline:"false",value:a,allowedFormats:[],onChange:e=>{i({linkText:e})},placeholder:(0,t.__)("Navigation Link","cagov-design-system")})))},save:function(e){const t=r.useBlockProps.save(),{attributes:{linkText:o,linkInfo:i}}=e;let l="#",a="_self";return void 0!==i&&(void 0!==i.linkTarget&&!0===i.linkTarget&&(a="_blank"),void 0!==i.url&&(l=i.url)),(0,n.createElement)("li",t,(0,n.createElement)("a",{href:l,target:a,rel:"_self"===a?"noopener":""},(0,n.createElement)("span",null,o)))}})}},t={};function r(e){var o=t[e];if(void 0!==o)return o.exports;var i=t[e]={exports:{}};return n[e](i,i.exports,r),i.exports}r.m=n,e=[],r.O=function(n,t,o,i){if(!t){var l=1/0;for(u=0;u<e.length;u++){t=e[u][0],o=e[u][1],i=e[u][2];for(var a=!0,s=0;s<t.length;s++)(!1&i||l>=i)&&Object.keys(r.O).every((function(e){return r.O[e](t[s])}))?t.splice(s--,1):(a=!1,i<l&&(l=i));if(a){e.splice(u--,1);var c=o();void 0!==c&&(n=c)}}return n}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[t,o,i]},r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},function(){var e={826:0,431:0};r.O.j=function(n){return 0===e[n]};var n=function(n,t){var o,i,l=t[0],a=t[1],s=t[2],c=0;if(l.some((function(n){return 0!==e[n]}))){for(o in a)r.o(a,o)&&(r.m[o]=a[o]);if(s)var u=s(r)}for(n&&n(t);c<l.length;c++)i=l[c],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return r.O(u)},t=self.webpackChunkds_page_navigation_links=self.webpackChunkds_page_navigation_links||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))}();var o=r.O(void 0,[431],(function(){return r(17)}));o=r.O(o)}();