import React from 'react'

import classnames from 'classnames'
import styles from './list-item.css'

const ListItem = React.createClass({

    render() {
        var {data, selected, select, overflowTop, overflowBottom} = this.props;
        const Collapsed = this.props.collapsed;
        const Detail = this.props.detail;

        return (
            <div data-type="list-item" className={classnames(styles.root, {[styles.selected]: this.props.selected})}>
                <div className={styles.innerBox}>
                    <div role="collapsed-view" onClick={select} className={styles.collapsed}>
                        {! selected ? <Collapsed key="collapsed" data={data}/> : null}
                    </div>
                    <div role="detail-view" className={styles.detail}>
                        {selected ? <Detail key="detail" data={data} deselect={select} overflowTop={overflowTop} overflowBottom={overflowBottom} /> : null}
                    </div>
                </div>
            </div>
        )
    }
});

export default ListItem
