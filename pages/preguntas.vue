<template>
    <div>
   <p>Hola porfavor responde las siguientes preguntas</p>
  
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

   <PreguntaAbierta
        id="4"
       Pregunta="¿Cual es la idea principal del cuento?"
       
       texto="aque va el texto donde se ba a buscar la palabra"
    ></PreguntaAbierta>



    </div>



</template>


<script>
import PreguntaAbierta from  '@/components/PreguntaAbierta'
import PreguntaMultiple from '@/components/PreguntaMultiple'


export default {
    components:{
        PreguntaMultiple,
        PreguntaAbierta
        
    
    
    }
}
</script>

<style scoped>

</style>

