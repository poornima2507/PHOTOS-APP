import React from 'react'
import NavBar from './NavBar'

const AddPhoto = () => {
  return (
    <div>
        <NavBar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Photo ID</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="row col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Photo Name</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="row col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Description</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="row col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Email ID</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="row col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Phone No</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="row col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Photo Date</label>
                        <input type="date" name="" id="" className="form-control" />
                    </div>
                    <div className="row col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Photo Size</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="row col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <button className="btn btn-success">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddPhoto