<template>
  <div>
    <form @submit.prevent="onSubmit" >
      <div class="form-group">
        <label for="firstName">First Name</label>
        <input v-model="newStudent.firstName" type="text" class="form-control" id="firstName" placeholder="First Name">
      </div>
      <div class="form-group">
        <label for="lastName">Last Name</label>
        <input v-model="newStudent.lastName" type="text" class="form-control" id="lastName" placeholder="Last Name">
      </div>
      <div class="form-group">
        <label for="image">Image</label>
        <input v-model="newStudent.url" type="text" class="form-control" id="image" placeholder="Image">
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
    name: 'CreateStudent',
    data() {
      return {
        newStudent: {}
      }
    },
    methods: {
      ...mapActions(['createStudent', 'getGradebooks']),
      onSubmit() {
        this.newStudent.gradebook_id = this.$route.params.id;
        this.createStudent(this.newStudent);
        this.$router.push(`/gradebooks/${this.newStudent.gradebook_id}`);
      }
    },
    beforeRouteEnter(to, from, next) {
        next(vm => {
        vm.getGradebooks();
        });
    }
};
</script>