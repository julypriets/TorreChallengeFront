<template>
  <div class="course-card">
    <div
      class="course-card__img"
      :style="{
        backgroundImage: 'url(' + thumbnail + ')'
      }"
    ></div>
    <div class="course-card__options" @click="showPopover = !showPopover">
      ...
    </div>
    <div class="course-card__content">
      <p class="course-card__title">
        {{ name }}
      </p>
      <p class="course-card__subtitle">{{ issuedBy }}</p>
      <div class="course-card__date">
        <p>{{ endDate ? "" : "Started on " }}{{ parsedStartDate }}</p>
        <p v-if="endDate">&nbsp; to {{ parsedEndDate }}</p>
      </div>
    </div>
    <transition name="fade">
      <div class="course-card__popover" v-if="showPopover">
        <div class="course-card__popover-item">Edit</div>
        <div class="course-card__popover-item">Delete</div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "CourseCard",
  props: {
    name: {
      type: String,
      required: true
    },
    thumbnail: {
      type: String,
      required: false
    },
    startDate: {
      type: String,
      required: true
    },
    endDate: {
      type: String,
      required: false
    },
    issuedBy: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      showPopover: false
    };
  },
  computed: {
    parsedStartDate() {
      const d = new Date(this.$props.startDate);
      console.log("This is d: ", d);
      const ye = new Intl.DateTimeFormat("en", { year: "numeric" }).format(d);
      const mo = new Intl.DateTimeFormat("en", { month: "short" }).format(d);
      const da = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(d);
      console.log(`${mo}/${da}/${ye}`);
      return `${mo} ${da} ${ye}`;
    },
    parsedEndDate() {
      const d = new Date(this.$props.endDate);
      console.log("This is d: ", d);
      const ye = new Intl.DateTimeFormat("en", { year: "numeric" }).format(d);
      const mo = new Intl.DateTimeFormat("en", { month: "short" }).format(d);
      const da = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(d);
      console.log(`${mo}/${da}/${ye}`);
      return `${mo} ${da} ${ye}`;
    }
  }
};
</script>
<style></style>
