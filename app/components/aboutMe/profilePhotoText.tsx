import { useEffect, useState } from "react";

const ProfilePhotoText = () => {
    const [seconds, setSeconds] = useState(0);
    const [show, setShow] = useState(true);
    useEffect(() => {
        const intervalId = setInterval(() => {
            setSeconds((prevSeconds) => prevSeconds + 5);
            setShow(!show);
        }, 5000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <>
            {show ? (
                <p className="md:text-base lg:text-lg">Yup, that's me.</p>
            ) : (
                <p className="md:text-base lg:text-lg">
                    You're probably wondering how I ended up in this situation.
                </p>
            )}
        </>
    );
};
export default ProfilePhotoText;
