# Welcome2018 PC端 



### 使用到的库和插件

Vue

Vue Router

vue2-loading-bar   （路由跳转状态的进度条）

Animated.css



### Vue Compoent Prop

`ClickMe.vue`

了解更多点击按钮跳转路由

```js
props: {
        path: {
            type: String,
            default: '/'
        }
    }
```

`HomeSquareFrame.vue`

首页正方形框架

```js
props: {
    obj: Object
}

示例:

obj: {
	title: require('../assets/fttraining.png'),
         icon: require('../assets/training-icon.png'),
         content: '迈着矫健的步伐，挺拔身姿，跑道上留下他们坚定的足迹...',
         path: '/training'
}
```

`Carousel.vue`

轮播图

```js
props: {
        autoplay: {
            type: Boolean,
            default: false
        },
        interval: {
            type: Number,
            default: 5000
        },
        carouselList: {
            type: Array,
            default: function() {
                return []
            }
        }
    }

示例:
<carousel :carouselList="carouselList" autoplay></carousel>

carouselList: [
                {src: require('./assets/1.jpg'), content: '第一张'},
                {src: require('./assets/2.jpg'), content: '第二张'},
                {src: require('./assets/3.jpg'), content: '第三张'}
            ]
```

`Tab.vue`

tab动态切换组件

```js
props: {
    tabList: {
        type: Array
    }
}

示例:
<tab :tabList="list"></tab>

list: [
                {
                    title: '学生组织',
                    component: TabTest1
                },
                {
                    title: '宣传视频',
                    component: TabTest2
                },
                {
                    title: '学生代表',
                    component: TabTest3
                }
    ]
```

`GoTop.vue`与`QRcode`

返回顶部与二维码悬浮

```js
props: {
    screenWidth: {    //传入屏幕宽度，用于放缩时水平方向不变
        type: Number
    }
}
```

Todo:

- [ ] 优化代码(Vmap.vue...)
- [ ] 优化搜索(模糊查询时出现提示框)
- [x] 返回顶部的云震动效果


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```