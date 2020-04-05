# Lab4 设计文档
By TianyiZhang
### 页面构成
* 顶部的nav-bar部分是一个顶栏构成的导航栏
    * 导航栏左侧是页面的图标、Home、Browse、Search等按钮
    * 导航栏的右侧是My Account选项可以选择相关内容
* 中间是三张图构成的可自动手动切换的图片展示区
* 页脚是社交媒体、备案号等信息

### 部分实现细节
* Account的下拉菜单使用了bootstrap的data-toggle="dropdown"属性，调用了bootstrap框架
* 图片轮播使用了
```css
    .carousel-inner > .item > img,
    .carousel-inner > .item > a > img {
      display: block;
      max-width: 100%;
      height: auto;
    }
```
* footer通过float:left和margin进行了位置排列调整