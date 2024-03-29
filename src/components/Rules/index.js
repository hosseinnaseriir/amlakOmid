import { Container, Row, Col } from 'react-bootstrap';
import Estate from './../Estate';
import RulesSideBar from './RulesSideBar';
import RulesContent from './RulesContent';


const Rules = () => {
    return ( 
        <Container className="pt-5 mt-5 pb-4">
                <Row>

                    <Col lg={8}>
                        <RulesContent
                        title='حقوق و قوانین سامانه املاک امید'
                        paragraph={
                            <>
                            
                            هدف مدیریت سامانه، ایجاد اطمینان نسبت به صحت کلیه‌ی مطالب عنوان شده در تمامی بخش‌های سامانه است. ضمن اعلام آنکه مسئولین این سامانه نهایت کوشش و دقت خود را جهت بررسی و تعیین اصالت، صحت و سقم مطالب ارائه شده بعمل می آورند، با این حال، هرگونه تضمینی را از بابت درست بودن، و یا قابل اعتماد بودن مطالب مذکور از خود سلب می‌نمایند.

<br/>
قیمت های عنوان شده در بخش های مختلف سامانه، تنها نظرات اولیه مالکین محترم میباشد و چه بسا مالکین در زمان انجام معامله بسیار کمتر از قیمت اولیه حاضر به امضاء قرارداد ذیربط باشند و همچنین بدلیل امکان تغییر در بعضی از ضوابط و دستورالعمل های مربوط به ارگان های خدماتی از قبیل شهرداری ها و ادارات ثبت کل اسناد و املاک حتی الامکان سعی در به روز کردن اطلاعات ارائه شده می گردد ضمن آنکه مسئولیت نهائی آن با ارائه دهندگان اطلاعات و مراجع آنها به سایت می باشد.
<br/>

بدیهی است تفسیر ناشی از استفاده از مطالب سایت، تنها به عهده‌ی کاربران و بازدیدکنندگان خواهد بود. ضمناً مدیریت سامانه هیچ‌گونه ضمانتی از بابت صحت ، صقم و اعتبار مطالب عنوان شده در شبکه، و یا تضمینی از بابت اینکه هرگونه اقدام صورت گرفته در شبکه عاری از خطا می‌باشد را به کاربران نداده و نخواهد داد. تمامی اطلاعات ثبت شده در سایت تاریخ ثبت دارند و روزانه اطلاعات املاک جدید به سایت اضافه می شود.
<br/>

این سایت هیچ‌گونه تأییدی نسبت به محتوا و مطالب سایت‌های دیگر که به آنها (و یا از آنها) پیوندی داده شده باشد، نداشته و مسئولیتی را از این بابت نمی‌پذیرد. پیوندهای مذکور تنها جهت تسریع کاربرد و راحتی شما صورت گرفته و ریسک و خطر استفاده از مطالب و محتوای این سایت‌ها تنها به عهده‌ی کاربران خواهد بود.

<br/>
بخشی از این وب سایت  براى اطلاع رسانی، آگهی‌های تجاری ، ارتباطات تجاری و قانونى شما ایجاد شده است. دسترسى و استفاده شما از سایت مشروط به رعایت شرایط و الزامات و قوانین ذکر شده، مى‌باشد. شما با ورود به سایت و مرور سایت، بدون هیچگونه محدودیت و شرطى "شرایط و الزامات" را پذیرفته اید. در صورت عدم موافقت با "شرایط والزامات" لازم است بلافاصله استفاده از این سایت را متوقف نمایید.

<br/>
شرایط و الزامات
1- خدمات و محتويات این سايت، صرفا براى استفاده شخصى و غير تجارى شما عرضه شده است. هر گونه سوء استفاده از اين اطلاعات پيگرد قانوني خواهد داشت و هيچ فرد حقيقي، حقوقي يا سايتي به هيچ عنوان نمي تواند بر اساس قوانین مدنی و جزائی دولت جمهوری اسلامی ایران از اطلاعات موجود در سايت براى فروش، توليد مجدد يا ايجاد ترافيك در سايت خود استفاده نمايد. اگر مايليد از سرويسها و محتويات سايت جهت مقاصد تجارى استفاده نماييد لازم است از قبل به ما اطلاع دهيد. براى اين كار لطفا با ما تماس بگيريد. استفاده از محتويات امیدملک برای سايت ها و وبلاگ های شخصی تنها به شرطی که منافع تجاری مد نظر نباشد با ذکر منبع يا آدرس سايت مجاز می باشد و مدیریت حقوقی این سامانه شکایت از کسانیکه این موارد را نادیده می گیرند در دادگاه های عمومی و انقلاب را حق قانونی خود می داند.
<br/>

2- شما به سامانه املاک امید اطمينان می دهيد که از اين سايت برای رسيدن به مقاصدی که بر خلاف قوانين موضوعه يا شرايط استفاده از این سايت می باشد استفاده نخواهيد کرد. شما از سايتاملاک امید به گونه ای استفاده نخواهيد کرد که باعث آسيب، از کار انداختن يا معيوب ساختن وب سايت شود. همچنين شما مجاز به دسترسی يا تلاش برای دسترسی به اطلاعات، محتويات يا ورودي هايی که تعمدا به طور متعارف در دسترس قرار نگرفته يا از طريق صفحات سايت ارائه نشده اند نيستيد
<br/>

3- املاک امید هیچ یک از محتویات آگهی های املاک و سایر مطالب و یا آگهی هایی را که توسط کاربران یا سرویس های دیگر در سایت اضافه می شود تائید و درستی اطلاعات را تضمین نمی کند، برای درستی اطلاعات می بایست مدارک را با دقت برسی کنید و از افراد ذیصلاح کمک بگیرید.
<br/>

4- استفاده شما و مرور و جستجوی شما در سامانه املاک امید با مسئولیت شخصى خود شما صورت مى‌گیرد. املاک امید تعهدى در قبال خسارات مستقیم، غیر مستقیم، اتفاقى، تبعات حقوقی ناشى از دسترسى و استفاده شما از سایت ندارد
<br/>

5- املاک امید مختار است، هر گونه پیام، آگهی و یا عکسی که به این سایت ارسال می‌کنید، و یا حساب کاربری را که ایجاد می‌کنید، در هر زمان که ضروری بداند حذف نماید.

<br/>

6- قوانین جمهوری اسلامی ایران بر تعبیر، تفسیر، اجراِ و تأثیر این توافق نامه حکم خواهند بود.
<br/>

7- املاک امید مى تواند با به روز کردن شرایط استفاده از وب سایت، در هر زمان این "شرایط والزامات" را مورد تجدید نظر قرار دهد. شما مقید و متعهد به چنین تجدید نظرهایى هستید و بنابرین لازم است هر از چند گاهی از این صفحه دیدن نمایید تا از شرایط و الزامات جارى و لازم الاجراِ در زمان منظور مطلع شوید.

                            </>
                        }
                        />
                    </Col>

                    <Col lg={4}>
                        <RulesSideBar
                        blogsideBarParagraph='لـورم ایپـــسوم متن ساخــــــتگی با تولیـــد سادگـــی نــامفـــهوم از صنعــــت چاپ، و با استفاده از طراحان  گرافیـــک اســت'
                        
                        />
                     </Col>
                    
              
                    <Col lg={12}>
                    <h3 className='f-20 title-text mt-5'>آگهی های مشابه</h3>

                        <Row>
                        <Estate myClass='col-lg-4 col-md-6' img="./img/es1.png" title="کاربرعادی" profile="./img/profile2.png"       location="معالی‌آباد" price="2.7 میلیارد" bed="2" type="مسکونی" time="۳ روز پیش" meter="160"/>
                        <Estate myClass='col-lg-4 col-md-6' img="./img/es2.png" title="آژانس صادقیه" profile="./img/profile1.png"    location="چمران" price="1.7 میلیارد" bed="4" type="مسکونی" time="۳ روز پیش" meter="90"/>
                        <Estate myClass='col-lg-4 col-md-6' img="./img/es3.png" title="آژانس املاک سینا" profile="./img/profile2.png"location="تاچارا" price="2 میلیارد" bed="1" type="مسکونی" time="۳ روز پیش"  meter="210" />
                        </Row>
                  
                    </Col>
                   
                
                </Row>
        </Container>
      

     );
}
 
export default Rules;