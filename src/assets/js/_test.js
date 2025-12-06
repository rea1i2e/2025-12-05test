console.log("test.js");
/**
 * テスト用jsファイル
 * GSAP ScrollTriggerを使ったピン留めアニメーション
 */

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOMContentLoaded");

  const pinTarget = document.querySelector(".js-pin-target");
  const pinText = pinTarget?.querySelector("p");

  if (pinTarget && pinText) {
    gsap.to(pinText, {
      rotation: 360,
      scrollTrigger: {
        trigger: pinTarget,
        start: "top top",
        // end: "+200%",
        end: "+1000px",
        pin: true,
        pinSpacing: true,
        scrub: 1,
        markers: true,
        // invalidateOnRefresh: true, // ビューポート変化時の再計算用
      },
    });

    // 画面サイズ変更時にScrollTriggerを再計算
    // let resizeTimer;
    // window.addEventListener("resize", () => {
    //   clearTimeout(resizeTimer);
    //   resizeTimer = setTimeout(() => {
    //     ScrollTrigger.refresh();
    //   }, 100);
    // });
  }
});
