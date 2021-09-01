<template>
  <form @submit.prevent="submitForm">
    <div>
      <label for="username">이름 : </label>
      <input id="username" type="text" v-model="username" />
    </div>
    <div>
      <label for="password">비밀번호 : </label>
      <input id="password" type="text" v-model="password" />
    </div>
    <div>
      <label for="nickname">별명 : </label>
      <input id="nickname" type="text" v-model="nickname" />
    </div>
    <button type="submit">Sign Up</button>
    <p>{{ logMessage }}</p>
  </form>
</template>

<script>
import { registerUser } from '@/api/index.js';

export default {
  data() {
    return {
      username: '',
      password: '',
      nickname: '',
      logMessage: '',
    };
  },
  methods: {
    async submitForm() {
      console.log('submit');
      const userData = {
        username: this.username,
        password: this.password,
        nickname: this.nickname,
      };
      const { data } = await registerUser(userData);
      console.log(data);
      this.logMessage = `${data.username} 님이 가입되었습니다.`;
      this.initFrom();
    },
    initFrom() {
      this.username = '';
      this.password = '';
      this.nickname = '';
    },
  },
};
</script>

<style></style>
