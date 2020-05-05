<template>
    <div>
      <h1 class="ml-5 mr-2 text-success text-left">Valoraciones del producto</h1>
      <p class="ml-5 mr-2 text-left">Aquí puedes consultar las últimas valoraciones que los usuarios han hecho sobre este producto.</p>
      <div id="app" class="container-fluid">
          <section class="row d-flex justify-content-around ml-0 mr-0 mb-5" id="seccion">
               <article v-for="(item , index ) of reviews" :key="item.id" 
                        class="col-sm-12 col-md-5 col-lg-3 border boder-light rounded espaciado">
                    <header>
                        <i v-for="estrella in item.rating" :key="estrella.id" class="fa fa-star pull-left ml-1 mt-2 estrellas" > </i>
                        <span v-if="item.rating < 5" class="pull-left mt-1">
                            <i  v-for="estrella2 in 5 - item.rating" :key="estrella2.id" class="fa fa-star-o ml-1 estrellas"></i> 
                        </span>
                        <p class="pull-left ml-2 mt-1">{{item.rating}}.0</p>
                        <br>
                        <br>
                        <p align="left" class="text-muted mt-3 lead nombre"> 
                            {{ item.author}}  {{fecha(item.date).getDate()}} de {{ mes(fecha(item.date).getMonth()) }}  de  {{fecha(item.date).getFullYear() }} 
                        </p>
                    </header>
                    <p> {{item.comment}} </p>
                    <footer> 
                        <button class="pull-left btn btn-success" @click="like(index)" :id="index">
                            <span class="fa fa-thumbs-up"></span>Es útil 
                        </button>  
                        <span class="pull-left ml-3 mt-2 text-muted" style="font-size:0.7em;"> {{item.useful_count}} personas creéis que es útil </span>
                    </footer>
                </article>
          </section>
      </div>
    </div>
</template>

<script>
    import {mapState,mapMutations} from 'vuex';

    export default {
        name: 'Review',
        computed:{
            ...mapState(['reviews'])
        },
        methods:{
            ...mapMutations(['like', 'mes']),
            fecha(dato){
                let fecha = new Date(dato);
                return fecha;
            },
            mes(numero){
                let devolver = '';
                switch(numero){
                    case 0: devolver = 'Enero'; break;
                    case 1: devolver = 'Febrero'; break;
                    case 2: devolver = 'Marzo'; break;
                    case 3: devolver = 'Abril'; break;
                    case 4: devolver = 'Mayo'; break;
                    case 5: devolver = 'Junio'; break;
                    case 6: devolver = 'Julio'; break;
                    case 7: devolver = 'Agosto'; break;
                    case 8: devolver = 'Septiembre'; break;
                    case 9: devolver = 'Octubre'; break;
                    case 10: devolver = 'Noviembre'; break;
                    case 11: devolver = 'Diciembre'; break;
                }
                return devolver;
            }
        }
    }
</script>

<style>

    .espaciado{
        margin: 1em;
    }
    .nombre{    
        font-size: 0.7em;
        margin-left: 0;
        text-align: left;
    }
    .estrellas{
        color: #FFD033;
    }
</style>