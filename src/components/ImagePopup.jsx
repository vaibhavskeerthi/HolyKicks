import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/dist/modal'; // Ensure correct Bootstrap JS is imported
import bb from '../newspaper.jpg';
import './ImagePopup.css'; // Custom styles for modal

export default function ImagePop() {
    return (
        <div>
            {/* Button to trigger the modal */}
            <button 
                type="button" 
                className="btn btn-link p-0" 
                data-bs-toggle="modal" 
                data-bs-target="#imageExample"
                style={{ cursor: 'pointer', textDecoration: 'underline', color: 'blue' }}
            >
                <img src={bb} alt="Image" style={{ width: '700px' }} />
               
            </button>

            {/* Modal */}
            <div className='modal fade custom-modal' id='imageExample' tabIndex="-1" aria-hidden="true">
                <div className='modal-dialog modal-dialog-centered'>
                    <div className='modal-content'>
                        <div className='modal-body'>
                            <button type="button" className='btn-close' data-bs-dismiss="modal" aria-label="Close"></button>

                            {/* Make the image inside the modal clickable */}
                            <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                                <img src={bb} className='d-block w-100' alt="Large Image" />
                            </a>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
