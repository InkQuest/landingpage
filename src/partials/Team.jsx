import React from 'react';
import { Link } from 'react-router-dom';
import RobertImg from '../images/team-img/robert-ng.png'
import HiroImg from '../images/team-img/hiro-pham.png'
import LucieImg from '../images/team-img/luci-ng.png'
import TienImg from '../images/team-img/tien-ng.png'
import LamImg from '../images/team-img/lam-vu.png'
import { Element } from 'react-scroll';

function Teams() {
  return (
    <>
  {/* Container for demo purpose */}
  <div className="container my-24 px-6 mx-auto">
    {/* Section: Design Block */}
    <section className="mb-32 text-gray-800 text-center">
    <Element name="team" className="element">
      <h2 className="text-3xl font-bold mb-12">
        Meet the <u className="text-blue-600">team</u>
      </h2>
      </Element>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-x-6 lg:gap-xl-12">
        <div className="mb-12">
          <img
            src={RobertImg}
            className="rounded-full mx-auto shadow-lg mb-4"
            alt=""
            style={{ maxWidth: 250 }}
          />
          <p className="font-bold mb-2">Robert Ng</p>
          <p className="text-gray-500">Founder</p>
        </div>
        <div className="mb-12">
          <img
            src={HiroImg}
            className="rounded-full mx-auto shadow-lg mb-4"
            alt=""
            style={{ maxWidth: 250 }}
          />
          <p className="font-bold mb-2">Hiro Pham</p>
          <p className="text-gray-500">Co-founder</p>
        </div>
        <div className="mb-12">
          <img
            src={LucieImg}
            className="rounded-full mx-auto shadow-lg mb-4"
            alt=""
            style={{ maxWidth: 250 }}
          />
          <p className="font-bold mb-2">Lucie Nguyen</p>
          <p className="text-gray-500">CMO</p>
        </div>
        <div className="mb-12">
          <img
            src={LamImg}
            className="rounded-full mx-auto shadow-lg mb-4"
            alt=""
            style={{ maxWidth: 250 }}
          />
          <p className="font-bold mb-2">Lam Vu</p>
          <p className="text-gray-500">Techlead</p>
        </div>
        <div className="mb-12">
          <img
            src={TienImg}
            className="rounded-full mx-auto shadow-lg mb-4"
            alt=""
            style={{ maxWidth: 250 }}
          />
          <p className="font-bold mb-2">Anna Le</p>
          <p className="text-gray-500">UI/UX Designer</p>
        </div>
      </div>
    </section>
    {/* Section: Design Block */}
  </div>
  {/* Container for demo purpose */}
</>

  );
}

export default Teams;
