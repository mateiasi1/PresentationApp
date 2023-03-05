import profilePhoto from "../../../public/images/my-journey.jpeg";
import ProfilePhotoText from "./profilePhotoText";

const ProfilePhoto = () => {
    return (
        <div className="flex flex-col items-center pt-10">
            <img
                src={profilePhoto}
                alt="..."
                className="w-6/12"
                style={{ borderRadius: 20 }}
            />
            <ProfilePhotoText />
        </div>
    );
};

export default ProfilePhoto;
