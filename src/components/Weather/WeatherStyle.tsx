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
`;

export const Container = styled(WeatherContainer)`
  display: flex;
  width: ${props => props.width || 'auto'};
  align-items: ${props => props.alignItems || 'center'};
  flex-direction: ${props => props.flexDirection || 'row'};
  justify-content: ${props => props.justifyContent || 'center'};
  background-color: ${props => props.backgroundColor || 'transparent'};
  overflow: ${props => props.overflow || 'none'};
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
`;

export const CurrentTemp = styled(Text)`
  font-size: 140px;
  font-weight: 200;
`;

export const Label = styled(Text)`
  font-size: 35px;
`;

export const DateLabel = styled(Text)`
  font-size: 18px;
  text-transform: uppercase;
`;

export const Icons = styled.img`
  width: 50px;
  height: 50px;
`;

export const MainIcon = styled.img`
  margin: 1rem 0;
  width: 100px;
  height: 100px;
`;

export const Line = styled.div`
  width: 100%;
  border: 1px solid #fff;
`;
