<script>
export default {
  name: "ProfileImage",
  components: {},
  props: {},
  data() {
    return {
      imageURL: "../../src/assets/images/Alias111.JPG",
    };
  },
  methods: {},
  computed: {},
  watch: {},
};
</script>
<!-- ======================================================== -->
<template>
  <div class="imageStyles">
    <img :src="imageURL" alt="IMAGE NOT FOUND" />
  </div>
</template>
<!-- ======================================================== -->
<style lang="scss">
@import "profileImage.styles";
</style>
<!-- ======================================================== -->
