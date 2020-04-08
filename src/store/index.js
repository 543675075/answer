import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    week: "第一周", //第几周
    totalTime: 0, //总事件
    itemNum: 1, //第几题
    timer: "", //定时器
    trueID: [],
    content: [
      {
        topic_name: "第一题",
        topic_answer:
          [
            {
              topic_num: 1,
              answer_name: "正确答案",
              isTrue: 1
            },
            {
              topic_num: 2,
              answer_name: "A是错的",
              isTrue: 0
            },
            {
              topic_num: 3,
              answer_name: "B是错的",
              isTrue: 0
            },
            {
              topic_num: 4,
              answer_name: "C是错的",
              isTrue: 0
            }
          ]
      },
      {
        topic_name: "第二题",
        topic_answer:
          [
            {
              topic_num: 5,
              answer_name: "正确答案",
              isTrue: 1
            },
            {
              topic_num: 6,
              answer_name: "A错的",
              isTrue: 0
            },
            {
              topic_num: 7,
              answer_name: "B是错的",
              isTrue: 0
            },
            {
              topic_num: 8,
              answer_name: "C错的",
              isTrue: 0
            }
          ]
      },
      {
        topic_name: "第三题",
        topic_answer:
          [
            {
              topic_num: 9,
              answer_name: "正确答案",
              isTrue: 1
            },
            {
              topic_num: 10,
              answer_name: "abc",
              isTrue: 0
            },
            {
              topic_num: 11,
              answer_name: "ccc",
              isTrue: 0
            },
            {
              topic_num: 12,
              answer_name: "ddd",
              isTrue: 0
            }
          ]
      },
      {
        topic_name: "第四题",
        topic_answer:
          [
            {
              topic_num: 13,
              answer_name: "正确答案",
              isTrue: 1
            },
            {
              topic_num: 14,
              answer_name: "A是错的",
              isTrue: 0
            },
            {
              topic_num: 15,
              answer_name: "B是错的",
              isTrue: 0
            },
            {
              topic_num: 16,
              answer_name: "C是错的",
              isTrue: 0
            }
          ]
      },
    ]

  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
