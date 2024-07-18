<template>
    <div class="input-wrapper flex w-full flex-col gap-1.5">
        <label :for="id" class="text-sm" data-testid="label">
            {{ label }}
            <span v-if="required" class="text-red" data-testid="asterisk">*</span>
        </label>
        <div>
            <slot />
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
import type { WrapperProps } from '../types';

export interface InputWrapperProps extends WrapperProps {}

const props = defineProps<InputWrapperProps>();

const isInvalid = props.errors && props.errors?.length > 0;
</script>
