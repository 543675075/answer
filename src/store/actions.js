import {ADD_ITEM_NUM,SAVE_ID,ALL_TIME,INITIALIZE} from './mutations_type'

export default {
  isLastTopic({ commit, state }, id) {
    //点击下一题，记录答案id，判断是否是最后一题，如果不是则跳转下一题
    commit(SAVE_ID, id);
    if (state.itemNum < state.content.length) {
      commit(ADD_ITEM_NUM);
    }
  },

}