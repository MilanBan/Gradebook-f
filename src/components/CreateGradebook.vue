<template>
  <div>
    <form @submit.prevent="onSubmit" @reset="onReset" >
      <div class="form-group">
        <label for="name">Name</label>
        <input v-model="newGradebook.name" type="text" class="form-control" id="name" placeholder="Gradebook Name">
      </div>
      <div class="form-group">
        <label for="teacher">Select Classmaster:</label>
        <select v-model="newGradebook.teacher_id" class="form-control" id="teacher">
          <option v-for="teacher in availableTeachers" :key="teacher.id" :value="teacher.id">{{teacher.firstName}}</option>
        </select>
      </div>
      <button type="submit">Submit</button>
      <button type="reset">Reset</button> 
    </form>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
    name: 'CreateGradebook',
    data() {
      return {
        newGradebook: {}
      }
    },
    methods: {
        ...mapActions(['getTeachers', 'getGradebooks', 'createGradebook']),
        onSubmit() {
            this.createGradebook(this.newGradebook)
            this.$router.push("/gradebooks");
        },
        onReset() {
            this.$router.push("/gradebooks");
        }
    },
    computed: {
        ...mapGetters(['availableTeachers'])
    },
    beforeRouteEnter(to, form, next) {
        next(vm => {
          vm.getTeachers();
          vm.getGradebooks();
          });
    }
};
</script>