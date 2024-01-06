import { useNavigate } from "react-router-dom";

const BackButton = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(-1)
    }


    return ( 
     <div onClick={handleClick} className="btn-outline back-btn">
        Назад
     </div>
     );
}
 
export default BackButton;