(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{33:function(e,t,a){e.exports=a.p+"static/media/logo.3f934b2b.png"},38:function(e,t,a){e.exports=a(59)},56:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(12),l=a.n(c),r=a(6),s=a(3),o=a(36),m=a(32),u=a(26),b=a.n(u),p=b.a.mark(d);function d(){return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,!0;case 2:case"end":return e.stop()}},p)}var f=a(4),E="OPEN_BUTTON_PAGE",g="CLOSE_BUTTON_PAGE",h="OPEN_INPUT_PAGE",v="CLOSE_INPUT_PAGE",N="OPEN_LIST_PAGE",O="CLOSE_LIST_PAGE",P="OPEN_SLIDER_PAGE",k="CLOSE_SLIDER_PAGE",_="OPEN_UPLOAD_PAGE",A="CLOSE_UPLOAD_PAGE",j={isActiveButtonPage:!1,isActiveInputPage:!1,isActiveListPage:!1,isActiveSliderPage:!1,isActiveUploadPage:!1};var y=Object(r.combineReducers)({page:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j;switch((arguments.length>1?arguments[1]:void 0).type){case E:return Object(f.a)({},e,{isActiveButtonPage:!0});case g:return Object(f.a)({},e,{isActiveButtonPage:!1});case h:return Object(f.a)({},e,{isActiveInputPage:!0});case v:return Object(f.a)({},e,{isActiveInputPage:!1});case N:return Object(f.a)({},e,{isActiveListPage:!0});case O:return Object(f.a)({},e,{isActiveListPage:!1});case P:return Object(f.a)({},e,{isActiveSliderPage:!0});case k:return Object(f.a)({},e,{isActiveSliderPage:!1});case _:return Object(f.a)({},e,{isActiveUploadPage:!0});case A:return Object(f.a)({},e,{isActiveUploadPage:!1});default:return e}}}),S=a(7),w=a(8),I=a(10),C=a(9),B=a(11),T=a(61),x=a(33),L=a.n(x),R=function(){return i.a.createElement("div",{className:"header__inner"},i.a.createElement("img",{className:"logo",src:L.a,alt:"Logo"}))},G=function(){return i.a.createElement("div",{className:"footer__inner"},i.a.createElement("div",{className:"copyright"},"Copyright \xa9 2019 hvduc"))},U=a(2),D=a.n(U),M=function(e){function t(e){var a;return Object(S.a)(this,t),(a=Object(I.a)(this,Object(C.a)(t).call(this,e))).changeAccordionActive=function(e){a.state.activeIndex!==e?a.setState({activeIndex:e}):a.setState({activeIndex:-1})},a.state={activeIndex:e.activeIndex},a}return Object(B.a)(t,e),Object(w.a)(t,[{key:"render",value:function(){var e=this,t=this.props.children,a=this.state.activeIndex,n=i.a.Children.map(t,function(t,n){return i.a.cloneElement(t,{index:n,isAccordion:!0,isOpen:n===a,changeAccordionActive:function(){return e.changeAccordionActive(n)}})});return i.a.createElement("div",{className:"accordion"},n)}}]),t}(i.a.Component);M.defaultProps={activeIndex:-1,children:D.a.element};var W=M,H=a(14),q=a(27),F=1,V="WAITING",J="RESTING",Z="IDLING",z=function(){return null},Y=function(e){function t(e){var a;return Object(S.a)(this,t),(a=Object(I.a)(this,Object(C.a)(t).call(this,e))).onContentRef=function(e){a.content=e},a.onWrapperRef=function(e){a.wrapper=e},a.onRest=function(){a.raf=requestAnimationFrame(a.setResting)},a.setResting=function(){a.setState({currentState:J})},a.getTo=function(){var e=a.props.fixedHeight;return e>-1?e:a.content.clientHeight},a.getWrapperStyle=function(e){var t=a.state,n=t.currentState,i=(t.from,t.to);if(n===Z&&i){var c=a.props.fixedHeight;return c>-1?{overflow:"hidden",height:c}:{height:"auto"}}return n!==V||i?{overflow:"hidden",height:Math.max(0,e)}:{overflow:"hidden",height:0}},a.getMotionProps=function(){var e=a.props.springConfig,t=a.state,n=t.currentState,i=t.from,c=t.to;return n===Z?{defaultStyle:{height:c},style:{height:c}}:{defaultStyle:{height:i},style:{height:Object(q.spring)(c,Object(f.a)({precision:F},e))}}},a.renderContent=function(e){var t=e.height,n=a.props,c=(n.isOpened,n.springConfig,n.forceInitialAnimation,n.hasNestedCollapse,n.fixedHeight,n.theme),l=n.style,r=n.onRender,s=(n.onRest,n.onMeasure,n.children),o=Object(H.a)(n,["isOpened","springConfig","forceInitialAnimation","hasNestedCollapse","fixedHeight","theme","style","onRender","onRest","onMeasure","children"]),m=a.state;return r({current:t,from:m.from,to:m.to}),i.a.createElement("div",Object.assign({ref:a.onWrapperRef,className:c.collapse,style:Object(f.a)({},a.getWrapperStyle(Math.max(0,t)),l)},o),i.a.createElement("div",{ref:a.onContentRef,className:c.content},s))},a.state={currentState:Z,from:0,to:0,isOpened:e.isOpened},a}return Object(B.a)(t,e),Object(w.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.forceInitialAnimation,a=e.onRest;if(this.state.isOpened){var n=this.getTo();if(t){var i=this.wrapper.clientHeight;this.setState({currentState:"RESIZING",from:i,to:n})}else this.setState({currentState:Z,from:n,to:n})}a()}},{key:"componentDidUpdate",value:function(e,t){var a=this.props,n=a.isOpened,i=a.onRest,c=a.onMeasure,l=this.state,r=l.currentState,s=l.to;if(r!==Z){t.to!==s&&c({height:s,width:this.content.clientWidth});var o=this.wrapper.clientHeight,m=n?this.getTo():0;o===m?r!==J&&r!==V||this.setState({currentState:Z,from:o,to:m}):this.setState({currentState:"RESIZING",from:o,to:m})}else i()}},{key:"componentWillUnmount",value:function(){cancelAnimationFrame(this.raf)}},{key:"render",value:function(){return i.a.createElement(q.Motion,Object.assign({},this.getMotionProps(),{onRest:this.onRest}),this.renderContent)}}],[{key:"getDerivedStateFromProps",value:function(e,t){var a=t.currentState,n=t.isOpened;if(e.hasNestedCollapse){if(e.isOpened!==n)return{currentState:V}}else if(a===Z&&(e.isOpened||n))return{currentState:V};return null}}]),t}(i.a.PureComponent);Y.defaultProps={springConfig:{},forceInitialAnimation:!1,hasNestedCollapse:!1,fixedHeight:-1,style:{},theme:{collapse:"collapse__wrapper",content:"collapse__content"},onRender:z,onRest:z,onMeasure:z};var $=Y,K=function(e){function t(e){var a;return Object(S.a)(this,t),(a=Object(I.a)(this,Object(C.a)(t).call(this,e))).changeActive=function(){var e=a.state.isActive;a.setState({isActive:!e})},a.state={isActive:e.isOpen},a}return Object(B.a)(t,e),Object(w.a)(t,[{key:"render",value:function(){var e=this.props,t=e.index,a=e.heading,n=e.children,c=e.changeAccordionActive,l=e.isAccordion,r=this.state.isActive;return i.a.createElement("div",{className:"collapse",index:t},l?i.a.createElement("div",{className:"collapse__heading",onClick:function(){return c()},role:"presentation"},a):i.a.createElement("div",{className:"collapse__heading",onClick:this.changeActive,role:"presentation"},a),i.a.createElement($,{isOpened:r},n))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.isAccordion&&t.isActive!==e.isOpen?{isActive:e.isOpen}:null}}]),t}(i.a.Component);K.defaultProps={index:0,isOpen:!1,isAccordion:!1,children:D.a.element,changeAccordionActive:function(){}};var Q=K,X=function(e){var t=e.href,a=e.children,n=Object(H.a)(e,["href","children"]);return i.a.createElement("a",Object.assign({href:t},n),a)},ee={openButtonPage:function(){return{type:E}},openInputPage:function(){return{type:h}},openListPage:function(){return{type:N}},openSliderPage:function(){return{type:P}},openUploadPage:function(){return{type:_}}},te=Object(s.b)(null,ee)(function(e){var t=e.openButtonPage,a=e.openInputPage,n=e.openListPage,c=e.openSliderPage,l=e.openUploadPage;return i.a.createElement("div",{className:"main__inner"},i.a.createElement("h3",null,"This is a basic style library. Build by: Ho\xe0ng Vi\u1ec7t \u0110\u1ee9c"),i.a.createElement("div",{className:"basic-content"},i.a.createElement(W,{activeIndex:-1},i.a.createElement(Q,{heading:"Form"},i.a.createElement("div",{className:"home-list"},i.a.createElement(X,{className:"home-list__item",href:"javascript:void(0)",onClick:t},"Button ",i.a.createElement("i",{className:"fas fa-angle-right"})),i.a.createElement(X,{className:"home-list__item",href:"javascript:void(0)",onClick:a},"Input ",i.a.createElement("i",{className:"fas fa-angle-right"})),i.a.createElement(X,{className:"home-list__item",href:"javascript:void(0)",onClick:n},"List ",i.a.createElement("i",{className:"fas fa-angle-right"})),i.a.createElement(X,{className:"home-list__item",href:"javascript:void(0)",onClick:c},"Slider ",i.a.createElement("i",{className:"fas fa-angle-right"})),i.a.createElement(X,{className:"home-list__item",href:"javascript:void(0)",onClick:l},"Upload ",i.a.createElement("i",{className:"fas fa-angle-right"})))),i.a.createElement(Q,{heading:"Basic component"},i.a.createElement("p",null,"This is content 2")),i.a.createElement(Q,{heading:"Operational"},i.a.createElement("p",null,"This is content 3")),i.a.createElement(Q,{heading:"Navigation"},i.a.createElement("p",null,"This is content 3")),i.a.createElement(Q,{heading:"Other"},i.a.createElement("p",null,"This is content 3")))),i.a.createElement("div",{className:"basic-content"},i.a.createElement(Q,{heading:"This is collapse default"},i.a.createElement("p",null,"This is content 1"),i.a.createElement("p",null,"This is content 1"),i.a.createElement("p",null,"This is content 1"),i.a.createElement("p",null,"This is content 1"))),i.a.createElement("div",{className:"basic-content"},i.a.createElement(Q,{heading:"This is collapse default"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis erat a lorem eleifend laoreet. Nam purus dui, blandit ac viverra ut, placerat non arcu. Donec vehicula leo ut nibh posuere, a euismod neque hendrerit. Donec eu suscipit tellus, a commodo eros. Cras eleifend erat vehicula purus consectetur, vitae molestie mi tincidunt. Mauris a magna pretium, tincidunt tellus commodo, dapibus velit. Vestibulum leo enim, sollicitudin nec leo id, rutrum mollis ipsum. Mauris erat dolor, posuere ac ligula in, vulputate interdum lacus. In tincidunt suscipit purus eleifend tristique. Proin eget libero posuere, consectetur dui nec, mattis ante. Proin semper imperdiet ex quis vehicula. Duis eu ante lorem. Curabitur mauris eros, feugiat ut nisl ut, rhoncus efficitur leo. Donec facilisis varius eros, nec ullamcorper metus gravida ac. Proin posuere finibus nisl, ut tempus mauris aliquet quis. Morbi eleifend sapien quis tempus eleifend.")))}),ae=function(e){var t=e.onClick,a=e.type,n=e.children,c=Object(H.a)(e,["onClick","type","children"]);return i.a.createElement("button",Object.assign({onClick:t,type:a},c),n)};ae.defaultProps={type:"button",onClick:function(){}};var ne=ae,ie=Object(s.b)(null,{closeButtonPage:function(){return{type:g}}})(function(e){var t=e.closeButtonPage;return i.a.createElement("div",{className:"page page--button drawer"},i.a.createElement("div",{className:"page__container"},i.a.createElement(ne,{className:"btn btn--back btn--icon",onClick:t},i.a.createElement("i",{className:"fas fa-arrow-left"})," Go back"),i.a.createElement("h2",{className:"page__heading"},"BUTTON"),i.a.createElement("div",{className:"page__content"},i.a.createElement(ne,{className:"btn"},"Button default"),i.a.createElement(ne,{className:"btn btn--loading"},i.a.createElement("i",{className:"fas fa-spinner fa-pulse"})," Button default"),i.a.createElement(ne,{className:"btn",disabled:!0},"Button default disabled"),i.a.createElement(ne,{className:"btn btn--primary"},"Button primary"),i.a.createElement(ne,{className:"btn btn--primary btn--loading"},i.a.createElement("i",{className:"fas fa-spinner fa-pulse"})," Button primary"),i.a.createElement(ne,{className:"btn btn--primary",disabled:!0},"Button primary disabled"),i.a.createElement("hr",null),i.a.createElement("h4",null,"Button inline block"),i.a.createElement("div",{className:"button-inline"},i.a.createElement(ne,{className:"btn btn--inline-block"},"Button default"),i.a.createElement(ne,{className:"btn btn--primary btn--inline-block"},"Button primary"),i.a.createElement(ne,{className:"btn btn--inline-block",disabled:!0},"Button default")),i.a.createElement("hr",null),i.a.createElement("h4",null,"Button colored"),i.a.createElement("div",{className:"button-inline"},i.a.createElement(ne,{className:"btn btn--inline-block"},"Default"),i.a.createElement(ne,{className:"btn btn--red btn--inline-block"},"Red"),i.a.createElement(ne,{className:"btn btn--orange btn--inline-block"},"Orange"),i.a.createElement(ne,{className:"btn btn--yellow btn--inline-block"},"Yellow"),i.a.createElement(ne,{className:"btn btn--olive btn--inline-block"},"Olive"),i.a.createElement(ne,{className:"btn btn--green btn--inline-block"},"Green"),i.a.createElement(ne,{className:"btn btn--teal btn--inline-block"},"Teal"),i.a.createElement(ne,{className:"btn btn--blue btn--inline-block"},"Blue"),i.a.createElement(ne,{className:"btn btn--violet btn--inline-block"},"Violet"),i.a.createElement(ne,{className:"btn btn--purple btn--inline-block"},"Purple"),i.a.createElement(ne,{className:"btn btn--pink btn--inline-block"},"Pink"),i.a.createElement(ne,{className:"btn btn--brown btn--inline-block"},"Brown"),i.a.createElement(ne,{className:"btn btn--grey btn--inline-block"},"Grey"),i.a.createElement(ne,{className:"btn btn--black btn--inline-block"},"Black")),i.a.createElement("hr",null),i.a.createElement("h4",null,"Button size"),i.a.createElement("div",{className:"button-inline"},i.a.createElement(ne,{className:"btn btn--small btn--inline-block"},"Button small"),i.a.createElement(ne,{className:"btn btn--inline-block"},"Button default"),i.a.createElement(ne,{className:"btn btn--medium btn--inline-block"},"Button medium"),i.a.createElement(ne,{className:"btn btn--large btn--inline-block"},"Button large")),i.a.createElement("hr",null),i.a.createElement("h4",null,"Button icon"),i.a.createElement("div",{className:"button-inline"},i.a.createElement(ne,{className:"btn btn--inline-block"},i.a.createElement("i",{className:"fas fa-user"})),i.a.createElement(ne,{className:"btn btn--inline-block"},i.a.createElement("i",{className:"fas fa-bars"})),i.a.createElement(ne,{className:"btn btn--inline-block"},i.a.createElement("i",{className:"fas fa-spinner fa-pulse"})),i.a.createElement(ne,{className:"btn btn--inline-block"},i.a.createElement("i",{className:"fas fa-save"})," Save"),i.a.createElement(ne,{className:"btn btn--inline-block"},i.a.createElement("i",{className:"fas fa-edit"})," Edit"),i.a.createElement(ne,{className:"btn btn--inline-block"},i.a.createElement("i",{className:"fas fa-spinner fa-pulse"})," Loading...")),i.a.createElement("hr",null),i.a.createElement("h4",null,"Button circle"),i.a.createElement("div",{className:"button-inline"},i.a.createElement(ne,{className:"btn btn--circle btn--inline-block"},i.a.createElement("i",{className:"fab fa-facebook-f"})),i.a.createElement(ne,{className:"btn btn--circle btn--inline-block"},i.a.createElement("i",{className:"fab fa-twitter"})),i.a.createElement(ne,{className:"btn btn--circle btn--inline-block"},i.a.createElement("i",{className:"fab fa-instagram"})),i.a.createElement(ne,{className:"btn btn--circle btn--inline-block"},i.a.createElement("i",{className:"fab fa-youtube"})),i.a.createElement(ne,{className:"btn btn--circle btn--inline-block"},i.a.createElement("i",{className:"fab fa-linkedin-in"})),i.a.createElement(ne,{className:"btn btn--circle btn--inline-block"},i.a.createElement("i",{className:"fab fa-pinterest-p"}))))))}),ce=Object(s.b)(null,{closeInputPage:function(){return{type:v}}})(function(e){var t=e.closeInputPage;return i.a.createElement("div",{className:"page page--input drawer"},i.a.createElement("div",{className:"page__container"},i.a.createElement(ne,{className:"btn btn--back btn--icon",onClick:t},i.a.createElement("i",{className:"fas fa-arrow-left"})," Go back"),i.a.createElement("h2",{className:"page__heading"},"INPUT"),i.a.createElement("div",{className:"page__content"},"This is input page")))}),le=Object(s.b)(null,{closeListPage:function(){return{type:O}}})(function(e){var t=e.closeListPage;return i.a.createElement("div",{className:"page page--list drawer"},i.a.createElement("div",{className:"page__container"},i.a.createElement(ne,{className:"btn btn--back btn--icon",onClick:t},i.a.createElement("i",{className:"fas fa-arrow-left"})," Go back"),i.a.createElement("h2",{className:"page__heading"},"LIST"),i.a.createElement("div",{className:"page__content"},"This is list page")))}),re=Object(s.b)(null,{closeSliderPage:function(){return{type:k}}})(function(e){var t=e.closeSliderPage;return i.a.createElement("div",{className:"page page--slider drawer"},i.a.createElement("div",{className:"page__container"},i.a.createElement(ne,{className:"btn btn--back btn--icon",onClick:t},i.a.createElement("i",{className:"fas fa-arrow-left"})," Go back"),i.a.createElement("h2",{className:"page__heading"},"SLIDER"),i.a.createElement("div",{className:"page__content"},"This is slider page")))}),se=Object(s.b)(null,{closeUploadPage:function(){return{type:A}}})(function(e){var t=e.closeUploadPage;return i.a.createElement("div",{className:"page page--upload drawer"},i.a.createElement("div",{className:"page__container"},i.a.createElement(ne,{className:"btn btn--back btn--icon",onClick:t},i.a.createElement("i",{className:"fas fa-arrow-left"})," Go back"),i.a.createElement("h2",{className:"page__heading"},"UPLOAD"),i.a.createElement("div",{className:"page__content"},"This is upload page")))}),oe=(a(56),function(e){function t(){var e,a;Object(S.a)(this,t);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(a=Object(I.a)(this,(e=Object(C.a)(t)).call.apply(e,[this].concat(i)))).state={},a}return Object(B.a)(t,e),Object(w.a)(t,[{key:"render",value:function(){var e=this.props,t=e.isActiveButtonPage,a=e.isActiveInputPage,n=e.isActiveListPage,c=e.isActiveSliderPage,l=e.isActiveUploadPage;return i.a.createElement("div",{className:"main-container"},i.a.createElement("div",{className:"page page--home"},i.a.createElement("header",{className:"header"},i.a.createElement(R,null)),i.a.createElement("main",{className:"main"},i.a.createElement(te,null)),i.a.createElement("footer",{className:"footer"},i.a.createElement(G,null))),i.a.createElement(T.a,{in:t,timeout:300,classNames:"drawer",unmountOnExit:!0},i.a.createElement(ie,null)),i.a.createElement(T.a,{in:a,timeout:300,classNames:"drawer",unmountOnExit:!0},i.a.createElement(ce,null)),i.a.createElement(T.a,{in:n,timeout:300,classNames:"drawer",unmountOnExit:!0},i.a.createElement(le,null)),i.a.createElement(T.a,{in:c,timeout:300,classNames:"drawer",unmountOnExit:!0},i.a.createElement(re,null)),i.a.createElement(T.a,{in:l,timeout:300,classNames:"drawer",unmountOnExit:!0},i.a.createElement(se,null)))}}]),t}(n.Component)),me=Object(s.b)(function(e){return{isActiveButtonPage:e.page.isActiveButtonPage,isActiveInputPage:e.page.isActiveInputPage,isActiveListPage:e.page.isActiveListPage,isActiveSliderPage:e.page.isActiveSliderPage,isActiveUploadPage:e.page.isActiveUploadPage}},null)(oe);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ue=Object(o.a)(),be=Object(r.createStore)(y,Object(m.composeWithDevTools)(Object(r.applyMiddleware)(ue)));ue.run(d),l.a.render(i.a.createElement(s.a,{store:be},i.a.createElement(me,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[38,1,2]]]);
//# sourceMappingURL=main.3c31efc5.chunk.js.map