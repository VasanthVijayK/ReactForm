import { useState } from "react";
import "./App.css";
import { RiArrowDropDownLine, RiMenu2Fill } from "react-icons/ri";
function App() {
    const [formData, setFormData] = useState({
      propertyName: "",
      propertyType: "",
      unit: "",
      propertyAddress: "",
      fileAttachment: null,
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
  
    const handleFileChange = (e) => {
      const file = e.target.files[0];
      setFormData((prevData) => ({
        ...prevData,
        fileAttachment: file,
      }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Form Data Submitted:", formData);
      alert("Form Submitted Successfully!");
    };
  return (
    <>
      <div className="container">
        <nav id="navbar">
          <div className="navdiv">
            <div className="navflex">
              <div className="logo">CB</div>
              <h3>Cloudbanking</h3>
            </div>
            <div className="navflex">
              <div className="Avatar">A</div>
              <h5 className="avaname">Vasanth</h5>
              <RiArrowDropDownLine size={30} />
            </div>
          </div>
          <div className="navicon">
            <RiMenu2Fill size={30} />
          </div>
        </nav>
        <div className="stepper-container">
          <div class="stepper">
            <div class="step completed">
              <div class="circle">1 </div>
              <p>Borrower Company Info</p>
            </div>
            <div class="step completed">
              <div class="circle">2</div>
              <p>Direct Info</p>
            </div>
            <div class="step active">
              <div class="circle">3</div>
              <p>Financial info</p>
            </div>
            <div class="step">
              <div class="circle">4</div>
              <p>Past Performance Details</p>
            </div>
            <div class="step">
              <div class="circle">5</div>
              <p>Document Upload</p>
            </div>
          </div>
        </div>

        <form className="form-container" onSubmit={handleSubmit}>
          <div className="form">
            <h2 className="heading">Borrower Company Info</h2>
            <div className="form-style">
              <div className="wrap_input">
                <div className="input-style">
                  <label htmlFor="propertyName">Property Name</label>
                  <input
                    type="text"
                    id="propertyName"
                    name="propertyName"
                    placeholder="Property Name"
                    value={formData.propertyName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="input-style">
                  <label htmlFor="propertyType">Property Type</label>
                  <select
                    name="propertyType"
                    id="propertyType"
                    value={formData.propertyType}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>
                      Property Type
                    </option>
                    {["Own House", "Rented"].map((e, i) => (
                      <option key={i} value={e}>
                        {e}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="input-style">
                  <label htmlFor="unit">Number of Unit</label>
                  <select
                    name="unit"
                    id="unit"
                    value={formData.unit}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>
                      Number of Unit
                    </option>
                    {[1, 2].map((e, i) => (
                      <option key={i} value={e}>
                        {e}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="input-style">
                <label htmlFor="propertyAddress">Property Address</label>
                <textarea
                required
                  id="propertyAddress"
                  name="propertyAddress"
                  rows="4"
                  cols="50"
                  value={formData.propertyAddress}
                  onChange={handleChange}
                />
              </div>

              <div className="input-style">
                <label htmlFor="fileAttachment">File Attachment</label>
                <label htmlFor="fileAttachment" className="file-upload">
                  <span>
                    📂 <span className="info">Browse</span>{" "}
                    <span className="hidedata">or Drag & Drop</span> to Attach a
                    File
                  </span>
                  <input
                    type="file"
                    id="fileAttachment"
                    name="fileAttachment"
                    onChange={handleFileChange}
                    required
                  />
                </label>
              </div>
            </div>
          </div>

          <div className="form-footer">
            <button type="button" onClick={() => alert("Going Back!")}>
              Back
            </button>
            <button type="submit">Continue</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
