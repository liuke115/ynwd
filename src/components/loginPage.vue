<template>
    <div>
      <v-content>
        <v-container fluid>
          <v-layout align-center justify-center>
            <v-flex>
              <div class="display-1" style="width: 100%;text-align: center;padding-top: 50px">数字湿地管理系统</div>
            </v-flex>
          </v-layout>
        </v-container>
        <v-container fluid fill-height="true">
          <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4>
              <v-card class="elevation-12">
                <v-toolbar dark >
                  <v-toolbar-title>用户登录</v-toolbar-title>
                  <v-spacer></v-spacer>
                  <v-tooltip bottom>
                    <v-btn
                      icon
                      href="#"
                      target="_blank"
                      slot="activator"
                    >
                      <v-icon>help</v-icon>
                    </v-btn>
                    <span>请输入管理员提供给您的注册信息并登录！</span>
                  </v-tooltip>
                </v-toolbar>
                <v-card-text>
                  <v-form>
                    <v-select v-model="loginInfo.role_select"
                              :items="role_items"
                              item-text="k"
                              item-value="v"
                              :rules="[v => !!v || '必须选择角色']"
                              label="角色"
                              prepend-icon="group_work"
                              name="role"
                              :clearable='clearable'
                              required
                    ></v-select>
                    <v-text-field v-model="loginInfo.username"
                                  prepend-icon="person"
                                  name="username"
                                  label="用户名"
                                  type="text"
                                  required
                    ></v-text-field>
                    <v-text-field v-model="loginInfo.password"
                                  prepend-icon="lock"
                                  name="password"
                                  label="密码"
                                  id="password"
                                  type="password"
                                  required
                    ></v-text-field>

                  </v-form>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn>忘记密码</v-btn>
                  <v-btn @click="loginFunc">登录</v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
    </div>
</template>

<script>
    export default {
      name: "loginPage",
      data() {
        return {
          drawer: null,
          clearable:true,
          role_items:[
            {
              k:'管理人员',
              v:'admin'
            },
            {
              k:'业务人员',
              v:'user'
            },
            {
              k:'专家组',
              v:'pro_user'
            }
          ],
          loginInfo:{
            username:null,
            password:null,
            role_select:{
              k:null,
              v:null
            }
          }
        }
      },
      methods:{
        loginFunc(){
          // console.log(this.loginInfo)
          this.$router.push({ path: '/content' })

        },
      }
      // props: {
      //   source: String
      // }
    }
</script>

<style scoped>

</style>
