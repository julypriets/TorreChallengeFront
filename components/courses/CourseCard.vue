<template>
  <div class="course-card">
    <div
      class="course-card__img"
      :style="{ backgroundImage: 'url(' + thumbnail + ')' }"
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
        <p>{{ endDate ? "" : "Started on" }}{{ startDate }}</p>
        <p v-if="endDate">&nbsp; to {{ endDate }}</p>
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
  }
};
</script>
<style></style>
