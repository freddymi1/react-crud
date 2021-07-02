import React from 'react'

export const Pagination = ({postPerPage, totalePosts, paginate}) => {
    const numberPage = []

    for(let i = 1; i <= Math.ceil(totalePosts/postPerPage);i++){
        numberPage.push(i)
    }
    return (
        <nav>
            <ul className="pagination">
                {
                    numberPage.map(page => (
                        <li key={page} className="page-item">
                            <p onClick={()=> paginate(page)} className="page-link">
                                {page}
                            </p>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}
