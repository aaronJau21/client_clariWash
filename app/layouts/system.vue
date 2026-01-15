<script setup lang="ts">
</script>

<template>
  <div class="flex min-h-screen">
    <DashboardSidebar />

    <main class="flex-1 overflow-auto">
      <slot />
    </main>
  </div>
</template>
