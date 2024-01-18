<template>
  <div>
    <input v-model="inputText" placeholder="输入一个字符串" />
    <p>{{ capitalizedText }}</p>
  </div>
</template>

<script>
import { ref, computed } from 'vue'

export default {
  setup() {
    const inputText = ref('')

    const capitalizedText = computed(() => {
      if (inputText.value) {
        return inputText.value.charAt(0).toUpperCase() + inputText.value.slice(1)
      } else {
        return ''
      }
    })

    return {
      inputText,
      capitalizedText
    }
  }
}
</script>
