<template>
  <!-- Características Section -->
  <section class="py-24 md:py-32 bg-linear-to-b from-neutral-50 to-white dark:from-neutral-800 dark:to-neutral-900 relative overflow-hidden">
    <!-- Decoración de fondo -->
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(70,164,160,0.05),transparent_70%)]" />
    
    <UContainer class="relative z-10">
      <!-- Encabezado -->
      <div class="text-center mb-20">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 dark:bg-primary/20 mb-6">
          <UIcon name="i-heroicons-star" class="w-4 h-4 text-primary dark:text-primary" />
          <span class="text-sm font-medium text-primary dark:text-primary/90">Nuestras Ventajas</span>
        </div>
        <h2 class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-neutral-900 dark:text-neutral-100 mb-6">
          ¿Por qué elegir <span class="bg-linear-to-r from-primary to-primary/80 bg-clip-text text-transparent">ClariWash</span>?
        </h2>
      </div>

      <!-- Grid de características -->
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        <UCard
          v-for="(feature, index) in features"
          :key="index"
          class="group relative text-center border-0 bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm hover:bg-white dark:hover:bg-neutral-800 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2"
          :ui="{ body: { padding: 'p-8' } }"
        >
          <!-- Efecto de brillo -->
          <div class="absolute inset-0 rounded-lg bg-linear-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-primary/10 transition-all duration-500" />
          
          <div class="relative z-10">
            <!-- Icono animado -->
            <div class="inline-flex p-5 mb-6 bg-linear-to-br from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10 rounded-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg shadow-primary/20">
              <UIcon :name="feature.icon" class="w-10 h-10 text-primary dark:text-primary group-hover:scale-110 transition-transform" />
            </div>
            
            <!-- Contenido -->
            <h3 class="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-3 group-hover:text-primary dark:group-hover:text-primary transition-colors">
              {{ feature.title }}
            </h3>
            <p class="text-neutral-600 dark:text-neutral-400 leading-relaxed">
              {{ feature.description }}
            </p>
          </div>
        </UCard>
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
const features = [
  {
    icon: 'i-heroicons-check-circle',
    title: 'Calidad Garantizada',
    description: 'Productos premium y procesos certificados',
  },
  {
    icon: 'i-heroicons-bolt',
    title: 'Rápido y Eficiente',
    description: 'Entrega puntual y servicio ágil',
  },
  {
    icon: 'i-heroicons-currency-dollar',
    title: 'Precios Justos',
    description: 'Tarifas competitivas y transparentes',
  },
  {
    icon: 'i-heroicons-user-group',
    title: 'Atención Personalizada',
    description: 'Servicio al cliente de excelencia',
  },
]
</script>


