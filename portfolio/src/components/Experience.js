import '../styling/App.scss';
import Timeline from './Timeline';

function Experience() {
    return (
        <div className="hero">
            <div className="section-header">
                <h1 className="title">Experience</h1>
                <p className="section-subtitle">
                    Where I Build & Improve Systems
                </p>
            </div>
            <Timeline />
        </div>
    );
}

export default Experience;