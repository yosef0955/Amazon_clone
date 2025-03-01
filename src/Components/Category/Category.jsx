import React from "react";
import CategoryCard from "./CategoryCard.jsx";
import { categoryInfos } from "./categoryFullInfos";
import style from './Category.module.css'

function Category() {
    return (
        <section className={style.category_container}>
            {categoryInfos.map((infos) => (
                <CategoryCard key={infos.id} data={infos} />
            ))}
        </section>
    );
}

export default Category;
