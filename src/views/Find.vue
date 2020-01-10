<template>
    <div>发现</div>
    <div>{{age}}</div>
</template>
<script>
function time() {
    console.log('我就是龙的传人')
}
export default {
    setup() {
        time()
        return {
            age:'1111'
        }
    },
}
</script>