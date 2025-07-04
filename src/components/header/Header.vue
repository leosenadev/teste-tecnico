<script setup>
import { ref } from 'vue'

const options = [
    { text: 'Filmes', value: 'movie/now_playing?' },
    { text: 'Séries', value: 'tv/top_rated?' },

];
const selected = ref('')


console.log(selected.value)
</script>
<template>
    <header data-bs-theme="dark">

        <div class="navbar navbar-dark bg-dark shadow-sm">
            <div class="container"> <a href="#" class="navbar-brand d-flex align-items-center"> <svg
                        xmlns="http://www.w3.org/2000/svg" width="45" height="26" fill="currentColor" id="logo-filme"
                        class="bi bi-film" viewBox="0 0 16 16">
                        <path
                            d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm4 0v6h8V1zm8 8H4v6h8zM1 1v2h2V1zm2 3H1v2h2zM1 7v2h2V7zm2 3H1v2h2zm-2 3v2h2v-2zM15 1h-2v2h2zm-2 3v2h2V4zm2 3h-2v2h2zm-2 3v2h2v-2zm2 3h-2v2h2z" />
                    </svg> <strong> FILMES INFOR</strong> </a>
                <select v-model="selected">
                    <option disabled value="">Selecione</option>
                   
                    <option v-for="option in options" :value="option.value">

                        {{ option.text }}
                    </option>
                </select>

            </div>
        </div>
    </header>
</template>