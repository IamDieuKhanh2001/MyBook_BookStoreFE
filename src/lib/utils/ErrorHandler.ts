import { toast } from "react-toastify";

export const errorHandler = (e: any) => {
    console.log(e)
    const { status, data } = e.response;
    const errorStatusCode = status
    switch(errorStatusCode) {
        case 422: {
            if(data.errors) {
                data.errors.forEach((errorItem: IErrorValidate) => {
                    toast.error(errorItem.message);
                })
            }
            break;
        }
        case 400: {
            if(data) {
                toast.error(data.message);
            }
            break;
        }
        default: {
            toast.error("Something when wrong, please try again")
        }
    }
}