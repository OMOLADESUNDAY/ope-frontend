import React from "react";
import coin from "./m011t0336_a_dollar_sign_13jun22-removebg-preview.png";
// import crown from "./crown.png";
import {Link } from 'react-router-dom'
function Lon() {
  

  return (
    <div className="container">
      <div className="lonContainer">
        <h1>
          Z<small>coin</small>
          <img
            src={coin}
            style={{ width: "50px", height: "50px" }}
            alt="free coin"
          />
          <p>
            Cryptocurrency has been growing in popularity over the years and has
            become a lucrative investment option for many individuals. The
            market is highly competitive, and to stand out, new crypto projects
            need to offer something unique and valuable to their customers. One
            of the ways to do this is by providing free crypto coins.
          </p>{" "}
          Why Give Away Free Crypto Coins?{" "}
          <p>
            Giving away free crypto coins can be a great way to attract new
            customers, increase awareness, and build a community around your
            project. In the early stages of a crypto project, it is critical to
            establish a strong user base and generate buzz. By providing free
            coins, you can incentivize people to get involved and create a
            strong foundation for future growth. Additionally, giving away free
            coins can also help with network effects. The more people use your
            crypto project, the more valuable it becomes, which can drive
            further growth. This can also help with security and
            decentralization, as the more users there are, the more secure the
            network becomes.
          </p>{" "}
          How to Get Free Crypto Coins?
          <br />
          <p>
            1. Airdrops: Airdrops are one of the most common ways to get free
            crypto coins. An airdrop is a marketing strategy where a crypto
            project distributes free coins to users in exchange for promoting
            the project on social media, joining their Telegram group, or other
            simple tasks.{" "}
          </p>{" "}
          <p>
            2. Referral Programs: Many crypto projects offer referral programs
            where users can earn free coins for inviting their friends to join
            the project. This can be a great way to spread the word and build a
            community around your project.
          </p>
          <p>
            3. Faucets: Faucets are websites that give away small amounts of
            crypto coins for completing simple tasks such as solving captchas or
            watching ads. While the amount you can earn from faucets is usually
            small, it is still a great way to get started and build a small
            portfolio of crypto coins.
          </p>{" "}
          <p>
            4. Mining: Another way to get free crypto coins is by mining. Mining
            is the process of verifying transactions on a blockchain network and
            is usually done by solving complex mathematical problems. Some
            crypto projects allow users to mine coins from their own computers,
            and others have dedicated mining pools where users can join and earn
            a share of the coins
          </p>
        </h1>
        <div className="toLogin">
          <Link className="dbtn btn" to="login">
            Get Now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Lon;
