
class Hospital {


     constructor(nombre, ciudad, listadoPacientes) {    

         this.nombre = nombre;
         this.ciudad = ciudad;
         this.listadoPacientes = listadoPacientes;
     } 
     getnombre() {
         return this.nombre;
     }

     setpaciente(nombre) {
        this.nombre = nombre;
    }

     getCiudad() {
        return this.ciudad;
    }

    setCiudad(ciudad) {
        this.ciudad = ciudad;
    }

    getlistadoPacientes() {
        return this.listadoPacientes;
    }

    setlistadoPacientess(listadoPacientes) {
        this.listadoPacientes = listadoPacientes;
    }

     mostrarPacientes() {
        console.log("Hospital: " + this.nombre + ", Ciudad: " + this.ciudad)
        for(let i=0;i<pacientesHospital.length;i++){
        let paciente = this.pacientesHospitalMadrid[i];
        paciente.mostrarPaciente();
        }
        }
         
 }
 

 class Paciente {
 

    constructor(dni, nombre, enfermedad,Tratamientos) {        

        this.dni = dni;
        this.nombre = nombre;
        this.enfermedad =  enfermedad;    
        this.Tratamientos = Tratamientos;
     }

     getdni(){
         return this.dni;
     }

     setdni(dni){
         this.dni = dni;
     }

    getnombre(){
        return this.nombre;
    }

    setnombre(nombre){
        this.nombre = nombre;
    }

    getenfermedad(){
        return this.enfermedad;
    }

    setenfermedad(enfermedad){
        this.enfermedad = enfermedad;
    }
    getlistadoTratamientos(){
        return this.Tratamientos;
    }
    setlistadoTratamientos(Tratamientos){
        this.Tratamientos = Tratamientos;
    }
mostrarPaciente(){
console.log("Nombre del paciente: "+this.nombre+" DNI "+this.dni+" Enfermedad: "+this.enfermedad)
for (let i=0;i<Paciente1.length;i++){
console.log(Paciente1[i]);
Tratamiento.mostrarTratamiento();
}
}

 }
 class Tratamiento{
 constructor(nombret, pauta, indicaciones) {        

        this.pauta = pauta;
        this.nombret = nombret;
        this.indicaciones =  indicaciones;
        
     }
     getnombre(){
        return this.nombre;
    }

    setnombret(nombre){
        this.nombre = nombre;
    }
    getpauta(){
        return this.pauta;
    }

    setpauta(pauta){
        this.pauta = pauta;
    }
    getindicaciones(){
        return this.indicaciones;
    }

    setindicaciones(indicaciones){
        this.indicaciones = indicaciones;
    }
    mostrarTratamientos(){
    console.log("Nombre Tratamiento"+this.nombre+"Pauta del tratamiento"+this.pauta+"Indicaciones del tratamiento"+this.indicaciones)
    }
 }

let Paciente1=new Array(3);
Paciente1[0]=new Tratamiento('Tratamiento 0','123','fyifyuoyu');
Paciente1[1]=new Tratamiento('Tratamiento 1','123','fyifyuoyu')
Paciente1[2]=new Tratamiento('Tratamiento 3','123','fyifyuoyu')

let Paciente2=new Array(3);
Paciente2[0]=new Tratamiento('Tratamiento 0','123','fyifyuoyu');
Paciente2[1]=new Tratamiento('Tratamiento 1','123','fyifyuoyu')
Paciente2[2]=new Tratamiento('Tratamiento 3','123','fyifyuoyu')

let pacientesHospital=new Array(2);
pacientesHospital[0]=new Paciente('123456789K','Ricky','alzheimer',Paciente1);
pacientesHospital[1]=new Paciente('511545455L 0','Morty','Cancer',Paciente2);
console.log(Paciente1);
console.log(Paciente2);
console.log(pacientesHospital);
