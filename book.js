module.exports = {
    // 书籍信息
    title: '书名',
    description: '描述',
    isbn: '图书编号',
    author: '作者',
    lang: 'zh-cn',
  
    // 插件列表
    plugins: [
        "-lunr", "-search", "search-pro", "code",
        "expandable-chapters", "back-to-top-button", "sidebar-style" ,
        "splitter", "theme-lou"
    ],
  
    // 插件全局配置
    pluginsConfig: {
      "sidebar-style": {
        "title": "书题",
        "author": "雷文峰"
      },
      "theme-lou": {
        "color": "#FF4848", // 主题色
        // "favicon": "static/favicon.ico", // favicon图标
        // "logo": "static/logo.png", // 顶部左侧图标
        // "appleTouchIconPrecomposed152": "static/apple.png", // apple图标
        // "copyrightLogo": "assets/copyright.png",  // 底部水印LOGO
        "forbidCopy": false, // 页面是否禁止复制
        "search-placeholder": "Input Keywords to Search", // 搜索框默认文本
        "book-summary-title": "Article Directory", // 目录标题
        "book-anchor-title": "Search In the Article", // 本章目录标题
        "hide-elements": [".summary .gitbook-link", ".summary .divider"], // 需要隐藏的标签
        "copyright": {
          "author": "lwf"  // 底部版权展示的作者名
        },
        "imgStyle": {
          "isCenter": true, // 是否居中(默认为true)
          "isBox": false, // 是否有边框(默认为true)
          "otherStyle": 'max-width: 80%;', // 图片其他自定义CSS样式
        },
      }



      
    },
  
    // 模板变量
    variables: {
      // 自定义
    },
  };