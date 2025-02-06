# js数据类型
原始数据类型 数字、字符串、布尔、null、undefined
引用数据类型 数组、对象、函数

# 深拷贝 浅拷贝
对象的拷贝，分为浅拷贝和深拷贝
浅拷贝复制的是其引用，会引发原数据改变
常用方法： 展开运算符...、 Object.assign、 array.prototype.sclice

深拷贝，递归复制对象的所有层级，创建全新的对象和嵌套对象
新旧对象完全独立，互不影响
常用方法 JSON.parse(JSON.stringify())

# 内置对象，以及内容和对象
## 分类
1、值属性
这些全局属性返回一个简单值，这些值没有自己的属性和方法

2、函数属性
全局函数可以直接调用，不需要在调用时指定所属对象，执行结束后会将结果直接返回给调用者

3、基本对象
基本对象是定义或使用其他对象的基础
Object
function
boolean
symbol

4、错误对象
错误对象是一个特殊的基本对象。他们拥有error类型，同时也有多种具体的错误类型
error

5、数字和日期对象
用来表示数字、日期和执行数学计算的对象
number
bigint
math
date

6、字符串
这些对象表示字符串，并支持操作字符串
string
regexp

7、可索引的集合对象
这些对象表示按照索引值来排序的数据集合，包括数组和类型数组，以及类数组结构的对象
array
int8array
uint8array
...
8、使用键的集合对象
这些集合对象使用时会用到键，包括可迭代的map和set,支持按照插入顺序来迭代元素
map
set
weakmap
weakset

9、结构化数据
这些对象用来表示和操作结构化的缓冲区数据，或使用JSON（javascript object notation）编码的数据
arraybuffer
atomics
dataview
JSON

10、内存管理对象
这些对象会和垃圾回收机制产生交互
weakref

11、控制抽象对象
控制抽象代码可以帮助构造代码，尤其是异步代码
iterator
promise
asyncfunction

12、反射
reflect
proxy

13、国际化
intl