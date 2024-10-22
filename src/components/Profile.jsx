import { personalInfo } from "./utils";
import "./profile.scss";

const Profile = () => {
    return(
        <div className="profile-card">
            <div className="profile">
                <h1 className="name">{personalInfo.name}</h1>
                <h3 className="job">{personalInfo.job}</h3>
                <h4 className="email">{personalInfo.email}</h4>
            </div>
            <div className="image-div">
                <img className="image" src={personalInfo.profile} alt="profile"/>
            </div>
        </div>
    );
}

export default Profile;