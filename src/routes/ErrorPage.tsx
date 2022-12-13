import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error: any = useRouteError();
    console.error(error);

    return (
        <div>
            <h1>Oops!</h1>
            <p>Algo de errado ocorreu!</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
}