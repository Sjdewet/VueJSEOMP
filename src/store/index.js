import { createStore } from 'vuex'

export default createStore({
  state: {
    skills: [],
    education: []
  },
  getters: {
  },
  mutations: {
    setSkills(state, skills){
      state.skills = skills
    },
    setEducation(state, education){
      state.education = education
    }
  },
  actions: {
    async fetchSkill(context){
      try {
        let res = await fetch('https://sjdewet.github.io/JsonServerEOMP/index.json')
        let {skills} = await res.json()
        context.commit("setSkills", skills)
      } catch (error) {
        console.log(error);
      }

    },
    async fetchEducation(context){
      try {
        let res = await fetch('https://sjdewet.github.io/JsonServerEOMP/index.json')
        let {education} = await res.json()
        context.commit("setEducation", education)
      } catch (error) {
        console.log(error);
      }

    }

  },
  modules: {
  }
})
