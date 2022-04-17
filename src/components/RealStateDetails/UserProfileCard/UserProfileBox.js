import Btn from '../../../microComponents/Btn'
import '../RealStateDetails.css';
function UserProfileBox({img,title,content}) { 
  return (
    <div className=" rounded-3 text-center shadow-es pb-3">
        <img src={img} className="w-100" height={142} />
        <h6 className='pt-3 pb-2 text-truncate text-es'>{title}</h6>
        <Btn title="مشاهده پروفایل" myClass="btn-es rounded-3 he-fit"/>
    </div>
  );
}

export default UserProfileBox;