<template>
  <div class="login-contairion">
    <el-form
      :model="ruleForm2"
      status-icon
      :rules="rules2"
      ref="ruleForm2"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item prop="text">
        <el-input type="text" v-model="ruleForm2.text" autocomplete="off" placeholder="请输入账号"></el-input>
      </el-form-item>
      <el-form-item prop="pass">
        <el-input type="password" v-model="ruleForm2.pass" autocomplete="off" placeholder="请输入密码"></el-input>
      </el-form-item>
      <!-- <el-form-item label="年龄" prop="age">
        <el-input v-model.number="ruleForm2.age"></el-input>
      </el-form-item> -->
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
        <el-button @click="resetForm('ruleForm2')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入账号"));
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      }
    };
    return {
      ruleForm2: {
        text: "",
        pass: "",
      },
      rules2: {
        text: [{ validator: validatePass, trigger: "blur" }],
        pass: [{ validator: validatePass2, trigger: "blur" }],
      }
    };
  },
  methods: {
    submitForm(formName) {
        this.$router.push({path:'/plot'});
    //   this.$refs[formName].validate(valid => {
    //     if (valid) {
    //         console.log(this.$router.push({path:'/plot'}))
    //     } else {
    //       return false;
    //     }
    //   });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style scoped>
.login-contairion {
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: #2d3a4b;
}
.demo-ruleForm {
  display: inline-block;
  position: absolute;
  top: 50%;
  left: 50%;
  text-align: center;
  transform: translate(-50%, -50%);
}
</style>
