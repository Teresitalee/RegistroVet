(this.webpackJsonpregistrovet=this.webpackJsonpregistrovet||[]).push([[0],{14:function(e,a,t){e.exports=t(24)},19:function(e,a,t){},21:function(e,a,t){},24:function(e,a,t){"use strict";t.r(a);var c=t(0),n=t.n(c),r=t(12),l=t.n(r),s=(t(19),t(20),t(8)),o=t(2),m=t(3),i=t(6),u=t(4),h=t(7),d=(t(21),function(e){var a=e.titulo;return n.a.createElement("header",null,n.a.createElement("h3",{className:"text-center mt-4 text-white"}," ",a," "))}),p=t(5),v=t(1),b=t(13),E=t.n(b),N={cita:{mascota:"",propietario:"",fecha:"",hora:"",sintomas:""},error:!1},f=function(e){function a(){var e,t;Object(o.a)(this,a);for(var c=arguments.length,n=new Array(c),r=0;r<c;r++)n[r]=arguments[r];return(t=Object(i.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(n)))).state=Object(v.a)({},N),t.handlechange=function(e){t.setState({cita:Object(v.a)({},t.state.cita,Object(p.a)({},e.target.name,e.target.value))})},t.handleSubmit=function(e){e.preventDefault();var a=t.state.cita,c=a.mascota,n=a.propietario,r=a.fecha,l=a.hora,s=a.sintomas;if(""!==c&&""!==n&&""!==r&&""!==l&&""!==s){var o=Object(v.a)({},t.state.cita);o.id=E()(),t.props.crearNuevaCita(o),t.setState(Object(v.a)({},N))}else t.setState({error:!0})},t}return Object(h.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this.state.error;return n.a.createElement("div",{className:"card mt-4 py-4 mb-5"},n.a.createElement("div",{className:"card-body"},n.a.createElement("h5",{className:"card-title text-center mb-5 text-bold"},"Ficha de Ingreso Mascota"),e?n.a.createElement("div",{className:"alert alert-warning mt-2 mb-5 text-center"},"Todos los campos son obligatorios"):null,n.a.createElement("form",{onSubmit:this.handleSubmit},n.a.createElement("div",{className:"from-group row mx-auto"},n.a.createElement("label",{className:"col-sm-4 col-lg-3 col-form-label"},"Nombre Mascota"),n.a.createElement("div",{className:"col-sm-8 col-lg-8"},n.a.createElement("input",{type:"text",className:"form-control",placeholder:"Ingrese un nombre",name:"mascota",onChange:this.handlechange,value:this.state.cita.mascota}))),n.a.createElement("div",{className:"from-group row mt-3 mx-auto"},n.a.createElement("label",{className:"col-sm-4 col-lg-3 col-form-label"},"Nombre Due\xf1o"),n.a.createElement("div",{className:"col-sm-8 col-lg-8"},n.a.createElement("input",{type:"text",className:"form-control",placeholder:"Ingrese nombre completo",name:"propietario",onChange:this.handlechange,value:this.state.cita.propietario}))),n.a.createElement("div",{className:"from-group row mt-3 mx-auto"},n.a.createElement("label",{className:"col-sm-4 col-lg-3 col-form-label"},"Fecha"),n.a.createElement("div",{className:"col-sm-6 col-lg-3"},n.a.createElement("input",{type:"date",className:"form-control",name:"fecha",onChange:this.handlechange,value:this.state.cita.fecha})),n.a.createElement("label",{className:"col-sm-3 col-lg-2 col-form-label"},"Hora"),n.a.createElement("div",{className:"col-sm-6 col-lg-3"},n.a.createElement("input",{type:"time",className:"form-control",name:"hora",onChange:this.handlechange,value:this.state.cita.hora}))),n.a.createElement("div",{className:"from-group row mt-3 mx-auto"},n.a.createElement("label",{className:"col-sm-4 col-lg-3 col-form-label"},"S\xedntomas"),n.a.createElement("div",{className:"col-sm-6 col-lg-8"},n.a.createElement("textarea",{className:"form-control",name:"sintomas",placeholder:"sintomas o molestar de la mascota",onChange:this.handlechange,value:this.state.cita.sintomas}))),n.a.createElement("input",{type:"submit",className:"py-3 mt-4 btn btn-success btn-block",value:"Agregar cita"}))))}}]),a}(c.Component),g=function(e){var a=e.cita,t=e.eliminarCita;return n.a.createElement("div",{className:"mt-3"},n.a.createElement("div",{className:"mt-2"},n.a.createElement("h3",{className:"mt-2"},a.mascota),n.a.createElement("p",{className:"card-text"},n.a.createElement("span",null,"Nombre Due\xf1o : ")," ",a.propietario),n.a.createElement("p",{className:"card-text"},n.a.createElement("span",null,"Fecha : ")," ",a.fecha),n.a.createElement("p",{className:"card-text"},n.a.createElement("span",null,"Hora : ")," ",a.hora),n.a.createElement("p",{className:"card-text"},n.a.createElement("span",{className:"text-bold"},"Sintomas : "),a.sintomas),n.a.createElement("button",{className:"btn btn-danger",onClick:function(){return t(a.id)}},"Borrar \xd7")))},y=function(e){var a=e.citas,t=e.eliminarCita,c=0===Object.keys(a).lenght?"No Hay citas":"Administra tus citas aqui";return n.a.createElement("div",{className:"card mt-2 py-5"},n.a.createElement("div",{className:"card-body"},n.a.createElement("h4",{className:"card-title text-center mb-2"},c),n.a.createElement("div",{className:"list-cita"},a.map((function(e){return n.a.createElement(g,{key:e.id,cita:e,eliminarCita:t})})))))},x=function(e){function a(){var e,t;Object(o.a)(this,a);for(var c=arguments.length,n=new Array(c),r=0;r<c;r++)n[r]=arguments[r];return(t=Object(i.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(n)))).state={citas:[]},t.crearNuevaCita=function(e){var a=[].concat(Object(s.a)(t.state.citas),[e]);t.setState({citas:a})},t.eliminarCita=function(e){var a=Object(s.a)(t.state.citas).filter((function(a){return a.id!==e}));t.setState({citas:a})},t}return Object(h.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("citas");e&&this.setState({citas:JSON.parse(e)})}},{key:"componentDidUpdate",value:function(){localStorage.setItem("citas",JSON.stringify(this.state.citas))}},{key:"render",value:function(){return n.a.createElement("div",{className:"container"},n.a.createElement(d,{titulo:"Reserva m\xe9dica veterinaria"}),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-8 mx-auto"},n.a.createElement(f,{crearNuevaCita:this.crearNuevaCita})),n.a.createElement("div",{className:"mt-5 col-md-8 mx-auto mb-4"},n.a.createElement(y,{citas:this.state.citas,eliminarCita:this.eliminarCita}))))}}]),a}(c.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[14,1,2]]]);
//# sourceMappingURL=main.40179d09.chunk.js.map