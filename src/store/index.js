import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import actions from './actions'
import mutations from './mutations'

const state = {
  week: "第一周", //第几周
  totalTime: 0, //总时间
  itemNum: 1, //第几题
  timer: "", //定时器
  trueId: [],
  content: [
    {
      topic_name: "第一题",
      topic_text: "乌龟和兔子谁跑的快",
      topic_answer:
        [
          {
            topic_num: 1,
            answer_name: "兔子",
            isTrue: 1
          },
          {
            topic_num: 2,
            answer_name: "乌龟",
            isTrue: 0
          },
          {
            topic_num: 3,
            answer_name: "一样快",
            isTrue: 0
          },
          {
            topic_num: 4,
            answer_name: "不知道",
            isTrue: 0
          }
        ]
    },
    {
      topic_name: "第二题",
      topic_text: "1+1=?",
      topic_answer:
        [
          {
            topic_num: 5,
            answer_name: "2",
            isTrue: 1
          },
          {
            topic_num: 6,
            answer_name: "1",
            isTrue: 0
          },
          {
            topic_num: 7,
            answer_name: "3",
            isTrue: 0
          },
          {
            topic_num: 8,
            answer_name: "4",
            isTrue: 0
          }
        ]
    },
    {
      topic_name: "第三题",
      topic_text: "奥里给什么意思",
      topic_answer:
        [
          {
            topic_num: 9,
            answer_name: "给力",
            isTrue: 1
          },
          {
            topic_num: 10,
            answer_name: "不知道",
            isTrue: 0
          },
          {
            topic_num: 11,
            answer_name: "加油",
            isTrue: 0
          },
          {
            topic_num: 12,
            answer_name: "傻逼",
            isTrue: 0
          }
        ]
    },
    {
      topic_name: "第四题",
      topic_text: "我多大",
      topic_answer:
        [
          {
            topic_num: 13,
            answer_name: "18",
            isTrue: 1
          },
          {
            topic_num: 14,
            answer_name: "22",
            isTrue: 0
          },
          {
            topic_num: 15,
            answer_name: "30",
            isTrue: 0
          },
          {
            topic_num: 16,
            answer_name: "40",
            isTrue: 0
          }
        ]
    },
    {
      topic_name: "第五题",
      topic_text: "我帅不",
      topic_answer:
        [
          {
            topic_num: 17,
            answer_name: "帅",
            isTrue: 1
          },
          {
            topic_num: 18,
            answer_name: "不帅",
            isTrue: 0
          },
          {
            topic_num: 19,
            answer_name: "勉强",
            isTrue: 0
          },
          {
            topic_num: 20,
            answer_name: "不要脸",
            isTrue: 0
          }
        ]
    },
  ]

}
export default new Vuex.Store({
  state,
  mutations,
  actions,
})
