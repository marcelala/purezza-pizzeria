import React, { useState } from "react";
// project files
import Input from "../../components/Input";
import { formData } from "../../data/formData.js";

export default function BookingForm() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [nrPeople, setNrPeople] = useState("");
	const [time, setTime] = useState("");
	return (
		<form>
			<Input hook={[name, setName]} settings={formData.name} />
			<Input hook={[email, setEmail]} settings={formData.email} />
			<Input hook={[phone, setPhone]} settings={formData.phone} />
			<Input hook={[nrPeople, setNrPeople]} settings={formData.nrPeople} />
			<Input hook={[time, setTime]} settings={formData.time} />
		</form>
	);
}
