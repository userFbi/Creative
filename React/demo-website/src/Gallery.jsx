import React from 'react'

const Gallery = () => {
    return (
        <section id="gallery" className="py-5">
            <div className="container">
                <h2 className="text-center mb-4">Our Work in Action</h2>
                <div className="row g-3">
                    <div className="col-md-4">
                        <img
                            src="https://picsum.photos/600/400?random=1"
                            className="gallery-img rounded"
                            alt="Gallery Image 1"
                        />
                    </div>
                    <div className="col-md-4">
                        <img
                            src="https://picsum.photos/600/400?random=2"
                            className="gallery-img rounded"
                            alt="Gallery Image 2"
                        />
                    </div>
                    <div className="col-md-4">
                        <img
                            src="https://picsum.photos/600/400?random=3"
                            className="gallery-img rounded"
                            alt="Gallery Image 3"
                        />
                    </div>
                    <div className="col-md-4">
                        <img
                            src="https://picsum.photos/600/400?random=4"
                            className="gallery-img rounded"
                            alt="Gallery Image 4"
                        />
                    </div>
                    <div className="col-md-4">
                        <img
                            src="https://picsum.photos/600/400?random=5"
                            className="gallery-img rounded"
                            alt="Gallery Image 5"
                        />
                    </div>
                    <div className="col-md-4">
                        <img
                            src="https://picsum.photos/600/400?random=6"
                            className="gallery-img rounded"
                            alt="Gallery Image 6"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Gallery