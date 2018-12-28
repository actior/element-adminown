<template>
  <!-- <el-tabs :tab-position="tabPosition">
    <el-tab-pane v-for="(item,index) in tabpaneList" :label="item.title" label="物业设置">物业设置</el-tab-pane>
    <el-tab-pane label="权限设置">权限设置</el-tab-pane>
    <el-tab-pane label="缴费设置">缴费设置</el-tab-pane>
    <el-tab-pane label="缴费通知">缴费通知</el-tab-pane>
    <el-tab-pane label="业主审核">业主审核</el-tab-pane>
    <el-tab-pane label="物业保修">物业保修</el-tab-pane>
    <el-tab-pane label="物业通知">物业通知</el-tab-pane>
  </el-tabs>-->
  <el-tabs :active-name="activeName" :tab-position="tabPosition">
    <el-tab-pane label="用户管理" :label-content="render" name="first">{{selected}}</el-tab-pane>
    <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
    <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
    <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
  </el-tabs>
</template>

<script>
export default {
  name: "plot",
  data() {
    return {
      tabPosition: "left",
      activeName: "first",
      selected: ""
    };
  },
  methods: {
    tab: function() {
      this.$router.push({ path: "/plotbasic" });
    },
    onTabSelected(value) {
      this.selected = value;
    },
    render(h, tabInstance) {
      // 這裡的 h = createElement
      return h(select, {
        on: {
          change: this.onTabSelected
        }
      });
    },
    
  }
};
</script>

<style lang="scss" scoped>
.el-menu-vertical-demo {
  width: 420px;
}
</style>
