<template>
    <div class="container">
    <form class="form-signin" @submit.prevent="login">
      <h2>Login Page</h2>
      <input 
        v-model="email"
        type="email"
        class="form-control text-center"
        name="email"
        placeholder="Email Address"
        required
      />
      <input
        v-model="password"
        type="password"
        class="form-control text-center"
        name="password"
        placeholder="Password"
        required
      />
      <button class="btn btn-lg btn-primary btn-block" type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
    export default {
        data() {
            return {
                email: '',
                password: ''
            }
        },
        methods: {
        ...mapActions(['loginAction']),
        login() {
            this.loginAction({
                email: this.email,
                password: this.password
            }).then(() => {
                this.$router.push('/');
            })
            
        }
    },
}
</script>
