(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{105:function(e,n,r){"use strict";r.d(n,"a",(function(){return s})),r.d(n,"b",(function(){return j}));var t=r(0),a=r.n(t);function c(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function b(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function p(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?b(Object(r),!0).forEach((function(n){c(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},c=Object.keys(e);for(t=0;t<c.length;t++)r=c[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)r=c[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=a.a.createContext({}),l=function(e){var n=a.a.useContext(i),r=n;return e&&(r="function"==typeof e?e(n):p(p({},n),e)),r},s=function(e){var n=l(e.components);return a.a.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},O=a.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,c=e.originalType,b=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),s=l(r),O=t,j=s["".concat(b,".").concat(O)]||s[O]||u[O]||c;return r?a.a.createElement(j,p(p({ref:n},i),{},{components:r})):a.a.createElement(j,p({ref:n},i))}));function j(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var c=r.length,b=new Array(c);b[0]=O;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p.mdxType="string"==typeof e?e:t,b[1]=p;for(var i=2;i<c;i++)b[i]=r[i];return a.a.createElement.apply(null,b)}return a.a.createElement.apply(null,r)}O.displayName="MDXCreateElement"},80:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return b})),r.d(n,"metadata",(function(){return p})),r.d(n,"toc",(function(){return o})),r.d(n,"default",(function(){return l}));var t=r(3),a=r(7),c=(r(0),r(105)),b={id:"test",title:"\u6d4b\u8bd5\u6587\u6863",sidebar_label:"\u6d4b\u8bd5"},p={unversionedId:"software/test",id:"software/test",isDocsHomePage:!1,title:"\u6d4b\u8bd5\u6587\u6863",description:"\u4e00\u7ef4\u6570\u7ec4",source:"@site/docs/software/test.md",slug:"/software/test",permalink:"/docs/software/test",version:"current",sidebar_label:"\u6d4b\u8bd5",sidebar:"docs",previous:{title:"DaqoLee's Wiki",permalink:"/docs/"},next:{title:"AltiumDesigner",permalink:"/docs/pcb/AltiumDesigner"}},o=[{value:"\u6570\u7ec4\u540d",id:"\u6570\u7ec4\u540d",children:[]},{value:"\u4e0b\u6807\u5f15\u7528",id:"\u4e0b\u6807\u5f15\u7528",children:[]},{value:"\u6570\u7ec4\u548c\u6307\u9488",id:"\u6570\u7ec4\u548c\u6307\u9488",children:[]}],i={toc:o};function l(e){var n=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(t.a)({},i,r,{components:n,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"\u4e00\u7ef4\u6570\u7ec4"},"\u4e00\u7ef4\u6570\u7ec4"),Object(c.b)("h2",{id:"\u6570\u7ec4\u540d"},"\u6570\u7ec4\u540d"),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{}),"int arr[5]={1,3,5,7,9};\n")),Object(c.b)("p",null,"\u6570\u7ec4\u540d ",Object(c.b)("strong",{parentName:"p"},"arr")," \u7684\u503c\u662f\u4e00\u4e2a",Object(c.b)("strong",{parentName:"p"},"\u6307\u9488\u5e38\u91cf"),"\uff0c\u662f\u6570\u7ec4\u7b2c1\u4e2a\u5143\u7d20\u7684\u5730\u5740\u3002"),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{}),'int arr[5]={1,3,5,7,9};\nprintf("arr=%x\\n", arr);\nprintf("&arr[0]= %x\\n", &arr[0]);\n\n/*\n\u6267\u884c\u7ed3\u679c:\narr= 6ffb78\n&arr[0]= 6ffb78\n*/\n')),Object(c.b)("p",null,"\u6570\u7ec4\u540d\u662f\u6307\u9488\u5e38\u91cf\u6240\u4ee5\u4e0d\u80fd\u4f5c\u4e3a\u5de6\u503c"),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{}),"int arr[5]={1,3,5,7,9};\n\narr++;//\u975e\u6cd5\u8bed\u53e5\uff0c\u5e38\u91cf\u4e0d\u80fd\u4f5c\u4e3a\u5de6\u503c\n\n/*\n\u6267\u884c\u7ed3\u679c\uff1a\n\u62a5\u9519\uff1a\u8868\u8fbe\u5f0f\u5fc5\u987b\u662f\u53ef\u4fee\u6539\u7684\u5de6\u503c\n*/\n")),Object(c.b)("p",null,"\u5728\u4e24\u79cd\u573a\u5408\u4e0b\u6570\u7ec4\u540d\u5e76\u4e0d\u7528\u6307\u9488\u5e38\u91cf\u8868\u793a\uff1a"),Object(c.b)("p",null,"1\u3001\u5f53\u6570\u7ec4\u540d\u4f5c\u4e3asizeof\u64cd\u4f5c\u7b26\u65f6\u8fd4\u56de\u7684\u662f\u6574\u4e2a\u6570\u7ec4\u7684\u957f\u5ea6\uff0c\u800c\u4e0d\u662f\u6307\u5411\u6570\u7ec4\u7684\u6307\u9488\u7684\u957f\u5ea6\u3002"),Object(c.b)("p",null,"2\u3001\u5355\u76ee\u64cd\u4f5c\u7b26&\u7684\u64cd\u4f5c\u6570\u3002\u53d6\u6570\u7ec4\u540d\u5730\u5740\u4ea7\u751f\u7684\u662f\u6307\u5411\u6570\u7ec4\u7684\u6307\u9488\uff0c\u800c\u4e0d\u662f\u6307\u5411\u67d0\u4e2a\u6307\u9488\u5e38\u91cf\u7684\u6307\u9488\u3002"),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{}),'int arr[5]={1,3,5,7,9};\nint *p;\np=arr;\n\nprintf("sizeof(arr)= %d\\n", sizeof(arr));\nprintf("sizeof(p)= %d\\n", sizeof(p));\n\nprintf("\u6570\u7ec4\u957f\u5ea6\uff1a %d\\n", sizeof(arr)/sizeof(arr[0]));//\u6c42\u6570\u7ec4\u7684\u957f\u5ea6\n/*\n\u6267\u884c\u7ed3\u679c\uff1a\nsizeof(arr)= 20//\u6574\u4e2a\u6570\u7ec4\u7684\u5927\u5c0f\nsizeof(p)= 4\n\u6570\u7ec4\u957f\u5ea6\uff1a5\n*/\n')),Object(c.b)("h2",{id:"\u4e0b\u6807\u5f15\u7528"},"\u4e0b\u6807\u5f15\u7528"),Object(c.b)("p",null,"\u5bf9\u4e8e\u6570\u7ec4\u5143\u7d20\u7684\u8bbf\u95ee",Object(c.b)("strong",{parentName:"p"},"arr","[i]")," \u548c ",Object(c.b)("strong",{parentName:"p"},"*","(arr+i)")," \u662f\u5b8c\u5168\u76f8\u540c\u7684"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"*","(arr+i)")," \u9996\u5148 ",Object(c.b)("strong",{parentName:"p"},"arr"),"\u6307\u5411\u6574\u578b\u7684\u6307\u9488\u5411\u540e\u79fb\u52a8 ",Object(c.b)("strong",{parentName:"p"},"i")," \u4e2a\u6574\u6570\u957f\u5ea6\u7684\u4f4d\u7f6e\uff0c\u95f4\u63a5\u8bbf\u95ee\u8fd9\u4e2a\u65b0\u4f4d\u7f6e\u3002"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"*","(arr+i)")," \u7684\u62ec\u53f7\u4e0d\u80fd\u7701\u7565 ",Object(c.b)("strong",{parentName:"p"},"*","(arr+i)")," \u548c ",Object(c.b)("strong",{parentName:"p"},"*","arr+i")," \u662f\u5b8c\u5168\u4e0d\u540c\u7684\u6982\u5ff5"),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{}),'int arr[5] = {1,3,5,7,9};\n\nprintf("arr[2]= %d\\n", arr[2]);\nprintf("*(arr+2)= %d\\n", *(arr + 2));\nprintf("*arr+2= %d\\n", *arr + 2);\n\n/*\n\u6267\u884c\u7ed3\u679c\uff1a\narr[2] = 5\n*(arr+2) = 5\n*arr+2 = 3 //arr[0]+2 = 1+2 = 3\n*/\n')),Object(c.b)("p",null,"\u8fd9\u91cc\u518d\u6269\u5c55\u4e00\u4e0b"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"2","[arr]")," \u662f\u4ec0\u4e48\u610f\u601d\u5462\uff1f"),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{}),'int arr[5] = {1,3,5,7,9};\n\nprintf("2[arr] = %d\\n", 2[arr]);\nprintf("arr[2] = %d\\n", arr[2]);\n\n/*\n\u6267\u884c\u7ed3\u679c\uff1a\n2[arr] = 5\narr[2] = 5\n*/\n')),Object(c.b)("p",null,"\u6211\u4eec\u53ef\u80fd\u4f1a\u5f88\u60ca\u8bb6\uff1a\u5b83\u7adf\u7136\u662f\u5408\u6cd5\u7684\u3002\u6211\u4eec\u7a0d\u5fae\u8f6c\u6362\u4e00\u4e0b\u5c31\u4f1a\u660e\u767d"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"2","[arr]","---\x3e","*","(2+arr)---\x3e","*","(arr+2)---\x3earr","[2]")),Object(c.b)("p",null,"\u5bf9\u4e8e\u7f16\u8bd1\u5668\u6765\u8bf4\u8fd9\u4e24\u79cd\u5f62\u5f0f\u5e76\u65e0\u5dee\u522b\uff0c\u4e0d\u8fc7\u4e3a\u4e86\u7a0b\u5e8f\u7684\u53ef\u8bfb\u6027\u6211\u4eec\u4e0d\u5e94\u8be5\u7f16\u5199",Object(c.b)("strong",{parentName:"p"},"2","[arr]")," \u3002"),Object(c.b)("h2",{id:"\u6570\u7ec4\u548c\u6307\u9488"},"\u6570\u7ec4\u548c\u6307\u9488"),Object(c.b)("p",null,"\u6570\u7ec4\u548c\u6307\u9488\u5e76\u4e0d\u662f\u76f8\u7b49\u7684"),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{}),"int arr[5];//\u7f16\u8bd1\u5668\u4f1a\u7ed9\u6570\u7ec4\u5206\u914d\u5185\u5b58\nint *p;//\u7f16\u8bd1\u5668\u4e0d\u4f1a\u5206\u914d\u5185\u5b58\n")),Object(c.b)("p",null,Object(c.b)("img",Object(t.a)({parentName:"p"},{src:"https://img-blog.csdnimg.cn/20191213184142646.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0RhcW9MZWU=,size_16,color_FFFFFF,t_70",alt:"\u6570\u7ec4"}))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"arr"),"\n","\xa0","  | ","\xa0"," | ","\xa0","|","\xa0","|","\xa0","\n---|---|---|--- |----\n",Object(c.b)("strong",{parentName:"p"},"b"),"\n?|\n---|---|---|--- |----"),Object(c.b)("p",null,"\u56e0\u6b64\uff0c\u8868\u8fbe\u5f0f ",Object(c.b)("strong",{parentName:"p"},"*","arr")," \u662f\u5b8c\u5168\u5408\u6cd5\u7684\uff0c\u4f46\u8868\u8fbe\u5f0f ",Object(c.b)("strong",{parentName:"p"},"*","b")," \u5374\u662f\u975e\u6cd5\u7684\uff0c",Object(c.b)("strong",{parentName:"p"},"*","b")," \u8bbf\u95ee\u7684\u662f\u4e00\u4e2a\u4e0d\u786e\u5b9a\u7684\u4f4d\u7f6e\u3002"),Object(c.b)("p",null,"\u6570\u7ec4\u540d\u4f5c\u4e3a\u51fd\u6570\u53c2\u6570\uff0c\u8c03\u7528\u51fd\u6570\u65f6",Object(c.b)("strong",{parentName:"p"},"\u51fd\u6570\u5f97\u5230\u7684\u662f\u4e00\u4efd\u6307\u9488\u7684\u62f7\u8d1d"),"\uff0c\u5373\u8be5\u51fd\u6570\u4e0d\u4f1a\u4fee\u6539\u6307\u9488\u5b9e\u53c2\u672c\u8eab\uff0c\u4f46\u53ef\u4ee5\u4fee\u6539\u5b83\u6240\u6307\u5411\u7684\u503c\u3002\u51fd\u6570\u5f62\u53c2\u58f0\u660e\u65f6\u4e5f\u4e0b\u4e24\u4e2a\u58f0\u660e\u662f\u76f8\u7b49\u7684\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{}),"int strlen(char string[]);//\u7f16\u8bd1\u5668\u4e5f\u63a5\u53d7\u6570\u7ec4\u5f62\u5f0f\u7684\u51fd\u6570\u53c2\u6570\uff0c\u5f53\u524d\u73af\u5883\u4e0b\u6307\u9488\u548c\u6570\u7ec4\u540d\u76f8\u7b49\nint strlen(char *string);//\u58f0\u660e\u4e3a\u6307\u9488\u66f4\u52a0\u51c6\u786e\n\n")),Object(c.b)("p",null,"\u56e0\u6b64\u6211\u4eec\u5728\u4f20\u9012\u6570\u7ec4\u65f6\uff0c\u51fd\u6570\u9700\u8981\u77e5\u9053\u6570\u7ec4\u957f\u5ea6\u6211\u4eec\u5fc5\u987b\u628a\u6570\u7ec4\u957f\u5ea6\u4f5c\u4e3a\u53c2\u6570\u4f20\u9012\u7ed9\u51fd\u6570\u3002"),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{}),'int strfun(int *a, int len)\n{\n    printf("\u6570\u7ec4\u957f\u5ea6\uff1a %d\\n",sizeof(a)/sizeof(a[0]));\n    /*\u56e0\u4e3a\u51fd\u6570\u5f97\u5230\u7684\u662f\u6307\u9488\uff0c\u6240\u4ee5\u7ed3\u679c\u4e3a 1\uff0c\u8981\u60f3\u77e5\u9053\u6570\u7ec4\u7684\u957f\u5ea6\u53ea\u80fd\u7528\u4f20\u5165\u7684\u5f62\u53c2 len*/\n    return 0;\n}\n\nint main()\n{\n    int arr[5] = {1,3,5,7,9};\n    \n    int n= sizeof(arr)/sizeof(arr[0]);\n    printf("\u6570\u7ec4\u957f\u5ea6\uff1a %d\\n", n);\n    strfun(arr, n);\n    return 0;\n}\n\n/*\n\u6267\u884c\u7ed3\u679c\uff1a\n\n\u6570\u7ec4\u957f\u5ea6\uff1a 5\n\u6570\u7ec4\u957f\u5ea6\uff1a 1\n*/\n')))}l.isMDXComponent=!0}}]);