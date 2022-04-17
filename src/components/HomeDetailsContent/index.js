import CarouselHomeDetails from './CarouselHomeDetails';
import HomeDetailsBtn from './HomeDetailsBtn';
import DescriptionParagraph from './DescriptionParagraph';
import MyMap from './../map/Map';




const HomeDetailsContent = () => {
    return ( 
        <div className='shadow-es px-4 py-3'>
        <CarouselHomeDetails/>

        <HomeDetailsBtn/>

        <DescriptionParagraph
        discriptionParagraph={
            <>
                    سلام،وقت بخیر،لطفا آگهی را با دقت مطالعه بفرمایید 
                    <br/>
                    همکاری با املاک صورت می گیرد(لطفا فقط در صورت داشتن مشتری تماس بگیرید) 
                    <br/>
                    آپارتمان ۱۱۰ متر دو‌خوابه 
                    <br/>
                    طبقه ۶ واقع در مجتمع یاران فاز ۲،خیابان شهید گودرزی
                    <br/>
                     نگهبانی ۲۴ ساعته
                    <br/>
                      دوربین مدار بسته
                    <br/>
                       محیطی امن و آرام آسانسو

            
            </>

        }
        />
        <MyMap/>
        </div>
     );
}
 
export default HomeDetailsContent;