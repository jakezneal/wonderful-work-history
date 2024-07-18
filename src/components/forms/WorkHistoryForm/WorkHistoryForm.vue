<template>
    <div class="work-history-form grid w-full gap-3">
        <TextInput id="job-title" label="Job Title" v-model="jobTitle" required data-testid="jobTitle" />
        <TextInput id="company-name" label="Company Name" v-model="companyName" required data-testid="companyName" />
        <div class="grid grid-cols-2 gap-6">
            <DatetimePickerInput
                id="start-date"
                label="Start Date"
                v-model="startDate"
                required
                data-testid="startDate"
            />
            <DatetimePickerInput id="end-date" label="End Date" v-model="endDate" data-testid="endDate" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import DatetimePickerInput from '@/components/inputs/DatetimePickerInput/DatetimePickerInput.vue';
import TextInput from '@/components/inputs/TextInput/TextInput.vue';
import { ref } from 'vue';

export type WorkHistoryFormProps = {};

const props = defineProps<WorkHistoryFormProps>();

const jobTitle = ref('');
const companyName = ref('');
const startDate = ref('');
const endDate = ref('');
</script>
