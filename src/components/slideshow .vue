<template>
  <ul ref="ul" >
    <li :class="{'animated fadeInUp':isanimation}">
      <img :src="sildelist[index].imgPath" alt  ref="img" />
    </li>
  </ul>
</template>
<script>
export default {
  mounted() {
    //window.addEventListener("mousewheel", this.handleScroll, false);
    //window.addEventListener("DOMMouseScroll", this.handleScroll, false);
       
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
     index:0,
     isanimation:false
    };
  },
  created(){
               setInterval(this.handleScroll,5000);

            },
  methods: {
    handleScroll() {
      //var direction = e.deltaY > 0 ? "down" : "up"; //该语句可以用来判断滚轮是向上滑动还是向下
        this.isanimation=true;
        if(this.index==this.sildelist.length-1){
           this.index=0;
        }else{
          this.index++;
        }
         this.isanimation=false;
       
    }
  }
};
</script>


<style scoped>
</style>