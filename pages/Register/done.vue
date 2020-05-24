<template>
  <div>
    <v-app-bar color="primary" flat dense dark>
      <v-toolbar-title>Register</v-toolbar-title>
    </v-app-bar>
    <v-container class="pb-0 pt-0">
      <v-row>
        <v-col cols="12">
          <div class="set-padding text-center mt-12 pb-0">
            <img src="~/assets/Register@2x@2x.png" alt width="236px" />
            <h1 class="text-title">Welcome, {{name}}</h1>
            <p class="mt-7">
              Welcome to the event,
              <br />Tons of workshop are waiting for you.
              <br />We hope you have a good time here.
            </p>
            <v-btn
              rounded
              color="primary"
              class="w-100 mt-8 my-btn"
              @click="workshop"
            >Register Workshop</v-btn>
            <v-btn class="w-100 mt-8 my-btn outlined text-primary" @click="close">Close</v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: this.$store.getters.getRegister.firstname
    };
  },
  mounted() {},
  methods: {
    workshop() {
      this.$router.push("/workshop");
    },
    close() {
      liff.closeWindow();
    }
  }
};
</script>

<style lang="scss" scoped>
</style>