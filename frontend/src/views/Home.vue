<template>
    <!-- <div>{{  }}</div> -->
    <!-- `greet` is the name of the method defined above -->
    <h1>{{qq}}</h1>
    <h1>{{ count }}</h1>
    <button @click="count++">點我+1</button>
</template>

<script setup>
import { ref ,onMounted} from 'vue'
// import { useAuthStore } from '/stores/auth'
import { useRouter } from 'vue-router'
let count = ref(0) //這邊就沒有響應式
let qq = ref('') //ref 會讓數據變成響應式
onMounted(()=>{
    async function hello() {
        const res = await fetch('/api/hello')
        const data = await res.json()
        
        console.log(data)
        qq.value = data.string
        console.log(qq)
    }
    hello()
console.log(count.value)
})

</script>
<style>
@keyframes shake {
  0% { transform: translateX(0); }
  20% { transform: translateX(-6px); }
  40% { transform: translateX(6px); }
  60% { transform: translateX(-4px); }
  80% { transform: translateX(4px); }
  100% { transform: translateX(0); }
}

.animate-shake {
  animation: shake 0.4s ease-in-out;
}
</style>