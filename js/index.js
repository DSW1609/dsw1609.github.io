// 导航栏触碰事件
// 获得所有导航栏li元素
var nav_li = document.querySelector(".nav").querySelectorAll("li");
// 获得下方指示元素
var nav_jt = document.querySelector(".nav_jt");
// 获得下方指示元素2
var nav_jt2 = document.querySelector(".nav_jt2");
// 创建数组保存指示元素left值
var nav_jt_left = ["80px", "280px", "480px", "680px"];
// 创建数组保存页面滚动top值
var nav_li_sll = [0, 760, 1960, 2700];
// 循环创建li鼠标事件
for (let i = 0; i < nav_li.length; i++) {
  // 触碰事件
  nav_li[i].addEventListener("mouseenter", function () {
    // 获得li自定义属性
    var nav_li_index = this.getAttribute("data-index");
    // 根据自定义属性移动指示元素2到对应位置
    nav_jt2.style.display = "block";
    nav_jt2.style.left = nav_jt_left[nav_li_index];
  })
  // 移出事件
  nav_li[i].addEventListener("mouseleave", function () {
    // 移动指示元素2到默认位置
    nav_jt2.style.display = "none";
  })
  // 点击事件
  nav_li[i].addEventListener("click", function () {
    // 获得li自定义属性
    var nav_li_index = this.getAttribute("data-index");
    // 根据自定义属性移动指示元素1到对应位置
    nav_jt.style.left = nav_jt_left[nav_li_index];
    // 点击li回到设定位置
    relaxTop(nav_li_sll[nav_li_index]);
  })
}
var zp_works = document.querySelector(".zp_works");
// 页面滚定事件——导航栏
window.addEventListener("scroll", function () {
  if (this.pageYOffset == nav_li_sll[0]) {
    nav_jt.style.left = nav_jt_left[0];
    zp_works.style.color = "#f2fcfe";
  }
  if (this.pageYOffset >= nav_li_sll[1]) {
    nav_jt.style.left = nav_jt_left[1];
    zp_works.style.color = "#4286f4";
  }
  if (this.pageYOffset >= nav_li_sll[2]) {
    nav_jt.style.left = nav_jt_left[2];
  }
  if (this.pageYOffset >= nav_li_sll[3]) {
    nav_jt.style.left = nav_jt_left[3];
  }
})
// 首页文字特效
var body_sy_ce = document.querySelector(".body_sy_ce");
// 渐渐显示文字效果
window.addEventListener("load", function () {
  body_sy_ce.style.height = "70%";
  setTimeout(function () {
    body_sy_ce.style.transition = "0.5s";
  }, 2000)
})
// 点击事件
body_sy_ce.addEventListener("click", function () {
  nav_jt.style.left = nav_jt_left[1];
  relaxTop(760);
})
$('.zp_show_lb').liMarquee();
// 联系我的事件
var lx_ce_im = document.querySelectorAll(".lx_ce_im");
// 创建数组保存背景色
var lx_im_bg = ["#5eaade", "#181818", "#3c599b", "#dd1829", "#171515", "#e6162d", "#5eaade", "#1d2fe3", "#006ce2", "#2dc100", "#dd4b39", "#4dc247", "#f08198", "#db4437"];
// 循环添加类名
for (let i = 0; i < lx_ce_im.length; i++) {
  lx_ce_im[i].classList.add('lx_ce_im' + i);
  lx_ce_im[i].style.background = lx_im_bg[i];
}
// 如果点击的是1全部图标恢复原色,否则恢复灰色
window.addEventListener("keydown", function (e) {
  if (e.key == 1) {
    for (let i = 0; i < lx_ce_im.length; i++) {
      lx_ce_im[i].style.filter = "grayscale(0%)";
      lx_ce_im[i].style.transition = "1s";
    }
  } else {
    for (let i = 0; i < lx_ce_im.length; i++) {
      lx_ce_im[i].style.filter = "";
      setTimeout(function () {
        lx_ce_im[i].style.transition = "0.3s";
      }, 100)
    }
  }
})