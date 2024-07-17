<template>
    <button
        :class="[
            'app-button',
            variant === 'primary'
                ? 'text-white rounded-md bg-aqua px-8 py-4 hover:bg-aqua/70 focus:bg-aqua/70'
                : 'text-aqua',
        ]"
    >
        <span v-if="icon" class="pr-1" data-testid="icon">{{ icon }}</span>
        {{ text }}
    </button>
</template>

<script lang="ts" setup>
export type AppButtonProps = {
    variant: string;
    text: string;
    icon?: string;
};

const props = withDefaults(defineProps<AppButtonProps>(), {
    variant: () => 'link',
});
</script>
