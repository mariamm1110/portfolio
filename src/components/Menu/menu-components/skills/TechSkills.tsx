import '../../../../css/skills/techskills.css';
import imgLang from '../../../../assets/lenguajes.png';


export const TechSkills = () => {
  return (
    <>
        <div className="body-tech-skills">
            <div className="title-tech-skills">
                <h1 className="my-tech-skills">My</h1><h1 className="skills-tech-skilss">Skills</h1>
            </div>
            
            <div className="tech-skills-container">

               
                
                
                <div className="card-tech-skills">
                   
                    <div className="header-tech-skills">
                        
                        <div className="number-tech-skills">01</div>
                        <div className="title-tech-skills">Technical</div>
                    </div>
                    <div className="content-tech-skills">
                        <p>Java, JacaScript, TypeScript, SQL, mySQL, Git, Postgres, MongoDB, Docker
                            AWS, HTML, CSS, Python.</p>
                             <img src={imgLang} alt="lenguajes" />
                    </div>

                </div>
                <div className="card-tech-skills">
                    <div className="header-tech-skills">
                        
                        <div className="number-tech-skills">01</div>
                        <div className="title-tech-skills">Languages</div>
                    </div>
                    <div className="content-tech-skills">
                        {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                             Voluptate animi quis placeat perspiciatis vitae, quia fuga laboriosam facilis voluptatibus suscipit totam recusandae necessitatibus quod ea nihil 
                             repellat eum debitis aspernatur.</p> */}
                             <div className="timeline-tech-skills">
                                <div className="timeline-item-tech-skills">
                                    <div className="circle-tech-skills">01</div>
                                    <div className="content-tech-skills">Spanish - native</div>
                                    <div className="logo-tech-skills">
                                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                        <g id="SVGRepo_iconCarrier"> <path d="M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12Z" stroke=" #fca55d" stroke-width="1.5"></path> <path opacity="0.5" d="M17.6713 6.2247C19.7734 5.81044 21.3248 5.95718 21.8291 6.76327C22.8403 8.37947 19.2594 12.0342 13.8309 14.9264C8.40242 17.8185 3.18203 18.8529 2.17085 17.2367C1.65519 16.4125 2.33376 15.0582 3.84259 13.5452" stroke=" #fca55d" stroke-width="1.5" stroke-linecap="round" stroke-dasharray="3.5 2.5"></path> </g></svg>
                                    </div>
                                </div>
                                <div className="timeline-item-tech-skills">
                                    <div className="circle-tech-skills">02</div>
                                    <div className="content-tech-skills">English - B2</div>
                                    <div className="logo-tech-skills">
                                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                        <g id="SVGRepo_iconCarrier"> <path d="M10.2768 16.5148C10.2815 16.405 10.4634 16.3613 10.5174 16.4571C10.7707 16.9068 11.2029 17.5682 11.6932 17.8689C12.1836 18.1696 12.969 18.2549 13.4847 18.2768C13.5945 18.2815 13.6381 18.4634 13.5423 18.5174C13.0926 18.7707 12.4313 19.2029 12.1306 19.6932C11.8299 20.1836 11.7446 20.969 11.7227 21.4847C11.718 21.5945 11.536 21.6381 11.4821 21.5423C11.2287 21.0926 10.7966 20.4313 10.3062 20.1306C9.81588 19.8299 9.03048 19.7446 8.51481 19.7227C8.40495 19.718 8.36133 19.536 8.45713 19.4821C8.90682 19.2287 9.56818 18.7966 9.86889 18.3062C10.1696 17.8159 10.2549 17.0305 10.2768 16.5148Z" fill="#fca55d"></path> <path opacity="0.5" d="M18.4919 15.5147C18.4834 15.4051 18.2916 15.3591 18.2343 15.453C18.062 15.7355 17.8135 16.0764 17.5374 16.2458C17.2612 16.4152 16.8446 16.482 16.5147 16.5075C16.4051 16.516 16.3591 16.7078 16.453 16.7651C16.7355 16.9374 17.0764 17.1858 17.2458 17.462C17.4152 17.7382 17.482 18.1548 17.5075 18.4847C17.516 18.5943 17.7078 18.6403 17.7651 18.5464C17.9374 18.2639 18.1858 17.923 18.462 17.7536C18.7382 17.5842 19.1548 17.5174 19.4847 17.4919C19.5943 17.4834 19.6403 17.2916 19.5464 17.2343C19.2639 17.062 18.923 16.8135 18.7536 16.5374C18.5842 16.2612 18.5174 15.8446 18.4919 15.5147Z" fill="#fca55d"></path> <path d="M14.7034 4.00181L14.4611 3.69574C13.5245 2.51266 13.0561 1.92112 12.5113 2.00845C11.9665 2.09577 11.7059 2.80412 11.1849 4.22083L11.0501 4.58735C10.902 4.98993 10.828 5.19122 10.686 5.33897C10.544 5.48671 10.3501 5.56417 9.96242 5.71911L9.60942 5.86016L9.36156 5.95933C8.16204 6.4406 7.55761 6.71331 7.48044 7.24324C7.39813 7.80849 7.97023 8.29205 9.11443 9.25915L9.41045 9.50935C9.7356 9.78417 9.89817 9.92158 9.99137 10.1089C10.0846 10.2962 10.0978 10.5121 10.1244 10.9441L10.1485 11.3373C10.2419 12.8574 10.2886 13.6174 10.7826 13.8794C11.2765 14.1414 11.8906 13.7319 13.1188 12.9129L13.1188 12.9129L13.4366 12.701C13.7856 12.4683 13.9601 12.3519 14.1597 12.32C14.3593 12.288 14.5613 12.344 14.9655 12.456L15.3334 12.558C16.7555 12.9522 17.4666 13.1493 17.8542 12.746C18.2418 12.3427 18.0493 11.6061 17.6641 10.1328L17.5645 9.75163C17.4551 9.33297 17.4003 9.12364 17.4305 8.91657C17.4606 8.70951 17.5723 8.52816 17.7955 8.16546L17.7955 8.16544L17.9987 7.83522C18.7843 6.55883 19.1771 5.92063 18.9227 5.40935C18.6682 4.89806 17.9351 4.85229 16.4689 4.76076L16.0896 4.73708C15.6729 4.71107 15.4646 4.69807 15.2836 4.60208C15.1027 4.5061 14.9696 4.338 14.7034 4.00181L14.7034 4.00181Z" fill="#fca55d"></path> <path opacity="0.5" d="M8.835 13.326C6.69772 14.3702 4.91931 16.024 4.24844 18.0002C3.49589 13.2926 4.53976 10.2526 6.21308 8.36328C6.35728 8.658 6.54466 8.902 6.71297 9.09269C7.06286 9.48911 7.56518 9.91347 8.07523 10.3444L8.44225 10.6545C8.51184 10.7134 8.56597 10.7592 8.61197 10.7989C8.61665 10.8632 8.62129 10.9383 8.62727 11.0357L8.65708 11.5212C8.69717 12.1761 8.7363 12.8155 8.835 13.326Z" fill="#fca55d"></path> </g></svg>
                                    </div>
                                </div>
                                <div className="timeline-item-tech-skills">
                                    <div className="circle-tech-skills">03</div>
                                    <div className="content-tech-skills">Portuguese - B1</div>
                                    <div className="logo-tech-skills">
                                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                        <g id="SVGRepo_iconCarrier"> <path opacity="0.5" d="M21.8382 11.1263L21.609 13.5616C21.2313 17.5742 21.0425 19.5805 19.8599 20.7902C18.6773 22 16.9048 22 13.3599 22H10.6401C7.09517 22 5.32271 22 4.14009 20.7902C2.95748 19.5805 2.76865 17.5742 2.391 13.5616L2.16181 11.1263C1.9818 9.2137 1.8918 8.25739 2.21899 7.86207C2.39598 7.64823 2.63666 7.5172 2.89399 7.4946C3.36968 7.45282 3.96708 8.1329 5.16187 9.49307C5.77977 10.1965 6.08872 10.5482 6.43337 10.6027C6.62434 10.6328 6.81892 10.6018 6.99526 10.5131C7.31351 10.3529 7.5257 9.91812 7.95007 9.04852L10.1869 4.46486C10.9888 2.82162 11.3898 2 12 2C12.6102 2 13.0112 2.82162 13.8131 4.46485L16.0499 9.04851C16.4743 9.91812 16.6865 10.3529 17.0047 10.5131C17.1811 10.6018 17.3757 10.6328 17.5666 10.6027C17.9113 10.5482 18.2202 10.1965 18.8381 9.49307C20.0329 8.1329 20.6303 7.45282 21.106 7.4946C21.3633 7.5172 21.604 7.64823 21.781 7.86207C22.1082 8.25739 22.0182 9.2137 21.8382 11.1263Z" fill="#fca55d"></path> <path d="M12.9524 12.6989L12.8541 12.5225C12.4741 11.8408 12.2841 11.5 12 11.5C11.7159 11.5 11.5259 11.8408 11.1459 12.5225L11.0476 12.6989C10.9397 12.8926 10.8857 12.9894 10.8015 13.0533C10.7173 13.1172 10.6125 13.141 10.4028 13.1884L10.2119 13.2316C9.47396 13.3986 9.10501 13.482 9.01723 13.7643C8.92945 14.0466 9.18097 14.3407 9.68403 14.929L9.81418 15.0812C9.95713 15.2483 10.0286 15.3319 10.0608 15.4353C10.0929 15.5387 10.0821 15.6502 10.0605 15.8733L10.0408 16.0763C9.96476 16.8612 9.92674 17.2536 10.1565 17.4281C10.3864 17.6025 10.7318 17.4435 11.4227 17.1254L11.4227 17.1253L11.6014 17.0431L11.6015 17.043C11.7978 16.9527 11.8959 16.9075 12 16.9075C12.1041 16.9075 12.2022 16.9527 12.3986 17.0431L12.3986 17.0431L12.5773 17.1254C13.2682 17.4435 13.6136 17.6025 13.8435 17.4281C14.0733 17.2536 14.0352 16.8612 13.9592 16.0763L13.9395 15.8733C13.9179 15.6502 13.9071 15.5387 13.9392 15.4353C13.9714 15.3319 14.0429 15.2483 14.1858 15.0812L14.316 14.929L14.316 14.929C14.819 14.3407 15.0706 14.0466 14.9828 13.7643C14.895 13.482 14.526 13.3986 13.7881 13.2316L13.5972 13.1884C13.3875 13.141 13.2827 13.1172 13.1985 13.0533C13.1143 12.9894 13.0603 12.8926 12.9524 12.6989Z" fill="#fca55d"></path> </g></svg>
                                    </div>
                                </div>
                            </div>
                    </div>

                </div>

            </div>
        </div>
    </>
  )
}
