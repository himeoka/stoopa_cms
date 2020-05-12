export default {
  toggleMenu (state) {
    state.isMenuActive = !state.isMenuActive
  },
  initPage(state,pageName){
    state.page = pageName;
    state.prevpage = state.page;
  },
  resetPage(state,pageName){
    state.isMenuActive = false;
    state.isReserveActive = false;
    state.imageready = false;
    state.fontready = false;
    state.pannelIndex = 0;
  },
  resetMenu(state,pageName){
    state.isMenuActive = false;
  },
  updatePage(state, pageName) {
    if(pageName){
      state.page = pageName
    }else{
      state.page =" index"
    }
  },
  fontReady(state){
    state.fontready = true
  },
  imageReady(state){
    state.imageready = true
  },
  wrapperReady(state){
    state.wrapperready = true
  },
  async fetchAPI(endpoint,query) {
  }
}