<template>
  <div>
    <div>
      <span>选中文字：</span>
      <span>{{ selectedText }}</span>
    </div>

    <div>
      <textarea v-model="text" @mouseup="getSelectedText"></textarea>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const text = ref('')
    const selectedText = ref('')

    const getSelectedText = () => {
      selectedText.value = window.getSelection().toString()
    }

    return {
      text,
      selectedText,
      getSelectedText
    }
  }
}
</script>
