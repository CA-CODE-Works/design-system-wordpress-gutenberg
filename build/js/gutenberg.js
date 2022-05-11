!function(){"use strict";var e,t={273:function(){var e=window.wp.blocks,t=(window.wp.i18n,window.wp.element),n=window.wp.blockEditor;(0,e.registerBlockType)("cagov-design-system/ds-accordion",{edit:function(e){let{setAttributes:r,attributes:{title:o,body:c}}=e;const i=(0,n.useBlockProps)();return(0,t.createElement)("div",i,(0,t.createElement)("cagov-accordion",null,(0,t.createElement)("details",null,(0,t.createElement)(n.RichText,{tagName:"summary",value:o,onChange:e=>{r({title:e})},placeholder:"Accordion Title"}),(0,t.createElement)(n.RichText,{tagName:"div",className:"accordion-body",value:c,onChange:e=>{r({content:e})},placeholder:"Accordion Body"}))))},save:function(e){const r=n.useBlockProps.save();let{attributes:{title:o,body:c}}=e;return(0,t.createElement)("div",r,(0,t.createElement)("cagov-accordion",null,(0,t.createElement)("details",null,(0,t.createElement)("summary",null,o),(0,t.createElement)("div",{className:"accordion-body"},c))))}})}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var c=n[e]={exports:{}};return t[e](c,c.exports,r),c.exports}r.m=t,e=[],r.O=function(t,n,o,c){if(!n){var i=1/0;for(s=0;s<e.length;s++){n=e[s][0],o=e[s][1],c=e[s][2];for(var a=!0,l=0;l<n.length;l++)(!1&c||i>=c)&&Object.keys(r.O).every((function(e){return r.O[e](n[l])}))?n.splice(l--,1):(a=!1,c<i&&(i=c));if(a){e.splice(s--,1);var u=o();void 0!==u&&(t=u)}}return t}c=c||0;for(var s=e.length;s>0&&e[s-1][2]>c;s--)e[s]=e[s-1];e[s]=[n,o,c]},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={826:0,431:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,c,i=n[0],a=n[1],l=n[2],u=0;if(i.some((function(t){return 0!==e[t]}))){for(o in a)r.o(a,o)&&(r.m[o]=a[o]);if(l)var s=l(r)}for(t&&t(n);u<i.length;u++)c=i[u],r.o(e,c)&&e[c]&&e[c][0](),e[c]=0;return r.O(s)},n=self.webpackChunkds_accordion=self.webpackChunkds_accordion||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var o=r.O(void 0,[431],(function(){return r(273)}));o=r.O(o)}();
!function(){"use strict";var e,t={396:function(){var e=window.wp.blocks,t=window.wp.element,a=window.wp.i18n,r=window.wp.blockEditor,n=window.wp.components;(0,e.registerBlockType)("cagov-design-system/ds-feature-card",{edit:function(e){let{setAttributes:i,attributes:{title:c,mediaID:o,mediaURL:l,mediaAlt:d,mediaWidth:s,mediaHeight:u}}=e;const v=(0,r.useBlockProps)();return(0,t.createElement)("div",v,(0,t.createElement)("div",{class:"cagov-with-sidebar cagov-with-sidebar-left cagov-featured-section cagov-bkgrd-gry cagov-block"},(0,t.createElement)("div",null,(0,t.createElement)("div",{class:"cagov-stack cagov-p-2 cagov-featured-sidebar"},(0,t.createElement)(r.RichText,{tagName:"h1",placeholder:(0,a.__)("Write title…","cagov-design-system"),value:c,onChange:e=>{i({title:e})}}),(0,t.createElement)("div",{class:"cagov-feature-card-body-content"},(0,t.createElement)(r.InnerBlocks,{allowedBlocks:["core/button","core/paragraph"]}))),(0,t.createElement)(r.MediaUpload,{onSelect:function(e){return i({mediaURL:e.url,mediaID:e.id,mediaAlt:e.alt,mediaWidth:e.width,mediaHeight:e.height})},allowedTypes:["image"],value:o,labels:{title:(0,a.__)("Feature Card Image")},render:e=>{let{open:r}=e;return(0,t.createElement)("div",null,o&&(0,t.createElement)("img",{class:"cagov-featured-image",src:l,alt:d,width:s,height:u}),(0,t.createElement)(n.Button,{variant:"primary",onClick:r},(0,a.__)("Change image","cagov-design-system")))}}))))},save:function(e){const a=r.useBlockProps.save(),{attributes:{title:n,mediaURL:i,mediaAlt:c,mediaWidth:o,mediaHeight:l}}=e;return(0,t.createElement)("div",a,(0,t.createElement)("div",{class:"cagov-with-sidebar cagov-with-sidebar-left cagov-featured-section cagov-bkgrd-gry cagov-block"},(0,t.createElement)("div",null,(0,t.createElement)("div",{class:"cagov-stack cagov-p-2 cagov-featured-sidebar"},(0,t.createElement)("h1",null,n),(0,t.createElement)("div",{class:"cagov-feature-card-body-content"},(0,t.createElement)(r.InnerBlocks.Content,null))),(0,t.createElement)("div",null,(0,t.createElement)("img",{class:"cagov-featured-image",src:i,alt:c,width:o,height:l})))))}})}},a={};function r(e){var n=a[e];if(void 0!==n)return n.exports;var i=a[e]={exports:{}};return t[e](i,i.exports,r),i.exports}r.m=t,e=[],r.O=function(t,a,n,i){if(!a){var c=1/0;for(s=0;s<e.length;s++){a=e[s][0],n=e[s][1],i=e[s][2];for(var o=!0,l=0;l<a.length;l++)(!1&i||c>=i)&&Object.keys(r.O).every((function(e){return r.O[e](a[l])}))?a.splice(l--,1):(o=!1,i<c&&(c=i));if(o){e.splice(s--,1);var d=n();void 0!==d&&(t=d)}}return t}i=i||0;for(var s=e.length;s>0&&e[s-1][2]>i;s--)e[s]=e[s-1];e[s]=[a,n,i]},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={826:0,431:0};r.O.j=function(t){return 0===e[t]};var t=function(t,a){var n,i,c=a[0],o=a[1],l=a[2],d=0;if(c.some((function(t){return 0!==e[t]}))){for(n in o)r.o(o,n)&&(r.m[n]=o[n]);if(l)var s=l(r)}for(t&&t(a);d<c.length;d++)i=c[d],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return r.O(s)},a=self.webpackChunkds_feature_card=self.webpackChunkds_feature_card||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var n=r.O(void 0,[431],(function(){return r(396)}));n=r.O(n)}();
!function(){"use strict";var e,n={273:function(){var e=window.wp.blocks,n=window.wp.element,r=(window.wp.i18n,window.wp.blockEditor);(0,e.registerBlockType)("cagov-design-system/ds-link-grid",{edit:function(e){const t=(0,r.useBlockProps)();return(0,n.createElement)("div",t,(0,n.createElement)("div",{class:"cagov-grid"},(0,n.createElement)(r.InnerBlocks,{allowedBlocks:["cagov-design-system/ds-link-grid-card"]})))},save:function(e){const t=r.useBlockProps.save();return(0,n.createElement)("div",t,(0,n.createElement)("div",{class:"cagov-grid"},(0,n.createElement)(r.InnerBlocks.Content,null)))}})}},r={};function t(e){var o=r[e];if(void 0!==o)return o.exports;var i=r[e]={exports:{}};return n[e](i,i.exports,t),i.exports}t.m=n,e=[],t.O=function(n,r,o,i){if(!r){var c=1/0;for(u=0;u<e.length;u++){r=e[u][0],o=e[u][1],i=e[u][2];for(var s=!0,l=0;l<r.length;l++)(!1&i||c>=i)&&Object.keys(t.O).every((function(e){return t.O[e](r[l])}))?r.splice(l--,1):(s=!1,i<c&&(c=i));if(s){e.splice(u--,1);var a=o();void 0!==a&&(n=a)}}return n}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[r,o,i]},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},function(){var e={826:0,431:0};t.O.j=function(n){return 0===e[n]};var n=function(n,r){var o,i,c=r[0],s=r[1],l=r[2],a=0;if(c.some((function(n){return 0!==e[n]}))){for(o in s)t.o(s,o)&&(t.m[o]=s[o]);if(l)var u=l(t)}for(n&&n(r);a<c.length;a++)i=c[a],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(u)},r=self.webpackChunkds_link_grid=self.webpackChunkds_link_grid||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var o=t.O(void 0,[431],(function(){return t(273)}));o=t.O(o)}();
!function(){"use strict";var e,t={17:function(){var e=window.wp.blocks,t=window.wp.element,n=window.wp.i18n,r=window.wp.blockEditor,l=window.wp.components,o=window.wp.primitives,a=(0,t.createElement)(o.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,t.createElement)(o.Path,{d:"M15.6 7.2H14v1.5h1.6c2 0 3.7 1.7 3.7 3.7s-1.7 3.7-3.7 3.7H14v1.5h1.6c2.8 0 5.2-2.3 5.2-5.2 0-2.9-2.3-5.2-5.2-5.2zM4.7 12.4c0-2 1.7-3.7 3.7-3.7H10V7.2H8.4c-2.9 0-5.2 2.3-5.2 5.2 0 2.9 2.3 5.2 5.2 5.2H10v-1.5H8.4c-2 0-3.7-1.7-3.7-3.7zm4.6.9h5.3v-1.5H9.3v1.5z"}));(0,e.registerBlockType)("cagov-design-system/ds-link-grid-card",{edit:function(e){let{setAttributes:o,attributes:{linkText:i,linkInfo:c}}=e;const s=(0,r.useBlockProps)(),[u,v]=(0,t.useState)(!1);return(0,t.createElement)("div",s,(0,t.createElement)(r.BlockControls,null,(0,t.createElement)(l.Toolbar,null,(0,t.createElement)(l.ToolbarGroup,null,(0,t.createElement)(l.ToolbarButton,{icon:a,label:"Change url settings for this section.",onClick:()=>{v((e=>!e))}},u&&(0,t.createElement)(r.URLPopover,null,(0,t.createElement)(r.__experimentalLinkControl,{value:c,onChange:e=>{o({linkInfo:e})},onRemove:()=>{o({linkInfo:""})},settings:[{id:"linkTarget",title:"Open in New Tab?"}],withCreateSuggestion:!1,allowDirectEntry:!0,withURLSuggestion:!1})))))),(0,t.createElement)("a",{class:"no-deco cagov-card"},(0,t.createElement)(r.RichText,{tagName:"span",className:"card-text",value:i,multiline:"false",allowedFormats:[],onChange:e=>{o({linkText:e})},placeholder:(0,n.__)("Link Text","cagov-design-system")}),(0,t.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg","enable-background":"new 0 0 24 24",height:"24px",viewBox:"0 0 24 24",width:"24px"},(0,t.createElement)("g",null,(0,t.createElement)("path",{d:"M0,0h24v24H0V0z",fill:"none"})),(0,t.createElement)("g",null,(0,t.createElement)("polygon",{points:"6.23,20.23 8,22 18,12 8,2 6.23,3.77 14.46,12"})))))},save:function(e){const n=r.useBlockProps.save(),{attributes:{linkText:l,linkInfo:o}}=e;let a="#",i="_self";return void 0!==o&&(void 0!==o.linkTarget&&!0===o.linkTarget&&(i="_blank"),void 0!==o.url&&(a=o.url)),(0,t.createElement)("div",n,(0,t.createElement)("a",{href:a,target:i,rel:"_self"===i?"noopener":"",class:"no-deco cagov-card"},(0,t.createElement)("span",{class:"card-text"},l),(0,t.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg","enable-background":"new 0 0 24 24",height:"24px",viewBox:"0 0 24 24",width:"24px"},(0,t.createElement)("g",null,(0,t.createElement)("path",{d:"M0,0h24v24H0V0z",fill:"none"})),(0,t.createElement)("g",null,(0,t.createElement)("polygon",{points:"6.23,20.23 8,22 18,12 8,2 6.23,3.77 14.46,12"})))))}})}},n={};function r(e){var l=n[e];if(void 0!==l)return l.exports;var o=n[e]={exports:{}};return t[e](o,o.exports,r),o.exports}r.m=t,e=[],r.O=function(t,n,l,o){if(!n){var a=1/0;for(u=0;u<e.length;u++){n=e[u][0],l=e[u][1],o=e[u][2];for(var i=!0,c=0;c<n.length;c++)(!1&o||a>=o)&&Object.keys(r.O).every((function(e){return r.O[e](n[c])}))?n.splice(c--,1):(i=!1,o<a&&(a=o));if(i){e.splice(u--,1);var s=l();void 0!==s&&(t=s)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[n,l,o]},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={826:0,431:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var l,o,a=n[0],i=n[1],c=n[2],s=0;if(a.some((function(t){return 0!==e[t]}))){for(l in i)r.o(i,l)&&(r.m[l]=i[l]);if(c)var u=c(r)}for(t&&t(n);s<a.length;s++)o=a[s],r.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return r.O(u)},n=self.webpackChunkds_link_grid_card=self.webpackChunkds_link_grid_card||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var l=r.O(void 0,[431],(function(){return r(17)}));l=r.O(l)}();
!function(){"use strict";var e,t={273:function(){var e=window.wp.blocks,t=window.wp.element,r=window.wp.i18n,n=window.wp.blockEditor;(0,e.registerBlockType)("cagov-design-system/ds-page-alert",{edit:function(e){let{setAttributes:a,attributes:{icon:o,message:s}}=e;const i=(0,n.useBlockProps)();return(0,t.createElement)("div",i,(0,t.createElement)("cagov-page-alert",{"data-icon":o,"data-message":s,class:"cagov-page-alert"},(0,t.createElement)(n.RichText,{tagName:"span",placeholder:(0,r.__)("Write alert…","cagov-design-system"),value:s,onChange:e=>{a({message:e})}})))},save:function(e){const r=n.useBlockProps.save(),{attributes:{icon:a,message:o}}=e;return(0,t.createElement)("div",r,(0,t.createElement)("cagov-page-alert",{"data-icon":a,"data-message":o,class:"cagov-page-alert"}))}})}},r={};function n(e){var a=r[e];if(void 0!==a)return a.exports;var o=r[e]={exports:{}};return t[e](o,o.exports,n),o.exports}n.m=t,e=[],n.O=function(t,r,a,o){if(!r){var s=1/0;for(u=0;u<e.length;u++){r=e[u][0],a=e[u][1],o=e[u][2];for(var i=!0,c=0;c<r.length;c++)(!1&o||s>=o)&&Object.keys(n.O).every((function(e){return n.O[e](r[c])}))?r.splice(c--,1):(i=!1,o<s&&(s=o));if(i){e.splice(u--,1);var l=a();void 0!==l&&(t=l)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[r,a,o]},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={826:0,431:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var a,o,s=r[0],i=r[1],c=r[2],l=0;if(s.some((function(t){return 0!==e[t]}))){for(a in i)n.o(i,a)&&(n.m[a]=i[a]);if(c)var u=c(n)}for(t&&t(r);l<s.length;l++)o=s[l],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(u)},r=self.webpackChunkds_page_alert=self.webpackChunkds_page_alert||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var a=n.O(void 0,[431],(function(){return n(273)}));a=n.O(a)}();
!function(){"use strict";var e,n={273:function(){var e=window.wp.blocks,n=window.wp.element,t=window.wp.i18n,a=window.wp.blockEditor;(0,e.registerBlockType)("cagov-design-system/ds-page-navigation",{edit:function(e){let{setAttributes:l,attributes:{title:r}}=e;const i=(0,a.useBlockProps)();return(0,n.createElement)("div",i,(0,n.createElement)("sidebar",null,(0,n.createElement)("cagov-page-navigation",null,(0,n.createElement)("nav",{"aria-labelledby":"page-navigation-label"},(0,n.createElement)(a.RichText,{tagName:"div",placeholder:(0,t.__)("On this page","cagov-design-system"),value:r,className:"label",onChange:e=>{l({title:e})}}),(0,n.createElement)("ul",null,(0,n.createElement)(a.InnerBlocks,{allowedBlocks:["cagov-design-system/ds-page-navigation-links"]}))))))},save:function(e){let{attributes:{title:t}}=e;const l=a.useBlockProps.save();return(0,n.createElement)("div",l,(0,n.createElement)("sidebar",null,(0,n.createElement)("cagov-page-navigation",null,(0,n.createElement)("nav",{"aria-labelledby":"page-navigation-label"},(0,n.createElement)("div",{class:"label"},t),(0,n.createElement)("ul",null,(0,n.createElement)(a.InnerBlocks.Content,null))))))}})}},t={};function a(e){var l=t[e];if(void 0!==l)return l.exports;var r=t[e]={exports:{}};return n[e](r,r.exports,a),r.exports}a.m=n,e=[],a.O=function(n,t,l,r){if(!t){var i=1/0;for(u=0;u<e.length;u++){t=e[u][0],l=e[u][1],r=e[u][2];for(var o=!0,c=0;c<t.length;c++)(!1&r||i>=r)&&Object.keys(a.O).every((function(e){return a.O[e](t[c])}))?t.splice(c--,1):(o=!1,r<i&&(i=r));if(o){e.splice(u--,1);var s=l();void 0!==s&&(n=s)}}return n}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[t,l,r]},a.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},function(){var e={826:0,431:0};a.O.j=function(n){return 0===e[n]};var n=function(n,t){var l,r,i=t[0],o=t[1],c=t[2],s=0;if(i.some((function(n){return 0!==e[n]}))){for(l in o)a.o(o,l)&&(a.m[l]=o[l]);if(c)var u=c(a)}for(n&&n(t);s<i.length;s++)r=i[s],a.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return a.O(u)},t=self.webpackChunkds_page_navigation=self.webpackChunkds_page_navigation||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))}();var l=a.O(void 0,[431],(function(){return a(273)}));l=a.O(l)}();
!function(){"use strict";var e,n={17:function(){var e=window.wp.blocks,n=window.wp.element,t=window.wp.i18n,r=window.wp.blockEditor,o=window.wp.components,i=window.wp.primitives,l=(0,n.createElement)(i.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,n.createElement)(i.Path,{d:"M15.6 7.2H14v1.5h1.6c2 0 3.7 1.7 3.7 3.7s-1.7 3.7-3.7 3.7H14v1.5h1.6c2.8 0 5.2-2.3 5.2-5.2 0-2.9-2.3-5.2-5.2-5.2zM4.7 12.4c0-2 1.7-3.7 3.7-3.7H10V7.2H8.4c-2.9 0-5.2 2.3-5.2 5.2 0 2.9 2.3 5.2 5.2 5.2H10v-1.5H8.4c-2 0-3.7-1.7-3.7-3.7zm4.6.9h5.3v-1.5H9.3v1.5z"}));(0,e.registerBlockType)("cagov-design-system/ds-page-navigation-links",{edit:function(e){let{setAttributes:i,attributes:{linkText:a,linkInfo:s}}=e;const c=(0,r.useBlockProps)(),[u,v]=(0,n.useState)(!1);return(0,n.createElement)("li",c,(0,n.createElement)(r.BlockControls,null,(0,n.createElement)(o.Toolbar,null,(0,n.createElement)(o.ToolbarGroup,null,(0,n.createElement)(o.ToolbarButton,{icon:l,onClick:()=>{v((e=>!e))}},u&&(0,n.createElement)(r.URLPopover,null,(0,n.createElement)(r.__experimentalLinkControl,{value:s,onChange:e=>{i({linkInfo:e})},onRemove:()=>{i({linkInfo:""})},settings:[{id:"linkTarget",title:"Open in New Tab?"}],withCreateSuggestion:!1,allowDirectEntry:!0,withURLSuggestion:!1})))))),(0,n.createElement)("a",null,(0,n.createElement)(r.RichText,{tagName:"span",multiline:"false",value:a,allowedFormats:[],onChange:e=>{i({linkText:e})},placeholder:(0,t.__)("Navigation Link","cagov-design-system")})))},save:function(e){const t=r.useBlockProps.save(),{attributes:{linkText:o,linkInfo:i}}=e;let l="#",a="_self";return void 0!==i&&(void 0!==i.linkTarget&&!0===i.linkTarget&&(a="_blank"),void 0!==i.url&&(l=i.url)),(0,n.createElement)("li",t,(0,n.createElement)("a",{href:l,target:a,rel:"_self"===a?"noopener":""},(0,n.createElement)("span",null,o)))}})}},t={};function r(e){var o=t[e];if(void 0!==o)return o.exports;var i=t[e]={exports:{}};return n[e](i,i.exports,r),i.exports}r.m=n,e=[],r.O=function(n,t,o,i){if(!t){var l=1/0;for(u=0;u<e.length;u++){t=e[u][0],o=e[u][1],i=e[u][2];for(var a=!0,s=0;s<t.length;s++)(!1&i||l>=i)&&Object.keys(r.O).every((function(e){return r.O[e](t[s])}))?t.splice(s--,1):(a=!1,i<l&&(l=i));if(a){e.splice(u--,1);var c=o();void 0!==c&&(n=c)}}return n}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[t,o,i]},r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},function(){var e={826:0,431:0};r.O.j=function(n){return 0===e[n]};var n=function(n,t){var o,i,l=t[0],a=t[1],s=t[2],c=0;if(l.some((function(n){return 0!==e[n]}))){for(o in a)r.o(a,o)&&(r.m[o]=a[o]);if(s)var u=s(r)}for(n&&n(t);c<l.length;c++)i=l[c],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return r.O(u)},t=self.webpackChunkds_page_navigation_links=self.webpackChunkds_page_navigation_links||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))}();var o=r.O(void 0,[431],(function(){return r(17)}));o=r.O(o)}();