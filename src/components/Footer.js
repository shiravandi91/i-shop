import React from "react";
import up from "../assets/up.png";
import styles from "./Footer.module.css";
import instagram from "../assets/instagram.png";
import twt from "../assets/twt.png";
import linkdin from "../assets/link.png";
import aparat from "../assets/aparat.png";
const Footer = () => {
  return (
    <div>
      <footer>
        <div className={`${styles["footer-top"]}`}>
          <img
            className={`${styles["digi-logo"]}`}
            src="https://www.digikala.com/statics/img/svg/digi.svg"
          />
          <div className={`${styles["up"]}`}>
            <div>بازگشت به بالا </div>
            <img className={`${styles["up-logo"]}`} src={up} />
          </div>
        </div>
        <div className={`${styles["footer-top2"]}`}>
          <span>تلفن پشتیبانی ۶۱۹۳۰۰۰۰ - ۰۲۱</span>
          <span>| </span>
          <span>۷ روز هفته، ۲۴ ساعته پاسخگوی شما هستیم</span>
        </div>
        <div className={`${styles["services"]}`}>
          <div>
            <img src="https://www.digikala.com/statics/img/svg/footer/express-delivery.svg" />
            <p>امکان تحویل اکسپرس</p>
          </div>
          <div>
            <img src="https://www.digikala.com/statics/img/svg/footer/cash-on-delivery.svg" />
            <p>امکان پرداخت در محل </p>
          </div>
          <div>
            <img src="https://digikala.com/statics/img/svg/footer/support.svg" />
            <p>۷ روز ﻫﻔﺘﻪ، ۲۴ ﺳﺎﻋﺘﻪ </p>
          </div>
          <div>
            <img src="https://www.digikala.com/statics/img/svg/footer/days-return.svg" />
            <p>هفت روز ضمانت بازگشت کالا </p>
          </div>
          <div>
            <img src="https://www.digikala.com/statics/img/svg/footer/original-products.svg" />
            <p>ﺿﻤﺎﻧﺖ اﺻﻞ ﺑﻮدن ﮐﺎﻟﺎ </p>
          </div>
        </div>
        <div className={`${styles["footer-links"]}`}>
          <div className={`${styles["footer-item"]}`}>
            <h4>با دیجی کالا</h4>
            <ul>
              <li>
                <a href="">اتاق خبر دیجی کالا</a>
              </li>
              <li>
                <a href="">فروش در دیجی کالا </a>
              </li>
              <li>
                <a href=""> فرصت های شغلی</a>
              </li>
              <li>
                <a href=""> تماس با دیجی کالا</a>
              </li>
              <li>
                <a href=""> درباره دیجی کالا</a>
              </li>
            </ul>
          </div>
          <div className={`${styles["footer-item"]}`}>
            <h4>خدمات مشتریان </h4>
            <ul>
              <li>
                <a href="">پاسخ به پرسشهای متداول</a>
              </li>
              <li>
                <a href=""> رویه‌های بازگرداندن کالا </a>
              </li>
              <li>
                <a href=""> شرایط استفاده</a>
              </li>
              <li>
                <a href=""> حریم خصوصی</a>
              </li>
              <li>
                <a href=""> گزارش باگ </a>
              </li>
            </ul>
          </div>
          <div>
            <h4> راهنمای خرید از دیجی کالا </h4>
            <ul>
              <li>
                <a href="">نحوه ثبت سفارش </a>
              </li>
              <li>
                <a href=""> رویه ارسال سفارش </a>
              </li>
              <li>
                <a href=""> شیوه‌های پرداخت </a>
              </li>
            </ul>
          </div>
          <div className={`${styles["footer-item"]}`}>
            <h4>همراه ما باشید! </h4>
            <ul className={`${styles["footer-social"]}`}>
              <li>
                <a href="https://www.instagram.com/digikalacom/">
                  {" "}
                  <img src={instagram} />{" "}
                </a>
              </li>
              <li>
                <a href="">
                  <img src={twt} />{" "}
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/digikala/mycompany/">
                  {" "}
                  <img src={linkdin} />
                </a>
              </li>
              <li>
                <a href="https://www.aparat.com/digikala/">
                  {" "}
                  <img src={aparat} />
                </a>
              </li>
            </ul>
            <p>با ثبت ایمیل، از جدید‌ترین تخفیف‌ها با‌خبر شوید</p>
            <div className={`${styles["email-wrapper"]}`}>
              <input
                type="text"
                className={`${styles["email"]}`}
                value="ایمیل شما"
              />{" "}
              <input
                className={`${styles["sabt"]}`}
                type="submit"
                value="ثبت"
              />
            </div>
          </div>
        </div>
        
        <div  className={`${styles["footer-download-app"]}`}>
           <div className={`${styles["app-text"]}`}>
            <img src="https://www.digikala.com/statics/img/png/footerlogo2.png" style={{width:"44px"}} />
             <span style={{margin:"0 10px 0 0"}}>دانلود اپلیکیشن دیجی کالا</span>
         
            </div>
            <div className={`${styles["app-links"]}`}>
               
                    <img className={`${styles["app-box"]}`} src="https://www.digikala.com/statics/img/svg/appStores/google-play.svg" />
             
            
                    <img className={`${styles["app-box"]}`}  src="https://www.digikala.com/statics/img/svg/appStores/coffe-bazzar.svg" />
               
              
                    <img className={`${styles["app-box"]}`} src="https://www.digikala.com/statics/img/svg/appStores/myket.svg" />
               
               
                    <img className={`${styles["app-box"]}`} src="https://www.digikala.com/statics/img/svg/appStores/sib-app.svg" />
            
                <div className={`${styles["app-other"]}`}>
                
                <img src="https://www.digikala.com/statics/img/svg/More.svg" />
                </div>
            </div>
          </div>
          <hr />
          <div className={`${styles["sabt-logos"]}`}>
            <div>
                <h4>فروشگاه اینترنتی دیجی‌کالا، بررسی، انتخاب و خرید آنلاین</h4>
                <p className={`${styles["sabt-logos__text"]}`}>یک خرید اینترنتی مطمئن، نیازمند فروشگاهی است که بتواند کالاهایی متنوع، باکیفیت و دارای قیمت مناسب را در مدت زمانی کوتاه به دست مشتریان خود برساند و ضمانت بازگشت کالا هم داشته باشد؛ ویژگی‌هایی که فروشگاه اینترنتی دیجی‌کالا سال‌هاست بر روی آن‌ها کار کرده و توانسته از این طریق مشتریان ثابت خود را داشته باشد.</p>
                <details>
  <summary>مشاهده بیستر</summary>
  <p className={`${styles["sabt-logos__text"]}`}>تقریبا می‌توان گفت محصولی وجود ندارد که دیجی‌کالا برای مشتریان خود در سراسر کشور فراهم نکرده باشد. شما می‌توانید در تمامی روزهای هفته و تمامی شبانه روز یا در روزهای خاصی مثل حراج شگفت انگیز دیجی‌کالا که محصولات دارای تخفیف عالی می‌شوند، سفارش خود را به سادگی ثبت کرده و در روز و محدوده زمانی مناسب خود، درب منزل تحویل بگیرید. بعضی از گروه‌های اصلی و زیر مجموعه‌های پرطرفدار محصولات دیجی‌کالا شامل مواردی می‌شود که در ادامه به معرفی آن‌ها می‌پردازیم.</p>
</details>
            </div>
<div className={`${styles["sabt-logos-wrapper"]}`}>
    <div className={`${styles["sabt-logos-box"]}`} >
        <img src="https://www.digikala.com/statics/img/png/rezi.png" />
    </div>
    <div className={`${styles["sabt-logos-box"]}`} >
        <img src="https://www.digikala.com/statics/img/png/kasbokar.png" />
    </div>
    <div className={`${styles["sabt-logos-box"]}`} >
        <img src="https://www.digikala.com/statics/img/png/enamad.png" />
    </div>
</div>
          </div>
          <hr />
          <p className={`${styles["sabt-logos__text"]}`} style={{fontSize:"12px"}} >برای استفاده از مطالب دیجی‌کالا، داشتن «هدف غیرتجاری» و ذکر «منبع» کافیست. تمام حقوق اين وب‌سايت نیز برای شرکت نوآوران فن آوازه (فروشگاه آنلاین دیجی‌کالا) است.</p>
          <div className={`${styles["digikala-jet"]}`}>
            <div><img src="https://www.digikala.com/statics/img/svg/footer/digimag.svg"  /></div>
            <div><img src="https://www.digikala.com/statics/img/svg/footer/digimag.svg"  /></div>
            <div><img src="https://www.digikala.com/statics/img/svg/footer/digimag.svg"  /></div>
            <div><img src="https://www.digikala.com/statics/img/svg/footer/digimag.svg"  /></div>
            <div><img src="https://www.digikala.com/statics/img/svg/footer/digimag.svg"  /></div>
            <div><img src="https://www.digikala.com/statics/img/svg/footer/digimag.svg"  /></div>
            <div><img src="https://www.digikala.com/statics/img/svg/footer/digimag.svg"  /></div>
            <div><img src="https://www.digikala.com/statics/img/svg/footer/digimag.svg"  /></div>
            <div><img src="https://www.digikala.com/statics/img/svg/footer/digimag.svg"  /></div>
            <div><img src="https://www.digikala.com/statics/img/svg/footer/digimag.svg"  /></div>
            <div><img src="https://www.digikala.com/statics/img/svg/footer/digimag.svg"  /></div>
            <div><img src="https://www.digikala.com/statics/img/svg/footer/digimag.svg"  /></div>




          </div>
      </footer>
    </div>
  );
};

export default Footer;
