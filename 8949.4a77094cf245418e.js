"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8949],{8949:(x,u,r)=>{r.r(u),r.d(u,{EmpsyCashPageModule:()=>j});var g=r(177),m=r(4341),s=r(9364),d=r(8986),p=r(467),h=r(8866),f=r(5312),e=r(4438),_=r(1626),P=r(4517);function C(i,l){if(1&i&&(e.j41(0,"ion-select-option",17),e.EFF(1),e.k0s()),2&i){const a=l.$implicit;e.Y8G("value",a),e.R7$(),e.JRh(a)}}function y(i,l){if(1&i){const a=e.RV6();e.j41(0,"ion-row",20)(1,"ion-col"),e.EFF(2),e.k0s(),e.j41(3,"ion-col"),e.EFF(4),e.k0s(),e.j41(5,"ion-col")(6,"ion-button",21),e.bIt("click",function(){e.eBV(a);const n=e.XpG().$implicit,o=e.XpG();return e.Njj(o.toggleDetalles(n))}),e.EFF(7),e.k0s()()()}if(2&i){const a=e.XpG().$implicit;e.R7$(2),e.JRh(a.fullname),e.R7$(2),e.JRh(a.name_raffle),e.R7$(3),e.SpI(" ",a.mostrarDetalles?"-":"+"," ")}}function E(i,l){1&i&&(e.qex(0),e.j41(1,"p",27),e.EFF(2,"Ticket Pagado"),e.k0s(),e.bVm())}function b(i,l){1&i&&(e.j41(0,"p",28),e.EFF(1,"Ticket Abonado"),e.k0s())}function k(i,l){if(1&i){const a=e.RV6();e.j41(0,"ion-button",15),e.bIt("click",function(){e.eBV(a);const n=e.XpG(2).$implicit,o=e.XpG();return e.Njj(o.Delete(n.id_ticket,n.status_ticket))}),e.nrm(1,"ion-icon",29),e.EFF(2," Eliminar "),e.k0s()}}function F(i,l){if(1&i){const a=e.RV6();e.j41(0,"ion-row",22)(1,"ion-col")(2,"ion-list")(3,"ion-item"),e.EFF(4),e.k0s(),e.j41(5,"ion-item"),e.EFF(6),e.nI1(7,"date"),e.k0s(),e.j41(8,"ion-item"),e.EFF(9),e.k0s(),e.j41(10,"ion-item"),e.EFF(11),e.k0s(),e.j41(12,"ion-item"),e.EFF(13),e.k0s(),e.j41(14,"ion-item"),e.EFF(15),e.k0s(),e.j41(16,"ion-item"),e.EFF(17),e.k0s(),e.j41(18,"ion-item"),e.DNE(19,E,3,0,"ng-container",23)(20,b,2,0,"ng-template",null,0,e.C5r),e.k0s(),e.j41(22,"ion-item"),e.DNE(23,k,3,0,"ion-button",24),e.j41(24,"ion-button",25),e.bIt("click",function(){e.eBV(a);const n=e.XpG().$implicit,o=e.XpG();return e.Njj(o.Routing(n.id_ticket))}),e.nrm(25,"ion-icon",26),e.EFF(26,"Control de Pagos"),e.k0s()()()()()}if(2&i){const a=e.sdS(21),t=e.XpG().$implicit,n=e.XpG();e.R7$(4),e.SpI("Cedula: ",t.address," "),e.R7$(2),e.SpI("Fecha Pagada: ",e.i5U(7,10,t.date_created,"dd/MM/yyyy"),""),e.R7$(3),e.SpI("Cantidad Recibida: ",t.amount_paid," $ "),e.R7$(2),e.SpI("Total a Pagar: ",t.amount_total," $ "),e.R7$(2),e.SpI("Registrado por: ",t.fullname_supervisor,""),e.R7$(2),e.SpI("Numeros Jugados: ",t.tickets_sold," "),e.R7$(2),e.SpI("Valor del Boleto: ",t.price_tickets," $"),e.R7$(2),e.Y8G("ngIf",t.amount_paid===t.amount_total)("ngIfElse",a),e.R7$(4),e.Y8G("ngIf","VED"!==n.userType)}}function R(i,l){if(1&i&&(e.j41(0,"div"),e.DNE(1,y,8,3,"ion-row",18)(2,F,27,13,"ion-row",19),e.k0s()),2&i){const a=l.$implicit;e.R7$(),e.Y8G("ngIf",0!==a.status_ticket),e.R7$(),e.Y8G("ngIf",a.mostrarDetalles)}}const v=[{path:"",component:(()=>{var i;class l{constructor(t,n,o,c){this.http=t,this.toastController=n,this.alertController=o,this.navCtrl=c,this.searchText="",this.selectedRaffle="",this.items=[],this.uniqueRaffleNames=[],this.filteredItems=[],this.clienteSeleccionado=null,this.clientesPorPagina=[],this.totalPaginas=9,this.paginaActual=1,this.clientesPorPaginaOpciones=[5,10,20],this.clientesPorPaginaSeleccionada=5,this.userType=null}ngOnInit(){this.analizarToken(),this.viewInfo(),this.analizarTipoUsuario()}viewInfo(){var t=this;return(0,p.A)(function*(){yield t.http.get(`${f.c.EmpsyRaffle}/sales/${t.id_supervisor}/${t.type_supervisor}`).toPromise().then(n=>{console.log(n),t.items=n.data.map(o=>({...o,mostrarDetalles:!1})),t.extractUniqueRaffleNames(),t.applyFilters()})})()}Routing(t){this.navCtrl.navigateRoot(["control-cash",{id_ticket:t}])}extractUniqueRaffleNames(){const t=new Set(this.items.map(n=>n.name_raffle));this.uniqueRaffleNames=Array.from(t)}applyFilters(){this.filteredItems=this.items.filter(t=>(!this.searchText||t.fullname.toLowerCase().includes(this.searchText.toLowerCase()))&&(!this.selectedRaffle||t.name_raffle===this.selectedRaffle)),this.calcularPaginas()}Delete(t,n){var o=this;return(0,p.A)(function*(){var I;yield(yield o.alertController.create({header:"Eliminar",message:"Eliminar Pago",buttons:[{text:"Cancelar",handler:()=>{}},{text:"Aceptar",handler:(I=(0,p.A)(function*(){o.http.post(`${f.c.EmpsyTickets}/activate/ticket/${t}/${n=0===n?1:0}`,{}).toPromise(),o.presentToast("Pago Eliminado Con Exito.."),setTimeout(()=>{location.reload()},2500)}),function(){return I.apply(this,arguments)})}]})).present()})()}presentToast(t){var n=this;return(0,p.A)(function*(){(yield n.toastController.create({message:t,duration:2e3,position:"top",color:"success"})).present()})()}anteriorPagina(){this.paginaActual>1&&(this.paginaActual--,this.calcularPaginas())}siguientePagina(){this.paginaActual<this.totalPaginas&&(this.paginaActual++,this.calcularPaginas())}calcularPaginas(){const t=(this.paginaActual-1)*this.clientesPorPaginaSeleccionada;this.clientesPorPagina=this.filteredItems.slice(t,t+this.clientesPorPaginaSeleccionada),this.totalPaginas=Math.ceil(this.filteredItems.length/this.clientesPorPaginaSeleccionada)}toggleDetalles(t){t.mostrarDetalles=!t.mostrarDetalles,this.items.forEach(n=>{n!==t&&(n.mostrarDetalles=!1)})}mostrarDetalles(t){this.clienteSeleccionado=t}analizarTipoUsuario(){const t=localStorage.getItem("Auth");if(t){const n=(0,h.s)(t);for(const o in n)if(n.hasOwnProperty(o)){if("id_seller"===o){this.userType="VED";break}if("id_boss"===o){this.userType="ADM";break}}}}analizarToken(){const t=localStorage.getItem("Auth");if(t){const n=(0,h.s)(t);for(const o in n)if(n.hasOwnProperty(o)){if("id_seller"===o){this.id_supervisor=n.id_seller,this.type_supervisor="VED";break}if("id_boss"===o){this.id_supervisor=n.id_boss,this.type_supervisor="ADM";break}}this.type_supervisor||console.log("No se encontraron campos id_seller ni id_boss en el token.")}else console.log("No se encontr\xf3 ning\xfan token en localStorage.")}}return(i=l).\u0275fac=function(t){return new(t||i)(e.rXU(_.Qq),e.rXU(s.K_),e.rXU(s.hG),e.rXU(P.q9))},i.\u0275cmp=e.VBU({type:i,selectors:[["app-empsy-cash"]],decls:46,vars:7,consts:[["abonado",""],[3,"translucent"],[1,"label-title"],["placeholder","Seleccionar RIFA",1,"custom-select",3,"ngModelChange","ionChange","ngModel"],[3,"value",4,"ngFor","ngForOf"],[2,"display","flex","align-items","center"],[2,"flex","1"],["position","floating"],["name","search-outline","color","dark"],["placeholder","Buscar...",1,"custom-search-input",3,"ngModelChange","ionChange","ngModel"],[1,"container"],[1,"tabla"],[1,"encabezado"],[4,"ngFor","ngForOf"],[1,"paginador"],["color","danger",3,"click"],["color","tertiary",3,"click"],[3,"value"],["class","datos",4,"ngIf"],["class","detalle",4,"ngIf"],[1,"datos"],[3,"click"],[1,"detalle"],[4,"ngIf","ngIfElse"],["color","danger",3,"click",4,"ngIf"],["color","primary",3,"click"],["name","cube-outline"],[1,"alert-butitle"],[1,"alert-subtitle"],["name","trash-outline"]],template:function(t,n){1&t&&(e.j41(0,"ion-header",1)(1,"ion-toolbar")(2,"ion-title"),e.EFF(3,"User"),e.k0s()()(),e.j41(4,"ion-content"),e.nrm(5,"br"),e.j41(6,"h1",2),e.EFF(7,"Cantidad de Ventas"),e.k0s(),e.nrm(8,"br"),e.j41(9,"ion-item")(10,"ion-select",3),e.mxI("ngModelChange",function(c){return e.DH7(n.selectedRaffle,c)||(n.selectedRaffle=c),c}),e.bIt("ionChange",function(){return n.applyFilters()}),e.DNE(11,C,2,2,"ion-select-option",4),e.k0s()(),e.nrm(12,"br"),e.j41(13,"div",5)(14,"ion-item",6)(15,"ion-label",7),e.nrm(16,"ion-icon",8),e.EFF(17,"Buscar Venta "),e.k0s(),e.j41(18,"ion-input",9),e.mxI("ngModelChange",function(c){return e.DH7(n.searchText,c)||(n.searchText=c),c}),e.bIt("ionChange",function(){return n.applyFilters()}),e.k0s()(),e.nrm(19,"br"),e.k0s(),e.nrm(20,"br"),e.j41(21,"div",10)(22,"ion-grid",11)(23,"ion-row",12)(24,"ion-col"),e.EFF(25,"Cliente"),e.k0s(),e.j41(26,"ion-col"),e.EFF(27,"Rifa Jugada"),e.k0s(),e.j41(28,"ion-col"),e.EFF(29,"Acciones"),e.k0s()(),e.DNE(30,R,3,2,"div",13),e.k0s()(),e.j41(31,"ion-grid")(32,"ion-row",14)(33,"ion-col")(34,"ion-button",15),e.bIt("click",function(){return n.anteriorPagina()}),e.EFF(35,"Anterior"),e.k0s()(),e.j41(36,"ion-col"),e.EFF(37),e.k0s(),e.j41(38,"ion-col")(39,"ion-button",16),e.bIt("click",function(){return n.siguientePagina()}),e.EFF(40,"Siguiente"),e.k0s()()()(),e.nrm(41,"br")(42,"br")(43,"br")(44,"br")(45,"br"),e.k0s()),2&t&&(e.Y8G("translucent",!0),e.R7$(10),e.R50("ngModel",n.selectedRaffle),e.R7$(),e.Y8G("ngForOf",n.uniqueRaffleNames),e.R7$(7),e.R50("ngModel",n.searchText),e.R7$(12),e.Y8G("ngForOf",n.clientesPorPagina),e.R7$(7),e.Lme("",n.paginaActual," de ",n.totalPaginas,""))},dependencies:[g.Sq,g.bT,m.BC,m.vS,s.Jm,s.hU,s.W9,s.lO,s.eU,s.iq,s.$w,s.uz,s.he,s.nf,s.ln,s.Nm,s.Ip,s.BC,s.ai,s.Je,s.Gw,g.vh],styles:['@charset "UTF-8";.tabla[_ngcontent-%COMP%]{width:100%}.encabezado[_ngcontent-%COMP%]{background-color:#f0f0f0;font-weight:700;padding:10px;border-bottom:1px solid #ccc;text-align:center}.datos[_ngcontent-%COMP%]{padding:10px;border-bottom:1px solid #ccc;text-align:center;justify-content:center;align-items:center}.detalle[_ngcontent-%COMP%]{background-color:#f9f9f9;padding:10px;border-bottom:1px solid #ccc;justify-content:center;text-align:center;align-items:center}.custom-item[_ngcontent-%COMP%]{border-radius:8px;border:1px solid #ccc;overflow:hidden;background-color:#f9f9f9}.custom-label[_ngcontent-%COMP%]{color:#333}.alert-butitle[_ngcontent-%COMP%]{align-items:center;text-align:center;justify-content:center;font-size:20px;color:red;font-family:Roboto,sans-serif;font-weight:900;line-height:1}.alert-subtitle[_ngcontent-%COMP%]{align-items:center;text-align:center;justify-content:center;font-size:20px;color:#e6a824;font-family:Roboto,sans-serif;font-weight:900;line-height:1}.custom-select[_ngcontent-%COMP%]{border:none;background-color:transparent;color:#555;padding:8px 12px;font-size:16px}.custom-select[_ngcontent-%COMP%]:after{border-color:#555 transparent transparent}.custom-select-icon[_ngcontent-%COMP%]{color:#555}.label-title[_ngcontent-%COMP%]{text-align:center;font-size:25px;color:#000;font-family:Poppins,sans-serif;font-weight:900;margin-top:10px;line-height:1}ion-icon[_ngcontent-%COMP%]{margin-right:10px;color:#1d1db6}.paginador[_ngcontent-%COMP%]{justify-content:center;align-items:center;text-align:center}ion-icon[_ngcontent-%COMP%]{margin-right:5px;color:#fff;font-size:1.2em}']}),l})()}];let T=(()=>{var i;class l{}return(i=l).\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.$C({type:i}),i.\u0275inj=e.G2t({imports:[d.iI.forChild(v),d.iI]}),l})(),j=(()=>{var i;class l{}return(i=l).\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.$C({type:i}),i.\u0275inj=e.G2t({imports:[g.MD,m.YN,s.bv,T]}),l})()}}]);