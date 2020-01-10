import { ref, onMounted,onUnmounted } from 'vue'

export default function setTime() {
    let timer = null
    const time = ref(0)
    onMounted(() => {
        timer = setInterval(() => {
            ++time.value
        },1000)
    })
    onUnmounted(() => {
        clearInterval(timer)
    })
    return {
        time
    }
}