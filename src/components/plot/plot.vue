<template>
  <div>
    <el-container>
      <el-aside width="200px" style="overflow:hidden;">
        <el-menu :default-openeds="['1', '3']">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-message"></i>物业设置
            </template>
            <el-menu-item-group class="fontSize">
              <el-menu-item index="1-1">小区基本信息</el-menu-item>
              <el-menu-item index="1-2">房屋资料导入</el-menu-item>
              <el-menu-item index="1-3">业主资料导入</el-menu-item>
              <el-menu-item index="1-4">员工资料导入</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="2">
            <template slot="title">
              <i class="el-icon-menu"></i>权限管理
            </template>
          </el-menu-item>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-setting"></i>缴费设置
            </template>
            <el-menu-item-group class="fontSize">
              <el-menu-item index="3-1">自定义收费</el-menu-item>
              <el-menu-item index="3-2">周期性收费</el-menu-item>
              <el-menu-item index="3-3">临时性型收费</el-menu-item>
              <el-menu-item index="3-4">押金类收费</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="4">
            <template slot="title">
              <i class="el-icon-phone-outline"></i>缴费通知
            </template>
          </el-menu-item>
          <el-menu-item index="5">
            <template slot="title">
              <i class="el-icon-goods"></i>业主审核
            </template>
          </el-menu-item>
          <el-menu-item index="6">
            <template slot="title">
              <i class="el-icon-edit"></i>物业报修
            </template>
          </el-menu-item>
          <el-menu-item index="7">
            <template slot="title">
              <i class="el-icon-bell"></i>物业通知
            </template>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "plot",
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.el-header,
.el-footer {
  // background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  margin-top: 60px;
  position: fixed;
  height: 100%;
  // background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
  border-right: solid 1px #e6e6e6;
}

.el-main {
  padding: 60px 0 0 200px;
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
.fontSize {
  font-size: 12px;
}
</style>
