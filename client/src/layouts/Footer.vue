<template>
  <div>
    <footer class="footer">
      <div class="container">
        <div class="footer-box">
          <div class="row">
            <div class="col-md-4">
              <h5>Ezilotto</h5>
              <p>
                Lorem ipsum dolor sit amet.
                consecteur adipiscing elit sed do
                elusmod tempor incididunt.
              </p>
              <div class="footer-social">
                <router-link to="#">
                  <i class="icofont-facebook"></i>
                </router-link>
                <router-link to="#">
                  <i class="icofont-twitter"></i>
                </router-link>
                <router-link to="#">
                  <i class="icofont-instagram"></i>
                </router-link>
              </div>
            </div>
            <div class="col-md-4">
              <h5>Menu</h5>
              <div>
                <router-link to="#">Terms and conditions</router-link>
              </div>
              <div>
                <router-link to="#">Privacy policy</router-link>
              </div>
              <div>
                <router-link to="#">Contact Us</router-link>
              </div>
            </div>
            <div class="col-md-4">
              <h5>Address</h5>
              <div>
              <address>
                <div>
                  <span class="lnr lnr-home"></span>
                      945 Colonial Street
                  <br>Hohoe Heights, MD 207.
                </div>
                <div>
                  <span class="lnr lnr-phone-handset"></span> (909) 9027464
                </div>
                <div>
                  <span class="lnr lnr-envelope"></span> contact@ezilotto.com
                </div>
              </address>
              </div>
            </div>
          </div>
        </div>
        <div class="copyright">
          <p class="text-center">
            &copy; Ezilotto {{ getCurrentYear }}. All rights reserved. Developed by
            <router-link to="www.hdxdev.tech" target="_blank">HDX DEV TECHNOLOGIES.</router-link>
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  methods: {
      
  },
  computed: {
      getCurrentYear() {
      return new Date().getFullYear();
    },
  }
}
</script>

<style lang="scss" scoped>
.footer {
  margin-top: 1rem;
  background: #363795;
  color: #fff;
  font-size: 1rem;
}

.footer a {
  color: #fff;
  transition: all 0.2s;
}
.footer a:hover {
  color: rgb(255, 119, 48);
}

.footer-box {
  padding: 4rem 2rem;
}
</style>
