<template>
  <section>
    <h2 class="text-center section-title">Login</h2>

    <b-container>
      <b-card class="form">
        <div v-if="error">
          <div class="alert alert-danger">{{ error }}</div>
        </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" class="form-control" id="email" placeholder="eg. abc@mail.com">
          </div>

          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" class="form-control" id="password" placeholder="Your password">
          </div>

          <div class="">
            <button @click="login"  class="btn btn-primary">Login</button>
            <span class="mx-3">
              Don't have an account?
              <router-link :to="{ name:'register' }">Register</router-link>
            </span>
          </div>
      </b-card>
    </b-container>
  </section>
</template>

<script>
import AuthenticationService from '../../services/AuthenticationService';
export default {
  data(){
    return {
            email: '',
            password: '',
            error: null
        }
  },
    methods: {
        async login() {
            try{
                const response = await AuthenticationService.login({
                email: this.email,
                password: this.password
            })
            }catch(err){
                this.error = err.response.data.error;
            }
        }
    }
}
</script>


<style lang="scss" scoped>
.form {
  width: 50%;
  margin: 0 auto;
}
</style>
