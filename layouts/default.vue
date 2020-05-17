<template>
  <v-app>
    <nuxt></nuxt>
    <Diglog />
  </v-app>
</template>

<script>
import Diglog from "@/components/Diglog";
export default {
  data: () => ({}),
  components: {
    Diglog
  }
};
</script>

<style lang="scss">
.v-application {
  font-family: "Quicksand", sans-serif;
  .primary {
    background-color: #1a56be !important;
    border-color: #1a56be !important;
  }
}

.v-toolbar__title {
  text-align: center;
  width: 100%;
  font-weight: bold;
}
.text-main {
  font-size: 20px;
}
.text-primary {
  color: #1a56be;
}
.text-title {
  font-size: 20px;
  font-weight: bold;
}

.w-100 {
  width: 100%;
}
.my-btn {
  height: auto !important;
  padding: 10px 0 !important;
  font-size: 20px !important;
  text-transform: none !important;
  font-weight: bold;
  min-height: 50px;
  &.outlined {
    border: 2px solid #1a56be;
    border-radius: 28px;
    color: #1a56be;
    line-height: normal;
  }
}
.set-padding {
  padding: 0 10px;
}
</style>
