var aCi=[],
	anom=[],
	aap=[],
	adir=[],
	atel=[];

var btnreg=document.querySelector("#boton");
btnreg.addEventListener("clic",registrarCli);
function registrarCli(){
	var nci=document.querySelector("#ci").value,
		snom=document.querySelector("#nom").value,
		sap=document.querySelector("#ap").value,
		sdir=document.querySelector("#dir").value,
		ntel=document.querySelector("#tel").value;
	aCi.push(nCi);
	anom.push(snom);
	aap.push(sap);
	adir.push(sdir);
	atel.push(ntel);
	
	localStorage.setItem("ci",JSON.stringify(aCi));
	localStorage.setItem("nom",JSON.stringify(anom));
	localStorage.setItem("ap",JSON.stringify(aap));
	localStorage.setItem("dir",JSON.stringify(adir));
	localStorage.setItem("tel",JSON.stringify(atel));
}
