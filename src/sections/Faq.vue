<template>
  <div id="faq">
    <div class="questions-container" v-for="column in columns" :key="column[0].question">
      <div
        @click="change($event, i, true)"
        v-for="question in column"
        :key="question.question"
        class="circlebox"
      >
        <p @click="change($event, question.index, false)">{{ question.question }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      questions: [
        {
          question: "What is a hackathon?",
          answer:
            "A hackathon is a 'coding marathon'. Participants form groups of one to five people and spend 24 hours developing whatever project excites them. Through workshops, mentors, mini-events, and teambuilding, participants will be able to create their project, grow their network, and learn exciting new concepts all in one night."
        },
        {
          question: "What can I make?",
          answer:
            "Anything! Machine learning, games, websites, apps, animations- all will be present at shsHacks! However, we encourage you to try to think 'outside-of-the-box'."
        },
        {
          question: "How do I find a team?",
          answer:
            "If you've got a group of friends already, you're good to go! Register individually and meet up at shsHacks. However, you absolutely don't need to come with a premade team! At shsHacks, we will coordinate and help make sure everyone has a team before the event starts!"
        },
        {
          question: "Who can attend?",
          answer:
            "shsHacks is open to all high school students! College students may contact us to be mentors."
        },
        {
          question: "How much does it cost?",
          answer:
            "shsHacks is completely free! We will provide free food, swag, and more."
        },
        {
          question: "What should I bring?",
          answer:
            "You will need a laptop, chargers, a high school ID, and enthusiasm!<br/><br/>A full list includes:<br/>- Phone charger and headphones or earbuds<br/>- Reusable water bottle (recommended)<br/>- Any special software/programs you might want to use to make your project (optional; we’ll list several possibilities at the event)<br/>- Toothbrush, toothpaste, contacts if you wear them, any other toiletries<br/>- Comfy clothes & a change of clothes (recommended)<br/>- Sleeping bag/pillow if you plan on sleeping at some point (highly recommended)<br/>- If possible, a laptop and all of its necessary accessories (charger? mouse? mouse backup batteries?). If you don’t have access to a computer to bring, we’ll have laptops available.<br/>- Backpack/bag to hold what you bring + swag from the event.<br/>- Optional: Notebook for brainstorming, your favorite snacks (on top of snacks we provide)<br/>- Signed liability waiver<br/>- Any necessary medication/allergy medication<br/>- SHS Student ID if Stevenson student, or a chaperone from your school if a non-SHS student<br/>- A good night’s sleep and a positive attitude!"
        },
        {
          question: "How can I get there?",
          answer:
            "You will have to provide your own transportation to Adlai E. Stevenson High School."
        },
        {
          question: "Who owns the rights?",
          answer:
            "You and your team own all the rights to everything you create at shsHacks!"
        },
        {
          question: "I can't code yet",
          answer:
            "With beginner-friendly workshops, mentors around the clock, and friendly hackers around you, shsHacks is the perfect place to push your first line of code! We'll have everything to help you build something you're proud of!"
        }
      ]
    };
  },
  methods: {
    change: function(event, i, b) {
      if (b) {
        event.target.firstChild.innerHTML =
          this.questions[i].question + "<br/><br/>" + this.questions[i].answer;
        event.target.classList.add("reveal");
      } else {
        event.target.innerHTML =
          this.questions[i].question + "<br/><br/>" +this.questions[i].answer;
        event.target.parentElement.classList.add("reveal");
      }
    }
  },
  computed: {
    columns() {
      // The following sorts all the questions into the columns horizontally
      // For example, the questions q1, q2, q3, and q4 would become 
      //     - [[q1, q3], [q2, q4]] (2 columns)
      //     - [[q1, q4], [q2], [q3]] (3 columns)
      //     and so on...
      const columns = [];
      for (let i = 0; i < 3; i++) {
        const column = [];
        for (let j = i; j < this.questions.length; j += 3) {
          const question = Object.assign({ index: j }, this.questions[j]);
          column.push(question);
        }
        columns.push(column);
      }
      return columns;
    }
  }
};
</script>

<style scoped>
.circlebox {
  margin: 2vw;
  text-align: left;
  padding-bottom: 0; 
  margin-bottom: 0; 
  justify-content: center;
  background: rgb(246, 255, 123);
  border: 1px solid #000000;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
}
#faq {
  display: flex;
  flex-flow: row wrap;
  align-content: center;
  justify-content: center;
  width: 100%;
}
p {
  width: 20vw;
  margin: 1vw;
}
@media screen and (max-width: 1000px) {
  .circlebox {
    margin: 2vw;
  }
  p {
    margin: 2vw;
    width: 30vw;
  }
}
.reveal {
  animation-name: revealer;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
}
/* Safari 4.0 - 8.0 */
@-webkit-keyframes revealer {
  from {
    background: rgb(246, 255, 123);
    color: black;
  }
  to {
    background: rgb(1, 165, 69);
    color: white;
  }
}

/* Standard syntax */
@keyframes revealer {
  from {
    background: rgb(246, 255, 123);
    color: black;
  }
  to {
    background: rgb(1, 165, 69);
    color: white;
  }
}
</style>