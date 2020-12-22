<template>
  <div class="course-card">
    <div
      class="course-card__img"
      :style="{ backgroundImage: 'url(' + thumbnail + ')' }"
    ></div>
    <div class="course-card__options">...</div>
    <div class="course-card__content">
      <p class="course-card__title">
        {{ name }}
      </p>
      <p class="course-card__subtitle">{{ issuedBy }}</p>
      <div class="course-card__date">
        <p>Started on {{ startDate }}</p>
        <p v-if="endDate">&nbsp; - &nbsp; Finished on {{ endDate }}</p>
      </div>
    </div>
    <div class="course-card__popover">
      <div class="course-card__popover-item">Edit</div>
      <div class="course-card__popover-item">Delete</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CourseCard",
  props: {
    id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    thumbnail: {
      type: String,
      required: true
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
    },
    skills: {
      type: Array,
      required: true
    },
    sectors: {
      type: Array,
      required: true
    },
    certificateURL: {
      type: String,
      required: false
    },
    certificateID: {
      type: String,
      required: false
    },
    certificateExpirationDate: {
      type: String,
      required: false
    }
  }
};
</script>
<style></style>
