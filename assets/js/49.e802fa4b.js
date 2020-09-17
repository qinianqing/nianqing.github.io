(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{837:function(t,s,a){"use strict";a.r(s);var n=a(41),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"docker-compose-部署项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose-部署项目"}},[t._v("#")]),t._v(" docker-compose 部署项目")]),t._v(" "),a("h2",{attrs:{id:"说在前面"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#说在前面"}},[t._v("#")]),t._v(" 说在前面")]),t._v(" "),a("p",[t._v("我们都知道，docker 可以实现很简便的部署环境。现在我们有一个前后端分离的项目，前端基于 Vue 开发、利用 Webpakc 打包为 dist 文件夹。后端则是一个 Node.js 服务，提供 API 接口，前端和后端是分离的。所以我们肯定是前端项目一个 container,后台项目也是一个 container。那么如果是在生产环境，就会产生跨域问题。前端的请求要反向代理到后台。大家肯定首先想到的就是使用"),a("code",[t._v("Nginx")]),t._v("设置"),a("code",[t._v("proxy_pass")]),t._v("。是的没有错。那么我们有了这些想法。我们如何通过"),a("code",[t._v("docker-compose")]),t._v("来实现呢？")]),t._v(" "),a("h2",{attrs:{id:"开始动手"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开始动手"}},[t._v("#")]),t._v(" 开始动手")]),t._v(" "),a("p",[t._v("其实我也是才开始了解 docker 的。所以有很多不明白的地方，例如在 docker 里面，是通过 image 生成一个 container,那么这个 container，就可以当作是一个独立的系统，这个系统也就有自己独立的端口。那么就像我们刚刚那样的需求，假设我们的前端在"),a("code",[t._v("container1")]),t._v("里面暴露 80 端口，同时映射到宿主机的 80 端口，后端在"),a("code",[t._v("container2")]),t._v("里面暴露 3000 端口，同时映射到宿主机的 3000 端口。那我们反向代理请求的时候，是通过宿主机来反向代理呢，还是通过 container 来实现呢？我在网上查阅并学习了很多其他大佬的文章，还有官网的文档。发现直接通过 container 就可以实现这种需求。为什么呢？因为 docker-compose，会将所有的 container 构建在同一网络下，我们要找其他 container，我们只需通过 docker-compose 里面的"),a("code",[t._v("service name")]),t._v(" 即可找到。\n下面先来看看我们的目录:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("  vueMusic\n  ├─ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("git\n  ├─ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("gitignore\n  ├─ "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("LICENSE")]),t._v("\n  ├─ "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("README")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("md\n  ├─ babel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js\n  ├─ dist\n  ├─ docker"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("compose"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("yml\n  ├─ docs\n  ├─ nginx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("conf\n  ├─ "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("lock"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("json\n  ├─ "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("json\n  ├─ "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v("\n  ├─ server\n  ├─ src\n  └─ vue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js\n")])])]),a("p",[t._v("dist 是我们的前端项目。 server 是我们的后端项目。\n下面再来看看我们的"),a("code",[t._v("docker-compose.yml")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-docker extra-class"},[a("pre",{pre:!0,attrs:{class:"language-docker"}},[a("code",[t._v("  version"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'3'")]),t._v("\n  services"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  music"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("web"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#前端项目的service name")]),t._v("\n      container_name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'music-web-container'")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#容器名称")]),t._v("\n      image"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nginx  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#指定镜像")]),t._v("\n      restart"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" always\n      ports"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" 80"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("80\n      volumes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" ./nginx.conf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/etc/nginx/nginx.conf  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#挂载nginx配置")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" ./dist"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/usr/share/nginx/html/    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#挂载项目")]),t._v("\n      depends_on"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" music"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("server\n  music"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("server"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#后端项目的service name")]),t._v("\n      container_name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'music-server-container'")]),t._v("\n      build"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ./server  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#根据server目录下面的Dockerfile构建镜像")]),t._v("\n      restart"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" always\n      expose"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" 3000\n")])])]),a("p",[t._v("可以看见，我们通过"),a("code",[t._v("volumes")]),t._v("属性将宿主机的"),a("code",[t._v("nginx.conf")]),t._v("挂载到容器内的 nginx 配置文件，用来覆盖原有的配置文件,同时也将"),a("code",[t._v("dist")]),t._v("挂载到容器内。我们将前端项目的容器暴露并映射给宿主机的 80 端口，我们将后端项目的容器暴露 3000 端口。那么我们在哪里实现反向代理请求呢？请看"),a("code",[t._v("nginx.conf")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-nginx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#user  nobody;")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("worker_processes")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("events")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("worker_connections")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1024")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("http")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("include")]),t._v("       mime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("types")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default_type")]),t._v("  application"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("octet"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("stream"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("sendfile")]),t._v("        on"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#tcp_nopush     on;")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#keepalive_timeout  0;")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("keepalive_timeout")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("65")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#gzip  on;")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("gzip")]),t._v(" on"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("gzip_min_length")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("gzip_buffers")]),t._v("     "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),t._v("k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#gzip_http_version 1.0;")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("gzip_comp_level")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("gzip_types")]),t._v(" text"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("plain application"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("javascript application"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("javascript text"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("css application"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("xml text"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("javascript application"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("httpd"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("php image"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("jpeg image"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("gif image"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("png"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("gzip_vary")]),t._v(" on"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("listen")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server_name")]),t._v("  www"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("qinianqing"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#音乐app项目")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("index")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("index")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("html "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("index")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("htm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#添加属性。")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("root")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("usr"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("share"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("nginx"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("html"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#站点目录")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#音乐app项目设置代理转发")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("api"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_pass")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("http")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("music"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3000")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("error_page")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("500")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("502")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("503")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("504")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("html"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("html "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n              "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("root")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("usr"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("share"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("nginx"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("html"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("可以看上面的"),a("code",[t._v("proxy_pass http://music-server:3000/;")]),t._v("。其中"),a("code",[t._v("music-server")]),t._v("是我们后端项目的服务名，我们通过服务名来找到这个容器，这样就实现了反向代理。")]),t._v(" "),a("h2",{attrs:{id:"部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#部署"}},[t._v("#")]),t._v(" 部署")]),t._v(" "),a("ol",[a("li",[t._v("到我们的服务器，指定一个目录，利用 git 拉取我们的项目。")]),t._v(" "),a("li",[t._v("进入项目的根目录，执行"),a("code",[t._v("docker-compose up -d")]),t._v(" 运行服务。")]),t._v(" "),a("li",[t._v("执行"),a("code",[t._v("docker ps")]),t._v("即可看见我们刚刚启动的容器。")])]),t._v(" "),a("h2",{attrs:{id:"部署的架构图"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#部署的架构图"}},[t._v("#")]),t._v(" 部署的架构图")]),t._v(" "),a("blockquote",[a("p",[t._v("这里还有我另外一个项目：resume")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.loli.net/2019/08/28/O1X4pLvfng9578y.png",alt:"docker服务编排 (1).png"}})]),t._v(" "),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),a("p",[t._v("我们应当保持一个虔诚谦虚的态度去学习。也许你已经熟知某一领域，别人向你请教的时候，请不要高高在上、目中无人。每个厉害的大牛，都是小人物成长起来的，谁都有这样一个过程。所以，人生苦短，请与人为善。")])])}),[],!1,null,null,null);s.default=e.exports}}]);