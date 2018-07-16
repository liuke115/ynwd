<template>
  <div style="height: 100%">
    <v-navigation-drawer
      fixed
      v-model="drawer"
      app
      style="height: 100%"
    >
      <v-list dense>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>contact_mail</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Contact</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar dark fixed app style="height: 84px;padding-top: 8px">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-btn icon large>
        <v-avatar size="32px" tile>
          <img src="https://vuetifyjs.com/static/doc-images/logo.svg" alt="Vuetify">
        </v-avatar>
      </v-btn>
      <v-toolbar-title>
        <h3>云南普洱五湖国家湿地公园</h3>
        <h5>
          <b style="color: lightgrey">智慧公园</b> 管理系统
          <v-chip color="warning" text-color="black" small>演示版</v-chip>
        </h5>
      </v-toolbar-title>
      <v-btn @click="logoutFunc" right fixed light color="grey">退出</v-btn>
    </v-toolbar>
    <v-content style="height: 100%">
      <v-container fluid fill-height="true">
        <v-layout
          justify-center
          align-center
        >
          <v-flex text-xs-center>
            <v-tooltip left>
              <v-btn icon large href="#" target="_blank" slot="activator">
                <v-icon large>code</v-icon>
              </v-btn>
              <span>Source</span>
            </v-tooltip>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer app inset dark>
      <span class="white--text" style="position: fixed;right: 10px">
        <v-tooltip top>
          <span slot="activator">小红花信息技术有限公司</span>
          <span>联系电话：18612732680<br>公司地址：昆明核桃箐路</span>
        </v-tooltip> &copy;2018
      </span>
    </v-footer>
  </div>
</template>

<script>
export default {
  name: 'contentPage',
  data () {
    return {
      drawer: null
    }
  },
  methods:{
    logoutFunc(){
      this.$router.push({ path: '/' })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
