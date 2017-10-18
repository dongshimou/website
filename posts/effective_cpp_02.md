---
title: effective c++ 读书笔记 02
author: skadi
date: "2017-10-17 23:30"
tags:
  - 读书笔记
  - cpp
---

今天又读了一个章节多.`资源管理`和`设计与声明`

资源管理感觉基本就是要求申请资源和释放资源要成对出现.
举了一些方法来实现这种做法.
我现在使用`impl`的方式来封装资源.

例如:
```
class widget{
private:
    struct Private;
    Private* impl;
    // .hpp 声明Private指针
}

struct widget::Private{
    string name;
    //其他的成员
    // .cpp 实现
}
```

基本做到了这些.

而设计与声明,有[item23](#item23)没做到.为啥要使用c的风格,
即使用gobal函数去替换掉member函数.

还有[item24](#item24)没有做到,因为没考虑到过这个.

[item25](#item25)是使用impl模式,但是并没有去特别实现一个swap.
好像我暂时还没遇到过需要swap的情况...~~大概是我忘记了.~~

参数传`const&`做到了,不返回引用,成员变量为private等等这些都做到了.

### 资源管理

[item13:以对象管理资源](#item13)

[item14:在资源管理类中小心copying行为](#item14)

[item15:在资源管理类中提供对原始资源的访问](#item15)

[item16:成对使用new和delete是要采取相同的形式](#item16)

[item17:以独立语句讲newed对象置入智能指针](#item17)

### 设计与声明

[item18:让接口容易被正确使用,不易被误用](#item18)

[item19:设计class犹如设计type](#item19)

[item20:宁以pass-by-reference-to-const替换pass-by-value](#item20)

[item21:必须返回对象时,别妄想返回其reference](#item21)

[item22:讲成员变量声明为private](#item22)

[item23:宁以non-member,non-friend替换member函数](#item23)

[item24:若所有参数皆需类型转换,请为此采用non-member函数](#item24)

[item25:考虑写出一个不抛异常的swap函数](#item25)

# item13

使用RAII对象,保证资源的正确获取和释放.c++11的常见是 `unique_ptr` 和`shared_ptr`.

我还经常这么用:
```
struct widget::Private{
    window win;
    //...
};
```
然后使用 `&impl->win` 来传这个window参数.

# item14

资源管理类要小心复制行为,一般都建议`delete`复制行为,只复制其资源的引用计数.

不过所管理的资源的复制行为可以决定RAII对象的复制行为

# item15

资源管理类要提供对原始资源的访问,因为要去兼容一些API或者需要进行一些特别的
行为

是否实现一个隐式的转换函数去访问原始资源,这个需要看情况去决定.

实现这个转换,使得使用起来更加方便,但是可能会出现一些安全问题.

# item16

`new`和`delete`需要使用同样的方式, 如果是`new[]` 那么需要 `delete[]`

`new[]`然后`delete`,虽然原始类型不会有问题,但是自定义的class就可能会出问题.

还有就是尽量不要使用类似的`typedef`:
```
typedef std::string AddressLines[4];
//...
auto pal=new AddressLines;

delete[] pal;
//而不是delete pal
```

# item17

使用单独的语句来讲对象置入智能指针.书中举了一个编译器优化的问题.
```
processWidget(std::tr1::shared_ptr<Widget>(new Widget),priority());
```
书上说可能由于编译器优化,执行顺序变成了

* new Widget
* priority()
* tr1::shared_ptr

然而c++11的`shared_ptr`只能使用`std::make_shared<Widget>()`返回一个`shared_ptr`,所以...这条就不存在问题了.

# item18

让接口更容易使用,不易误用.也就是说要求更好的设计class和function.

"促进正确使用",也就是尽量保证设计出来的接口与使用者习惯保持一致,
或者与内置类型保持一致的行为.

"防止误用",也就是说用一些方法去阻止使用者的不良好的调用.

书上举了`month`的例子,使用`month::Jan()`防止调用api的时候的`int`转换问题

如`date(1993,2,10);`不同的地区习惯不一样.设计为
`date(year(1993),month::Feb(),day(10));`

明确了年月日,这样如果填入`date(1993,10,2)`会有编译器的提示.

# item19

设计`class`犹如设计`type`.这个可讨论的范围就很大了.
而且这个需要工程经验的积累.并不是一下就能熟练的.

* 新类型的对象应该如何被创建和销毁
* 对象的初始化和复制应该有什么差别
* 新类型的对象如果按值传递意味着什么
* 什么是新类型的合法值
* 新类型是否需要配合某个继承图系
* 新类型需要什么养的转换
* 什么样的操作符和函数对此类型而言是合理的
* 什么样的函数应该被`delete`
* 谁会使用这个类型的成员
* 什么是新类型的"未声明接口"
* 新类型是否需要转换成一个模版

# item20

以const引用的方式代替传值.这个非常好理解.
因为传值的话,会生成原始参数的拷贝,并使用这个拷贝.

这会多产生一次这个类拷贝构造和析构.如果是派生类的话,会更多.
而且,这个类的成员如果是庞大的类的话,那么可以想象是要花费多少
额外的消耗.

还可以防止传递一个基类指针的时候,把派生类的属性切割了.

所以我们选择传引用,但是为了保证不被修改,所以需要`const`修饰.

不过内置类型,如`int``double`之类的就不必了.还有stl的迭代器和`functor`

# item21

不要返回临时对象(local stack)的引用或者指针,因为这个对象在离开这个作用域的时候已经被销毁了.

这是一个未定义行为,因为你的对象已经不见了.也不要返回引用或者指针指向一个(local static)对象而这个对象可能同时有多个.

# item22

成员变量为`private`,使用请使用`function`去获取,保持接口的一致性,因为不知道什么时候这个类就改变了,如果直接调用成员变量可能导致各种后续问题.

# item23

然而这一条,我并没有做到,感觉 `non-member`function更加的偏向C.

比较一下这两个函数:
```
window* createWindow(window* w,int width,int height);
//non-member
window* window::createWindow(int width,int height);
//member
```
我在`Webkit`浏览器内核经常看到类是的`non-member`函数,
貌似是为了导出c的api

# item24

如果函数所有的参数都需要类型转换,使用`non-member`的函数,
这个非常好理解,就是为了防止出错.
用面向对象的方式使用C++,需要注意到这一点.
书上举了一个例子:
```
class Rational{
public:
    const Rational operator*(const Rational& rhs)const;
    //...
};

auto r1=Rational(1)*Rational(2);
//正确
auto r2=Rational(1)*2;
//正确
auto r3=2*Rational(1);
//错误
```

r2的时候做了一个隐式转换,然而r3却并不能.

这个时候可以声明一个friend的重载:
```
friend const node operator*(const node&lhs,const node&rhs);
```
然而书上建议不使用friend,而在class外声明一个`non-member`的重载:
```
const node operator*(const node&lhs,const node&rhs);
```

# item25

考虑写一个不抛出异常的`swap`.stl的swap会进行三次复制.如果采用`impl`的
方法则只需要交换其`impl`指针的地址就行了.

写了一个`member`的swap的时候,也提供一个`non-member`的swap来调用前者,