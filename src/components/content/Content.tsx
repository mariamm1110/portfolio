
import '../../../src/css/content/content.css';
import { Waterfall } from './content-main/Waterfall';


export const Content = () => {
  return (
    <>
        <aside className="content">
            <div className="breadcrumb">
                <div className="breadcrumb-selected">
                    Quick links
                </div>
            </div>
            <div className="content-main">
                
                <Waterfall
                    title1='Facebook'
                    title2='LinkedIn'
                    title3='Mail'
                    title4='Github'
                    paragraph='mariamm1110'
                />
                
               <div className="text-main">
                <h3> Find here some of my social media and contact.</h3>
                </div> 
            </div>
        </aside>
    </>
  )
}
