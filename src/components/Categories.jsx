import React, {useState} from "react";

function Categories({ value, onChangeCategory }) {
    console.log(value)
    const categories = ["Всі", "М'ясні", "Вегетаріанські", "Гриль", "Гострі"];


    //Old state from categories component
    // const [activeIndex, setActiveIndex] = useState(0);
    // const onClickCategory = (index) => {
    //   setActiveIndex(index);
    // }

    return (
        <div className="categories">
            <ul>
                {
                    categories.map((categoryName, index) => (
                        <li key={index} onClick={() => onChangeCategory(index)}
                            className={value === index ? "active" : ''}>{categoryName}</li>)
                    )
                }
            </ul>
        </div>
    );
}

export default Categories;
