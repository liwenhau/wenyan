<template>

<svg :class="svgClass" aria-hidden="true">
     <use :xlink:href="iconName" />
    </svg>
</template>

<script>
export default {
  data() {
    return {
      name: "svg-icon",
      props: {
        iconClass: {
          type: String,
          required: true
        },
        className: {
          type: String
        }
      }
    };
  }
};
</script>

<style scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
