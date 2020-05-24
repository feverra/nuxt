<template>
  <div>
    <v-app-bar color="primary" flat dense dark>
      <v-toolbar-title>Agenda</v-toolbar-title>
    </v-app-bar>
    <v-sheet elevation="6">
      <v-tabs v-model="tab" grow>
        <v-tab v-for="item in agenda" :key="item.date">{{ item.date }}</v-tab>
      </v-tabs>
    </v-sheet>
    <v-tabs-items v-model="tab">
      <v-tab-item v-for="item in agenda" :key="item.date">
        <v-container class="pt-0">
          <v-row>
            <v-col cols="12" v-for="session in item.sessions" :key="session.title">
              <v-card class="agenda-card" :class="session.type == 'set' ? 'card-set' : ''">
                <v-card-text v-if="session.type !== 'set'">
                  <p class="time pb-0">{{session.time}}</p>
                  <v-row>
                    <v-col cols="4" class="text-center pt-0 pb-0">
                      <img :src="session.image" class="agenda-image" />
                    </v-col>
                    <v-col cols="8" class="pt-0 pb-0">
                      <v-card-title class="pl-0 pt-0 pb-3 text-primary text-title">{{session.title}}</v-card-title>
                      <v-card-subtitle class="pa-0">{{session.spaker}}</v-card-subtitle>
                    </v-col>
                  </v-row>
                </v-card-text>
                <div v-else>
                  <v-card-text>
                    <p class="time pb-0">{{session.time}}</p>
                    <v-row v-for="(set,key) in session.sessionSet" :key="set.title">
                      <v-col cols="4" class="text-center pt-0 pb-0">
                        <img :src="set.image" class="agenda-image" />
                      </v-col>
                      <v-col cols="8" class="pt-0 pb-0">
                        <v-card-title class="pl-0 pt-0 pb-3 text-primary text-title">{{set.title}}</v-card-title>
                        <v-card-subtitle class="pa-0">{{set.spaker}}</v-card-subtitle>
                        <p class="mb-0">{{set.duringTime}}</p>
                      </v-col>
                      <hr v-if="key != session.sessionSet.length -1" />
                    </v-row>
                  </v-card-text>
                </div>
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
      tab: null
    };
  },
  asyncData({ store }) {
    return {
      agenda: store.getters.getAgenda
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
  &.card-set {
    border-left: 3px solid #1a56be;
    .v-card__text + .v-card__text {
      padding-top: 0 !important;
    }
  }
  hr {
    width: 90%;
    margin: 15px auto 15px auto;
    height: 1px;
    background-color: #bdbdbd;
    border: 0;
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