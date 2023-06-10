import {useDispatch, useSelector} from 'react-redux'
import classNames from "classnames";
import {changeActice} from "../../store/actions/channels";

export const Channel = () => {
    const dispatch = useDispatch()
    const { list, activeId } = useSelector(state => state.channels)

    return (
        <ul className="category">
            {list.map(item => (
                <li
                    className={classNames({
                        select: item.id === activeId
                    })}
                    onClick={() => dispatch(changeActice(item.id))}
                >
                    {item.name}
                </li>
            ))}
        </ul>
    )
}