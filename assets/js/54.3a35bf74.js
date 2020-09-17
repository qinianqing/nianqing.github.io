(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{832:function(e,t,r){"use strict";r.r(t);var a=r(41),i=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"git-流程"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#git-流程"}},[e._v("#")]),e._v(" Git 流程")]),e._v(" "),r("p",[e._v("一、要开发一个新的功能的时候，从 master 切一个分支出来")]),e._v(" "),r("ol",[r("li",[r("p",[e._v("拉取最新代码\ngit pull --rebase (gup)")])]),e._v(" "),r("li",[r("p",[e._v("起一个新的分支\n功能分支:\ngit checkout -b feature/xxxx\n修复分支:\ngit checkout -b hotfix/xxxx\n开发完毕提 mr，如果 mr 没有冲突，则到此为止，直接通知相应人员就好了，如果产生了冲突，请按照下面步骤操作")])])]),e._v(" "),r("p",[e._v("二、功能开发完毕，需要合并到 master。这时候要先 rebase 下最新的 master 分支，再合并")]),e._v(" "),r("ol",[r("li",[e._v("切换 master 分支\ngit checkout master (gcm)")]),e._v(" "),r("li",[e._v("拉取最新代码\ngit pull --rebase (gup)")]),e._v(" "),r("li",[e._v("切换到自己的分支\ngit checkout feature/xxx (gco feature/xxx)\n以上步骤完成之后，请按照下面步骤操作")]),e._v(" "),r("li",[e._v("基于 master 做 rebase\ngit rebase master (grbm)")]),e._v(" "),r("li",[e._v("这个时候会产生冲突，产生冲突时，手动解决冲突\ngit add .")]),e._v(" "),r("li",[e._v("进入下一个冲突\ngit rebase --continue (grbc)")]),e._v(" "),r("li",[e._v("如果都解决完了\ngit push --force-with-lease (gpf)")]),e._v(" "),r("li",[e._v("大功告成，让 mr 负责人直接合并代码吧\nrebase 的一些其他命令\n如果不需要当前的 log\ngrbs （git rebase --skip）\n如果需要终止当前 rebase\ngrba （git rebase --abort）")])])])}),[],!1,null,null,null);t.default=i.exports}}]);