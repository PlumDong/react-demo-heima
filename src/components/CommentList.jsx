import dayjs from 'dayjs';

const CommentList = (props) => {
    // 格式时间
    const formatTime = (time) => dayjs(time).format('YYYY/MM/DD HH:mm:ss');
    const newList = [...props.comments];
    if (props.active === 'default') {
        newList.sort((p, c) => c.id - p.id);
    }
    if (props.active === 'time') {
        newList.sort((p, c) => c.time - p.time);
    }

    return (
        <ul className="comm-list">
            {newList.map((item) => (
                <li className="comm-item" key={item.id}>
                    <div
                        className="avatar"
                        style={{backgroundImage: `url(${item.avatar})`}}
                    ></div>
                    <div className="info">
                        <p className={`name ${item.vip ? 'vip' : ''}`}>
                            {item.name}
                            {item.vip && (
                                <img
                                    alt=""
                                    src={
                                        'https://gw.alicdn.com/tfs/TB1c5JFbGSs3KVjSZPiXXcsiVXa-48-48.png'
                                    }
                                />
                            )}
                        </p>
                        <p className="time">
                            <span>{formatTime(item.time)}</span>
                            <span
                                className={`iconfont icon-collect${item.collect ? '-sel' : ''}`}
                            ></span>
                            {item.name === props.user.name && (
                                <span onClick={() => props.delComment(item.id)} className="del"> 删除 </span>
                            )}
                        </p>
                        <p>{item.content}</p>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default CommentList;