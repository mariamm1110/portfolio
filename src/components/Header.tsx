import '../../../portafolio/src/css/header.css';

interface HeaderProps {
    logo: string;
    mainBody: string;
    toolbarBody: string;
}



export const Header: React.FC<HeaderProps> = ({logo, mainBody}) => {
  return (
    <>
    <header className="header-header">

        <div className="header-logo-header">
            <img src={logo} alt={'title'} />
        </div>
        <div className="header-main-header">
            <div className="header-main-body-header">
                <p>{mainBody}</p>
               
            </div>
        </div>

    </header>
    
    
    </>
    
  )
}
