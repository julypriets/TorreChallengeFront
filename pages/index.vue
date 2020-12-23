<template>
  <div class="content home">
    <div class="home__wrap">
      <div class="home__header">
        <h1 class="heading-primary">
          {{ isLoggedIn ? "Hi " + name : "Welcome!" }}
        </h1>
        <p class="home__header-text">
          {{
            isLoggedIn
              ? "Hope you liked your tour, please let us know if you'd like to suggest any feature"
              : "We've got new features! Get to know them."
          }}
        </p>
        <div class="home__login">
          <input
            type="text"
            class="form__input home__login-input"
            v-model="username"
            placeholder="Torre username"
            v-if="!this.isLoggedIn"
          />
          <div class="form__warning" v-if="showWarning && !this.isLoggedIn">
            <div class="form__warning-icon">!</div>
            <div class="form__warning-text">
              Username not found. Try again.
            </div>
          </div>
          <div class="home__login-btn-wrap" v-if="!isLoggedIn">
            <button @click="login" class="btn-standard--inverted">
              EXPLORE
            </button>
          </div>
          <div class="home__login-btn-wrap" v-if="isLoggedIn">
            <button @click="logout" class="btn-standard--inverted">
              LOGOUT
            </button>
          </div>
        </div>
      </div>

      <div class="home__show">
        <div class="home__show-deco"></div>
        <div class="home__show-video">
          <h2 class="heading-secondary">Introducing Torre Learning</h2>
        </div>
      </div>
    </div>

    <div class="home__wrap u-margin-top-lg">
      <div class="home__show">
        <div class="home__show-deco--2"></div>
        <div class="home__show-video">
          <h2 class="heading-secondary">Introducing Torre Showcase</h2>
        </div>
      </div>

      <div class="home__features">
        <h2 class="heading-secondary u-margin-top-sm">Show your work!</h2>
        <div class="home__features-list">
          <div class="home__feature">
            <span class="material-icons home__feature-icon">
              stars
            </span>
            <p class="home__feature-text">Showcase the best of you</p>
          </div>

          <div class="home__feature">
            <span class="material-icons home__feature-icon">
              link
            </span>
            <p class="home__feature-text">
              Let us know where the project is, we will expose it for you to
              recruiters
            </p>
          </div>

          <div class="home__feature">
            <span class="material-icons home__feature-icon">
              share
            </span>
            <p class="home__feature-text">
              Share your portfolio easily, all in one platform
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "login",
  data() {
    return {
      username: "",
      showWarning: false,
      name: ""
    };
  },
  methods: {
    async login() {
      try {
        this.showWarning = false;
        const user = await this.$axios.$get(
          `/torre/verify-username?username=${this.username}`
        );
        if (user) {
          await this.$store.dispatch("auth/setAuthenticated", true);
          await this.$cookies.set(
            "user",
            {
              picture: user.person.picture,
              pictureThumbnail: user.person.pictureThumbnail,
              name: user.person.name,
              username: user.person.publicId
            },
            { sameSite: true }
          );
          this.$router.push("/learning");
        }
        if (!user.person) {
          this.showWarning = true;
        }
      } catch (err) {
        this.showWarning = true;
      }
    },
    logout() {
      this.$cookies.remove("user");
      window.location.reload(true);
      this.name = "";
      this.username = "";
      this.$store.dispatch("auth/setAuthenticated", false);
    }
  },
  computed: {
    isLoggedIn() {
      const user = this.$cookies.get("user");
      if (user) {
        this.name = user.name.split(" ")[0];
        return true;
      } else {
        return false;
      }
    }
  }
};
</script>

<style></style>
