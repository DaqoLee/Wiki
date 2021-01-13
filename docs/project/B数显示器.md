---
id: B数显示器
title: B数显示器
sidebar_label: B数显示器
---

## 简单说明

> 辉光管属于电子管的一种, 发光原理和霓虹灯差不多。通常在一个真空管里，放置一个金属丝网制成的阳极和 10 个阴极，形状为数字 0 到 9 ，某些还有一个或两个小数点。在管内充入惰性气体氖气和汞或氩，再通上高压后，每一个阴极可以发出红橙色光。由于混合气体的不同，光也有绿色、蓝色或者紫色。 辉光管的淘汰也有它的必然性，比如需要较高的驱动电压，玻璃容易破碎导致惰性气体泄漏，而且阴极长期放电会发黑(“阴极中毒”)导致辉光管的寿命不长。在 1973 年左右，LED 显示技术兴起，瞬间在各种电子设备中取代了辉光管。

「辉光管」价格贵，寿命短，而且使用也有风险。但其有普通的数码管没有的显示效果，也就是没有观赏性。所以就有人做了这种亚克力的来模拟辉光管的显示效果。虽然效果不如真的辉光管，但已经够用了。
![粉丝数显示器](https://github.com/DaqoLee/YingHuoLab/blob/master/Image/YingHuo2.22.png?raw=true)

有两大部分组成：「主控部分」和「显示部分」
![粉丝数显示器](https://github.com/DaqoLee/YingHuoLab/blob/master/Image/MindMap.png?raw=true)

主控部分选择的是 ESP32  
> ESP32 将天线开关、RF balun 、功率放大器、接收低噪声放大器、滤波器、电源管理模块等功能集于一体。ESP32 只需极少的外围器件，即可实现强大的处理性能、可靠的安全性能，和 Wi-Fi & 蓝牙功能. 

该项目就用到了 Wi-Fi 和蓝牙功能。 Wi-Fi 可以实现网上的天气，时间日期等数据的抓取，蓝牙功能集成了「经典蓝牙BT」和「低功耗蓝牙BLE」 
 > 经典蓝牙（BT)：泛指支持蓝牙协议在 4.0 以下的模块，一般用于数据量比较大的传输.

> 低功耗蓝牙模块（BLE)：是指支持蓝牙协议 4.0 或者以上的模块，也被称为BLE模块，最大的特点就是成本和功耗的降低，可以应用于实时性要求较高的产品当中，比如：智能家居类、消费类电子等。

 显示部分有「墨水屏」和「拟辉光管」
![粉丝数显示器](https://github.com/DaqoLee/YingHuoLab/blob/master/Image/YingHuo2.20.png?raw=true)


 其中主控部分和墨水屏是一体的，可以单独使用。墨水屏可以显示基本的天气、时钟、粉丝数以及贪吃蛇小游戏。
![墨水屏](https://github.com/DaqoLee/YingHuoLab/blob/master/Image/e-Paper.jpg?raw=true)

不过墨水屏有个通病就是很容易出现残影，图上贪吃蛇部分就可以看出，时间久了影响显示，一般断电几分钟后才能恢复。墨水屏刷新频率比较低，一些彩色墨水屏甚至不能局部刷新，不适合一些需要高刷的场景。

## B站数据和天气的数据
B站数据和天气的数据(这里用的是[心知天气](https://www.seniverse.com/)，GET 回来 JSON 数据然后解析。
![数据](https://github.com/DaqoLee/YingHuoLab/blob/master/Image/BiliBiliJson.png?raw=true)

![数据](https://github.com/DaqoLee/YingHuoLab/blob/master/Image/weatherJson.png?raw=true)



## 小程序

![小程序](https://github.com/DaqoLee/YingHuoLab/blob/master/Image/WeChat.png?raw=true)
小程序是用低功耗蓝牙和 ESP32 通信的，可以通过小程序修改显示模式，辉光管颜色，亮度等。

## B站演示视频
 <iframe height="500" width="800"  src="//player.bilibili.com/player.html?aid=754452104&bvid=BV1Gk4y1y7f7&cid=231379971&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>

## 参考
[基于ESP8266的B站粉丝显示器教程](https://blog.csdn.net/qq_39400113/article/details/105348187?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522159023413819724843309912%2522%252C%2522scm%2522%253A%252220140713.130102334.pc%255Fall.%2522%257D&request_id=159023413819724843309912&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~first_rank_v2~rank_v25-4-105348187.first_rank_v2_rank_v25&utm_term=esp8266+B%E7%AB%99%E7%B2%89%E4%B8%9D) 

[微信小程序串口通信](https://blog.csdn.net/INTKILOW/article/details/106012736)

[OLED 贪吃蛇教程](https://blog.csdn.net/weixin_42653531/article/details/94662081)

[WS2812 使用教程](https://www.pianshen.com/article/8536257837/)

[心知天气](https://www.seniverse.com/)
