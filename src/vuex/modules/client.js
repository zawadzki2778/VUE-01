export default {

  actions: {},
  mutations: {},
  state: {
    messages: []
  },
  getters: { // забирает что-то из state и возвращает как данные c помощью ф-ции
    allMessages(state) { //ф-ция, первым параметром всегда принимает state 
      return state.messages // и возвращает массив  messages из state    
    }
  }
}