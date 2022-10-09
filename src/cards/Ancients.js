import React from 'react';

const Peristiwa = (props) => {
    if (props.id === "1") {
        return (
            <div className="w3-card-4">
                <img src="/images/ritual-1.jpg" alt="Ritual Dinasti Shang" width="100%" />
                <div className="w3-container w3-center">
                    <p>Ritual Dinasti Shang</p>
                </div>
            </div>
        );
    }
    return (
        <div className="w3-container w3-red">
            <p>Tidak ada card untuk id {props.id}</p>
        </div>
    );
}

export default Peristiwa;

