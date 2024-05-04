import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen space-y-5">
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold">404</h1>
            <p className="text-lg md:text-xl lg:text-2xl font-semibold">Page not found</p>
            <Link to='/'><button className="btn btn-ghost">Go back Home</button></Link>
        </div>
    );
};

export default ErrorPage;