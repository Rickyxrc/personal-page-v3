<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
</script>

<template>
  <div class="base-container">
    <div class="container">
      <div class="subcontainer">
        <span class="name">Rickyxrc</span>
      </div>
      <div class="subcontainer-2">
        <pre v-highlight>
          <code>
Person Rickyxrc;
Rickyxrc.age = 14;
Rickyxrc.school = "Chengdu Foreign Language School,Xinjin Campus.";
Rickyxrc.grade = Grade("Junior",3);
Rickyxrc.mail = "Rickyxrc" + eval("at") + "outlook" + eval("dot") + "com";
Rickyxrc.QQid = 35549817 * 100 + 94;
Rickyxrc.website = "https://rickyxrc.top";
Rickyxrc.dream = "To make this world better";
          </code>
        </pre>
      </div>
    </div>
    <div class="container-2">
      <div class="mid">
        <a href="https://blog.rickyxrc.top">个人博客</a>&nbsp;
        |&nbsp;<a href="https://github.com/Rickyxrc">Github</a>&nbsp;
        |&nbsp;<a href="https://luogu.com.cn/387961/">Luogu</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
pre {
  margin: 0;
}

.base-container {
  width: 100vw;
  height: 100vh;
  background: #efefff;
}

.container {
  position: absolute;
  left: 10vw;
  top: 15vh;
  width: 80vw;
  height: 60vh;
  background: #fffefe;
  border-radius: 4px;
  box-shadow: 0px 0px 48px 0px rgba(21, 235, 199, 0.13);
}

.container-2 {
  position: absolute;
  left: 10vw;
  top: 80vh;
  width: 80vw;
  height: 10vh;
  background: #fffefe;
  border-radius: 4px;
  box-shadow: 0px 0px 48px 0px rgba(21, 235, 199, 0.15);
}

.container-2>.mid {
  align-self: center;
}

.container-2>.mid>a {color: #738de2;}

.container:before {
  content: url("/head.png");
  position: absolute;
  width: 7.5vw;
  height: 7.5vw;
  left: -5vw;
  top: 7vh;
  z-index: 10000;
}

.subcontainer {
  width: 80vw;
  height: 16.66vh;
  background: linear-gradient(155.03deg,
      rgba(34, 225, 255, 1) 0%,
      rgba(29, 143, 224, 1) 72.24%,
      rgba(97, 93, 176, 1) 100%);
}

.subcontainer-2 {
  width: 80vw;
  height: 63.33vh;
}

.name {
  position: absolute;
  right: 8vw;
  top: 5vh;
  font-size: 3rem;
  color: #fff;
}
</style>
