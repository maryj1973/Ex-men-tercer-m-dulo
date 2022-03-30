
        //clase padre

class Electrodomestico {
   
             //atributos
 
     consumo;
     marca;
     #altura;
     #ancho;
     precio;
 
            //constructor
 
     constructor(consumo, marca, altura, ancho, precio){
         this.consumo=consumo;
         this.marca=marca;
         this.#altura=altura;
         this.#ancho=ancho;
         this.precio=precio;
     }
 
            //set
 
     set setConsumo(consumo){
         this.consumo=consumo;
     }
     set setMarca(marca){
         this.marca=marca;
     }
     set setAltura(Altura){
         this.#Altura=Altura;
     }
     set setAncho(Ancho){
         this.#Ancho=Ancho;
     }
     set setPrecio(precio){
         this.precio=precio;
     }
 
            //get
 
     get getConsumo(){
         return `El consumo es ${this.consumo}`;
     }
     get getMarca(){
         return `La marca es ${this.marca}`;
     }
     get getAltura(){
         return `La altura es ${this.#altura}`;
     }
     get getAncho(){
         return `El ancho es ${this.#ancho}`;
     }
     get getPrecio(){
        return `El precio es ${this.precio}`;
    }
}
 
        // subclase hijo 
 
class Microondas extends Electrodomestico{
     
     //atributo
 
     #descongelado;
     #capacidad;
     nivelDePotencia;
 
             //constructor
 
    constructor(consumo, marca, altura, ancho, precio, descongelado, capacidad, nivelDePotencia){
         super(consumo, marca, altura, ancho, precio);
         this.#descongelado=descongelado;
         this.#capacidad=capacidad;
     }
 
                //set
 
     set setDescongelado(descongelado){
         this.#descongelado=descongelado;
     }
     set serCapacidad(capacidad){
         this.#capacidad;
     }
 
             //get
 
     get getDescongelado(){
         return `El descongelado es ${this.#descongelado}`;
     }
     get getCapacidad(){
         return`La capacidad es ${this.#capacidad}`;
     }
}

        //subclase hijo

class Secadora extends Electrodomestico {
        
        //atributo

    numeroDeVelocidad;
    #carga;
    #peso;

            //constructor 

    
    constructor(consumo, marca, altura, ancho, precio, numeroDeVelocidad, carga, peso){
         super(consumo, marca, altura, ancho, precio);
         this.#peso=peso;
         this.#carga=carga;
    }
                //set

        set setPeso(peso){
            this.#peso=peso;
         }
         set setCarga(carga){
            this.#carga=carga;
         }

          //get

        get getPeso(){
            return `El peso es ${this.#peso}`;
        }
        get getCarga(){
            return `La carga es ${this.#carga}`
        }

}
  