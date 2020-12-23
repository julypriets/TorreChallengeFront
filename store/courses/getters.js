export default {
  courses(state) {
    return state.courses;
  },
  currentCourses(state) {
    return state.courses
      ? state.courses.filter(course => course.current === true)
      : [];
  },
  completedCourses(state) {
    return state.courses
      ? state.courses.filter(course => course.current === false)
      : [];
  }
};
