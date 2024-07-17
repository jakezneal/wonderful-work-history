export default (value) => `<template>
    <div class="${value.component.name.kebab}">
        ${value.component.name.pascal}
    </div>
</template>

<script lang="ts" setup>
export type ${value.component.name.pascal}Props = {};

const props = defineProps<${value.component.name.pascal}Props>();
</script>
`;
