<template>
<div>
<p :v-bind="id" v-bind:alt="Pregunta" class="pregunta" > {{id}}.- {{Pregunta}}</p>
  <div>

    
    <p class="pregunta">Ingresa tu resupuesta </p>
    <input type="text" class="pregunta" id="res" :v-bind:alt="texto" >
  </div>
    <button @click="busca(respuesta,texto)"> boton prueba

    </button>

</div>
    
</template>


<script>
import $ from 'jquery' 

export default {
      props: ['id','Pregunta','respuesta', 'texto','resultados'],
  data(){
    return {
       
      }    
  },
       methods:{
        busca: function(busca,donde){
        
           busca= $("#res").val();
            busca = busca.split(' ');
           console.log("la respuesta es "+ busca);
           // var busca= ["Uno","dos"];
            //var donde= 'uno dos tres cuatro cinco seis siete ocho nueve dies uno dos tres';
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
            return this.resultados;
        }
    }
}
</script>


<style scoped>

.pregunta{
  display: block;
  position: relative;
  padding-left: 10px;
  margin-bottom: 6px;
  cursor: pointer;
  font-size: 15px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

}

input[type=text] {
    border: 2px solid blue;
    border-radius: 4px;
}
</style>
