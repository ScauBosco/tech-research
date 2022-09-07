# 2022

## 7月

### 7.19

1. 拆单 down
2. 登记工时 down
3. 右上角logo分拆出来布局和全面屏。回顾一下预加载代码。 not 预加载代码

+ 实现首页。
+ 看交互 百家族长宣言的数据哪些是接口返回的，做的时候先不高亮和分段布局，只生成空白页。

> 7.18工作小结
>  初始化项目 完成加载页基本布局和预加载功能 和ui进行背景图小屏裁剪问题的沟通与协商
> 尝试模仿实现umi的layouts目录结构的全局路由(虽然这个项目打算用单页面路由实现，这个没太大必要)
> 尝试模仿实现真实的预加载，用createjs的preloadjs。



### 7.20

1. GitHub找一下推荐系统算法实现相关代码  

> 7.19工作小结
>
> + 今天看了b站图嵌入相关视频，大概有个印象，还得再看看别的视频，但注意不要太深入。一个序列距离计算的方法，`动态时间规整`
> + 实现了首页和完善了加载页 设置全屏
> + 今天学了react渲染加载一个细节https://juejin.cn/post/7103831309767671816#heading-9
>   关于执行次数，为什么不执行第四次，据说有个
>   ![image-20220720005138530](C:\Users\GZS20818\AppData\Roaming\Typora\typora-user-images\image-20220720005138530.png)
>
> 



### 7.21

1. 明天阅读全面屏库的代码的实现原理 undo
2. 百家组长宣言这几个字可能有改变

> 7.20总结
> 今晚实现了一个动画效果
>
> ```css
> @include element('arrow') {
>     background-image: url('~@/assets/img/slide-arrow.png');
>     background-size: 100% 100%;
>     width: 143px;
>     height: 90px;
>     position: absolute;
>     bottom: 40px;
>     left: 50%;
>     transform: translateX(-50%);
>     animation: cir 0.7s linear infinite alternate;
>   }
> @keyframes cir {
>   from {
>     bottom: 40px;
>   }
>   to {
>     bottom: 60px;
>   }
> }
> ```
>
> 套了一个swiper效果模板
>
> ```tsx
> <Swiper
>       {...props}
>       style={{
>         height: '100vh',
>       }}
>     >
>       {React.Children.map(children, (child, index) => {
>         // console.log(child);
>         console.log('index:', index);
>         return (
>           <SwiperSlide
>             style={{
>               height: '100vh',
>             }}
>           >
>             {child}
>           </SwiperSlide>
>         );
>       })}
>     </Swiper>
> ```
>
> 今晚实现了全屏的打开和隐藏
> ![image-20220720235458674](C:\Users\GZS20818\AppData\Roaming\Typora\typora-user-images\image-20220720235458674.png)
>
> 



### 7.22

1. 备忘`// 这里要加一个第一次点击进去，做一个缓存`记录第一次访问
2. 数据缺省页和登录页（区分没数据和没登录，先做没登录）
3. 分享页(估计也需要等数据)

> 7.21
>
> 重新实现正确的全面屏逻辑并更改导航栏标题颜色 完备百家家族滑动逻辑子页 重构滑动通用页 调整首页跳转逻辑 留出是否访问过跳转逻辑 构建家族列表页框架 完备我的家族滑动逻辑子页
>
> + 处理了最后一页禁止下滑可以上滑
>
>   ```js
>   onSlideChange={() => {
>             swiperRef.current.allowSlideNext =
>               swiperRef.current.activeIndex !== 3;
>           }}
>   ```
>
>   
>
> +  处理滑动到最后一页禁止滑动，包一层`<div className="swiper-no-swiping">`
>
> + 更改导航栏标题颜色 利用在相应页面css文件中覆盖body样式



### 7.25

1. 确定交互细节，问下接口数据
2. 分享页
3. 总感觉登录的逻辑写得有点不通顺，或许可以等有数据再重构一下

> 今天好像没学到啥，有个文字限定长度溢出的自动实现。flex布局不需要再手动预估width
>
> ```tsx
> <div><span>asd</span><img /></div>
> div{
>     display: flex;
>     justify-content: space-between;
> }
>     span {
>       overflow: hidden;
>       text-overflow: ellipsis;
>       white-space: nowrap;
>     }
> ```



### 7.26

1. 分享页继续实现，并且截图功能，隐藏导航栏
2. 分享到圈子

+ 争取明天早上早上，下午开始学网盘的pdf相关的

> 今晚利用了flex实现垂直元素排列且水平居中布局，先要调整flex-direction: column; 再align-items: center;



### 7.29

1. 大神外打开的弹窗实现



### 8.1

+ 比较java python C++ golang的学习路线，选一个难度中等的，难度小的以后慢慢学也不怕。结合大数据+推广搜。Hadoop，Spark学习路线。
+ 明天开始学Java



### 8.2

+ ![](C:\Users\GZS20818\AppData\Roaming\Typora\typora-user-images\image-20220801151529806.png)
+ ![image-20220801151555452](C:\Users\GZS20818\AppData\Roaming\Typora\typora-user-images\image-20220801151555452.png)



### 8.6

> + 关于background-size 简而言之，cover和100%不能混用
>
>   + 使用关键词 `contain`
>   + 使用关键词 `cover`
>   + 设定宽度和高度值
>
>   当通过宽度和高度值来设定尺寸时，你可以提供一或者两个数值：
>
>   + 如果仅有一个数值被给定，这个数值将作为宽度值大小，高度值将被设定为`auto。`
>   + 如果有两个数值被给定，第一个将作为宽度值大小，第二个作为高度值大小。



### 8.7 

+ 使用ahooks虚拟列表useVirtualList时注意 itemHeight这个属性的单位是px，只能写数字，所以对于rem要进行手动的转换。
  `itemHeight: (document.documentElement.clientWidth / 750) * 100 * 3.84,`其中750是设计稿的尺寸，100是固定比例，3.84是你原本想写的rem



### 8.9

1. 接口试调用一下
2. 个人数据页文字排版弄一下，大标题先用普通字排版。
3. 大标题和小段落文案要有动画效果展示  undo



### 8.11

1. 做缓存，1.隐私协议 2.家族第一次登录
2. 数据绑定



### 8.12

> ```js
> // 字体延迟加载
> function loadFont() {
>   webFontLoader.load({
>     custom: {
>       families: ['pingfang'],
>     },
>     classes: false,
>     active() {
>       const root = document.getElementById('root');
>       if (root) {
>         root.style.fontFamily = 'pingfang';
>       }
>     },
>   });
> }
> ```



### 8.23

+ 找一天把代码删注释

1. 



### 8.24

> [**页面视觉稳定性之CLS** ](https://www.bilibili.com/read/cv7291969/)



### 8.26

##### 描述一下https协议加密原理

> 关键点：非对称传pre-master，对称传数据
> 浏览器发送对称和非对称加密套件列表和浏览器随机数，服务器返回对称和非对称加密套件和服务器随机数。
> 浏览器随机数+服务器随机数->pre-master （没有人知道浏览器使用什么规则生成pre-master)
> pre-master通过服务器返回的公钥加密传给服务器，服务器只能用私钥解密出pre-master (黑客即使拿到也无法解密，无法获取pre-master)
> 双方用 浏览器随机数+服务器随机数+pre-master 生成数据公钥(双方各自生成不传输) 
> 然后用数据公钥传数据

##### 正则表达式 [测试工具](https://www.runoob.com/regexp/regexp-syntax.html)

> +1或多 *0或多 ?0或1 {n,}限定匹配次数
> ^除了 `/[A-Z]/g` 范围 `/./g` 匹配除换行符（\n、\r）之外的任何单个字符，相等于 `[^\n\r]` 
> \s 是匹配所有空白符，包括换行，\S 非空白符，不包括换行。
> \w 匹配字母、数字、下划线。等价于 [A-Za-z0-9_]
> `/<\w+?>/ 匹配<h1>`通过在 *****、**+** 或 **?** 限定符之后放置 **?**，该表达式从"贪婪"表达式转换为"非贪婪"表达式或者最小匹配。
>
> **^** 和 **$** 分别指字符串的开始与结束
>
> | i    | ignore - 不区分大小写           | 将匹配设置为不区分大小写，搜索时不区分大小写: A 和 a 没有区别。 |
> | ---- | ------------------------------- | ------------------------------------------------------------ |
> | g    | global - 全局匹配               | 查找所有的匹配项。                                           |
> | m    | multi line - 多行匹配           | 使边界字符 **^** 和 **$** 匹配每一行的开头和结尾，记住是多行，而不是整个字符串的开头和结尾。 |
> | s    | 特殊字符圆点 **.** 中包含换行符 | 默认情况下的圆点 **.** 是匹配除换行符 **\n** 之外的任何字符，加上 **s** 修饰符之后, **.** 中包含换行符 \n。 |

## Long term target

+ https://app.mokahr.com/campus_apply/megviihr/38642#/job/887c5137-7e8f-47ef-ba54-c5980d2e25be 旷视全栈
+ 学东西要做笔记 学一个知识点，以自己的话复述总结一次，形成长久的笔记，不然肯定会忘。
+ 



