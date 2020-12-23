<template>
  <div class="container">
    <div class="navigation">
      <div class="navigation__wrap">
        <span class="material-icons navigation__menu">
          menu
        </span>
        <div class="navigation__logo">torre</div>
      </div>
      <div class="navigation__wrap">
        <div class="navigation__link">
          <span class="material-icons navigation__link-icon">
            psychology
          </span>
          <p class="navigation__link-text">Learning</p>
        </div>
        <div class="navigation__link">
          <span class="material-icons navigation__link-icon">
            stars
          </span>
          <p class="navigation__link-text">Showcase</p>
        </div>
        <div class="navigation__link" @click="logout">
          <span class="material-icons navigation__link-icon">
            exit_to_app
          </span>
          <p class="navigation__link-text">Exit</p>
        </div>
      </div>
    </div>
    <Nuxt />
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$cookies.remove("user");
      this.$store.dispatch("auth/setAuthenticated", false);
      this.$router.push("/");
    }
  }
};
</script>
<style></style>
