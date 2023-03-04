import { Header } from '../Home/Header/Header';
import book from '../../assets/img/book.png';
import { Containers } from '../Home/Header/header.style';
import {
	AuthInfoDesc,
	AuthName,
	InfoAuthBirth,
	InfoAuthImg,
	InfoAuthorBox,
	InfoAuthText,
	InfoAuthWrap,
	InforAuthLine,
} from './infoAuth.style';
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useEffect, useState } from 'react';
import MultipleItems from './bookCarousel';
import { BoxWraps } from '../../app.style';

export const InfoAuth = () => {
	const [authorInfo, setAuthorInfo] = useState([]);

	const getAuthor = useSelector((item) => item.authId.authId);
	const token = useSelector((token) => token.token.token);

	useEffect(() => {
		axios
			.get(`https://books.ogaw.uz/author/authorId/${getAuthor}`, {
				headers: { Authorization: token },
			})
			.then((data) => {
				setAuthorInfo(data.data);
			});
	}, [getAuthor]);

	const [books, setBooks] = useState([]);
	useEffect(() => {
		axios
			.get(`https://books.ogaw.uz/author/books/${getAuthor}`, {
				headers: { Authorization: token },
			})
			.then((data) => setBooks(data.data));
	}, [getAuthor]);
	return (
		<>
			<Containers>
				{' '}
				<Header />
				<InfoAuthWrap>
					<BoxWraps>
						<InfoAuthImg
							src={`https://books.ogaw.uz/${authorInfo.image}`}
							alt=''
						/>
					</BoxWraps>
					<InfoAuthorBox>
						<AuthName>
							{authorInfo.first_name} {authorInfo.last_name}
						</AuthName>
						<BoxWraps>
							{' '}
							<AuthInfoDesc>{authorInfo.bio}</AuthInfoDesc>
						</BoxWraps>

						<BoxWraps className='d-flex align-items-center gap-4 mt-5'>
							<BoxWraps>
								<InfoAuthText>Tavallud sanasi</InfoAuthText>
								<InfoAuthBirth>{authorInfo.date_of_birth}</InfoAuthBirth>
								<InfoAuthText>{authorInfo.country}</InfoAuthText>
							</BoxWraps>
							<InforAuthLine></InforAuthLine>
							<BoxWraps>
								<InfoAuthText>Vafot etgan sanasi</InfoAuthText>
								<InfoAuthBirth>{authorInfo.date_of_death}</InfoAuthBirth>
								<InfoAuthText>{authorInfo.country}</InfoAuthText>
							</BoxWraps>
						</BoxWraps>
					</InfoAuthorBox>
				</InfoAuthWrap>
				<MultipleItems />
			</Containers>
		</>
	);
};
