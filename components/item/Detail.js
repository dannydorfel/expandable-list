import React from 'react'
import ReactDOM from 'react-dom'
import shallowCompare from 'react-addons-shallow-compare'

import styles from './detail.css'
import classnames from 'classnames'

const Detail = React.createClass({
    getInitialState() {
        return {
            overflowTop: false,
            overflowBottom: false,
            overflowScreen: false
        }
    },

    scrollHandler() {
        var node = ReactDOM.findDOMNode(this);
        var clientHeight = document.body.clientHeight;

        var rect = node.getBoundingClientRect();

        var absoluteTop, absoluteBottom;
        var overflowBottom = rect.bottom >= clientHeight;
        var overflowTop = rect.top <= 0;
        var offScreen = rect.bottom <= 0 || rect.top >= clientHeight;

        if (rect.bottom <= this._title.clientHeight) {
            overflowTop = false;
            absoluteTop = true;
        }

        if (rect.top >= clientHeight - this._title.clientHeight * 2 - this._footer.clientHeight) {
            overflowBottom = false;
            absoluteBottom = true;
        }

        if (this.state.overflowTop !== overflowTop
            || this.state.overflowBottom !== overflowBottom
            || this.state.offScreen !== offScreen
        ) {
            this.setState({overflowTop, absoluteTop, overflowBottom, absoluteBottom, offScreen});
        }
    },

    componentDidMount() {
        window.addEventListener('scroll', this.scrollHandler);
        window.addEventListener('wheel', this.scrollHandler);
        window.addEventListener('touchmove', this.scrollHandler);
        this.scrollHandler();
    },

    componentWillUnmount() {
        window.removeEventListener('scroll', this.scrollHandler)
        window.removeEventListener('wheel', this.scrollHandler)
        window.removeEventListener('touchmove', this.scrollHandler)
    },

    shouldComponentUpdate(nextProps, nextState) {
        return shallowCompare(this, nextProps, nextState);
    },

    render() {
        var {data} = this.props;

        return (
            <div className={classnames(styles.root, {
                [styles.titleFixed]: this.state.overflowTop,
                [styles.absoluteTop]: this.state.absoluteTop,
                [styles.footerFixed]: this.state.overflowBottom,
                [styles.absoluteBottom]: this.state.absoluteBottom
            })}>
                <header ref={c => this._title = c} className={styles.title} onClick={this.props.deselect}>
                    {data.title}
                </header>
                <div role="description" ref={c => this._description = c} className={styles.description}>
                    {data.description}
                </div>
                <footer ref={c => this._footer = c} className={styles.footer}>
                    Testerdetest
                </footer>
            </div>

        )
    }
});

export default Detail
