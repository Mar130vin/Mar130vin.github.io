(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{281:function(t,a,s){"use strict";s.r(a);var n=s(13),e=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"js内存机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#js内存机制"}},[t._v("#")]),t._v(" JS内存机制")]),t._v(" "),a("p",[t._v("本标题中主要借鉴"),a("strong",[t._v("极客时间李兵浏览器工作原理与实践")])]),t._v(" "),a("p",[a("code",[t._v("JavaScript 就是动态语言，因为在声明变量之前并不需要确认其数据类型。")])]),t._v(" "),a("p",[a("code",[t._v("支持隐式类型转换的语言称为弱类型语言，不支持隐式类型转换的语言称为强类型语言")])]),t._v(" "),a("p",[t._v("在 JavaScript 的执行过程中， 主要有三种类型内存空间，分别是"),a("strong",[t._v("代码空间、栈空间")]),t._v("和"),a("strong",[t._v("堆空间")]),t._v("。如果你了解过Java中JVM虚拟机那这里的内容你将更容易掌握")]),t._v(" "),a("p",[t._v("什么是栈")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://static001.geekbang.org/resource/image/5e/05/5e2bb65019053abfd5e7710e41d1b405.png",alt:"img"}})]),t._v(" "),a("h3",{attrs:{id:"栈空间和堆空间"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#栈空间和堆空间"}},[t._v("#")]),t._v(" 栈空间和堆空间")]),t._v(" "),a("p",[t._v("栈中存放 基本数据类型  堆中存放引用数据类型(初学阶段可以这么理解)")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" b "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("fn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" obj "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'jack'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("age")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("18")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" arr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" obj1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" obj   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//此行代码意义为把obj中存储的地址值赋给obj1")]),t._v("\n")])])]),a("p",[t._v("变量 fn obj arr中其实存的是函数  数组   对象在堆中的地址 示例如下图")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://marvin130-blog.oss-cn-chengdu.aliyuncs.com/image-20220724110429369.png",alt:"image-20220724110429369"}})]),t._v(" "),a("p",[t._v("对象中包含数组与对象在内存中的表示")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" obj "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'杨孟帆'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("hobby")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("sport")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'basketball'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("study")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("property")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'laptop'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Knowledge'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[a("img",{attrs:{src:"https://marvin130-blog.oss-cn-chengdu.aliyuncs.com/image-20220724110356423.png",alt:"image-20220724110356423"}})]),t._v(" "),a("p",[a("strong",[t._v("当给变量赋新的值时会在栈中重新开辟一个新的空间，旧的值此时没有指向下一次垃圾回收时讲其回收")])]),t._v(" "),a("h2",{attrs:{id:"执行上下文与调用栈"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#执行上下文与调用栈"}},[t._v("#")]),t._v(" 执行上下文与调用栈")]),t._v(" "),a("h3",{attrs:{id:"执行上下文"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#执行上下文"}},[t._v("#")]),t._v(" "),a("strong",[t._v("执行上下文")])]),t._v(" "),a("blockquote",[a("p",[a("strong",[t._v("红宝书")]),t._v("：变量或函数的上下文决定了它们可以访问哪些数据，以及它们的行为，在浏览器中，全局上下文就是我们常说的 window 对象....每个函数调用都有自己的上下文。")])]),t._v(" "),a("p",[t._v("执行上下文的概念可以通过作用域的概念来理解，例如一个函数的作用域就是这个函数{}中的内容，那么上下文范围=函数{}(函数作用域)范围+函数本身")]),t._v(" "),a("h3",{attrs:{id:"调用栈"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#调用栈"}},[t._v("#")]),t._v(" "),a("strong",[t._v("调用栈")])]),t._v(" "),a("blockquote",[a("p",[t._v("极客时间 ：javaScript引擎会将执行上下文压入栈中，通常把这种用来管理执行上下文的栈称为执行上下文栈，又称调用栈。")])]),t._v(" "),a("p",[a("code",[t._v("下图中上下文中的变量环境与词法环境会在下一个主题 变量环境与变量提升中讲解")])]),t._v(" "),a("p",[t._v("示例代码：")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("c")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" b"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("c\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addAll")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("c")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" d "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\nresult "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v("  a"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("result"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("d\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addAll")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[a("strong",[t._v("第一步，创建全局上下文，并将其压入栈底")]),t._v("。如下图所示")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://static001.geekbang.org/resource/image/a5/1d/a5d7ec1f8f296412acc045835b85431d.png",alt:"img"}})]),t._v(" "),a("p",[a("strong",[t._v("第二步是调用addAll函数")]),t._v("。当调用该函数时，JavaScript引擎会编译该函数，并为其创建一个执行上下文，最后还将该函数的执行上下文压入栈中，如下图所示：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://static001.geekbang.org/resource/image/7d/52/7d6c4c45db4ef9b900678092e6c53652.png",alt:"img"}})]),t._v(" "),a("p",[a("strong",[t._v("第三步，当执行到add函数调用语句时，同样会为其创建执行上下文，并将其压入调用栈")]),t._v("，如下图所示：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://static001.geekbang.org/resource/image/cc/37/ccfe41d906040031a7df1e4f1bce5837.png",alt:"img"}})]),t._v(" "),a("p",[t._v("当add函数返回时，该函数的执行上下文就会从栈顶弹出，并将result的值设置为add函数的返回值，也就是9。如下图所示：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://static001.geekbang.org/resource/image/03/96/03ca801a5372f941bf17d6088fee0f96.png",alt:"img"}})]),t._v(" "),a("p",[t._v("紧接着addAll执行最后一个相加操作后并返回，addAll的执行上下文也会从栈顶部弹出，此时调用栈中就只剩下全局上下文了。最终如下图所示：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://static001.geekbang.org/resource/image/d0/7b/d0ac1d6e77735338fa97cc9a3f6c717b.png",alt:"img"}})]),t._v(" "),a("p",[t._v("至此，整个JavaScript流程执行结束了。")]),t._v(" "),a("p",[t._v("如何利用浏览器查看调用栈的信息")]),t._v(" "),a("p",[t._v("可以打开“开发者工具”，点击“Source”标签，选择JavaScript代码的页面，然后在第3行加上断点，并刷新页面。你可以看到执行到add函数时，执行流程就暂停了，这时可以通过右边“call stack”来查看当前的调用栈的情况，如下图：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://static001.geekbang.org/resource/image/c0/a2/c0d303a289a535b87a6c445ba7f34fa2.png",alt:"img"}})]),t._v(" "),a("p",[t._v("从图中可以看出，右边的“call stack”下面显示出来了函数的调用关系：栈的最底部是anonymous，也就是全局的函数入口；中间是addAll函数；顶部是add函数。这就清晰地反映了函数的调用关系，所以在分析复杂结构代码，或者检查Bug时，调用栈都是非常有用的。")]),t._v(" "),a("h2",{attrs:{id:"变量环境与变量提升"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#变量环境与变量提升"}},[t._v("#")]),t._v(" 变量环境与变量提升")]),t._v(" "),a("p",[t._v("介绍变量提升之前，我们先通过下面这段代码，来看看什么是JavaScript中的声明和赋值。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("var myname = '极客时间'\n")])])]),a("p",[t._v("这段代码你可以把它看成是两行代码组成的：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("var myname    //声明部分\nmyname = '极客时间'  //赋值部分\n")])])]),a("p",[a("img",{attrs:{src:"https://static001.geekbang.org/resource/image/ec/3c/ec882f2d9deec26ce168b409f274533c.png",alt:"img"}})]),t._v(" "),a("p",[t._v("上面是变量的声明和赋值，那接下来我们再来看看函数的声明和赋值，结合下面这段代码：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("function foo(){\n  console.log('foo')\n}\n\nvar bar = function(){\n  console.log('bar')\n}\n")])])]),a("p",[t._v("第一个函数foo是一个完整的函数声明，也就是说没有涉及到赋值操作；第二个函数是先声明变量bar，再把"),a("code",[t._v("function(){console.log('bar')}")]),t._v("赋值给bar。为了直观理解，你可以参考下图：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://static001.geekbang.org/resource/image/61/77/611c09ab995b9b608d9c0db193266777.png",alt:"img"}})]),t._v(" "),a("p",[a("strong",[t._v("所谓的变量提升，是指在JavaScript代码执行过程中，JavaScript引擎把变量的声明部分和函数的声明部分提升到代码开头的“行为”。变量被提升后，会给变量设置默认值，这个默认值就是我们熟悉的")]),t._v("。")]),t._v(" "),a("p",[a("strong",[t._v("站在执行上下文的角度来解决变量提升带来的问题")])]),t._v(" "),a("p",[t._v("你已经知道JavaScript引擎是通过变量环境实现函数级作用域的，那么ES6又是如何在函数级作用域的基础之上，实现对块级作用域的支持呢？你可以先看下面这段代码")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("function foo(){\n    var a = 1\n    let b = 2\n    {\n      let b = 3\n      var c = 4\n      let d = 5\n      console.log(a)\n      console.log(b)\n    }\n    console.log(b) \n    console.log(c)\n    console.log(d)\n}   \nfoo()\n")])])]),a("p",[t._v("当执行上面这段代码的时候，JavaScript引擎会先对其进行编译并创建执行上下文，然后再按照顺序执行代码，关于如何创建执行上下文我们在前面的文章中已经分析过了，但是现在的情况有点不一样，我们引入了let关键字，let关键字会创建块级作用域，那么let关键字是如何影响执行上下文的呢？")]),t._v(" "),a("p",[t._v("接下来我们就来一步步分析上面这段代码的执行流程。")]),t._v(" "),a("p",[a("strong",[t._v("第一步是编译并创建执行上下文")]),t._v("，下面是我画出来的执行上下文示意图，你可以参考下")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://static001.geekbang.org/resource/image/f9/67/f9f67f2f53437218baef9dc724bd4c67.png",alt:"img"}})]),t._v(" "),a("p",[t._v("通过上图，我们可以得出以下结论：")]),t._v(" "),a("ul",[a("li",[t._v("函数内部通过var声明的变量，在编译阶段全都被存放到变量环境里面了。")]),t._v(" "),a("li",[t._v("通过let声明的变量，在编译阶段会被存放到词法环境（Lexical Environment）中。")]),t._v(" "),a("li",[t._v("在函数的作用域内部，通过var声明的变量并没有被存放到词法环境中。")]),t._v(" "),a("li",[t._v("接下来，第二步继续执行代码，当执行到代码块里面时，变量环境中a的值已经被设置成了1，词法环境中b的值已经被设置成了2，")])]),t._v(" "),a("p",[t._v("这时候函数的执行上下文就如下图所示：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://static001.geekbang.org/resource/image/7e/fa/7e0f7bc362e0dea21d27dc5fb08d06fa.png",alt:"img"}})]),t._v(" "),a("p",[t._v("从图中可以看出，当进入函数的作用域块时，作用域块中通过let声明的变量，会被存放在词法环境的一个单独的区域中，这个区域中的变量并不影响作用域块外面的变量，比如在作用域外面声明了变量b，在该作用域块内部也声明了变量b，当执行到作用域内部时，它们都是独立的存在。")]),t._v(" "),a("p",[t._v("其实，在词法环境内部，维护了一个小型栈结构，栈底是函数最外层的变量，进入一个作用域块后，就会把该作用域块内部的变量压到栈顶；当作用域执行完成之后，该作用域的信息就会从栈顶弹出，这就是词法环境的结构。需要注意下，我这里所讲的变量是指通过let或者const声明的变量。")]),t._v(" "),a("p",[t._v("再接下来，当执行到作用域块中的console.log(a)这行代码时，就需要在词法环境和变量环境中查找变量a的值了，具体查找方式是：沿着词法环境的栈顶向下查询，如果在词法环境中的某个块中查找到了，就直接返回给JavaScript引擎，如果没有查找到，那么继续在变量环境中查找。")]),t._v(" "),a("p",[t._v("这样一个变量查找过程就完成了，你可以参考下图：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://static001.geekbang.org/resource/image/06/08/06c06a756632acb12aa97b3be57bb908.png",alt:"img"}})]),t._v(" "),a("p",[a("strong",[t._v("总结来说")]),t._v("：在调用栈中的执行上下文中，let 和 const声明的变量存储在词法环境中  而var声明的变量存储在变量环境中，所以let 和const并不会发生变量提升。")]),t._v(" "),a("h2",{attrs:{id:"闭包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#闭包"}},[t._v("#")]),t._v(" 闭包")]),t._v(" "),a("p",[t._v("这里你可以结合下面这段代码来理解什么是闭包：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" myName "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('" 极客时间 "')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" test1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" test2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" innerBar "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("getName")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("test1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" myName\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("setName")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("newName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            myName "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" newName\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" innerBar\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" bar "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nbar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('" 极客邦 "')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nbar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("首先我们看看当执行到 foo 函数内部的"),a("code",[t._v("return innerBar")]),t._v("这行代码时调用栈的情况，你可以参考下图")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://marvin130-blog.oss-cn-chengdu.aliyuncs.com/return%E8%B0%83%E7%94%A8%E6%A0%88.png",alt:"return调用栈"}})]),t._v(" "),a("p",[a("strong",[t._v("根据词法作用域的规则，内部函数 getName 和 setName 总是可以访问它们的外部函数 foo 中的变量")]),t._v("，所以当 innerBar 对象返回给全局变量 bar 时，虽然 foo 函数已经执行结束，但是 getName 和 setName 函数依然可以使用 foo 函数中的变量 myName 和 test1。所以当 foo 函数执行完成之后，其整个调用栈的状态如下图所示：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://marvin130-blog.oss-cn-chengdu.aliyuncs.com/return%E8%B0%83%E7%94%A8%E6%A0%88%E9%97%AD%E5%8C%85%E4%BA%A7%E7%94%9F%E8%BF%87%E7%A8%8B.png",alt:"return调用栈闭包产生过程"}})]),t._v(" "),a("p",[t._v("从上图可以看出，foo 函数执行完成之后，其执行上下文从栈顶弹出了，但是由于返回的 setName 和 getName 方法中使用了 foo 函数内部的变量 myName 和 test1，所以这两个变量依然保存在内存中。这像极了 setName 和 getName 方法背的一个专属背包，无论在哪里调用了 setName 和 getName 方法，它们都会背着这个 foo 函数的专属背包。")]),t._v(" "),a("p",[a("strong",[t._v("而这个背包其实是存在堆中的！！！栈中只是存了背包的地址")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://marvin130-blog.oss-cn-chengdu.aliyuncs.com/%E5%A0%86%E4%B8%AD%E9%97%AD%E5%8C%85.png",alt:"堆中闭包"}})]),t._v(" "),a("p",[t._v("之所以是"),a("strong",[t._v("专属")]),t._v("背包，是因为除了 setName 和 getName 函数之外，其他任何地方都是无法访问该背包的，我们就可以把这个背包称为 foo 函数的"),a("strong",[t._v("闭包")]),t._v("。")]),t._v(" "),a("p",[t._v("那这些闭包是如何使用的呢？当执行到 bar.setName 方法中的"),a("code",[t._v('myName = "极客邦"')]),t._v("这句代码时，JavaScript 引擎会沿着“当前执行上下文–>foo 函数闭包–> 全局执行上下文”的顺序来查找 myName 变量，你可以参考下面的调用栈状态图：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://marvin130-blog.oss-cn-chengdu.aliyuncs.com/%E6%89%A7%E8%A1%8C%E9%97%AD%E5%8C%85.png",alt:"执行闭包"}})]),t._v(" "),a("p",[t._v("从图中可以看出，setName 的执行上下文中没有 myName 变量，foo 函数的闭包中包含了变量 myName，所以调用 setName 时，会修改 foo 闭包中的 myName 变量的值。")]),t._v(" "),a("p",[t._v("同样的流程，当调用 bar.getName 的时候，所访问的变量 myName 也是位于 foo 函数闭包中的。")]),t._v(" "),a("p",[t._v("你也可以通过“开发者工具”来看看闭包的情况，打开 Chrome 的“开发者工具”，在 bar 函数任意地方打上断点，然后刷新页面，可以看到如下内容：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://marvin130-blog.oss-cn-chengdu.aliyuncs.com/%E6%8E%A7%E5%88%B6%E5%8F%B0closure.png",alt:"控制台closure"}})]),t._v(" "),a("h2",{attrs:{id:"原型链"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原型链"}},[t._v("#")]),t._v(" 原型链")]),t._v(" "),a("p",[t._v("学习原型的五条口诀，背过。")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("所有的引用类型（对象，数组，函数）， 都具有对象的特性， 可以自由扩展属性。")])]),t._v(" "),a("li",[a("p",[t._v("所有的（实例）对象， 都有一个__proto__属性，属性值是一个普通的实例对象（称为原型对象）。")])]),t._v(" "),a("li",[a("p",[t._v("所有的函数，都有一个prototype属性， 属性值也是一个普通的实例对象（称为原型对象）。默认指向一个空对象(没有自己设定的属性)(但是Object不满足)")])]),t._v(" "),a("li",[a("p",[t._v("所有对象的隐式原型（"),a("strong",[t._v("proto")]),t._v("）, 指向它的构造函数的显示原型（prototype）")])]),t._v(" "),a("li",[a("p",[t._v("当试图得到一个对象的某个属性时，如果这个对象本身没有这个属性，那么会去它的__proto__中寻找。")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Person")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" person1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" person2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n")])])]),a("p",[a("img",{attrs:{src:"https://marvin130-blog.oss-cn-chengdu.aliyuncs.com/image-20220712155018066.png",alt:"image-20220712155018066"}})])])]),t._v(" "),a("h3",{attrs:{id:"_1-一个例子看原型链"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-一个例子看原型链"}},[t._v("#")]),t._v(" 1.一个例子看原型链")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Star")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("uname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" age")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("uname "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" uname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("age "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" age"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Star")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("sing")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'我会唱歌'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" ldh "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Star")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'刘德华'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("18")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("上面Js代码在内存中的显示如下图")]),t._v(" "),a("p",[a("code",[t._v("其中地址并非实际地址，只是方便读者观察")]),t._v(" "),a("code",[t._v("--数字 表示运用了哪个原则")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://marvin130-blog.oss-cn-chengdu.aliyuncs.com/image-20220724110647792.png",alt:"image-20220724110647792"}})]),t._v(" "),a("p",[t._v("从上图可以看出构造函数即有隐式原型和显示原型，所有构造函数都不例外，因为所有构造函数也是Function的实例")]),t._v(" "),a("h3",{attrs:{id:"_2-function-与-object"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-function-与-object"}},[t._v("#")]),t._v(" 2.Function 与 Object")]),t._v(" "),a("p",[t._v("注意Function即有显示原型也有隐式原型。可以理解为Function构造函数创造Function实例。也可以理解为它即是构造函数又是实例。")]),t._v(" "),a("p",[t._v("而构造函数 Object 也是具有显示原型和隐式原型，但是构造函数Object的隐式原型指的是Function的原型对象")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Function"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//true")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//false")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//true")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//true 所有函数都是new Function() 出来的")]),t._v("\n")])])]),a("p",[a("img",{attrs:{src:"https://marvin130-blog.oss-cn-chengdu.aliyuncs.com/image-20220724110826167.png",alt:"image-20220724110826167"}})]),t._v(" "),a("h3",{attrs:{id:"_3-es6中的原型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-es6中的原型"}},[t._v("#")]),t._v(" 3.Es6中的原型")]),t._v(" "),a("p",[t._v("每个class都有显示原型prototype，而且也有隐式原型"),a("code",[t._v("__proto__")]),t._v("（class实际就是函数，函数就是存在堆内存中）")]),t._v(" "),a("p",[t._v("每个实例对象都有隐式原型"),a("code",[t._v("__proto__")])]),t._v(" "),a("p",[t._v("实例对象的"),a("code",[t._v("__proto__")]),t._v("指向对应class的prototype")]),t._v(" "),a("p",[t._v("子类的隐式原型"),a("code",[t._v("__proto__")]),t._v("指向父类")]),t._v(" "),a("p",[a("strong",[t._v("借鉴")]),t._v("作者：苹果咏链接：https://www.jianshu.com/p/29b5866c6d01")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//类的 prototype 属性和__proto__属性")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("A")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("B")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("A")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("B")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("A")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true   子类的__proto__属性，表示构造函数的继承，总是指向父类。")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("B")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("A")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true   子类prototype属性的__proto__属性，表示方法的继承，总是指向父类的prototype属性。")]),t._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//实例的 __proto__ 属性")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//子类实例的__proto__属性的__proto__属性，指向父类实例的__proto__属性。也就是说，子类的原型的原型，是父类的原型。")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" p1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("A")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" p2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("B")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\np1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("A")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true   实例对象p1的隐式原型等于函数A的显示原型")]),t._v("\np2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" p1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__ "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// false")]),t._v("\np2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" p1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__ "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n")])])]),a("p",[a("img",{attrs:{src:"https://marvin130-blog.oss-cn-chengdu.aliyuncs.com/image-20220724110847673.png",alt:"image-20220724110847673"}})]),t._v(" "),a("h3",{attrs:{id:"_4-instanceof"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-instanceof"}},[t._v("#")]),t._v(" 4.instanceof")]),t._v(" "),a("p",[t._v("用来检测构造函数的 "),a("code",[t._v("prototype")]),t._v(" 属性是否出现在某个实例对象的原型链（沿着'[[proto]]'）上 。读者可以通过instanceof来验证上述例子")]),t._v(" "),a("h2",{attrs:{id:"引用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#引用"}},[t._v("#")]),t._v(" 引用")]),t._v(" "),a("ol",[a("li",[t._v("极客时间-李兵-《浏览器工作原理与实践》")]),t._v(" "),a("li",[t._v("简书-苹果咏链接：https://www.jianshu.com/p/29b5866c6d01")])])])}),[],!1,null,null,null);a.default=e.exports}}]);