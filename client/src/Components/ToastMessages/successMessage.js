import toast from "react-hot-toast"
const successMessage = (message) => {
    toast.success(message, {
        position: "bottom-center",
        width: "100px",

        icon: "✅",
        style: {
            borderRadius: "10px",
        },
    });
}


export default successMessage;