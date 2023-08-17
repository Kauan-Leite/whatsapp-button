import styled from 'styled-components';

export const Container = styled.div`
  min-width: 350px;
  width: 20vw;
  position: fixed;
  bottom: 0;
  right: 2%;
  z-index: 1;

  @media (max-width: 728px) {
    right: 0%;
    min-width: 300px;
    width: 10vw;
  }
`;

export const Content = styled.div`
  width: 100%;
  color: black;
  display: flex;
  flex-direction: column;

  .hide {
    animation: hiddenDesktop 0.75s ease-in-out;
    height: 0;
  }

  @media (max-width: 728px) {
    .hide {
      animation: hiddenMobile 0.75s ease-in-out;
      height: 0;
    }
  }

  @keyframes hiddenDesktop {
    from {
      height: 450px;
      color: black;
    }

    to {
      height: 0;
      color: transparent;
    }
  }

  @keyframes hiddenMobile {
    from {
      height: 250px;
      color: black;
    }

    to {
      height: 0;
      color: transparent;
    }
  }
`;

export const Whatsapp = styled.div`
  background-color: #fafafa;
  animation: showDesktop 0.75s ease-in-out;
  height: 450px;
  border-radius: 12px 12px 0 0;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  background: url('/images/bg-wpp.jpg');
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 728px) {
    height: 250px;
    animation: showMobile 0.75s ease-in-out;
  }

  @keyframes showDesktop {
    from {
      height: 0;
      color: transparent;
    }

    to {
      height: 450px;
      color: black;
    }
  }

  @keyframes showMobile {
    from {
      height: 0;
      color: transparent;
    }

    to {
      height: 250px;
      color: black;
    }
  }
`;

export const WhatsappHeader = styled.div`
  display: flex;
  background-color: #00a884;
  align-items: center;
  max-width: 100%;
  border-radius: 12px 12px 0 0;
  padding: 10px;
  padding-left: 20px;

  img {
    border-radius: 100%;
    margin-right: 14px;
  }

  h2 {
    font-size: 18px;
  }

  color: white;
  font-weight: 900;
`;

export const WhatsappSend = styled.div`
  display: flex;
  margin: 10px;
`;

export const Btn = styled.button`
  background: none;
  border: none;

  @media (max-width: 728px) {
    width: 90px;
    align-self: end;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const DesktopBtn = styled.div`
  @media (max-width: 728px) {
    display: none;
  }
`;

export const MobileBtn = styled.div`
  @media (min-width: 728px) {
    display: none;
  }
`;

export const InputWhatsapp = styled.input`
  width: 85%;
  min-height: 40px;
  border-radius: 18px;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
    rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
    rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
  margin-left: 8px;
  padding-left: 10px;
`;

export const BtnSend = styled.button`
  background-color: #00a884;
  color: white;
  border: none;
  margin: auto;
  padding: 10px;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
