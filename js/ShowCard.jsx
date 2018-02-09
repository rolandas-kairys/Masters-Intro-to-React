// @flow


import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';



const color = "#333";
const Wrapper = styled(Link) `
  width: 32%;
  border: 2px solid ${color};
  border-radius: 25px;
  margin-bottom: 25px;
  padding-right: 10px;
  overflow: hidden;
  color: black;
  text-decoration: none;
`;

const Image = styled.img`
  width: 60%;
  float: left;
  margin-right: 10px;
`;


const ShowCard = (props: { show: { poster: string, title: string, year: string, description: string, imdbID: string } }) => {
  return (
    <Wrapper to={`/details/${props.show.imdbID}`} className="show-card">
      <Image
        src={`/public/img/posters/${props.show.poster}`}
        alt={`${props.show.title} Show Poster`} />
      <div>
        <h3>{props.show.title}</h3>
        <h4> ({props.show.year} )</h4>
        <p> {props.show.description} </p>
      </div>
    </Wrapper>
  );
}



export default ShowCard;