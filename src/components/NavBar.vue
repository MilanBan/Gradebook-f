<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark">
      <router-link class="navbar-brand" to="/">Gradebook</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExample03">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link class="nav-link" to="/teachers">All Professors <span class="sr-only">(current)</span></router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/gradebooks/create">Add Gradebook</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/teachers/create">Add Professor</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="#">My Gradebook</router-link>
          </li>
           
        </ul>
        <form class="form-inline my-2 my-md-0">
          <input class="form-control" type="text" placeholder="Search">
        </form>
      </div>
      <div >
        <ul>
          <li  class="nav-item">
            <router-link class="nav-link" to="/login">Login</router-link>
            </li>
            <li>
            <router-link class="nav-link" to="/register">Register</router-link>
           </li>
           <li>
             <button class="btn btn-danger" @click="logout">Logout</button>   
           </li>
        </ul>
      </div>
    </nav>
</template>


<script>

import { mapGetters, mapActions } from 'vuex';
export default {
  computed: {
    ...mapGetters(['isAuthenticated']),
    isLoggedIn() {
      return localStorage.getItem('token');
    }
  },
  methods: {
    ...mapActions(['logoutAction']),
    logout() {
      this.logoutAction();
      this.$router.push('/login')
    }
  },
  // beforeRouteEnter(to, form, next) {
  //       next(vm => vm.isAuthenticated());
  //   }
};
</script>