
import Navbar from './Navbar'
import Footer from './Footer'

const Admin = () => {
    return (
        <>
            <Navbar />
            <h1>hwello</h1>
            <div class="container my-5">
                <div class="card border-0 shadow-lg author-card overflow-hidden">
                    <div class="row g-0">

                        {/* <!-- LEFT: TEXT --> */}
                        <div class="col-md-7 d-flex">
                            <div class="p-5 d-flex flex-column justify-content-center">
                                <h3 class="fw-bold mb-1">Aman Kapoor</h3>
                                <p class="text-muted mb-3">Professional Photographer • Portraits & Lifestyle</p>

                                <p class="mb-4" >
                                    Aman is a professional photographer focused on natural-light portraiture and
                                    visual storytelling. With over 8 years of experience, he brings creativity and
                                    calm to every shoot — turning moments into timeless memories.
                                </p>

                                <div class="d-flex gap-2 mb-4">
                                    <a class="btn btn-primary px-4" href="#">Hire me</a>
                                    <a class="btn btn-outline-dark px-4" href="#">Portfolio</a>
                                </div>

                                <p class="text-muted small mb-1">
                                    📧 aman@example.com
                                </p>
                                <p class="text-muted small mb-1">
                                    📞 +91 98765 43210
                                </p>
                                <p class="text-muted small">
                                    📍 Mumbai, India
                                </p>
                            </div>
                        </div>

                        {/* <!-- RIGHT: IMAGE --> */}
                        <div class="col-md-5">
                            <div class="h-100 w-100">
                                <img
                                    src="https://images.pexels.com/photos/3379933/pexels-photo-3379933.jpeg"
                                    class="w-100 h-100"
                                
                                    alt="Photographer"
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Admin