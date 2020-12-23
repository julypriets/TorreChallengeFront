<template>
  <div class="content home">
    <div class="home__wrap">
      <div class="home__header">
        <h1 class="heading-primary">Welcome!</h1>
        <p class="header__text">We've got new features! Get to know them.</p>
        <div class="home__login">
          <input
            type="text"
            class="form__input home__login-input"
            v-model="username"
            placeholder="Torre username"
          />
          <div class="home__login-btn-wrap">
            <button
              @click="login"
              v-on:keyup.enter="login"
              class="btn-standard--inverted"
            >
              EXPLORE
            </button>
          </div>
        </div>
      </div>

      <div class="home__show">
        <div class="home__show-deco"></div>
        <div class="home__show-video">
          <iframe
            width="545"
            height="300"
            style="position: absolute; left: 0"
            src="https://www.youtube.com/embed/o7gJ9jLMmIE"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>

    <div class="home__wrap u-margin-top-lg">
      <div class="home__show">
        <div class="home__show-deco--2"></div>
        <div class="home__show-video">
          <iframe
            width="545"
            height="300"
            style="position: absolute; left: 0"
            src="https://www.youtube.com/embed/o7gJ9jLMmIE"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
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
      username: ""
    };
  },
  methods: {
    async login() {
      const user = await this.$axios.$post("/torre/verifyUsername", {
        username: this.username
      });
      console.log(user);
      // this.$router.push("/learning");
    }
  }
};
</script>

<style></style>
