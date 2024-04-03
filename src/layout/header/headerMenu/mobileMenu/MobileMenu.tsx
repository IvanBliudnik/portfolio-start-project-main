import React, {useState} from 'react';
import {Menu} from "../menu/Menu";
import {S} from "../HeaderMenuStyles"


// передаём Props в сокращённом виде в Menu
// type MenuPropsType = {
//     menuItems: Array<string>
// } //описание 13 строки

export const MobileMenu: React.FC<{ menuItems: Array<string> }> = (props: { menuItems: Array<string> }) => {
    const [menuIsOpen, setmenuIsOpen] = useState(false)
    const onBurgerBtnClick = () => {
        setmenuIsOpen(!menuIsOpen)
    }
    return (
        <S.MobileMenu>
            <S.BurgerButton isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
                <span></span>
            </S.BurgerButton>
            <S.MobileMenuPopup isOpen={menuIsOpen} onClick={() => {
                setmenuIsOpen(false)
            }}>
                <Menu menuItems={props.menuItems}/>
            </S.MobileMenuPopup>
        </S.MobileMenu>
    );
};



