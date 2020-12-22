<template>
  <div class="learning__courses-cards">
    <div class="learning__courses-cards" v-if="current">
      <CourseCard
        v-for="course in currentCourses"
        :key="course.id"
        :id="course.id"
        :name="course.name"
        :thumbnail="course.thumbnail"
        :startDate="course.startDate"
        :endDate="course.endDate"
        :issuedBy="course.issuedBy"
        :skills="course.skills"
        :sectors="course.sectors"
        :certificateURL="course.certificateURL"
        :certificateID="course.certificateID"
        :certificateExpirationDate="course.certificateExpirationDate"
      />
    </div>
    <div class="learning__courses-cards" v-if="!current">
      <CourseCard
        v-for="course in completedCourses"
        :key="course.id"
        :id="course.id"
        :name="course.name"
        :thumbnail="course.thumbnail"
        :startDate="course.startDate"
        :endDate="course.endDate"
        :issuedBy="course.issuedBy"
        :skills="course.skills"
        :sectors="course.sectors"
        :certificateURL="course.certificateURL"
        :certificateID="course.certificateID"
        :certificateExpirationDate="course.certificateExpirationDate"
      />
    </div>
  </div>
</template>

<script>
import CourseCard from "@/components/courses/CourseCard";
import { mapGetters } from "vuex";

export default {
  name: "CourseList",
  props: {
    current: {
      type: Boolean,
      required: true
    }
  },
  components: {
    CourseCard
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      currentCourses: "courses/currentCourses",
      completedCourses: "courses/completedCourses"
    })
  }
};
</script>
<style></style>
