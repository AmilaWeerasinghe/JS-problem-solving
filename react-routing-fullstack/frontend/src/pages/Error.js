import { useRouteError } from "react-router-dom";
import PageContent from "../components/PageContent";

const Error = () => {
    const error = useRouteError();

    let title = 'An Error Occured!';
    let message = 'Something went wrong';

    if(error.status === 500) {
        message = error.data.message;
    }

    if (error.status === 400) {
        title = 'Not found'
        message = 'Could not found resource or page'
    }
    return <h1>
        <PageContent title={title}>
            <p>{message}</p>
        </PageContent>
    </h1>
}

export default Error;