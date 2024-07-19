<template>
    <div class="work-history-form grid w-full gap-3">
        <TextInput
            id="job-title"
            label="Job Title"
            v-model:value="jobTitle"
            @input="$emit('update:jobTitle', $event.target.value)"
            required
            data-testid="jobTitle"
        />
        <TextInput
            id="company-name"
            label="Company Name"
            v-model:value="companyName"
            @input="$emit('update:companyName', $event.target.value)"
            required
            data-testid="companyName"
        />
        <div class="grid grid-cols-2 gap-6">
            <DatetimePickerInput
                id="start-date"
                label="Start Date"
                v-model:value="startDate as string"
                required
                data-testid="startDate"
                @update:model-value="(e) => $emit('update:startDate', e)"
            />
            <DatetimePickerInput
                id="end-date"
                label="End Date"
                v-model:value="endDate as string"
                data-testid="endDate"
                @update:model-value="(e) => $emit('update:endDate', e)"
            />
        </div>
    </div>
</template>

<script lang="ts" setup>
import DatetimePickerInput from '@/components/inputs/DatetimePickerInput/DatetimePickerInput.vue';
import TextInput from '@/components/inputs/TextInput/TextInput.vue';
import { ref } from 'vue';

export type WorkHistoryFormProps = {
    title?: string;
    company?: string;
    start?: Date | string;
    end?: Date | string;
};

const props = defineProps<WorkHistoryFormProps>();

const jobTitle = ref(props.title);
const companyName = ref(props.company);
const startDate = ref(props.start);
const endDate = ref(props.end);

const emits = defineEmits(['update:jobTitle', 'update:companyName', 'update:startDate', 'update:endDate']);
</script>
