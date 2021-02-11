let liste=[];
let x=0;
function array() {
    if (document.getElementById("fornavn").value !== "" && document.getElementById("etternavn").value !== ""&&document.getElementById("tlf").value !== ""&&
        document.getElementById("antall").value !== ""&& document.getElementById("post").value !== "") {

        let v = {
            navn: document.getElementById("fornavn").value,
            etter: document.getElementById("etternavn").value,
            tlf: document.getElementById("tlf").value,
            antall: document.getElementById("antall").value,
            epost: document.getElementById("post").value,
            film: document.getElementById("test").value
        }
        liste[x] = v
        x++;
        document.getElementById("fornavn").value = "";
        document.getElementById("etternavn").value = "";
        document.getElementById("tlf").value = "";
        document.getElementById("antall").value = "";
        document.getElementById("post").value = "";
        document.getElementById("test").value = "";


        let e = "<table><tr>"
        e += "<th>Fornavn</th><th>Etternavn</th><th>Epost</th><th>Tlf</th><th>Antall</th><th>Film</th>"
            + "</tr>";

        for (let y = 0; y < liste.length; y++) {
            e += "<td>" + liste[y].navn + "</td><td>" + liste[y].etter + "</td><td>"
                + liste[y].epost + "</td><td>" + liste[y].tlf + "</td><td>" + liste[y].antall + "</td><td>" + liste[y].film
                + "</td>";
            e += "</tr>"
        }
        e += "</table>"
        document.getElementById("hah").innerHTML = e;
        document.getElementById("feil").innerHTML="";
    }
    else {
        document.getElementById("feil").innerHTML= "Fyll inn alle felten";
    }
}

function show() {
    liste.splice(0, liste.length);
    x=0;
    document.getElementById("hah").innerHTML = ""
    document.getElementById("feil").innerHTML=""
}
