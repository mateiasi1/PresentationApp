import { FC } from "react";

type Props = {
    technologyName: string;
};

const CardTechnology: FC<Props> = ({ technologyName }) => {
    return (
        <>
            <div
                className="text-grayColor flex flex-col justify-center bg-[color:white] p-1 w-max"
                style={{ borderRadius: ".5rem" }}
            >
                {technologyName}
            </div>
        </>
    );
};
export default CardTechnology;
