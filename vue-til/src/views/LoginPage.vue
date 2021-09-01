<template>
  <form @submit.prevent="submitForm">
    <div>
      <label for="id">id : </label>
      <input id="username" type="text" v-model="userid" />
    </div>
    <div>
      <label for="id">pw : </label>
      <input id="password" type="text" v-model="password" />
    </div>
    <button type="submit">login</button>
    <p>{{ logMessage }}</p>
  </form>
</template>

<script>
import { userLogin } from '@/api/index.js';

export default {
  data() {
    return {
      userid: '',
      password: '',
      logMessage: '',
    };
  },
  methods: {
    async submitForm() {
      try {
        console.log('userLogin');
        const userData = {
          username: this.userid,
          password: this.password,
        };
        const response = await userLogin(userData);
        this.logMessage = `${response.data.user.nickname} 님이 로그인했습니다.`;
      } catch (error) {
        this.logMessage = `${error.response.data}`;
      } finally {
        this.initForm();
      }
    },
    initForm() {
      this.username = '';
      this.password = '';
    },
  },
};
</script>

<style scoped></style>
