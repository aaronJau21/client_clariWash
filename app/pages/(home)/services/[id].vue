<script setup lang="ts">
import type { IService } from '~/interface/services/service.interface';

const route = useRoute();
const { id } = route.params;

const config = useRuntimeConfig();

const { data } = await useFetch<IService>(`${config.public.apiUrl}/services/${id}/public`);



</script>

<template>
    <div class="py-16">
        <UContainer>
            <UPageCard  
                orientation="horizontal" 
                :title="data?.name" 
                :description="data?.description || 'No hay descripción'"
                highlight
                highlight-color="primary"
            >

                <NuxtImg
                    src="https://prod-cdn.laundryheap.com/assets/seo_pages/laundromats/hero-76351a1a8ac3ff92f5c86b6fd2c2d2cc354858831d1af89704e9f23c80a6cb62.jpg"
                    alt="Servicio" class="w-full h-full object-cover" />
            </UPageCard>
        </UContainer>
    </div>
</template>
