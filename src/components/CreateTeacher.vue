<template>
  <div>
    <form @submit.prevent="onSubmit" >
      <div class="form-group">
        <label for="firstName">First Name</label>
        <input v-model="newTeacher.firstName" type="text" class="form-control" id="firstName" placeholder="First Name">
      </div>
      <div class="form-group">
        <label for="lastName">Last Name</label>
        <input v-model="newTeacher.lastName" type="text" class="form-control" id="lastName" placeholder="Last Name">
      </div>
      <div class="form-group">
        <label for="gradebook">Select Class:</label>
        <select v-model="newTeacher.gradebook_id" class="form-control" id="gradebook">
          <option v-for="gradebook in availableGradebooks" :key="gradebook.id" :value="gradebook.id">{{gradebook.name}}</option>
        </select>
      </div>
      <div class="form-group">
        <label for="image">Image</label>
        <input v-model="newTeacher.url" type="text" class="form-control" id="image" placeholder="Image">
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
    name: 'CreateTeacher',
    data() {
        return {
            newTeacher: {}
        }
    },
    methods: {
        ...mapActions(['createTeacher', 'getGradebooks', 'getTeachers']),
        onSubmit() {
            this.createTeacher(this.newTeacher);
        }
    },
    computed: {
        ...mapGetters(['availableGradebooks'])
    },
    beforeRouteEnter(to, form, next) {
        next(vm => {
          vm.getGradebooks();
          vm.getTeachers();
        });
    }
};
</script>