function browserRedirect() {
        var sUserAgent = navigator.userAgent.toLowerCase();
        var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
        var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
//      var bIsMidp = sUserAgent.match(/midp/me) == "midp";
//      var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/me) == "rv:1.2.3.4";
        var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
        var bIsAndroid = sUserAgent.match(/android/i) == "android";
        var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
        var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
        if (!(bIsIpad || bIsIphoneOs   || bIsUc || bIsAndroid || bIsCE || bIsWM) ){
                //电脑端
                //加载css
                var linkNode = document.createElement("link");
                linkNode.setAttribute("rel","stylesheet");
                linkNode.setAttribute("type","text/css");
                linkNode.setAttribute("href","../css/home.css");
                document.head.appendChild(linkNode);
                
                 //加载js
                var scriptNode = document.createElement("script");
                scriptNode.setAttribute("type", "text/javascript");
                scriptNode.setAttribute("src", "../js/fontflex.js");
                document.head.appendChild(scriptNode);
                var scriptNode = document.createElement("script");
                scriptNode.setAttribute("type", "text/javascript");
                scriptNode.setAttribute("src", "http://cdnjs.cloudflare.com/ajax/libs/less.js/3.11.1/less.min.js");
                document.head.appendChild(scriptNode);
                  console.log("+++++++pc+++++++")
        }else{
                //手机端
                //加载css
                var oMeta = document.createElement('meta');
                oMeta.name = 'viewport';
                oMeta.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no';
                document.getElementsByTagName('head')[0].appendChild(oMeta);
//              var linkNode = document.createElement("link");
//              linkNode.setAttribute("rel","stylesheet");
//              linkNode.setAttribute("type","text/css");
//              linkNode.setAttribute("href","../css/home-mobile.css");
//              document.head.appendChild(linkNode);
                var linkNode = document.createElement("link");
                linkNode.setAttribute("rel","stylesheet");
                linkNode.setAttribute("type","text/less");
                linkNode.setAttribute("href","../css/home-mobile.less");
                document.head.appendChild(linkNode);
                
                 //加载js
                var scriptNode = document.createElement("script");
                scriptNode.setAttribute("type", "text/javascript");
                scriptNode.setAttribute("src", "../js/fontflex.js");
                document.head.appendChild(scriptNode);
                var scriptNode = document.createElement("script");
                scriptNode.setAttribute("type", "text/javascript");
                scriptNode.setAttribute("src", "http://cdnjs.cloudflare.com/ajax/libs/less.js/3.11.1/less.min.js");
                document.head.appendChild(scriptNode);
                console.log("+++++++yd+++++++")
        }
}

browserRedirect();//调用判断当前访问页面是手机端还是移动端