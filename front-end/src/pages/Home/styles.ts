import styled from 'styled-components';

export const Container = styled.div``;

export const Center = styled.div`
  max-width: 1336px;
  width: 90%;
  margin: 0 auto;
`;

export const Content = styled.div``;

export const Filter = styled.section`
  max-width: 933px;
  width: 98%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
`;

export const GroupInfo = styled.div``;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
`;

export const Select = styled.select`
  width: 100%;
  border: 2px solid #ecedf2;
  border-radius: 8px;
  padding: 16px;
  background-color: #fff;
  outline: 0;
`;

export const ContainerList = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 50px;
`;

export const Card = styled.div`
  box-shadow: 0 3px 9px rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  transition: 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  header {
    height: 216px;
    width: 100%;
    overflow: hidden;

    border-top-left-radius: 8px;
    border-top-right-radius: 8px;

    img {
      width: 100%;
      height: 100%;
      overflow: hidden;
    }
  }
  div.content {
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
        font-size: 14px;
        font-weight: 500;
        color: #2e2e37;
        text-transform: uppercase;
      }

      h3 {
        font-size: 14px;
        font-weight: 500;
        color: #8b8c99;
        text-transform: uppercase;
      }

      h4 {
        font-size: 12px;
        font-weight: 400;
        color: #8b8c99;
      }

      strong {
        font-size: 22px;
        font-weight: 500;
        color: #2e2e37;
        display: block;
      }

      div {
        display: flex;
        align-items: center;
        justify-content: space-between;

        p {
          font-size: 12px;
          font-weight: 500;
          color: #8b8c99;
        }
      }
    }
  }
`;
