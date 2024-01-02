import axios from "axios";
import Swal from "sweetalert2";

export const getallApplications = () => async dispatch => {

    dispatch({ type: 'GET_APPLICATIONS_REQUEST' })


    try {

        const response = await axios.get('https://ccc-backend.onrender.com/api/jobapply/getallApplications')
        console.log(response)
        dispatch({ type: 'GET_APPLICATIONS_SUCCESS', payload: response.data })

    } catch (error) {

        dispatch({ type: 'GET_APPLICATIONS_FAILED', payload: error })
    }

}



export const JobApplication = (newApplicant) => async (dispatch) => {
    dispatch({ type: 'JOB_APPLICATION_SENDING' });

    try {
        const response = await axios.post('https://ccc-backend.onrender.com/api/jobapply/', newApplicant);

        console.log(response);
        dispatch({ type: 'JOB_APPLICATION_SUCCESS' });

        Swal.fire({
            icon: 'success',
            title: 'Application Submitted Successfully!',
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true
        }).then(() => {
            window.location.reload();
        });
    } catch (error) {
        dispatch({ type: 'JOB_APPLICATION_FAILED', payload: error });
    }
};


export const deleteApplicantAction = (ApplicantID) => async dispatch => {

    dispatch({ type: 'APPLICANT_DELETE_REQUEST' })


    try {
        const response = await axios.delete(`https://ccc-backend.onrender.com/api/jobapply/${ApplicantID}`)

        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })

        Toast.fire({
            icon: 'success',
            title: 'Applicant deleted successfully'
        })

        setTimeout(function () {
            window.location.reload('/admin/jobApplicantManage');
        }, 1500);



        console.log(response);
        dispatch({ type: 'DELETE_APPLICANT_SUCCESS' })




    } catch (error) {

        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })

        Toast.fire({
            icon: 'error',
            title: 'Unsuccessful Operation'
        })


        dispatch({ type: 'DELETE_OPERATION_FAILED', payload: error })
    }
}