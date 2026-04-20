import './searchBar.css';
export default function SearchBar() {
  return (
    <div>
      <input
        type='search'
        placeholder='Search here'
        className=' h-[40px] w-[800px] bg-white  rounded-xl mx-20 px-3'
      />
      <button></button>
    </div>
  );
}
