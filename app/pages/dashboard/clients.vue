<script setup lang="ts">
import type { TableColumn } from '@nuxt/ui';
import type { IClient } from '~/interface/clients/client.interface';

definePageMeta({
    layout: 'system',
    middleware: "auth",
});

const { data, refresh, error } = await useFetch<IClient[]>(`/api/client`);

const columns = ref<TableColumn<IClient>[]>([
    {
        accessorKey: 'name',
        header: 'Nombre',
    },
    {
        accessorKey: 'phone',
        header: 'Teléfono',
    },
    {
        accessorKey: 'address',
        header: 'Dirección',
    },
    {
        header: 'Acciones',
        id: 'action',
    },
])
</script>

<template>
    <div>
        <UTable :data="data as IClient[]" :columns="columns" class="flex-1">
            <template #action-cell="{row}">
                <UButton color="primary" variant="ghost" icon="i-lucide-edit" aria-label="Actions" class="cursor-pointer" label="Editar" />
                <UButton color="primary" variant="ghost" icon="i-lucide-delete" aria-label="Actions" class="cursor-pointer" label="Eliminar" />
            </template>
        </UTable>
    </div>
</template>