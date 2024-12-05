<template>
    <div class="background-container">
      <h1>ยินดีต้อนรับ!</h1>
    </div>
  </template>
  
  <script>
  export default {
    name: 'BackgroundComponent'
  }
  </script>
  
  <style scoped>
  .background-container {
    width: 100%;
    height: 100vh; /* กำหนดความสูงให้เต็มหน้าจอ */
    background-image: url('@/assets/images/background.jpg'); /* ตั้งค่าภาพพื้นหลัง */
    background-size: cover; /* ให้ภาพขยายเต็มขนาด */
    background-position: center; /* จัดตำแหน่งภาพให้ตรงกลาง */
    background-repeat: no-repeat; /* ห้ามให้ภาพซ้ำ */
  }
  </style>
  