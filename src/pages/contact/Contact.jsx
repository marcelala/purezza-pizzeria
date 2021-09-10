import React from "react";
//project files
import { restaurant } from "../../data/restaurantData";
import Button from "../../components/Button";
import BookingForm from "./BookingForm";
import contactImg from "../../assets/img/contact.jpeg";
import map from "../../assets/img/map.png";

export default function Contact() {
	const hours = restaurant.openingHours;
	const address = restaurant.adress;

	const openingHours = hours.map((item) => (
		<li key={item.id}>
			{item.id}: {item.hours}
		</li>
	));
	const fullAddress = address.map((item) => (
		<li key={item.id}>
			{item.id}: {item.value}
		</li>
	));

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
				<ul>{openingHours}</ul>
			</div>
			<section className="booking">
				<h2 className="oleo">Booking</h2>
				<BookingForm />
				<Button
					theme={"primary"}
					onClick={() =>
						alert(
							"Oh no, looks like this form is out of order.Please send an email instead. Sorry for the inconvenience!"
						)
					}>
					Book a table
				</Button>
			</section>
			<div className="address">
				<h2 className="oleo">Address</h2>

				<ul>{fullAddress}</ul>
				<img src={map} alt="man putting a pizza in wood oven" />
			</div>
		</section>
	);
}
