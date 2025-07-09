<!--<script setup lang="ts">
defineProps<{
    msg: string
}>()
</script>-->
<script setup lang="ts">
import Svg from '../svg/Svg.vue';
import Header from '../header/Header.vue';
import Contraste from '../acessibilidade/Contraste.vue';
import Libras from '../acessibilidade/Libras.vue';
import Fontes from '../acessibilidade/Fontes.vue';
import Container from '../container/Container.vue';
import Footer from '../footer/Footer.vue';


</script>

<template>
    <Header></Header>
    <Contraste></Contraste>
    <Libras></Libras>
    <Fontes></Fontes>
    <Container></Container>
    <Footer></Footer>
    <Svg></Svg>
</template>