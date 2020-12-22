export default {
  addCurrentCourse({ commit }, data) {
    commit("addCurrentCourse", data);
  },
  addCurrentCourses({ commit }, data) {
    commit("addCurrentCourses", data);
  },
  addCompletedCourse({ commit }, data) {
    commit("addCompletedCourse", data);
  },
  addCompletedCourses({ commit }, data) {
    commit("addCompletedCourses", data);
  },
  setCurrentCourses({ commit }, data) {
    commit("setCurrentCourses", data);
  },
  setCompletedCourses({ commit }, data) {
    commit("setCompletedCourses", data);
  }
};
