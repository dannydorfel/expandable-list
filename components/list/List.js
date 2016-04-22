import React from 'react'
import shallowCompare from 'react-addons-shallow-compare';

import Section from './ListSection'
import ListItem from './ListItem'

import styles from './list.css'

const List = React.createClass({

    shouldComponentUpdate(nextProps, nextState) {
        return shallowCompare(this, nextProps, nextState);
    },

    getInitialState() {
        return {
            selected: null,
            data: []
        };
    },

    componentDidMount() {
        var i, j, sections = [], chunk = 5, {data} = this.props, length = data.length;

        for (i = 0, j = length; i < j; i += chunk) {
            sections.push(this.props.data.slice(i, i + chunk));
        }

        this.setState({data: sections});
    },

    handleSelect(id) {
        if (! this.state.selected || (id !== this.state.selected)) {
            this.setState({
                selected: id,
                overflowTop: false,
                overflowBottom: false
            });
        } else {
            this.setState({selected: null});
        }
    },

    render() {
        const {data} = this.state;

        var i,j,sections = [], chunk = 5, length = this.props.data.length;

        for (i = 0, j = length; i < j; i += chunk) {
            sections.push(this.props.data.slice(i, i + chunk));
        }

        i = 0;

        const Collapsed = this.props.collapsed;
        const Detail = this.props.detail;

        return (
            <div className={styles.root}>
                {data.map(items => (
                    <Section key={i++} header="Section header">
                        {items.map(item => (
                            <ListItem key={item.id}
                                      ref={"item_" + item.id}
                                      data={item}
                                      collapsed={Collapsed}
                                      detail={Detail}
                                      selected={this.state.selected == item.id}
                                      select={this.handleSelect.bind(this, item.id)}/>
                        ))}
                    </Section>
                ))}
            </div>
        );
    }
});

export default List
