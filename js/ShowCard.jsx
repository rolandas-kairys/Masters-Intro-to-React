// @flow


import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';



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


const ShowCard = (props: { show: { poster: string, title: string, year: string, description: string, imdbID: string } }) => {
  return (
    <Wrapper className="show-card">
      <Link to={`/details/${props.show.imdbID}`}>
        <Image
          src={`/public/img/posters/${props.show.poster}`}
          alt={`${props.show.title} Show Poster`} />
        <div>
          <h3>{props.show.title}</h3>
          <h4> ({props.show.year} )</h4>
          <p> {props.show.description} </p>
        </div>
      </Link>
    </Wrapper>
  );
}



export default ShowCard;