import {ADD_ITEM_NUM,SAVE_ID,ALL_TIME,INITIALIZE} from './mutations_type'
export default {
  // 哪一题
  [ADD_ITEM_NUM](state) {
    state.itemNum += 1
  },
  // 保存答案
  [SAVE_ID](state, payload) {
    state.trueId.push(payload)
  },
  // 总用时
  [ALL_TIME](state, payload) {
    state.timer = setInterval(function () {
      state.totalTime++
    }, 1000)
  },
  // 初始化
  [INITIALIZE](state) {
    state.totalTime = 0, //总时间
      state.itemNum = 1, //第几题
      state.timer = "", //定时器
      state.trueID = []
  }
}