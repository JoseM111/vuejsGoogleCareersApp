<script>
export default {
  name: "ProfileImage",
  components: {},
  props: {},
  data() {
    return {
      imageURL: "https://www.pngitem.com/pimgs/m/487-4876417" +
	      "_link-head-png-toon-link-face-png-transparent.png",
    };
  },
  methods: {},
  computed: {},
  watch: {},
};
</script>
<!-- ======================================================== -->
<template>
  <img :src="imageURL" alt="IMAGE NOT FOUND" class="imageStyles">
</template>
<!-- ======================================================== -->
<style lang="scss">
@import "profileImage.styles";
</style>
<!-- ======================================================== -->
