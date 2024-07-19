import { defineStore } from 'pinia';
import { ref } from 'vue';

interface WorkItem {
    title: string;
    company: string;
    start: Date | string;
    end?: Date | string;
}

export const useWorkStore = defineStore('work', () => {
    const history = ref<WorkItem[]>([]);

    function addItem(item: WorkItem) {
        history.value.push(item);
    }

    function getItems(): WorkItem[] {
        return history.value;
    }

    function deleteItem(item: string) {
        const newHistory = history.value.filter(({ company }) => company !== item);
        return (history.value = newHistory);
    }

    return { history, addItem, getItems, deleteItem };
});
