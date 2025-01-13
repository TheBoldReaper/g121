import Navbar from "../components/Navbar";
import './css/consultation.css'
import consultationImg from '../assets/consultationperson.png'

function Consultation() {
    return <>
        <Navbar />
        <div className="journey">Home {'>'} Consultation</div>
        <div className="consultation-banner">
            <div className="container-xl  ">
                <div className="consultation-heading">
                    <p>Need Expert Help?<br />Get Profressional<br />Assistance Here!</p>
                    <button type="button" className="consultation-button">Get Help</button>
                </div>
                <img src={consultationImg} />
            </div>
        </div>
        <main className="main-content">

        </main>
    </>
}

export default Consultation