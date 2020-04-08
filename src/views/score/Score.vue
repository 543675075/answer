<template>
  <div class='score'>
    <div class="wrapper">
      <div class="u_score">
        <span>成绩：{{score}}分</span><br>
        <span>总共用时：{{totalTime}}秒</span><br>
        <span>{{scoreTips}}</span>
      </div>
    </div>
  </div>
</template>



<script>
  import { mapState } from 'vuex'
  export default {
    name: '',
    components: {},
    data() {
      return {
        score: 0,
        rightId: [],//带有正确答案和其他对象组成的数组
        idid: [], //就只有正确答案的数组
        scoreTips: "",
        scoreTipsArr:['智商不如猪！','智商等于猪！','智商略大于猪！','智商离爆表只差一步了！','恭喜你智商250'],
      };
    },
    created() {
      this._get()
      this._tips()
    },
    computed: {
      ...mapState({
        trueId: "trueId",
        totalTime: "totalTime",
        content: "content"
      }),
      
    },
    methods: {
      // 先取出数组里的正确答案选项的id
      _get() {//先过滤
        this.content.forEach(v => {
          this.rightId.push(v.topic_answer.filter(i => {
            return i.isTrue == 1
          }))
        })

        // 继续取出id
        this.rightId.forEach(v => {
          this.idid.push(v[0].topic_num)
        })

        // 做对比
        this.idid.forEach((item,index)=>{
          if(item==this.trueId[index]){
            this.score +=20
          }
        })
      },
    
      //提示语言
      _tips(){
       const score =  Math.ceil(this.score/20)-1
       this.scoreTips = this.scoreTipsArr[score]
      }
    },
  }
</script>
<style lang='less' scoped>
  .score {
    top: 100px;
    width: 100%;
    height: 100%;
    background: url(~assets/img/4-1.jpg) center/cover;
  }

  .wrapper {
    position: relative;
    margin: 0 auto;
    top: 50px;
    width: 60vw;
    height: 40vh;
    background: url(~assets/img/4-2.png) no-repeat center/cover;
    background-size: 100%;
  }

  .u_score {
    position: absolute;
    left: 50%;
    top: 65%;
    transform: translate(-50%, -50%);
  }
</style>