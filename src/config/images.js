// 图片配置文件
// 请根据你的Hostinger服务器地址修改下面的BASE_URL

// 选项1: 如果你有自定义域名
const BASE_URL = 'https://test.kunzzgroup.com';

// 选项2: 如果你使用Hostinger的免费域名
// const BASE_URL = 'https://yourdomain.hostinger.com';

// 选项3: 如果你使用IP地址
// const BASE_URL = 'https://your-ip-address';

// 选项4: 本地开发
// const BASE_URL = '';

// 图片路径配置
export const IMAGES = {
  // 首页图片
  tokyoRestaurant: `${BASE_URL}/images/tokyorestaurant.webp`,
  tokyoLogo: `${BASE_URL}/images/tokyologo.png`,
  
  // 关于我们页面
  chef: `${BASE_URL}/images/chef.webp`,
  blossom: `${BASE_URL}/images/blossom.png`,
  
  // 愿景页面
  vision: `${BASE_URL}/images/vision.png`,
  
  // 菜单页面
  menuBg: `${BASE_URL}/images/menubg.webp`,
  sushi: `${BASE_URL}/images/sushi.png`,
  grand: `${BASE_URL}/images/grand.png`,
  
  // 日式门
  shoji: `${BASE_URL}/images/Shoji.svg`,
  
  // 樱花花瓣
  petals: [
    `${BASE_URL}/images/petal1.png`,
    `${BASE_URL}/images/petal2.png`,
    `${BASE_URL}/images/petal3.png`,
    `${BASE_URL}/images/petal4.png`,
    `${BASE_URL}/images/petal5.png`,
    `${BASE_URL}/images/petal6.png`,
    `${BASE_URL}/images/petal7.png`,
    `${BASE_URL}/images/petal8.png`,
  ]
};

// 使用说明：
// 1. 将上面的 BASE_URL 修改为你的Hostinger服务器地址
// 2. 确保图片路径与Hostinger上的实际路径一致
// 3. 保存文件后，图片就会从你的服务器加载
