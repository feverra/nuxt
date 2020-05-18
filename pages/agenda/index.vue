<template>
  <div>
    <v-app-bar color="primary" flat dense dark>
      <v-toolbar-title>Agenda</v-toolbar-title>
    </v-app-bar>
    <v-sheet elevation="6">
      <v-tabs v-model="tab" grow>
        <v-tab v-for="item in items" :key="item.tab">{{ item.tab }}</v-tab>
      </v-tabs>
    </v-sheet>
    <v-tabs-items v-model="tab">
      <v-tab-item v-for="item in items" :key="item.tab">
        <v-container class="pt-0">
          <v-row>
            <v-col cols="12">
              <v-card class="agenda-card">
                <v-card-text>
                  <p class="time pb-0">10:00 - 11:45</p>
                  <v-row>
                    <v-col cols="4" class="text-center pt-0 pb-0">
                      <img
                        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                        class="agenda-image"
                      />
                    </v-col>
                    <v-col cols="8" class="pt-0  pb-0">
                      <v-card-title class="pl-0 pt-0 pb-3 text-primary text-title">INTRODUCTIONS</v-card-title>
                      <v-card-subtitle class="pa-0">Marvelous Team</v-card-subtitle>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-card>
              <v-card class="agenda-card">
                <v-card-text>
                  <p class="time pb-0">10:00 - 11:45</p>
                  <v-row>
                    <v-col cols="4" class="text-center pt-0  pb-0">
                      <img
                        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                        class="agenda-image"
                      />
                    </v-col>
                    <v-col cols="8" class="pt-0  pb-0">
                      <v-card-title class="pl-0 pt-0 pb-3 text-primary text-title">INTRODUCTIONS</v-card-title>
                      <v-card-subtitle class="pa-0">Marvelous Team</v-card-subtitle>
                    </v-col>
                  </v-row>
                </v-card-text>
                <v-card-text>
                  <v-row>
                    <v-col cols="4" class="text-center pt-0  pb-0">
                      <img
                        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                        class="agenda-image"
                      />
                    </v-col>
                    <v-col cols="8" class="pt-0  pb-0">
                      <v-card-title class="pl-0 pt-0 pb-3 text-primary text-title">INTRODUCTIONS</v-card-title>
                      <v-card-subtitle class="pa-0">Marvelous Team</v-card-subtitle>
                    </v-col>
                  </v-row>
                </v-card-text>
                <v-card-text>
                  <v-row>
                    <v-col cols="4" class="text-center pt-0  pb-0">
                      <img
                        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                        class="agenda-image"
                      />
                    </v-col>
                    <v-col cols="8" class="pt-0  pb-0">
                      <v-card-title class="pl-0 pt-0 pb-3 text-primary text-title">INTRODUCTIONS</v-card-title>
                      <v-card-subtitle class="pa-0">Marvelous Team</v-card-subtitle>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-tab-item>
    </v-tabs-items>
    <v-container class="pb-0 pt-0"></v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tab: null,
      items: [
        { tab: "20 March 20", content: "Tab 1 Content" },
        { tab: "21 March 20", content: "Tab 2 Content" }
      ]
    };
  },
  mounted() {},
  methods: {}
};
</script>

<style lang="scss" scoped>
.agenda-card {
  .time {
    color: #1a56be;
    font-weight: bold;
  }
  .agenda-image {
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 50%;
  }
  & + .agenda-card {
    margin-top: 15px;
  }
}
.v-tabs {
  margin-bottom: 15px;
}
.v-tab {
  background-color: #efefef !important;
  font-weight: bold;
  color: #4d4d4d;
  &.v-tab--active {
    color: #1a56be !important;
  }
  & + .v-tab {
    border-left: #bdbdbd solid 1px;
  }
}
</style>