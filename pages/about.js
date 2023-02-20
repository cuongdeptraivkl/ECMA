import Header from "../components/Header";

const AboutPage = () => {
    return `
    <div id="about" class="aboutMe container-fluid" ">
            

    <div class="aboutme-item container">
        <div class="row">
            
            <div class="col-md-5 img-aboutMe" data-aos="fade-left" >
                <img width="96%" src="src/img/about.jpg" alt="">
                <div class="item-img-about item-ab1 text-center">
                    <h4>20+</h4>
                    <p>Projects Web</p>
                </div>
                <div class="item-img-about item-ab2 text-center">
                    <h4>12+</h4>
                    months experience                            </div>
                <div class="item-img-about item-ab3 text-center">
                    <h4>8+</h4>
                    <p>Realistic projects</p>
                </div>
            </div>
            <div class="col-md-7 right-about" data-aos="fade-right">
                <h3>About Me</h3>
                <h5>A story of hardwork and perseverance </h5>
                <p>Hello, I am a web developer. My job is to create websites and web applications to solve my clients' problems. I am passionate about programming and always try to learn new technologies to improve my development skills. If you are looking for an experienced and passionate web developer, I would be the right person to help you with your projects.</p>
                <h5>Information</h5>
                <p>School :FPT POLYTECHNIC</p>
                <p>Website: mcuongdev@gmail.com</p>
                
                <p>Email : Mcuongdev.it@gmail.com</p>
                <p>Phone: 0775.292.262</p>
                <p>Add: Kien Xuong- Thai Binh</p>
                <a href="https://www.facebook.com/cuong.dev.8123"><button class="btn btn-secondary m-3">My Infor</button></a>
                <a href=""><button class="btn btn-success">Download CV</button></a>
            </div>
        </div>
    </div>

</div>
    `
};
export default AboutPage;
