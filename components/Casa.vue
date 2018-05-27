<template>
    <div>
   <p>Responde la siguientes preguntas</p>
    <button @click="busca()" >presiona para contar
    </button>
   <PreguntaMultiple
    id='1'
    Correcta=0
    puntos='3'
    Pregunta= "¿Cual es el nombre del libro?"
    a='el gato con botas'
    b='el loro'
    c='sherk'
    d='otro'
    respuesta='otro'
   >
   </PreguntaMultiple>
    <PreguntaMultiple
    id='2'
    Correcta=0
    puntos='3'
    Pregunta= "¿Cual es la idea principal del cuento?"
    a='conocer al gato '
    b='querer al gato'
    c='comer con el gato'
    d='querer al gato'
    respuesta='otro'
   >
   </PreguntaMultiple>
    <PreguntaMultiple
    id='3'
    Correcta=0
    puntos='3'
    Pregunta= "¿Cual la moralega de la historia?"
    a='otro 1'
    b='otro 2'
    c='otro 3'
    d='otro 4'
    respuesta='otro 3'
   >
   </PreguntaMultiple>
 

    </div>
</template>


<script>
import PreguntaMultiple from '@/components/PreguntaMultiple'
import CuentaPalabras from '@/components/CuentaPalabras'
export default {
    components:{
        PreguntaMultiple,
        CuentaPalabras
    },
    methods:{
        busca: function(busca,donde){
            var busca= ["Uno","dos"];
            var donde= 'uno dos tres cuatro cinco seis siete ocho nueve dies uno dos tres';
            var palabras=[''];
            var cuenta=0;
            var i=0;
            
            

               var specialChars = "!¡¿?&(),.-";

                // Los eliminamos todos los caracteres especiales de donde= el parrafo donde se va a buscar
                for (var i = 0; i < specialChars.length; i++) {
                donde= donde.replace(new RegExp("\\" + specialChars[i], 'gi'), '');
                 }
                 // Los eliminamos todos los caracteres especiales de buscar= a los parametros o palabras que se van a buscar
                 while(i<busca.length){
                    for (var i = 0; i < specialChars.length; i++) {
                    busca= busca.replace(new RegExp("\\" + specialChars[i], 'gi'), '');
                 }
                 i++;
                 }
                 //validacion de comas para donde
                donde = donde.replace(/á/gi,"a");
                donde = donde.replace(/é/gi,"e");
                donde = donde.replace(/í/gi,"i");
                donde = donde.replace(/ó/gi,"o");
                donde = donde.replace(/ú/gi,"u");
                
                //validacion para comas de busca
                for(var i=0;i<busca.length;i++){
                    busca[i] = busca[i].replace(/á/gi,"a");
                    busca[i] = busca[i].replace(/é/gi,"e");
                    busca[i] = busca[i].replace(/í/gi,"i");
                    busca[i] = busca[i].replace(/ó/gi,"o");
                    busca[i] = busca[i].replace(/ú/gi,"u");
                }
                
                
                palabras = donde.split(' ');
                console.log(palabras);
                console.log(busca);
                let resultados=[];
                i=0;
            while(i<busca.length){
                cuenta=0;
                for(let j=0;j<palabras.length;j++){
                     if(busca[i].toLowerCase()===palabras[j].toLowerCase()){
                        cuenta=cuenta+1;
                        console.log(cuenta)
                    }
                 
                }
                resultados[i]=cuenta;
                
                i++;
                
            }
                   
            console.log(resultados);
            
        }
    }
}
</script>
