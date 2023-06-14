
import img from "../../assets/fashe.jpg"
import sending from "../../assets/sendimg.jpg"
import { useState} from "react";


const Boy = (props) => {
    const [isSend,setIsSend] = useState(false)

    const handleClick = ()=> {
        setIsSend(!isSend)
    }

    return(
      <div>
        <img src={isSend?sending:img} alt=''/>
          <button onClick={handleClick}>{isSend?'停止发射':'发射爱心'}</button>
      </div>
  )
}
export default Boy;