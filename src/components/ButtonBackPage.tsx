import { ContentButton } from "../styles/ButtonBackPage";
import { ArrowLeft } from "phosphor-react";

import { useNavigate } from "react-router-dom";

type ButtonBackPageProps = {
    redirect: string,
}

export default function ButtonBackPage({ redirect }: ButtonBackPageProps) {
    const navigate = useNavigate();

    const handleRedirectPage = () => {
        navigate(redirect);
    }

    return (
        <ContentButton>
            <ArrowLeft onClick={handleRedirectPage} weight="bold" />
        </ContentButton>
    )
}