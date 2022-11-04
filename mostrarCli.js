function llenarTabla{
	var tbody=document.querySelector("#tblCli tbody");
	tbody.innerHTML="";
	var aci=JSON.parse(localStorage.getItem("ci")),
		anom=JSON.parse(localStorage.getItem("nom")),
		aap=JSON.parse(localStorage.getItem("ap")),
		adir=JSON.parse(localStorage.getItem("dir")),
		atel=JSON.parse(localStorage.getItem("tel"));
	var ncantidadCli= aci.length;
		for(var i=0;i<ncantidadCli;i++){
			var fila=document.createElement("tr"),
			var celdaci=document.createElement("td"),
			var celdanom=document.createElement("td"),
			var celdaap=document.createElement("td"),
			var celdadir=document.createElement("td"),
			var celdatel=document.createElement("td");
			
			var nodotextoCi=document.createTextNode(aci[i]),
				nodotextoNom=document.createTextNode(anom[i]),
				nodotextoAp=document.createTextNode(aap[i]),
				nodotextoDir=document.createTextNode(adir[i]),
				nodotextoTel=document.createTextNode(atel[i]);
			
			
			celdaci.appendChild(nodotextoCi);
			celdanom.appendChild(nodotextoNom);
			celdaap.appendChild(nodotextoAp);
			celdadir.appendChild(nodotextoDir);	
			celdatel.appendChild(nodotextoTel);
			fila.appendChild(celdaci);
			fila.appendChild(celdanom);
			fila.appendChild(celdaap);
			fila.appendChild(celdadir);
			fila.appendChild(celdatel);
			
			tbody.appendChild(fila);
		}
}