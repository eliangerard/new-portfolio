export const Presentation = () => {
    return (
        <div className="w-100 vh-100 d-flex align-items-center justify-content-center flex-column">
            <h1>Elian Gerard</h1>
            <b className="area">Frontend Developer</b>
            <button className="btnContactMe py-2 px-4 mt-3">Contact me</button>
            <div className="position-absolute bottom-0 mb-1">
                <svg style={{ transform: 'rotate(90deg)', fill: 'var(--green)', height: '3rem'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <polygon points="7.293 4.707 14.586 12 7.293 19.293 8.707 20.707 17.414 12 8.707 3.293 7.293 4.707" />
                </svg>

            </div>
        </div>

    )
}
