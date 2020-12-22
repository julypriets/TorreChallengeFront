export default {
  addCourse(state, data) {
    state.courses.unshift(data);
  },
  addCourses(state, data) {
    state.courses = data.concat(state.currentCourses);
  },
  setCourses(state, data) {
    state.courses = data;
  }
};
