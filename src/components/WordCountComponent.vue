<template>
    <div>
      <textarea v-model="inputText" @input="text" class="w-full h-[300px] border-2 border-rounded border-black p-6"></textarea>
      <p>слов: {{ wordCount }}, символов: {{ symbolsCount }}</p>
    </div>
</template>
  
<script>
export default {
  data() {
    return {
      inputText: '',
    };
  },
  computed: {
    symbolsCount() {
      const chars = this.inputText.split('').filter((chars) => chars.trim() !== '');
      return chars.length;
    },
    wordCount() {
      const words = this.inputText.split(' ').filter((word) => word.trim() !== '');
      return words.length;
    },
  },
};
</script>
