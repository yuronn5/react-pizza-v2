import React, {useState} from "react";

function Categories() {
    const categories = ["Всі", "М'ясні", "Вегетаріанські", "Гриль", "Гострі", "Закриті"];

    const [activeIndex, setActiveIndex] = useState(0);
    
    const onClickCategory = (index) => {
      setActiveIndex(index);
    }

    return (
        <div className="categories">
            <ul>
                {
                    categories.map((value, index) => (
                        <li key={index} onClick={() => onClickCategory(index)}
                            className={activeIndex === index ? "active" : ''}>{value}</li>)
                    )
                }
            </ul>
        </div>
    );
}

export default Categories;
