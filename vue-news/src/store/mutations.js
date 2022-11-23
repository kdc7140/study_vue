export default{
    SET_NEWS(state, news) {
        console.log("mutations");
        state.news = news;
    },
    SET_JOBS(state, jobs){
        state.jobs = jobs;
    },
    SET_ASK(state, ask) {
        console.log("ask mutations");
        state.ask = ask;
    },
    SET_USER(state, user){
        state.user = user;
    },
    SET_ITEM(state, item){
        state.item = item;
    }
}