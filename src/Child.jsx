import { useContext } from "react"
import Context from './context'
const Child = () => {
    const count = useContext(Context)
    return <div>后代组件：{count}</div>
}

export default Child