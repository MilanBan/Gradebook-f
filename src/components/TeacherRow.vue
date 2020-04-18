<template>
  <div>
    <p>{{teacher.firstName}} {{ teacher.lastName}}</p>
  </div>
</template>

<script>
export default {
  props: {
    teacher: {
      type: Object,
      required: true
    }
  }
};
</script>