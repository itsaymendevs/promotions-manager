import Image from "next/image";
import styles from "./page.module.css";

// * Images
import cogImg from "/public/img/icons/cogwheel.png";
import tagImg from "/public/img/icons/tag.png";
import marketingImg from "/public/img/icons/marketing.png";
import comparativeImg from "/public/img/icons/comparative.png";
import guestPostImg from "/public/img/icons/guest-post.png";
import passwordCodeImg from "/public/img/icons/password-code.png";

// * Components
import MenuItem from "/components/dashboard/menuItem";
import WelcomeCard from "/components/dashboard/welcomeCard.jsx";

export default function Home() {
  return (
    <section className={`${styles.currentBackground} bg-cover`}>
      <div className="container">
        <div className="row min-vh-100 pt-5">
          <div className="col-12 mb-5 pb-4">
            <WelcomeCard />
          </div>

          {/* Menu Items */}
          <MenuItem title="General Settings" img={cogImg} link="/general" />
          <MenuItem
            title="Auto-Tag"
            img={tagImg}
            link="/auto-tag"
            even="true"
          />
          <MenuItem
            title="Market Automation"
            img={marketingImg}
            link="/market-automation"
          />
          <MenuItem
            title="Reports"
            img={comparativeImg}
            link="/reports"
            even="true"
          />
          <MenuItem title="Guests" img={guestPostImg} link="/guests" />
          <MenuItem
            title="Access"
            img={passwordCodeImg}
            link="/access"
            even="true"
          />
        </div>
      </div>
    </section>
  );
} // end function
