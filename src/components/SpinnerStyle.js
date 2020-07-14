import styled from 'styled-components';

const SpinnerOverlay = styled.div`
	height: 60vh;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const SpinnerContainer = styled.div`
	display: inline-block;
	width: 80px;
	height: 80px;
	border: 8px solid rgba(60, 60, 60, 0.6);
	border-radius: 50%;
	border-top-color: #9c9898;
	animation: spin 1s ease-in-out infinite;
	-webkit-animation: spin 1s ease-in-out infinite;

	@keyframes spin {
		to {
			-webkit-transform: rotate(360deg);
		}
	}

	@-webkit-keyframes spin {
		to {
			-webkit-transform: rotate(360deg);
		}
	}
`;

export { SpinnerOverlay, SpinnerContainer };
