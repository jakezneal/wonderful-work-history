<template>
    <main class="flex min-h-screen w-screen items-center justify-center">
        <div class="w-full max-w-3xl">
            <h1>Work History</h1>
            <div class="flex flex-col gap-2">
                <AccordionItem
                    v-for="item in store.getItems()"
                    :key="item.company"
                    :title="item.title"
                    :company="item.company"
                    :start="item.start"
                    :end="item.end"
                    show-remove
                    @deleteItem="(value) => store.deleteItem(value)"
                    data-e2e="workItem"
                >
                    <WorkHistoryForm :title="item.title" :company="item.company" :start="item.start" :end="item.end" />
                </AccordionItem>
                <AccordionItem expanded>
                    <WorkHistoryForm
                        @update:job-title="(value) => (jobTitle = value)"
                        @update:company-name="(value) => (companyName = value)"
                        @update:start-date="(value) => (startDate = value)"
                        @update:end-date="(value) => (endDate = value)"
                        v-bind="{ jobTitle, companyName, startDate, endDate }"
                    />
                </AccordionItem>
            </div>
            <div class="flex flex-col gap-6 pt-6">
                <div>
                    <AppButton text="Add work history" icon="+" />
                </div>
                <div>
                    <AppButton
                        text="Save"
                        variant="primary"
                        @click="saveItem"
                        :disabled="isSaveDisabled"
                        data-e2e="submitButton"
                    />
                </div>
            </div>
        </div>
    </main>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import WorkHistoryForm from './components/forms/WorkHistoryForm/WorkHistoryForm.vue';
import AccordionItem from './components/ui/AccordionItem/AccordionItem.vue';
import { useWorkStore } from './stores/work';
import AppButton from './components/ui/AppButton/AppButton.vue';

const store = useWorkStore();

const jobTitle = ref('');
const companyName = ref('');
const startDate = ref('');
const endDate = ref('');

const isSaveDisabled = computed(() => jobTitle.value === '' || companyName.value === '' || startDate.value === '');

const saveItem = () => {
    store.addItem({
        title: jobTitle.value,
        company: companyName.value,
        start: startDate.value,
        end: endDate.value,
    });

    jobTitle.value = '';
    companyName.value = '';
    startDate.value = '';
    endDate.value = '';
};
</script>
