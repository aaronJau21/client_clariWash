<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const route = useRoute();

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: "Inicio",
    to: "/",
    active: route.path === "/",
  },
  {
    label: "Servicios",
    to: "#servicios",
    active: false,
  },
  {
    label: "Contacto",
    to: "#contacto",
    active: false,
  },
]);
</script>

<template>
  <UHeader class="py-9">
    <template #title>
      <NuxtImg src="/logo.png" alt="Logo" class="h-16 w-auto" />
    </template>

    <UNavigationMenu :items="items" />

    <template #right>
      <UColorModeButton />
      <UButton
        color="primary"
        to="#contacto"
      >
        Solicitar Servicio
      </UButton>
    </template>
  </UHeader>
</template>
