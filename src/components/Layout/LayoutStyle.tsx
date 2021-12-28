import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2)),
    url('https://img5.goodfon.com/wallpaper/nbig/0/bd/mmmmmm-nnnnnn-bbbbbbb-vvvvvvvv-ccccccc.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 4rem;
  backdrop-filter: blur(2px);

  @media (max-width: 499px) {
    height: 8rem;
    justify-content: center;
  }
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: space-around;
  margin: 1rem;

  @media (max-width: 499px) {
    flex-direction: column;
  }
`;

export const NavItem = styled.li`
  list-style: none;
  font-size: 18px;

  a {
    color: #ddd;
    padding: 0.5rem 1rem;
    border-radius: 1.5rem;
    text-decoration: none;
    transition: 0.2s;
  }
  a:hover {
    color: #fff;
  }

  a.nav-active {
    color: #fff;
    background-color: rgba(0, 0, 0, 0.3);
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
  }
  @media (max-width: 499px) {
    margin-top: 3px;

    a {
      padding: 0;
      border-radius: 0;
    }
    a.nav-active {
      background-color: transparent;
      box-shadow: none;
      border-bottom: 2px solid #fff;
    }
  }
`;
