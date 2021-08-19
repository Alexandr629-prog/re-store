import React, {useEffect} from 'react';
import withBookstoreService from "../hoc/with-bookstore-service";

import './pagination.css'
import {useDispatch, useSelector} from "react-redux";
import { setCurrentPage } from "../../actions";
import {createPages} from "../../utils/create-pages";

const Pagination = (props) => {
    const currentPage = useSelector(state => state.bookList.currentPage);
    const perPage = useSelector(state => state.bookList.perPage)
    const totalBooks = useSelector(state => state.bookList.totalBooks);
    const loading = useSelector(state => state.bookList.loading);

    const dispatch = useDispatch();

    const onTogglePage = (page)=>{
            dispatch(setCurrentPage(page));
            //props.onPageSelected(''+page);
    }


    const pages = [];

    const countPages = Math.ceil(totalBooks/perPage);
    createPages(pages,countPages, perPage);

    useEffect(()=>{
        props.onPageSelected(`/page/${currentPage}/`);
    }, [currentPage])

    if(loading){
        return null
    }

    return (
            <div className={"pages"}>
                {pages.map((page) => {
                    return <span
                        onClick={() => {
                            onTogglePage(page);
                        }

                        } key={page}

                        className={page == currentPage ? "current-page" : "page"}>{page}</span>

                })}
            </div>
    )

};

export default withBookstoreService()(Pagination);