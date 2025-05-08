import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { IoIosArrowDropdown } from "react-icons/io";
import { useLoaderData } from 'react-router-dom';
import { getStoredReadList } from '../Utility/AddToLoacalDB';
import BooksList from './BooksList';

export default function ListedBooks() {
const allBooks = useLoaderData();
const readBooks = getStoredReadList();
const readBooksInt = readBooks.map(book => parseInt(book));

  const readBookList = allBooks.filter(book => readBooksInt.includes(book.bookId));
  
  return (
    <div>
      <h1 className='text-[28px] font-bold text-center text-[#131313] bg-[#1313130D] py-9 mb-12 font-worksans'>Listed Books</h1>
       <div className='flex justify-center'>
          <button className='flex items-center gap-2 btn font-worksans text-[18px] bg-main rounded-[8px] text-white font-semibold '>
          Sort By <span><IoIosArrowDropdown /></span></button>
        </div>
       
      <Tabs>
    <TabList>
      <Tab>Read List</Tab>
      <Tab>Wish List</Tab>
    </TabList>

    <TabPanel>
    <div className='grid grid-cols-1 gap-6 mt-8'>
    {
        readBookList.map(book => <BooksList book={book}></BooksList>)
      }
    </div>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>
    </div>
  )
}
