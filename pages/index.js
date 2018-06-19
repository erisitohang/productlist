import { Component } from 'react';
import { Provider } from 'mobx-react';
import { Wrapper, Products, Sort, Filter } from '../components';
import { initProductStore } from '../store/product';
import ReactPaginate from 'react-paginate';
import Router from 'next/router';
import { updateQueryStringParameter } from '../lib/common';
import Category from '../components/Category';

class App extends Component {
    static async getInitialProps(context) {
        const isServer = !!context.req;
        const store = initProductStore(isServer);
        const { page, sort, dir, cat, price_min, price_max } = context.query;
        await store.setQuery(
            {
                page: page,
                sort: sort,
                dir: dir,
                cat: cat,
                price_min: price_min,
                price_max: price_max
            }
        );
        await store.fetchProducts();
        return {
            products: store.products,
            paginate: store.paginate,
            error: store.error,
            query: store.query,
            isServer
        };
    }

    constructor(props) {
        super(props);
        this.store = initProductStore(
            props.isServer,
            props.products,
            props.paginate,
            props.error
        );

        this.store.query = props.query;
    }

    handlePageClick = (data) => {
        let selected = data.selected + 1;
        const query = updateQueryStringParameter(Router.asPath, 'page', selected);
        Router.push(query);
    };

    render() {
        let page = <h4>No Products</h4>;
        if (this.props.products.length > 0) {
            page = <div>
                <Provider productStore={this.store}>
                    <Products/>
                </Provider>
                <div className="my-3 p-3 bg-white rounded box-shadow float-right">
                    <ReactPaginate previousLabel={'previous'}
                                   nextLabel={'next'}
                                   forcePage={this.props.paginate.page - 1}
                                   breakLabel={<a className="page-link">...</a>}
                                   breakClassName={'break-me'}
                                   pageCount={this.props.paginate.pages}
                                   marginPagesDisplayed={2}
                                   pageRangeDisplayed={5}
                                   onPageChange={this.handlePageClick}
                                   containerClassName={'pagination'}
                                   previousClassName={'page-item'}
                                   pageClassName={'page-item'}
                                   pageLinkClassName={'page-link'}
                                   previousLinkClassName={'page-link'}
                                   nextLinkClassName={'page-link'}
                                   activeClassName={'active'}/>
                </div>
            </div>;

        }
        return (
            <Wrapper title='Home'>
                <Sort/>
                <div className={'row'}>
                    <aside className={'col-md-3'}>
                        <Filter/>
                    </aside>
                    <aside className={'col-md-9'}>
                        {page}
                    </aside>
                </div>
            </Wrapper>
        );
    };
}

export default App;
