<template>
  <div>
    <v-app-bar color="primary" flat dense dark>
      <v-toolbar-title>Survey</v-toolbar-title>
    </v-app-bar>
    <v-container class="pb-0 pt-0">
      <v-row>
        <v-col cols="12">
          <div class="set-padding text-center mt-12 pb-0">
            <h1 class="text-title text-primary">Step 3 of 3</h1>
          </div>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="10">
          <h2 class="text-center mt-1 question">
            Finally, would you
            <br />recommend our event to a
            <br />friend?
          </h2>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12 mt-5">
          <div class="select" :class="form.survey3 == 1?'actived':''" @click="form.survey3=1">
            <h1>Of course!</h1>
            <p>Definitely i’ll join next event.</p>
            <v-icon>check</v-icon>
          </div>
        </v-col>
        <v-col cols="12 mt-5">
          <div class="select" :class="form.survey3 == 2?'actived':''" @click="form.survey3=2">
            <h1>Not sure</h1>
            <p>Let me think again next time.</p>
            <v-icon>check</v-icon>
          </div>
        </v-col>
        <v-col cols="12 mt-5">
          <div class="select" :class="form.survey3 == 3?'actived':''" @click="form.survey3=3">
            <h1>No, thanks</h1>
            <p>It’s not my type.</p>
            <v-icon>check</v-icon>
          </div>
        </v-col>
      </v-row>
      <v-btn rounded color="primary" class="w-100 mt-10 my-btn" @click="submit">Submit</v-btn>
      <div class="w-100 mt-3 my-btn text-primary text-center" @click="back">Back</div>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        survey3: this.$store.getters.getSurvey.survey3
      }
    };
  },
  mounted() {},
  methods: {
    submit() {
      this.$axios
        .patch(
          "https://nuxt-test-e6f70.firebaseio.com/survey/line:0001.json",
          this.form
        )
        .then(res => {
          this.$router.push("/survey/done");
        })
        .catch(e => console.log(e));
    },
    back() {
      this.$router.push("/survey/step2");
    }
  }
};
</script>

<style lang="scss" scoped>
.question {
  font-size: 20px;
}
.select {
  border-bottom: 1px solid #e6e6e6;
  padding-bottom: 0px;
  color: #707070;
  position: relative;
  // &+.select{
  //   margin-top: 25px;
  // }
  .h1 {
    font-size: 20px;
  }
  .p {
    font-size: 18px;
    margin-bottom: 0;
  }
  .v-icon {
    position: absolute;
    right: 0;
    bottom: 25px;
    display: none;
  }
  &.actived {
    color: #1a56be;
    .v-icon {
      color: #1a56be;
      display: block;
    }
  }
}
</style>