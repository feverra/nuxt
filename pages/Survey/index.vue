<template>
  <div>
    <v-app-bar color="primary" flat dense dark>
      <v-toolbar-title>Survey</v-toolbar-title>
    </v-app-bar>
    <v-container class="pb-0 pt-0">
      <v-row>
        <v-col cols="12">
          <div class="set-padding text-center mt-12 pb-0">
            <h1 class="text-title text-primary">Step 1 of 3</h1>
          </div>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="10">
          <h2 class="text-center mt-1 question">
            How would you rate
            <br />the event overall?
          </h2>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12 mt-5">
          <v-slider class="slider" v-model="form.survey1" thumb-label="always" min="0" max="10"></v-slider>
        </v-col>
      </v-row>
      <v-btn rounded color="primary" class="w-100 mt-100 my-btn" @click="next">Next</v-btn>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        survey1: this.$store.getters.getSurvey.survey1
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
          this.$router.push("/survey/step2");
        })
        .catch(e => console.log(e));
    }
  }
};
</script>

<style lang="scss" scoped>
.question {
  font-size: 20px;
}
.slider {
  margin-top: 90px;
  ::v-deep {
    .v-slider__thumb {
      height: 16px !important;
      width: 16px !important;
    }
    .v-slider__thumb-label {
      height: 45px !important;
      width: 45px !important;
      font-size: 20px;
    }
    .v-slider__track-background {
      border: 0 solid;
      background: #00000042 !important;
    }
    .v-slider--horizontal .v-slider__track-container {
      height: 4px;
    }
  }
}
</style>