<template>
  <div>
    <div class="card" style="width: auto">
      <div class="card-body">
        <h3><router-link :to="`/gradebooks/${gradebook.id}`" class="card-title">{{gradebook.name}}</router-link></h3>
        <router-link v-if="classmaster" :to="`/teachers/${gradebook.teacher.id}`" class="card-subtitle mb-2 text-muted">{{classmaster.firstName}} {{classmaster.lastName}}</router-link>  
        <h4 v-if="!classmaster"> No Classmaster</h4>
        <p> {{gradebook.created_at.toLocaleString()}} </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    gradebook: {
      type: Object,
      required: true
    }
  },
  computed: {
    classmaster() {
      return this.gradebook.teacher
      }
    }
};
</script>