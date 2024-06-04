import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const notify = (type, msg, time) => {
    if (type === 'success'){
        if (time){
          return toast.success(msg,{autoClose:time})
        }
        return toast.success(msg)
    }
    else if(type === 'warning'){
        return toast.warn(msg)
    }
}