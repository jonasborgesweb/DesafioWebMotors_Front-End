import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  margin-top: 30px;
`;

export const Center = styled.div`
  max-width: 1336px;
  width: 90%;
  margin: 0 auto;
`;

export const Content = styled.div`
  margin: 50px 0;
`;

export const Title = styled.h1`
  font-size: 48px;
  color: #2e2e37;
  font-weight: 600;
  text-align: center;
  margin-top: 30px;
`;

export const Filter = styled.section`
  max-width: 933px;
  width: 98%;
  margin: 0 auto;

  padding: 20px 20px 0;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  border-radius: 8px;

  @media screen and (max-width: 768px) {
    width: 90%;
  }

  h2 {
    font-size: 20px;
    font-weight: 600;
    padding: 8px 6px;
    border-bottom: 3px solid #f3123c;
    color: #2e2e37;
    display: inline-block;
    margin-bottom: 30px;
  }

  input {
    width: 100%;
    border: 2px solid #ecedf2;
    border-radius: 8px;
    padding: 16px;
    background-color: #fff;
    outline: 0;
    font-size: 16px;
    font-family: inherit;
    color: #2e2e37;

    &::placeholder {
      opacity: 0.5;
    }

    &:focus {
      box-shadow: 0 2px 9px rgba(0, 0, 0, 0.1);
    }
  }

  div.bottom {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-bottom: 20px;

    button {
      &:not(:last-child) {
        margin-right: 20px;
      }
    }
  }
`;

export const FilterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 0;
  }
`;

export const GroupInfo = styled.div``;

export const Row = styled.div`
  margin-bottom: 20px;
`;

export const RowDivider = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;

  margin-bottom: 20px;

  @media screen and (max-width: 450px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Select = styled.select`
  width: 100%;
  border: 2px solid #ecedf2;
  border-radius: 8px;
  padding: 16px;
  background-color: #fff;
  outline: 0;
  font-size: 16px;
  font-family: inherit;
  color: #2e2e37;

  &:focus {
    box-shadow: 0 2px 9px rgba(0, 0, 0, 0.1);
  }
`;

export const BtnReset = styled.button`
  border: 0;
  background-color: transparent;
  font-family: inherit;
  font-size: 16px;
  font-weight: 600;
  color: #8b8c99;
  text-transform: uppercase;
  transition: 0.3s ease;

  &:hover {
    color: ${shade(0.6, '#8b8c99')};
  }
`;

export const BtnSubmit = styled.button`
  border: 0;
  background-color: #f3123c;
  padding: 15px 0;
  width: 160px;
  border-radius: 8px;
  box-shadow: 0 8px 12px -8px #f3123c;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  text-transform: uppercase;
  transition: 0.3s ease;

  &:hover {
    background-color: ${shade(0.1, '#f3122c')};
  }
`;

export const ContainerList = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 30px;

  @media screen and (max-width: 1280px) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 30px;
  }

  @media screen and (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 30px;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Card = styled.div`
  box-shadow: 0 3px 9px rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  transition: 0.3s ease;
  min-height: 420px;

  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    max-width: 412px;
    width: 100%;
    margin: auto;
  }

  &:hover {
    transform: translateY(-5px);
  }

  header {
    height: 170px;
    width: 100%;
    overflow: hidden;

    border-top-left-radius: 8px;
    border-top-right-radius: 8px;

    @media screen and (max-width: 1000px) {
      height: 220px;
    }

    @media screen and (max-width: 450px) {
      height: 200px;
    }

    div {
      width: 100%;
      height: 100%;

      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
    }
  }
  div.content {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    padding: 15px 20px;
    background-color: #fff;

    overflow: hidden;

    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;

    div {
      h2 {
        font-size: 22px;
        font-weight: 500;
        color: #2e2e37;
        text-transform: uppercase;
      }

      h3 {
        font-size: 16px;
        font-weight: 500;
        color: #8b8c99;
        text-transform: uppercase;
      }

      h4 {
        font-size: 16px;
        font-weight: 400;
        color: #8b8c99;
      }

      strong {
        font-size: 32px;
        font-weight: 500;
        color: #2e2e37;
        display: block;
        margin-bottom: 20px;
      }

      div {
        display: flex;
        align-items: center;
        justify-content: space-between;

        p {
          font-size: 16px;
          font-weight: 500;
          color: #8b8c99;
        }
      }
    }
  }
`;

export const Pagination = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;

  list-style: none;
  margin-top: 50px;

  li {
    font-size: 32px;
    font-weight: 600;
    color: #2e2e37;

    &:not(:last-child) {
      margin-right: 20px;
    }

    button {
      border: 0;
      background-color: transparent;
      color: #2e2e37;
    }
  }
`;
