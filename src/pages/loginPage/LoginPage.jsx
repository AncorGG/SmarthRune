import './LoginPage.css';
import { GoogleLogin, googleLogout } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

function LoginPage() {

	const navigate = useNavigate();
	const { login } = useAuth();

	return (
		<div className="login-page">
			<div className="login-background-image"></div>

			<img src="/images/pfp.png" alt="Logo" className='login-img' />

			<div className="login-text">
				<h1>RuneLink</h1>
				<h2>Welcome Player</h2>
			</div>

			<div className="login-google-container">
				<GoogleLogin
					onSuccess={(credetialResponse) => {
						const userData = jwtDecode(credetialResponse.credential);
						console.log(userData);
						if (userData) {
							login(userData);
							navigate('/');
						}
					}}
					onError={() => console.log("Login failed")}
					auto_select={true}
					shape='pill'
					size='large'
				/>
			</div>

		</div>
	);
}

export default LoginPage;