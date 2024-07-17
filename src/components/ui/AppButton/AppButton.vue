<template>
    <button
        :class="[
            'app-button',
            props.variant === 'primary'
                ? 'text-white rounded-md bg-aqua px-8 py-4 hover:bg-aqua/70 focus:bg-aqua/70'
                : 'text-aqua',
        ]"
    >
        <span v-if="props.icon" class="pr-1" data-testid="icon">{{ props.icon }}</span>
        {{ props.text }}
    </button>
</template>

<script lang="ts" setup>
export type AppButtonProps = {
    variant?: string;
    text: string;
    icon?: string;
};

const props = defineProps<AppButtonProps>();
</script>
