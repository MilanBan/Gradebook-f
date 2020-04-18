<template>
  <div>
    <h1>{{ teacher.lastName }}</h1>
    <h4>{{ teacher.firstName }}</h4>
    <h3>
      <router-link
        :to="`/gradebooks/${teacher.gradebook.id}`"
        class="card-title">
        {{ teacher.gradebook.name }}
        </router-link>
    </h3>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  methods: {
    ...mapActions(["getSingleTeacher"])
  },
  computed: {
    ...mapGetters(["teacher"])
  },
  created() {
    this.getSingleTeacher(this.$route.params.id);
  }
};
</script>