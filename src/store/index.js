import { createStore } from 'vuex'

export default createStore({
  state: {
    skills: [],
    education: [],
    projects: [],
    testimonials: []
  },
  getters: {
  },
  mutations: {
    setSkills(state, skills){
      state.skills = skills
    },
    setEducation(state, education){
      state.education = education
    },
    setProjects(state, projects){
      state.projects = projects
    },
    setTestimonials(state, testimonials){
      state.testimonials = testimonials
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

    },
    async fetchProjects(context){
      try {
        let res = await fetch('https://sjdewet.github.io/JsonServerEOMP/index.json')
        let {projects} = await res.json()
        context.commit("setProjects", projects)
      } catch (error) {
        console.log(error);
      }

    },
    async fetchTestimonials(context){
      try {
        let res = await fetch('https://sjdewet.github.io/JsonServerEOMP/index.json')
        let {testimonials} = await res.json()
        context.commit("setTestimonials", testimonials)
      } catch (error) {
        console.log(error);
      }

    }


  },
  modules: {
  }
})
