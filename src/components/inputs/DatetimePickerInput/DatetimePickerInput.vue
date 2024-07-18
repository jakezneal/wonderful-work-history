<template>
    <InputWrapper v-bind="{ id, label, errors, required }" class="datetime-picker-input">
        <button
            type="button"
            @click="toggleCalendar(true)"
            :class="[
                'grid w-full grid-flow-row grid-cols-2 rounded-lg border border-solid p-3 text-base',
                isInvalid ? 'border-red' : 'border-grey',
                disabled ? 'bg-gray-100' : '',
            ]"
            v-bind="{
                disabled,
                name,
                id,
            }"
            data-testid="button"
        >
            <div data-testid="buttonText">
                <p>{{ date !== undefined ? date : placeholder }}</p>
            </div>
            <div class="justify-self-end">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M5.66667 0.666656C6.12691 0.666656 6.5 1.03975 6.5 1.49999V2.33332H11.5V1.49999C11.5 1.03975 11.8731 0.666656 12.3333 0.666656C12.7936 0.666656 13.1667 1.03975 13.1667 1.49999V2.33332H14.8333C15.4964 2.33332 16.1323 2.59672 16.6011 3.06556C17.0699 3.5344 17.3333 4.17028 17.3333 4.83332V14.8333C17.3333 15.4964 17.0699 16.1323 16.6011 16.6011C16.1323 17.0699 15.4964 17.3333 14.8333 17.3333H3.16667C2.50363 17.3333 1.86774 17.0699 1.3989 16.6011C0.93006 16.1322 0.666668 15.4964 0.666668 14.8333V4.83332C0.666668 4.17028 0.93006 3.5344 1.3989 3.06556C1.86774 2.59672 2.50363 2.33332 3.16667 2.33332H4.83333V1.49999C4.83333 1.03975 5.20643 0.666656 5.66667 0.666656ZM4.83333 3.99999H3.16667C2.94565 3.99999 2.73369 4.08779 2.57741 4.24407C2.42113 4.40035 2.33333 4.61231 2.33333 4.83332V14.8333C2.33333 15.0543 2.42113 15.2663 2.57741 15.4226C2.73369 15.5789 2.94565 15.6667 3.16667 15.6667H14.8333C15.0543 15.6667 15.2663 15.5789 15.4226 15.4226C15.5789 15.2663 15.6667 15.0543 15.6667 14.8333V4.83332C15.6667 4.61231 15.5789 4.40035 15.4226 4.24407C15.2663 4.08779 15.0543 3.99999 14.8333 3.99999H13.1667V4.83332C13.1667 5.29356 12.7936 5.66666 12.3333 5.66666C11.8731 5.66666 11.5 5.29356 11.5 4.83332V3.99999H6.5V4.83332C6.5 5.29356 6.12691 5.66666 5.66667 5.66666C5.20643 5.66666 4.83333 5.29356 4.83333 4.83332V3.99999ZM4 8.16666C4 7.70642 4.3731 7.33332 4.83333 7.33332H13.1667C13.6269 7.33332 14 7.70642 14 8.16666C14 8.62689 13.6269 8.99999 13.1667 8.99999H4.83333C4.3731 8.99999 4 8.62689 4 8.16666Z"
                        class="fill-grey"
                    />
                </svg>
            </div>
        </button>
        <DatePicker v-if="show" :is-required="required" v-model="date" @update:modelValue="(e) => calendarUpdated(e)" />
    </InputWrapper>
</template>

<script lang="ts" setup>
import { DatePicker } from 'v-calendar';
import 'v-calendar/style.css';
import { ref } from 'vue';
import type { BaseInputProps } from '../types';
import InputWrapper from '../InputWrapper/InputWrapper.vue';

export interface DatetimePickerInputProps extends BaseInputProps {
    showCalendar?: boolean;
}

const props = withDefaults(defineProps<DatetimePickerInputProps>(), {
    showCalendar: false,
});

const emit = defineEmits(['update:modelValue']);

const isInvalid = props.errors && props.errors?.length > 0;

const show = ref(props.showCalendar);

const date = ref('');

const toggleCalendar = (state: boolean) => {
    show.value = state;
};

const calendarUpdated = (date: Date) => {
    emit('update:modelValue', date);
    toggleCalendar(false);
};
</script>
