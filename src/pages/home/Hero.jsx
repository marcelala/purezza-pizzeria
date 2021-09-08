import React from 'react'
import heroImg from "../../assets/img/heroImg.png";

export default function Hero() {
    return (
					<section className="hero" id="hero">
						<img
							className="background"
							src={heroImg}
							alt="background"
						/>
						<div className="text-box">
							<span className="hero-title">purezza </span>
							<span className="hero-subtitle"> Join the pizza revolution</span>
						</div>
					</section>
		);
}
