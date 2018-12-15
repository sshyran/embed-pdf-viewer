!function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),i=n.n(r),o=wp.i18n.__,l=wp.blocks.registerBlockType,a=wp.editor,c=(a.RichText,a.MediaPlaceholder),s=a.MediaUpload,p=a.InspectorControls,d=a.BlockControls,u=a.BlockAlignmentToolbar,m=wp.element.Fragment,h=wp.components,w=h.withNotices,f=h.IconButton,g=h.TextControl,b=h.PanelBody,v=h.Toolbar,E=h.ResizableBox,y=wp.compose.withState,P=wp.blob.isBlobURL,_=function(e,t){return t&&!e&&!P(t)},x=function(e){var t=e.attributes,n=t.url,r=t.width,i=t.height,o=e.className,l={width:r,height:i};return void 0!==n&&n?(void 0===l.width&&(l.width=600),void 0===l.height&&(l.height=400),wp.element.createElement("div",{className:o+"__content-wrapper"},wp.element.createElement("object",{class:"embed-pdf-viewer",data:n+"#scrollbar=1&toolbar=1",type:"application/pdf",height:l.height,width:l.width},wp.element.createElement("iframe",{class:"embed-pdf-viewer",src:"https://docs.google.com/viewer?url="+encodeURIComponent(n)+"&embedded=true",frameborder:"0",style:{height:l.height,width:l.width}})),wp.element.createElement("iframe",{class:"embed-pdf-viewer",src:"https://docs.google.com/viewer?url="+encodeURIComponent(n)+"&embedded=true",frameborder:"0",style:{height:l.height,width:l.width}}))):null},C=function(e){function t(e){return function(t){var n={};n[e]=t,R(n)}}function n(e){e&&e.url&&(O({hasError:!1}),R({url:e.url,id:e.id}))}function r(){O({isEditing:!I})}var l=e.attributes,a=l.id,h=l.url,w=l.width,y=l.height,C=l.align,R=e.setAttributes,I=e.isEditing,N=e.hasError,O=e.setState,S=e.className,k=(e.media,e.noticeUI,e.noticeOperations,e.toggleSelection),B=e.isRTL,D=_(a,h);if(void 0===h||!h||N||I)return wp.element.createElement(c,{icon:"media-document",labels:{title:o("PDF"),instructions:o("Drag a PDF, upload a new one or select a PDF from your library.")},onSelect:n,onSelectURL:t("url"),notices:e.noticeUI,onError:e.noticeOperations.createErrorNotice,accept:"application/pdf"});var F=i()(S,{"is-transient":P(h)}),U=!1,j=!1;return"center"===C?(U=!0,j=!0):B?"left"===C?U=!0:j=!0:"right"===C?j=!0:U=!0,wp.element.createElement(m,null,wp.element.createElement(p,null,wp.element.createElement(b,{title:o("Embed size"),initialOpen:!0},wp.element.createElement("div",null,wp.element.createElement(g,{type:"number",min:20,label:o("Width"),value:void 0===w?600:w,onChange:t("width")}),wp.element.createElement(g,{type:"number",label:o("Height"),value:void 0===y?400:y,min:1,onChange:t("height")})))),wp.element.createElement(d,null,wp.element.createElement(u,{value:C,onChange:t("align")}),wp.element.createElement(v,null,D&&wp.element.createElement(f,{className:"components-icon-button components-toolbar__control",label:o("Edit PDF"),onClick:r,icon:"edit"}),!D&&wp.element.createElement(s,{onSelect:n,value:a,render:function(e){var t=e.open;return wp.element.createElement(f,{className:"components-toolbar__control",label:o("Edit PDF"),onClick:t,icon:"edit"})}}))),wp.element.createElement("div",{className:F},wp.element.createElement(E,{size:w&&y?{width:w,height:y}:void 0,lockAspectRatio:!0,enable:{top:!1,right:U,bottom:!0,left:j},onResizeStart:function(){k(!1)},onResizeStop:function(e,t,n,r){R({width:parseInt(currentWidth+r.width,10),height:parseInt(currentHeight+r.height,10)}),k(!0)}},x(e))))};l("embed-pdf-viewer/embed-pdf-viewer",{title:o("PDF"),icon:"media-document",category:"embed",attributes:{id:{type:"number"},url:{type:"string"},width:{type:"number"},height:{type:"number"},align:{type:"string"}},getEditWrapperProps:function(e){var t=e.align,n=e.width;if("left"===t||"center"===t||"right"===t)return{"data-align":t,"data-resized":!!n}},edit:w(y({isEditing:!1,hasError:!1})(C)),save:x})},function(e,t,n){var r,i;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
!function(){"use strict";function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)&&r.length){var l=n.apply(null,r);l&&e.push(l)}else if("object"===i)for(var a in r)o.call(r,a)&&r[a]&&e.push(a)}}return e.join(" ")}var o={}.hasOwnProperty;void 0!==e&&e.exports?(n.default=n,e.exports=n):(r=[],void 0!==(i=function(){return n}.apply(t,r))&&(e.exports=i))}()}]);