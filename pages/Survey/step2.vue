<template>
  <div>
    <v-app-bar color="primary" flat dense dark>
      <v-toolbar-title>Survey</v-toolbar-title>
    </v-app-bar>
    <v-container class="pb-0 pt-0">
      <v-row>
        <v-col cols="12">
          <div class="set-padding text-center mt-12 pb-0">
            <h1 class="text-title text-primary">Step 2 of 3</h1>
          </div>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="10">
          <h2 class="text-center mt-1 question">
            Which parts of the event did
            <br />you enjoy?
          </h2>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12 mt-5">
          <v-textarea v-model="form.survey2" name="input-7-4" label="Comments"></v-textarea>
        </v-col>
      </v-row>
      <v-btn rounded color="primary" class="w-100 mt-100 my-btn" @click="next">Next</v-btn>
      <div class="w-100 mt-3 my-btn text-primary text-center" @click="back">Back</div>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        survey2: this.$store.getters.getSurvey.survey2
      }
    };
  },
  mounted() {},
  methods: {
    next() {
      this.$store.dispatch("setSurvey", this.form);
      this.$axios
        .patch(
          "https://nuxt-test-e6f70.firebaseio.com/survey/line:0001.json",
          this.form
        )
        .then(res => {
          this.$router.push("/survey/step3");
        })
        .catch(e => console.log(e));
    },
    back() {
      this.$router.push("/survey");
    }
  }
};
</script>

<style lang="scss" scoped>
.question {
  font-size: 20px;
}
</style>