<template>

    <div class="register-container">
      <h2>สมัครสมาชิก</h2>
      <form @submit.prevent="handleRegister">
        <div class="form-group">
          <label for="username">ชื่อผู้ใช้</label>
          <input
            type="text"
            id="username"
            v-model="username"
            placeholder="กรุณากรอกชื่อผู้ใช้"
            required
          />
        </div>
        <div class="form-group">
          <label for="password">รหัสผ่าน</label>
          <input
            type="password"
            id="password"
            v-model="password"
            placeholder="กรุณากรอกรหัสผ่าน"
            required
          />
        </div>
        <div class="form-group">
          <label for="confirmPassword">ยืนยันรหัสผ่าน</label>
          <input
            type="password"
            id="confirmPassword"
            v-model="confirmPassword"
            placeholder="กรุณายืนยันรหัสผ่าน"
            required
          />
        </div>
        <button type="submit">สมัครสมาชิก</button>
      </form>
  
      <div class="login-link">
        <p>มีบัญชีอยู่แล้ว? <router-link to="/login">เข้าสู่ระบบ</router-link></p>
      </div>
  
      <p v-if="registerError" class="error-message">{{ registerError }}</p>
    </div>
    <h1 class="display-3 fw-bold">ครอบคลุมผลิตภัณฑ์ยอดนิยมทั้งหมดมีดังนี้</h1>
<div class="row">
      <div class="col-lg-4">
        <img loading="lazy" decoding="async" width="200" height="150" src="https://www.gofx.com/wp-content/uploads/2022/10/Artboard-–-91.png" class="attachment-large size-large wp-image-1459" alt="">
        <h2 class="fw-normal">ครอบคลุมผลิตภัณฑ์ยอดนิยมทั้งหมดมีดังนี้</h2>
        <p>สกุลเงินจากทั่วโลก</p>

      </div><!-- /.col-lg-4 -->
      <div class="col-lg-4">
       <img loading="lazy" decoding="async" width="200" height="150" src="https://www.gofx.com/wp-content/uploads/2022/10/Artboard-–-96.png" class="attachment-large size-large wp-image-1458" alt="">
        <h2 class="fw-normal">Precious Metals CFD</h2>
        <p>ทองคำ เงิน และอื่นๆ</p>
       
      </div><!-- /.col-lg-4 -->
      <div class="col-lg-4">
        <img loading="lazy" decoding="async" width="200" height="150" src="https://www.gofx.com/wp-content/uploads/2022/10/Artboard-–-92.png" class="attachment-large size-large wp-image-1457" alt="">
        <h2 class="fw-normal">Index CFD</h2>
        <p>ดัชนีหลักทั่วโลก</p>
       
      </div><!-- /.col-lg-4 -->
    </div>
    <div class="row">
      <div class="col-lg-4">
        <img loading="lazy" decoding="async" width="200" height="150" src="https://www.gofx.com/wp-content/uploads/2022/10/Artboard-–-94.png" class="attachment-large size-large wp-image-1456" alt="">
        <h2 class="fw-normal">Stocks CFD</h2>
        <p>หุ้นเด่นของสหรัฐฯ</p>

      </div><!-- /.col-lg-4 -->
     
      <div class="col-lg-4">
        <img loading="lazy" decoding="async" width="200" height="150" src="https://www.gofx.com/wp-content/uploads/2022/10/Artboard-–-97.png" class="attachment-large size-large wp-image-1455" alt="">
        <h2 class="fw-normal">Energy CFD</h2>
        <p>น้ำมันและก๊าซธรรมชาติ</p>
       
      </div><!-- /.col-lg-4 -->
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: "",
        password: "",
        confirmPassword: "",
        registerError: "",
      };
    },
    methods: {
      async handleRegister() {
        if (this.password !== this.confirmPassword) {
          this.registerError = "รหัสผ่านไม่ตรงกัน";
        } else {
          // ทำการสมัครสมาชิก (สามารถส่งข้อมูลไปยัง API)
          console.log("สมัครสมาชิก:", this.username, this.password);
          this.$router.push("/login"); // หลังจากสมัครเสร็จ ให้กลับไปที่หน้าเข้าสู่ระบบ
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .register-container {
    width: 300px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #f9f9f9;
  }
  
  h2 {
    text-align: center;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
  }
  
  input {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  button {
    width: 100%;
    padding: 10px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #45a049;
  }
  
  .error-message {
    color: red;
    text-align: center;
    margin-top: 10px;
  }
  
  .login-link {
    text-align: center;
    margin-top: 15px;
  }
  
  .login-link a {
    color: #4CAF50;
    text-decoration: none;
  }
  
  .login-link a:hover {
    text-decoration: underline;
  }
  </style>
  