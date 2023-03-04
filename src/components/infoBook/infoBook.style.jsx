import styled from 'styled-components';

export const InfoAuthorBox = styled.div`
	width: 100%;
	max-width: 671px;
	margin-top: 20px;
`;

export const InfoBookWrapper = styled.div`
	margin-top: 100px;
	display: flex;
	gap: 25px;
	margin-top: 15px;
	align-items: center;

	@media (max-width: 950px) {
		gap: 0;
		display: flex;
		flex-direction: column;
	}
`;

export const AuthName = styled.h3`
	font-family: 'Poppins';
	font-style: normal;
	font-weight: 400;
	font-size: 48px;
	line-height: 72px;
	color: #d1b89d;

	@media (max-width: 992px) {
		font-size: 45px;
		line-height: 65px;
	}

	@media (max-width: 500px) {
		font-size: 35px;
		line-height: 40px;
		margin-bottom: 20px;
	}

	@media (max-width: 420px) {
		font-size: 25px;
	}
`;

export const AuthInfoDesc = styled.p`
	font-family: 'Poppins';
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	max-height: 290px;
	overflow-y: scroll;
	line-height: 24px;
	color: rgba(13, 13, 13, 0.8);
`;

export const InfoAuthText = styled.p`
	font-family: 'Poppins';
	font-style: normal;
	font-weight: 400;
	font-size: 12px;
	line-height: 18px;
	margin: 0;
	color: rgba(13, 13, 13, 0.6);
`;

export const InfoAuthImg = styled.img`
	width: 100%;
	min-width: 455px;
	max-height: 521px;
	height: 100%;
	border-radius: 20px;
	object-fit: cover;

	@media (max-width: 500px) {
		min-width: 100%;
		max-width: 400px;
	}
`;

export const BookImg = styled.img`
	max-width: 190px;
	max-height: 283px;
	min-width: 190px;
	min-height: 283px;
	border-radius: 15px;
	object-fit: cover;
`;

export const BookList = styled.ul`
	display: flex;
	margin: 0;
	padding: 0;
	list-style: none;
`;

export const BookItem = styled.li`
	width: 100%;
	max-width: 190px;
`;

export const BookTitleName = styled.h3`
	margin: 0;
	margin-top: 12px;
	/* margin-bottom: 6px; */
	font-family: 'Poppins';
	font-style: normal;
	font-weight: 500;
	font-size: 18px;
	line-height: 27px;
	color: #000000;
`;

export const BookAuthorName = styled.p`
	margin: 0;
	font-family: 'Poppins';
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 24px;
	color: rgba(13, 13, 13, 0.6);
`;

export const AuthorNovel = styled.p`
	font-family: 'Poppins';
	font-style: normal;
	font-weight: 400;
	font-size: 31px;
	line-height: 46px;
	color: #d1b89d;
`;

export const BooksList = styled.div`
	margin-top: 100px;
	margin-bottom: 100px;
`;

export const BookTitle = styled.p`
	font-family: 'Poppins';
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 24px;
	margin: 0;
	color: #d1b89d;
`;

export const BookInfoImg = styled.img`
	margin-left: 11px;
`;

export const BookLine = styled.span`
	display: block;
	width: 100%;
	max-width: 510.64px;
	height: 0px;
	border: 1px solid rgba(209, 184, 157, 0.6);
	transform: rotate(-0.11deg);
`;

export const BookInfoWrap = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 12px;
`;

export const BookStatList = styled.ul`
	list-style-type: none;
	margin: 0;
	padding: 0;
	margin-bottom: 40px;
`;

export const BookStatItem = styled.li`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 14px;
`;

export const BookStatPage = styled.p`
	font-family: 'Poppins';
	margin: 0;
	font-style: normal;
	font-weight: 400;
	font-size: 20px;
	line-height: 30px;
	color: rgba(13, 13, 13, 0.6);

	@media (max-width: 500px) {
		font-size: 18px;
		line-height: 28px;
	}

	@media (max-width: 420px) {
		font-size: 17px;
	}
`;

export const BookStatPrice = styled.p`
	font-family: 'Poppins';
	margin: 0;
	font-style: normal;
	font-weight: 400;
	font-size: 20px;
	line-height: 30px;
	color: #0d0d0d;

	@media (max-width: 500px) {
		font-size: 18px;
		line-height: 28px;
	}

	@media (max-width: 420px) {
		font-size: 17px;
	}
`;
