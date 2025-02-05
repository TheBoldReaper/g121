import Navbar from "../components/Navbar";
import './css/consultation.css'
import consultationImg from '../assets/consultationperson.png'
import { useEffect } from 'react';
function Consultation() {

    useEffect(() => {
        let modal: HTMLDialogElement = (document.getElementById("modal") as HTMLDialogElement);
        modal.addEventListener("click", e => {
            const dialogDimensions = modal.getBoundingClientRect()
            if (
                e.clientX < dialogDimensions.left ||
                e.clientX > dialogDimensions.right ||
                e.clientY < dialogDimensions.top ||
                e.clientY > dialogDimensions.bottom
            ) {
                modal.close();
            }
        })
    }, [])
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
        <main >
            <div className="consultation-content">
                <div className="consultation-contact-us">
                    <h1>contact us</h1>
                    <p>Contact our profressional to recieve personalized advice to guide you forward!</p>
                </div>
                <div className="consultation-email-container">
                    <div className="consultation-item1">
                        <h1>Name</h1>
                        <input type="text" name="name" placeholder="Your Name" />
                    </div>
                    <div className="consultation-item2">
                        <h1>Email</h1>
                        <input type="text" name="email" placeholder="Your Email" />
                    </div>
                    <div className="consultation-item3">
                        <h1>Phone number</h1>
                        <input type="text" name="number" placeholder="Your Number" />
                    </div>
                    <div className="consultation-item4">
                        <h1>Best time to contact you</h1>

                        <input
                            id="appointment-time"
                            type="time"
                            name="appointment-time"
                            min="09:00" max="18:00" />
                    </div>
                    <div className="consultation-item5">
                        <h1>Describe the challenges you faced</h1>
                        <textarea id="challenges" name="challenges" />
                    </div>
                    <div className="consultation-item6">
                        <div>
                            <input type="checkbox" id="consent" name="consent" />
                            <label htmlFor="consent">I consent to my contact being stored.</label>
                        </div>
                        <button onClick={() => openDialog()}>Submit</button>
                    </div>

                </div>
            </div>
        </main>
        <footer className="footer">
            <h1>Opportunity Hub</h1>
            <p>A place that empowers individuals by enhancing their skills to meet industry demands. Seek professional guidance on job opportunities that suit you!</p>
        </footer>
        <dialog id="modal">
            <h1>Thank you for sending a request!</h1>
            <h1>The professional will contact you as soon as<br />possible after looking at your concern!</h1>
            {/* <button onClick={() => closeDialog()} autoFocus>Close</button> */}
        </dialog>
    </>
}



function openDialog() {
    let modal: HTMLDialogElement = (document.getElementById("modal") as HTMLDialogElement);
    modal.showModal()
}

// function closeDialog() {
//     let modal: HTMLDialogElement = (document.getElementById("modal") as HTMLDialogElement);
//     modal.close()
// }


export default Consultation