export default {

  actions: {
    async fetchMessages(ctx) { //первый параметр в акшенах это контекст, передаём его для вызова мутации
      const res = await fetch("https://mocki.io/v1/43ca95fe-ed74-409e-ab46-895cc18b9920");
      const posts = await res.json();

      ctx.commit('newPosts', posts) // у контекста есть метод commit , перым параметром передаём в него назв.мутации, которую хотим вызвать 
    }
  },
  mutations: {
    newPosts(state, posts) { //первый параметр всегда state, второй - это просто данные, которые будут использоваться для обновления состояния. (в наш.сл. - массив posts)
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