import React from "react";
import { toast } from 'react-toastify';
import { deleteFunction } from '../../Service/CrudOperation';
import $ from 'jquery';
import NavBar from "../../Pages/Navbars/NavBar";
import MasterNav from "../../Pages/Navbars/MasterNav";
import Footer from "../../Pages/Footer";
import { Link } from "react-router-dom";



const SearchTableProgram = (props) => {
    $(() => {
        $(".DataTbl").DataTable();
    });

    const deleteUserDataById = (id, program_cd) => {
        const apiAndId = 'Program/Program/' + id

        if (window.confirm("Are You Sure Want To Delete")) {

            const returnStatus = deleteFunction(apiAndId);
            returnStatus.then((returnSt) => {
                if (returnSt === 200) {
                    toast.success("Id = " + id + "Program_cd = " + program_cd + " is Deleted", { position: toast.POSITION.TOP_CENTER });
                }
            })


        }




    };

    const updateUserDataById = (id) => {

        props.UpdateProgramDataFun('Program/Program?id=' + id);
    }

    const ViewProgramData = (id) => {
        props.ViewProgramBtnFunction('Program/Program?id=' + id);
    }
    return (
        <>
            <div id="page-wrapper" className="page-wrapper-cls">
                <div id="page-inner" className="mt-3 px-6 py-6">

                    <div className="clearfix"></div>
                    <div className="x_panel boxshadow">
                        <div className="form-group" id="">
                            <div className="form-group x_content">
                                <table className="display w-100 DataTbl">
                                    <thead>
                                        <tr>
                                          <th>Program code</th>
                                            <th>Program</th>
                                            <th>Remarks</th>
                                            <th>Edit</th>
                                            <th>View</th>
                                            <th>Delete</th>
                                       </tr>
                                    </thead>
                                    <tbody>

                                        {
                                            props.data.programresponses.map(
                                                propsUserData => (

                                                    <tr key={propsUserData.id}>
                                                        <td>{propsUserData.program_cd}</td>
                                                        <td>{propsUserData.program}</td>
                                                        <td>{propsUserData.remarks}</td>
                                                        
                                                        <td>
                                                            <a onClick={() => updateUserDataById(propsUserData.id)}>
                                                                <i class="fa fa-edit fa-2x"></i>
                                                            </a>
                                                        </td>
                                                        <td>
                                                            <a onClick={() => ViewProgramData(propsUserData.id)}>
                                                                <i class="fa fa-eye fa-2x"></i>
                                                            </a>
                                                        </td>
                                                        <td>
                                                            <a onClick={() => deleteUserDataById(propsUserData.id, propsUserData.program_cd)}>
                                                                <i class="fa fa-trash fa-2x"></i>
                                                            </a>
                                                        </td>
                                                    </tr>
                                                )
                                            )
                                        }


                                    </tbody> 
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
}
export default SearchTableProgram;

