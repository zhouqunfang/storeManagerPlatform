# 🏪 校园小卖部

> 校园小卖部——店铺数据管理平台，是一个面向校园场景的全栈电商管理系统。包含前台商城（浏览商品、购物车、下单、收藏、评价、充值）和后台管理（数据看板、商品管理、订单管理、用户管理等）两大模块。

[![Vue](https://img.shields.io/badge/Vue-3.3-4FC08D?logo=vuedotjs&logoColor=white)](https://vuejs.org/)
[![Vite](https://img.shields.io/badge/Vite-4.4-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Element Plus](https://img.shields.io/badge/Element_Plus-2.8-409EFF?logo=element&logoColor=white)](https://element-plus.org/)
[![Spring Boot](https://img.shields.io/badge/Spring_Boot-3.3-6DB33F?logo=springboot&logoColor=white)](https://spring.io/projects/spring-boot)
[![Java](https://img.shields.io/badge/Java-21-ED8B00?logo=openjdk&logoColor=white)](https://openjdk.org/)
[![MySQL](https://img.shields.io/badge/MySQL-8.0-4479A1?logo=mysql&logoColor=white)](https://www.mysql.com/)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

---

## 📖 目录

- [项目简介](#-项目简介)
- [技术栈](#-技术栈)
- [功能模块](#-功能模块)
- [项目结构](#-项目结构)
- [快速开始](#-快速开始)
- [API 接口](#-api-接口)
- [界面预览](#-界面预览)
- [开发规范](#-开发规范)
- [许可协议](#-许可协议)

---

## 📋 项目简介

校园小卖部是一个专为校园环境设计的店铺管理平台，旨在帮助校园商家高效管理商品销售、订单处理和用户服务，同时为学生用户提供便捷的购物体验。

### 核心特性

- 🛍️ **前台商城** — 商品浏览、搜索、购物车、在线下单、收藏评价
- 📊 **数据看板** — ECharts 可视化图表，实时展示店铺经营数据
- 🗂️ **分类管理** — 灵活的商品分类体系
- 👥 **用户管理** — 用户注册登录、个人信息、充值余额
- 📦 **订单管理** — 订单全生命周期管理
- 🖼️ **轮播图管理** — 首页轮播图动态配置
- 💬 **评论评价** — 商品评价与回复功能
- ❤️ **收藏功能** — 用户商品收藏管理

---

## 🛠️ 技术栈

### 前端

| 技术 | 版本 | 用途 |
|------|------|------|
| Vue | 3.3 | 渐进式前端框架 |
| Vite | 4.4 | 前端构建工具 |
| Element Plus | 2.8 | UI 组件库 |
| Vue Router | 4.2 | 前端路由 |
| Axios | 1.6 | HTTP 客户端 |
| ECharts | 6.0 | 数据可视化 |
| wangEditor | 5.1 | 富文本编辑器 |
| Sass | 1.69 | CSS 预处理器 |
| ESLint | 10.x | 代码质量检查 |
| Prettier | 3.8 | 代码格式化 |

### 后端

| 技术 | 版本 | 用途 |
|------|------|------|
| Spring Boot | 3.3.1 | Java Web 框架 |
| MyBatis | 3.0 | ORM 持久层框架 |
| MySQL | 8.0 | 关系型数据库 |
| PageHelper | 1.4 | MyBatis 分页插件 |
| Hutool | 5.8 | Java 工具类库 |
| Maven | 3.x | 项目构建管理 |

---

## 🧩 功能模块

### 前台商城 (`/front`)

```
首页          →  轮播图展示、热门商品推荐
精选商品      →  商品列表、分类筛选、关键词搜索
商品详情      →  商品信息、评价查看、加入购物车
购物车        →  商品管理、数量调整、批量下单
商品订单      →  订单列表、状态查看
个人中心      →  个人信息查看与编辑
修改密码      →  密码修改
我的充值      →  账户充值记录
我的收藏      →  商品收藏管理
我的评价      →  已评价商品列表
```

### 后台管理 (`/manager`)

```
数据管理      →  ECharts 可视化看板（订单、营收、用户统计）
分类管理      →  商品分类的增删改查
商品管理      →  商品上架、编辑、下架（富文本描述）
轮播图管理    →  首页轮播图上传与管理
用户管理      →  用户账号管理
管理员管理    →  后台管理员账号管理
订单管理      →  订单处理、状态变更
充值管理      →  用户充值记录审核
评论管理      →  商品评论管理
收藏管理      →  用户收藏数据查看
```

---

## 📁 项目结构

```
code2026/
├── vue/                          # 前端 Vue 项目
│   ├── public/                   # 静态资源
│   ├── src/
│   │   ├── assets/               # 样式、图片资源
│   │   ├── components/           # 公共组件 (Footer)
│   │   ├── router/               # 路由配置 (index.js)
│   │   ├── utils/                # 工具函数 (Axios 封装)
│   │   ├── views/
│   │   │   ├── front/            # 前台页面
│   │   │   │   ├── Home.vue          # 首页
│   │   │   │   ├── Goods.vue         # 商品列表
│   │   │   │   ├── GoodsDetail.vue   # 商品详情
│   │   │   │   ├── Cart.vue          # 购物车
│   │   │   │   ├── UserOrders.vue    # 我的订单
│   │   │   │   ├── Person.vue        # 个人信息
│   │   │   │   ├── Password.vue      # 修改密码
│   │   │   │   ├── UserCollect.vue   # 我的收藏
│   │   │   │   ├── UserComment.vue   # 我的评价
│   │   │   │   └── UserRecharge.vue  # 我的充值
│   │   │   ├── manager/          # 后台管理页面
│   │   │   │   ├── DataManager.vue   # 数据看板
│   │   │   │   ├── Category.vue      # 分类管理
│   │   │   │   ├── Goods.vue         # 商品管理
│   │   │   │   ├── Carousel.vue      # 轮播图管理
│   │   │   │   ├── User.vue          # 用户管理
│   │   │   │   ├── Admin.vue         # 管理员管理
│   │   │   │   ├── Orders.vue        # 订单管理
│   │   │   │   ├── Recharge.vue      # 充值管理
│   │   │   │   ├── Comment.vue       # 评论管理
│   │   │   │   ├── Collect.vue       # 收藏管理
│   │   │   │   ├── Person.vue        # 个人信息
│   │   │   │   └── Password.vue      # 修改密码
│   │   │   ├── Front.vue         # 前台布局壳
│   │   │   ├── Manager.vue       # 后台布局壳
│   │   │   ├── Login.vue         # 登录页
│   │   │   └── Register.vue      # 注册页
│   │   ├── App.vue               # 根组件
│   │   └── main.js               # 入口文件
│   ├── .env.development          # 开发环境变量
│   ├── .env.production           # 生产环境变量
│   ├── vite.config.js            # Vite 配置
│   ├── eslint.config.mjs         # ESLint 配置
│   ├── .prettierrc.json          # Prettier 配置
│   └── package.json
├── springboot/                   # 后端 Spring Boot 项目
│   ├── src/main/java/com/example/
│   │   ├── controller/           # 控制器层（14 个 Controller）
│   │   ├── service/              # 服务层
│   │   ├── mapper/               # MyBatis Mapper 层
│   │   ├── entity/               # 实体类（12 个 Entity）
│   │   ├── common/               # 公共类（CorsConfig, Result）
│   │   ├── exception/            # 全局异常处理
│   │   ├── utils/                # 工具类
│   │   └── SpringbootApplication.java  # 启动类
│   ├── src/main/resources/       # 配置文件
│   └── pom.xml                   # Maven 配置
└── files/                        # 上传文件存储目录
```

---

## 🚀 快速开始

### 环境要求

- **Node.js** >= 18
- **Java** >= 21
- **Maven** >= 3.8
- **MySQL** >= 8.0

### 1. 克隆项目

```bash
git clone <repository-url>
cd code2026
```

### 2. 配置数据库

在 MySQL 中创建数据库，并在 `springboot/src/main/resources/application.yml` 中配置数据库连接信息：

```yaml
spring:
  datasource:
    url: jdbc:mysql://localhost:3306/your_database?useUnicode=true&characterEncoding=utf-8
    username: your_username
    password: your_password
```

### 3. 启动后端

```bash
cd springboot
mvn clean install
mvn spring-boot:run
```

后端服务默认运行在 `http://localhost:9090`。

### 4. 启动前端

```bash
cd vue
npm install
npm run dev
```

前端开发服务器默认运行在 `http://localhost:5173`。

> **注意**：开发环境下，Vite 会将 API 请求代理到 `http://localhost:9090`（后端服务），请确保两个服务端口不冲突。

### 5. 访问系统

打开浏览器访问：

- **前台商城**：`http://localhost:5173/front`
- **后台管理**：`http://localhost:5173/manager`
- **登录页面**：`http://localhost:5173/login`

---

## 📡 API 接口

后端提供 RESTful API，主要接口模块如下：

| 模块 | 路径前缀 | 说明 |
|------|----------|------|
| 用户 | `/user` | 用户注册、登录、信息管理 |
| 管理员 | `/admin` | 管理员账号管理 |
| 分类 | `/category` | 商品分类管理 |
| 商品 | `/goods` | 商品 CRUD 及搜索 |
| 轮播图 | `/carousel` | 首页轮播图管理 |
| 购物车 | `/cart` | 购物车操作 |
| 订单 | `/orders` | 订单创建与管理 |
| 收藏 | `/collect` | 商品收藏管理 |
| 评论 | `/comment` | 商品评价管理 |
| 充值 | `/recharge` | 账户充值管理 |
| 文件 | `/files` | 图片等文件上传 |
| 前端 | `/web` | 前台展示相关接口 |

---

## 🖼️ 界面预览

### 前台商城

| 首页 | 商品列表 | 购物车 |
|------|----------|--------|
| ![首页](files/1763452959425-1.png) | ![商品](files/1763453432192-2.png) | ![购物车](files/1763453447423-2.png) |

### 后台管理

| 数据看板 | 商品管理 | 分类管理 |
|----------|----------|----------|
| ![数据](files/1763544923952-l1.png) | ![商品管理](files/1763971748290-8.png) | ![分类](files/1763971828249-5.png) |

---

## 📏 开发规范

本项目使用 **ESLint** 和 **Prettier** 保证代码风格一致性。

```bash
# 检查代码规范
cd vue
npm run lint

# 自动修复代码规范问题
npm run lint:fix

# 格式化代码
npm run format
```

### Git 提交规范

提交信息请遵循以下格式：

```
feat: 添加新功能
fix: 修复 Bug
style: 样式调整
refactor: 代码重构
docs: 文档更新
chore: 构建或辅助工具变动
```

---

## 📄 许可协议

本项目仅供学习交流使用。

---

<p align="center">
  <sub>Made with ❤️ for campus students</sub>
</p>
