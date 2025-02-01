import React from 'react';
import TextField from "@mui/material/TextField";
import {Button, Grid} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {getUser, login} from "../../../redux/Auth/Action";
import {useDispatch} from "react-redux";




function LoginForm() {


	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleSubmit = (event) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		const userData = {
			email: data.get('email'),
			password: data.get('password'),
		}
		dispatch(login(userData));
		dispatch(getUser())

	};



	return (
		<div>
			<form onSubmit={handleSubmit}>
				<Grid container spacing={3}>
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
							sx={{padding: ".8rem 0", bgcolor: "#9155FD"}}
						>Login</Button>
					</Grid>
				</Grid>
			</form>
			<div className=" flex flex-row  pt-2 justify-center">
				<p>If you do not have an account ? <Button className="ml-5 " size="small"
																 onClick={() => navigate("/register")}>Register</Button></p>

			</div>
		</div>
	);
}

export default LoginForm;