import React from "react";
import { restaurant } from "../../data/restaurantData";
import List from "../../components/List";
import BulletItem from "../../components/BulletItem";
import BookingForm from "./BookingForm";
import contactImg from "../../assets/img/contact.jpeg";

export default function Contact() {
	const hours = restaurant.openingHours;
	const address = restaurant.adress;

	return (
		<section className="contact">
			<img src={contactImg} alt="man putting a pizza in wood oven" />
			<div className="text-box">
				<div className="title">
					<h2 className="oleo">Get in</h2>
					<h1 className="exo">CONTACT</h1>
				</div>
				<p>Drop us a line here… we look forward to hearing from you!</p>
			</div>
			<div className="hours">
				<h2 className="oleo">Opening Hours</h2>
				<List list={hours} Component={BulletItem} />
			</div>
			<section className="booking">
				<h2 className="oleo">Booking</h2>
				<BookingForm />
			</section>
			<div className="address">
				<h2 className="oleo">Address</h2>

				<List list={address} Component={BulletItem} />
			</div>
		</section>
	);
}
