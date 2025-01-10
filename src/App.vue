<script setup lang="ts">
  import { RouterView } from 'vue-router'
</script>

<template>
  <router-view />
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Kumbh+Sans:wght,YOPQ@100..900,40..300&display=swap');

:root{
    --primary:#4ade80;
    --gray: #64748b;
    --dark: #1e293b;
    --dark-alt: #334155;
    --light:#f1f5f9;
    --sidebar-width: 300px;
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Fira Sans", sans-serif;
}

body{
    background: var(--light);
}

.app{
  display: flex;

  main{
    flex: 1 1 0;
    padding: 2rem;

    @media  (max-width: 768px){
      padding-left: 6rem;
    }
      
    
  }
}
</style>
