import Navbar from "../components/Navbar";
import './css/home.css'
import personImg from "../assets/person.png"
import consultationImg from "../assets/consultation.png"
import coursesImg from "../assets/courses.png"
import resourcesImg from "../assets/resources.png"
import eservicesImg from "../assets/e-services.png"
import { Link } from "react-router-dom";

function Home() {
    return <>
        <Navbar />
        <main className="main-content">
            <h1>Welcome to Community Hub<br />we are here to help you!!</h1>
            <div className="promotion">
                <div className="banner">
                    <p>
                        Looking for a job?<br />
                        Unsure about your next step in education or career?<br />
                        Feeling uncertain about what to do next?<br />

                        At Community Hub, we're here to guide you! Whether<br />
                        you're exploring job opportunities or searching for the<br />
                        right courses to help you land your dream job, we<br />
                        provide personalized advice and support to help you<br />
                        achieve your goals.
                    </p>
                </div>
                <img src={personImg} />
            </div>
            <div className="discovery">
                <h1>Begin your journey of discovery today.</h1>
                <div className="discover-items">
                    <div className="card">
                        <div className="card-title">
                            <h1> <Link to="/g121/consultation">Consultation</Link></h1>
                            <img src={consultationImg} />
                        </div>
                        <div className="card-body">
                            <p>
                                Unsure about your next steps?
                                Consult with our experts, share your concerns, and receive personalized advice to guide you forward.
                            </p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-title">
                            <h1> <Link to="/g121/courses">Courses</Link></h1>
                            <img src={coursesImg} />
                        </div>
                        <div className="card-body">
                            <p>
                                Not sure where to start?
                                Find out more and discover courses that spark your interest today!
                            </p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-title">
                            <h1> <Link to="/g121/resources">Resources</Link></h1>
                            <img src={resourcesImg} />
                        </div>
                        <div className="card-body">
                            <p>
                                Curious about what’s possible?
                                Explore related resources and success stories, and see how we’ve helped others achieve their goals!
                            </p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-title">
                            <h1> <Link to="/g121/">E-Services</Link></h1>
                            <img src={eservicesImg} />
                        </div>
                        <div className="card-body">
                            <p>
                                Check out your account to view your applied courses, certificates, attendance, and more!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <footer className="footer">
            <h1>Opportunity Hub</h1>
            <p>A place that empowers individuals by enhancing their skills to meet industry demands. Seek professional guidance on job opportunities that suit you!</p>
        </footer>
    </>
}

export default Home