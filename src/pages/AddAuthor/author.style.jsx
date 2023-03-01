import styled from 'styled-components';

export const BookHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	@media (max-width: 700px) {
		display: flex;
		flex-direction: column;
	}
`;

export const BookBg = styled.div`
	position: relative;
	width: 100%;
	height: 100vh;
	max-width: 50%;
	background: rgba(243, 243, 243, 0.93);

	@media (max-width: 700px) {
		max-width: 100%;
		height: 35vh;
	}
`;

export const BookContent = styled.div`
	position: relative;
	width: 100%;
	height: 100vh;
	max-width: 50%;
	background-color: #fff;

	@media (max-width: 700px) {
		max-width: 100%;
	}
`;

export const BookImg = styled.img`
	width: 100%;
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	margin: auto;
	max-width: 500px;
	height: 500px;
`;

export const BookWrap = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	align-self: center;
	align-content: center;
	justify-content: center;
`;

export const BookForm = styled.form`
	width: 100%;
	max-width: 330px;
	margin-top: 20px;
`;

export const BookTitle = styled.h3`
	font-family: 'Roboto';
	font-style: normal;
	font-weight: 900;
	font-size: 36px;
	line-height: 51px;
	color: #000000;
	text-align: center;

	@media (max-width: 768px) {
		font-size: 25px;
		text-align: center;
	}
`;

export const BookDesc = styled.p`
	font-family: 'Roboto';
	font-style: normal;
	font-weight: 400;
	font-size: 13px;
	line-height: 15px;
	color: #000000;
`;

// export const BookLink = styled.a`

// `;

export const FieldInputBook = styled.input`
	background: '#FFFFFF';
	width: 100%;
	max-width: 330px;
	border: 1px solid #b4b4bb;
	border-radius: 10px;
	outline: none;
	padding: 10px 0 10px 28px;
`;

export const FieldSelect = styled.select`
	background: '#FFFFFF';
	width: 100%;
	max-width: 330px;
	border: 1px solid #b4b4bb;
	border-radius: 10px;
	outline: none;
	padding: 10px 0 10px 28px;
`;

export const TextSelect = styled.textarea`
	background: '#FFFFFF';
	width: 100%;
	max-width: 330px;
	border: 1px solid #b4b4bb;
	border-radius: 10px;
	outline: none;
	padding: 10px 0 10px 28px;
	resize: none;
`;

export const ReqSpan = styled.span`
	color: red;
	position: absolute;
	display: block;
`;

export const BookButton = styled.button`
	background: #152540;
	width: 100%;
	max-width: 328px;
	display: block;
	border-radius: 99px;
	padding: 5px 20px;
	font-family: 'Red Hat Display';
	font-style: normal;
	font-weight: 500;
	font-size: 18px;
	line-height: 36px;
	margin-top: 34px;
	color: #ffffff;
	border: none;

	@media (max-width: 768px) {
		margin-top: 0px;
		margin-bottom: 5px;
	}
	/* margin-bottom: 15px; */
`;

export const InputGroup = styled.div`
	margin-bottom: 10px;
	position: relative;
`;
