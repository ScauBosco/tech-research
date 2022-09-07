## 类的继承与派生

### 第一节 类的继承与类的派生

#### 一、继承的概念

> public private protected 一般都默认使用public，很少用其他两个
>
> 区别成员属性，默认不写就是private
>
> 派生类可以改写基类访问权限
>
> 派生类使用基类同名属性时，基类::属性名

#### 二、派生类的定义与大小

```c++
class Align{
    char c;     //1
    int a;      //1+3+4
    double b;   //8+8
    long ll;    //16+8
    char f;     //24+1
                //25+x补齐到最接近并小于的2的n次方 
                //这里是32 2的5次方
};
int main(){
    Align ali;
    cout<<"size:"<<sizeof(ali)<<endl;   //32
    return 0;
}
```

> 字节对齐+最后补全 所在位置要求偏移值（地址编号需要相应的整数位）char 1 bool 1 int 4 double 4 float 4 long16

#### 三、继承关系的特殊性

+ 基类的友元不一定是派生类的友元；基类的成员函数是某类的友元函数，则其作为派生类继承的成员函数仍是某类的友元函数，重载后需要在友元类中重新添加声明(在友元类中定义某类的友元函数，某类的友元函数就可以拿到友元类的成员)。

  ```c++
  class another;
  class Base{
  private:
      float x;
  public:
      void print(const another &K);
  };
  class Derivedd:public Base{
  private:
      float y;
  public:
      void print(const another &K);
  };
  class another{
  private:
      int aaa;
  public:
      another(){
          aaa=100;
      }
      friend void Base::print(const another &K);
      friend void Derivedd::print(const another &K);
  };
  void Base::print(const another &K){
      cout<<"Base:"<<K.aaa<<endl;
  }
  void Derivedd::print(const another &K){
      cout<<"Derivedd:"<<K.aaa<<endl;
  }
  ```


+ 基类和派生类共享这个静态变量

#### 四、有继承关系的类之间的访问

+ 派生类与基类有同名成员变量或函数，可以用派生类对象名.基类::成员名 进行访问

#### 五、protected访问范围说明符

+ 在对外保留private权限下，对派生类开放访问权限

#### 六、多重继承

+ 同名属性或方法用类名限定

### 第二节 访问控制

#### 一、公有继承

+ 派生类从基类继承的访问权限不变

#### 二、类型兼容规则

+ 

#### 三、私有继承

#### 四、保护继承

### 第三节 派生类的构造函数和析构函数

#### 一、构造函数与析构函数

#### 二、复制构造函数

#### 三、多重继承的构造函数与析构函数

### 第四节 类之间的关系

#### 一、类与类之间的关系

#### 二、封闭类的派生

#### 三、互包含关系的类

### 第五节 多层次的派生

### 第六节 基类与派生类指针的互相转换





