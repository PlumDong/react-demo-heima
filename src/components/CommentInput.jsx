import React, {Component} from 'react';

export default class CommentInput extends Component {
    state = {
        content: '',
    };
    setContent = (e) => {
        const value = e.target.value.trim();
        if (value.length <= 100) {
            this.setState({content: value});
        }
    };
    handleClick = () => {
        this.props.addComment(this.state.content)
        this.setState({content: ''})
    }

    render() {
        return (
            <>
                <h3 className="comm-head">评论</h3>
                <div className="comm-input">
          <textarea
              value={this.state.content}
              onChange={this.setContent}
              placeholder="爱发评论的人，运气都很棒"
          ></textarea>
                    <div className="foot">
                        <div className="word">{this.state.content.length}/100</div>
                        <div className="btn" onKeyDown={this.handleClick} onClick={this.handleClick}>发表评论</div>
                    </div>
                </div>
            </>
        );
    }
}