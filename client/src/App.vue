<template>
  <div id="app">
    <vue-particles
      color="#fff"
      :particleOpacity="0.5"
      :particlesNumber="80"
      shapeType="star"
      :particleSize="5"
      linesColor="#fff"
      :linesWidth="1"
      :lineLinked="false"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="2"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
      class="lizi"
    >
    </vue-particles>
    <div class="tainer">
      <header-nav class="header"></header-nav>
      <div id="main" @click="sweepMask">
        <transition mode="out-in" name="fade" @before-enter="beforeEnter" @after-enter="afterEnter">
          <router-view/>
        </transition>
      </div>
      <footer id="app-footer">
        本博客最终解释权归mankawang所有...
      </footer>
    </div>
  </div>
</template>

<script>
  import HeaderNav from '@/components/common/HeaderNav'
export default {
  name: 'App',
  components: {
    HeaderNav
  },
  methods: {
    sweepMask() {
      this.maskFlag = !this.maskFlag
    },
    afterEnter() {
      const footer = document.getElementById('app-footer')
      footer.className = 'solid'
    },
    beforeEnter() {
      const footer = document.getElementById('app-footer')
      footer.className = 'trans'
    }
  }
}
</script>

<style type="text/scss" lang="scss" scoped>
  @import './assets/style/variable';
  body {
    height:100%;
    margin: 0;
    padding: 0;
  }
  #app {
    height:100%;

    background-attachment:fixed;
  }
  #main{
    height:100%;
  }
  footer {
    font-weight: 200;
    width: 95%;
    max-width: 850px;
    text-align: center;
    font-size: 1.4rem;
    margin: 50px auto 0;
    padding: 2em 0;
    color: #fff;
    box-shadow: 0 -1px 0 #fff;
    .github {
      color: #fff;
    }
  }

  .trans {
    opacity: 0;
  }

  .solid {
    opacity: 1;
  }
  /* 粒子样式一定要加 */
  .lizi{
    width: 100%;
    height:100%;
    position: fixed;
    background:url("./assets/img/banner.jpg") no-repeat;
    background-size: cover;
    z-index: -1;
  }
</style>
