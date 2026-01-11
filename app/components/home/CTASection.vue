<template>
  <!-- CTA Section -->
  <section class="relative py-24 md:py-32 overflow-hidden">
    <!-- Gradiente de fondo animado -->
    <div class="absolute inset-0 bg-linear-to-r from-primary via-primary/90 to-primary dark:from-primary dark:via-primary/90 dark:to-primary bg-size-[200%_100%] animate-gradient-x" />
    
    <!-- Efectos decorativos -->
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
    
    <!-- Elementos flotantes -->
    <div class="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse" />
    <div class="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl animate-pulse delay-1000" />
    
    <UContainer class="relative z-10">
      <UCard class="bg-white/10 dark:bg-neutral-900/20 backdrop-blur-md border border-white/20 shadow-2xl">
        <div class="text-center max-w-4xl mx-auto py-12 px-6">
          <!-- Badge -->
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-8">
            <UIcon name="i-heroicons-rocket-launch" class="w-4 h-4 text-white" />
            <span class="text-sm font-semibold text-white">Comienza Ahora</span>
          </div>
          
          <!-- Título -->
          <h2 class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
            ¿Listo para probar nuestros servicios?
          </h2>
          
          <!-- Descripción -->
          <p class="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed max-w-2xl mx-auto">
            Contáctanos hoy y descubre por qué ClariWash es la mejor opción para el cuidado de tu ropa
          </p>
          
          <!-- Botones -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <UButton
              size="xl"
              color="neutral"
              variant="solid"
              class="px-10 py-7 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-white text-primary hover:bg-neutral-50"
              to="#contacto"
              icon="i-heroicons-phone"
              trailing
            >
              Contactar Ahora
            </UButton>
            <UButton
              size="xl"
              variant="outline"
              class="px-10 py-7 text-lg font-semibold border-2 border-white/50 text-white hover:bg-white hover:text-primary transition-all duration-300 hover:scale-105 hover:border-white"
              icon="i-heroicons-currency-dollar"
              trailing
            >
              Ver Precios
            </UButton>
          </div>
        </div>
      </UCard>
    </UContainer>
  </section>
</template>

<style scoped>
@keyframes gradient-x {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

.animate-gradient-x {
  animation: gradient-x 15s ease infinite;
}

.delay-1000 {
  animation-delay: 1s;
}
</style>


