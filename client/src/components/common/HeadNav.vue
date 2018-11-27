<template>
  <div>
    <el-row class="tac">
      <el-col :span="24">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>MENU</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/article" route="true">文章</el-menu-item>
              <el-menu-item index="1-2">列表</el-menu-item>
              <el-menu-item index="1-3">标签</el-menu-item>
              <el-menu-item index="1-4">关于我</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
    export default {
      name: "HeadNav",
      methods: {
        handleOpen(key, keyPath) {
          console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
          console.log(key, keyPath);
        }
      }
    }
</script>

<style scoped>

</style>
