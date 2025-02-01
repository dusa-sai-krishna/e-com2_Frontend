import React, {useEffect} from 'react';
import TextField from "@mui/material/TextField";
import {Button, Grid} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { register, getUser } from "../../../redux/Auth/Action";



function RegisterForm() {

	const navigate = useNavigate();
	const dispatch = useDispatch();
	const jwt = localStorage.getItem("jwt");
	const {auth} = useSelector((store) => store);

	useEffect(() => {
		return () => {
			if(jwt){dispatch(getUser())}

		};
	}, [jwt,auth.jwt,dispatch]);




	const handleSubmit = (event) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		const userData = {
			firstName: data.get('firstName'),
			lastName: data.get('lastName'),
			email: data.get('email'),
			password: data.get('password'),
			mobile: data.get('mobile'),
		}
		dispatch(register(userData));
		//redirect to login
		navigate("/login")
	};


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
						<TextField required
								   id="mobile"
								   name="mobile"
								   label="Mobile"
								   fullWidth
								   autoComplete="mobile">
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