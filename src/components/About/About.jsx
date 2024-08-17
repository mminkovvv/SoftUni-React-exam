import "./About.css";

export const About = () => {
    return (
        <div className="about-page">
            <div className="about-page-content">
                <h2>
                    How do you explain fitness?
                </h2>
                <p>Experts define physical fitness as “one's ability to execute daily activities with optimal performance,
                    endurance, and strength with the management of disease, fatigue, and stress and reduced sedentary behavior.”
                    This description goes beyond being able to run quickly or lift heavy weights.</p>
                <h2>
                    Why is fitness important?
                </h2>
                <p>
                    Physical activity or exercise can improve your health and reduce the risk of developing several diseases
                    like type 2 diabetes, cancer and cardiovascular disease.
                    Physical activity and exercise can have immediate and long-term health benefits.
                    Most importantly, regular activity can improve your quality of life.
                </p>
                <h2>
                    How to be fit and healthy?
                </h2>
                <p>
                    Be physically active for 30 minutes most days of the week. Break this up into three 10-minute sessions when pressed for time.
                    Healthy movement may include walking, sports, dancing, yoga, running or other activities you enjoy.
                    Eat a well-balanced, low-fat diet with lots of fruits, vegetables and whole grains.
                </p>
            </div>
            <img src="../../../logo.jpg" />
        </div>
    );
};