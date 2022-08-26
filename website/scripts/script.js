class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML =`
        <header>
        <div class="website-header">
            <img src="../assets/logo.png" alt="logo"/>
            <h1>Daily News</h1>
            <ul class="login-menu">
              <li><a href="login.html">Se Connecter</a></li>
              <li><a href="register.html">S'inscrire</a></li>
            </ul>
        </div>
        <nav class="navbar navbar-expand-md">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                  <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="collapsibleNavbar">
                  <ul class="navbar-nav">
                    <li class="nav-item">
                      <a class="nav-link" href="accueil.html">Accueil</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">Monde</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Business</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">Voyages</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">Technologies</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">Politiques</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">Sports</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">Voitures</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">Divertissement</a>
                      </li>
                  </ul>
                </div> 
        </nav>
        <div class="breaking-news-section">
                <span id="btext">Dernières Nouvelles</span>
                <marquee direction="left" onmouseover="this.stop()" onmouseout="this.start()">
                    <a href="#" class="breaking-news">
                        <p class="bntime">Aujourd'hui</p>
                        Kenya: William Ruto élu président,le résultat rejeté par une partie de la commission électorale</a>
                    <a href="#" class="breaking-news"><p class="bntime">Aujourd'hui</p>Guerre en Ukraine, en direct: Vladimir Poutine vante les armes russes qui font leurs preuves en « conditions réelles »</a>
                    <a href="#" class="breaking-news"><p class="bntime">Aujourd'hui</p>Mali: les derniers soldats français de l'opération « Barkhane » ont quitté le pays</a>
                </marquee>
        </div>
            
      </header>`
    }
}

customElements.define('my-header', MyHeader)

class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML =`
        <footer>
            <div class="social-links">
            <section class="about">
                <h2>About</h2>
                <p>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Curabitur blandit tempus porttitor. Etiam porta sem malesuada magna mollis euismod.</p>
                <div class="social-icons-footer">
                <i class="fab fa-facebook"></i>
                <i class="fab fa-twitter-square"></i>
                <i class="fab fa-google-plus-square"></i>
                <i class="fab fa-instagram"></i>
                <i class="fas fa-rss-square"></i>
                <i class="fab fa-youtube-square"></i>
                <i class="fas fa-rss-square"></i>
                <i class="fab fa-pinterest-square"></i>
                <i class="fab fa-linkedin"></i>
                </div>
            </section>
            <section class="Instagram">
                <h2>Instagram</h2>
                <img src="../assets/aside2.jpg">
                <img src="../assets/aside3.jpg">
                <img src="../assets/aside4.jpg">
                <img src="../assets/aside5.jpg">
                <img src="../assets/aside2.jpg">
                <img src="../assets/aside3.jpg">
                <img src="../assets/aside4.jpg">
                <img src="../assets/aside5.jpg">
                <img src="../assets/aside2.jpg">
                <button type="button" class="footer-buttons">View on Instagram</button>
            </section>
            <section class="Subscribe">
                <h2>S'abonner à Daily News</h2>
                <p>Enter your email address to subscribe to this blog and receive notifications of new posts by email</p>
                <input type="email" placeholder="Email Address">
                <button type="button" class="footer-buttons">Subscribe</button>
            </section>
            </div>
        
            <div class="copyright">Copyright © 2019 News Today. Designed by N.N.N</div>
    </footer>`
            
    }
}

customElements.define('my-footer', MyFooter)


const forms = document.querySelector(".forms"),
pwShowHide = document.querySelectorAll(".eye-icon"),
links = document.querySelectorAll(".link");

pwShowHide.forEach(eyeIcon => {
eyeIcon.addEventListener("click", () => {
  let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");
  
  pwFields.forEach(password => {
      if(password.type === "password"){
          password.type = "text";
          eyeIcon.classList.replace("bx-hide", "bx-show");
          return;
      }
      password.type = "password";
      eyeIcon.classList.replace("bx-show", "bx-hide");
  })
  
})
})      

links.forEach(link => {
link.addEventListener("click", e => {
 e.preventDefault(); //preventing form submit
 forms.classList.toggle("show-signup");
})
})