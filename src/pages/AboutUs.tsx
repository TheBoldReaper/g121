import Navbar from "../components/Navbar";
import './css/aboutus.css'
import upskillYourselfImg from '../assets/upskillyourself.png'
import stayPreparedImg from '../assets/stayprepared.png'

function AboutUs() {
    return <>
        <Navbar />
        <div className="journey">Home {'>'} About Us</div>
        <div className="aboutus-banner">
            <div className="container-xl">
                <h1>What is Opportunity Hub?</h1>
                <p>Opportunity Hub is a platform dedicated to empowering lower-income families by enhancing their skills to align with industry demands. Individuals can seek guidance from our professionals or explore job opportunities that match their interests and qualifications.</p>
            </div>
        </div>
        <main className="main-content">
            <h2 className="aboutus-heading">For your Career Development and Lifelong learning needs</h2>
            <div className="aboutus-info">
                <div className="info">
                    <div className="info-title">
                        <p>Upskill yourself</p>
                    </div>
                    <div className="info-description">
                        <img src={upskillYourselfImg} />
                        <div className="info-info">
                            <h1>Course Directory</h1>
                            <ul>
                                <li>Find suitable courses</li>
                                <br />
                                <li>Use SkillsFuture Credit to pay for your courses</li>
                            </ul>
                            <a>Search courses</a>
                        </div>
                    </div>
                </div>
                <div className="info">
                    <div className="info-title">
                        <p>Stay Prepared</p>
                    </div>
                    <div className="info-description">
                        <img src={stayPreparedImg} />
                        <div className="info-info">
                            <h1>Career Resource</h1>
                            <ul>
                                <li>Get tips and advice in career planning and development</li>
                                <br />
                                <li>Get inspired by our Singaporean stories</li>
                            </ul>
                            <a>More information</a>
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

export default AboutUs