<script setup lang="ts">

useSeoMeta({
  title: 'ClariWash',
  description: 'Tu ropa limpia, fresca y cuidada con el mejor servicio de lavandería',
  ogTitle: 'ClariWash',
  ogDescription: 'Tu ropa limpia, fresca y cuidada con el mejor servicio de lavandería',
  ogImage: '/logo-img.png',
  ogUrl: 'https://clariwash.com',
  ogType: 'website',
  ogLocale: 'es_ES',
  ogSiteName: 'ClariWash',
})

</script>

<template>
  <div class="min-h-screen">
    <HomeMain />
    <HomeServicesSection />
    <HomeFeaturesSection />
    <HomeCTASection />
    <HomeContactSection />
  </div>
</template>