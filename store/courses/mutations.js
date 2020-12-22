export default {
  addCurrentCourse(state, data) {
    state.currentCourses.unshift(data);
  },
  addCurrentCourses(state, data) {
    state.currentCourses = data.concat(state.currentCourses);
  },
  addCompletedCourse(state, data) {
    state.completedCourses.unshift(data);
  },
  addCompletedCourses(state, data) {
    state.completedCourses = data.concat(state.completedCourses);
  },
  setCurrentCourses(state, data) {
    state.currentCourses = data;
  },
  setCompletedCourses(state, data) {
    state.completedCourses = data;
  }
};
