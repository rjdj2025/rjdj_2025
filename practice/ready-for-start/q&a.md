# Failed to find a valid digest in the 'integrity' attribute for resource 'https://cdn.bootcdn.net/ajax/libs/twitter-bootstrap/5.2.3/css/bootstrap.min.css' with computed SHA-384 integrity 'rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65'. The resource has been blocked.

这类的问题,需要了解多少
不只是把问题解决,而是搞清楚原理
这个是属于web安全领域的,子资源完整性(SRI)是允许浏览器检查其获得的资源(例如从CDN获取的)是否被篡改的一项安全特性
在任何 <script> 或 <link> 元素的 integrity 属性值中，指定你要告诉浏览器所获取的资源（或文件）的 base64 编码的加密哈希值。
生成SRI哈希
使用base64编码sha384算法计算出摘要后的integrity值
说人话就是把integrity重新计算一下,使用工具https://www.srihash.org/
这样的话岂不是官方文档更新后,每次都要更新,这个方法仅供练习

