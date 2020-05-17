<template>
  <v-dialog v-model="getDialog.isShow" width="500" persistent>
    <v-card>
      <v-card-title>{{getDialog.title}}</v-card-title>
      <v-card-text v-html="getDialog.massage"></v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="green darken-1" text @click="hideDialog">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data: () => ({}),
  computed: {
    getDialog() {
      return this.$store.getters.getDialog;
    }
  },
  methods: {
    hideDialog() {
      this.$store.dispatch("setDialog", {
        isShow: false
      });
    }
  }
};
</script>