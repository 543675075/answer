<template>
  <div class="wrapper">
    <div class="main">
      <div class="center-img" v-if="path=='home'"></div>
      <div class="topic" v-else>
        <ul class="topic-list">
          <li>{{content[itemNum-1].topic_name}}:</li>
          <li>{{content[itemNum-1].topic_text}}</li>
          <li v-for="(item,index) in content[itemNum-1].topic_answer" class="topic-item" 
              @click="choose(index,item.topic_num)">
            <span class="topic-options" :class="{active:chooseNum==index}">{{topicOptions(index)}}</span>
            <span class="text">{{item.answer_name}}</span>
          </li>
        </ul>
      </div>
      <div class="tips">
        <span class="text" v-if="path=='home'">{{week}}</span>
        <span class="text" v-else>{{content[itemNum-1].topic_name}}</span>
      </div>
    </div>
    <div class="btn">
      <img src="~assets/img/2-2.png" @click="nextTopic" v-if="itemNum<content.length">
      <img src="~assets/img/3-1.png" v-else @click="submit">
    </div>
  </div>
</template>



<script>
  import { mapState, mapActions } from 'vuex'
  export default {
    name: 'Common',
    props: {
      path: {
        type: String,
        default: ''
      }
    },
    components: {},
    data() {
      return {
        itemID:null,//题目的ID
        chooseId: null, //选中答案的ID
        chooseNum: null //选中答案的索引
      };
    },
    mounted() {

    },
    computed:
      mapState([
        "week", //第几周
        "totalTime", //总时间
        "itemNum",//第几题
        "timer",//定时器
        "content"
      ]),

    methods: {
      ...mapActions({add:"isLastTopic"}),
      // 点击进入下一题
      nextTopic(){
        if(this.chooseNum !== null){
          this.chooseNum = null
          this.add(this.chooseId)
        }else{
          alert("请选择答案")
        }
      },
      // 提交
      submit(){
        if(this.chooseNum !== null){
          this.add(this.chooseId)
          // 关闭定时器
          clearInterval(this.timer)
          //跳转到分数页面
          this.$router.replace("score")
        }else{
          alert("请选择答案")
        }
      },
      // active是否为活跃状态
      choose(index,id){
        this.chooseNum = index
        this.chooseId = id
      },
      // 选项前面的ABCD
      topicOptions(index) {
        switch (index) {
          case 0:
            return "A"
          case 1:
            return "B"
          case 2:
            return "C"
          case 3:
            return "D"
        }
      }
    },
  }
</script>
<style lang='less' scoped>
  .wrapper {
    position: relative;
    width: 100vw;
    height: 100vh;
    background: url("~assets/img/1-1.jpg") center/cover;
  }

  .center-img {
    position: absolute;
    left: 50%;
    top: 100px;
    transform: translateX(-50%);
    width: 80vw;
    height: 30vh;
    background: url("~assets/img/1-2.png") center/cover;
  }

  .topic {
    position: absolute;
    left: 50%;
    top: 100px;
    transform: translateX(-50%);
    width: 80vw;
    height: 30vh;
    text-align: center;
    background: url("~assets/img/2-1.png") center/cover;
    li{
      color: #fff;
    }
    .topic-list .topic-item {
      display: flex ;
      justify-content: center;
      margin-bottom: 5px;
    }
    .topic-list li span{
      color: #fff;
    }
    .text{
      width: 100px;
      padding-left: 10px;
      text-align: left;
    }
    .topic-options{
      width: 18px;
      height: 18px;
      line-height: 18px;
      border: 1px solid #fff;
      border-radius: 50%;
      box-sizing: content-box;
    }
  }

  .tips {
    position: absolute;
    width: 20vw;
    height: 20vh;
    top: 0;
    right: 10px;
    background: url("~assets/img/WechatIMG2.png") center/cover;

    .text {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: 10px;
      font-size: 12px;
      color: #fff;
    }
  }

  .btn {
    position: absolute;
    position: absolute;
    left: 50%;
    top: 350px;
    transform: translateX(-50%);

    img {
      width: 30vw;
    }
  }

  .active{
    background:rgb(235, 124, 124);
    
  }
</style>