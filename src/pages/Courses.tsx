import Navbar from "../components/Navbar";
import './css/courses.css'
function Courses() {
    return <>
        <Navbar />
        <div className="journey">Home {'>'} Courses</div>
        <main className="main-content">
            <div className="container-xl">
                <div className="courses-filter">
                    <p>Filters</p>
                    <input type="radio" id="html" name="fav_language" value="HTML" />
                    <label htmlFor="html">Finance</label><br />
                    <input type="radio" id="css" name="fav_language" value="CSS" />
                    <label htmlFor="css">Programming</label><br />
                    <input type="radio" id="javascript" name="fav_language" value="JavaScript" />
                    <label htmlFor="javascript">Healthcare</label>
                </div>
                <div className="courses-search">
                    <input type="text" placeholder="Search.." />
                    <div className="courses-divider"></div>
                    <div className="courses-main">
                        <div className="courses-card">
                            <div className="courses-card-title">
                                Basic Finance
                            </div>
                            <div className="courses-card-desc">
                                In this course, we will teach you some of the very basic finance skills.
                            </div>
                            <div className="courses-card-button">
                                <button type="button">Learn More {'>'} </button>
                            </div>
                        </div>
                        <div className="courses-card">
                            <div className="courses-card-title">
                                Basic Programming
                            </div>
                            <div className="courses-card-desc">
                                In this course, we will teach you some of the very basic programming skills.
                            </div>
                            <div className="courses-card-button">
                                <button type="button">Learn More {'>'} </button>
                            </div>
                        </div>
                        <div className="courses-card">
                            <div className="courses-card-title">
                                Basic Healthcare
                            </div>
                            <div className="courses-card-desc">
                                In this course, we will teach you some of the very basic healthcare skills.
                            </div>
                            <div className="courses-card-button">
                                <button type="button">Learn More {'>'} </button>
                            </div>
                        </div>
                        <div className="courses-card">
                            <div className="courses-card-title">
                                Basic Marketing
                            </div>
                            <div className="courses-card-desc">
                                In this course, we will teach you some of the very basic Marketing skills.
                            </div>
                            <div className="courses-card-button">
                                <button type="button">Learn More {'>'} </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </main>
    </>
}

export default Courses