<template>
  <!-- Hero Section - Información Principal -->
  <section class="relative py-24 md:py-32 lg:py-40 overflow-hidden">
    <!-- Background con gradiente animado -->
    <div class="absolute inset-0 bg-linear-to-br from-primary/10 via-white to-neutral-50 dark:from-primary/20 dark:via-neutral-900 dark:to-neutral-950/30" />
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(70,164,160,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(70,164,160,0.2),transparent_50%)]" />
    
    <!-- Elementos decorativos flotantes -->
    <div class="absolute top-20 left-10 w-72 h-72 bg-primary/20 dark:bg-primary/30 rounded-full blur-3xl animate-pulse" />
    <div class="absolute bottom-20 right-10 w-96 h-96 bg-primary/30 dark:bg-primary/20 rounded-full blur-3xl animate-pulse delay-1000" />
    
    <UContainer class="relative z-10">
      <div class="text-center max-w-5xl mx-auto space-y-8">
        <!-- Badge superior -->
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 dark:bg-primary/20 backdrop-blur-sm border border-primary/30 dark:border-primary/40 animate-fade-in">
          <UIcon name="i-heroicons-sparkles" class="w-4 h-4 text-primary dark:text-primary" />
          <span class="text-sm font-medium text-primary dark:text-primary/90">Servicio Premium de Lavandería</span>
        </div>

        <!-- Título principal -->
        <div class="space-y-6 animate-fade-in-up">
          <h1 class="text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight">
            <span class="bg-linear-to-r from-neutral-900 to-neutral-700 dark:from-neutral-100 dark:to-neutral-300 bg-clip-text text-transparent">
              Clari
            </span>
            <span class="bg-linear-to-r from-primary to-primary/80 dark:from-primary dark:to-primary/90 bg-clip-text text-transparent">
              Wash
            </span>
          </h1>
          
          <p class="text-xl md:text-2xl lg:text-3xl text-neutral-600 dark:text-neutral-300 font-light max-w-3xl mx-auto leading-relaxed">
            Tu ropa limpia, fresca y cuidada con el 
            <span class="font-semibold text-primary dark:text-primary/90">mejor servicio</span> de lavandería
          </p>
        </div>

        <!-- Botones de acción -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 animate-fade-in-up delay-300">
          <UButton
            size="xl"
            color="primary"
            class="px-10 py-7 text-lg font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300 hover:scale-105"
            to="#contacto"
            icon="i-heroicons-arrow-right"
            trailing
          >
            Solicitar Servicio
          </UButton>
          <UButton
            size="xl"
            color="neutral"
            variant="outline"
            class="px-10 py-7 text-lg font-semibold border-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all duration-300 hover:scale-105"
            to="#servicios"
            icon="i-heroicons-arrow-down"
            trailing
          >
            Ver Servicios
          </UButton>
        </div>

        <!-- Estadísticas rápidas -->
        <div class="grid grid-cols-3 gap-8 pt-16 max-w-2xl mx-auto animate-fade-in delay-500">
          <div class="text-center">
            <div class="text-3xl md:text-4xl font-bold text-primary dark:text-primary/90 mb-2">500+</div>
            <div class="text-sm text-neutral-600 dark:text-neutral-400 uppercase tracking-wide">Clientes Satisfechos</div>
          </div>
          <div class="text-center">
            <div class="text-3xl md:text-4xl font-bold text-primary dark:text-primary/90 mb-2">24h</div>
            <div class="text-sm text-neutral-600 dark:text-neutral-400 uppercase tracking-wide">Servicio Express</div>
          </div>
          <div class="text-center">
            <div class="text-3xl md:text-4xl font-bold text-primary dark:text-primary/90 mb-2">100%</div>
            <div class="text-sm text-neutral-600 dark:text-neutral-400 uppercase tracking-wide">Garantía</div>
          </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.8s ease-out;
}

.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out;
}

.delay-300 {
  animation-delay: 0.3s;
  animation-fill-mode: both;
}

.delay-500 {
  animation-delay: 0.5s;
  animation-fill-mode: both;
}

.delay-1000 {
  animation-delay: 1s;
}
</style>

