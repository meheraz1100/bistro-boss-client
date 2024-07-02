import SectionsTitle from '../../../Components/SectionsTitle/SectionsTitle';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import useMenu from '../../../Hooks/useMenu';



const PopularMenu = () => {

    // eslint-disable-next-line
    const [menu, setMenu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular')
    
    // const [menu, setMenu] = useState([])
    // useEffect(() => {
    //     fetch('menu.json')
    //     .then(res => res.json())
    //     .then(data => {
    //         const popularItems = data.filter(item => item.category === 'popular')
    //         setMenu(popularItems)
    //     })
    // }, [])
    
    // console.log(menu)

    return (
        <section className='mb-12'>
            <SectionsTitle
            heading="From Our Menu"
            subHeading="Popular Items"
            ></SectionsTitle>
            <div className='grid md:grid-cols-2 gap-10'>
                {
                    popular.map(item => <MenuItem
                    key={item._id}
                    item={item}
                    ></MenuItem>)
                }
            </div>
            <div className='text-center'>
            <button className='btn btn-outline border-0 border-b-4 mt-4'>View Full Menu</button>
            </div>
        </section>
    );
};

export default PopularMenu;