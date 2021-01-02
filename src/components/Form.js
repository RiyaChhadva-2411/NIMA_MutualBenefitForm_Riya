import React from 'react';
import './Form.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class Form extends React.Component{
    constructor(props){
        super(props);
        this.state={
            fname: "",
            mname: "",
            lname: "",
            gender:null,
            doj: "",
            altNum: "",
            address: "",
            acadQual: "",
            examBody: "",
            yearPass: "",
            regNum: "",
            dataReg: "",
            nameOfBoard: "",
            practitioner:null,
            scientificPub: null,
            titleOfPaper: "",
            nimaBefore: null,
            branch: null,
            reasonDiscontinue:"" 
        };
        this.handleChange= this.handleChange.bind(this);
        this.handleSubmit= this.handleSubmit.bind(this);
    }
    handleChange(e){
        this.setState({[e.target.name]: e.target.value});
        console.log(this.state);
    }
    handleSubmit(e){
        e.preventDefault();
        const {altNum}=this.state.altNum;
        if(altNum==="")
        {
            document.getElementById("messages").innerHTML="**PLEASE FILL MOBILE NUMBER";
            return false;
        }
        if(isNaN(altNum))
        {
            document.getElementById("messages").innerHTML="**ENTER NUMERIC VALUES ONLY";
            return false;
        }
        if(altNum.length<10)
        {
            document.getElementById("messages").innerHTML="**MOBILE NUMBER MUST HAVE 10 DIGITS ONLY";
            return false;
        }
        if(altNum.length>10)
        {
            document.getElementById("messages").innerHTM="**MOBILE NUMBER MUST HAVE 10 DIGITS ONLY";
            return false;
        }
        const {fname}= this.state.fname;
        const {mname}= this.state.mname;
        const {lname}= this.state.lname;
        if(!isNaN(fname))
        {
            document.getElementById("messages").innerHTML="**ENTER CHARACTER VALUES ONLY"
            return false;
        }
        if(!isNaN(mname))
        {
            document.getElementById("messages").innerHTML="**ENTER CHARACTER VALUES ONLY"
            return false;
        }
        if(!isNaN(lname))
        {
            document.getElementById("messages").innerHTML="**ENTER CHARACTER VALUES ONLY";
            return false;
        }
        console.log(this.state);
    }
    render(){
        return(
            <div className="container-fluid Form__name_container">
            <div className="row">
                <div className="col-sm-2 col-xs-12"><div className="Form__dot"></div></div>
                <div className="col-sm-10 col-xs-12 Form__mainheading">
                <div className="Form__heading">NIMA Mutual Benefits Scheme Application Form</div>
                <div className="Form__subheading">Claim form for Fraternity Contribution</div>
                <div className="Form__address">4140 Parker Rd. Allentown, New Mexico 31134</div></div>
            </div>
            
            
            
                <form>
                        {/*First Group*/}
                        <div className="Form__dmrow">Deceased Member Details</div>
                        {/*First row of first group*/}
                        <div className="form-row Form__dm">
                           <div className="col-sm-2 col-xs-12">
                               <input type="text" className="form-control" title="*ENTER CHARACTER VALUES ONLY" pattern="[A-Za-z]{1,32}" name="fname" id="fname" placeholder=" " required/>
                               <span>First Name</span>
                            </div>
                            <div className="col-sm-2 col-xs-12">
                                <input type="text" className="form-control" title="*ENTER CHARACTER VALUES ONLY" pattern="[A-Za-z]{1,32}" name="mname" id="mname" placeholder=" " required />
                                <span>Middle Name</span>
                            </div>
                            <div className="col-sm-2 col-xs-12">
                                <input type="text" className="form-control" title="*ENTER CHARACTER VALUES ONLY" pattern="[A-Za-z]{1,32}" name="lname" id="lname" placeholder=" " required />
                                <span>Last Name</span>
                            </div>
                            <div className="col-sm-2 col-xs-12">
                                <select className="form-control" id="M.B.S.Reg.Number">
                                    <option value="" disabled selected hidden>M.B.S.Reg.Number</option>
                                    <option value="0-10" >0-10</option>
                                    <option value="11-20">11-20</option>
                                    <option value="21-30">21-30</option>
                                    <option value="31-40">31-40</option>
                                    <option value="41-50">41-50</option>
                                    <option value="51-60">51-60</option>
                                    <option value="61-70">61-70</option>
                               </select>
                            </div>
                            <div className="col-sm-2 col-xs-12">
                                <input type="date" name="doj" className="form-control" placeholder=" " required />
                                <span>Date of Joining Scheme</span>
                            </div>
                            <div className="col-sm-2 col-xs-12">
                                <select className="form-control" id="NIMA Local Branch">
                                <option value="" disabled selected hidden>NIMA Local Branch</option>
                                <option value="Hyderabad">Hyderabad</option>
                                <option value="Bangalore">Bangalore</option>
                                <option value="Kolhapur">Kolhapur</option>
                                <option value="Surat">Surat</option>
                                <option value="Pune">Pune</option>
                                </select>
                            </div>
                        </div>
                        
                        {/*Second row Of first group*/}
                        <div className="form-row Form__dm">
                            <div className="col-sm-2 col-xs-12">
                                <select className="form-control" id="State">
                                <option value="" disabled selected hidden>State</option>
                                <option value="Maharashtra">Maharashtra</option>
                                <option value="Gujarat">Gujarat</option>
                                <option value="Rajasthan">Rajasthan</option>
                                <option value="Uttar Pradesh">Uttar Pradesh</option>
                                <option value="Goa">Goa</option>
                                </select>
                            </div>
                            <div className="col-sm-2 col-xs-12">
                                <input type="tel" className="form-control" placeholder=" " required/>
                                <span>L.M. Number</span>
                            </div>
                        </div>
    
                        {/*Second Group*/}
                        <div className="Form__dmrow">Nominee Details</div>
                        
                        {/*First row of Second Group*/}
                        <div className="form-row Form__dm">
                            <div className="col-sm-2 col-xs-12">
                                <input type="text" name="fname" title="*ENTER CHARACTER VALUES ONLY" pattern="[A-Za-z]{1,32}" className="form-control" placeholder=" " required />
                                <span>First Name</span>
                            </div>
                            <div className="col-sm-2 col-xs-12">
                                <input type="text" name="mname" title="*ENTER CHARACTER VALUES ONLY" pattern="[A-Za-z]{1,32}" className="form-control" placeholder=" " required/>
                                <span>Middle Name</span>
                            </div>
                            <div className="col-sm-2 col-xs-12">
                                <input type="text" name="lname" title="*ENTER CHARACTER VALUES ONLY" pattern="[A-Za-z]{1,32}" className="form-control" placeholder=" " required />
                                <span>Last Name</span>
                            </div>
                            <div className="col-sm-2 col-xs-12">
                                <input type="text" name="des-relation" title="*ENTER CHARACTER VALUES ONLY" pattern="[A-Za-z]{1,32}"  className="form-control" placeholder=" " required />
                                <span>Relation With Deceased</span>
                            </div>
                            <div className="col-sm-2 col-xs-12">
                                <input type="tel" name="altNum" title="*NUMBER SHOULD BE OF 10 DIGITS ONLY" pattern="[1-9]{1}[0-9]{9}" className="form-control" placeholder=" " required />
                                <span>Mobile Number</span>
                            </div>
                            <div className="col-sm-2 col-xs-12">
                                <input type="tel" name="altNum" title="*NUMBER SHOULD BE OF 10 DIGITS ONLY" pattern="[1-9]{1}[0-9]{9}" className="form-control" placeholder=" " required/>
                                <span>Alternate Number</span>
                            </div>
                        </div>
    
                        <div className="form-row Form__dm">
                            <div className="col-sm-10 col-xs-12">
                                <textarea  name="address" className="form-control address" aria-label="With textarea" placeholder=" "></textarea>
                                <span>Address</span>
                            </div>
                            <div className="col-sm-2 col-xs-12">
                            <label for="pincode" className="Form__pincode">PIN code:</label>
                            <input name="pinCode" type="text" title="*PIN CODE SHOULD BE OF 6 DIGITS" pattern="[0-9]{6}" maxlength="6" minlength="6" className="form-control" required/>
                            </div>
                        </div>
    
                        {/*Third Group*/}
                        <div className="Form__dmrow">Claimant Details</div>
                        
                        {/*First row of Third Group*/}
                        <div className="form-row Form__dm">
                            <div className="col-sm-2 col-xs-12">
                                <input type="text" className="form-control" title="*ENTER CHARACTER VALUES ONLY" pattern="[A-Za-z]{1,32}" name="fname" id="fname" placeholder=" " required/>
                                <span>First Name</span>
                            </div>
                            <div className="col-sm-2 col-xs-12">
                                <input type="text" className="form-control" title="*ENTER CHARACTER VALUES ONLY" pattern="[A-Za-z]{1,32}" name="mname" id="mname" placeholder=" " required/>
                                <span>Middle Name</span>
                            </div>
                            <div className="col-sm-2 col-xs-12">
                                <input type="text" className="form-control" title="*ENTER CHARACTER VALUES ONLY" pattern="[A-Za-z]{1,32}" name="lname" id="lname" placeholder=" " required />
                                <span>Last Name</span>
                            </div>
                            <div className="col-sm-2 col-xs-12">
                                <input type="text" name="des-relation" title="*ENTER CHARACTER VALUES ONLY" pattern="[A-Za-z]{1,32}" className="form-control" placeholder=" " required/>
                                <span>Relation With Deceased</span>
                            </div>
                            <div className="col-sm-2 col-xs-12">
                                <input type="tel" name="altNum" title="*NUMBER SHOULD BE OF 10 DIGITS ONLY" pattern="[1-9]{1}[0-9]{9}" className="form-control" placeholder=" " required/>
                                <span>Mobile Number</span>
                            </div>
                            <div className="col-sm-2 col-xs-12">
                                <input type="tel" name="altNum" title="*NUMBER SHOULD BE OF 10 DIGITS ONLY" pattern="[1-9]{1}[0-9]{9}" className="form-control" placeholder=" " required/>
                                <span>Alternate Number</span>
                            </div>
                        </div>
    
                        {/*Second row of Third Group*/}
                        <div className="form-row Form__dm">
                            <div className="col-sm-10 col-xs-12">
                            <textarea className="form-control address" name="address" aria-label="With textarea" placeholder=" "></textarea>
                                <span>Address</span>
                            </div>
                            <div className="col-sm-2 col-xs-12">
                            <label for="pincode" className="Form__pincode">PIN code:</label>
                            <input type="text" name="pinCode" title="* PIN CODE SHOULD OF 6 DIGITS" pattern="[0-9]{6}" maxlength="6" minlength="6" className="form-control" />
                            </div>
                        </div>
    
                        {/*Third row of Third Group*/}
                        <div className="form-row Form__dm">
                        <div className="col-sm-2 col-xs-12">
                                <select className="form-control" id="Town/District">
                                <option value="" disabled selected hidden>Town/District</option>
                                <option value="Chennai">Chennai</option>
                                <option value="Mumbai">Mumbai</option>
                                <option value="Pune">Pune</option>
                                <option value="Kolkata">Kolkata</option>
                                <option value="Ahemdabad">Ahemdabad</option>
                                <option value="Jaipur">Jaipur</option>
                                <option value="Bhopal">Bhopal</option>
                                <option value="Chandigarh">Chandigarh</option>
                                </select>
                            </div>
                            <div className="col-sm-2 col-xs-12">
                                <input type="text" title="*ENTER CHARACTER VALUES ONLY" pattern="[A-Za-z]{1,32}" className="form-control" placeholder=" " required/>
                                <span>State</span>
                            </div>
                        </div>
                        <div className="Form__form-submit">
                            <button className="btn Form__ViewButton">View form</button>
                            <button type="submit" className="btn btn-success Form__SubmitButton">Submit Form</button>
                        </div>
    
                    </form>
            </div>
        );
    }
    
}
export default Form;