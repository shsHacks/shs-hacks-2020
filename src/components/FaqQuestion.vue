<template>
  <div class="faq-question" :class="{ expanded }" @click="onClick" :style="{ height: `${height}px`}">
    <div class="container">
      <div class="question">{{ question }}</div>
      <div class="answer">{{ answer }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    question: { type: String, required: true },
    answer: { type: String, required: true },
  },
  data() {
    return {
      expanded: false,
      height: 0,
    }
  },
  mounted() {
    this.setHeight();
  },
  methods: {
    onClick() {
      this.expanded = !this.expanded;
      this.setHeight();
    },
    setHeight() {
      if (this.expanded) {
        this.height = this.$el.querySelector('.container').offsetHeight;
      } else {
        this.height = this.$el.querySelector('.question').offsetHeight;
      }
    }
  }
}
</script>

<style lang="sass" scoped>
@import 'src/style.sass'

.faq-question
  +shadow
  margin: 15px
  border-radius: 20px
  // padding: 15px
  background-color: var(--color)
  cursor: pointer
  overflow: hidden
  transition: height .3s, background-color .3s
  
  .question
    font-size: 1.3em
    font-weight: bold
    text-align: center
    padding: 15px 20px
    box-sizing: border-box
    color: white
    width: 100%
    white-space: nowrap
    transition: color .3s, width .3s

  .answer
    // height: 0
    // overflow: hidden
    margin: 0 20px
    padding-bottom: 7.5px
    font-size: 1.1em
    transition: transform .3s
    white-space: pre-line

  &.expanded
    background-color: white

    .question
      color: var(--color)
      width: 0 // hack to animate text from align:center to align:left (effectively)

    .answer
      transform: translateY(-7.5px)
</style>

