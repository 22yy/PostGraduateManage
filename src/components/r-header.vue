<template>
  <div class="header">
     <el-menu class="el-menu" mode="horizontal">
     <el-menu-item index="1" @click=out()>logout</el-menu-item>
     <el-menu-item index="2">
      <i class="el-icon-paperclip" style="margin-right: 12px"></i>
      <span>{{ currentTerm }}</span>
     </el-menu-item>
     <el-menu-item index="3">
      <i class="el-icon-user" style="margin-right: 12px"></i>
      <span>{{ name }}</span>
     </el-menu-item>
     </el-menu>
      <!-- <el-button type="text" style="color: #333333; font-size: 18px" @click="out()">
        logout
      </el-button>
      <el-divider direction="vertical" style="color: #333333"></el-divider>
      <i class="el-icon-paperclip" style="margin-right: 18px"></i>
      <span>{{ currentTerm }}</span>
      <el-divider direction="vertical"></el-divider>
      <i class="el-icon-user" style="margin-right: 18px"></i>
      <span>{{ name }}</span> -->
  </div>
</template>

<script>
export default {
  name: "r-header",
  data() {
    return {
      name: null,
      currentTerm: null
    }
  },
  created() {
    this.name = sessionStorage.getItem("name")
    this.currentTerm = sessionStorage.getItem("currentTerm")
  },
  methods: {
    out() {
      sessionStorage.clear();
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.header {
  position: absolute;
  width: 40%;
  right: 0;
}
.el-menu {
   background-color: #eee;
}
.el-menu--horizontal>.el-menu-item.is-active {
  border: none;
}
</style>