import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getOrderByID} from "../../../redux/Order/Action";
import {updatePayment} from "../../../redux/Payment/Action";
import Alert from '@mui/material/Alert';
import {AlertTitle, Grid} from "@mui/material";
import OrderTracker from "../Order/OrderTracker";
import AddressCard from "../Checkout/AddressCard";

const PaymentSuccess = () => {

	const [paymentId, setPaymentId] = useState(null);
	// const [referenceId, setReferenceId] = useState(null);
	const [paymentStatus, setPaymentStatus] = useState(null);
	const {orderId} = useParams();

	const dispatch = useDispatch();
	const {order} = useSelector(store=>store);


	useEffect(() => {
		const urlParam = new URLSearchParams(window.location.search);
		setPaymentId(urlParam.get("razorpay_payment_link_id"));
		setPaymentStatus(urlParam.get("razorpay_payment_link_status"));

	}, []);

	useEffect(() => {
		const data =[orderId,paymentId];
		dispatch(getOrderByID(Number(orderId)));
		dispatch(updatePayment(data));
	}, [orderId,paymentId]);

	return (
		<div className="px-2 lg:px-36">

			<div className="flex flex-col justify-center items-center">

				<Alert
					severity="success"
					variant="filled"
					sx={{mb:6,width:"fit-content"}}
				>
					<AlertTitle>
						Payment Success
					</AlertTitle>
					Congratulations Your Order Get Placed
				</Alert>

			</div>

			<OrderTracker activeStep={1}></OrderTracker>


			<Grid container className="space-y-5 py-5 pt-20">
				{order?.order?.orderItems.map(item=><Grid container item className="shadow-xl rounded-md p-5" sx={{alignItems:"center",justifyContent:"space-between"}}>
					<Grid item sx={6}>
						<div className="flex items-center">
							<img src={item?.product?.imageUrl} alt="Not found" className="w-[5rem] h-[5rem] object-cover object-top"/>
							<div className="ml-5 space-y-2 ">
								<p>{item?.product?.title}</p>
								<div className="opacity-50 text-xs font-semibold space-x-5">
									<span>Color: {item?.colo}</span>
									<span>Size: item.size</span>
								</div>
								<p>Seller: item.product.brand</p>
								<p>₹item.price</p>
							</div>
						</div>
					</Grid>
					<Grid item>
						<AddressCard address={""}/>
					</Grid>
				</Grid>)}


			</Grid>
		</div>
			)

}

export default PaymentSuccess;