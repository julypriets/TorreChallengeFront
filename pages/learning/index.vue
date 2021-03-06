<template v-cloak>
  <div class="content learning">
    <CourseForm
      v-if="showModal"
      @toggle="this.toggle"
      @createCourse="createCourse"
    />

    <div class="learning__left">
      <div class="learning__header">
        <h1 class="heading-primary">Learning</h1>
        <p class="learning__quote">"{{ quote.text }}"</p>
        <p v-if="quote.author" class="learning__quote-author">
          — &nbsp;{{ quote.author }}
        </p>
      </div>

      <div class="learning__courses">
        <div class="btn-add" @click="toggle">
          <h2 class="heading-secondary">Courses</h2>
          <span class="material-icons btn-add__icon">
            add_circle
          </span>
        </div>

        <div class="learning__section" v-if="currentCourses.length > 0">
          <h3 class="heading-tertiary">Current</h3>
          <CourseList :current="true" :currentCourses="currentCourses" />
        </div>
        <div class="learning__section" v-if="completedCourses.length > 0">
          <h3 class="heading-tertiary">Completed</h3>
          <CourseList :current="false" :completedCourses="completedCourses" />
          <div class="course-card__list-bottom">View full list</div>
        </div>
        <div
          class="learning__section"
          v-if="currentCourses.length === 0 && completedCourses.length === 0"
        >
          Looks like you haven't registered any course. ¡Let's get started!
        </div>
      </div>

      <div class="learning__jobs">
        <h2 class="heading-secondary">Jobs that match your skills</h2>
        <div class="learning__jobs-cards">
          <div class="job-card">
            <div class="job-card__img"></div>
            <div class="job-card__content">
              <div class="job-card__title">Market Researcher</div>
              <p class="job-card__item">Torre Labs</p>
              <p class="job-card__item">Employee / Colleague</p>
              <p class="job-card__item--icon">
                <span class="material-icons"> public </span>Remote
              </p>
            </div>
            <div class="card__bottom">
              <button class="btn-standard job-card__button">VIEW</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="learning__right">
      <div class="learning__card">
        <div
          class="learning__card-img"
          :style="{ backgroundImage: 'url(' + thumbnail + ')' }"
        ></div>
        <div class="learning__card-content">
          <div class="learning__card-header-wrap">
            <div class="learning__card-level-wrap">
              <p class="learning__card-level">
                Learning Level
              </p>
              <span class="material-icons">
                info
              </span>
              <div class="learning__card-level-info">
                Torre Learning has different levels according to the hours
                you've spent in courses, certifications, among others. A high
                level is very attractive to recruiters.
              </div>
            </div>
            <p class="learning__card-next-level">
              <span class="learning__card-next-level--primary"
                >Next level:</span
              >
              Intermediate
            </p>
          </div>
          <h2 class="heading-secondary">Beginner</h2>
          <div class="learning__card-progress">
            <div class="learning__card-progress-bar"></div>
          </div>
          <div class="learning__card-hours">10/100 hours left</div>
        </div>
      </div>
      <div class="learning__suggested">
        <h2 class="heading-secondary">Suggested for you</h2>
        <p class="learning__suggested-subtitle">
          Improve your desired skills with these courses
        </p>
        <div class="learning__suggested-cards">
          <div class="suggested-course-card">
            <img
              src="https://cdn01.alison-static.net/courses/1640/alison_courseware_intro_1640.jpg"
              class="suggested-course-card__img"
            />
            <img
              class="suggested-course-card__img--sm"
              src="https://www.udemy.com/staticx/udemy/images/v6/default-meta-image.png"
            />
            <div class="suggested-course-card__content">
              <div class="suggested-course-card__title">
                Swift: The Complete Guide
              </div>
              <div class="suggested-course-card__subtitle">Academy</div>
            </div>
            <div class="card__bottom suggested-course-card__bottom">
              <div class="btn-standard">LEARN MORE</div>
            </div>
          </div>
          <div class="suggested-course-card">
            <img
              src="https://cdn01.alison-static.net/courses/1640/alison_courseware_intro_1640.jpg"
              class="suggested-course-card__img"
            />
            <img
              class="suggested-course-card__img--sm"
              src="https://www.udemy.com/staticx/udemy/images/v6/default-meta-image.png"
            />
            <div class="suggested-course-card__content">
              <div class="suggested-course-card__title">
                Swift: The Complete Guide
              </div>
              <div class="suggested-course-card__subtitle">Academy</div>
            </div>
            <div class="card__bottom">
              <div class="btn-standard">LEARN MORE</div>
            </div>
          </div>
        </div>
      </div>

      <div class="learning__overview">
        <h2 class="heading-secondary">Network Overview</h2>
        <div class="learning__overview-subtitle">
          See what your network's currently learning
        </div>
        <div class="learning__overview-cards">
          <div class="overview-card">
            <div class="overview-card__title">
              Kubernetes: from zero to hero
            </div>
            <div class="overview-card__subtitle">
              Carlos Mario Sarmiento Pinilla
            </div>
            <div class="overview-card__text">
              FullStack developer at Carvajal
            </div>
          </div>
          <div class="overview-card">
            <div class="overview-card__title">
              Kubernetes: from zero to hero
            </div>
            <div class="overview-card__subtitle">
              Carlos Mario Sarmiento Pinilla
            </div>
            <div class="overview-card__text">
              FullStack developer at Carvajal
            </div>
          </div>
          <div class="overview-card">
            <div class="overview-card__title">
              Kubernetes: from zero to hero
            </div>
            <div class="overview-card__subtitle">
              Carlos Mario Sarmiento Pinilla
            </div>
            <div class="overview-card__text">
              FullStack developer at Carvajal
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CourseList from "@/components/courses/CourseList";
import CourseForm from "@/components/courses/CourseForm";
import { mapGetters } from "vuex";

export default {
  components: {
    CourseList,
    CourseForm
  },
  middleware: "authenticated",
  async fetch({ $axios, store }) {
    const data = await $axios.$get("/quotes/getQuote");
    const courses = await $axios.$get("/courses/getCourses");

    try {
      await store.dispatch("quotes/storeQuote", data.result);
      await store.dispatch("courses/setCourses", courses.result);
    } catch (err) {
      console.error(err);
    }
  },
  data() {
    return {
      showModal: false
    };
  },
  methods: {
    toggle() {
      this.showModal = !this.showModal;
    },
    async createCourse(course) {
      const formData = new FormData();
      for (const [key, value] of Object.entries(course)) {
        formData.append(key, value);
      }

      const data = await this.$axios.$post("courses/createCourse", formData, {
        headers: { "Content-Type": "multipart/form-data" }
      });

      this.$store.dispatch("courses/addCourse", data.result);
      this.showModal = false;
    }
  },
  computed: {
    quote() {
      "STOREEEEE ", this.$store.getters["courses/currentCourses"];
      return this.$store.getters["quotes/getQuote"];
    },
    ...mapGetters({
      currentCourses: "courses/currentCourses",
      completedCourses: "courses/completedCourses"
    }),
    thumbnail() {
      const user = this.$cookies.get("user");
      if (user) {
        return user.pictureThumbnail;
      } else {
        return "";
      }
    }
  }
};
</script>

<style></style>
