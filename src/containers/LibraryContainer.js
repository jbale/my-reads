import React from 'react';
import { Library } from '../components/Library';

const books = [
  {
    id: 1,
    shelf: 'currentlyReading',
    cover: 'http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api',
    title: 'To Kill a Mockingbird',
    authors: ['Harper Lee']
  }
];

const shelves = [
  {
    id: 'currentlyReading',
    name: 'Currently Reading'
  },
  {
    id: 'wantToRead',
    name: 'Want to Read'
  },
  {
    id: 'read',
    name: 'Read'
  }
];


class LibraryContainer extends React.Component {

  render() {
    return <Library books={books} shelves={shelves} />
  }
}

export default LibraryContainer;
