<template>
  <!-- Información de Contacto -->
  <section id="contacto" class="py-24 md:py-32 bg-white dark:bg-neutral-900 relative overflow-hidden">
    <!-- Decoración sutil -->
    <div class="absolute inset-0 bg-[linear-gradient(to_top,transparent_0%,rgba(70,164,160,0.02)_100%)]" />
    
    <UContainer class="relative z-10">
      <!-- Encabezado -->
      <div class="text-center mb-16">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 dark:bg-primary/20 mb-6">
          <UIcon name="i-heroicons-envelope" class="w-4 h-4 text-primary dark:text-primary" />
          <span class="text-sm font-medium text-primary dark:text-primary/90">Contáctanos</span>
        </div>
        <h2 class="text-4xl md:text-5xl font-extrabold text-neutral-900 dark:text-neutral-100 mb-4">
          Estamos aquí para <span class="bg-linear-to-r from-primary to-primary/80 bg-clip-text text-transparent">ayudarte</span>
        </h2>
        <p class="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
          Ponte en contacto con nosotros y resolveremos todas tus dudas
        </p>
      </div>
      
      <!-- Grid de información de contacto -->
      <div class="grid md:grid-cols-3 gap-6 lg:gap-8">
        <UCard
          v-for="(contact, index) in contacts"
          :key="index"
          class="group text-center border border-neutral-200 dark:border-neutral-800 hover:border-primary/50 dark:hover:border-primary/60 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2"
          :ui="{ body: { padding: 'p-8' } }"
        >
          <!-- Icono con efecto hover -->
          <div class="inline-flex p-5 mb-6 bg-linear-to-br from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10 rounded-2xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg shadow-primary/20">
            <UIcon :name="contact.icon" class="w-10 h-10 text-primary dark:text-primary" />
          </div>
          
          <!-- Título -->
          <h3 class="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-3 group-hover:text-primary dark:group-hover:text-primary transition-colors">
            {{ contact.title }}
          </h3>
          
          <!-- Contenido -->
          <div class="space-y-1">
            <p
              v-for="(line, lineIndex) in contact.content"
              :key="lineIndex"
              class="text-neutral-600 dark:text-neutral-400"
            >
              {{ line }}
            </p>
          </div>
          
          <!-- Acción hover -->
          <div class="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <UButton
              v-if="contact.action"
              :to="contact.action.to"
              :icon="contact.action.icon"
              color="primary"
              variant="ghost"
              size="sm"
            >
              {{ contact.action.label }}
            </UButton>
          </div>
        </UCard>
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
const contacts = [
  {
    icon: 'i-heroicons-phone',
    title: 'Teléfono',
    content: ['(555) 123-4567', 'Llamadas 24/7'],
    action: {
      label: 'Llamar ahora',
      to: 'tel:+5551234567',
      icon: 'i-heroicons-phone',
    },
  },
  {
    icon: 'i-heroicons-envelope',
    title: 'Email',
    content: ['info@clariwash.com', 'Respuesta en 24h'],
    action: {
      label: 'Enviar email',
      to: 'mailto:info@clariwash.com',
      icon: 'i-heroicons-envelope',
    },
  },
  {
    icon: 'i-heroicons-map-pin',
    title: 'Horario',
    content: ['Lun - Vie: 8:00 AM - 8:00 PM', 'Sáb: 9:00 AM - 6:00 PM'],
  },
]
</script>


