<template>
  <sliding-title title="FAQ" :scroll="scroll" :color="color">
    <div class="faq" :style="{ '--color': color}">
      <div class="questions-container" v-for="column in columns" :style="{ width: `calc(100% / ${numberOfColumns})` }">
        <faq-question v-for="question in column" :question="question.question" :answer="question.answer"/>
      </div>
    </div>
  </sliding-title>
</template>

<script>
import SlidingTitle from 'src/components/SlidingTitle.vue';
import FaqQuestion from 'src/components/FaqQuestion.vue';

import questions from 'src/data/faq.json';
// TODO: Add "What if I don't know how to code>" to FAQ

export default {
  props: {
    scroll: { type: Number, required: true },
    color: { type: String, required: true },
  },
  data() {
    return {
      numberOfColumns: 2,
      expanded: Array(questions.length).fill(false),
    };
  },
  computed: {
    columns() {
      // The following sorts all the questions into the columns horizontally
      // For example, the questions q1, q2, q3, and q4 would become 
      //     - [[q1, q3], [q2, q4]] (2 columns)
      //     - [[q1, q4], [q2], [q3]] (3 columns)
      //     and so on...

      const columns = [];
      for (let i = 0; i < this.numberOfColumns; i++) {
        const column = [];
        for (let j = i; j < questions.length; j += this.numberOfColumns) {
          const question = Object.assign({ index: j }, questions[j]);
          column.push(question);
        }
        columns.push(column);
      }

      return columns;
    }
  },
  methods: {
    expandOrCollapse(index) {
      // need to use splice because https://vuejs.org/v2/guide/list.html#Caveats
      this.expanded.splice(index, 1, !this.expanded[index]);
    }
  },
  components: { SlidingTitle, FaqQuestion }
}
</script>

<style lang="sass" scoped>
.faq
  display: flex

  .questions-container
    display: flex
    flex-direction: column

</style>

