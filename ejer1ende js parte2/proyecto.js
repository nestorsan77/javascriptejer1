// Defino la clase Aeropuerto
class Aeropuerto {

    // Constructor de la clase Aeropuerto
     constructor(nombre, ciudad, listadoVuelosDiarios) {    
         // Atributos del grupo.
         this.nombre = nombre;
         this.ciudad = ciudad;
         this.listadoVuelosDiarios = listadoVuelosDiarios;
     } 
     getNombre() {
         return this.nombre;
     }

     setNombre(nombre) {
        this.nombre = nombre;
    }

     getCiudad() {
        return this.ciudad;
    }

    setCiudad(ciudad) {
        this.ciudad = ciudad;
    }

    getlistadoVuelosDiarios() {
        return this.listadoVuelosDiarios;
    }

    setlistadoVuelosDiarios(listadoVuelosDiarios) {
        this.listadoVuelosDiarios = listadoVuelosDiarios;
    }

     /*comprobarVuelos(){
        for (let i =0; i< this.listadoVuelosDiarios; i++){
        this.listadoVuelosDiarios[i].comprobarhoras();
        }
     }*/

     mostrarDatos() {
         return "Nombre: " + this.nombre + ", Ciudad: " + this.ciudad + ", Listado de Vuelos: " + this.listadoVuelosDiarios;
     }
         
 }
 
 // Defino la clase Vuelo
 class Vuelo {
 
    // Constructor de la clase Vuelo
    constructor(codigo, horaSalida, horaLlegada) {        
        // Atributos de los vuelos.
        this.codigo = codigo;
        this.horaSalida = horaSalida;
        this.horaLlegada =  horaLlegada;        
     }

     getCodigo(){
         return this.codigo;
     }

     setCodigo(codigo){
         this.codigo = codigo;
     }

    getHoraSalida(){
        return this.horaSalida;
    }

    setHoraSalida(){
        this.horaSalida = this.horaSalida;
    }

    getHoraLlegada(){
        return this.horaLlegada;
    }

    setHoraLlegada(horaLlegada){
        this.horaLlegada = horaLlegada;
    }
     
     // Método para coger la hora de llegada.
    modificarHoraLlegada(nuevahora) {
         this.horaLlegada = nuevahora;
    }
     //Método para coger la hora de salida.
     modificarHoraSalida(nuevahora){
        this.horaSalida = nuevahora;
        return valor2;
     } 

     comprobarHoras(horaLlegada,HoraSalida){
        if (this.horaLlegada <= this.horaSalida){
            return true;
        } else {
            return false;
        }
    }

    mostrarDatos() {
        return super.mostrarDatos() + ", Codigo: " + this.codigo + ", Hora Salida: " + this.horaSalida + ", Hora Llegada: " + this.horaLlegada;
    }
 }

 function main(){
     //Creamos 5 vuelos.
     let vuelos = new Array(5);
     vuelos[0] = new Vuelo("12345", "20:30", "23:15");
     vuelos[1] = new Vuelo("98765", "20:20", "21:30");
     vuelos[2] = new Vuelo("22344", "13:00", "15:30");
     vuelos[3] = new Vuelo("44322", "08:25", "09:00");
     vuelos[4] = new Vuelo("55555", "11:45", "12:30");
     //Creamos 1 Aeropuero.
     let aerop = new Aeropuerto("aabbccdd", "Madrid", vuelos);
     //Mostrando datos mediante alert.
     var msg = "*Aeropuerto*\n";
     msg += "-Nombre: " + aerop.getNombre() + "\n-Ciudad: " + aerop.getCiudad();
     alert(msg);
     var msg2 = "*Listado de Vuelos*\n";
     for (i = 0; i < vuelos.length; i++){
         msg2 += "-Vuelo " + (i+1) + ":\n";
         msg2 += "  -Código vuelo: " + vuelos[i].getCodigo() + "\n";
         msg2 += "  -Hora de Salida: " + vuelos[i].getHoraSalida() + "\n";
         msg2 += "  -Hora de Llegada: " + vuelos[i].getHoraLlegada() + "\n";
     }
     alert(msg2);

     //Mostrando datos mediante document.write.
     //Aqui se repite el código pero cambiando los \n por <br> para que haga los saltos de linea en el document.write.
     var msg = "*Aeropuerto*<br>";
     msg += "-Nombre: " + aerop.getNombre() + "<br>-Ciudad: " + aerop.getCiudad();
     var msg2 = "*Listado de Vuelos*<br>";
     for (i = 0; i < vuelos.length; i++){
         msg2 += "<br>-Vuelo " + (i+1) + ":<br>";
         msg2 += "  -Código vuelo: " + vuelos[i].getCodigo() + "<br>";
         msg2 += "  -Hora de Salida: " + vuelos[i].getHoraSalida() + "<br>";
         msg2 += "  -Hora de Llegada: " + vuelos[i].getHoraLlegada() + "<br>";
     }
     document.write(msg);
     document.write(msg2);
 }