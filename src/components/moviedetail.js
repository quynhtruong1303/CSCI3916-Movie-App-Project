import React, { useEffect, useState } from 'react';
import { fetchMovie } from '../actions/movieActions';
import { useDispatch, useSelector } from 'react-redux';
import { Card, ListGroup, ListGroupItem, Image, Form, Button } from 'react-bootstrap';
import { BsStarFill } from 'react-icons/bs';
import { useParams } from 'react-router-dom';
const env = process.env;

const MovieDetail = () => {
  const dispatch = useDispatch();
  const { movieId } = useParams();
  const selectedMovie = useSelector(state => state.movie.selectedMovie);
  const loading = useSelector(state => state.movie.loading);
  const error = useSelector(state => state.movie.error);
  const [review, setReview] = useState({ rating: '', review: '' });
  const [submitMsg, setSubmitMsg] = useState('');

  useEffect(() => {
    dispatch(fetchMovie(movieId));
  }, [dispatch, movieId]);

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    fetch(`${env.REACT_APP_API_URL}/reviews`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      },
      body: JSON.stringify({ movieId, review: review.review, rating: Number(review.rating) }),
      mode: 'cors'
    }).then(res => res.json())
      .then(data => {
        setSubmitMsg(data.message || 'Review submitted!');
        setReview({ rating: '', review: '' });
        dispatch(fetchMovie(movieId));
      })
      .catch(() => setSubmitMsg('Failed to submit review.'));
  };

  if (loading) return <div>Loading....</div>;
  if (error) return <div>Error: {error}</div>;
  if (!selectedMovie) return <div>No movie data available.</div>;

  return (
    <Card className="bg-dark text-dark p-4 rounded">
      <Card.Header>Movie Detail</Card.Header>

      {selectedMovie.imageUrl && (
        <Card.Body>
          <Image className="image" src={selectedMovie.imageUrl} thumbnail />
        </Card.Body>
      )}

      <ListGroup>
        <ListGroupItem>{selectedMovie.title}</ListGroupItem>
        <ListGroupItem>
          {selectedMovie.actors.map((actor, i) => (
            <p key={i}>
              <b>{actor.actorName}</b> {actor.characterName}
            </p>
          ))}
        </ListGroupItem>
        <ListGroupItem>
          <h4>
            <BsStarFill /> {selectedMovie.avgRating || 'N/A'}
          </h4>
        </ListGroupItem>
      </ListGroup>

      <Card.Body className="card-body bg-white">
        {selectedMovie.reviews && selectedMovie.reviews.length > 0 ? (
          selectedMovie.reviews.map((r, i) => (
            <p key={i}>
              <b>{r.username}</b>&nbsp; {r.review} &nbsp; <BsStarFill />{' '}
              {r.rating}
            </p>
          ))
        ) : (
          <p>No reviews yet.</p>
        )}

        <hr />
        <h5>Leave a Review</h5>
        <Form onSubmit={handleReviewSubmit}>
          <Form.Group controlId="rating" className="mb-2">
            <Form.Label>Rating (0-5)</Form.Label>
            <Form.Control
              type="number" min="0" max="5" required
              value={review.rating}
              onChange={e => setReview({ ...review, rating: e.target.value })}
            />
          </Form.Group>
          <Form.Group controlId="review" className="mb-2">
            <Form.Label>Comment</Form.Label>
            <Form.Control
              as="textarea" rows={2} required
              value={review.review}
              onChange={e => setReview({ ...review, review: e.target.value })}
            />
          </Form.Group>
          <Button type="submit" variant="primary">Submit Review</Button>
          {submitMsg && <p className="mt-2 text-success">{submitMsg}</p>}
        </Form>
      </Card.Body>
    </Card>
  );
};

export default MovieDetail;
