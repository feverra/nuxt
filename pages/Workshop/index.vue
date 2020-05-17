<template>
  <div>
    <v-app-bar color="primary" flat dense dark>
      <v-toolbar-title>Register Workshop</v-toolbar-title>
    </v-app-bar>
    <v-container class="pb-0 pt-0">
      <v-row>
        <v-col cols="12">
          <div class="mt-3 text-primary text-title text-center">20 March 2020</div>
        </v-col>
        <v-col cols="12">
          <Card
            :active="selectedWorkshop==1"
            @moreDetail="moreDetail"
            @chooseWorkshop="chooseWorkshop(1)"
          />
        </v-col>
        <v-col cols="12">
          <Card
            :active="selectedWorkshop==2"
            @moreDetail="moreDetail"
            @chooseWorkshop="chooseWorkshop(2)"
          />
        </v-col>
        <v-col cols="12">
          <div class="set-padding">
            <v-btn rounded color="primary" class="w-100 mt-3 my-btn" @click="next">Next</v-btn>
          </div>
        </v-col>
      </v-row>
      <v-dialog v-model="dialog" max-width="290">
        <v-card class="dialog-card">
          <v-img
            class="white-text align-end"
            height="200px"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          ></v-img>
          <v-card-title class="headline">Design Thinking 1</v-card-title>
          <v-card-text>
            <p>Time: 13:00 - 16:00</p>
            <p>Place: Room 101</p>
            <p
              class="detail"
            >Design Thinking is a design methodology that provides a solution-based approach to solving problems. We will focus on the five-stage Design Thinking model. Empathise, Define (the problem), Ideate, Prototype, and Test.</p>
            <p>
              Speaker
              <br />- Mr. John David
              <br />- Mr. David Round
            </p>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class="text-primary" text @click="dialog = false">Ok</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-container>
  </div>
</template>

<script>
import Card from "~/components/Card";
export default {
  data() {
    return {
      dialog: false,
      selectedWorkshop: 0
    };
  },
  components: { Card },
  methods: {
    next() {},
    moreDetail() {
      this.dialog = true;
    },
    chooseWorkshop(id) {
      console.log(id);
      this.selectedWorkshop = id;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>