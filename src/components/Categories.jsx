import React from "react";
function Categories(){

    const [activeIndex, setActiveIndex] = React.useState(0)

    const onClickCategory = (index) =>{
        setActiveIndex(index)
    }

    const categories = [
        'Домики',
        'Трубы',
        'Страховочные',
        'Двух-этажные',
        'Гамаки-норки',
        'Трех-этажные',
    ]

    return(
        <div className="categories">
            <ul>
                {
                    categories.map((value, index) =>
                        <li onClick={() => onClickCategory(index)} className={activeIndex === index ? 'active' : ''}>{value}</li>)
                }
            </ul>
        </div>
    )
}

export default Categories