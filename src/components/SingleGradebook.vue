<template>
  <div>
    <div class="text-left">
      <button @click="addStudentsForm" type="button" class="btn btn-light">Add New Students</button>
    </div>
    <h1> {{ gradebook.name }} </h1>
    <h4 v-if="classmaster"> {{ gradebook.teacher.firstName }} {{ gradebook.teacher.lastName }} </h4>
    <ul class="list-group">
      <li v-for="student in gradebook.student" :key="student.id" class="list-group-item">
        {{student.firstName}} {{student.lastName}}
      </li>
    </ul>
    <div class="text-left">
      <button @click="deleteThisGradebook" type="button" class="btn btn-danger">Delete Gradebook</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
        
    methods: {
        ...mapActions(['getSingleGradebook', 'deleteGradebook']),
        addStudentsForm() {
            this.$router.push(`/gradebooks/${this.$route.params.id}/students/create`)
        },
        deleteThisGradebook() {
            this.deleteGradebook(this.$route.params.id);
            this.$router.push('/gradebooks');
        }
    },
    computed: {
        ...mapGetters(['gradebook']),
        classmaster() {
            return this.gradebook.teacher
        }
    },
    created() {
        this.getSingleGradebook(this.$route.params.id);
    }
        
}
</script>