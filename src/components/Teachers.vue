<template>
    <div>
        <teacher-row v-for="teacher in teachers" :key="teacher.id" :teacher="teacher"></teacher-row>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import TeacherRow from './TeacherRow';

export default {
    components: {
        TeacherRow
    },
    computed: {
        ...mapGetters(['teachers'])
    },
    methods: {
        ...mapActions(['getTeachers'])
    },
    beforeRouteEnter(to, form, next) {
        next(vm => vm.getTeachers());
    }
};
</script>