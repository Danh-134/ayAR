webpackJsonp([1],{0:function(e,n,t){e.exports=t("cDNt")},cDNt:function(e,n,t){"use strict";function r(e){return a._28(0,[(e()(),a._14(0,null,null,1,"p",[],null,null,null,null,null)),(e()(),a._27(null,["\n  pattern-marker works!\n"])),(e()(),a._27(null,["\n"]))],null,null)}function o(e){return a._28(0,[(e()(),a._14(0,null,null,1,"a-pattern-marker",[],null,[[null,"click"]],function(e,n,t){var r=!0;if("click"===n){r=!1!==a._25(e,1).onClickHandler()&&r}return r},r,g)),a._12(114688,null,0,h,[f,m],null,null)],function(e,n){e(n,1,0)},null)}function i(e){return a._28(0,[(e()(),a._27(null,["\n    "])),(e()(),a._14(0,null,null,1,"p",[],null,null,null,null,null)),(e()(),a._27(null,["\n      app Works!\n    "])),(e()(),a._27(null,["\n    "])),(e()(),a._14(0,null,null,1,"a-pattern-marker",[["model","cube"]],null,[[null,"click"]],function(e,n,t){var r=!0;if("click"===n){r=!1!==a._25(e,5).onClickHandler()&&r}return r},r,g)),a._12(114688,null,0,h,[f,m],{model:[0,"model"]},null),(e()(),a._27(null,["\n  "]))],function(e,n){e(n,5,0,"cube")},null)}function l(e){return a._28(0,[(e()(),a._14(0,null,null,1,"a-root",[],null,null,null,i,v)),a._12(49152,null,0,d,[],null,null)],null,null)}Object.defineProperty(n,"__esModule",{value:!0});var a=t("/oeL"),u={production:!0},c=function(){function e(){}return e}(),d=function(){function e(){}return e.ctorParameters=function(){return[]},e}(),s=[""],_=[".portrait[_ngcontent-%COMP%]   canvas[_ngcontent-%COMP%]{-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:rotate(-90deg) translateX(-100%);transform:rotate(-90deg) translateX(-100%)}.desktop[_ngcontent-%COMP%]   canvas[_ngcontent-%COMP%]{-webkit-transform:scaleX(-1);transform:scaleX(-1)}"],f=function(){function e(){this.setMediaOptionDefaults={maxARVideoSize:320,cameraParam:"assets/Data/camera_para-iPhone 5 rear 640x480 1.0m.dat"}}return e.prototype.initAR=function(e){ARController&&ARController.getUserMediaThreeScene&&this.aRThreeOnLoad(e)},e.prototype.aRThreeOnLoad=function(e){ARController.getUserMediaThreeScene({maxARVideoSize:320,cameraParam:"assets/Data/camera_para-iPhone 5 rear 640x480 1.0m.dat",onSuccess:function(n,t,r){if("portrait"===t.orientation){var o=window.innerWidth/t.videoHeight*t.videoWidth,i=window.innerWidth;e.renderer.setSize(o,i),e.renderer.domElement.style.paddingBottom=o-i+"px"}else/Android|mobile|iPad|iPhone/i.test(navigator.userAgent)?e.renderer.setSize(window.innerWidth,window.innerWidth/t.videoWidth*t.videoHeight):(e.renderer.setSize(t.videoWidth,t.videoHeight),document.body.className+=" desktop");document.body.insertBefore(e.renderer.domElement,document.body.firstChild);var l=0,a=0;e.renderer.domElement.addEventListener("click",function(e){console.log("ev ",e),e.preventDefault(),a+=1},!1),t.loadMarker("assets/Data/patt.hiro",function(r){var o=t.createThreeMarker(r);o.add(e.model),n.scene.add(o)});var u=function(){n.process(),l+=.05*(a-e.model.rotation.z),e.model.rotation.z+=l,l*=.8,n.renderOn(e.renderer),requestAnimationFrame(u)};u()}})},e.ctorParameters=function(){return[]},e}(),m=function(){function e(){this.renderer=new THREE.WebGLRenderer({antialias:!0})}return e.prototype.getRenderer=function(){return this.renderer},e.prototype.createModel=function(e){return"sphere"===e?this.createSphere():"torus"===e?this.createTorus():this.createBox()},e.prototype.clicked=function(){},e.prototype.createSphere=function(){var e=new THREE.Mesh(new THREE.SphereGeometry(.5,8,8),new THREE.MeshNormalMaterial);return e.material.shading=THREE.FlatShading,e.position.z=.5,e},e.prototype.createBox=function(){var e=new THREE.Mesh(new THREE.BoxGeometry(1,1,1),new THREE.MeshNormalMaterial);return e.material.shading=THREE.FlatShading,e.position.z=.5,e},e.prototype.createTorus=function(){var e=new THREE.Mesh(new THREE.TorusGeometry(.3,.2,8,8),new THREE.MeshNormalMaterial);return e.material.shading=THREE.FlatShading,e.position.z=.5,e.rotation.x=Math.PI/2,e},e.ctorParameters=function(){return[]},e}(),h=function(){function e(e,n){this.service=e,this.three=n}return e.prototype.onClickHandler=function(e){this.three.clicked()},e.prototype.ngOnInit=function(){var e=this.three.createModel(this.model),n=this.three.getRenderer();this.service.initAR({model:e,renderer:n})},e.ctorParameters=function(){return[{type:f},{type:m}]},e}(),p=[_],g=a._11({encapsulation:0,styles:p,data:{}}),k=(a._9("a-pattern-marker",h,o,{model:"model"},{},[]),[s]),v=a._11({encapsulation:0,styles:k,data:{}}),w=a._9("a-root",d,l,{},{},[]),E=t("qbdv"),y=t("fc+i"),R=t("BkNc"),b=function(){function e(){}return e}(),M=a._10(c,[d],function(e){return a._23([a._24(512,a.k,a._7,[[8,[w]],[3,a.k],a.E]),a._24(5120,a.A,a._22,[[3,a.A]]),a._24(4608,E.i,E.h,[a.A]),a._24(5120,a.c,a._15,[]),a._24(5120,a.y,a._20,[]),a._24(5120,a.z,a._21,[]),a._24(4608,y.b,y.s,[E.c]),a._24(6144,a.Q,null,[y.b]),a._24(4608,y.e,y.f,[]),a._24(5120,y.c,function(e,n,t,r){return[new y.k(e),new y.o(n),new y.n(t,r)]},[E.c,E.c,E.c,y.e]),a._24(4608,y.d,y.d,[y.c,a.G]),a._24(135680,y.m,y.m,[E.c]),a._24(4608,y.l,y.l,[y.d,y.m]),a._24(6144,a.O,null,[y.l]),a._24(6144,y.p,null,[y.m]),a._24(4608,a.W,a.W,[a.G]),a._24(4608,y.g,y.g,[E.c]),a._24(4608,y.i,y.i,[E.c]),a._24(5120,R.a,R.u,[R.k]),a._24(4608,R.d,R.d,[]),a._24(6144,R.f,null,[R.d]),a._24(135680,R.m,R.m,[R.k,a.D,a.j,a.w,R.f]),a._24(4608,R.e,R.e,[]),a._24(5120,R.h,R.x,[R.v]),a._24(5120,a.b,function(e){return[e]},[R.h]),a._24(4608,f,f,[]),a._24(4608,m,m,[]),a._24(512,E.b,E.b,[]),a._24(1024,a.o,y.q,[]),a._24(1024,a.F,function(){return[R.q()]},[]),a._24(512,R.v,R.v,[a.w]),a._24(1024,a.d,function(e,n,t){return[y.r(e,n),R.w(t)]},[[2,y.h],[2,a.F],R.v]),a._24(512,a.e,a.e,[[2,a.d]]),a._24(131584,a._13,a._13,[a.G,a._8,a.w,a.o,a.k,a.e]),a._24(2048,a.g,null,[a._13]),a._24(512,a.f,a.f,[a.g]),a._24(512,y.a,y.a,[[3,y.a]]),a._24(1024,R.p,R.s,[[3,R.k]]),a._24(512,R.o,R.c,[]),a._24(512,R.b,R.b,[]),a._24(256,R.g,{},[]),a._24(1024,E.g,R.r,[E.k,[2,E.a],R.g]),a._24(512,E.f,E.f,[E.g]),a._24(512,a.j,a.j,[]),a._24(512,a.D,a.T,[a.j,[2,a.U]]),a._24(1024,R.i,function(){return[[]]},[]),a._24(1024,R.k,R.t,[a.g,R.o,R.b,E.f,a.w,a.D,a.j,R.i,R.g,[2,R.n],[2,R.j]]),a._24(512,R.l,R.l,[[2,R.p],[2,R.k]]),a._24(512,b,b,[]),a._24(512,c,c,[])])});u.production&&Object(a._2)(),Object(y.j)().bootstrapModuleFactory(M).catch(function(e){return console.log(e)})},gFIY:function(e,n){function t(e){return Promise.resolve().then(function(){throw new Error("Cannot find module '"+e+"'.")})}t.keys=function(){return[]},t.resolve=t,e.exports=t,t.id="gFIY"}},[0]);