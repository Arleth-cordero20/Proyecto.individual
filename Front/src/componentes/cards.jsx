import React from 'react'
function Cards() {
    return (
        <div className="card-group">
        <div className="card">
            <img src="https://www.eluniversal.com.co/binrepository/526x700/0c0/0d0/none/13704/YHIS/pelicula-megan_7200619_20230105135638.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
        </div>
        <div className="card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD-kX1XiNg0OhW3IBTwqTXjatAkvkdVR6hYs_cb8LO&s" className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
        </div>
        <div className="card">
            <img src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1561060629-51ebhJXUZqL.jpg?crop=1xw:1xh;center,top&resize=980:*" className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
        </div>
        </div>

    )
}
export default Cards;