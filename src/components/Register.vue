<template>
  <div class="container">
    <form class="form-signin" @submit.prevent="register">
      <h2>Register Page</h2>
      <input
        v-model="firstName"
        type="text"
        class="form-control text-center"
        name="firstName"
        placeholder="First Name"
        required
      />
      <input
        v-model="lastName"
        type="text"
        class="form-control text-center"
        name="lastName"
        placeholder="Last Name"
        required
      />
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
      <input
        v-model="password_confirmation"
        type="password"
        class="form-control text-center"
        name="password_confirmation"
        placeholder="Confirm Password"
        required
      />

      <div class="form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1">
        <label class="form-check-label" for="exampleCheck1">Accepted terms and conditions</label>
      </div>

      <button class="btn btn-lg btn-primary btn-block" type="submit">Register</button>
    </form>
  </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
    data() {
        return {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            password_confirmation: ''
        }
    },
    methods: {
        ...mapActions(['registerAction']),
        register() {
            this.registerAction({
                firstName: this.firstName,
                lastName: this.lastName,
                email: this.email,
                password: this.password,
                password_confirmation: this.password_confirmation
            }).then(() => {
                this.$router.push('/');
            })
            
        }
    },
};
</script>