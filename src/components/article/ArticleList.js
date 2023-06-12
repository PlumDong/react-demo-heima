import { useSelector } from 'react-redux'
import avatar from '../../assets/back.jpg'
import * as types from "../../store/actionTypes/articles";

export const ArticleList = () => {
    const articles = useSelector(state => state.articles)

    return (
        <div className="list">
            {articles.map(item => (
                <div key={item.art_id} className="article_item">
                    <h3>{item.title}</h3>
                    <div className="img_box">
                        <img
                            src={item.cover.type === 0 ? avatar : item.cover.images[0]}
                            className="w100"
                            alt=""
                        />
                    </div>
                    <div className="info_box">
                        <span>{item.aut_name}</span>
                        <span>{item.comm_count}评论</span>
                        <span>{item.pubdate}</span>
                    </div>
                </div>
            ))}
        </div>
    )
}