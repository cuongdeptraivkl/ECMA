import { router, useEffect } from "../libs"


const login = () => {
useEffect(()=>{
    const formLogin = document.getElementById('formLogin');
    const email = document.querySelector('.email-login');
    const pass = document.querySelector('.pass-login');
    var EmailAdmin = "Mcuongdev.it@gmail.com"
    var passAdmin = "6789"
    formLogin.addEventListener("submit", (e) => {
        e.preventDefault();
        // var emailAdmin = ${item.emailAdmin}
      console.log(EmailAdmin);
        if(email.value==EmailAdmin && passAdmin == pass.value){
         router.navigate('admin/projects')
        }else{
        confirm('Wrong email || password.')
        }
      });
        
    } )

    /*html*/


return `

<section class="vh-100 login">
<div class="container-fluid h-custom">
  <div class="row d-flex justify-content-center align-items-center h-100">
    
    <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
      <form id="formLogin">
        <div class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start iconlogin">
          <p class="lead fw-normal mb-0 me-3">Sign in with</p>
          <i class='bx bxl-facebook-circle' style='color:#0d27ed' ></i>
          <i class='bx bxl-gmail' style='color:#f21809' ></i>
          <i class='bx bxl-github' style='color:#050505' ></i>
        </div>

        <div class="divider d-flex align-items-center my-4">
          <p class="text-center fw-bold mx-3 mb-0">Or</p>
        </div>

        <!-- Email input -->
        <div class="form-outline mb-4">
            <label class="form-label" for="form3Example3">Email address</label>
          <input type="email" id="form3Example3" class="form-control form-control-lg input-login email-login"
            placeholder="Enter a valid email address" />
        </div>

        <!-- Password input -->
        <div class="form-outline mb-3">
            <label class="form-label" for="form3Example4">Password</label>
          <input type="password" id="form3Example4" class="form-control form-control-lg input-login pass-login"
            placeholder="Enter password" />
        </div>

        <div class="d-flex justify-content-between align-items-center">
          <!-- Checkbox -->
          <div class="form-check mb-0">
            <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
            <label class="form-check-label" for="form2Example3">
              Remember me
            </label>
          </div>
          <a href="/login" class="text-body">Forgot password?</a>
        </div>

        <div class="text-center text-lg-start mt-4 pt-2">
          <button type="submit" class="btn"
            style="padding-left: 2.5rem; padding-right: 2.5rem;background-color: #ffc830;">Login</button>
          <p class="small fw-bold mt-2 pt-1 mb-0">If you are not Manh Cuong, please <a href="/"
              class="link-danger">Go Back Home</a></p>
        </div>

      </form>
    </div>
    <div class="col-md-9 col-lg-6 col-xl-5">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          class="img-fluid" alt="Sample image">
      </div>
  </div>
</div>

</div>
</section>

`
}

export default login
