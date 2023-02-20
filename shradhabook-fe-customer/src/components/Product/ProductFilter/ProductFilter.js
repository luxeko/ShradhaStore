import React from 'react';
import Slider from "@mui/material/Slider";
import {AiOutlineMinus} from "react-icons/ai";
import {BiRefresh} from "react-icons/bi";
import parse from "html-react-parser";
import {getListAuthor} from "../../../services/apiService";

const ProductFilter = (props) => {
    const {
        handleUpdatePrice,
        renderStar,
        stars,
        price,
        handleFilterByPrice,
        listAuthor,
        handleOnClickAuthor,
        listCategory,
        handleOnClickCategory,
        activeCategory,
        activeAuthor,
        handleRefreshCategory,
        handleRefreshAuthor,
    } = props

    return (
        <div className={`product_filter`}>
            <div className={`shadow-lg product_genre rounded-2xl mb-8`}>
                <div className={`flex items-center justify-between title border-b-[1px] mx-auto px-10 py-4`}>
                    <div
                        className={`text-lg text-[#000000] font-medium leading-normal`}>Genre
                    </div>
                    <div onClick={handleRefreshCategory} title={`Refresh`} className={`group/refresh flex items-center cursor-pointer bg-blackColor hover:bg-dangerColor-default_2 text-whiteColor py-1 px-1 rounded text-xl`}>
                        <BiRefresh className={`transform duration-700 group-hover/refresh:rotate-360`}/>
                    </div>
                </div>
                <div className={`mx-auto px-10 py-4`}>
                    <ul className={`text-[#444444]`}>
                        {
                            listCategory.map((item, index) => {
                                return <li key={index}
                                           className={`${activeCategory === `category_${item.category.id}` ? 'text-dangerColor-default_2': ''} duration-300 mb-1 text-sm leading-normal flex items-center justify-between font-light hover:text-dangerColor-default_2`}>
                                    <div onClick={() => handleOnClickCategory(item.category.name, item.category.id)}
                                         className={`${activeCategory === `category_${item.category.id}` ? `before:content-['☑']`: `before:content-['☐']`} cursor-pointer flex items-center before:text-xl before:mr-[8px]`}>
                                        {item.category.name}
                                    </div>
                                    <div>({item.quantity})</div>
                                </li>
                            })
                        }
                    </ul>
                </div>
            </div>
            <div className={`shadow-lg product_author rounded-2xl mb-8`}>
                <div className={`flex items-center justify-between title border-b-[1px] mx-auto px-10 py-4`}>
                    <div
                        className={`text-lg text-[#000000] font-medium leading-normal`}>Authors
                    </div>
                    <div onClick={handleRefreshAuthor} title={`Refresh`} className={`group/refresh flex items-center cursor-pointer bg-blackColor hover:bg-dangerColor-default_2 text-whiteColor py-1 px-1 rounded text-xl`}>
                        <BiRefresh className={`transform duration-700 group-hover/refresh:rotate-360`}/>
                    </div>
                </div>
                <div className={`mx-auto px-10 py-4`}>
                    <ul className={`text-[#444444]`}>
                        {
                            listAuthor.map((item, index) => {
                                return <li key={index}
                                           className={`${activeAuthor === `author_${item.author.id}` ? 'text-dangerColor-default_2': ''} duration-300 mb-1 text-sm leading-normal flex items-center justify-between font-light hover:text-dangerColor-default_2`}>
                                    <div onClick={() => handleOnClickAuthor(item.author.name, item.author.id)}
                                         className={`${activeAuthor === `author_${item.author.id}` ? `before:content-['☑']`: `before:content-['☐']`} cursor-pointer flex items-center before:text-xl before:mr-[8px]`}>
                                        {item.author.name}
                                    </div>
                                    <div>({item.quantity})</div>
                                </li>
                            })
                        }
                    </ul>
                </div>
            </div>
            <div className={`shadow-lg product_filter_price rounded-2xl mb-8`}>
                <div
                    className={`text-lg title border-b-[1px] mx-auto px-10 py-4 text-[#000000] font-medium leading-normal`}>Filter
                    By Price
                </div>
                <div className={`mx-auto px-10 pt-4`}>
                    <Slider
                        value={price}
                        onChange={(e, data, activeThumb) => handleUpdatePrice(e, data, activeThumb)}
                        getAriaLabel={() => 'Minimum distance'}
                        disableSwap
                        min={0}
                        max={10000}
                        className={`text-black`}
                        valueLabelDisplay="off"
                        sx={{
                            color: '#000', '& .MuiSlider-rail': {
                                background: '#999', height: '2px'
                            }, '& .MuiSlider-track': {
                                borderRadius: '16px', background: '#000', height: '2px'
                            }, '& .MuiSlider-thumb': {
                                background: '#fff', width: '15px', height: '15px', border: '2px solid #000'
                            },
                        }}
                    />
                    <div className={`text-[#999999] leading-normal text-xs font-light flex items-center`}>
                        Price:
                        <div className={`flex items-center text-black text-sm`}>
                            <span className={`mx-1`}>${price[0]}</span><AiOutlineMinus/> <span
                            className={`mx-1`}>${price[1]}</span>
                        </div>
                    </div>

                </div>
                <button onClick={handleFilterByPrice}
                        className={`uppercase mx-auto px-10 pb-4 pt-4 underline text-xs font-semibold hover:text-dangerColor-default_2 transition duration-300 tracking-wider`}>filter
                </button>
            </div>
            <div className={`shadow-lg product_rating rounded-2xl mb-8`}>
                <div className={`flex items-center justify-between title border-b-[1px] mx-auto px-10 py-4`}>
                    <div
                        className={`text-lg text-[#000000] font-medium leading-normal`}>Review ratings
                    </div>
                    <div title={`Refresh`} className={`group/refresh flex items-center cursor-pointer bg-blackColor hover:bg-dangerColor-default_2 text-whiteColor py-1 px-1 rounded text-xl`}>
                        <BiRefresh className={`transform duration-700 group-hover/refresh:rotate-360`}/>
                    </div>
                </div>
                <div className={`mx-auto px-10 py-4`}>
                    {stars.map((item, index) => {
                        return <div className="flex items-center" key={index}>
                            {parse(renderStar(item.star))}
                            <span className="w-1 h-1 mx-3 bg-gray-500 rounded-full dark:bg-gray-400"></span>
                            <a href="src/components/Product#"
                               className="text-sm font-medium text-gray-900 underline hover:no-underline hover:text-dangerColor-default_2 dark:text-white duration-300">
                                {item.count} products
                            </a>
                        </div>
                    })}
                </div>
            </div>
        </div>
    );
};

export default ProductFilter;