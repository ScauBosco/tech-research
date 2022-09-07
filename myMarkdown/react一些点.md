+ useEffect调用

  + 先是组件的渲染，再调用useEffect。dom运行完才运行useEffect
  + 没写第二个参数的话，每次渲染都会调用
  + 第二个参数起的是调用约束的作用，空数组指的是整个生命周期只调用一次，数组有state内容则监听相应的state有变化才更新

+ useRef和createRef区别

  > 可以看作是一个寄存器（类似C++的static变量），可以寄存一些东西。xxx.current=yyy
  >
  > 每次组件渲染都会重新useRef或createRef。useRef返回同一个，create就是新的
  >
  > 另外，可以利用useRef.current.focus()聚焦到input上，例如登陆界面直接聚焦到输入框

+ 标签内样式格式style={{textAlign:'center'}}

+ 以对象的形式引用styles。className={styles.css里面写的名}

+ 新东西 [recoil](https://zhuanlan.zhihu.com/p/150395461) 状态维护工具 替代redux

  + 用法

    >先定义state
    >
    >```tsx
    >export const leftColorState = atom({
    >    key: 'leftColorState', 
    >    default: 'red',
    >});
    >```
    >
    >任一Component只要import了这个文件中的state, 就能获取/修改它
    >
    >```tsx
    >const [leftColor, setLeftColor] = useRecoilState(leftColorState)
    >    const [rightColor, setRightColor] = useRecoilState(rightColorState)
    >    return (
    >        <div style={{...boxStyle, backgroundColor: leftColor}} onClick={()=>{setRightColor(toggleRightColor(rightColor))}}>
    >            click me
    >        </div>
    >    );
    >```

  + 引用别的atom,selector **状态互相依赖**

    ```tsx
    export const otherstate=selector({
        key:'otherstate',
        get:({get})=>{
            const inputValue=get(leftColorState);
            //做一些处理？
            return inputValue；
        }
    })
    //使用
    const [value]=useRecoilState(otherstate);
    console.log(value);
    
    //个人备注：
    get对应操作，可以是回调函数，回传参数包含get方法，get方法可以获取其他atom。
    另外还可以定义其他方法，方法也可以是支持异步的。
    
    ```

    > 我们需要通过 `selector` 来定义异步状态，如果 `get` 函数是一个 Promise，则代表该状态为异步状态，需要使用 `useRecoilValueLoadable` 来消费该状态。

    ```tsx
    const UserName = () => {
      const userNameLoadable = useRecoilValueLoadable(currentUserNameQuery);
      switch (userNameLoadable.state) {
        case "hasValue":
          return <div>{userNameLoadable.contents}</div>;
        case "loading":
          return <div>Loading...</div>;
        case "hasError":
          throw userNameLoadable.contents;
      }
    };
    //异步请求的三个状态，有点像Slice了
    ```

    > 区别
    >
    > `Recoil` 采用 `Hooks` 方式订阅和更新状态，常用的是下面三个 API：
    >
    > - `useRecoilState`：类似 useState 的一个 `Hook`，可以取到 `atom` 的值以及 `setter` 函
    > - `useSetRecoilState`：只获取 `setter` 函数，如果只使用了这个函数，状态变化不会导致组件重新渲染
    > - `useRecoilValue`：只获取状态

+ [深入理解React：懒加载（lazy）实现原理](https://www.cnblogs.com/forcheng/p/13132582.html)

​	示例代码：

```jsx
import React, { Suspense } from 'react';

const OtherComponent = React.lazy(() => import('./OtherComponent'));

function MyComponent() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <OtherComponent />
      </Suspense>
    </div>
  );
}
```

在路由中使用React.lazy

```tsx
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';

const Home = lazy(() => import('./routes/Home'));
const UserManage = lazy(() => import('./routes/UserManage'));
const AssetManage = lazy(() => import('./routes/AssetManage'));
const AttendanceManage = lazy(() => import('./routes/AttendanceManage'));

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/userManage" component={UserManage}/>
        <Route path="/assetManage" component={AssetManage}/>
        <Route path="/attendanceManage" component={AttendanceManage}/>
      </Switch>
    </Suspense>
  </Router>
)
```

+ [useMemo和useEffect有什么区别？怎么使用useMemo](https://www.jianshu.com/p/94ace269414d)

  > useMemo可用于监听某些元素改变才返回某个方法但还没执行。跟useEffect相似，但useEffect会直接执行函数，且运行时机不同。前者是Dom渲染时期，后者是Dom渲染完以后执行。





+ [按需图片加载折中办法](https://blog.csdn.net/zhengjie0722/article/details/78862938?spm=1001.2101.3001.6650.13&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromBaidu%7ERate-13.pc_relevant_paycolumn_v3&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromBaidu%7ERate-13.pc_relevant_paycolumn_v3&utm_relevant_index=17)
