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
            :aria-invalid="isInvalid"
            data-testid="input"
        />
    </InputWrapper>
</template>

<script lang="ts" setup>
import InputWrapper from '../InputWrapper/InputWrapper.vue';
import type { BaseInputProps } from '../types';

export interface TextInputProps extends BaseInputProps {}

const props = defineProps<TextInputProps>();

const isInvalid = props.errors && props.errors?.length > 0;
</script>
