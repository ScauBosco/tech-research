+ [JavaScript reduce() 方法](https://www.runoob.com/jsref/jsref-reduce.html) 累加器
+ [同步任务（宏任务，微任务），异步任务](https://blog.csdn.net/weixin_34357887/article/details/91401079) [另一个](https://blog.csdn.net/lc237423551/article/details/79902106?spm=1001.2101.3001.6650.6&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromBaidu%7ERate-6.pc_relevant_default&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromBaidu%7ERate-6.pc_relevant_default&utm_relevant_index=12)
+ [搞懂Promise之Promise基础](https://blog.csdn.net/weixin_42309926/article/details/108449142)
+ [TS中的!和?用法](https://www.jianshu.com/p/dd304d5cb3dc)
+ [typescript中的as](https://segmentfault.com/q/1010000010770590)

+ [ts 高级类型之 索引类型 keyof](http://ipenman.cn/posts/8fdb6e48/)
+ import 和 require区别 

![image-20220128145857878](C:\Users\GZS20818\AppData\Roaming\Typora\typora-user-images\image-20220128145857878.png)

+ [判断一个类型是否数组](https://www.jb51.net/article/79939.htm)

  ```js
  var ary = [1,23,4];
  function isArray(o){
  return Object.prototype.toString.call(o)=='[object Array]';
  }
  console.log(isArray(ary));
  ```

  

+ 解构赋值

  这实际上说明，对象的解构赋值是下面形式的简写

  ```
  let { foo: foo, bar: bar } = { foo: "aaa", bar: "bbb" };
  ```

  也就是说，对象的解构赋值的内部机制，是先找到同名属性，然后再赋给对应的变量。真正被赋值的是后者，而不是前者。

  > let obj={ foo: "aaa", bar: "bbb" }
  >
  > let {foo:jiegou} <==> let jiegou = obj[foo]="aaa"
  >
  > let {foo}=obj <==> let foo=obj[foo]="aaa"



+ 原型对象prototype,归属构造函数

  > 把不变的方法直接定义在prototype对象上，所有对象实例就可以共享这些方法
  >
  > ```js
  > Star.prototype.sing=function(){
  >     // do something
  > }
  > ```

+ 对象(de)原型__ proto__，归属对象，指向构造函数的prototype

  > ldh.__ proto__==Star.prototype

+ constructor属性就是构造函数本身，常用于prototype以对象形式赋值时，因为被覆盖重新定义
  每个构造函数的prototype都有一个constructor和prototype，constructor指回自己，prototype是一个而额外的原型对象用于存放静态函数(同时他也有一个constructor指向自己)
  每个构造函数都有prototype，prototype对象里都有一个constructor(还有上面定义的一些其他函数，和继承的原型)，constructor又指回本身所以它也有prototype对象（并且类本身会有一些属性），就这样构成一个圈。

  ```js
  Star.prototype={
      constructor=Star,
  	sing:function(){//},
      move:function(){//}
  }
  ```

  ![image-20220209162403283](C:\Users\GZS20818\AppData\Roaming\Typora\typora-user-images\image-20220209162403283.png)

+ Object.prototype原型对象里面的__ proto__原型指向null

+ [Promise 中的三兄弟 .all(), .race(), .allSettled()](https://segmentfault.com/a/1190000020034361)

+ [ts中declare](https://segmentfault.com/q/1010000038137236)



+ 封装一个网络请求

  ```ts
  import axios, { AxiosRequestConfig } from 'axios';
  import { ENV } from '@/constant/constants';
  import { dsRequestFulfilled } from '@opd-fe/axios-interceptor';
  
  const axiosInstance = axios.create({});
  axiosInstance.interceptors.request.use(dsRequestFulfilled);
  
  const defaultRes = {
    code: 500,
    errmsg: 'Error',
    result: null,
  };
  
  const baseUrl =
    ENV === 'production'
      ? 'https://inf-gtools.ds.163.com'
      : 'https://inf-gtools-test.ds.163.com';
  
  const cachedDataMap: {
    [key: string]: DsAxiosResponseType;
  } = {}; // 数据的缓存对象
  
  interface DsRequestConfigType extends AxiosRequestConfig {
    useCached?: boolean;
  }
  export default async function dsRequest(
    config: DsRequestConfigType = {}
  ): Promise<DsAxiosResponseType> {
    // 请求 key，用于缓存数据或防止同时发送多个请求
    const requestKey = JSON.stringify(config);
  
    // 如果有设置 useCached 优先从缓存中返回数据
    if (config.useCached) {
      if (cachedDataMap[requestKey]) {
        return cachedDataMap[requestKey];
      }
    }
  
    // 处理 url ，如果是以 “/” 开头的需要使用 baseUrl 拼接完整
    let url = config.url || '';
    if (url[0] === '/') {
      url = baseUrl + url;
    }
  
    let res = defaultRes;
    try {
      res = (
        await axiosInstance({
          method: 'POST',
          useGlClientHeader: true,
          ...config,
          data: config?.data || {},
          url,
        })
      ).data;
    } catch (err: any) {
      console.log(err.error);
    }
  
    console.log(requestKey, ' ', 'is done! \n');
  
    // 只缓存 code === 200 的请求
    if (config.useCached && res?.code === 200) {
      cachedDataMap[requestKey] = res;
    }
    return res;
  }
  ```

  
