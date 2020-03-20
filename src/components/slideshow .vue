<template>
  <div ref="scorllwrapper" id="scorllwrapper" @scroll="fathScroll">
    <ul ref="ul">
      <li v-for="(item,index) in sildelist" v-bind:key="index">
        <img :src="item.imgPath" alt ref="img" />
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  mounted() {
    window.addEventListener("mousewheel", this.handleScroll, {
      passive: false
    });
    window.addEventListener("DOMMouseScroll", this.handleScroll, {
      passive: false
    });
  },
  data() {
    return {
      sildelist: [
        {
          imgPath: require("../assets/images/sideimages/18.jpg")
        },
        {
          imgPath: require("../assets/images/sideimages/1.jpg")
        },
        {
          imgPath: require("../assets/images/sideimages/2.jpg")
        },
        {
          imgPath: require("../assets/images/sideimages/3.jpg")
        },
        {
          imgPath: require("../assets/images/sideimages/4.jpg")
        }
      ],
      index: 0,
      isup: true
    };
  },
  created() {},
  methods: {
    handleScroll(event) {
      if (event.ctrlKey === true || event.metaKey) {
        event.preventDefault();
      }
      console.log("触发");
      var direction = event.deltaY > 0 ? "down" : "up"; //该语句可以用来判断滚轮是向上滑动还是向下  scrollHeight:8920
      var scorllwrapperHeight = parseFloat(
        document.getElementById("scorllwrapper").style.height
      );

      if (direction == "up") {
        if (this.$refs.scorllwrapper.scrollTop == 0) {
          this.$refs.scorllwrapper.scrollTop =
            this.$refs.scorllwrapper.scrollHeight - scorllwrapperHeight;
        }
      } else {
        if (
          this.$refs.scorllwrapper.scrollTop &&
          scorllwrapperHeight &&
          this.$refs.scorllwrapper.scrollTop + scorllwrapperHeight >=
            this.$refs.scorllwrapper.scrollHeight
        ) {
          this.$refs.scorllwrapper.scrollTop = 0;
        }
      }
    },
    fathScroll() {
     /* const scorllwrapper = this.$refs.scorllwrapper;
      var scrollTop = this.$refs.scorllwrapper.scrollTop;
       console.log("外面"+scrollTop);

       if(scrollTop>20){
         console.log(scrollTop);
         scrollTop-=20;
           window.cancelAnimationFrame(timer);
       }
    
      var timer = requestAnimationFrame(function() {
        // 页面滚动的距离
        //let speed = Math.floor(-scrollTop / 6);
          
        scorllwrapper.scrollTop=scrollTop+20;
      });*/
    }
  }
};
</script>


<style scoped>
#scorllwrapper {
  position: fixed;
  width: 100%;
  top: 0;
  bottom: 0;
  overflow-y: scroll;
  overflow-x: hidden;
  scrollbar-width: none; /*隐藏滚动条兼容火狐*/
  scroll-behavior: smooth;
}
#scorllwrapper::-webkit-scrollbar {
  display: none; /*隐藏滚动条兼容谷歌*/
}
</style>