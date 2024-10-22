const OffCanvasButton = props => {
    return (
        <div className='text-center my-3'>
            <button className='btn primary-color btn-dark text-light btn-gradient text-center' type='button' data-bs-toggle='offcanvas' data-bs-target = '#offCanvasForm' aria-controls='offCanvasBottom'>
                Open
            </button>
        </div>
    );
}
export default OffCanvasButton;