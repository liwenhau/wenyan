<template>
  <ul ref="ul" >
    <li  v-for="(item,index) in sildelist" :key="index">
      <img :src="item.imgPath" alt  ref="img"/>
    </li>
  </ul>
</template>
<script>
export default {
  mounted() {
    window.addEventListener("mousewheel", this.handleScroll, false);
    window.addEventListener("DOMMouseScroll", this.handleScroll, false);
  },
  data() {
    return {
      sildelist: [
          {
          imgPath: require("../assets/images/sideimages/8.jpg")
        },
         {
          imgPath: require("../assets/images/sideimages/5.png")
        },
          {
          imgPath: require("../assets/images/sideimages/6.png")
        }
        
      ],
      imgHeight: 0,
      childnumber:0,
      oldimgHeight:0
    };
  },
  methods: {
    handleScroll(e) {
      var direction = e.deltaY > 0 ? "down" : "up"; //该语句可以用来判断滚轮是向上滑动还是向下
      this.childnumber=this.$refs.ul.childNodes.length;
      this.oldimgHeight= this.$refs.ul.childNodes[0].offsetHeight;

      if (this.imgHeight > 0) {
        this.imgHeight = (this.childnumber-1)*-this.oldimgHeight;
      }
      
      if (this.imgHeight < (this.childnumber-1)*-this.oldimgHeight) {
        this.imgHeight =0 ;
      }
 
      if (direction == "up") {
        this.imgHeight = this.imgHeight + 80;
      } else {
        this.imgHeight = this.imgHeight + -80;
      }
      this.$refs.ul.style.top = this.imgHeight + "px";
    }
  }
};
</script>


<style scoped>
</style>