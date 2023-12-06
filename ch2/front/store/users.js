export const state = () => ({
    me: null, //me로 로그인 여부를 판별
    followerList: [],
    followingList: [],
  });
//mutations는 동기적 작업
export const mutations = {
    setMe(state, payload) {
      state.me = payload;
    },
    changeNickname(state, payload) {
      state.me.nickname = payload.nickname;
    },
};

//actions 비동기적 작업
export const actions = {
    signUp({ commit, state }, payload) {
      // 서버에 회원가입 요청을 보내는 부분
      commit('setMe', payload);
    },
    logIn({ commit }, payload) {
      commit('setMe', payload);
    },
    logOut({ commit }, payload) {
      commit('setMe', null);
    },
    changeNickname({ commit }, payload) {
      commit('changeNickname', payload);
    },
};