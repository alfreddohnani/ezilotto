<template>
  <div>
    <section>
      <h2 class="text-center section-title">Register</h2>

      <b-container>
        <b-card class="form">
          <div v-if="errors.length > 0">
            <div
              v-for="(error, index) in errors"
              :key="index"
              class="alert alert-danger"
            >{{ error }}</div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="firstname">First name</label>
              <input
                v-model="firstName"
                type="text"
                class="form-control"
                id="firstname"
                placeholder="eg. John"
              >
            </div>
            <div class="form-group col-md-6">
              <label for="lastname">Last name</label>
              <input
                v-model="lastName"
                type="text"
                class="form-control"
                id="lastname"
                placeholder="eg. Doe"
              >
            </div>
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input
              v-model="email"
              type="email"
              class="form-control"
              id="email"
              placeholder="eg. abc@mail.com"
            >
          </div>
          <div class="form-group">
            <label for="telephone">Telephone</label>
            <input
              v-model="telephone"
              type="text"
              class="form-control"
              id="telephone"
              placeholder="Your telephone number..."
            >
          </div>

          <div class="form-group">
            <label for="password">Password</label>
            <input
              v-model="password"
              type="password"
              class="form-control"
              id="password"
              placeholder="Your password"
            >
          </div>

          <div class="form-group">
            <label for="confirmpassword">Confirm password</label>
            <input
              v-model="confirmPassword"
              type="password"
              class="form-control"
              id="confirmpassword"
              placeholder="confirm your password"
            >
          </div>

          <div class="form-group">
            <div class="form-check">
              <input v-model="age" class="form-check-input" type="checkbox" id="ageCheck">
              <label class="form-check-label" for="ageCheck">I am 18+</label>
            </div>
          </div>

          <div class="form-group">
            <div class="form-check">
              <input v-model="agree" class="form-check-input" type="checkbox" id="agreeCheck">
              <label class="form-check-label" for="agreeCheck">
                I agree to the
                <router-link :to="{ name:'terms' }">terms and conditions of service</router-link>
              </label>
            </div>
          </div>
          <div class>
            <button @click="register" class="btn btn-primary">Register</button>
            <span class="mx-3">
              Already have an account?
              <router-link :to="{ name:'login' }">Login</router-link>
            </span>
          </div>
        </b-card>
      </b-container>
    </section>
  </div>
</template>

<script>
import AuthenticationService from "../../services/AuthenticationService";
export default {
  name: 'app-register',
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      telephone: "",
      password: "",
      confirmPassword: "",
      errors: [],
      age: false,
      agree: false
    };
  },
  methods: {
    async register() {
      this.errors = [];
      
      if ( this.password !== this.confirmPassword ) {
          this.throwValidationError("Passwords do not match. Check again");
      } 
      
      if (!this.age) {
        this.throwValidationError("You must be 18yrs+ to register");
      }

      if (!this.agree) {
        this.throwValidationError("You must read and agree to our terms and conditions to proceed");
        
      }
      try {
        const response = await AuthenticationService.register({
          firstName: this.firstName,
          lastName: this.lastName,
          telephone: this.telephone,
          email: this.email,
          password: this.password
        });
      } catch (err) {
        this.errors.push(err.response.data.error);
      }
    },
     throwValidationError(error){
          const alreadyAddedError =this.errors.find( e => e == error)
          if (!(!!alreadyAddedError)) {
            this.errors.push(error);
          return;
          }
        }
  }
};
</script>


<style lang="scss" scoped>
.form {
  width: 50%;
  margin: 0 auto;
}
</style>
