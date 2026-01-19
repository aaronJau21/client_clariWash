<script setup lang="ts">
import type { BreadcrumbItem, TableColumn } from '@nuxt/ui';
import FormCreateClient from '~/components/dashboard/clients/FormCreateClient.vue';

import type { IClient } from '~/interface/clients/client.interface';

definePageMeta({
    layout: 'system',
    middleware: "auth",
});

const { data, refresh, error } = await useFetch<IClient[]>(`/api/client`);
const toast = useToast();

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

const items = ref<BreadcrumbItem[]>([
    {
        label: 'Dashboard',
        icon: 'i-lucide-layout-dashboard',
        to: '/dashboard',
    },
    {
        label: 'Clientes',
    }
])

watch(
    () => error.value,
    (newError) => {
        if(import.meta.client && newError?.data.statusCode === 401){
            toast.add({
                title: "No tienes permisos para acceder a esta página",
                description: newError?.data.message,
                color: "error",
            });
        }
    },
    { immediate: true }
)

const isCreateClientOpen = ref<boolean>(false)

async function handleCreateClient() {
    await refresh()
    isCreateClientOpen.value = false
}

const pagination = ref<{ pageIndex: number, pageSize: number }>({
  pageIndex: 0,
  pageSize: 5
})
</script>

<template>
    <div class="p-9">
        <div class="mb-5 flex justify-between items-center">
            <UBreadcrumb :items="items" />

            <UModal 
                v-model:open="isCreateClientOpen"
                v-model="isCreateClientOpen"
                title="Agregar Cliente" 
                description="Complete el formulario para agregar un nuevo cliente al sistema"
            > 

                <UButton 
                    label="Agregar Cliente" 
                    icon="i-lucide-plus" 
                    color="primary" 
                    size="sm" 
                    @click="isCreateClientOpen = true"
                />

                <template #body>
                    <div class="flex justify-center items-center">
                        <FormCreateClient 
                            :on-success="handleCreateClient" 
                            :on-close="() => (isCreateClientOpen = false)"/>
                    </div>
                </template>
            </UModal>

        </div>

        <UTable v-if="data && data.length > 0" :data="data as IClient[]" :columns="columns" class="flex-1">
            <template #action-cell="{row}">
                <UButton color="primary" variant="ghost" icon="i-lucide-edit" aria-label="Actions" class="cursor-pointer" label="Editar" />
                <UButton color="primary" variant="ghost" icon="i-lucide-delete" aria-label="Actions" class="cursor-pointer" label="Eliminar" />
            </template>
        </UTable>

        <UEmpty v-else>
            <template #description>
                <p>No hay clientes registrados</p>
            </template>
        </UEmpty>

        <div class="flex justify-end border-t border-default pt-4 px-4">
            <UPagination
                :page="pagination.pageIndex + 1"
                :items-per-page="pagination.pageSize"
                :total="data?.length || 0"
                @update:page="(p) => pagination.pageIndex = p - 1"
            />
        </div>
    </div>
</template>