> <font color=black size=1.5>微信小程序登陆关注重点</font>
* <font color=black size=1.5>获取临时登陆凭证： &nbsp; 调用 wx.login 获取临时登陆凭证 code</font>
* <font color=black size=1.5>2.发起网络请求： &nbsp; 将临时登陆凭证发送到开发者服务器</font>
* <font color=black size=1.5>3.换取session_key 和 openid：&nbsp; 当开发者服务器获取到了号码牌, 需要对其进行校验 (校验地址:https://api.weixin.qq.com/sns/jscode2session?appid=APPID&secret=SECRET&js_code=JSCODE&grant_type=authorization_code), 校验成功时返回的json, 包括session_key和openid, 还可能包含UnionID, session_key是会话密钥(开发者服务器应该对其保密), openid是用户唯一的标识(标识的是一个用户微信号), UnionID是用户在开放平台的唯一标识符(只有在满足UnionID的下发条件才能获取到)
</font>
* <font color=black size=1.5>4.生成一个会话标识： &nbsp; 得到openid和session_key后, 再根据openid生成一个唯一的"会话标识" , 然后再将它返回给小程序。这个会话标识应该存在有效期, 根据情况设定, 它的作用就相当于Session, 用于识别用户</font>
* <font color=black size=1.5>5. 在处理需要登陆的业务时, 小程序发起的请求需要带上session_token，后端校验:</font>
* <font color=red size=1.5>
    注:
        <div>关于使用wx.checkSession()来检验登陆态 (seeion_key有效即处于登陆态)</div>
        <div>wx.checkSession()是一个耗时的Api, seession_key是解密用的,但session_key是否过期, 对于一般业务来说, 似乎并没有影响, 所以不是必须要保证session_key有效,如上我使用session_token来自定义登陆态 (session_token有效即处于登陆态)</div>
        <div>对于要保证session_key有效才能执行的业务, 我才去调用wx.checkSession()检验session_key</div>
        <div>如果不是必须保证session_key有效, 就不要使用wx.ckeckSession检测session_key,一般使用自定义的登陆态即可(即自己保证session_token有效就行了)</div>
</font>

* <font color=black size=1.5>
    <div>
        <a>
            以上内容转载至：
            <div>
                &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;https://blog.csdn.net/lljxk2008/article/details/82286031
            </div>
        </a>
    </div>
    <div>
        <a>
            参考内容：
            <div>
                &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;https://developers.weixin.qq.com/ebook?action=get_post_info&docid=0008aeea9a8978ab0086a685851c0a(第四章)
            </div>
            <div>
                &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;https://blog.csdn.net/qq_41970025/article/details/90700677
            </div>
            <div>
                &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;https://www.cnblogs.com/yangchunlong/articles/8607933.html
            </div>
            <div>
                &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;https://www.cnblogs.com/jerryqi/p/11585005.html
            </div>
        </a>
    </div>
</font>

> <font color=black size=1.5>以下内容为对以上部分中的一些节点备注</font>
* <font color=black size=1.5>session_key：解密作用，可以参考<a>https://segmentfault.com/q/1010000010971236，https://blog.csdn.net/qq_41970025/article/details/90700677</a></font>
* <font color=black size=1.5>openid：用户唯一的标识，可以参考<a>https://cloud.tencent.com/developer/inventory/15275/article/1677389</a></font>
* <font color=black size=1.5>access_token：简单可以理解为前端请求头的存放的token，可以参考<a>https://www.cnblogs.com/jerryqi/p/11585005.html</a></font>


