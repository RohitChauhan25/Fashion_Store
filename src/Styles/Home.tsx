import styled from "styled-components";

export const Conatiner = styled.div`
  margin: 0;
`;

export const Facility = styled.div`
  margin: 0 1%;
  margin-top: 3.472vw;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 2rem;
  text-align: center;
  div {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 20vh;
    border: 1px solid #a5e7e0;
    box-shadow: 10px 10px;
  }
  span {
    font-weight: bold;
    font-size: larger;
    text-align: center;
    padding: 10%;
    padding-top: 15%;
  }
`;
