<template>
  <ul>
    <li v-for="(item,index) in sildelist" v-bind:key="index">
      <img :src="item.imgPath" alt />
    </li>
  </ul>
</template>
<script>
export default {
  mounted() {
    this.imgHeight =
      document.documentElement.clientHeight || document.body.clientHeight;
    window.addEventListener("mousewheel", this.handleScroll, false);
    window.addEventListener("DOMMouseScroll", this.handleScroll, false);
  },
  data() {
    return {
      sildelist: [
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
      imgHeight: ""
    };
  },
  methods: {
    handleScroll(e) {
      var direction = e.deltaY > 0 ? "down" : "up"; //该语句可以用来判断滚轮是向上滑动还是向下

      if (direction == "up") {
          document.getElementById("images").getElementsByTagName("ul")[0].style.marginTop+=this.imgHeight;
      }
      console.log(direction);
      console.log(this.imgHeight);
    }
  }
};
</script>


<style scoped>
</style>