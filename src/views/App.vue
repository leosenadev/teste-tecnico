<script setup lang="js">
import { RouterLink, RouterView } from 'vue-router'

import '../assets/css/bootstrap.min.css'
import '../assets/js/bootstrap.bundle.min.js';
import '../assets/js/color-modes.js';
import '../assets/css/style.css';

import Home from '../components/home/Home.vue'
import Svg from '../components/svg/Svg.vue';
</script>

<template>
  <!-- <header>
   
   
     
<Home msg="You did it!" />
    <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>-->

 <Home ></Home>
 <Svg ></Svg>
  
</template>
