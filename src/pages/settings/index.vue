<script setup>
import { useI18n } from 'vue-i18n'
import { VDataTable } from 'vuetify/labs/VDataTable'

const { t } = useI18n()





const userList = ref([])
const options = ref({ page: 1, itemsPerPage: 5, sortBy: [''], sortDesc: [false] })
const isAddNewUserDrawerVisible = ref(false)
// headers
const headers = [
    { title: '№', key: 'number' },
    { title: t('settingsModule.username'), key: 'fullName' },
    { title: t('settingsModule.full_name'), key: 'email' },
    { title: t('settingsModule.type'), key: 'startDate' },
    { title: t('settingsModule.mfo'), key: 'salary' },
    { title: t('settingsModule.action'), key: 'age' },
    // { title: 'STATUS', key: 'status' },
]


const resolveStatusVariant = (status) => {
    if (status === 1)
        return { color: 'primary', text: 'Current' }
    else if (status === 2)
        return { color: 'success', text: 'Professional' }
    else if (status === 3)
        return { color: 'error', text: 'Rejected' }
    else if (status === 4)
        return { color: 'warning', text: 'Resigned' }
    else
        return { color: 'info', text: 'Applied' }
}

onMounted(() => {
    // userList.value = JSON.parse(JSON.stringify(data))
})
</script>

<template>

    <VCard>
        <VRow class="px-4 py-4">
            <VCol>
                <p class="text-22 font-roboto">
                    <VIcon size="22" icon="tabler-user" /> {{ $t('settingsModule.control') }}
                </p>
            </VCol>
            <VCol class="d-flex justify-end">
                <VBtn color="primary" @click="isAddNewUserDrawerVisible = true">
                    <VIcon size="22" icon="tabler-plus" />{{ $t('settingsModule.add') }}
                </VBtn>
            </VCol>

        </VRow>

        <VDataTable :headers="headers" :items="userList" :items-per-page="options.itemsPerPage" :page="options.page"
            :options="options">

            <!-- <template #headers>



            </template> -->
            <!-- full name -->
            <!-- <template #item.fullName="{ item }">
                <div class="d-flex align-center">
                    <VAvatar size="32" :color="item.avatar ? '' : 'primary'"
                        :class="item.avatar ? '' : 'v-avatar-light-bg primary--text'"
                        :variant="!item.avatar ? 'tonal' : undefined">
                        <VImg v-if="item.avatar" :src="item.avatar" />
                        <span v-else>{{ avatarText(item.fullName) }}</span>
                    </VAvatar>
                    <div class="d-flex flex-column ms-3">
                        <span class="d-block font-weight-medium text-high-emphasis text-truncate">{{ item.fullName
                        }}</span>
                        <small>{{ item.post }}</small>
                    </div>
                </div>
            </template> -->

            <!-- status -->
            <!-- <template #item.status="{ item }">
                <VChip :color="resolveStatusVariant(item.status).color" class="font-weight-medium" size="small">
                    {{ resolveStatusVariant(item.status).text }}
                </VChip>
            </template> -->

            <template #bottom>
                <VCardText class="pt-2">
                    <div class="d-flex flex-wrap justify-center justify-sm-space-between gap-y-2 mt-2">
                        <VTextField v-model="options.itemsPerPage" label="Rows per page:" type="number" min="-1"
                            max="15" hide-details variant="underlined"
                            style="max-inline-size: 8rem;min-inline-size: 5rem;" />

                        <VPagination v-model="options.page" :total-visible="$vuetify.display.smAndDown ? 3 : 5"
                            :length="Math.ceil(userList.length / options.itemsPerPage)" />
                    </div>
                </VCardText>
            </template>
        </VDataTable>
    </VCard>


    <AddNewUserDrawer v-model:isDrawerOpen="isAddNewUserDrawerVisible" />
</template>


<style scom>
.v-data-table thead th {
    background-color: #f3f2f3;
    border-spacing: 0;

}

/* .v-data-table thead th:nth-child(1) {
    border-spacing: 0;
} */
</style>
