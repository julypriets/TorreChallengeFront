export default {
  addCourse({ commit }, data) {
    commit("addCurrentCourse", data);
  },
  addCourses({ commit }, data) {
    commit("addCurrentCourses", data);
  },
  setCourses({ commit }, data) {
    commit("setCurrentCourses", data);
  }
};
