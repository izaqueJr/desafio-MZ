import "./global.css";
interface MenuProps {
  menu: Array<any>;
}

export default function NavbarMobile({ menu }: MenuProps) {
  return (
    <>
      {menu.map((item) => {
        return (
            
            <details className="nav-mobile">
                <summary className="nav-mob--container">

                    <a href={item.link} className="nav-mob--link">{item.name}</a>
       
                    {
                        item.submenu[0]?.name &&
                        <div>
                            <img src="/icons/arrow.png" alt={item.submenu[0].name} />
                        </div>
                    }
                
                </summary>
                
                {
                    item.submenu.map((submenu:any) => {
                        return(
                            <div className="nav-mob--submenu-container">
                                <a className="nav-mob--link" href={submenu.link}>{submenu.name}</a>

                                <span>
                                    {
                                        submenu.submenuLevel2 &&
                                        submenu.submenuLevel2.map((submenuLevel2:any) => {
                                            return(
                                                <a className="nav-mob--link" href={submenuLevel2.link}>{submenuLevel2.name}</a>
                                            )
                                        })
                                       
                                    }
                                    
                                </span>
                            </div>
                        )
                    })
                }
            </details>
        );
      })}
    </>
  );
}
