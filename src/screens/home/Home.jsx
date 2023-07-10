import React from "react";
import { Hero, ProfileCard, Pagination } from "../../components";
import "./home.css";

function Home() {
  return (
    <main className="home">
      <Hero />
      <section className="devlist">
        <div className="container">
          <div className="grid grid--three">
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
          </div>
        </div>
      </section>
      <Pagination />
    </main>
  );
}

export default Home;
