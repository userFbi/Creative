import React from 'react'

const AboutUs = () => {
    return (

        <section className="about-container">
            <div className="about-text">
                <h1>Experience Our Unique Approach</h1>
                <p>
                    Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
                    Vestibulum id ligula porta felis euismod semper. <br />
                    Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Aenean
                    eu leo quam. Pellentesque ornare sem lacinia quam venenatis
                    vestibulum. <br />
                    Curabitur blandit tempus porttitor.
                </p>
            </div>

            <div class="about-imgs">
                <img
                    src="https://i.pinimg.com/1200x/16/eb/fd/16ebfd774cdbb45742c206d3284ef8a2.jpg"
                    alt="Restaurant 1"
                />
                <img
                    src="https://i.pinimg.com/1200x/d6/34/11/d63411ffd96856d1fd6d1b5a30b8d3f6.jpg"
                    alt="Restaurant 1"
                />
                <img
                    src="https://i.pinimg.com/1200x/3d/59/6a/3d596ae8413960448f47950157a09dcb.jpg"
                    alt="Restaurant 1"
                />
            </div>
        </section>
    )
}

export default AboutUs