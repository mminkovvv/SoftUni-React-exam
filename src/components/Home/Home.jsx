import "./Home.css";

export const Home = () => {
    return (
        <div className="home">
            <section className="features-section">
                <div className="feature">
                    <img src="../../../share.jpg" alt="Share you experience" />
                    <h3>Share you experience</h3>
                    <p>Share your experience with the gym, to help other people.</p>
                </div>
                <div className="feature">
                    <img src="../../../featured.jpg" alt="Expert Trainers" />
                    <h3>Expert Trainers</h3>
                    <p>Get guidance from certified trainers with years of experience.</p>
                </div>
                <div className="feature">
                    <img src="../../../group.jpg" alt="Group Classes" />
                    <h3>Group Classes</h3>
                    <p>Learn from other people.</p>
                </div>
            </section>

        </div>
    );
};