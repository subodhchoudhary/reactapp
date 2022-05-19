﻿import React, { useState } from "react";
import { toast } from 'react-toastify';
import { UpdateUserDataFunction } from '../../Service/CrudOperation';
import NavBar from "../../Pages/Navbars/NavBar";
import MasterNav from "../../Pages/Navbars/MasterNav";
import Footer from "../../Pages/Footer";
import { Link } from "react-router-dom";



const EditAgent = (props) => {

    //console.log(setPostUserData);
    const [postUserData, setPostUserData] = useState({
        id: props.data.agentTypeResponses[0].id,
        agent_type_cd: props.data.agentTypeResponses[0].agent_type_cd,
        agent_type: props.data.agentTypeResponses[0].agent_type,
        agent_rank: props.data.agentTypeResponses[0].agent_rank,
        description: props.data.agentTypeResponses[0].description,
        actv_ind :1,

    });

    const { id, agent_type_cd, agent_type, agent_rank, description, actv_ind } = postUserData;

    const onIputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setPostUserData({ ...postUserData, [name]: name === 'agent_rank' ? parseInt(value) : value });

    }
   

    const updateUserData = () => {

        const apiAndUrl = 'AgentType/AgentType/' + id;

        const updateStatus = UpdateUserDataFunction(apiAndUrl, postUserData);
        updateStatus.then((returnSt) => {
            if (returnSt === 200) {
                toast.success("Id = " + id + "Agent Type Code = " + agent_type_cd + " is Successfully Updated", { position: toast.POSITION.TOP_CENTER });
                props.UpdatePageBackBtn();
            }
            else {
                toast.error("Invalid Enrty", { position: toast.POSITION.TOP_CENTER });
            }
        })
    }

    return (
        <>

            <div id="page-wrapper" className="page-wrapper-cls">
                <div id="page-inner" className="mt-3 px-6 py-6">
                    <div className="x_panel boxshadow">
                        <div className="x_title">
                            <div className="row">
                                <div className="top-head">
                                    <div className="col-md-12 col-sm-12 col-xs-12">
                                        <div className="slope">
                                            <h2>Customer Details</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                        <div className="x_content">
                            <br />

                            <div className="row form-group">
                                <div className="col-md-2">
                                    <label className="control-label from-txt">
                                        Unit_Type_Cd:<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" name='agent_type_cd' value={agent_type_cd} readOnly />
                                </div>
                                <div className="col-md-1"></div>
                                <div className="col-md-2">
                                    <label className="control-label from-txt">
                                        Unit_Type:<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" name='agent_type' value={agent_type} onChange={onIputChange} />
                                </div>
                                <div className="col-md-1"></div>
                            </div>
                            <div className="row form-group">
                                <div className="col-md-2">
                                    <label className="control-label from-txt">Unit_Rank:</label>
                                </div>
                                <div className="col-md-3">
                                    <input type="number" className="form-control" name='agent_rank' value={agent_rank} onChange={onIputChange} />
                                </div>
                                <div className="col-md-1"></div>
                                <div className="col-md-2">
                                    <label className="control-label from-txt">Description:</label>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" name='description' value={description} onChange={onIputChange} />
                                </div>


                                <div className="row">
                                    <div className="col-md-12 text-center">
                                        <a onClick={updateUserData} className="expdbutton btnSearch mr-2" > Update </a>
                                        <a className="expdbutton btnback mr-2" onClick={props.UpdatePageBackBtn} >Back</a>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>


        </>
    );
};

export default EditAgent;
