// @flow

import React from 'react';
import styled from 'styled-components';
import { Flex } from 'rebass';
import Slider from 'infinite-react-carousel';
import { BodyLight, Header1, Header4 } from '../../ui/Typography';

const comments = [
  {
    text:
      'Очень классное место. Спасибо таким ребятам как там, они знают толк в своём деле. Атмосфера просто бомба, такое чувство будто это мои друзья давние. Всегда есть о чем пообщаться, есть развлечения) и самое классное...',
    author: 'TATIANA',
  },
  {
    text:
      'Сын, 13 лет, стригся у Евгения. Доволен и стрижкой и непринужденным приятным общением. Рекомендуем!',
    author: 'ROMA',
  },
  {
    text:
      'Классно пообщались и привели себя в порядок с другом. Барберы знатоки своего дела и поддержать разговор всегда могут. В общем и кальян с чаем никто не отменял)))',
    author: 'VIKTOR',
  },
];

const Root = styled(Flex)`
  justify-content: center;
  background: #f4f2eb;
  padding: 48px 0;
  align-items: center;
  text-align: center;
`;

const MustacheImage = styled.img`
  margin: 16px 0 32px;
`;

const CommentRoot = styled(Flex).attrs({
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
})`
  padding: 20px;
  width: 500px;
  height: 225px;
  text-align: left;
  border: 3px solid #e3871d;
  border-radius: 16px;
`;

const CommentImage = styled.img`
  width: 40px;
  color: #cbc4b1;
`;

const Carousel = styled(Slider)`
  width: 1010px;
  margin: 40px 0;
`;

const Comment = ({ text, author }) => (
  <CommentRoot>
    <Flex flexDirection="column">
      <CommentImage src="/assets/main/comment.svg" alt="comment" />
      {text}
    </Flex>
    <Header4>{author}</Header4>
  </CommentRoot>
);

const Link = styled.a`
  color: #e3871d;
  text-decoration: underline blue;
`;

const PrevArrow = styled.button`
  &:before {
    content: '' !important;
    background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PGc+PGc+PHBhdGggZD0iTTM4Ni4wMzMsNDk1LjIyOEwxNDYuODA2LDI1NS45OThMMzg2LjAzMywxNi43NzFjMy44MzgtMy44MzgsMy44MzgtMTAuMDU1LDAtMTMuODkzYy0zLjgzOC0zLjgzOC0xMC4wNTUtMy44MzgtMTMuODkzLDBMMTI1Ljk2NywyNDkuMDUxYy0zLjgzOCwzLjgzOC0zLjgzOCwxMC4wNTUsMCwxMy44OTNMMzcyLjE0LDUwOS4xMjJjMS45MTksMS45MTksNC40MzMsMi44NzgsNi45NDYsMi44NzhzNS4wMjgtMC45Niw2Ljk0Ni0yLjg3OUMzODkuODcxLDUwNS4yODQsMzg5Ljg3MSw0OTkuMDY2LDM4Ni4wMzMsNDk1LjIyOHoiLz48L2c+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjwvc3ZnPg==) !important;
  }
`;

const NextArrow = styled.button`
  &:before {
    content: '' !important;
    background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PGc+PGc+PHBhdGggZD0iTTM4Ni4wMzUsMjQ5LjA1NkwxMzkuODU4LDIuODc4Yy0zLjgzOC0zLjgzOC0xMC4wNTUtMy44MzgtMTMuODkzLDBzLTMuODM4LDEwLjA1NSwwLDEzLjg5M2wyMzkuMjMxLDIzOS4yMzFMMTI1Ljk2NSw0OTUuMjI5Yy0zLjgzOCwzLjgzOC0zLjgzOCwxMC4wNTUsMCwxMy44OTNjMS45MTksMS45MTksNC40MzMsMi44NzgsNi45NDYsMi44NzhzNS4wMjgtMC45Niw2Ljk0Ni0yLjg3OGwyNDYuMTc4LTI0Ni4xNzNjMS44NDItMS44NDIsMi44NzgtNC4zNDIsMi44NzgtNi45NDZDMzg4LjkxNCwyNTMuMzk4LDM4Ny44NzcsMjUwLjg5OCwzODYuMDM1LDI0OS4wNTZ6Ii8+PC9nPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48L3N2Zz4=) !important;
  }
`;

export const Feedback = () => (
  <Root flexDirection="column">
    <Header1>ЧТО ГОВОРЯТ НАШИ КЛИЕНТЫ</Header1>
    <MustacheImage alt="mustache" src="/assets/main/mustache.png" />
    <BodyLight fontSize={3}>
      Отзывы наших клиентов, а теперь друзей. Своей работой мы заслужили высокие оценки на{' '}
      <Link
        target="_blank"
        href="https://yandex.ru/maps/213/moscow/?ll=37.593144%2C55.686454&mode=search&oid=168976904931&ol=biz&sctx=ZAAAAAgBEAAaKAoSCa5lMhzPyUJAEbu5%2BNue2EtAEhIJNdvS5INmtD8RIq629DL%2Fpj8iBQABAgQFKAowADjV9PmA9fCR6VZA7a0HSAFVzczMPlgAagJydXAAnQHNzEw9oAEAqAEA&sll=37.593144%2C55.686454&source=adrsnip&sspn=0.219989%2C0.069723&text=%D0%B1%D0%B0%D1%80%D0%B1%D0%B5%D1%80%D1%88%D0%BE%D0%BF%20%D0%B1%D0%BB%D1%8D%D0%BA%D0%B4%D0%B6%D0%B5%D0%BA&z=13"
      >
        Яндекс Картах
      </Link>{' '}
      и{' '}
      <Link
        target="_blank"
        href="https://www.google.ru/maps/place/Barbershop+BLACK+JACK/@55.6922408,37.5766767,15z/data=!4m5!3m4!1s0x0:0x555ba9f2d90f75f!8m2!3d55.6922408!4d37.5766767"
      >
        Google Maps
      </Link>
      .
      <br />
      Если вам не понравиться наша работа - можете не платить.
    </BodyLight>
    <Carousel
      dots
      slidesToShow={2}
      autoplay
      autoplaySpeed={5000}
      prevArrow={<PrevArrow>Prev</PrevArrow>}
      nextArrow={<NextArrow>Next</NextArrow>}
    >
      {comments.map(comment => (
        <Comment text={comment.text} author={comment.author} />
      ))}
    </Carousel>
  </Root>
);
