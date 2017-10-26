---
title: effective c++ 读书笔记 03
author: skadi
date: "2017-10-26 12:11"
tags:
  - cpp
---

继续看书,烦心事一串,只能写代码的时候能静心.

耳机一戴,另外一个世界.

### 实现

[item26:尽可能咽喉变量定义式的出现时间](#item26)

[item27:尽量少做转型动作](#item27)

[item28:避免返回handles指向对象内部成员](#item28)

[item29:为"异常安全"而努力是值得的](#item29)

[item30:透彻了解inlining的里里外外](#item30)

[item31:将文件间的编译依存关系降至最低](#item31)

### 继承与面向对象设计

[item32:确定你的public继承塑模出is-a关系](#item32)

[item33:避免遮掩继承而来的名称](#item33)

[item34:区分接口继承和实现继承](#item34)

[item35:考虑virtual函数以外的其他选择](#item35)

[item36:绝不重新定义继承而来的non-virtual函数](#item36)

[item37:绝不重新定义继承而来的缺省参数值](#item37)

[item38:通过符合塑模出has-a或者"根据某物实现出"](#item38)

[item39:明智而审慎的使用private继承](#item39)

[item40:明智而审慎的使用多重继承](#item40)

# item26

延后定义变量,防止出现多余的构造与析构的动作.比如:你定义一个控制流,

但是在控制流之前定义了一个`widget`,但是只有一个分支使用了它,

如果没有进入这个分支,那么需要额外承受`widget`的构造与析构.

但是循环的时候:
```
widget w;
for(const auto&i:widgetList){
    w=i;
    //...
}
```
定义在循环外,会有一个构造,n个复制,一个析构.

定义在循环内,有n个拷贝构造,n个析构.

这完全取决于成本了.需要看情况考虑.

# item27

尽量少使用cast.四种cast中`dynamic_cast`是在运行时决定的.这会浪费效率.

如果必须用cast,尽量自己封装而不是调用者使用cast.

尽量是c++风格的转换,这样明显而且明确.

`const_cast` `dynamic_cast` `static_cast` `reinterpret_cast`

# item28

避免返回可以修改对象内部的东西.比如:引用,指针,迭代器.这样可以增加封装性.

然而,并不能绝对的做到.

# item29

为"异常安全"努力,比如对`lock`的使用,防止死锁.使用`RAII`的`lock_guard`可以避免.

三种异常保证:
* 基本承诺 (异常抛出时,内部一致,然而外部调用不确定)
* 强烈保证 (要么成功,要么失败返回原状态)
* 不抛掷保证 (不会抛出异常)

# item30

了解`inline`,这只是一个对编译器的建议,并不是保证所有加`inline`修饰的函数都会被内联.

要自己权衡是否对某个函数进行`inline`,尽量不要对构造和析构进行`inline`.

`inline`会导致代码膨胀,选择要慎重.

# item31

讲文件的编译依赖降低.比如前置声明.

不过有讨论说:google推荐直接使用`include`,而不是前置声明.

防止修改一个class name而影响到headfile的声明.

头文件应该"完全且仅有声明式"

### 继承与面向对象设计

# item32

`public` 的继承表明 `base` 的一切都适用于 `derived`.

# item33

避免继承导致的名称问题.比如:
```
class base {
public:
    virtual void func() {
        cout << "base func" << endl;
    }
};
class derived : public base {
public:
    using base::func;
    /*
    void func()override {
        base::func();
    }
    */
    void func(int a) {
        cout << "derived " << a << endl;
    }
};
```
如果不是声明`using base::func`.或者注释里的转交方法,

那么`derived`的实例是无法调用`func()`的.只能调用`func(int)`

# item34

了解"接口实现"(c++中体现为纯虚函数)和"继承实现"(c++体现为虚函数)

有时候`base`class会有一个默认的实现.设置为非虚的.

让每一个继承者都有一份强制的默认的实现.

# item35

有时候这样做更好,比如:

`base`有一个虚函数为:`virtual void fly(){ /*...*/ }`,
有一个非虚的函数为:`void doFly(){ fly(); }`

每个继承类都有不同的 `fly`动作,

`NVI`的手法.

# item36

不重新定义继承来的非虚函数,这样会遮掩基类的这个函数

# item37

不重新定义继承来的有缺省参数的函数,而使用[#item35](#item35)的方法.

缺省参数(默认参数)是静态绑定的,而虚函数确是动态的.

# item38

复合,这是一个在实际设计中很难以直接描述的概念.如果非要举个例子:

货车 `has-a` 引擎,轮胎...

货车 `is-a`(此处语境为具现) 模版车, 可以`run()`

# item39

`private`继承的时候,编译器不会讲`derived`自动转换为`base`.

对接口(纯虚函数)的实现会被忽略掉.只有部分实现被继承.意味着是具现而来的.

一般来说:只有要求`对象最小化`才适用.

# item40

谨慎的使用多重继承. ~~多重继承是c++的特色,不爽不要玩~23333~~

这是一个很明显的问题,所以各种书籍都是推荐继承多个接口(内部只有纯虚函数).

不过有时候多重继承非常的适用.