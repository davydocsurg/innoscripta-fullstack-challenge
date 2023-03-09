import styled from 'styled-components';

export const Container = styled.article`
  display: grid;
  margin: 10px;
  grid-template-columns: 285px minmax(300px, 445px);
  max-width: 730px;
  border-radius: 10px;
  box-shadow: 6px 6px 5px hsla(0, 0%, 0%, 0.2),
            25px 25px 20px hsla(0, 0%, 0%, 0.03);
            100px 100px 80px hsla(0, 0%, 0%, 0.05);

  @media screen and (max-width: 1600px) {
    grid-template-columns: 1fr;
    max-width: 294px;
    padding-right: 10px;
    overflow: hidden;
  }

  
`;

export const ImgBox = styled.div`
  border-radius: 10px 0 0 10px;
  overflow: hidden;

  @media screen and (max-width: 1600px) {
    border-radius: 0;
    height: 180px;
  }
`;

export const Banner = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: left;
  transition: all 0.5s ease;

  ${Container}:hover & {
    transform: scale(1.1);
  }
`;

export const Content = styled.div`
  background: var(--white);
  border-radius: 0 10px 10px 0;
  padding: 32px 40px;

  @media screen and (max-width: 1600px) {
    width: 90%;
    border-radius: 0;
    padding: 30px 28px 20px;
  }
`;

export const Title = styled.h3`
  font-size: 20px;
  color: var(--very-dark-grayish-blue);
  margin-bottom: 12px;
  line-height: 1.4;

  &:hover {
    filter: invert(1);
  }

  @media screen and (max-width: 1600px) {
    font-size: 15px;
  }
`;

export const Text = styled.p`
  font-size: var(--fs-13);
  color: var(--desaturated-dark-blue);
  margin-bottom: 18px;
  line-height: 1.5;
  
  @media screen and (max-width: 1600px) {
    margin-bottom: 30px;
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media screen and (max-width: 1600px) {
    width: 90%;
    position: relative;
  }
`;

export const Author = styled.div`
  display: flex;
  align-items: center;
`;

export const AuthorInfo = styled.p`
  color: var(--very-dark-grayish-blue);
  font-size: var(--fs-13);
  
  @media screen and (max-width: 1600px) {
    word-wrap:break-word;
    width: 255px;
  }
`;

export const AuthorName = styled.span`
  &:hover {
    filter: invert(1);
  }
`;

export const PublishDate = styled.p`
  color: var(--grayish-blue);
  font-size: var(--fs-13);
`;

export const SeeMore = styled.div`
  position: relative;

  @media screen and (max-width: 1600px) {
    //display this componente in the bottom of the article
    position: absolute;
    bottom: -10px;
    right: -50px;

  }
`;

export const ButtonSeeMore = styled.a`
  background: var(--light-dark-blue);
  padding: 6px;
  border-radius: 20px;
  font-size: 20px;
  color: var(--desaturated-dark-blue);
  transition: all 0.25s ease;

  @media screen and (max-width: 1600px) {
    font-size: 16px;
  }
`;
