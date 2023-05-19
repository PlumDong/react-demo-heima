const CommentHead = (props) => {
    return (
        <h3 className="comm-head">
            热门评论<sub>({props.comments.length})</sub>
            <span
                onClick={() => props.setActive('default')}
                className={props.active === 'default' ? 'active' : ''}
            >
        默认
      </span>
            <span
                onClick={() => props.setActive('time')}
                className={props.active === 'time' ? 'active' : ''}
            >
        时间
      </span>
        </h3>
    );
};

export default CommentHead;