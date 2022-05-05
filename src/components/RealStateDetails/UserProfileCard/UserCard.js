import {Row,Col } from 'react-bootstrap';
import UserProfileBox from './UserProfileBox';


function UserCard() {
    const data = {
        "cards": [
          {
            'img' : './img/realState/user-pic1.png',
            'title': 'سینا رحمان پور',
          },
          {
            'img' : './img/realState/user-pic2.png',
            'title': 'فاطمه قاسمی',
          },
          {
            'img' : './img/realState/user-pic3.png',
            'title': 'حمید فدایی',
          },
        ]
    };
    const cards = data.cards.map((card) =>(
        <Col key={card.img} lg={4} md={6} sm={12} className='ArticleCards pt-3 pb-5'>
             <UserProfileBox img={card.img} title={card.title} content={card.content} />
        </Col>
    ));
  return (
        <Row>
            {cards}
        </Row>
  );
}

export default UserCard;



