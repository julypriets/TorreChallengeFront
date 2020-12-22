export default {
  allCourses(state) {
    return state.courses;
  },
  currentCourses(state) {
    return state.courses.filter(course => course.current === true);
  },
  completedCourses(state) {
    return state.courses.filter(course => course.current === false);
  }
};
