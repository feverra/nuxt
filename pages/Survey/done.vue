<template>
  <div>
    <v-app-bar color="primary" flat dense dark>
      <v-toolbar-title>Register</v-toolbar-title>
    </v-app-bar>
    <v-container class="pb-0 pt-0">
      <v-row>
        <v-col cols="12">
          <div class="set-padding text-center mt-12 pb-0">
            <img src="~/assets/survey@2x@2x.png" alt width="236px" />
            <h1 class="text-title mt-4">Thank you</h1>
            <p class="mt-7">
              Thanks for completing this survey,
              <br />your feedback will help us improve the
              <br />next event.
            </p>
            <v-btn class="w-100 mt-100 my-btn outlined text-primary" @click="close">Close</v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {
    close() {
      this.$router.push("/workshop");
    }
  }
};
</script>

<style lang="scss" scoped>
</style>