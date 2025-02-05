import Navbar from "../components/Navbar";
import './css/resources.css'

function Resources() {
    return <>
        <Navbar />
        <div className="journey">Home {'>'} Resources</div>
        <main className="main-content">

            <div className="resources-container">
                <div className="resource">
                    <h1>Access Online Portfolio</h1>
                    <p>We automatically add what courses you have done to your portfolio, so don't worry about it and let us handle it to your convenience.</p>
                    <a href="javascript:;">Open</a>
                </div>
                <div className="resource">
                    <h1>Help Center / FAQs</h1>
                    <p>Any questions? go here and find them!</p>
                    <a href="javascript:;">Learn More</a>
                </div>
                <div className="resource">
                    <h1> Community / Forum Links</h1>
                    <p>Find others to associate with</p>
                    <a href="javascript:;">Learn More</a>
                </div>
                <div className="resource">
                    <h1>Partnerships / Integrations</h1>
                    <p>We are in partnerships with RP to provide our courses among other things.</p>
                    <a href="javascript:;">Learn More</a>
                </div>
            </div>

        </main>
        <footer className="footer">
            <h1>Opportunity Hub</h1>
            <p>A place that empowers individuals by enhancing their skills to meet industry demands. Seek professional guidance on job opportunities that suit you!</p>
        </footer>
    </>
}

export default Resources