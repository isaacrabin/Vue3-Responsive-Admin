<template>
    <div class="app">
        <Sidebar />
        <router-view />
    </div>
</template>

<script setup lang="ts">
import Sidebar from '../components/Sidebar.vue';
</script>