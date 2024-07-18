<template>
    <InputWrapper v-bind="{ id, label, errors, required }" class="text-input">
        <input
            :class="[
                'rounded-lg border border-solid p-3 text-base',
                isInvalid ? 'border-red' : 'border-grey',
                disabled ? 'bg-gray-100' : '',
            ]"
            v-bind="{
                placeholder,
                disabled,
                name,
                id,
                required,
                value,
            }"
            @input="updateValue"
            :aria-invalid="isInvalid"
            data-testid="input"
        />
    </InputWrapper>
</template>

<script lang="ts" setup>
import InputWrapper from '../InputWrapper/InputWrapper.vue';
import type { BaseInputProps } from '../types';

export interface TextInputProps extends BaseInputProps {
    modelValue: string;
}

const props = defineProps<TextInputProps>();

const emit = defineEmits(['update:modelValue']);

const isInvalid = props.errors && props.errors?.length > 0;

const updateValue = (event: Event) => {
    // @ts-ignore
    emit('update:modelValue', event.target?.value);
};
</script>
