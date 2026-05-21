import React from "react";
import '../styling/signal.scss'

export default function SignalCard({
    label,
    title,
    subtitle,
    emoji,
    status,
    opt,
    ...props
}) {

    return (
        <div className="signal-card">

            <div className="signal-top">

                <div className="signal-status" style={{ color: props.statusColor }}>
                    <span className="live-dot"></span>

                    <p>{status}</p>
                </div>

                <span className="signal-emoji">
                    {emoji}
                </span>

            </div>

            <div className="signal-content">

                <p className="signal-label">
                    {label}
                </p>

                <h3>
                    {title}
                </h3>

                <span className="signal-subtitle">
                    {subtitle}
                </span>
                <span className="signal-subtitle">
                    {opt}
                </span>
            </div>

        </div>
    );
}