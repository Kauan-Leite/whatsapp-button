'use client';
import Image from 'next/image';
import { useState } from 'react';
import {
  Btn,
  BtnSend,
  Container,
  Content,
  DesktopBtn,
  InputWhatsapp,
  MobileBtn,
  Whatsapp,
  WhatsappHeader,
  WhatsappSend,
} from './styles';

const WhatsAppIcon = () => {
  const [form, setForm] = useState('hide');
  const [message, setMessage] = useState('');

  const showForm = () => {
    if (form === 'hide') {
      setForm('show');
    } else {
      setForm('hide');
    }
  };

  const handleChange = ({ target }: any) => {
    setMessage(target.value);
  };

  const submit = () => {
    const phone = '';
    const url = `https://wa.me//${phone}?text=${message.replaceAll(
      ' ',
      '%20'
    )}`;

    window.open(url, '_blank');
  };

  return (
    <Container>
      <Content>
        <Btn onClick={showForm}>
          <DesktopBtn>
            <Image
              src="/images/WhatsAppButtonGreenLarge.svg"
              alt="Whatsapp Button"
              width={269.1}
              height={62.4}
            />
          </DesktopBtn>
          <MobileBtn>
            <Image
              src="/images/WhatsAppButtonMobile.png"
              alt="Whatsapp Button"
              width={70}
              height={70}
              style={{ float: 'right', margin: '10px' }}
            />
          </MobileBtn>
        </Btn>
        <Whatsapp className={form}>
          <WhatsappHeader>
            <Image
              src="/images/placeholder.png"
              alt="user"
              width={70}
              height={70}
            />
            <h2>Nome de Usuario</h2>
          </WhatsappHeader>

          <WhatsappSend>
            <InputWhatsapp
              type="text"
              placeholder="Mensagem"
              onChange={handleChange}
              value={message}
              onSubmit={submit}
            />
            <BtnSend onClick={submit}>
              <Image
                src="/images/send-message.png"
                width={18}
                height={18}
                alt="icon send message"
              />
            </BtnSend>
          </WhatsappSend>
        </Whatsapp>
      </Content>
    </Container>
  );
};

export default WhatsAppIcon;
