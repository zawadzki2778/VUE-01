export default {

  actions: {
    async fetchMessages(ctx) { //первый параметр в акшенах это контекст, передаём его для вызова мутации
      const res = await fetch("https://mocki.io/v1/dd6f6020-f3e0-42ef-a68e-0237c6258829");
      const posts = await res.json();

      ctx.commit('newPosts', posts) // у контекста есть метод commit , перым параметром передаём в него назв.мутации, которую хотим вызвать 
    }
  },
  mutations: {
    newPosts(state, posts) { //первый параметр всегда state, второй - то, что будем передавать (в наш.сл. - массив posts)
      state.posts = posts;
    }
  },
  state: {
    posts: []
  },
  getters: { // забирает что-то из state и возвращает как данные c помощью ф-ции
    allMessages(state) { //ф-ция, первым параметром всегда принимает state 
      return state.posts // и возвращает массив  из state    
    }
  }
}