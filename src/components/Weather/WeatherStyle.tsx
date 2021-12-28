import styled from 'styled-components';
import { Container as WeatherContainer } from '../helper/Container';
import { Text as WeatherText } from '../helper/Text';

export const Wrapper = styled.div`
  margin: 2rem auto;
  width: 75%;
  max-width: 1200px;
  min-height: 590px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-radius: 1rem;
  padding: 3vh 6vw;
  background-color: rgba(0, 0, 0, 0.3);
  box-shadow: 0 0 30px rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(2px);

  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const Container = styled(WeatherContainer)`
  display: flex;
  width: ${props => props.width || 'auto'};
  align-items: ${props => props.alignItems || 'center'};
  flex-direction: ${props => props.flexDirection || 'row'};
  justify-content: ${props => props.justifyContent || 'center'};
  background-color: ${props => props.backgroundColor || 'transparent'};
  overflow-x: ${props => props.overflow || 'none'};

  &::-webkit-scrollbar {
    width: 20px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 20px;
    border: 5px solid transparent;
    background-clip: content-box;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #a8bbbf;
  }
`;

export const WeatherDiv = styled(Container)`
  display: flex;
  flex-direction: column;
  min-width: 7rem;
  margin: 3vh 0.5vw;
  background-color: rgba(0, 0, 0, 0.2);
  padding: 0.5rem 1rem;
  border-radius: 1rem;
`;

export const Text = styled(WeatherText)`
  color: #fff;
  font-weight: 300;
`;

export const Header = styled(Text)`
  font-size: 50px;

  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

export const CurrentTemp = styled(Text)`
  font-size: 140px;
  font-weight: 200;

  @media (max-width: 375px) {
    font-size: 100px;
  }
`;

export const Label = styled(Text)`
  font-size: 35px;

  @media (max-width: 375px) {
    font-size: 30px;
  }
`;

export const DateLabel = styled(Text)`
  font-size: 18px;
  text-transform: uppercase;

  @media (max-width: 375px) {
    font-size: 16px;
  }
`;

export const Icons = styled.img`
  width: 50px;
  height: 50px;
`;

export const MainIcon = styled.img`
  margin: 1rem 0;
  width: 100px;
  height: 100px;

  @media (max-width: 320px) {
    width: 70px;
    height: 70px;
  }
`;

export const Line = styled.div`
  width: 100%;
  border: 1px solid #fff;
`;

export const ErrorText = styled.span`
  width: 100%;
  color: #ccc;
  font-weight: 300;
  font-size: 40px;
  margin-top: 2rem;
  text-align: center;
  text-transform: uppercase;
`;
