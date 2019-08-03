import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";
import axiosAuth from "./axios-auth"
Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    name: null,
    email: "",
  },
  mutations: {
  AUTH_USER(state, userData){
    this.email = userData.email;
  }
  },
  actions: {
    signUp({commit}, authData ){
    axiosAuth.post("accounts:signUp?key=AIzaSyCeKB9Qgpwif1Da2YGr1qTa6mhV14jlMF0", {
      email: authData.email,
      password: authData.password,
      returnSecureToken: true
    }).then(res => {
      console.log(res);
      commit("AUTH_USER",{
        email: res.data.email
      });

      // local storage

    }).catch(error => {
      if (error.response) {
        console.log(error.response.data.error.message);

      }
    })
  },

  }
});
