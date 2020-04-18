<template>
  <div>
      <gradebook-row v-for="gradebook in gradebooks" :key="gradebook.id" :gradebook="gradebook"/>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import GradebookRow from './GradebookRow';
export default {
    name: 'Gradebooks',
    components: {
        GradebookRow
    },
    computed: {
        ...mapGetters(['gradebooks'])
    },
    methods: {
        ...mapActions(['getGradebooks'])
    },
    beforeRouteEnter(to, form, next) {
        next(vm => vm.getGradebooks());
    }
};
</script>
