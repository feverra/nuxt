<template>
  <div>
    <v-app-bar color="primary" flat dense dark>
      <v-toolbar-title>Register Workshop</v-toolbar-title>
    </v-app-bar>
    <v-container class="pb-0 pt-0">
      <v-row>
        <v-col cols="12">
          <div class="mt-3 text-primary text-title text-center">{{list.date}}</div>
        </v-col>
        <v-col cols="12">
          <Card
            v-for="item in list.sessions"
            :key="item.id"
            :session="item"
            :active="selectedWorkshop.includes(item.id)"
            @moreDetail="moreDetail(item)"
            @chooseWorkshop="chooseWorkshop(item)"
          />
        </v-col>
        <v-col cols="12">
          <div class="set-padding">
            <v-btn rounded color="primary" class="w-100 mt-3 my-btn" @click="next">Next</v-btn>
            <div
              class="w-100 mt-3 my-btn text-primary text-center"
              @click="back"
              v-if="index >0"
            >Back</div>
          </div>
        </v-col>
      </v-row>
      <v-dialog v-model="isShowDialog" max-width="290">
        <v-card class="dialog-card">
          <v-img class="white-text align-end" height="200px" :src="dialog.image"></v-img>
          <v-card-title class="headline">{{dialog.title}}</v-card-title>
          <v-card-text>
            <p>{{dialog.time}}</p>
            <p>{{dialog.place}}</p>
            <p class="detail">{{dialog.detail}}</p>
            <p>
              Speaker
              <br />
              <span v-html="dialog.spakers"></span>
            </p>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class="text-primary" text @click="isShowDialog = false">Ok</v-btn>
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
      isShowDialog: false,
      index: 0,
      dialog: {
        title: "",
        time: "",
        place: "",
        image: "",
        detail: "",
        spakers: ""
      },
      selectedWorkshop: [],
      workshops: this.$store.getters.getWorkshop
    };
  },
  mounted() {},
  computed: {
    list() {
      return this.workshops[this.index];
    }
  },
  components: { Card },
  methods: {
    next() {
      if (this.index !== this.workshops.length - 1) {
        this.index += 1;
      } else {
        console.log("done");
        this.$axios
          .patch(
            "https://nuxt-test-e6f70.firebaseio.com/workshops/line:0001.json",
            { ...this.selectedWorkshop }
          )
          .then(res => {
            this.$router.push("/workshop/done");
          })
          .catch(e => console.log(e));
      }
    },
    back() {
      if (this.index != 0) {
        this.index -= 1;
      }
    },
    moreDetail(item) {
      this.dialog = item;
      this.isShowDialog = true;
    },
    chooseWorkshop(item) {
      let listId = this.list.sessions.map(session => session.id);
      this.selectedWorkshop = this.selectedWorkshop.filter(
        session => !listId.includes(session)
      );
      this.selectedWorkshop.push(item.id);
    }
  }
};
</script>

<style lang="scss" scoped>
.dialog-card {
  .detail {
    margin: 10px 0;
  }
  p {
    margin-bottom: 0;
  }
  .v-card__title.headline {
    font-size: 20px;
  }
  .v-card__text {
    padding-bottom: 0;
  }
}
</style>