<template>

    <div class="background-container">
    <div class="login-container">
      <h2>เข้าสู่ระบบ</h2>
      <form @submit.prevent="handleLogin">
        <div class="form-group">
          <label for="username">User Name</label>
          <input
            type="text"
            id="username"
            v-model="username"
            placeholder="กรุณากรอกชื่อผู้ใช้"
            required
          />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            v-model="password"
            placeholder="กรุณากรอกรหัสผ่าน"
            required
          />
        </div>
        <button button class="btn btn-outline-light" router-link to="/login" >เข้าสู่ระบบ</button>
      </form>
  
      <div class="register-link">
        <p>ยังไม่มีบัญชี? <router-link to="/register">สมัครสมาชิก</router-link></p>
      </div>
  
      <p v-if="loginError" class="error-message">{{ loginError }}</p>
    </div>
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
        loginError: "",
      };
    },
    methods: {
      async handleLogin() {
        // ตรวจสอบข้อมูลล็อกอิน
        if (this.username === "user" && this.password === "password123") {
          this.$router.push("/dashboard"); // เปลี่ยนไปยังหน้า dashboard
        } else {
          this.loginError = "ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง";
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .login-container {
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
  
  .register-link {
    text-align: center;
    margin-top: 15px;
  }
  
  .register-link a {
    color: #4CAF50;
    text-decoration: none;
  }
  
  .register-link a:hover {
    text-decoration: underline;
  }
  .background-container {
  /* กำหนดความสูงและความกว้าง */
  width: 100%;
  height: 2000; /* ให้สูงเต็มหน้าจอ */
  
  /* ใส่ภาพพื้นหลัง */
  background-image: url('../assets/0.jpg'); /* ใช้เส้นทางที่ถูกต้องในโฟลเดอร์ assets */
  background-size: cover; /* ให้ภาพขยายเต็มพื้นที่ */
  background-position: center; /* จัดภาพให้ตรงกลาง */
  background-repeat: no-repeat; /* ห้ามให้ภาพซ้ำ */

  /* การจัดข้อความให้อยู่ตรงกลาง */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: Arial, sans-serif;
}
  </style>

  
  