import { ref, onMounted,onUnmounted,computed } from 'vue'

export default function setTime() {
    let timer = null
    const rawTime = ref(0)
    const computedTime = computed(() => {
        if(rawTime.value < 60) {
            return `${rawTime.value}秒`
        }else if(rawTime.value < 3600) {
            return `${parseInt(rawTime.value / 60)}分${rawTime.value % 60}秒`
        }else {
            const hour = parseInt(rawTime.value / 3600)
            const rest = rawTime.value - hour * 3600
            return `${hour}时${parseInt(rest / 60)}分${rest % 60}秒`
        }
    })
    onMounted(() => {
        timer = setInterval(() => {
            ++rawTime.value
        },1000)
    })
    onUnmounted(() => {
        clearInterval(timer)
    })
    return {
        rawTime,
        computedTime
    }
}