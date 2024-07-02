import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg'
import dessertBg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaBg from '../../../assets/menu/pizza-bg.jpg'
import saladBg from '../../../assets/menu/salad-bg.jpg'
import soupBg from '../../../assets/menu/soup-bg.jpg'
import useMenu from '../../../Hooks/useMenu';
import SectionsTitle from '../../../Components/SectionsTitle/SectionsTitle';
import MenuCategory from '../MenuCategory/MenuCategory';

const Menu = () => {
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const offered = menu.filter(item => item.category === 'offered')
    return (
        <div>
            <Helmet>
                <title>
                    Bistro Boss | Menu
                </title>
            </Helmet>
            <Cover img={menuImg} title={"Our menu"}></Cover>
            {/* main cover */}
            <SectionsTitle
            subHeading={"Don't Miss"}
            heading={"Today's Offer"}
            ></SectionsTitle>
            {/* offered menu items */}
            <MenuCategory items={offered}/>
            {/* dessert menu items */}
            <MenuCategory 
            items={desserts} 
            title={"dessert"}
            img={dessertBg}
            />
            <MenuCategory 
            items={pizza}
            title={"pizza"}
            img={pizzaBg}
            />
            <MenuCategory 
            items={salad}
            title={"salad"}
            img={saladBg}
            />
            <MenuCategory 
            items={soup}
            title={"soup"}
            img={soupBg}
            />
        </div>
    );
};

export default Menu;