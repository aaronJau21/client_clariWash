<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const route = useRoute();
const sidebarCollapsed = ref(false);

const items = computed<NavigationMenuItem[][]>(() => [
  [
    {
      label: "Dashboard",
      icon: "i-lucide-layout-dashboard",
      to: "/dashboard",
      active: route.path === "/dashboard",
    },
    {
      label: "Servicios",
      icon: "i-lucide-sparkles",
      to: "/dashboard/services",
      active: route.path.startsWith("/dashboard/services"),
    },
    {
      label: "Clientes",
      icon: "i-lucide-users",
      to: "/dashboard/clients",
      active: route.path.startsWith("/dashboard/clients"),
    },
    // {
    //   label: "Configuración",
    //   icon: "i-lucide-settings",
    //   defaultOpen: route.path.startsWith("/dashboard/configuracion"),
    //   active: route.path.startsWith("/dashboard/configuracion"),
    //   children: [
    //     {
    //       label: "General",
    //       to: "/dashboard/configuracion/general",
    //       active: route.path === "/dashboard/configuracion/general",
    //     },
    //     {
    //       label: "Notificaciones",
    //       to: "/dashboard/configuracion/notificaciones",
    //       active: route.path === "/dashboard/configuracion/notificaciones",
    //     },
    //     {
    //       label: "Perfil",
    //       to: "/dashboard/configuracion/perfil",
    //       active: route.path === "/dashboard/configuracion/perfil",
    //     },
    //   ],
    // },
  ],
  [
    {
      label: "Soporte",
      icon: "i-lucide-help-circle",
      to: "#",
      active: route.path === "/dashboard/soporte",
    },
    {
      label: "Volver al sitio",
      icon: "i-lucide-arrow-left",
      to: "/",
    },
  ],
]);
</script>

<template>
  <UDashboardSidebar
    v-model:collapsed="sidebarCollapsed"
    collapsible
    resizable
    :ui="{ footer: 'border-t border-default' }"
  >
    <template #header="{ collapsed }">
      <div class="flex items-center w-full gap-2" :class="collapsed ? 'justify-center flex-col pt-5' : 'justify-between'">
        <NuxtLink
          v-if="!collapsed"
          to="/dashboard"
          class="flex items-center flex-1"
        >
          <NuxtImg
            src="/logo.png"
            alt="ClariWash Logo"
            class="h-8 w-auto shrink-0"
          />
        </NuxtLink>
        <NuxtLink
          v-else
          to="/dashboard"
          class="flex items-center justify-center"
        >
          <NuxtImg
            src="/logo-img.png"
            alt="ClariWash"
            class="size-8 object-contain"
          />
        </NuxtLink>
        <UButton
          :icon="collapsed ? 'i-lucide-panel-left-open' : 'i-lucide-panel-left-close'"
          class="cursor-pointer"
          color="neutral"
          variant="ghost"
          :square="true"
          size="sm"
          @click="sidebarCollapsed = !sidebarCollapsed"
        />
      </div>
    </template>

    <template #default="{ collapsed }">
      <UNavigationMenu
        :collapsed="collapsed"
        :items="items[0]"
        orientation="vertical"
      />

      <UNavigationMenu
        :collapsed="collapsed"
        :items="items[1]"
        orientation="vertical"
        class="mt-auto"
      />
    </template>

    <template #footer="{ collapsed }">
      <UButton
        :avatar="{
          src: '/logo-img.png',
          alt: 'Usuario',
        }"
        :label="collapsed ? undefined : 'Usuario'"
        color="neutral"
        variant="ghost"
        class="w-full"
        :block="collapsed"
        to="#"
      >
        <template v-if="!collapsed" #trailing>
          <UIcon name="i-lucide-chevron-right" class="size-4" />
        </template>
      </UButton>
    </template>
  </UDashboardSidebar>
</template>
