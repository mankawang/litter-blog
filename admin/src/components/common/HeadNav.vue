<template>
  <nav class="head-nav">
    <div class="logo-container">
      <img src="@/assets/image/wifi.png" alt="" class="logo">
    </div>
    <div class="content-container">
      <section>
        <h4 class="title">
          mankawang博客系统
        </h4>
      </section>
      <a class="log-out">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-tuichu"></use>
        </svg>
        <span>&nbsp;登出</span>
      </a>
    </div>
  </nav>
</template>

<script>
    export default {
        name: "HeadNav"
    }
</script>

<style type="text/scss" lang="scss" scoped>
  /*记得引入全局变量的文件*/
  @import '../../assets/style/variable';
  .head-nav {
    font-family: KaiShu, Arial, sans-serif;
    @include flex($justify: flex-start);
    font-size: 1.6rem;
    height: 3em;
    .logo-container {
      @include flex;
      width: 3em;
      height: inherit;
      border-bottom: 2px solid $word;
    }
    .content-container {
      @include flex($justify: space-between);
      padding: 0.5em;
      height: 100%;
      width: calc(100% - 50px);
      border-bottom: 2px solid $base;
      .log-out {
        @include flex;
        color: gray;
        font-family: "Fira Code";
      }
    }
    h4 {
      @include flex;
      margin: 0;
    }
    .subhead {
      width: 130px;
    }
    .log-out {
      cursor: pointer;
    }
  }
</style>
