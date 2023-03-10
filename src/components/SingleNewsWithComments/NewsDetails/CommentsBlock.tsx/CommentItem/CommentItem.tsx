import { FC, useState, useEffect } from 'react';
import axios from 'axios';
import CommentItemDetails from './CommentItemDetails/CommentItemDetails';
import { SingleCommentInterface } from '../../../../../types/singleComment';

interface CommentitemProps {
  id: number;
}

const CommentItem: FC<CommentitemProps> = ({ id }) => {
  const [comment, setComment] = useState<SingleCommentInterface | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchComment = async () => {
      try {
        const response = await axios.get<SingleCommentInterface>(
          ` https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
        );
        setComment(response.data);
        setLoading(false);
      } catch (err) {
        setError('Error retrieving comment.');
        setLoading(false);
      }
    };

    fetchComment();
  }, [id]);

  if (loading) {
    return <div>Loading comment...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!comment || comment.type !== 'comment') {
    return <></>;
  }

  return (
    <li>
      <CommentItemDetails
        by={comment.by}
        id={comment.id}
        kids={comment.kids}
        text={comment.text}
        time={comment.time}
        deleted={comment.deleted}
      />
    </li>
  );
};

export default CommentItem;
