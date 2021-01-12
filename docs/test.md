---
id: test
title: 测试文档
sidebar_label: 测试
---

# 一维数组
## 数组名
```
int arr[5]={1,3,5,7,9};
```
数组名 **arr** 的值是一个**指针常量**，是数组第1个元素的地址。

```
int arr[5]={1,3,5,7,9};
printf("arr=%x\n", arr);
printf("&arr[0]= %x\n", &arr[0]);

/*
执行结果:
arr= 6ffb78
&arr[0]= 6ffb78
*/
```

数组名是指针常量所以不能作为左值
```
int arr[5]={1,3,5,7,9};

arr++;//非法语句，常量不能作为左值

/*
执行结果：
报错：表达式必须是可修改的左值
*/
```

在两种场合下数组名并不用指针常量表示：

1、当数组名作为sizeof操作符时返回的是整个数组的长度，而不是指向数组的指针的长度。

2、单目操作符&的操作数。取数组名地址产生的是指向数组的指针，而不是指向某个指针常量的指针。
```
int arr[5]={1,3,5,7,9};
int *p;
p=arr;

printf("sizeof(arr)= %d\n", sizeof(arr));
printf("sizeof(p)= %d\n", sizeof(p));

printf("数组长度： %d\n", sizeof(arr)/sizeof(arr[0]));//求数组的长度
/*
执行结果：
sizeof(arr)= 20//整个数组的大小
sizeof(p)= 4
数组长度：5
*/
```
## 下标引用

对于数组元素的访问**arr[i]** 和 **\*(arr+i)** 是完全相同的

**\*(arr+i)** 首先 **arr**指向整型的指针向后移动 **i** 个整数长度的位置，间接访问这个新位置。

**\*(arr+i)** 的括号不能省略 **\*(arr+i)** 和 **\*arr+i** 是完全不同的概念

```
int arr[5] = {1,3,5,7,9};

printf("arr[2]= %d\n", arr[2]);
printf("*(arr+2)= %d\n", *(arr + 2));
printf("*arr+2= %d\n", *arr + 2);

/*
执行结果：
arr[2] = 5
*(arr+2) = 5
*arr+2 = 3 //arr[0]+2 = 1+2 = 3
*/
```


这里再扩展一下

**2[arr]** 是什么意思呢？

```
int arr[5] = {1,3,5,7,9};

printf("2[arr] = %d\n", 2[arr]);
printf("arr[2] = %d\n", arr[2]);

/*
执行结果：
2[arr] = 5
arr[2] = 5
*/
```
我们可能会很惊讶：它竟然是合法的。我们稍微转换一下就会明白

**2[arr]--->\*(2+arr)--->\*(arr+2)--->arr[2]**

对于编译器来说这两种形式并无差别，不过为了程序的可读性我们不应该编写**2[arr]** 。

## 数组和指针

数组和指针并不是相等的

```
int arr[5];//编译器会给数组分配内存
int *p;//编译器不会分配内存
```

![数组](https://img-blog.csdnimg.cn/20191213184142646.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0RhcW9MZWU=,size_16,color_FFFFFF,t_70)

**arr**
&nbsp;  | &nbsp; | &nbsp;|&nbsp;|&nbsp;
---|---|---|--- |----
**b**
?|
---|---|---|--- |----

因此，表达式 **\*arr** 是完全合法的，但表达式 **\*b** 却是非法的，**\*b** 访问的是一个不确定的位置。


数组名作为函数参数，调用函数时**函数得到的是一份指针的拷贝**，即该函数不会修改指针实参本身，但可以修改它所指向的值。函数形参声明时也下两个声明是相等的：
```
int strlen(char string[]);//编译器也接受数组形式的函数参数，当前环境下指针和数组名相等
int strlen(char *string);//声明为指针更加准确

```
因此我们在传递数组时，函数需要知道数组长度我们必须把数组长度作为参数传递给函数。

```
int strfun(int *a, int len)
{
    printf("数组长度： %d\n",sizeof(a)/sizeof(a[0]));
    /*因为函数得到的是指针，所以结果为 1，要想知道数组的长度只能用传入的形参 len*/
    return 0;
}

int main()
{
    int arr[5] = {1,3,5,7,9};
    
    int n= sizeof(arr)/sizeof(arr[0]);
    printf("数组长度： %d\n", n);
    strfun(arr, n);
    return 0;
}

/*
执行结果：

数组长度： 5
数组长度： 1
*/
```
