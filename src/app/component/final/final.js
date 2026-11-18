import classNames from "classnames/bind";
import styles from "./final.module.scss";
import PaperText from "../paperText/paperText";
import { finalSection } from "../../configs/ui";

const cx = classNames.bind(styles);

function Final() {
  return (
    <div className={cx("wrapper")}>
      <h2 className={cx("title")}>Thank you</h2>

      <div className={cx("noise")}>
        <div className={cx("imgs")}>
          {finalSection.images.map((src) => {
            return (
              <div className={cx("img-wrap")} key={src}>
                <img className={cx("img")} src={src} alt="wedding" loading="lazy" decoding="async" />
              </div>
            );
          })}
        </div>
      </div>
      <PaperText className={cx("des")}>
        Gia đình chúng tôi vô cùng biết ơn tình cảm và sự ủng hộ của quý khách trong suốt thời
        gian qua. Nhân ngày vui thành hôn của con chúng tôi, xin trân trọng kính mời
        quý khách cùng gia đình đến dự lễ cưới của con chúng tôi. Sự hiện diện của quý khách là
        niềm vinh dự lớn cho gia đình chúng tôi trong ngày hạnh phúc này.
      </PaperText>
    </div>
  );
}

export default Final;
