export default function SecondsCounter({ seconds }) {
    return (
        <div className="d-flex justify-content-center align-items-center bg-dark text-white p-4 rounded fs-1 gap-3">
            <i className="fa-solid fa-clock"></i>
            <h1>{seconds} seconds</h1>
        </div>
    );
}