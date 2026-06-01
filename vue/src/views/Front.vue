<template>
  <div class="front-shell">
    <div class="front-frame">
      <header class="front-header">
        <div class="front-brand">
          <img src="@/assets/imgs/logo.png" alt="" class="front-logo" />
          <div>
            <div class="front-title">服饰商城</div>
          </div>
        </div>
        <div class="front-nav">
          <el-menu
            router
            class="front-menu"
            :default-active="router.currentRoute.value.path"
            mode="horizontal"
          >
            <el-menu-item index="/front/home">首页</el-menu-item>
            <el-menu-item index="/front/goods">精选商品</el-menu-item>
            <el-menu-item index="/front/cart">购物车</el-menu-item>
            <el-menu-item index="/front/userOrders">商品订单</el-menu-item>
          </el-menu>
        </div>
        <div class="front-actions">
          <div class="front-search" v-if="router.currentRoute.value.path !== '/front/goods'">
            <el-input
              @keyup.enter="search"
              prefix-icon="Search"
              v-model="data.goodsName"
              placeholder="请输入商品名称查询"
            ></el-input>
          </div>
          <el-dropdown>
            <div class="front-user">
              <img
                class="front-user-avatar"
                :src="
                  data.user.avatar ||
                  'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
                "
                alt=""
              />
              <div>
                <div class="front-user-name">{{ data.user.name || '代码小白' }}</div>
                <div class="front-user-role">普通用户</div>
              </div>
              <div class="front-user-logout" @click.stop="logout">
                <el-icon><SwitchButton /></el-icon>
                <span>退出</span>
              </div>
            </div>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item @click="router.push('/front/userRecharge')"
                  >我的充值</el-dropdown-item
                >
                <el-dropdown-item @click="router.push('/front/userCollect')"
                  >我的收藏</el-dropdown-item
                >
                <el-dropdown-item @click="router.push('/front/userComment')"
                  >我的评价</el-dropdown-item
                >
                <el-dropdown-item @click="router.push('/front/person')">个人信息</el-dropdown-item>
                <el-dropdown-item @click="router.push('/front/password')"
                  >修改密码</el-dropdown-item
                >
                <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </header>

      <main class="front-content">
        <div class="front-content-inner">
          <router-view @updateUser="updateUser" />
          <!-- <Footer /> -->
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import router from '@/router'
import { ElMessage } from 'element-plus'
// import Footer from '@/components/Footer.vue'

const data = reactive({
  user: JSON.parse(localStorage.getItem('system-user') || '{}'),
  goodsName: null
})

const search = () => {
  if (data.goodsName) {
    router.push('/front/goods?name=' + data.goodsName)
    data.goodsName = null
  }
}

if (!data.user?.id) {
  ElMessage.error('请登录！')
  router.push('/login')
}

const logout = () => {
  localStorage.removeItem('system-user')
  router.push('/login')
  ElMessage.success('退出成功')
}

const updateUser = () => {
  data.user = JSON.parse(localStorage.getItem('system-user') || '{}')
}
</script>

<style scoped>
.front-shell {
  height: 100vh;
  padding: 20px;
  overflow: hidden;
}

.front-frame {
  height: 100%;
  background: #f5f5f5;
  border: 1px solid rgba(255, 255, 255, 0.65);
  border-radius: 28px;
  box-shadow: 0 24px 60px rgba(70, 70, 70, 0.16);
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.front-header {
  height: 86px;
  padding: 0 28px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(255, 255, 255, 0.9);
  border-bottom: 1px solid #ececec;
  flex-shrink: 0;
}

.front-brand {
  display: flex;
  align-items: center;
  gap: 14px;
}

.front-logo {
  width: 54px;
  height: 54px;
  padding: 6px;
  border-radius: 50%;
  object-fit: contain;
  background: linear-gradient(135deg, #fffdf5 0%, #ffffff 100%);
  border: 1px solid #f6e3a8;
  box-shadow: 0 8px 20px rgba(239, 187, 26, 0.18);
}

.front-title {
  font-size: 26px;
  font-weight: 700;
  color: #303133;
}

.front-nav {
  flex: 1;
  display: flex;
  justify-content: center;
  height: 86px;
}

.front-actions {
  display: flex;
  align-items: center;
  gap: 16px;
}

.front-search {
  width: 240px;
}

.front-user {
  padding: 10px 14px;
  display: flex;
  align-items: center;
  gap: 12px;
  border-radius: 999px;
  background: #fff9e8;
  border: 1px solid #f5e4ac;
  cursor: pointer;
}

.front-user-avatar {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #f0c857;
}

.front-user-name {
  color: #303133;
  font-size: 14px;
  font-weight: 600;
}

.front-user-role {
  margin-top: 2px;
  color: #b18b20;
  font-size: 12px;
}

.front-user-logout {
  margin-left: 8px;
  padding-left: 14px;
  border-left: 1px solid #f5e4ac;
  display: flex;
  align-items: center;
  gap: 4px;
  color: #b18b20;
  font-size: 13px;
  white-space: nowrap;
}

.front-user-logout:hover {
  color: #e7b112;
}

.front-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.front-content-inner {
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 26px;
}

:deep(.front-menu) {
  border-bottom: none !important;
  background: transparent !important;
  height: 86px;
}

:deep(.front-menu .el-menu-item) {
  height: 86px;
  line-height: 86px;
  border-bottom: none !important;
  border-radius: 14px;
  margin: 0 4px;
  color: #6b7280;
  font-weight: 500;
  font-size: 15px;
  padding: 0 24px;
}

:deep(.front-menu .el-menu-item:hover) {
  color: #e7b112 !important;
  background: transparent !important;
}

:deep(.front-menu .el-menu-item.is-active) {
  color: #ffffff !important;
  background: linear-gradient(135deg, #f0c43a 0%, #e7b112 100%) !important;
  box-shadow: 0 10px 18px rgba(231, 177, 18, 0.24);
}
</style>
