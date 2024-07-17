<template>
    <div class="text-input flex w-full flex-col gap-1.5">
        <label :for="id" class="text-sm" data-testid="label">
            {{ label }}
            <span v-if="required" class="text-red" data-testid="asterisk">*</span>
        </label>
        <div>
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
            <div v-if="isInvalid" class="pt-2" data-testid="errorWrapper">
                <p
                    v-for="error in errors"
                    :key="error"
                    class="text-red"
                    tabindex="-1"
                    aria-live="assertive"
                    aria-atomic="true"
                    data-testid="error"
                >
                    {{ error }}
                </p>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import type { BaseInputProps } from '../types';

export interface TextInputProps extends BaseInputProps {}

const props = defineProps<TextInputProps>();

const isInvalid = props.errors && props.errors?.length > 0;
</script>
