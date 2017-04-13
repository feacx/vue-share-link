<template>
  <div id="app">
    <iHeader :title="appTitle"></iHeader>
    <mt-tabbar fixed v-model="selected" class="tabbar" @click.native="goroute">
      <mt-tab-item id="Teacher">
        <i class="fa fa-coffee" slot="icon"></i>
        明星讲师团
      </mt-tab-item>
      <mt-tab-item id="Student">
        <i class="fa fa-play-circle-o" slot="icon"></i>
        明星学员
      </mt-tab-item>
      <mt-tab-item id="Partner">
        <i class="fa fa-audio-description" slot="icon"></i>
        合伙人
      </mt-tab-item>
      <mt-tab-item id="Honor">
        <i class="fa fa-play-circle-o" slot="icon"></i>
        企业荣誉
      </mt-tab-item>
    </mt-tabbar>
    <router-view></router-view>
  </div>
</template>

<script>
  import iHeader from './components/header/Header'
  export default {
    name: 'app',
    data () {
      return {
        selected: '',
        appTitle: ''
      }
    },
    methods: {
      goroute () {
        let route = this.selected,
        appTitle = this.appTitle;
        this.$router.push({ name: route });
        switch (route)
        {
          case 'Teacher':
          this.appTitle = '明星讲师团';
          break;
          case 'Partner':
          this.appTitle = '洛基合伙人'
          break;
          case 'Student':
          this.appTitle = '优秀学员选集'
          break;
          case 'Honor':
          this.appTitle = '企业荣誉'
          break;
          default:
          this.appTitle = '明星讲师团';
        }
      }
    },
    components: {
      iHeader: iHeader
    },
    created () {
      let $me = this, route = $me.$route.name
      $me.selected = route
      switch (route)
      {
        case 'Teacher':
        this.appTitle = '明星讲师团';
        break;
        case 'Partner':
        this.appTitle = '洛基合伙人'
        break;
        case 'Student':
        this.appTitle = '优秀学员选集'
        break;
        case 'Honer':
        this.appTitle = '企业荣誉'
        break;
        default:
        this.appTitle = '明星讲师团';
      }
    }
  }
</script>

<style lang="scss">
  html {
    font-family: 'Microsoft YaHei';
    font-size: 10px;
    background-color: #fff;
  }
  h1, h2, h3, h4, h5, h6{
    margin: 0;
  }
  ul, p{
    margin: 0;
    padding: 0;
  }
  li{
    list-style: none;
  }
  img{
    vertical-align: top;
  }
  a{
    text-decoration: none;
  }
  .mint-tabbar{
    background-color: #fff;
  }
  .mint-tab-item{
    color: #666;
  }
  .tabbar.mint-tabbar > .mint-tab-item.is-selected {
    background-color: transparent;
    color: #e81220;
  }
  .tabbar.mint-tabbar{
    .fa{
      font-size: 18px;
    }
  }
  body{
    margin: 0;
    padding: 0;
  }
  .clearfix:after{
    content:".";
    display:block;
    height:0;
    clear:both;
    visibility:hidden
  }
  .logo{
    img{
      width: 100%;
    }
  }
  #app{
    margin: 0 auto;
    max-width: 768px;
    margin-bottom: 5.5rem;
  }
  .mint-header{
    background-color: #fff;
    color: #000;
    box-shadow: 0 0 5px #ccc;
    box-sizing: content-box;
  }
  .mint-button--default.is-plain{
    padding-left: 2rem;
    padding-right: 2rem;
    border-color: #ccc;
    border-radius: 20px;
  }
  .banner{
    img{
      width: 100%;
    }
  }
  .m-hd{
    font-size: 16px;
    color: #333;
    h1{
      margin: 1rem auto;
      font-size: 2.6rem;
      text-align: center;
    }
  }
  .desc{
    padding-top: 1rem;
    margin-left: 1rem;
    margin-right: 1rem;
    font-size: 1.4rem;
    color: #666;
    border-top: 1px solid #eee;
    p{
      margin-top: 1rem;
      line-height: 1.6;
    }
  }
  .more-btn{
    margin-left: 1rem;
    margin-right: 1rem;
    padding-bottom: 1rem;
    text-align: center;
  }
  .list{
    padding-top: 1rem;
    padding-bottom: 1rem;
    border-top: 1px solid #eee;
    li{
      position: relative;
      display: block;
      padding: 1rem;
      overflow: hidden;
      text-decoration: none;
      border-bottom: 1px solid #fff;
      box-sizing: border-box;
      -webkit-tap-highlight-color: transparent;
    }
    .cover {
      padding: 0 0.6rem;
      .img {
        display: block;
        width: 100%;
      }
    }
    .cont {
      overflow: hidden;
      .title {
        font-weight: 400;
        font-size: 1.4rem;
        color: #000;
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        word-wrap: normal;
      }
      .description {
        margin-top: 0.4rem;
        font-size: 1.2rem;
        color: #999;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        line-height: 1.3;
      }
    }
  }
  
</style>
