# 🚀 Tokyo Japanese Cuisine - 快速开始

## 📋 系统要求

- **Node.js** 16.0 或更高版本
- **npm** 8.0 或更高版本
- 现代浏览器（Chrome、Firefox、Safari、Edge）

## ⚡ 一键安装

### Windows 用户：
```bash
# 双击运行
install.bat

# 或者命令行运行
install.bat
```

### Mac/Linux 用户：
```bash
# 运行安装脚本
./install.sh

# 或者手动安装
npm install
```

## 🎯 手动安装步骤

如果自动安装脚本不工作，请按以下步骤手动安装：

### 1. 检查环境
```bash
# 检查 Node.js 版本
node --version

# 检查 npm 版本
npm --version
```

### 2. 安装依赖
```bash
npm install
```

### 3. 启动开发服务器
```bash
npm start
```

### 4. 构建生产版本
```bash
npm run build
```

## 📁 图片资源准备

在 `public/images/` 文件夹中放置以下图片：

```
public/
└── images/
    ├── tokyorestaurant.webp    # 餐厅背景图
    ├── tokyologo.png          # 餐厅Logo
    ├── chef.webp              # 厨师图片
    ├── vision.png             # 愿景背景图
    ├── menubg.webp            # 菜单背景图
    ├── sushi.png              # 寿司菜单封面
    ├── grand.png              # 精选菜单封面
    ├── Shoji.svg              # 日式门图片
    ├── blossom.png            # 樱花树枝
    ├── petal1.png             # 樱花花瓣1
    ├── petal2.png             # 樱花花瓣2
    ├── petal3.png             # 樱花花瓣3
    ├── petal4.png             # 樱花花瓣4
    ├── petal5.png             # 樱花花瓣5
    ├── petal6.png             # 樱花花瓣6
    ├── petal7.png             # 樱花花瓣7
    └── petal8.png             # 樱花花瓣8
```

## 🛠️ 开发命令

| 命令 | 说明 |
|------|------|
| `npm start` | 启动开发服务器 (http://localhost:3000) |
| `npm run build` | 构建生产版本 |
| `npm test` | 运行测试 |
| `npm run eject` | 弹出配置（不推荐） |

## 🌐 访问网站

安装完成后，在浏览器中访问：
- **开发环境**: http://localhost:3000
- **生产环境**: 运行 `npm run build` 后，将 `build` 文件夹部署到服务器

## ❓ 常见问题

### Q: 安装失败怎么办？
A: 检查网络连接，确保能访问 npm 仓库。可以尝试：
```bash
npm cache clean --force
npm install
```

### Q: 图片不显示？
A: 确保图片文件放在 `public/images/` 文件夹中，文件名与代码中的引用一致。

### Q: 端口被占用？
A: 修改端口：
```bash
PORT=3001 npm start
```

### Q: 构建失败？
A: 检查是否有语法错误，确保所有依赖都已安装。

## 📞 技术支持

如果遇到问题，请检查：
1. Node.js 版本是否符合要求
2. 网络连接是否正常
3. 图片文件是否完整
4. 控制台是否有错误信息

---

**享受你的 Tokyo Japanese Cuisine 网站开发！** 🎌
