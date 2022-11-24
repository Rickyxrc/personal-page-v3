import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

createApp(App)
  .directive("highlight", function (el) {
    let blocks = el.querySelectorAll("pre code");
    blocks.forEach((block) => {
      hljs.highlightBlock(block);
    });
  })
  .mount("#app");
