import { atom } from 'jotai';

export const popularMoviesAtom = atom([]);
export const nowPlayingMoviesAtom = atom([]);
export const topRatedMoviesAtom = atom([]);
export const upcomingMoviesAtom = atom([]);
export const focusedIndexAtom = atom(0);

export const modalActivatedAtom = atom(false);
export const movieDetailIdAtom = atom('1022789');
export const movieDetailAtom = atom({
	title: '영화제목',
	bannerUrl: '',
	releaseYear: '2024',
	genres: ['SF', '드라마'],
	description: '줄거리가 없습니다.',
	rate: 9.9,
});
