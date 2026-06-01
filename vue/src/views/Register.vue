<template>
  <div class="register-page">
    <div class="register-main">
      <div class="register-panel">
        <div class="register-visual">
          <div class="visual-grid"></div>
          <div class="visual-card visual-card-main"></div>
          <div class="visual-card visual-card-side"></div>
          <div class="visual-box visual-box-1"></div>
          <div class="visual-box visual-box-2"></div>
          <div class="visual-box visual-box-3"></div>
          <div class="visual-line visual-line-1"></div>
          <div class="visual-line visual-line-2"></div>
          <div class="visual-line visual-line-3"></div>
          <div class="visual-dot visual-dot-1"></div>
          <div class="visual-dot visual-dot-2"></div>
          <div class="visual-dot visual-dot-3"></div>
          <div class="visual-car"></div>
          <div class="visual-database"></div>
          <div class="visual-title">店铺后台管理注册</div>
          <div class="visual-desc">创建您的账户，开始管理店铺运营数据</div>
        </div>

        <div class="register-form-wrap">
          <div class="register-form-title">注册</div>
          <div class="register-form-subtitle">欢迎加入，请填写注册信息</div>
          <el-form :model="data.form" ref="formRef" :rules="data.rules">
            <el-form-item prop="username">
              <el-input
                :prefix-icon="User"
                size="large"
                v-model="data.form.username"
                placeholder="请输入账号"
              />
            </el-form-item>
            <el-form-item prop="password">
              <el-input
                :prefix-icon="Lock"
                size="large"
                v-model="data.form.password"
                placeholder="请输入密码"
                show-password
              />
            </el-form-item>
            <el-form-item prop="newPassword">
              <el-input
                :prefix-icon="Lock"
                size="large"
                v-model="data.form.newPassword"
                placeholder="请确认密码"
                show-password
              />
            </el-form-item>
            <el-form-item style="margin-top: 8px">
              <el-button size="large" type="primary" class="register-submit" @click="register"
                >注 册</el-button
              >
            </el-form-item>
          </el-form>
          <div class="register-form-footer">
            已有账号？请 <router-link to="/login">登录</router-link>
          </div>
        </div>
      </div>
    </div>

    <div class="register-footer">版权所有 © 2026 店铺后台管理</div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { User, Lock } from '@element-plus/icons-vue'
import request from '@/utils/request'
import { ElMessage } from 'element-plus'
import router from '@/router'

const data = reactive({
  form: { role: '普通用户' },
  rules: {
    username: [{ required: true, message: '请输入账号', trigger: 'blur' }],
    password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
    newPassword: [{ required: true, message: '请确认密码', trigger: 'blur' }]
  }
})

const formRef = ref()

const register = () => {
  formRef.value
    .validate((valid) => {
      if (valid) {
        request.post('/register', data.form).then((res) => {
          if (res.code === '200') {
            ElMessage.success('恭喜您！注册成功')
            router.push('/login')
          } else {
            ElMessage.error(res.msg)
          }
        })
      }
    })
    .catch((error) => {
      console.error(error)
    })
}
</script>

<style scoped>
.register-page {
  height: 100vh;
  overflow: hidden;
  padding: 18px 28px 28px;
  display: flex;
  flex-direction: column;
  background:
    radial-gradient(circle at 15% 20%, rgba(255, 255, 255, 0.5), transparent 18%),
    radial-gradient(circle at 85% 25%, rgba(167, 208, 255, 0.24), transparent 16%),
    linear-gradient(180deg, #dceaf8 0%, #d8e7f8 55%, #d2e4f7 100%);
  position: relative;
}

.register-page::before,
.register-page::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: 42px;
  height: 90px;
  background: rgba(178, 210, 245, 0.45);
  border-radius: 50% 50% 0 0 / 100% 100% 0 0;
  transform: scaleX(1.1);
}

.register-page::after {
  bottom: 24px;
  height: 72px;
  background: rgba(195, 221, 249, 0.82);
  transform: scaleX(1.2);
}

.register-main {
  flex: 1;
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.register-panel {
  width: min(920px, 100%);
  min-height: 430px;
  display: grid;
  grid-template-columns: 1.2fr 0.78fr;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0 20px 50px rgba(77, 104, 138, 0.18);
  border: 1px solid rgba(255, 255, 255, 0.65);
  position: relative;
}

.register-visual {
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #3929cf 0%, #3f30d9 45%, #3a2bc2 100%);
}

.visual-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
  background-size: 32px 32px;
}

.visual-card {
  position: absolute;
  background: linear-gradient(180deg, #eef5ff 0%, #ccd9ff 100%);
  box-shadow: 0 18px 28px rgba(13, 10, 72, 0.24);
}

.visual-card-main {
  left: 170px;
  top: 120px;
  width: 128px;
  height: 88px;
  border-radius: 10px;
  transform: rotate(-18deg);
}

.visual-card-side {
  left: 118px;
  top: 176px;
  width: 110px;
  height: 70px;
  border-radius: 10px;
  transform: rotate(34deg);
}

.visual-box {
  position: absolute;
  width: 24px;
  height: 24px;
  border-radius: 4px;
  background: linear-gradient(180deg, #eff5ff 0%, #8eb8ff 100%);
  box-shadow: 0 10px 18px rgba(10, 8, 63, 0.22);
}

.visual-box-1 {
  left: 90px;
  top: 72px;
}

.visual-box-2 {
  left: 122px;
  top: 58px;
}

.visual-box-3 {
  left: 138px;
  top: 92px;
}

.visual-line {
  position: absolute;
  height: 2px;
  background: rgba(74, 255, 217, 0.75);
  transform-origin: left center;
}

.visual-line-1 {
  left: 138px;
  top: 110px;
  width: 132px;
  transform: rotate(24deg);
}

.visual-line-2 {
  left: 208px;
  top: 176px;
  width: 126px;
  transform: rotate(-22deg);
}

.visual-line-3 {
  left: 230px;
  top: 232px;
  width: 92px;
  transform: rotate(10deg);
}

.visual-dot {
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #3cffdb;
  box-shadow: 0 0 10px rgba(60, 255, 219, 0.8);
}

.visual-dot-1 {
  left: 134px;
  top: 108px;
}

.visual-dot-2 {
  left: 206px;
  top: 178px;
}

.visual-dot-3 {
  left: 320px;
  top: 246px;
}

.visual-car {
  position: absolute;
  left: 84px;
  bottom: 64px;
  width: 104px;
  height: 42px;
  border-radius: 10px 18px 8px 8px;
  background: linear-gradient(180deg, #d8ebff 0%, #8ab4ff 100%);
  box-shadow: 0 14px 24px rgba(12, 11, 77, 0.24);
}

.visual-car::before,
.visual-car::after {
  content: '';
  position: absolute;
  bottom: -10px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #2c3370;
}

.visual-car::before {
  left: 16px;
}

.visual-car::after {
  right: 16px;
}

.visual-database {
  position: absolute;
  right: 88px;
  bottom: 70px;
  width: 28px;
  height: 40px;
  border-radius: 50% / 18%;
  background: linear-gradient(180deg, #99cbff 0%, #4f87ff 100%);
  box-shadow: 0 14px 22px rgba(12, 11, 77, 0.22);
}

.visual-title {
  position: absolute;
  left: 44px;
  top: 280px;
  color: #fff;
  font-size: 28px;
  font-weight: 700;
  letter-spacing: 1px;
}

.visual-desc {
  position: absolute;
  left: 44px;
  top: 322px;
  width: 320px;
  color: rgba(255, 255, 255, 0.82);
  font-size: 14px;
  line-height: 1.7;
}

.register-form-wrap {
  padding: 52px 42px 34px;
  background: rgba(255, 255, 255, 0.96);
}

.register-form-title {
  color: #303133;
  font-size: 30px;
  font-weight: 600;
}

.register-form-subtitle {
  margin: 8px 0 28px;
  color: #9aa0a6;
  font-size: 13px;
}

.register-submit {
  width: 100%;
  height: 42px;
  border-radius: 4px !important;
  background: linear-gradient(180deg, #f6a738 0%, #ef8b1f 100%) !important;
  border-color: #ef8b1f !important;
}

.register-form-footer {
  margin-top: 10px;
  color: #8b9098;
  text-align: right;
  font-size: 13px;
}

.register-footer {
  position: relative;
  z-index: 1;
  text-align: center;
  font-size: 12px;
  color: #6e8098;
}

@media (max-width: 900px) {
  .register-page {
    padding: 16px;
  }

  .register-panel {
    grid-template-columns: 1fr;
  }

  .register-visual {
    min-height: 260px;
  }

  .visual-title {
    top: 184px;
    font-size: 24px;
  }

  .visual-desc {
    top: 220px;
    width: calc(100% - 88px);
  }
}

@media (max-width: 640px) {
  .register-form-wrap {
    padding: 34px 22px 24px;
  }
}
</style>
