# Welcome2018 PC端 



### 使用到的库和插件

Vue

Vue Router

vue2-loading-bar   （路由跳转状态的进度条）

Animated.css

axios

ECharts

Vue-Video-Player



### Todo:

- [x] Layout悬浮div放缩时的水平位置不变
- [x] 重邮地图模糊搜索(TODO:列出所有符合输入的地点的菜单)
- [ ] 优化垃圾代码(特别是Vmap.vue)
- [x] 返回顶部的云震动效果
- [x] 迎新活动分页的动态路由
- [x] 迎新活动分页的loading bar的bug
- [x] 分页器小组件
- [x] 切换页面后改变滚动条高度
- [x] 改下组件目录结构,太乱
- [ ] 拿api渲染帮帮忙页面
- [x] 实现视觉的滚动条
- [x] 给地图打点
- [x] 解决路由导航栏active的bug
- [ ] 404页面




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

`TopBar.vue`

顶部栏动态切换组件

```js
props: {
        barList: {
            type: Array
        }
    }
    
示例:
	<top-bar :barList="barList"></top-bar>
	
	barList: [
            {
                title: require('../../assets/xiaojizuzhi.png'),
                components: null
            },
            {
                title: require('../../assets/xueshengshetuan.png'),
                components: null
            },
            {
                title: require('../../assets/hongyanwangxiao.png'),
                components: null
            }]
```

`PhotoFrame.vue`

照片相框

```js
props: {
        obj: {
            type: Object
        }
    }

示例:
	<photo-frame :obj=chenqiqi class="photo"></photo-frame>
	
	chenqiqi: {
                photo: require('../../assets/chenqiqi.png'),
                content: '陈琪琪'
            }
```

`Card.vue`

学生代表名片

```js
props: {
        obj: {
            type: Object
        }
    }

示例:
	<card :obj="jiangtianxing" class="card"></card>
	
	jiangtianxing: {
                name: '蒋**',
                photo: require('../../assets/jiangtianxing.png'),
                content: '重邮小帮手背后的技术好能手，用创意传递团思党意；红岩网校里辛勤的代码探索者，用产品激活青春正能量。用原创游戏贴近同学，建专题网站打造主流，带技能培训熔炼团队，抓宣传跟帖清朗网络。他就是将实践服务融入网络的社会主义核心价值观传播者。'
            }
```

`CquptVideo.vue`

点击打开外链视频

```js
props: {
        obj: {
            type: Object
        }
    }

示例:
	<cqupt-video :obj="test" class="obj"></cqupt-video>
	
	test: {
                photo: require('../../assets/dom1.jpg'),
                link: 'http://baidu.com',
                content: '舌尖上的重邮'
            }
```

`SideBar.vue`

侧边栏动态切换组件

```js
props: {
        barList: {
            type: Array
        }
    }
    
示例:
	<top-bar :barList="barList"></top-bar>
	barList: [
            {
                title: require('../../assets/xiaojizuzhi.png'),
                component: ZuZhi
            },
            {
                title: require('../../assets/xueshengshetuan.png'),
                component: null
            },
            {
                title: require('../../assets/hongyanwangxiao.png'),
                component: null
            }]
```




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