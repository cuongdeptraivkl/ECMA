import Header from "../components/Header";

const ContactPage = () => {
    return `
    <div class="bg-contact container-fluid" id="contact">
    <div class="clipath-contact">
        <div class="container">
            <p class="text-center p-contact">connect to me</p>
            <h2 class="text-center h3-contact">Contact</h2>
        <div class="row row-contact">
            <div class="col-md-6 contact-left ">

                <h4>Drop me a line.</h4>
                <form>
                <table>
                    <tr>
                        <th>Your Name:</th>
                        <td><input required type="text" placeholder="Enter Your Name..."></td>

                    </tr>
                    <tr>
                        <th>Your Email:</th>
                        <td><input required type="email" placeholder="Enter Your Email..."></td>
                        
                    </tr>
                    <tr>
                        <th>Your Phone:</th>
                        <td><input required type="text" placeholder="Enter Your Phone..."></td>
                        
                    </tr>
                    <tr>
                        <th>Your Message:</th>
                       <td><textarea name="" id="" placeholder="Can I help you.. ?"></textarea></td>                            
                    </tr>
                    <tr>
                      <td colspan="2">
                        <button class="btn btn-contact" type="submit">
                         <p>   SEND<i class='bx bx-right-arrow-alt i1' ></i> MESSAGE <i class='bx bx-right-arrow-alt i2' ></i>   </p>                          
                        </button>
                      </td>
                    </tr>
                </table>
                </form>
            </div>
        
            <div class="col-md-6">
                <div class="item-bg-contact">
                    <div class="item-info-contact">
                   <p><i class='bx bxs-map'></i></p>
                        <p>Kien Xuong - Thai Binh, VietNam</p>
                    </div>
                    <div class="item-info-contact">
                      <p>  <i class='bx bxs-phone' ></i></p>
                        <p>0775.292.262</p>
                    </div>
                    <div class="item-info-contact">
                       <p> <i class='bx bxl-gmail' ></i></p>
                        <p>Mcuongdev.it@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
  </div>
    
    `
};
export default ContactPage;
