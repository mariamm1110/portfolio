import '../../../css/content/waterfall.less';

interface WaterfallProps{
    title: string;
    paragraph: string;
}



export const Waterfall: React.FC<WaterfallProps> = ({title,paragraph}) => {
  return (
    <>
<div className="body-waterfall">

<nav className="menu-waterfall">
  <ol>
    <li className="menu-item-waterfall"><a href="#0">Home</a></li>
    <li className="menu-item-waterfall"><a href="#0">About</a></li>
    <li className="menu-item-waterfall">
      <a href="#0">{title}</a>
      <ol className="sub-menu-waterfall">
        <li className="menu-item-waterfall"><a href="#0">{paragraph}</a></li>
        <li className="menu-item-waterfall"><a href="#0">{paragraph}</a></li>
        {/* <li className="menu-item"><a href="#0">Bigger Widgets</a></li>
        <li className="menu-item"><a href="#0">Huge Widgets</a></li> */}
      </ol>
    </li>
   
    <li className="menu-item-waterfall"><a href="#0">Contact</a></li>
  </ol>
</nav> 

</div>


    {/* <div className="waterfall-item">
      <div className="waterfall-title">
        {title}
      </div>
      <div className="waterfall-paragraph">
        {paragraph}
      </div>
    </div> */}

    {/* <nav className="menu">
        <ol>
            <li className="menu-item">
                <a href="#0">Home {title}</a>
                <ol className="sub-menu">
                    <li className="menu-item"><a href="#0">{paragraph}</a></li>
                    <li className="menu-item"><a href="#0">{paragraph}</a></li>
                    <li className="menu-item"><a href="#0">{paragraph}</a></li>
                    
                </ol>
            </li>
        </ol>
    </nav> */}
    </>
  )
}



{/* <nav class="menu">
  <ol>
    <li class="menu-item"><a href="#0">Home</a></li>
    <li class="menu-item"><a href="#0">About</a></li>
    <li class="menu-item">
      <a href="#0">Widgets</a>
      <ol class="sub-menu">
        <li class="menu-item"><a href="#0">Big Widgets</a></li>
        <li class="menu-item"><a href="#0">Bigger Widgets</a></li>
        <li class="menu-item"><a href="#0">Huge Widgets</a></li>
      </ol>
    </li>
    <li class="menu-item">
      <a href="#0">Kabobs</a>
      <ol class="sub-menu">
        <li class="menu-item"><a href="#0">Shishkabobs</a></li>
        <li class="menu-item"><a href="#0">BBQ kabobs</a></li>
        <li class="menu-item"><a href="#0">Summer kabobs</a></li>
      </ol>
    </li>
    <li class="menu-item"><a href="#0">Contact</a></li>
  </ol>
</nav> */}



 
