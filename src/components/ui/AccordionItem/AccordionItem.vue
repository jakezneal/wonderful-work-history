<template>
    <div class="accordion-item border-grey rounded-lg border-2 border-solid px-6 py-2.5">
        <div class="flex flex-row items-center justify-between gap-3">
            <button
                @click.prevent="toggleAccordion"
                class="flex flex-row items-center gap-4"
                :aria-expanded="expanded"
                :aria-controls="`panel-${id}`"
                :id="`accordion-${id}`"
                data-testid="button"
            >
                <span v-if="expanded">
                    <svg
                        width="14"
                        height="8"
                        viewBox="0 0 14 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        data-testid="expandedSvg"
                    >
                        <path
                            d="M11.8546 7.64465L6.99374 2.9309L2.13289 7.64465C1.6443 8.11845 0.855033 8.11845 0.366443 7.64465C-0.122149 7.17084 -0.122149 6.40547 0.366443 5.93166L6.11678 0.355353C6.60537 -0.118451 7.39463 -0.118451 7.88322 0.355353L13.6336 5.93166C14.1221 6.40547 14.1221 7.17084 13.6336 7.64465C13.145 8.1063 12.3432 8.11845 11.8546 7.64465Z"
                            fill="#222222"
                        />
                    </svg>
                </span>
                <span v-else>
                    <svg
                        width="14"
                        height="8"
                        viewBox="0 0 14 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        data-testid="expandSvg"
                    >
                        <path
                            d="M2.14541 0.355353L7.00626 5.0691L11.8671 0.355353C12.3557 -0.118451 13.145 -0.118451 13.6336 0.355353C14.1221 0.829157 14.1221 1.59453 13.6336 2.06834L7.88322 7.64465C7.39463 8.11845 6.60537 8.11845 6.11678 7.64465L0.366443 2.06834C-0.122148 1.59453 -0.122148 0.829157 0.366443 0.355353C0.855034 -0.106302 1.65682 -0.118451 2.14541 0.355353Z"
                            fill="#222222"
                        />
                    </svg>
                </span>
                <div class="flex flex-col">
                    <p class="text-left" data-testid="title">{{ accordionTitle }}</p>
                    <p class="text-grey text-left" data-testid="dates">{{ workDates }}</p>
                </div>
            </button>
            <button @click.prevent="console.log('remove')" class="text-red flex flex-row items-center gap-1">
                <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M8.82667 6L8.596 12M5.404 12L5.17333 6M11.8187 3.86C12.0467 3.89467 12.2733 3.93133 12.5 3.97067M11.8187 3.86L11.1067 13.1153C11.0776 13.4922 10.9074 13.8441 10.63 14.1008C10.3527 14.3576 9.9886 14.5001 9.61067 14.5H4.38933C4.0114 14.5001 3.64735 14.3576 3.36999 14.1008C3.09262 13.8441 2.92239 13.4922 2.89333 13.1153L2.18133 3.86M11.8187 3.86C11.0492 3.74368 10.2758 3.6554 9.5 3.59533M2.18133 3.86C1.95333 3.894 1.72667 3.93067 1.5 3.97M2.18133 3.86C2.95076 3.74368 3.72416 3.6554 4.5 3.59533M9.5 3.59533V2.98467C9.5 2.198 8.89333 1.542 8.10667 1.51733C7.36908 1.49376 6.63092 1.49376 5.89333 1.51733C5.10667 1.542 4.5 2.19867 4.5 2.98467V3.59533M9.5 3.59533C7.83581 3.46672 6.16419 3.46672 4.5 3.59533"
                        stroke="#E2516B"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>

                Remove
            </button>
        </div>
        <div
            v-if="expanded"
            :id="`panel-${id}`"
            role="region"
            :aria-labelledby="`accordion-${id}`"
            class="pt-8"
            data-testid="panel"
        >
            <slot />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';

export type AccordionItemProps = {
    title?: string;
    company?: string;
    start?: Date | string;
    end?: Date | string;
};

const props = withDefaults(defineProps<AccordionItemProps>(), {
    title: 'Job Title',
    company: 'Company Name',
    start: new Intl.DateTimeFormat('en-GB').format(new Date()),
});

const expanded = ref(false);

const toggleAccordion = () => {
    expanded.value = !expanded.value;
};

const id = computed(() => props.company?.toLowerCase().replace(' ', '-'));

const accordionTitle = computed(() => `${props.title}, ${props.company}`);
const workDates = computed(() => {
    if (!props.end) {
        return `Since ${props.start}`;
    }

    return `${props.start} - ${props.end}`;
});
</script>
