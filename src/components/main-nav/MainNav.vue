<script>
import ProfileImage from "../../components/profile-image/ProfileImage.vue";
import ActionButton from "../../components/action-button/ActionButton.vue";

export default {
  name: "MainNav",
  components: { ActionButton, ProfileImage },
  props: {},
  data() {
    return {
      company: "Destiny Under Sacrifice Careers",
      url: "https://careers.google.com",
      isLoggedIn: false,
      menuItems: [
        "Teams",
        "Locations",
        "Life at DAS",
        "How we Hire",
        "Students",
        "Jobs",
      ],
    };
  },
  methods: {
    loginUser() {
      this.isLoggedIn = !this.isLoggedIn;
    },
  },
  computed: {},
  watch: {},
};
</script>
<!-- ======================================================== -->
<template>
  <header class="w-full text-sm">
    <!-- company logo with hyper-links -->
    <div class="navContainer">
      <div class="navBar">
        <a :href="url" class="companyNameLink">
          {{ company }}
        </a>

        <!-- nav-links list -->
        <nav class="h-full ml-12">
          <ul class="flex h-full p-0 m-0 list-none">
            <!-- menu-items iteration to-list -->
            <li
              v-for="(item, index) in menuItems"
              :key="index"
              class="h-full ml-9 first:ml-0"
              data-test="main-nav-list-item"
            >
              <a href="/" class="navRightLinks">{{ item }}</a>
            </li>
          </ul>
        </nav>

        <div class="flex items-center h-full ml-auto">
          <!-- profile-image -->
          <template v-if="isLoggedIn">
            <ProfileImage data-test="profile-image" />
          </template>

          <!-- action-button -->
          <template v-else>
            <ActionButton
	            data-test="action-button"
	            @click="loginUser"
            />
          </template>
        </div>
      </div>
    </div>
  </header>
</template>
<!-- ======================================================== -->
<style lang="scss">
@import "mainNav.styles";
</style>
<!--========================================================-->
