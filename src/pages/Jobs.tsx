import Navbar from "../components/Navbar";
import './css/jobs.css'

function Jobs() {
    return <>
        <Navbar />
        <div className="journey">Home {'>'} Jobs</div>
        <main className="main-content">
            <div className="container-xl">
                <div className="jobs-filter">
                    <p>Filters</p>
                    <select name="employment" id="employmentTypes">
                        <option value="all">All Employment Types</option>
                        <option value="permanent">Permanent</option>
                        <option value="full-time">Full Time</option>
                        <option value="part-time">Part Time</option>
                    </select>
                </div>
                <div className="jobs-container">
                    <div className="job">
                        <h1>U3 INFOTECH PTE. LTD.</h1>
                        <p>Software Developer</p>
                        <button>Apply</button>
                    </div>
                    <div className="job">
                        <h1>UBS AG</h1>
                        <p>Software Engineer (Backend Developer)</p>
                        <button>Apply</button>
                    </div>
                    <div className="job">
                        <h1>LYNEER CORP (SINGAPORE) PTE. LTD.</h1>
                        <p>Software Developer</p>
                        <button>Apply</button>
                    </div>
                    <div className="job">
                        <h1>ST. CLAIR PTE. LTD.</h1>
                        <p>Software Engineer (Backend Developer)</p>
                        <button>Apply</button>
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

export default Jobs