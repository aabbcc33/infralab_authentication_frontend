import useAuthorization from "../utils/useAuthorization";

const Adminpage = () => {
    useAuthorization();

    return (
        <>
            <div>admin page</div>
        </>
    )
}

export default Adminpage;