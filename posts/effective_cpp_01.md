---
title: effective c++ 读书笔记 01
author: skadi
date: "2017-10-15 20:30"
tags:
  - 读书笔记
  - cpp
---

jd买的书终于到了,`effective c++`,`more effective c++`.

还有一本`effective mordern c++`只有英文版,不过现在我的水平看原版太吃力.于是把翻译版本打印了来看.应该过几天才到.

一口气读了`effective c++`12个item(第一章和第二章),不过这些我都做到了.


[item1:视c++为一个语言联邦](#item1)

[item2:用编译器取代预处理](#item2)

[item3:尽可能使用const](#item3)

[item4:确定对象被使用前已先被初始化](#item4)

[item5:了解c++默默编写并调用哪些函数](#item5)

[item6:若不想使用编译器自动生成的函数,应该明确拒绝](#item6)

[item7:为多态基类声明virtual析构函数](#item7)

[item8:别让异常逃离析构函数](#item8)

[item9:绝不在构造和析构过程中调用virtual函数](#item9)

[item10:令operator=返回一个reference to *this](#item10)

[item11:在operator=中处理"自我赋值"](#item11)

[item12:复制对象时勿忘其每一个成分](#item12)

# item1

由于c++演变,所以这条基本暂时可以不用在意,引用[`vczh在怎么样才算是精通 C++`的回答](https://www.zhihu.com/question/19794858/answer/18448868)
> * 面向对象（灵活应用virtual继承+shared_ptr可以达到java/C#的效果）
> * 模板（这里分两类，分别为type rich programming和meta programming，区别很大）
> * 函数式编程（如今有了lambda，配合<algorithm>文件，简直无敌了）
> * 过程式

> 但是难能可贵的是，这几种东西在C++混在一起用也是多么的自然。不过，这需要你花时间去掌控他。那到底有没有必要真的学到这个地步呢，我觉得跟你的领域是有关系的。譬如说我，基本上算是人格分裂的，因为：
> * 当我搞语言设计和编译器的时候，我总是会倾向于创造各种小DSL来给自己用，用的都是模板（想想boost的spirit大概就明白我的意思了，虽然我不用它），尽量让跟我有同样背景的人一眼能看懂我代码的意思。
> * 当我做我那个GUI库（www.gaclib.net）的时候，纯粹是用OO和IoC那一套。
> * 当我写3D渲染程序的时候，我会变成一个为了性能不惜牺牲可读性的人。


# item2

例如
`const double PI=3.14159`
比
`#define PI 3.14159`
要好得多,因为当PI宏因为各种情况出问题的时候,报错信息更加易读.而且不会
导致目标代码出现多个份`3.14159`.

书上介绍了因为宏替换出现的麻烦情况.
```
#define CALL_WITH_MAX(a,b) func((a)>(b) ? (a):(b) )
int a=5,b=0;
CALL_WITH_MAX(++a,b);
CALL_WITH_MAX(++a,b+10);
```
然而使用inline模版就不会出现这种情况.

# item3

很常见,`const`修饰.例如:
```
class point{
    //... other code
private:
    widget* m_widget;    
public:
    widget* getWidget()const;
    //... other code
}
```
让获取的 `widget*` 不可修改.

总之,推荐的是 const everywhere .

# item4

```
class node{
public:
    node(const Item& a,const string& b)
        :m_item(a),m_str(b){
            //...other
        }
    /*
    node(const Item& a,const string& b){
            m_item=a;
            m_str=b;
            //...other
        }
    */
private:
    Item m_item;
    string m_str;
}
```
* 未注释的构造函数比注释的构造函数可能性能更好.
* 对内置类型,如 `int` 手动初始化,因为c++不保证初始化它们.
* 面临跨编译单元初始化次序的时候,要使用local-static对象代替non-local-static对象.

全局变量会被默认初始化为0,local-static对象在调用的时候会保证被初始化.

# item5

当你写一个空的class:
```
class node{

};
```
* c++11会默认生成`构造`,`拷贝构造`,`拷贝赋值`,`移动构造`,`移动赋值`,`析构`六个函数,当然是在调用的时候.(move,移动相关的函数是c++11之后才有的)
* 编译器生成的析构函数是非虚.

c++11可以声明为`default`.

# item6

比如你设计的一个类不想让它被复制.那么书上的推荐做法是将`拷贝构造`和`拷贝赋值`的函数设置为`private`.

或者设计一个`unCopy`的基类,并继承.

然而在c++11,可以将其声明为`delete`.

```
class node{
public:
    node()=default;
    node(const node& other)=delete;
    node& operator=(const node& other)=delete;
}
```

# item7

为多态的基类的析构函数设置为 `virtual` ,防止`局部销毁`(基类没有释放).

如果不是这样的话,设置为 `non-virtual` 非虚.因为虚表会让对象体积变大.
在c++11中,有 `final` 关键字防止被类被派生或者函数被重写.

```
class base{
    virtual void show(){
    }
};

class AAA final:public base{

};
//AAA 不可派生
class BBB:public base{
    void show()override final{

    }
}
//BBB 可以派生,但是不可以重写 show
```


# item8

这一条讲的是析构函数不要抛出异常.

在c++11后,析构函数都是默认`noexcept(true)`,遇到异常就crash.

至于[`noexcept`在Stackoverflow上有相关的讨论](https://stackoverflow.com/questions/10787766/when-should-i-really-use-noexcept)
关于什么时候该使用`noexcept`

# item9

在构造函数和析构函数中不要调用虚函数.
因为会将对象视为`base class`类型.而不是`derived class`

例如:
```
class base{
public:
    base(){
        log();
        //不要调用
    }
    virtual void log()const=0;
    //接口
};
class node:public base{
public:
    node()=default;
    void log()const override {
        cout<<"node log"<<endl;
    }
};
```
这样是没法调用`node`的`log`的.

# item10

一个协议,使得可以完成 `a=b=c=10` 这样赋值.

# item11

* 实现自我赋值安全
* 推广到其他函数如果操作多个对象,其中有多个是同一个对象,保证行为正确

# item12

保证copy的时候会复制所有的成员,特别是子类.
推广到c++11的move的时候也一样.
