<template>
  <div class="manager-shell">
    <div class="manager-frame">
      <header class="manager-header">
        <div class="manager-brand">
          <img src="@/assets/imgs/logo.png" alt="" class="manager-logo" />
          <div>
            <div class="manager-title">店铺后台管理</div>
          </div>
        </div>
        <div class="manager-user">
          <img
            class="manager-user-avatar"
            :src="
              data.user.avatar ||
              'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
            "
            alt=""
          />
          <div>
            <div class="manager-user-name">{{ data.user.name || '代码小白' }}</div>
            <div class="manager-user-role">管理员账户</div>
          </div>
          <div class="manager-user-logout" @click="logout">
            <el-icon><SwitchButton /></el-icon>
            <span>退出</span>
          </div>
        </div>
      </header>

      <div class="manager-body">
        <aside class="manager-sidebar">
          <el-menu
            router
            class="manager-menu"
            :default-active="router.currentRoute.value.path"
            :default-openeds="['user', 'info']"
          >
            <el-menu-item index="/manager/dataManager">
              <el-icon><TrendCharts /></el-icon>
              <span>数据统计</span>
            </el-menu-item>
            <el-sub-menu index="info">
              <template #title>
                <el-icon><Memo /></el-icon>
                <span>信息管理</span>
              </template>
              <el-menu-item index="/manager/orders">
                <el-icon><Document /></el-icon>
                <span>订单信息</span>
              </el-menu-item>
              <el-menu-item index="/manager/category">
                <el-icon><Document /></el-icon>
                <span>商品分类</span>
              </el-menu-item>
              <el-menu-item index="/manager/goods">
                <el-icon><Document /></el-icon>
                <span>商品信息</span>
              </el-menu-item>
              <el-menu-item index="/manager/carousel">
                <el-icon><Document /></el-icon>
                <span>轮播图信息</span>
              </el-menu-item>
              <el-menu-item index="/manager/comment">
                <el-icon><Document /></el-icon>
                <span>订单评价</span>
              </el-menu-item>
              <el-menu-item index="/manager/collect">
                <el-icon><Document /></el-icon>
                <span>用户收藏</span>
              </el-menu-item>
              <el-menu-item index="/manager/recharge">
                <el-icon><Document /></el-icon>
                <span>用户充值</span>
              </el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="user">
              <template #title>
                <el-icon><User /></el-icon>
                <span>用户管理</span>
              </template>
              <el-menu-item index="/manager/user">
                <el-icon><User /></el-icon>
                <span>普通用户</span>
              </el-menu-item>
              <el-menu-item index="/manager/admin">
                <el-icon><User /></el-icon>
                <span>管理员信息</span>
              </el-menu-item>
            </el-sub-menu>
            <el-menu-item index="/manager/person">
              <el-icon><User /></el-icon>
              <span>个人信息</span>
            </el-menu-item>
            <el-menu-item index="/manager/password">
              <el-icon><Lock /></el-icon>
              <span>修改密码</span>
            </el-menu-item>
          </el-menu>
        </aside>

        <main class="manager-content">
          <div class="manager-content-inner">
            <router-view @updateUser="updateUser" />
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import router from '@/router'
import { ElMessage } from 'element-plus'

const data = reactive({
  user: JSON.parse(localStorage.getItem('system-user') || '{}')
})

if (!data.user?.id) {
  ElMessage.error('请登录！')
  router.push('/login')
}

const updateUser = () => {
  data.user = JSON.parse(localStorage.getItem('system-user') || '{}')
}

const logout = () => {
  router.push('/login')
  ElMessage.success('退出成功')
  localStorage.removeItem('system-user')
}
</script>

<style scoped>
.manager-shell {
  height: 100vh;
  padding: 20px;
  overflow: hidden;
}

.manager-frame {
  height: 100%;
  background: #f5f5f5;
  border: 1px solid rgba(255, 255, 255, 0.65);
  border-radius: 28px;
  box-shadow: 0 24px 60px rgba(70, 70, 70, 0.16);
  overflow: hidden;
}

.manager-header {
  height: 86px;
  padding: 0 28px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(255, 255, 255, 0.9);
  border-bottom: 1px solid #ececec;
}

.manager-brand {
  display: flex;
  align-items: center;
  gap: 14px;
}

.manager-logo {
  width: 54px;
  height: 54px;
  padding: 6px;
  border-radius: 50%;
  object-fit: contain;
  background: linear-gradient(135deg, #fffdf5 0%, #ffffff 100%);
  border: 1px solid #f6e3a8;
  box-shadow: 0 8px 20px rgba(239, 187, 26, 0.18);
}

.manager-title {
  font-size: 26px;
  font-weight: 700;
  color: #303133;
}

.manager-subtitle {
  margin-top: 4px;
  font-size: 12px;
  color: #a8abb2;
}

.manager-user {
  padding: 10px 14px;
  display: flex;
  align-items: center;
  gap: 12px;
  border-radius: 999px;
  background: #fff9e8;
  border: 1px solid #f5e4ac;
}

.manager-user-avatar {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #f0c857;
}

.manager-user-name {
  color: #303133;
  font-size: 14px;
  font-weight: 600;
}

.manager-user-role {
  margin-top: 2px;
  color: #b18b20;
  font-size: 12px;
}

.manager-user-logout {
  margin-left: 8px;
  padding-left: 14px;
  border-left: 1px solid #f5e4ac;
  display: flex;
  align-items: center;
  gap: 4px;
  color: #b18b20;
  font-size: 13px;
  cursor: pointer;
  white-space: nowrap;
}

.manager-user-logout:hover {
  color: #e7b112;
}

.manager-body {
  display: flex;
  height: calc(100% - 86px);
  min-height: 0;
}

.manager-sidebar {
  width: 248px;
  height: 100%;
  padding: 24px 16px 20px;
  background: #f7f7f7;
  border-right: 1px solid #ececec;
  overflow: hidden;
}

.manager-sidebar-title {
  margin: 0 10px 16px;
  color: #9aa0a6;
  font-size: 12px;
  letter-spacing: 1px;
}

.manager-content {
  flex: 1;
  width: 0;
  height: 100%;
  padding: 26px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.manager-content-inner {
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  overflow-x: hidden;
  padding-right: 6px;
}

:deep(.manager-menu) {
  border-right: none !important;
  background: transparent !important;
}

:deep(.manager-menu .el-menu-item),
:deep(.manager-menu .el-sub-menu__title) {
  height: 46px;
  margin-bottom: 8px;
  border-radius: 14px;
  color: #6b7280;
}

:deep(.manager-menu .el-menu-item:hover),
:deep(.manager-menu .el-sub-menu__title:hover) {
  color: #e7b112 !important;
  background: transparent !important;
  box-shadow: none;
}

:deep(.manager-menu > .el-menu-item.is-active) {
  color: #ffffff !important;
  background: linear-gradient(135deg, #f0c43a 0%, #e7b112 100%) !important;
  box-shadow: 0 10px 18px rgba(231, 177, 18, 0.24);
}

:deep(.manager-menu .el-sub-menu .el-menu-item) {
  min-width: auto;
  background: transparent;
}

:deep(.manager-menu .el-sub-menu .el-menu) {
  background: transparent !important;
}

:deep(.manager-menu .el-sub-menu .el-menu-item.is-active) {
  color: #ffffff !important;
  background: linear-gradient(135deg, #f0c43a 0%, #e7b112 100%) !important;
  box-shadow: 0 10px 18px rgba(231, 177, 18, 0.24);
}

:deep(.manager-menu .el-sub-menu .el-menu-item:not(.is-active):hover) {
  color: #e7b112 !important;
  background: transparent !important;
  box-shadow: none;
}

:deep(.manager-menu .el-sub-menu.is-opened > .el-sub-menu__title) {
  color: #e7b112 !important;
  background: transparent !important;
  box-shadow: none;
}
</style>
