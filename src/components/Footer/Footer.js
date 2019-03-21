import React from "react";
import classes from "./Footer.module.scss";
import FooterMenu from "./FooterMenu/FooterMenu";

function Footer() {
  const links = {
    questions: [
      {
        url: "/",
        title: "Help"
      },
      {
        url: "/",
        title: "Track Order"
      },
      {
        url: "/",
        title: "Returns"
      }
    ],
    store: [
      {
        url: "/",
        title: "Women"
      },
      {
        url: "/",
        title: "Men"
      },
      {
        url: "/",
        title: "Product A-Z"
      },
      {
        url: "/",
        title: "Buy Gift Vouchers"
      }
    ],
    social: [
      {
        url: "/",
        title: "Facebook"
      },
      {
        url: "/",
        title: "Twitter"
      },
      {
        url: "/",
        title: "Youtube"
      }
    ]
  };
  return (
    <footer className={classes.Footer}>
      <FooterMenu title="Questions" links={links.questions} />
      <FooterMenu title="What's in store" links={links.store} />
      <FooterMenu title="Folow Us" links={links.social} />
      <div className={classes.copyRight}>©2016 shopmate Ltd</div>
    </footer>
  );
}

export default Footer;
