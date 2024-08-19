import toast from "react-hot-toast"
const errorMessage = (message) => 
{
    toast.error(message, {
        position: "bottom-center",
        icon: "❌",
        style: {
          borderRadius: "10px",
          backgroundColor: "#ff4d4f",
          color: "#fff",
        },
      });
}


export default errorMessage;