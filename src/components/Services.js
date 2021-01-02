import React, { Component } from 'react'
import Title from './Title'
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa'
export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "free cocktails",
        info: "fsfsn hfions h hifhsfiohef hfhsd;ohf gsfgsf gfgsdf",
      },
      {
        icon: <FaHiking />,
        title: "free Hiking",
        info: "fsfsn hfions h hifhsfiohef hfhsd;ohf gsfgsf gfgsdf",
      },
      {
        icon: <FaShuttleVan/>,
        title: "free ShuttleVan",
        info: "fsfsn hfions h hifhsfiohef hfhsd;ohf gsfgsf gfgsdf",
      },
      {
        icon: <FaBeer />,
        title: "free Beer",
        info: "fsfsn hfions h hifhsfiohef hfhsd;ohf gsfgsf gfgsdf",
      },
    ],
  };
  render() {
    return (
     <section className="services">
         <Title title="services" />
         <div className="services-center">
            {this.state.services.map((item, index) => {
                return (
                    <article key={index} className="service">
                        <span>{item.icon}</span>
                        <h6>{item.title}</h6>
                        <p>{item.info}</p>
                    </article>
                )
            })}
         </div>
     </section>
    );
  }
}

