<template>
  <div>
    <input v-model="inputText" placeholder="输入一个字符串" />
    <p>{{ reversedText }}</p>
  </div>
</template>

<script>
import { ref, computed } from 'vue'

export default {
  setup() {
    const inputText = ref('')

    const reversedText = computed(() => {
      if (inputText.value) {
        return inputText.value.split('').reverse().join('')
      } else {
        return ''
      }
    })

    return {
      inputText,
      reversedText
    }
  }
}
</script>
