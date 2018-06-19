import { Head, Footer, Nav } from './';
import { string } from 'prop-types';
import Router from 'next/router';
import { Meta } from '../utils';

Router.onRouteChangeComplete = url => {

};
const title = '';
const Wrapper = (props) =>
    (
        <div>
            <Head
                title={props.title}
                description={props.title}
                ogImage={props.ogImage}
            />
            <header>
                <Nav/>
            </header>

            <main className={'container'} role="main">
                <div className={'row'}>
                    <div className={'col-md-12 blog-main'}>
                        {props.children}
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    );
Wrapper.propTypes = Meta;
export default Wrapper;
