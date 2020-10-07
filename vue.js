const app = new Vue({
    el: '#aplicacion',
    data:{
        titulo: 'Registro de Notas',
        datos: [
                 {nombre: '', mate: 0, fisica: 0, }
               ],
        prom: 0,
        nuevoNombre: ''      
    },
    methods: {
        aumentar: function(){
            this.datos.push(
                {nombre: this.nuevoNombre, mate: 0, fisica: 0}
            )
        },
        
        borrar: function(index){
            this.datos.splice(index, 1);
        }
    },

})