
import '../../../src/css/content/content.css';
import { Waterfall } from './content-main/Waterfall';


export const Content = () => {
  return (
    <>
        <aside className="content">
            <div className="breadcrumb">
                <div className="breadcrumb-selected">
                    breadcrumb-selected
                </div>
            </div>
            <div className="content-main">
                
                <Waterfall
                    title='titulo1'
                    paragraph='parrafo1'
                />
                
                
            </div>
        </aside>
    </>
  )
}
