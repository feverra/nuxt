<template>
  <div>
    <v-app-bar color="primary" flat dense dark>
      <v-toolbar-title>Register</v-toolbar-title>
    </v-app-bar>
    <v-container class="pb-0 pt-0">
      <v-row>
        <v-col cols="12">
          <div class="mt-8 text-primary text-title text-center">Step 2 of 2</div>
        </v-col>
        <v-col>
          <v-form>
            <p class="text-center text-main mb-0 mt-4">Tell us more a bit</p>
            <v-text-field v-model="form.email" label="Email" :rules="emailRules" dense required></v-text-field>
            <v-text-field
              v-model="form.phone"
              @keypress="onlyNumber($event,10)"
              label="Phone"
              maxlength="10"
              :rules="phoneRules"
              dense
              required
            ></v-text-field>
            <v-col cols="12 pa-0">
              <v-menu
                ref="menu"
                v-model="menu"
                transition="scale-transition"
                offset-y
                min-width="290px"
              >
                <template v-slot:activator="{ on }">
                  <v-text-field
                    v-model="form.birthday"
                    label="Picker in menu"
                    append-icon="event"
                    readonly
                    v-on="on"
                    class="set-birthday"
                  ></v-text-field>
                </template>
                <v-date-picker v-model="form.birthday" no-title scrollable>
                  <v-spacer></v-spacer>
                  <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
                  <v-btn text color="primary" @click="$refs.menu.save(form.birthday)">OK</v-btn>
                </v-date-picker>
              </v-menu>
            </v-col>
            <p class="text-center text-main mb-0 mt-4">Work Profile</p>
            <v-text-field v-model="form.company" label="Company" dense required></v-text-field>
            <v-text-field v-model="form.postion" label="Postion" dense required></v-text-field>

            <v-btn rounded color="primary" class="w-100 mt-8 my-btn" @click="register">Register</v-btn>
            <div class="w-100 mt-3 my-btn text-primary text-center" @click="back">Back</div>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
const REGEX_EMAIL = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const REGEX_PHONE = /^[0]([0-9]{9})*$/;
const REGEX_NUMBER = /^[0-9]*$/;

export default {
  data() {
    return {
      menu: false,
      form: {
        email: this.$store.getters.getRegister.email,
        phone: this.$store.getters.getRegister.phone,
        birthday: this.$store.getters.getRegister.birthday,
        company: this.$store.getters.getRegister.company,
        postion: this.$store.getters.getRegister.postion
      },
      emailValidated: false,
      phoneValidated: false,
      emailRules: [value => this.emailValidator(value)],
      phoneRules: [value => this.phoneValidator(value)]
    };
  },
  methods: {
    emailValidator(value) {
      this.emailValidated = false;
      if (value == "") {
        return "Required";
      }
      if (REGEX_EMAIL.test(value)) {
        this.emailValidated = true;
        return true;
      }
      return "Email Error";
    },
    phoneValidator(value) {
      this.phoneValidated = false;
      if (value == "") {
        return "Required";
      }
      if (REGEX_PHONE.test(value) && value.length == 10) {
        this.phoneValidated = true;
        return true;
      }
      return "Phone Error";
    },
    onlyNumber(event, max) {
      if (event.target.value.length == 0 && event.key != 0) {
        return event.preventDefault();
      } else {
        if (!REGEX_NUMBER.test(event.key)) {
          return event.preventDefault();
        }
      }
    },
    validate() {
      let validated = true;
      const error = [];
      const validatorField = [
        "email",
        "phone",
        "birthday",
        "company",
        "postion"
      ];
      validatorField.forEach(field => {
        if (this.form[field] == "") {
          validated = false;
          error.push(`${field} can not be null`);
        }
      });
      if (!this.emailValidated) {
        validated = false;
        error.push(`please input you email`);
      }
      if (!this.phoneValidated) {
        validated = false;
        error.push(`please input phont number`);
      }
      if (!validated) {
        this.errorMsg = error.map(error => (error += "<br/>")).join("");
        this.$store.dispatch("setDialog", {
          isShow: true,
          title: "",
          massage: this.errorMsg
        });
      }
      return validated;
    },
    register() {
      if (this.validate() == true) {
        this.$store.dispatch("setRegister", this.form);
        this.$axios
          .put(
            "https://nuxt-test-e6f70.firebaseio.com/members/line:0001/profile.json",
            this.$store.getters.getRegister
          )
          .then(res => {
            this.$router.push("/register/done");
          })
          .catch(e => console.log(e));
      }
    },
    back() {
      this.$router.push("/register");
    }
  }
};
</script>

<style lang="scss" scoped>
.v-from {
  padding: 0 10px;
}
</style>