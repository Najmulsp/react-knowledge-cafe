import profile from '../../assets/images/boy1.png'

const Header = () => {
    return (
        <header className='flex justify-between items-center py-4 px-2  border-b-2'>
            <h1 className='text-4xl font-bold'>Knowledge Cafe</h1>
            
            <img className='w-16 rounded-full' src= {profile} alt="" ></img>
            
        </header>
    );
};

export default Header;