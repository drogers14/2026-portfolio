import '../styling/App.scss';
import Timeline from './Timeline';

function Experience() {
    return (
        <div className="card">
            <div className="section-header">
                <h2>Experience</h2>
                <p className="section-subtitle">
                    Where I Build & Improve Systems
                </p>
            </div>
            <Timeline />
        </div>
    );
}

export default Experience;