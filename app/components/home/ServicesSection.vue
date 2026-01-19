<script setup lang="ts">
import type { IService } from "~/interface/services/service.interface";

const config = useRuntimeConfig();

const { data } = await useFetch<IService[]>(
  `${config.public.apiUrl}/services/public`
);
</script>
<template>
  <!-- Servicios Section -->
  <section
    id="servicios"
    class="py-24 md:py-32 bg-white dark:bg-neutral-900 relative overflow-hidden"
  >
    <!-- Decoración de fondo -->
    <div
      class="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_bottom,transparent_0%,rgba(70,164,160,0.03)_50%,transparent_100%)]"
    />

    <UContainer class="relative z-10">
      <!-- Encabezado -->
      <div class="text-center mb-20">
        <div
          class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 dark:bg-primary/20 mb-6"
        >
          <UIcon
            name="i-heroicons-sparkles"
            class="w-4 h-4 text-primary dark:text-primary"
          />
          <span class="text-sm font-medium text-primary dark:text-primary/90"
            >Nuestros Servicios</span
          >
        </div>
        <h2
          class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-neutral-900 dark:text-neutral-100 mb-6"
        >
          Servicios de
          <span
            class="bg-linear-to-r from-primary to-primary/80 bg-clip-text text-transparent"
            >Excelencia</span
          >
        </h2>
        <p
          class="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto leading-relaxed"
        >
          Ofrecemos una amplia gama de servicios para cuidar tu ropa y
          mantenerla como nueva
        </p>
      </div>

      <!-- Grid de servicios -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        <UCard
          v-for="service in data"
          :key="service.id"
          class="group relative overflow-hidden border border-neutral-200 dark:border-neutral-800 hover:border-primary/50 dark:hover:border-primary/60 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2"
          :ui="{
            body: 'p-6',
            header: 'p-6 pb-0',
          }"
        >
          <!-- Efecto de brillo al hover -->
          <div
            class="absolute inset-0 bg-linear-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:via-primary/5 group-hover:to-primary/5 transition-all duration-500"
          />

          <template #header>
            <div class="relative z-10">
              <div class="flex items-start gap-4 mb-4">
                <div
                  class="p-4 bg-linear-to-br from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10 rounded-xl group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-lg shadow-primary/20"
                >
                  <UIcon
                    :name="service.icon ?? 'i-heroicons-sparkles'"
                    class="w-8 h-8 text-primary dark:text-primary"
                  />
                </div>
                <div class="flex-1">
                  <h3
                    class="text-xl md:text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-2 group-hover:text-primary dark:group-hover:text-primary transition-colors"
                  >
                    {{ service.name }}
                  </h3>
                </div>
              </div>
            </div>
          </template>

          <div class="relative z-10">
            <p
              class="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4 line-clamp-2"
            >
              {{ service.description }}
            </p>
            <div
              class="flex items-center gap-2 text-primary dark:text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <NuxtLink :to="`/services/${service.id}`" class="text-sm font-semibold">Saber más</NuxtLink>
              <UIcon
                name="i-heroicons-arrow-right"
                class="w-4 h-4 group-hover:translate-x-1 transition-transform"
              />
            </div>
          </div>
        </UCard>
      </div>
    </UContainer>
  </section>
</template>
