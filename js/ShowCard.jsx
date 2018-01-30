import React from 'react';
import { shape, string } from 'prop-types';
import styled from 'styled-components';



const color = "#333";
const Wrapper = styled.div`
  width: 32%;
  border: 2px solid ${color};
  border-radius: 25px;
  margin-bottom: 25px;
  padding-right: 10px;
  overflow: hidden;
`;

const Image = styled.img`
  width: 60%;
  float: left;
  margin-right: 10px;
`;


const ShowCard = ({ show }) => {
  return (
    <Wrapper className="show-card">
      <Image
        src={`/public/img/posters/${show.poster}`}
        alt={`${show.title} Show Poster`} />
      <div>
        <h3>{show.title}</h3>
        <h4> ({show.year} )</h4>
        <p> {show.description} </p>
      </div>
    </Wrapper>
  );
}

ShowCard.propTypes = {
  show: shape({
    poster: string.isRequired,
    title: string.isRequired,
    year: string.isRequired,
    description: string.isRequired
  }).isRequired
}

export default ShowCard;