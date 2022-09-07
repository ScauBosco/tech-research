+ [margin合并问题](https://segmentfault.com/a/1190000013735912)

  > ### 3.3 父子元素的情况
  >
  > 1. 给父元素添加padding-top值，缺点：增加了一点padding的误差
  > 2. 给父元素添加border值，比如`border-top:1px solid transparent;`，缺点同上
  > 3. 给父元素或者子元素声明浮动float，缺点：float有时是不必要的。
  > 4. 使父元素或子元素声明为绝对定位：`position:absolute/fixed;`
  > 5. 给父元素添加属性 `overflow:auto/auto/scroll;`
  > 6. 子元素的`margin`使用父元素的`padding`代替

+ > ### 3.1 自身margin合并的情况
  >
  > - 加个`padding`或者`border-top`/`border-bottom`
  >
  > ### 3.2 相邻元素的情况
  >
  > 1. 相邻元素中间添加一个1px的间隔元素(不推介，因为添加了冗余标签)
  > 2. 相邻元素加上`display: inline-block;` 或者`grid`与`inline-grid`后相邻元素之间的垂直外边距不会合并，不过注意`grid`的浏览器兼容性不太好。
  > 3. 相邻元素可以在其中一个元素外面包一层div，并设置任何能触发BFC的属性即可。codepen的DEMO
  > 4. 浮动与绝对定位之类脱离文档流的元素不发生margin合并

+ 一般用给父元素添加padding-top=1px 就可以消除合并问题再正常使用

+ 

+ 开心 解决了伪类层叠的问题

  ```css
  .selectLayout {
    height: 191px;
    position: relative;
    z-index: 1;
    .profile {
      background: url('../../assets/img/lessProfile.png');
      background-size: 100% 100%;
      background-repeat: no-repeat;
      // position: absolute;
      position: relative;
      width: 210px;
      height: 180px;
      left: 158px;
      // z-index: 5;
      &::before {
        position: absolute;
        top: 32px;
        left: 31px;
        content: '';
        display: block;
        // width: 1.46rem;
        // height: 1.46rem;
  
        width: 142px;
        height: 142px;
        background: url('~@/assets/img/testProfile.png');
        background-size: 100% 100%;
        // left: 170px;
        z-index: -1;
      }
    }
  }
  
  //重点是，子元素要relative。伪类设置z-index：-1，父元素设置z-index：1，子元素默认为0
  ```

+ css animation动画实现

  ```css
  .upSlide {
    background: url('../../assets/img/upSlide.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    position: absolute;
    bottom: 27px;
    width: 41px;
    height: 45px;
    left: 355px;
    // z-index: 85;
    animation: up-and-down 2s infinite;
  }
  @keyframes up-and-down {
    0% {
      transform: translateY(0);
    }
  
    80% {
      transform: translateY(-20px);
    }
  
    100% {
      transform: translateY(0);
    }
  }
  ```

+ z-index 必须在positive：relative生效

+ 底部溢出空白问题，高度不够，最下面元素给高度

+ 还有overflow：hidden，可以试试，还有就是可以尝试给定高度的习惯