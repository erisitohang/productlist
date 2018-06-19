import React, { Component } from 'react';
import TreeNode from './TreeNode';
import {CONST_CATEGORY} from '../constants';

class Category extends Component {
    render() {
        const data = CONST_CATEGORY.ITEMS;
        const nodes = data.map((cat) => <TreeNode node={cat} key={cat.name} category={cat.items}/>);
        return (
            <div>
                <h4>Category</h4>
                <ul>{nodes}</ul>
            </div>
        );
    }
}

export default Category;
