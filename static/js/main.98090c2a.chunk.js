(this["webpackJsonpbusiness-app"]=this["webpackJsonpbusiness-app"]||[]).push([[0],{52:function(e,n,t){e.exports=t(74)},57:function(e,n,t){},58:function(e,n,t){},74:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(43),c=t.n(o),i=(t(57),t(3)),u=t(7),l=(t(58),t(1)),s=t(2),m=t.n(s),f=t(5),d=t(30),p=t(31),b="https://frebi.willandskill.eu/",h=function(){function e(){Object(d.a)(this,e)}return Object(p.a)(e,[{key:"register",value:function(){var e=Object(f.a)(m.a.mark((function e(n,t,r,a,o,c){var i,u;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i={firstName:n,lastName:t,email:r,password:a,organisationName:o,organisationKind:c},u="".concat(b,"auth/users/"),e.abrupt("return",fetch(u,{method:"POST",headers:this.getPublicHeaders(),body:JSON.stringify(i)}));case 3:case"end":return e.stop()}}),e,this)})));return function(n,t,r,a,o,c){return e.apply(this,arguments)}}()},{key:"activateUser",value:function(){var e=Object(f.a)(m.a.mark((function e(n,t,r){var a,o;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(b,"auth/users/activate/"),o={uid:n,token:t},e.abrupt("return",fetch(a,{method:"POST",signal:r,headers:this.getPublicHeaders(),body:JSON.stringify(o)}));case 3:case"end":return e.stop()}}),e,this)})));return function(n,t,r){return e.apply(this,arguments)}}()},{key:"getLoginUser",value:function(){var e=Object(f.a)(m.a.mark((function e(){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(b,"api/v1/me"),e.abrupt("return",fetch(n,{method:"GET",headers:this.getPrivateHeaders()}));case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"login",value:function(){var e=Object(f.a)(m.a.mark((function e(n,t){var r,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(b,"api-token-auth/"),a={email:n,password:t},e.abrupt("return",fetch(r,{method:"POST",headers:this.getPublicHeaders(),body:JSON.stringify(a)}));case 3:case"end":return e.stop()}}),e,this)})));return function(n,t){return e.apply(this,arguments)}}()},{key:"getCustomerList",value:function(){var e=Object(f.a)(m.a.mark((function e(){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(b,"api/v1/customers"),e.abrupt("return",fetch(n,{headers:this.getPrivateHeaders()}));case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getCustomer",value:function(){var e=Object(f.a)(m.a.mark((function e(n){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(b,"api/v1/customers/").concat(n),e.abrupt("return",fetch(t,{headers:this.getPrivateHeaders()}));case 2:case"end":return e.stop()}}),e,this)})));return function(n){return e.apply(this,arguments)}}()},{key:"createCustomer",value:function(){var e=Object(f.a)(m.a.mark((function e(n){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(b,"api/v1/customers"),e.abrupt("return",fetch(t,{method:"POST",headers:this.getPrivateHeaders(),body:JSON.stringify(n)}));case 2:case"end":return e.stop()}}),e,this)})));return function(n){return e.apply(this,arguments)}}()},{key:"deleteCustomer",value:function(){var e=Object(f.a)(m.a.mark((function e(n){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(b,"api/v1/customers/").concat(n,"/ "),e.abrupt("return",fetch(t,{method:"DELETE",headers:this.getPrivateHeaders()}));case 2:case"end":return e.stop()}}),e,this)})));return function(n){return e.apply(this,arguments)}}()},{key:"editCustomerInfo",value:function(){var e=Object(f.a)(m.a.mark((function e(n,t){var r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(b,"api/v1/customers/").concat(n,"/ "),e.abrupt("return",fetch(r,{method:"PUT",headers:this.getPrivateHeaders(),body:JSON.stringify(t)}));case 2:case"end":return e.stop()}}),e,this)})));return function(n,t){return e.apply(this,arguments)}}()},{key:"setToken",value:function(e){localStorage.setItem("BUSINESS_TOKEN",e)}},{key:"getToken",value:function(){return localStorage.getItem("BUSINESS_TOKEN")}},{key:"deleteToken",value:function(){localStorage.setItem("BUSINESS_TOKEN","")}},{key:"getPublicHeaders",value:function(){return{"Content-Type":"application/json"}}},{key:"getPrivateHeaders",value:function(){return{"Content-Type":"application/json",Authorization:"Bearer ".concat(this.getToken())}}}]),e}(),g=t(16),v=t(26),E=t(4);function O(){var e=Object(i.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 300px;\n  margin: 0.5rem auto;\n\n  p {\n    color: red;\n    text-align: left;\n    margin: 0 0 0.5rem;\n  }\n"]);return O=function(){return e},e}function j(){var e=Object(i.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  flex-basis: 1;\n  text-align: left;\n\n  label {\n    padding-bottom: 10px;\n  }\n  input {\n    height: 25px;\n  }\n"]);return j=function(){return e},e}var w=E.c.div(j()),y=E.c.div(O()),N=function(e){var n=e.value,t=e.placeholder,r=e.register,o=e.errors;return a.a.createElement(y,null,a.a.createElement(w,null,a.a.createElement("label",{htmlFor:n},t),a.a.createElement("input",{ref:r,id:n,type:n,name:n,errors:o[n]})),o[n]&&a.a.createElement("p",null,o[n].message))};function x(){var e=Object(i.a)(["\n  background: #32425b;\n  width: 50vw;\n  min-width: 400px;\n  margin: auto;\n  border-radius: 5px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n\n  label {\n    color: #e1e5e8;\n  }\n\n  input {\n    height: 35px;\n    border: 1px #fff solid;\n    border-radius: 4px;\n    background-color: #32425b;\n    color: white;\n\n    &:hover {\n      background-color: #4b484f;\n    }\n  }\n\n  button {\n    background-color: #1ed5b9;\n    width: 300px;\n    color: #fff;\n    font-weight: 400;\n    padding: 0.5rem;\n    font-size: 1rem;\n    margin-top: 1rem;\n  }\n  ","\n"]);return x=function(){return e},e}function k(){var e=Object(i.a)(["\n  margin-top: 2rem;\n  padding: 2rem 0;\n  position: relative;\n\n  button {\n    &:hover {\n      background-color: #2591ff;\n      color: #260d0d;\n    }\n  }\n"]);return k=function(){return e},e}function S(){var e=Object(i.a)(["\n  padding: 1rem 2rem;\n  width: 40vw;\n  position: relative;\n  position: absolute;\n  top: 6vh;\n  left: 50%;\n  transform: translateX(-50%);\n\n  button {\n    margin-top: 0;\n  }\n"]);return S=function(){return e},e}function T(){var e=Object(i.a)(["\n  padding: 2rem 3rem 4rem;\n"]);return T=function(){return e},e}function C(){var e=Object(i.a)(['\n  display: flex;\n  flex-direction: column;\n\n  h2 {\n    font-family: "Pacifico", cursive;\n    font-size: 3rem;\n    margin-bottom: 0;\n  }\n\n  .form-title {\n    font-family: "Pacifico", cursive;\n    font-size: 1rem;\n    margin-bottom: 5px;\n  }\n']);return C=function(){return e},e}var P=E.c.div(C()),A=Object(E.b)(T()),z=Object(E.b)(S()),I=Object(E.b)(k()),U=E.c.form(x(),(function(e){return e.customer?z:e.update?I:A}));function H(){var e=Object(i.a)(['\n  padding: 3px 10px;\n  border-radius: 2px;\n  border: none;\n  font-family: "PT Sans Narrow", sans-serif;\n\n  &:hover {\n    color: white;\n  }\n\n  ',";\n"]);return H=function(){return e},e}function M(){var e=Object(i.a)(["\n  background-color: #2591ff;\n  color: white;\n"]);return M=function(){return e},e}function L(){var e=Object(i.a)(["\n  background-color: #1ed5b9;\n  color: white;\n  margin-left: 2rem;\n  padding: 5px 15px;\n  margin-left: 2rem;\n  font-size: 1.2rem;\n\n  &:hover {\n    background-color: white;\n    color: #f15789;\n  }\n"]);return L=function(){return e},e}function B(){var e=Object(i.a)(["\n  padding: 1rem;\n  border-radius: 5px;\n  border: 1px #00000030 solid;\n  margin-top: 1rem;\n  font-size: 1rem;\n\n  &:hover {\n    color: #fff6e1;\n    background-color: #2591ff;\n  }\n"]);return B=function(){return e},e}var F=E.c.button(B()),R=Object(E.b)(L()),q=Object(E.b)(M()),D=E.c.button(H(),(function(e){return e.logout?R:e.login?q:void 0})),K=t(11),J=K.b().shape({name:K.c().min(1,"Must be at least 1 character").max(50,"Maxmum 50 characters").required("Required"),organisationNr:K.c().trim().max(30,"Maxmum characters 30"),vatNr:K.c().trim().matches(/^se\d{10}$/i,"SE + 10 digits: SE1234567890").required("Required"),reference:K.c().trim().max(50,"Maxmum 50 characters"),paymentTerm:K.c().matches(/^(\d|\d{1,9}|1\d{1,9}|20\d{8}|213\d{7}|2146\d{6}|21473\d{5}|214747\d{4}|2147482\d{3}|21474835\d{2}|214748364[0-7])$/,"Input a number between 0 and 2147483647").required("Required"),website:K.c().trim().matches(/((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,"Enter correct url!").max(50,"Maxmum 50 characters"),email:K.c().email("Invalid format email-address").max(254,"Maxmum 254 characters"),phoneNumber:K.c().matches(/^(?=(.*\d){8})[a-zA-Z\d]{10,20}$/,"Minmun 10, Maxmum 20 digital")}),Y=K.b().shape({firstName:K.c().min(1,"Must be at least 1 character").max(30,"Maxmum 50 characters."),lastName:K.c().min(1,"Must be at least 1 character").max(30,"Maxmum 50 characters."),email:K.c().email("Invalid format email-address").max(254,"Maxmum 254 characters").required("Required"),password:K.c().required("No password provided.").min(1,"At least 1 character.").matches(/^(?=.*\d)(?=.*[a-z])(?=.*[!.-])(?=.*[a-zA-Z]).{8,}$/,"Password needs to contain at least 1 number, 1 char and 1 of (! , -)"),organisationName:K.c(),organisationKind:K.a().oneOf(["0","1","2"])}),$=new h,Z=function(){var e=Object(r.useState)(""),n=Object(l.a)(e,2),t=n[0],o=n[1],c=Object(r.useState)(!1),i=Object(l.a)(c,2),u=i[0],s=i[1],m=Object(g.c)({resolver:Object(v.a)(Y)}),f=m.register,d=m.handleSubmit,p=m.errors;return a.a.createElement(P,null,a.a.createElement("h2",null,"Register"),a.a.createElement("p",{className:"form-title"},"Enter Details to register:"),!u&&a.a.createElement(U,{onSubmit:d((function(e){var n=e.firstName,t=e.lastName,r=e.email,a=e.password,c=e.organisationName,i=e.organisationKind;$.register(n,t,r,a,c,i).then((function(e){return e.json()})).then((function(e){s(!0),o(r)}))}))},[["firstName","First Name:"],["lastName","Last Name:"],["email","Email:"],["password","Password:"],["organisationName","Organisation Name:"],["organisationKind","Organisation Kind:"]].map((function(e,n){var t=Object(l.a)(e,2),r=t[0],o=t[1];return a.a.createElement(N,{key:"new-customer-".concat(n),value:r,placeholder:o,register:f,errors:p})})),a.a.createElement(F,{type:"submit"},"Register a new user")),u&&a.a.createElement("p",null,"Please check your ",a.a.createElement("strong",null,t)," email for activate link to continue login"))};function G(){var e=Object(i.a)(["\n  body {\n    font-family: 'Lato', sans-serif;\n    background: rgb(80,126,177);\n    background: linear-gradient(150deg, rgba(80,126,177,1) 0%, rgba(55,107,209,1) 8%, rgba(203,193,219,1) 35%, rgba(234,242,249,1) 68%, rgba(194,255,241,1) 85%, rgba(246,249,252,1) 100%);\n\n    @media screen and (max-width: 800px)  {\n      // padding: 10px;\n    }\n  }\n\n  h1 {\n    margin: 0;\n    padding: 3rem 0 1rem;\n  }\n\n  h2 {\n    margin: 0;\n  }\n  \n  a {\n    text-decoration: none;\n    color: midnightblue;\n    &:hover {\n      color: purple;\n    }\n  }\n\n  * {\n    box-sizing: border-box;\n  }\n\n  button {\n    cursor: pointer;\n    &:hover {\n      background-color: #1ED5B9;\n      transition: background-color 100ms ease-in-out;\n    }\n    transition: background-color 100ms ease-in-out;\n  }\n\n  svg {\n    position: absolute;\n    right: 17px;\n    font-size: 25px;\n    filter: invert(99%) sepia(1%) saturate(6218%) hue-rotate(189deg)\n      brightness(119%) contrast(100%);\n    &:hover {\n      cursor: pointer;\n      opacity: 0.7;\n      transform: scale(1.2);\n    }\n  }\n"]);return G=function(){return e},e}var V=Object(E.a)(G()),W=t(37);function _(){var e=Object(i.a)(["\n  display: flex;\n  flex-direction: column;\n  text-align: left;\n  width: 50vw;\n  margin: 2rem auto 0;\n  background-color: #61dafb30;\n  padding: 1rem 4rem 2rem;\n\n  div {\n    display: flex;\n\n    button {\n      &:first-of-type {\n        margin-right: 5px;\n      }\n    }\n  }\n\n  button {\n    width: 100%;\n    padding: 0.5rem;\n    font-size: 1rem;\n    margin-top: 1rem;\n  }\n"]);return _=function(){return e},e}var X=E.c.div(_()),Q=function(e){var n=e.register,t=e.nameString,r=e.placeholder,o=e.setValue,c=e.value,i=e.errors;return a.a.createElement(y,null,a.a.createElement(w,null,a.a.createElement("label",{htmlFor:t},r),a.a.createElement("input",{ref:n,id:t,type:t,name:t,defaultValue:c,onChange:function(e){return o(e.currentTarget.value)},errors:i[t]})),i[t]&&a.a.createElement("p",null,i[t].message))},ee=t(33);function ne(){var e=Object(i.a)(['\n  h1 {\n    font-family: "Pacifico", cursive;\n    font-size: 3rem;\n    color: crimson;\n  }\n\n  .user-info {\n    font-size: 1.3rem;\n\n    span {\n      font-family: "Pacifico", cursive;\n      margin-left: 5px;\n      &:first-of-type {\n        margin-right: 10px;\n      }\n    }\n  }\n\n  .customer-number-info {\n    font-size: 1.3rem;\n    strong {\n      margin-left: 5px;\n    }\n  }\n']);return ne=function(){return e},e}var te=E.c.div(ne()),re=new h,ae=function(e){var n=e.user,t=Object(u.f)();return a.a.createElement(te,null,a.a.createElement("h1",null,"Welcome to Your Awesome Business App!"),a.a.createElement("div",{className:"user-info"},a.a.createElement("strong",null,"Name: "),a.a.createElement("span",null,n.firstName," ",n.lastName),a.a.createElement("strong",null,"E-mail: ")," ",a.a.createElement("span",null,n.email),a.a.createElement(D,{logout:!0,onClick:function(){re.deleteToken(),t.push("/")}},"Logout")))},oe=Object(r.createContext)({}),ce=function(e){var n=e.children,t=Object(r.useState)([]),o=Object(l.a)(t,2),c=o[0],i=o[1],u=Object(r.useState)(""),s=Object(l.a)(u,2),m=s[0],f=s[1],d=Object(r.useState)(""),p=Object(l.a)(d,2),b=p[0],h=p[1];return a.a.createElement(oe.Provider,{value:{customers:c,setCustomers:i,user:m,setUser:f,customerNr:b,setCustomerNr:h}},n)},ie=new h,ue=function(){var e=Object(u.g)().id,n=Object(r.useContext)(oe),t=n.user,o=n.setUser,c=Object(r.useState)(""),i=Object(l.a)(c,2),s=i[0],m=i[1],f=Object(r.useState)(""),d=Object(l.a)(f,2),p=d[0],b=d[1],h=Object(r.useState)(""),E=Object(l.a)(h,2),O=E[0],j=E[1],w=Object(r.useState)(""),y=Object(l.a)(w,2),N=y[0],x=y[1],k=Object(r.useState)(""),S=Object(l.a)(k,2),T=S[0],C=S[1],P=Object(r.useState)(""),A=Object(l.a)(P,2),z=A[0],I=A[1],H=Object(r.useState)(""),M=Object(l.a)(H,2),L=M[0],B=M[1],F=Object(r.useState)(""),R=Object(l.a)(F,2),q=R[0],K=R[1],Y=Object(r.useState)(""),$=Object(l.a)(Y,2),Z=$[0],G=$[1],V=Object(u.f)(),_=Object(r.useState)(!0),ne=Object(l.a)(_,2),te=ne[0],re=ne[1],ce=Object(r.useState)(!1),ue=Object(l.a)(ce,2),le=ue[0],se=ue[1],me=function(){ie.getCustomer(e).then((function(e){return e.json()})).then((function(n){var t=n.results.filter((function(n){return n.id===+e})),r=Object(l.a)(t,1)[0];b(r.email),j(r.name),x(r.organisationNr),C(r.paymentTerm),I(r.phoneNumber),B(r.reference),K(r.vatNr),G(r.website),re(!1),m(r)}))};Object(r.useEffect)((function(){ie.getLoginUser().then((function(e){return e.json()})).then((function(e){var n=e.email,t=e.firstName,r=e.lastName;return o({email:n,firstName:t,lastName:r})})),me()}),[]);var fe=function(){re(!1),se(!1),me()},de=Object(g.c)({resolver:Object(v.a)(J)}),pe=de.register,be=de.handleSubmit,he=de.errors,ge=function(){se(!1);var n=Object(W.a)(Object(W.a)({},s),{},{email:p,name:O,organisationNr:N,paymentTerm:T,phoneNumber:z,reference:L,vatNr:q,website:Z});return ie.editCustomerInfo(e,n).then((function(e){return e.json()}))},ve=[["name","Name *",j,O],["organisationNr","organisationNr *",j,O],["vatNr","vatNr *",K,q],["reference","reference *",B,L],["paymentTerm","paymentTerm *",C,T],["website","website *",G,Z],["email","email *",b,p],["phoneNumber","phoneNumber *",I,z]],Ee=function(){return a.a.createElement(U,{update:!0,onSubmit:be(ge)},a.a.createElement(ee.a,{onClick:fe}),ve.map((function(e,n){var t=Object(l.a)(e,4),r=t[0],o=t[1],c=t[2],i=t[3];return a.a.createElement(Q,{key:"customer-detail-".concat(n),nameString:r,placeholder:o,setValue:c,value:i,register:pe,errors:he})})),a.a.createElement(D,{type:"submit"},"Update"))};return a.a.createElement("div",null,a.a.createElement(ae,{user:t}),!te&&!le&&a.a.createElement("h3",{className:"detail-page-h3-title"},"Customer Information Details:"),le&&a.a.createElement("h3",{className:"detail-page-h3-title"},"Editing Customer Information:"),!te&&a.a.createElement(D,{onClick:function(){V.push("/home")}},"Go back to HomePage"),!te&&!le&&a.a.createElement(X,null,a.a.createElement("p",null,a.a.createElement("strong",null,"ID: "),e),a.a.createElement("p",null,a.a.createElement("strong",null,"Name:")," ",O),a.a.createElement("p",null,a.a.createElement("strong",null,"E-mail: "),p),a.a.createElement("p",null,a.a.createElement("strong",null,"Organisation Nr:")," ",N),a.a.createElement("p",null,a.a.createElement("strong",null,"Payment Term: "),T),a.a.createElement("p",null,a.a.createElement("strong",null,"Phone Number: "),z),a.a.createElement("p",null,a.a.createElement("strong",null,"Reference: "),L),a.a.createElement("p",null,a.a.createElement("strong",null,"Vat Nr: "),q),a.a.createElement("p",null,a.a.createElement("strong",null,"Website: "),Z),a.a.createElement("div",null,a.a.createElement(D,{onClick:function(){return function(e){ie.deleteCustomer(e),V.push("/home")}(e)}},"Delete"),a.a.createElement(D,{onClick:function(){return se(!0),void Ee()}},"Update"))),le&&Ee())};function le(){var e=Object(i.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  background-color: black;\n  opacity: 0.7;\n"]);return le=function(){return e},e}var se=new h,me=function(e){var n=e.showAddCustomerForm,t=e.setShowAddCustomerForm,r=e.setShowAddBtn,o=Object(g.c)({resolver:Object(v.a)(J)}),c=o.register,i=o.handleSubmit,u=o.errors;return n?a.a.createElement(a.a.Fragment,null,a.a.createElement(fe,null),a.a.createElement(U,{customer:!0,onSubmit:i((function(e){var n=e.name,a=e.organisationNr,o=e.vatNr,c=e.reference,i=e.paymentTerm,u=e.website,l=e.email,s=e.phoneNumber;se.createCustomer({name:n,organisationNr:a,vatNr:o,reference:c,paymentTerm:i,website:u,email:l,phoneNumber:s}).then((function(e){return e.json()})),r(!0),t(!1)}))},a.a.createElement(ee.a,{onClick:function(){r(!0),t(!1)}}),[["name","Name *"],["organisationNr","organisationNr *"],["vatNr","vatNr *"],["reference","reference *"],["paymentTerm","paymentTerm *"],["website","website *"],["email","email *"],["phoneNumber","phoneNumber *"]].map((function(e,n){var t=Object(l.a)(e,2),r=t[0],o=t[1];return a.a.createElement(N,{key:"new-customer-".concat(n),value:r,placeholder:o,register:c,errors:u})})),a.a.createElement(F,{type:"submit"},"Create a new customer"))):null},fe=E.c.div(le()),de=t(13),pe=t(12),be=(t(73),new h),he=function(){var e=Object(r.useContext)(oe),n=e.user,t=e.customers,o=e.customerNr,c=e.setUser,i=e.setCustomers,s=e.setCustomerNr,m=Object(r.useState)(!1),f=Object(l.a)(m,2),d=f[0],p=f[1],b=Object(r.useState)(!0),h=Object(l.a)(b,2),g=h[0],v=h[1],E=Object(u.f)();Object(r.useEffect)((function(){be.getToken()||E.push("/invalid"),be.getLoginUser().then((function(e){return e.json()})).then((function(e){var n=e.email,t=e.firstName,r=e.lastName;return c({email:n,firstName:t,lastName:r})})),O()}),[]);var O=function(){be.getCustomerList().then((function(e){return e.json()})).then((function(e){i(e.results),s(e.count)}))};Object(r.useEffect)((function(){var e=(new AbortController).signal;be.getCustomerList(e).then((function(e){return e.json()})).then((function(e){i(e.results),s(e.count)}))}),[t,o]);var j=function(){p(!0),v(!1)};return a.a.createElement("div",null,a.a.createElement(ae,{user:n}),0===o?a.a.createElement(a.a.Fragment,null,a.a.createElement("h3",null,"You don't have any customer."),g&&a.a.createElement(D,{onClick:j},"Add a new customer")):a.a.createElement(a.a.Fragment,null,a.a.createElement("p",{className:"customer-number-info"},"Your customers number is: ",a.a.createElement("strong",null,o)),t&&function(e){return a.a.createElement(pe.Table,null,a.a.createElement(pe.Thead,null,a.a.createElement(pe.Tr,null,a.a.createElement(pe.Th,null,"Name"),a.a.createElement(pe.Th,null,"Organisation Nr"),a.a.createElement(pe.Th,null,"Reference"),a.a.createElement(pe.Th,null,"Delete"))),a.a.createElement(pe.Tbody,null,e.sort((function(e,n){return e.id-n.id})).map((function(e,n){var t=e.name,r=e.organisationNr,o=e.reference,c=e.id;return a.a.createElement(pe.Tr,{key:"customer-review-".concat(n)},a.a.createElement(pe.Td,null,a.a.createElement(de.b,{to:"/home/".concat(c)},t)),a.a.createElement(pe.Td,null,a.a.createElement(de.b,{to:"/home/".concat(c)},r)),a.a.createElement(pe.Td,null,a.a.createElement(de.b,{to:"/home/".concat(c)},o)),a.a.createElement(pe.Td,null,a.a.createElement(D,{onClick:function(){!function(e){be.deleteCustomer(e)}(c)}},"Delete")))}))))}(t)),a.a.createElement("hr",null),10!==o&&g&&a.a.createElement(D,{onClick:j},"Add a new customer"),a.a.createElement(me,{showAddCustomerForm:d,setShowAddCustomerForm:p,setShowAddBtn:v}),10===o&&a.a.createElement("p",null,"You have reached maxmum customer amount, congrats!",a.a.createElement("span",{role:"img","aria-label":"ghost"},"\ud83d\udc7b")))};function ge(){var e=Object(i.a)(['\n  padding: 30vh 20vw;\n  font-family: "PT Sans Narrow", sans-serif;\n\n  h1 {\n    padding-bottom: 1.5rem;\n  }\n  div {\n    position: relative;\n\n    input,\n    label,\n    button {\n      width: 25vw;\n      min-width: 200px;\n      margin: auto;\n      margin-bottom: 1rem;\n      height: 2rem;\n      position: absolute;\n      left: 50%;\n      transform: translateX(-50%);\n    }\n\n    input {\n      &:first-child {\n        top: 0;\n      }\n\n      &:nth-child(2) {\n        top: 3rem;\n      }\n    }\n\n    button {\n      top: 6rem;\n    }\n  }\n']);return ge=function(){return e},e}var ve=E.c.form(ge());function Ee(){var e=Object(i.a)(["\n  color: red;\n"]);return Ee=function(){return e},e}var Oe=E.c.p(Ee()),je=function(){var e=Object(u.f)(),n=e.location.search,t=new URLSearchParams(n),o=Object(r.useState)(t.get("uid")),c=Object(l.a)(o,1)[0],i=Object(r.useState)(t.get("token")),s=Object(l.a)(i,1)[0],m=Object(r.useState)(null),f=Object(l.a)(m,2),d=f[0],p=f[1],b=Object(r.useState)(null),g=Object(l.a)(b,2),v=g[0],E=g[1],O=Object(r.useState)(null),j=Object(l.a)(O,2),y=j[0],N=j[1],x=Object(r.useState)(!0),k=Object(l.a)(x,2),S=k[0],T=k[1],C=new h;Object(r.useEffect)((function(){var e=new AbortController,n=e.signal;return C.activateUser(c,s,n).then((function(e){e.ok||T(!1)})),function(){e.abort()}}),[]);return a.a.createElement(ve,{onSubmit:function(n){n.preventDefault(),S?C.login(d,v).then((function(e){return e.json()})).then((function(n){var t=n.token;t?(C.setToken(t),e.push("/home")):N("Invalid Email Address or Password!")})):e.push("/invalid")}},S&&a.a.createElement("h1",null,"Your account is now activated. Please login to get your customer information."),!S&&a.a.createElement("h1",null,"Before you can login, you must activate your account with the link sent to your email address."),y&&a.a.createElement(Oe,null,y),a.a.createElement(w,null,a.a.createElement("input",{placeholder:"Email Address",onChange:function(e){p(e.target.value),N(null)}}),a.a.createElement("input",{placeholder:"Password",type:"password",onChange:function(e){E(e.target.value),N(null)}}),a.a.createElement(D,{login:!0,type:"submit"},"Login")))},we=t(51),ye=t(50);function Ne(){var e=Object(i.a)(["\n  display: flex;\n  /* place-self: center; */\n\n  img {\n    width: 40%;\n\n    @media screen and (min-width: 1300px) {\n      width: unset;\n    }\n  }\n"]);return Ne=function(){return e},e}var xe=function(e){Object(we.a)(t,e);var n=Object(ye.a)(t);function t(){return Object(d.a)(this,t),n.apply(this,arguments)}return Object(p.a)(t,[{key:"render",value:function(){return a.a.createElement(ke,null,a.a.createElement("div",null,a.a.createElement("img",{src:"https://i.imgur.com/Q2BAOd2.png",alt:"not-found-img-placeholder"}),a.a.createElement("p",{className:"text-center"},a.a.createElement("strong",null,"Please check your URL and try agian.",a.a.createElement("span",{role:"img","aria-label":"crying face"},"\ud83d\ude22"))),a.a.createElement("p",{className:"text-center"},a.a.createElement(de.b,{to:"/"},"Go back to HomePage"))))}}]),t}(a.a.Component),ke=E.c.div(Ne());function Se(){var e=Object(i.a)(['\n  padding: 30vh 20vw;\n  font-family: "PT Sans Narrow", sans-serif;\n\n  button {\n    width: 200px;\n    font-weight: 600;\n  }\n']);return Se=function(){return e},e}var Te=E.c.div(Se()),Ce=function(){var e=Object(u.f)();return a.a.createElement(Te,null,a.a.createElement("h1",null,"You need to login and activate your account with the link sent to your email address to get access to previous page."),a.a.createElement(F,{onClick:function(){e.push("/")}},"Go Home"))};function Pe(){var e=Object(i.a)(["\n  min-height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding-bottom: 2rem;\n"]);return Pe=function(){return e},e}var Ae=E.c.div(Pe());var ze=function(){return a.a.createElement(Ae,{className:"App"},a.a.createElement(V,null),a.a.createElement(u.c,null,a.a.createElement(u.a,{path:"/",exact:!0,component:Z}),a.a.createElement(u.a,{path:"/login",exact:!0,component:je}),a.a.createElement(u.a,{path:"/home",exact:!0,component:he}),a.a.createElement(u.a,{path:"/home/:id",exact:!0,component:ue}),a.a.createElement(u.a,{path:"/invalid",exact:!0,component:Ce}),a.a.createElement(u.a,{path:"*",component:xe})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(ce,null,a.a.createElement(de.a,null,a.a.createElement(ze,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[52,1,2]]]);
//# sourceMappingURL=main.98090c2a.chunk.js.map