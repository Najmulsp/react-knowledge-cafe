import profile from '../../assets/images/nari 3.jpg'

const Header = () => {
    return (
        <header className='flex justify-between items-center p-6 mx-6 border-b-2'>
            <h1 className='text-4xl font-bold'>Knowledge Cafe</h1>
            
            <img className='w-24 rounded-full' src= {profile} alt="" ></img>
            
        </header>
    );
};

export default Header;