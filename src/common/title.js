import { onMounted } from 'vue'

export default function setTitle(title) {
    onMounted(() => {
        document.title = title
    })
}