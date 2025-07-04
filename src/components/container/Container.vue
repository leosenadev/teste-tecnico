<script setup>

import { ref, reactive, toHandlers } from 'vue';
//import  { FilmeInterface} from '../../types/Interface';



/*
enviarFilme=(valor)=> {

    // const filme_obj = this.filmes.filter((data) => { return data.id === valor })

    <Detalhes :data_filme />
}
import Axios from 'axios';

var lista = ref('lista');
Axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=ed0cc191658ad66a18e95ab8c97c8879&language=pt-BR')
.then(async(e)=>{ return await e.data})
.then((response)=>{
   
     lista=response.results;
     return lista;
})
console.log(lista)
const selected = ref('A')
const options = ref([
    { text: 'One', value: 'A' },
    { text: 'Two', value: 'B' },
    { text: 'Three', value: 'C' }
])
const dinheiro=(value)=>{
    alert(value)
}
/*
{
    data() {
        
        const dados = [
            { message: 'Foo' }, { message: 'Bar' }
        ];
       
        const options =[
            { text: 'One', value: 'A' },
            { text: 'Two', value: 'B' },
            { text: 'Three', value: 'C' }
        ];
        return{
            dados:dados,
            options:options,
            
        }
        
    },
    methods: {
        dinheiro(valor) {
            console.log(valor)
        }
    }
}*/


</script>
<template>

    <main>
        <div class="album py-5 bg-body-tertiary ">

            <div class="container ">

                <div v-for="filme in filmes" :key="filme.id">

                    <div class="col mb-4">
                        <div class="card shadow-sm">
                            <img v-bind:src="'https://image.tmdb.org/t/p/original' + filme.backdrop_path" width="100%"
                                height="100%" />
                            <div class="card-body">

                                <h2> {{ filme.original_title }} </h2>

                                <div class="d-flex justify-content-between align-items-center">
                                    <div class="btn-group">
                                        <button type="button" class="btn btn-lg btn-outline-secondary"
                                            data-bs-toggle="modal" @click='enviarFilme(filme)'
                                            data-bs-target="#exampleModal">+ Detalhes</button>
                                    </div>
                                    <small class="text-body-secondary">{{ filme.release_date }}</small>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-3" id="exampleModalLabel">{{ dataFilme ?
                                        dataFilme.original_title: '' }}</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <ul class="list-group">
                                        <li class="list-group-item">Sinopse {{ dataFilme ?
                                        dataFilme.overview: '' }}</li>
                                     
                                        <li class="list-group-item">Duração {{ dataFilme ?
                                        dataFilme.vote_average: '' }}</li>
                                        <li class="list-group-item">Avalição {{ dataFilme ?
                                        dataFilme.vote_count : '' }}</li>
                                        
                                    </ul>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary w-100"
                                        data-bs-dismiss="modal">Close</button>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    </main>
</template>
<script>

import Axios from 'axios';


export default {
    name: 'Filmes',

    data() {
        return {
            filmes: {},
            dataFilme: {}
        }
    },
    created() {
        this.getFilmes(),
            this.enviarFilme()
    },

    methods: {
        getFilmes() {
            Axios
                .get("https://api.themoviedb.org/3/movie/now_playing?api_key=ed0cc191658ad66a18e95ab8c97c8879&language=pt-BR")
                .then((res) => {
                    this.filmes = res.data.results;
                    console.log(this.filmes)
                    //     var x  =  res.data.results.filter((e)=> e.id !== );


                })
                .catch((error) => {
                    console.log(error);
                });
        },
        enviarFilme(filme) {
            return this.dataFilme = filme;



        }

    }

}

</script>