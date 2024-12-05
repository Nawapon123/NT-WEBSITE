<template>

  <div class="background-container">
  <div class="contact-container">
    <h1>ติดต่อผู้ดูแล</h1>
    <form @submit.prevent="submitForm" class="contact-form">
      <div class="form-group">
        <label for="name">ชื่อ:</label>
        <input
          type="text"
          id="name"
          v-model="formData.name"
          required
          placeholder="กรุณากรอกชื่อของคุณ"
        />
      </div>

      <div class="form-group">
        <label for="email">อีเมล:</label>
        <input
          type="email"
          id="email"
          v-model="formData.email"
          required
          placeholder="กรุณากรอกอีเมลของคุณ"
        />
      </div>

      <div class="form-group">
        <label for="message">ข้อความ:</label>
        <textarea
          id="message"
          v-model="formData.message"
          required
          placeholder="กรุณากรอกข้อความที่ต้องการติดต่อ"
        ></textarea>
      </div>

      <button type="submit">ส่งข้อความ</button>
    </form>

    <!-- แสดงข้อความที่ผู้ใช้ส่ง -->
    <div v-if="formStatus" class="form-status">
      <p>{{ formStatus }}</p>
    </div>
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
      // ข้อมูลที่ผู้ใช้กรอก
      formData: {
        name: '',
        email: '',
        message: ''
      },
      // สถานะของฟอร์มหลังจากส่ง
      formStatus: ''
    };
  },
  methods: {
    submitForm() {
      // ตัวอย่างการส่งข้อมูล - สามารถส่งข้อมูลไปยัง API หรือ backend ได้ที่นี่
      console.log('ข้อมูลที่ผู้ใช้ส่ง:', this.formData);
      
      // ตั้งค่าข้อความหลังการส่ง
      this.formStatus = 'ขอบคุณที่ติดต่อเรา! เราจะตอบกลับคุณโดยเร็ว.';
      
      // ล้างฟอร์มหลังจากส่งข้อมูล
      this.formData.name = '';
      this.formData.email = '';
      this.formData.message = '';
    }
  }
};
</script>

<style scoped>
.background-container {
  /* กำหนดความสูงและความกว้าง */
  width: 100%;
  height: 3000; /* ให้สูงเต็มหน้าจอ */
  
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
  color: rgb(234, 243, 234); /* สีข้อความ */
  text-align: center;
  font-family: Arial, sans-serif;
}
/* กำหนดรูปแบบของคอนเทนเนอร์ */
.contact-container {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}

/* รูปแบบฟอร์ม */
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 20px;
}

/* รูปแบบสำหรับฟอร์มแต่ละช่อง */
.form-group {
  display: flex;
  flex-direction: column;
  text-align: left;
}

/* ขนาดและการตั้งค่าต่างๆ ของอินพุต */
input,
textarea {
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
}

/* ขนาดและการตั้งค่าปุ่ม */
button {
  padding: 10px;
  font-size: 1.2rem;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}

/* รูปแบบข้อความแสดงสถานะ */
.form-status {
  margin-top: 20px;
  font-size: 1.2rem;
  color: #4CAF50;
}
</style>

