import NextHead from 'next/head'
import { string } from 'prop-types'
import {Wrapper} from '.';
import { Meta } from '../utils';

const defaultDescription = ''
const defaultOGURL = ''
const defaultOGImage = ''

const Head = (props) => (
	<NextHead>
		<meta charSet="UTF-8" />
		<title>{props.title || ''}</title>
		<meta name="description" content={props.description || defaultDescription} />
		<meta charSet="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
		<link rel="stylesheet" href="https://bootswatch.com/4/cerulean/bootstrap.min.css" />
		<link rel="stylesheet" href="/static/styles/styles.css" />
		<meta property="og:url" content={props.url || defaultOGURL} />
		<meta property="og:title" content={props.title || ''} />
		<meta property="og:description" content={props.description || defaultDescription} />
		<meta name="twitter:site" content={props.url || defaultOGURL} />
		<meta name="twitter:card" content="summary_large_image" />
		<meta name="twitter:image" content={props.ogImage || defaultOGImage} />
		<meta property="og:image" content={props.ogImage || defaultOGImage} />
		<meta property="og:image:width" content="1200" />
		<meta property="og:image:height" content="630" />
	</NextHead>
)

Wrapper.propTypes = Meta;

export default Head
