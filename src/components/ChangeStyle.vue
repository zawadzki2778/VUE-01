<template>
  <div class="change-style">
    <div class="circle"
         @click="isActive = !isActive"
         :class="{'red': isActive, 'blue': !isActive}">

    </div>    
  </div>
</template>

<script>
export default {
  name: "ChangeStyle",
  data() {
    return {
      isActive: false,
    }
  }
}
</script>

<style lang="postcss" scoped>
.circle {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  display: inline-block;
  margin: 50px;
  cursor: pointer;
}
.red {
  background: rgb(221, 56, 56); 
}
.blue {
  background: #0d6efd
}
.green {
  background: greenyellow;
}
</style>