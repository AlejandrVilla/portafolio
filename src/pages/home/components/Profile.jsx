import { personalInfo } from "../../../utils/info";
import "./profile.scss";

const Profile = () => {
    return(
        <div className="profile-card">
            <div className="profile">
                <h1 className="name">{personalInfo.name}</h1>
                <h4 className="job">{personalInfo.job.join(', ')}</h4>
                <p className="email">{personalInfo.email}</p>
            </div>
            <div className="image-div">
                <img className="image" src={personalInfo.profile} alt="profile"/>
            </div>
        </div>
    );
}

export default Profile;