// (function() {
//     var regex = /hello1/
//     console.log(regex.test('hello12313'))
// })()

// (function() {   // 横向匹配
//     var regex = /ab{2,5}c/g // 匹配第一个字符是 "a", 接下来2-5个字符 "b",最后一个字符是 "c"
//     var string = "abcabbcabbbcabbbbcabbbbbccabbbbbbccc"
//     console.log(string.match(regex))
// })();

// (function() {   // 纵向匹配
//     var regex = /a[123]b/g // 匹配不是某个确定的字符，可以有多种可能，如[abc],匹配 "a" "b" "c" 任一字符
//     var string = "a0ba1ba2bb2b"
//     console.log(string.match(regex))
// })();

// (function() {       // 范围表示法
//     // var regex = /[123456abcdefGHIJKLM]/gi    // 等同于[1-6-a-f-G-M]/gi
//     // var regex = /[1-6-a-f-G-M]/gi            // 等同于/[1-6-a-f-G-M]/gi 
//     // var regex = /[^1-6a-fG-M]/gi             // 最简
//     var regex = /\-[a-z]/gi                     // \& 反斜杠转译特殊字符
//     var string = "-O0ba1ba2bb2bhmG0"
//     console.log(string.match(regex))
// })();

// (function() {    // 反查
//     var rege = /[^abc]/g
//     var string = 'abcdefg';
//     console.log(string.match(rege))
// })();

// (function() {       // 简写形式
//     var regex = /\d/g
//     var string = '123456'
//     console.log(regex.test(string))
//     console.log(string.match(regex))
// })();

// (function() {    //量词
//     // var regex = /ab{1,5}c/g
//     // var regex = /ab{1,5}c{0,1}/g                    // {0, 1} 等价于?
//     // var regex = /ab{1,5}c?/g                        // ? 等价于{0, 1}
//     //  var regex = /ab{1,5}c+/g                       // + 等价于{1,}
//     // var regex = /ab{1,5}c*/g                        // * 等价于{0,}
//     var string = "ab abbc abbbc abbbbc abbbbbcc abbbbbbccc"
//     console.log(string.match(regex))
// })();

// (function() { // 贪婪匹配
//     var regex = /\d{2,5}?/g             // 虽然2到5次都行，当2个就够的时候，就不要在往下尝试了
//     var string = '123123412345123456'
//     console.log(string.match(regex))
// })();

// (function() {
//     var regex = /#([0-9a-fA-F]{3,6})/g
//     var string = '#ffbbad #Fc01DF #FFF #ffE'
//     console.log(string.match(regex))
// })();

// (function() {
//     var regex = /^(0?[0-9]|1[0-9]|[2][0-3]):(0?[0-9]|[1-5][0-9])$/          // 时间
//     console.log(regex.test("23:59"))
//     var regexDate = /^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/
//     console.log(regexDate.test('2017-07-10'))
// })();

// (function() {
//     var regex = /class=".*"/
//     var string = '<div class="main" id="container" ></div>'
//     console.log(string.match(regex)[0]);
// })();

// (function() {   //(?=p) p是一子模式，即p前面的位置
//     var regex = /(?=l)/g
//     var res = 'hello'.replace(regex, '#')
//     console.log(res)
// })();

// (function() {   //(?!p) 和 (?=p)相反
//     var regex = /(?!l)/g
//     var res = 'hello'.replace(regex, '#')
//     console.log(res)
// })();

// (function() {       // 数字的千位分隔符表示法
//     // var regex = /(^\d{3})/g              // 截取前面三位
//     // var regex = /(\d{3}$)/g              // 截取后面三位
//     // var regex = /(?=\d{3}$)/g            // 只取后面一次
//     // var regex = /(?=(\d{3})+$)/g         // 没有余数会把开头位置也替换了
//     var regex = /(?!^)(?=(\d{3})+$)/g       // 排除开头位置
//     console.log(regex)
//     var string = '12345678900'
//     console.log(string.replace(regex, ','))
// })();

// (function(num) {    // 数字的千位分隔符表示法(构造函数创建正则)
//     let regex = new RegExp(`(?!^)(?=(\\d{${num}})+$)`, "g");
//     var string = '123456789000'
// 	console.log(string.replace(regex, ','), regex)
// })(3);

// (function() { // \b \B
//     // var regex = new RegExp(`\\d`,"g")
//     // var string = '123'
//     // console.log(regex, regex.test(string))
//     var regexB = /(\B)/g
//     var regexb = /(\b)/g
//     var string = '12345678123456789'
//     console.log(string.replace(regexB, '#'), string.replace(regexb, '*'))
// })();

// (function(){
//     var regexb = /(\b)/g
//     var regexB = /\B/g
//     var string1 = '12345612'
//     console.log(string1.replace(regexb, '#'), string1.replace(regexB, '#'))

//     // var regex = /(?=(\d{3}))/g
//     // var regex = /(?=(\d{3})+$)/g
//     // var string2 = '12345600'
//     // console.log(string2.replace(regex, ','))
//     // var regex3 = /(?!^)(?=(\d{3})+$)/g
//     // var string3 = '123456001'
//     // console.log(string3.replace(regex3, ',')) 12Y345Y612
//     var _regexb1 = /\B(?=(\d{3})+\b)/g
//     console.log(string1.replace(_regexb1, 'Y'))
// })();

// (function() {       // 密码验证
//     // var regex = /(?=.*[0-9])(?=.*[a-z])^[0-9A-Za-z]{6,12}$/g
//     var regex = /(?=a)/g
//     var password = 'a25525sd'
//     console.log(regex.test(password))
// })();


// 第三章 分组和分支结构
// (function() {
//     var regex = /(ab)+/g
//     var string = "ababa abbb ababab"
//     console.log(string.match(regex))

//     var regex_t = /^I love JaveScript|Regular Expression$/g
//     var string_t = 'I love JaveScript'
//     console.log(string_t.match(regex_t))
// })();

// (function() {
//     var regex = /\d{4}-\d{2}-\d{2}/
//     var regexDate = /(\d{4})-(\d{2})-(\d{2})/
//     var string = '2017-06-12'
//     console.log(regex.test(string))
//     console.log(string.match(regex))
//     // regex.test(string)   // 不是分组的情况，构造函数的全局属性$1至$9不生效
//     regexDate.test(string)
//     console.log(RegExp.$1, '----', RegExp.$2, '-----', RegExp.$3)
// })();

// (function() {       // 替换
//     var regex  = /(\d{4})-(\d{2})-(\d{2})/;
//     var string = '2017-06-12';
//     // var result = string.replace(regex, '$2/$3/$1') 
//     // var result= string.replace(regex, ()=>{
//     //     return RegExp.$2 + "/" + RegExp.$3 + "/" + RegExp.$1
//     // })
//     var result= string.replace(regex, (match, year, month, day)=>{
//         return month + "/" + day + "/" + year
//     })
//     // 三个 result等价
//     console.log(result)
// })();

// (function() {       // 反向引用
//     // var regex   = /\d{4}(-|\/|\.)\d{2}(-|\/|\.)\d{2}/;
//     var string1 = '2017-06-12';
//     var string2 = '2017/06/12'
//     var string3 = '2017.06.12'
//     var string4 = '2017-06/12'
//     // console.log(regex.test(string1), regex.test(string2), regex.test(string3), regex.test(string4))
//     var regex   = /\d{4}(-|\/|\.)\d{2}\1\d{2}/;
//     console.log(regex.test(string1), regex.test(string2), regex.test(string3), regex.test(string4))

//     var regex1 = /^((\d)(\d(\d)))\1\2\3\4$/
//     var num = '1231231233'
//     console.log(num.match(regex1)[0])

//     var regex_10 = /(1)(2)(3)(4)(5)(6)(7)(8)(9)(#) \10+/
//     var _10 = "123456789# ######"
//     console.log(regex_10.test(_10))

//     var regex_ = /(\d)+/
//     var string_ = '12345'
//     console.log(string_.match(regex_)[0])
// })();

// (function() {
//     var regex = /(?:abc)+/g;
//     var string = "abcaba abcabbc ababab"
//     console.log(string.match(regex))
// })();

// (function() {
//     function trim (str) {
//         // return str.replace(/^\s*(.*?)$/g, "$1")
//         return str.replace(/^\s+|\s+$/g, '')
//     }
//     console.log(trim(' footer 1'))
// })();
