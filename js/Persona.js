console.log("Hablalo mi rey");

class Persona{
    
    constructor(documento,nombres,email,contraseña,rol){

        this.documento= documento;
        this.nombres= nombres;
        this.email=email;
        this.contraseña=contraseña;
        this.rol= rol;
    }

    creaObjetos(){
        const documentoH= document.getElementById("documento").value;
        persona.documento= documentoH;
        const nombresH= document.getElementById("nombres").value;
        persona.nombres= nombresH;
        const emailH= document.getElementById("email").value;
        persona.email= emailH;
        const contraseñaH= document.getElementById("contraseña").value;
        persona.contraseña= contraseñaH;
        const rolH= document.getElementById("rol").value;
        persona.rol= rolH;
        persona.leaObjeto();
    }
    leaObjeto(){
        document.getElementById("tableclei").innerHTML += "<tr><td>" + persona.documento + "</td><td>" + persona.nombres + "</td><td>" + persona.email + "</td><td>" + persona.contraseña + "</td><td>" + persona.rol + "</td></tr>";
    }
}

// + "</td><td>" + persona.nombre + "</td><td>" + persona.email + "</td><td>" + persona.contraseña + "</td><td>" + persona.rol + 