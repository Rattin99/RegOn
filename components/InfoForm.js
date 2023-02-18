

const InfoForm = ({submitHandler}) => {
    return <>
        <form className="infoForm" onSubmit={submitHandler} action="submit"> 
        <div className="container">
          <label htmlFor ="name">name</label>
          <input name="name" type='text' required />
        </div>
        <div className="container">
          <label htmlFor ="regNo" >registration number</label>
          <input name="regNo" type='number' required/>
        </div>
        
        <div className="container">
          <label htmlFor = 'dept'>department</label>
          <select  name="dept" required>
            <option value="Computer Science and Engineering"> Computer Science and Engineering</option>
            <option value="Chemical Engineering & Polymer Science">Chemical Engineering & Polymer Science</option>
            <option value="Architecture">Architecture</option>
            <option value="Forestry & Environmental Science">Forestry & Environmental Science</option>
            <option value="Mechanical Engineering">Mechanical Engineering</option>
            <option value="Petroleum and Mining Engineering">Petroleum and Mining Engineering</option>
            <option value="Industrial and Production Engineering">Industrial and Production Engineering</option>
            <option value="Food Engineering & Tea Technology">Food Engineering & Tea Technology</option>
            <option value="Electrical & Electronic Engineering">Electrical & Electronic Engineering</option>
            <option value="Civil & Environmental Engineering">Civil & Environmental Engineering</option>
            <option value="Biochemistry and Molecular Biology">Biochemistry and Molecular Biology</option>
            <option value="Genetic Engineering & Biotechnology">Genetic Engineering & Biotechnology</option>
            <option value="Business Administration">Business Administration</option>
            <option value="Chemistry">Chemistry</option>
            <option value="Geography and Environment">Geography and Environment</option>
            <option value="Mathematics">Mathematics</option>
            <option value="Physics">Physics</option>
            <option value="Statistics">Statistics</option>
            <option value="Bangla">Bangla</option>
            <option value="Economics">Economics</option>
            <option value="English">English</option>
            <option value="Political Studies">Political Studies</option>
            <option value="Public Administration">Public Administration</option>
            <option value="Social Work">Social Work</option>
            <option value="Sociology">Sociology</option>
            <option value="Oceanography">Oceanography</option>
            <option value="Software Engineering">Software Engineering</option>
            <option value="Anthropology">Anthropology</option>
          </select>
        </div>

        <div className="container">
          <label htmlFor= 'phone'> phone no</label>
          <input name="phone" type='number'  required/>
        </div>
        
        <div className="container">
          <label htmlFor ='email'> email</label>
          <input name="email" type='email'  required/>
        </div>

       <div className="container">
          <fieldset name="tshirt" className="fields" required>
              <legend>Tshirt size:</legend>
              <div>
                <input type="radio" id="S" name="drone" value="S"/>
                <label className="radiolabel" htmlFor="S">S</label>
              </div>

              <div>
                <input type="radio" id="M" name="drone" value="M" />
                <label className="radiolabel"  htmlFor="M">M</label>
              </div>

              <div>
                <input type="radio" id="L" name="drone" value="L"/>
                <label className="radiolabel"  htmlFor="L">L</label>
              </div>


              <div>
                <input type="radio" id="XL" name="drone" value="XL" />
                <label className="radiolabel"  htmlFor="XL">XL</label>
              </div>

              <div>
                <input type="radio" id="XXL" name="drone" value="XXL" />
                <label className="radiolabel"  htmlFor="XXL">XXL</label>
              </div>

          </fieldset>
       </div>

        <button type="submit">submit</button>
      </form>

    </>
}


export default InfoForm;