# Tokyo Japanese Cuisine - React Version

这是一个使用React.js重新构建的Tokyo Japanese Cuisine餐厅网站。

## 功能特点

- 🎭 **推门动画效果** - 使用GSAP实现的精美推门动画
- 🌸 **樱花飘落效果** - 动态樱花花瓣飘落动画
- 💎 **玻璃态卡片** - 现代化的玻璃态设计风格
- 📱 **响应式设计** - 适配各种设备尺寸
- ⚡ **流畅动画** - 基于GSAP的高性能动画

## 技术栈

- **React 18** - 现代化的React框架
- **Tailwind CSS** - 原子化CSS框架，提供极致的设计自由度
- **GSAP** - 专业级动画库
- **PostCSS** - CSS后处理器
- **HTML5** - 语义化标记

## 为什么选择Tailwind CSS？

### 🎨 **设计自由度**
- 原子化CSS类，完全自定义样式
- 无需编写自定义CSS，直接在HTML中使用
- 完美适配日式设计的独特美学

### ⚡ **性能优化**
- 按需生成CSS，只包含使用的样式
- 比Bootstrap更小的文件体积
- 更好的缓存策略

### 🔧 **开发效率**
- 快速原型设计
- 一致的间距和颜色系统
- 强大的响应式设计工具

### 🎭 **动画支持**
- 丰富的动画和过渡效果
- 与GSAP完美配合
- 自定义动画关键帧

## 🚀 快速开始

### 一键安装（推荐）

**Windows 用户：**
```bash
# 双击运行安装脚本
install.bat
```

**Mac/Linux 用户：**
```bash
# 运行安装脚本
./install.sh
```

### 手动安装

1. **检查环境要求**：
   - Node.js 16.0+ 
   - npm 8.0+

2. **安装依赖**：
```bash
npm install
```

3. **启动开发服务器**：
```bash
npm start
```

4. **构建生产版本**：
```bash
npm run build
```

### 📁 图片资源

在 `public/images/` 文件夹中放置以下图片文件：
- `tokyorestaurant.webp` - 餐厅背景图
- `tokyologo.png` - 餐厅Logo  
- `chef.webp` - 厨师图片
- `vision.png` - 愿景背景图
- `menubg.webp` - 菜单背景图
- `sushi.png` - 寿司菜单封面
- `grand.png` - 精选菜单封面
- `Shoji.svg` - 日式门图片
- `blossom.png` - 樱花树枝
- `petal1.png` 到 `petal8.png` - 樱花花瓣

> 📖 详细安装说明请查看 [QUICK_START.md](./QUICK_START.md)

## Tailwind CSS 配置

项目已配置了自定义的Tailwind主题：

- **自定义颜色**: `tokyo-gold`, `tokyo-gold-light`, `tokyo-dark`, `tokyo-gray`
- **自定义字体**: `font-besley`, `font-arial`
- **自定义动画**: `animate-bounce-slow`, `animate-scroll`, `animate-fall`
- **自定义组件**: `.glass-effect`, `.tokyo-gold-border`, `.vertical-text`

## 项目结构

```
src/
├── components/
│   ├── HeroSection.js          # 首页推门效果
│   ├── HeroSection.css
│   ├── AboutSection.js         # 关于我们页面
│   ├── AboutSection.css
│   ├── ValuesSection.js        # 使命愿景价值观
│   ├── ValuesSection.css
│   ├── MenuSelectionSection.js # 菜单选择页面
│   └── MenuSelectionSection.css
├── App.js                      # 主应用组件
├── App.css                     # 全局样式
└── index.js                    # 应用入口
```

## 图片资源

请确保在 `public/images/` 目录下放置以下图片文件：

- `tokyorestaurant.webp` - 餐厅背景图
- `tokyologo.png` - 餐厅Logo
- `chef.webp` - 厨师图片
- `vision.png` - 愿景背景图
- `menubg.webp` - 菜单背景图
- `sushi.png` - 寿司菜单封面
- `grand.png` - 精选菜单封面
- `Shoji.svg` - 日式门图片
- `blossom.png` - 樱花树枝
- `petal1.png` 到 `petal8.png` - 樱花花瓣

## 浏览器支持

- Chrome (推荐)
- Firefox
- Safari
- Edge

## 开发说明

- 使用React Hooks进行状态管理
- GSAP动画通过useEffect和useRef实现
- 组件化设计，便于维护和扩展
- 响应式布局，适配移动端和桌面端
