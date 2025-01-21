import React from 'react';
import TextField from "@mui/material/TextField";
import {Button, Grid} from "@mui/material";
import LoginForm from "./LoginForm";
import {useNavigate} from "react-router-dom";


const handleSubmit = (event) => {
	event.preventDefault();
	const data = new FormData(event.currentTarget);
	const userData = {
		firstName: data.get('firstName'),
		lastName: data.get('lastName'),
		email: data.get('email'),
		password: data.get('password'),
	}
	console.log("userData",userData);
};

function RegisterForm() {

	const navigate = useNavigate();

	return (
		<div>
			<form onSubmit={handleSubmit} >
				<Grid container spacing={3}>
					<Grid item xs={12} sm={6}>
						<TextField required
								   id="firstName"
								   name="firstName"
									label="First Name"
									fullWidth
									autoComplete="given-name">
						</TextField>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField required
								   id="lastName"
								   name="lastName"
								   label="Last Name"
								   fullWidth
								   autoComplete="given-name">
						</TextField>
					</Grid>
					<Grid item xs={12}>
						<TextField required
								   id="email"
								   name="email"
								   label="Email"
								   fullWidth
								   autoComplete="email">
						</TextField>
					</Grid>

					<Grid item xs={12}>
						<TextField required
								   id="password"
								   name="password"
								   label="Password"
								   fullWidth
								   autoComplete="password">
						</TextField>
					</Grid>
					<Grid item xs={12}>
						<Button
							className="  w-full"
							type="submit"
							variant="contained"
							size="large"
							sx={{ padding:".8rem 0", bgcolor:"#9155FD" }}
						>Register</Button>
					</Grid>
				</Grid>
			</form>
			<div className=" flex flex-row  pt-2 justify-center">
				<p>If you have already have an account ? <Button className="ml-5 " size="small" onClick={()=>navigate("/login")}>Login</Button></p>

			</div>
		</div>
	);
}

export default RegisterForm;