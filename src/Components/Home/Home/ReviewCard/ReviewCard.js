import React from 'react';
import './ReviewCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';

const ReviewCard = ({review}) => {
    return (
        <div>
          <div className="review-div-style shadow m-3 p-3">
              <div>
                  <h6 className="fw-bold">{review.name}</h6>
                  <small>{review.email}</small>
                  <div className="text-warning">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  </div>
              </div>
              <div className="mt-3">
                  <p>{review.description}</p>
              </div>
          </div>
        </div>
    );
};

export default ReviewCard;