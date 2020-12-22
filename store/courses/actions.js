export default {
  addCourse({ commit }, data) {
    commit("addCourse", data);
  },
  addCourses({ commit }, data) {
    commit("addCourses", data);
  },
  setCourses({ commit }, data) {
    commit("setCourses", data);
  }
};
