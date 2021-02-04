//PREGUNTA 1:
//Splice: elimino el valor de un array en su posición correspondiente.
//IndexOF: Identifico la posición de un elemento del array
//Pop: Elimino el ultimo elemento del array
//Push: Agrego un nuevo elemento al final del array.
//Includes: Identifico si un elemento se encuentra en el array (F/T)
//Slice te trae un extracto de un string.


const obj = {

    mascotas: ["Perros", "Gatos","Canarios","Pez", "Serpiente"],  
    eliminarMascota: function (userPet=document.getElementById("eliminarMascota").value){//userPet:Obtengo la Mascota a eliminar de parte del usuario
      let eliminatePet = userPet[0].toUpperCase() + userPet.slice(1); //Capitalize el texto (Formato Mxxxx)
    
      //Valido que lo ingresado se encuentra en el array y elimino la Mascota.
      if (this.mascotas.includes(eliminatePet)) {//Identifico la Mascota dentro del Array (True/False)
        //console.log("Esta bien");
        let removePet = this.mascotas.indexOf(eliminatePet); //Identifico la posición de la Mascota a eliminar del arreglo
        this.mascotas.splice(removePet,1) //Elimino la Mascota del array, por medio de la posición anterior y 1 solo elemento a eliminar
        alert(`El arrego maneja las siguientes Mascotas: \n ${obj.mascotas}`)
        console.log(`El arrego maneja las siguientes Mascotas:: \n ${obj.mascotas}`);
        console.log(`Se elimino: ${eliminatePet}`);
      } else {
        console.log("Error: Ingrese una mascota del listado anterior");
        alert("Error: Ingrese una mascota del listado anterior")
      }
    },

  eliminarUltimaMascota: function() {
    let mascotaEliminada= this.mascotas.pop()//Elimino la mascota de la Ultima posición del Array y la agrego a nueva variable.
    alert(`El arrego maneja las siguientes Mascotas: \n ${obj.mascotas}`)
    console.log(`Se elimino: ${mascotaEliminada} `); //Muestro en consola la mascota eliminada

  },
  agregarMascota: function(userPet=document.getElementById("agregarMascota").value){//userPet:Obtengo la Mascota a agregar de parte del usuario
    this.mascotas.push(userPet)//Agrego la nueva mascota al Array
    alert(`El arrego maneja las siguientes Mascotas: \n ${obj.mascotas}`)
    console.log(`La nueva mascota es: ${userPet}`);//Muestro en consola la mascota agregada
  },
  
  contadorMascota: function(){
    let contador= 0
    let arreglonuevo=[] //Creo nuevo arreglo para guardar las mascotas terminadas en "os"
    
    for (let i = 0; i < this.mascotas.length; i++) {
      //obtengo los ultimos 2 caracteres de cada elemento del arreglo por medio de la iteración de "i"
      const caracterMascota = this.mascotas[i].slice(this.mascotas[i].length-2) //slice: Desestructuro el String y obtengo los 2 últimos caracteres
      
      if (caracterMascota =="os") {
        contador+=1

        let pushNuevoArreglo=arreglonuevo.push(this.mascotas[i])//hago un push para gregar las mascotas terminadas en "os"
      }      
    }
    alert(`En el arreglo hay ${contador} mascotas que terminan con 'os' \n ${arreglonuevo}`);
    console.log(`En el arreglo hay ${contador} mascotas que terminan con 'os'`);
    console.log(this.mascotas);
    console.log(arreglonuevo);
  }
}


//PREGUNTA 2:
//Hacer una función que reciba el objeto trabajador y devuelva un mensaje: 
//1- El trabajador (Jhon Smith) trabaja en (ACME) con cargo (QA) y le gusta (comer) y (2) más, (no tiene hijos)
//2- El trabajador (Jhon Smith) va a su trabajo en (Santiago), es (QA), en el puesto (nº 24), trabaja con (Facebook) y (Google)

const trabajador = {
  nombre: 'Jhon Smith',
  cargo: 'QA',
  empresa: {
      ubicacion: {
          comuna: 'Santiago',
          puesto: 'nº 24',
      },
      datos: {
        nombreEmpresa: 'ACME', //Se modifico el parametro nombre a NombreEmpresa. ya que "nombre" ya fue declaro anteriormente.
      },
      clientes: ['Facebook', 'Google'],
  },
  gustos: ['comer', 'ver televisión', 'dormir'],
  hijos: undefined, //Se modifico de NULL a Undefined para arrojar la opción de "no tiene Hijos"
}

const {
  nombre,
  cargo,
  empresa : {
    ubicacion:{
      comuna,
      puesto,
    },      
    datos: {
      nombreEmpresa
    },
    clientes : [primerElemento1,segundoElemento]
  },
  gustos : [primerElemento2 , ...resto],
  hijos: mihijo="no tiene hijos"
}= trabajador

const presentation = () => {

  alert(`El trabajador ${nombre} trabaja en ${nombreEmpresa} con cargo ${cargo} y le gusta ${primerElemento2} y ${resto} más, ${mihijo}`)
  alert(`El trabajador ${nombre} va a su trabajo en ${comuna} , es ${cargo} , en el puesto ${puesto}, trabaja con ${primerElemento1}, ${segundoElemento}`)
  console.log(`El trabajador ${nombre} trabaja en ${nombreEmpresa} con cargo ${cargo} y le gusta ${primerElemento2} y ${resto} más, ${mihijo}`); 
  console.log(`El trabajador ${nombre} va a su trabajo en ${comuna} , es ${cargo} , en el puesto ${puesto}, trabaja con ${primerElemento1}, ${segundoElemento}`);
  //
}