<template>
  <div class="learning__courses-cards">
    <CourseCard
      v-for="course in courses"
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
      courses
    })
  }
};
</script>
<style></style>
